import React, { forwardRef, memo } from 'react';

const CallQueue = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path
          fill="var(--color6, #066fac)"
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M18.5 5c3.333 0 6.036 2.737 6.036 6.113l-.934.001c.003-.075.005-.151.005-.227 0-2.751-2.287-4.981-5.107-4.981s-5.107 2.23-5.107 4.981c0 .076.002.152.005.227l-.934-.001C12.464 7.737 15.166 5 18.5 5z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M18.5 17c3.333 0 6.036-2.737 6.036-6.113h-.934c.003.075.005.151.005.226 0 2.751-2.287 4.981-5.107 4.981-.337 0-.505.145-.505.436s.168.447.505.469zm-5.107-5.887c0-.076.002-.151.005-.226h-.934z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M13.393 10.923c0 .839.198 1.634.55 2.341h-1.496a.449.449 0 01-.448-.448V9.184c0-.247.201-.448.448-.448l1.423-.002a5.227 5.227 0 00-.477 2.189zm11.159-2.187c.247 0 .448.201.448.448v3.632a.449.449 0 01-.448.448h-.709c.352-.707.55-1.502.55-2.341 0-.78-.171-1.521-.477-2.189l.636.002zM22.505 10.929c0 2.155-1.791 3.901-4 3.901s-4-1.747-4-3.901c0-2.155 1.791-3.901 4-3.901s4 1.747 4 3.901z"
        />
        <path
          fill="var(--color6, #066fac)"
          d="M22 21.5c0 5.247-4.253 9.5-9.5 9.5S3 26.747 3 21.5 7.253 12 12.5 12s9.5 4.253 9.5 9.5z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M12.5 14c3.333 0 6.036 2.737 6.036 6.113l-.934.001c.003-.075.005-.151.005-.227 0-2.751-2.287-4.981-5.107-4.981s-5.107 2.23-5.107 4.981c0 .076.002.152.005.227l-.934-.001C6.464 16.737 9.166 14 12.5 14z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M12.5 26c3.333 0 6.036-2.737 6.036-6.113h-.934c.003.075.005.151.005.226 0 2.751-2.287 4.981-5.107 4.981-.337 0-.505.145-.505.436s.168.447.505.469zm-5.107-5.887c0-.076.002-.151.005-.226h-.934z"
        />
        <path
          fill="var(--color5, #fff)"
          d="M7.393 19.923c0 .839.198 1.634.55 2.341H6.447a.449.449 0 01-.448-.448v-3.632c0-.247.201-.448.448-.448l1.423-.002a5.227 5.227 0 00-.477 2.189zm11.159-2.187c.247 0 .448.201.448.448v3.632a.449.449 0 01-.448.448h-.709c.352-.707.55-1.502.55-2.341 0-.78-.171-1.521-.477-2.189l.636.002zM16.505 19.929c0 2.155-1.791 3.901-4 3.901s-4-1.747-4-3.901c0-2.155 1.791-3.901 4-3.901s4 1.747 4 3.901z"
        />
      </svg>
    ),
  ),
);
CallQueue.displayName = 'CallQueue';
CallQueue['iconName'] = 'Call-queue';
export default CallQueue;
