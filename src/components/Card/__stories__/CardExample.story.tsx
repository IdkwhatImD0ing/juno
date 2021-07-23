import React, { useState, FunctionComponent, useCallback } from 'react';
import { Meta, Story } from '@storybook/react';
import { styled, spacing, palette2, px } from '../../../foundation';
import { RcTypography } from '../../Typography';
import { RcIcon } from '../../Icon';
import { switchToControlKnobs } from '../../../storybook';
import { RcCard, RcCardProps } from '../Card';
import { RcCardActionArea, RcCardActionAreaProps } from '../CardActionArea';
import { RcCardContent } from '../CardContent';
import {
  ExternalLink,
  Pin,
  Delete,
  Edit,
  MoreVert,
  GoogleDoc,
} from '../../../icon';
import { RcCardHoverActions } from '../CardHoverActions';
import { RcMenuItemProps } from '../../Menu/deprecated';
import { RcMenuProps, RcMenuItem, RcMenu } from '../../Menu';
import { RcIconButton, RcButton, RcIconButtonProps } from '../../Buttons';
import { RcCardActions } from '../CardActions';
import { RcCardMedia } from '../CardMedia';
import { RcGridProps, RcGrid } from '../../Grid';
import { RcResponsive } from '../../Responsive';

export default {
  title: '🚀 Cleanup Components/Cards/CardExample',
} as Meta;

const CardCtaArea = styled.div`
  ${RcTypography} {
    display: flex;
    flex-wrap: nowrap;
    margin-top: ${spacing(4)};
    ${RcIcon} {
      margin-left: ${spacing(1)};
      font-size: 14px;
    }
  }
`;

const CardSubTitle = styled(RcTypography)`
  margin-bottom: ${spacing(2)};
`;

const CardTitle = styled(RcTypography)``;

const CardBody = styled(RcTypography)`
  margin-top: ${spacing(2)};
  min-height: 44px;
`;

export const SimpleCardExample: Story<{}> = () => {
  switchToControlKnobs();

  const onClick = () =>
    window.open('https://en.wikipedia.org/wiki/Boat', '_blank');

  return (
    <div style={{ width: 360 }}>
      <RcCard>
        <RcCardActionArea onClick={onClick}>
          <RcCardContent>
            <CardSubTitle variant="caption2" color="neutral.f04">
              in its simplest form
            </CardSubTitle>
            <CardTitle variant="title2" color="neutral.f06">
              Simple
            </CardTitle>
            <CardBody variant="body1" color="neutral.f04">
              This is a simple card. It has everything a card has except media
              and an icon.
            </CardBody>
            <CardCtaArea>
              <RcTypography variant="caption2" color="neutral.f05">
                Simple CTA
                <RcIcon symbol={ExternalLink} color="neutral.f04" />
              </RcTypography>
            </CardCtaArea>
          </RcCardContent>
        </RcCardActionArea>
      </RcCard>
    </div>
  );
};

const stopPropagation = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event.stopPropagation();
};

const logAndStopPropgation = (text: string) => {
  return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(text);
    stopPropagation(e);
  };
};

const RcCardWithHoverActions = styled(RcCard)`
  width: 314px;
  ${RcCardHoverActions} {
    display: flex-end;
    align-content: right;
    ${RcIconButton} {
      background-color: ${palette2('neutral', 'b01')};
      border-radius: 50%;
      margin-left: auto;
      margin-right: ${spacing(2)};
    }
  }
`;

const CardWithHoverActions: FunctionComponent<RcCardProps &
  RcCardActionAreaProps> = (props) => {
  const { onClick, children } = props;
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const moreMenusItemProps = [
    {
      symbol: Pin,
      tooltip: 'Pin',
      onClick: logAndStopPropgation('Pin'),
    },
    {
      symbol: Delete,
      tooltip: 'Delete',
      onClick: logAndStopPropgation('Delete'),
    },
  ];

  const onEnter = useCallback(() => {
    setIsMoreMenuOpen(true);
  }, [setIsMoreMenuOpen]);
  const onExit = useCallback(() => {
    setIsMoreMenuOpen(false);
  }, [setIsMoreMenuOpen]);

  return (
    <RcCardWithHoverActions variant="outlined">
      <RcCardActionArea component="div" onClick={onClick}>
        <RcCardHoverActions
          visible={isMoreMenuOpen}
          onClick={stopPropagation}
          onMouseDown={stopPropagation}
        >
          <RcIconButton
            onMouseDown={stopPropagation}
            size="small"
            variant="contained"
            color="neutral.b01"
            title="Edit"
            onClick={logAndStopPropgation('HoverActionButton:onEditClick')}
            symbol={Edit}
          />
          <CardHoverMoreButton
            title="More"
            symbol={MoreVert}
            onEnter={onEnter}
            onExit={onExit}
            menuItemProps={moreMenusItemProps}
          />
        </RcCardHoverActions>
        {children}
        <RcCardActions>
          <RcButton
            onClick={logAndStopPropgation('Toast')}
            onMouseDown={stopPropagation}
            color="interactive.f01"
          >
            Toast
          </RcButton>
          <RcButton
            onClick={logAndStopPropgation('Boast')}
            onMouseDown={stopPropagation}
            variant="outlined"
          >
            Boast
          </RcButton>
        </RcCardActions>
      </RcCardActionArea>
    </RcCardWithHoverActions>
  );
};

type CardHoverMoreButtonProps = RcIconButtonProps & {
  menuItemProps: RcMenuItemProps & { tooltip: string }[];
} & Pick<RcMenuProps, 'onEnter' | 'onExit'>;

const CardHoverMoreButton: FunctionComponent<CardHoverMoreButtonProps> = (
  props,
) => {
  const { menuItemProps, onEnter, onExit, ...rest } = props;

  const menuItemComps = menuItemProps.map(({ tooltip, ...rests }) => (
    <RcMenuItem {...rests}>{tooltip}</RcMenuItem>
  ));

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    stopPropagation(event);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <RcIconButton
        onMouseDown={stopPropagation}
        size="small"
        variant="contained"
        color="neutral.b01"
        onClick={handleClick}
        {...rest}
      />
      <RcMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        onEnter={onEnter}
        onExit={onExit}
        autoClose
      >
        {menuItemComps}
      </RcMenu>
    </>
  );
};

export const MediaCardExample: Story<{}> = () => {
  switchToControlKnobs();

  const onClick = () =>
    window.open('https://en.wikipedia.org/wiki/Boat', '_blank');

  return (
    <>
      <CardWithHoverActions onClick={onClick}>
        <RcCardMedia
          image="https://live.staticflickr.com/5126/5369581593_b9e2ec903c_n.jpg"
          style={{ height: 160 }}
        />
        <RcCardContent>
          <CardSubTitle variant="caption2" color="neutral.f04">
            A boat afloat
          </CardSubTitle>
          <CardTitle variant="title2" color="neutral.f06">
            Boat
          </CardTitle>
          <CardBody variant="body1" color="neutral.f04">
            Note this boat afloat a moat. And dote and gloat this boat which
            totes. I quote devote a toast to boats.
          </CardBody>
        </RcCardContent>
      </CardWithHoverActions>
    </>
  );
};

const CardIcon = styled(RcIcon)`
  padding: ${spacing(4, 0, 0, 4)};
  font-size: 64px;
`;

export const IconCardExample: Story<{}> = () => {
  switchToControlKnobs();

  const onClick = () =>
    window.open('https://en.wikipedia.org/wiki/Boat', '_blank');

  return (
    <>
      <CardWithHoverActions onClick={onClick}>
        <CardIcon symbol={GoogleDoc} />
        <RcCardContent>
          <CardSubTitle variant="caption2" color="neutral.f04">
            A boat afloat
          </CardSubTitle>
          <CardTitle variant="title2" color="neutral.f06">
            Boat
          </CardTitle>
          <CardBody variant="body1" color="neutral.f04">
            Note this boat afloat a moat. And dote and gloat this boat which
            totes. I quote devote a toast to boats.
          </CardBody>
        </RcCardContent>
      </CardWithHoverActions>
    </>
  );
};

const CardExample = () => {
  let bodyText = 'This is the body text.';
  if (Math.random() > 0.5) {
    bodyText += " Let's make it two lines long.";
  }
  return (
    <RcCard>
      <RcCardActionArea>
        <RcCardMedia
          image="https://live.staticflickr.com/5126/5369581593_b9e2ec903c_n.jpg"
          style={{ height: 160 }}
        />
        <RcCardContent>
          <CardTitle>Title</CardTitle>
          <CardBody>{bodyText}</CardBody>
        </RcCardContent>
      </RcCardActionArea>
    </RcCard>
  );
};

const RcGridContainer = styled(RcGrid)`
  width: ${px(960)};
`;

export const CardResponsiveExample: Story<RcCardProps> = () => {
  const noOfCards = 6;

  return (
    <RcResponsive>
      <RcGridContainer container spacing={2}>
        {Array(noOfCards)
          .fill(null)
          .map(() => (
            <RcGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <CardExample />
            </RcGrid>
          ))}
      </RcGridContainer>
    </RcResponsive>
  );
};
