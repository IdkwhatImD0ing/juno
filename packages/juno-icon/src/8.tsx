import React, { forwardRef, memo } from 'react';

const Icon8 = memo(
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
          fill="var(--color17, #000)"
          d="M16 7c.402 0 .768.059 1.099.178s.615.283.851.491a2.162 2.162 0 01.74 1.646c0 .475-.12.884-.36 1.226s-.592.599-1.056.771c.555.156.981.417 1.279.783s.447.832.447 1.398a2.293 2.293 0 01-.836 1.83c-.263.217-.579.384-.947.501s-.774.175-1.217.175c-.443 0-.849-.058-1.217-.175s-.685-.284-.95-.501c-.265-.217-.47-.48-.615-.789s-.217-.656-.217-1.041c0-.565.149-1.031.447-1.398s.725-.628 1.28-.783c-.468-.172-.821-.429-1.059-.771s-.357-.751-.357-1.226a2.159 2.159 0 01.74-1.646c.236-.209.519-.373.848-.491S15.597 7 16.003 7zm0 4.78c-.244 0-.478.032-.702.095s-.421.163-.593.298c-.172.135-.309.31-.41.525s-.152.474-.152.777c0 .246.042.47.127.673s.207.377.366.522c.159.145.354.258.584.338s.49.12.78.12c.29 0 .55-.04.779-.12s.424-.193.584-.338c.159-.145.282-.319.366-.522s.127-.427.127-.673c0-.303-.051-.562-.152-.777s-.238-.39-.41-.525-.37-.234-.593-.298-.458-.095-.702-.095zm0-3.932c-.265 0-.498.039-.699.117s-.369.184-.503.319c-.135.135-.236.293-.304.473s-.102.373-.102.577c0 .201.029.395.087.584s.151.355.28.501c.128.145.295.262.5.35s.452.132.742.132.537-.044.742-.132.372-.205.5-.35.222-.312.279-.501.087-.383.087-.584c0-.205-.034-.397-.102-.577a1.335 1.335 0 00-.807-.792 1.946 1.946 0 00-.699-.117z"
        />
        <path
          fill="var(--color86, #9e9e9e)"
          d="M13.875 20.418v.407h-1.158V24h-.485v-3.175H11.07v-.407h2.805zm1.902 3.197c.148 0 .281-.025.398-.075s.215-.12.296-.21c.081-.09.142-.198.185-.323s.064-.262.064-.413v-2.177h.483v2.178c0 .207-.033.398-.099.575s-.16.33-.282.459c-.122.129-.272.23-.449.304s-.375.11-.595.11c-.22 0-.418-.037-.595-.11a1.297 1.297 0 01-.734-.763 1.63 1.63 0 01-.099-.575v-2.178h.482v2.175c0 .15.021.288.064.413s.104.233.185.323.18.16.297.211.25.076.399.076zm1.843-3.197h.387c.043 0 .078.011.105.032s.047.049.06.082l1.012 2.527.033.089.03.096c.019.067.038.136.056.207.015-.072.031-.141.049-.207s.038-.128.061-.185l1.008-2.527c.012-.028.032-.055.06-.079s.063-.036.105-.036h.39l-1.46 3.582h-.438l-1.46-3.582z"
        />
      </svg>
    ),
  ),
);
Icon8.displayName = 'Icon8';
Icon8['iconName'] = '8';
export default Icon8;
