import * as React from 'react';
import { createElement, FC, PropsWithChildren } from 'react';

import { systemToComponent } from '@virtuoso.dev/react-urx';
import {
  compose,
  distinctUntilChanged,
  map,
  noop,
  pipe,
  statefulStream,
  statefulStreamFromEmitter,
  system,
  tup,
} from '@virtuoso.dev/urx';

import useChangedListContentsSizes from './hooks/useChangedChildSizes';
import useSize from './hooks/useSize';
import useWindowViewportRectRef from './hooks/useWindowViewportRect';
import {
  ComputeItemKey,
  FixedHeaderContent,
  ItemContent,
  TableComponents,
  TableRootProps,
} from './interfaces';
import {
  buildScroller,
  buildWindowScroller,
  contextPropIfNotDomElement,
  identity,
  viewportStyle,
} from './List';
import { listSystem } from './listSystem';
import conditionalFlushSync from './utils/conditionalFlushSync';
import { correctItemSize } from './utils/correctItemSize';

const tableComponentPropsSystem = system(() => {
  const itemContent = statefulStream<ItemContent<any, unknown>>(
    (index: number) => <td>Item ${index}</td>,
  );
  const context = statefulStream<unknown>(null);
  const fixedHeaderContent = statefulStream<FixedHeaderContent>(null);
  const components = statefulStream<TableComponents>({});
  const computeItemKey = statefulStream<ComputeItemKey<any, unknown>>(identity);
  const scrollerRef =
    statefulStream<(ref: HTMLElement | Window | null) => void>(noop);

  const distinctProp = <K extends keyof TableComponents>(
    propName: K,
    defaultValue:
      | TableComponents[K]
      | null
      | 'thead'
      | 'table'
      | 'tbody'
      | 'tr'
      | 'div' = null,
  ) => {
    return statefulStreamFromEmitter(
      pipe(
        components,
        map((components) => components[propName]),
        distinctUntilChanged(),
      ),
      defaultValue,
    );
  };

  return {
    context,
    itemContent,
    fixedHeaderContent,
    components,
    computeItemKey,
    scrollerRef,
    TableComponent: distinctProp('Table', 'table'),
    TableHeadComponent: distinctProp('TableHead', 'thead'),
    TableBodyComponent: distinctProp('TableBody', 'tbody'),
    TableRowComponent: distinctProp('TableRow', 'tr'),
    ScrollerComponent: distinctProp('Scroller', 'div'),
    EmptyPlaceholder: distinctProp('EmptyPlaceholder'),
    ScrollSeekPlaceholder: distinctProp('ScrollSeekPlaceholder'),
    FillerRow: distinctProp('FillerRow'),
  };
});

const combinedSystem = system(([listSystem, propsSystem]) => {
  return { ...listSystem, ...propsSystem };
}, tup(listSystem, tableComponentPropsSystem));

const DefaultScrollSeekPlaceholder = ({ height }: { height: number }) => (
  <tr>
    <td style={{ height }} />
  </tr>
);

const DefaultFillerRow = ({ height }: { height: number }) => (
  <tr>
    <td style={{ height, padding: 0, border: 0 }} />
  </tr>
);

export const Items = React.memo(function VirtuosoItems() {
  const listState = useEmitterValue('listState');
  const [deviation, setDeviation] = React.useState(0);
  const react18ConcurrentRendering = useEmitterValue(
    'react18ConcurrentRendering',
  );
  useEmitter('deviation', (value) => {
    if (deviation !== value) {
      conditionalFlushSync(react18ConcurrentRendering)(() =>
        setDeviation(value),
      );
    }
  });
  const sizeRanges = usePublisher('sizeRanges');
  const useWindowScroll = useEmitterValue('useWindowScroll');
  const customScrollParent = useEmitterValue('customScrollParent');
  const windowScrollContainerStateCallback = usePublisher(
    'windowScrollContainerState',
  );
  const _scrollContainerStateCallback = usePublisher('scrollContainerState');
  const scrollContainerStateCallback =
    customScrollParent || useWindowScroll
      ? windowScrollContainerStateCallback
      : _scrollContainerStateCallback;
  const itemContent = useEmitterValue('itemContent');
  const trackItemSizes = useEmitterValue('trackItemSizes');
  const itemSize = useEmitterValue('itemSize');
  const log = useEmitterValue('log');

  const ref = useChangedListContentsSizes(
    sizeRanges,
    itemSize,
    trackItemSizes,
    scrollContainerStateCallback,
    log,
    customScrollParent,
  );
  const EmptyPlaceholder = useEmitterValue('EmptyPlaceholder');
  const ScrollSeekPlaceholder =
    useEmitterValue('ScrollSeekPlaceholder') || DefaultScrollSeekPlaceholder;
  const FillerRow = useEmitterValue('FillerRow') || DefaultFillerRow;
  const TableBodyComponent = useEmitterValue('TableBodyComponent')!;
  const TableRowComponent = useEmitterValue('TableRowComponent')!;
  const computeItemKey = useEmitterValue('computeItemKey');
  const isSeeking = useEmitterValue('isSeeking');
  const paddingTopAddition = useEmitterValue('paddingTopAddition');
  const firstItemIndex = useEmitterValue('firstItemIndex');
  const statefulTotalCount = useEmitterValue('statefulTotalCount');
  const context = useEmitterValue('context');

  if (statefulTotalCount === 0 && EmptyPlaceholder) {
    return createElement(
      EmptyPlaceholder,
      contextPropIfNotDomElement(EmptyPlaceholder, context),
    );
  }

  const paddingTop = listState!.offsetTop + paddingTopAddition + deviation;
  const paddingBottom = listState!.offsetBottom;

  const paddingTopEl =
    paddingTop > 0 ? <FillerRow height={paddingTop} key="padding-top" /> : null;

  const paddingBottomEl =
    paddingBottom > 0 ? (
      <FillerRow height={paddingBottom} key="padding-bottom" />
    ) : null;

  const items = listState!.items.map((item) => {
    const index = item.originalIndex!;
    const key = computeItemKey(index + firstItemIndex, item.data, context);

    if (isSeeking) {
      return createElement(ScrollSeekPlaceholder, {
        ...contextPropIfNotDomElement(ScrollSeekPlaceholder, context),
        key,
        index: item.index,
        height: item.size,
        type: item.type || 'item',
      });
    }
    return createElement(
      TableRowComponent,
      {
        ...contextPropIfNotDomElement(TableRowComponent, context),
        key,
        'data-index': index,
        'data-known-size': item.size,
        'data-item-index': item.index,
        style: { overflowAnchor: 'none' },
      } as any,
      itemContent(item.index, item.data, context),
    );
  });

  return createElement(
    TableBodyComponent,
    {
      ref,
      'data-test-id': 'virtuoso-item-list',
      ...contextPropIfNotDomElement(TableBodyComponent, context),
    },
    [paddingTopEl, ...items, paddingBottomEl],
  );
});

export interface Hooks {
  usePublisher: typeof usePublisher;
  useEmitterValue: typeof useEmitterValue;
  useEmitter: typeof useEmitter;
}

const Viewport: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const viewportHeight = usePublisher('viewportHeight');
  const viewportRef = useSize(
    compose(viewportHeight, (el) => correctItemSize(el, 'height')),
  );

  return (
    <div style={viewportStyle} ref={viewportRef} data-viewport-type="element">
      {children}
    </div>
  );
};

const WindowViewport: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const windowViewportRect = usePublisher('windowViewportRect');
  const customScrollParent = useEmitterValue('customScrollParent');
  const viewportRef = useWindowViewportRectRef(
    windowViewportRect,
    customScrollParent,
  );

  return (
    <div ref={viewportRef} style={viewportStyle} data-viewport-type="window">
      {children}
    </div>
  );
};

const TableRoot: FC<TableRootProps> = React.memo(function TableVirtuosoRoot(
  props,
) {
  const useWindowScroll = useEmitterValue('useWindowScroll');
  const customScrollParent = useEmitterValue('customScrollParent');
  const fixedHeaderHeight = usePublisher('fixedHeaderHeight');
  const fixedHeaderContent = useEmitterValue('fixedHeaderContent');
  const context = useEmitterValue('context');
  const theadRef = useSize(
    compose(fixedHeaderHeight, (el) => correctItemSize(el, 'height')),
  );
  const TheScroller =
    customScrollParent || useWindowScroll ? WindowScroller : Scroller;
  const TheViewport =
    customScrollParent || useWindowScroll ? WindowViewport : Viewport;
  const TheTable = useEmitterValue('TableComponent');
  const TheTHead = useEmitterValue('TableHeadComponent');

  const theHead = fixedHeaderContent
    ? React.createElement(
        TheTHead!,
        {
          key: 'TableHead',
          style: { zIndex: 1, position: 'sticky', top: 0 },
          ref: theadRef,
          ...contextPropIfNotDomElement(TheTHead, context),
        } as any,
        fixedHeaderContent(),
      )
    : null;

  return (
    <TheScroller {...props}>
      <TheViewport>
        {React.createElement(
          TheTable!,
          {
            style: { borderSpacing: 0 },
            ...contextPropIfNotDomElement(TheTable, context),
          } as any,
          [theHead, <Items key="TableBody" />],
        )}
      </TheViewport>
    </TheScroller>
  );
});

export const {
  Component: Table,
  usePublisher,
  useEmitterValue,
  useEmitter,
} = systemToComponent(
  combinedSystem,
  {
    required: {},
    optional: {
      context: 'context',
      followOutput: 'followOutput',
      firstItemIndex: 'firstItemIndex',
      itemContent: 'itemContent',
      fixedHeaderContent: 'fixedHeaderContent',
      overscan: 'overscan',
      increaseViewportBy: 'increaseViewportBy',
      totalCount: 'totalCount',
      topItemCount: 'topItemCount',
      initialTopMostItemIndex: 'initialTopMostItemIndex',
      components: 'components',
      groupCounts: 'groupCounts',
      atBottomThreshold: 'atBottomThreshold',
      computeItemKey: 'computeItemKey',
      defaultItemHeight: 'defaultItemHeight',
      fixedItemHeight: 'fixedItemHeight',
      itemSize: 'itemSize',
      scrollSeekConfiguration: 'scrollSeekConfiguration',
      data: 'data',
      initialItemCount: 'initialItemCount',
      initialScrollTop: 'initialScrollTop',
      alignToBottom: 'alignToBottom',
      useWindowScroll: 'useWindowScroll',
      customScrollParent: 'customScrollParent',
      scrollerRef: 'scrollerRef',
      logLevel: 'logLevel',
      react18ConcurrentRendering: 'react18ConcurrentRendering',
    },
    methods: {
      scrollToIndex: 'scrollToIndex',
      scrollIntoView: 'scrollIntoView',
      scrollTo: 'scrollTo',
      scrollBy: 'scrollBy',
    },
    events: {
      isScrolling: 'isScrolling',
      endReached: 'endReached',
      startReached: 'startReached',
      rangeChanged: 'rangeChanged',
      atBottomStateChange: 'atBottomStateChange',
      atTopStateChange: 'atTopStateChange',
      totalListHeightChanged: 'totalListHeightChanged',
      itemsRendered: 'itemsRendered',
      groupIndices: 'groupIndices',
    },
  },
  TableRoot,
);

const Scroller = buildScroller({ usePublisher, useEmitterValue, useEmitter });
const WindowScroller = buildWindowScroller({
  usePublisher,
  useEmitterValue,
  useEmitter,
});
