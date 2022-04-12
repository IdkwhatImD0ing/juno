import React, { forwardRef, memo } from 'react';

const PptD = memo(
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
          fill="var(--color46, #43261f)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color47, #d5583c)"
          d="M11.919 8c-.601 0-1.108.208-1.522.624s-.62.927-.62 1.532v11.688c0 .605.207 1.116.62 1.532s.921.624 1.522.624h8.161c.601 0 1.108-.208 1.522-.624s.62-.927.62-1.532v-9.059L16.671 8h-4.752z"
        />
        <path
          fill="var(--color30, #f1f1f1)"
          d="M16.756 12.936c.426 0 .795.057 1.108.17s.582.271.808.473c.225.227.388.492.488.794s.15.656.15 1.059c0 .378-.05.725-.15 1.04s-.263.586-.488.813c-.225.202-.495.359-.808.473s-.683.17-1.108.17h-2.592v3.442h-.939v-8.436h3.532zm-.375.946h-2.217v3.102h2.217c.301 0 .57-.032.808-.095s.432-.158.582-.284c.15-.151.257-.322.319-.511s.094-.41.094-.662c0-.252-.031-.473-.094-.662s-.169-.359-.319-.511c-.15-.126-.344-.221-.582-.284s-.507-.095-.808-.095z"
        />
      </svg>
    ),
  ),
);
PptD.displayName = 'PptD';
PptD['iconName'] = 'ppt-D';
export default PptD;
