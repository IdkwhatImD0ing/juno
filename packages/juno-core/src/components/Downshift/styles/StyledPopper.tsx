import React, { forwardRef } from 'react';

import { css, palette2, radius, shadows, styled } from '../../../foundation';
import { RcPopper, RcPopperProps } from '../../Popper';

const radiusLg = radius('lg');

export type PopperPosition = 'top-start' | 'bottom-start';

const _StyledPopper = forwardRef<
  any,
  RcPopperProps & { position: PopperPosition }
>(({ position, ...rest }, ref) => {
  return <RcPopper ref={ref} {...rest} />;
});

export const StyledPopper = styled(_StyledPopper)`
  > div {
    box-shadow: ${shadows('1')};
    background-color: ${palette2('neutral', 'elevation')};
    overflow: hidden;

    ${({ position }) =>
      position === 'top-start'
        ? css`
            border-top-right-radius: ${radiusLg};
            border-top-left-radius: ${radiusLg};
          `
        : css`
            border-bottom-right-radius: ${radiusLg};
            border-bottom-left-radius: ${radiusLg};
          `}
  }
`;
