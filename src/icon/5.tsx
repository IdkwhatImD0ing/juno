import React, { forwardRef, memo } from 'react';

const Icon5 = memo(
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
          fill="var(--color18, #000)"
          d="M18.711 7.484c0 .157-.053.287-.158.388s-.282.152-.532.152h-2.954l-.433 2.335c.49-.099.943-.149 1.359-.149.49 0 .922.068 1.297.205s.688.325.942.565c.254.24.445.524.574.851s.194.683.194 1.068a2.936 2.936 0 01-.982 2.258c-.304.271-.662.479-1.073.624s-.856.217-1.333.217c-.276 0-.54-.026-.794-.078a4.195 4.195 0 01-1.32-.506 3.542 3.542 0 01-.499-.354l.354-.472a.371.371 0 01.315-.162c.083 0 .181.032.292.096s.246.136.404.214c.158.079.342.15.555.214s.465.096.758.096c.328 0 .624-.05.886-.149s.487-.241.673-.425c.186-.184.329-.405.43-.662s.151-.544.151-.863c0-.277-.043-.528-.128-.752s-.214-.414-.387-.571c-.173-.157-.388-.28-.647-.366s-.56-.13-.906-.13a5.103 5.103 0 00-1.523.236l-.735-.205.761-4.162h4.457v.484z"
        />
        <path
          fill="var(--color83, #9e9e9e)"
          d="M13.633 22.762c0 .2-.025.379-.074.538s-.122.292-.217.401c-.096.109-.214.193-.354.251s-.301.087-.482.087c-.162 0-.33-.023-.505-.07l.027-.285c.003-.028.014-.051.031-.069s.044-.026.079-.026c.02 0 .044.003.073.01l.047.012c.05.015.117.023.2.023.11 0 .208-.017.294-.05s.158-.085.217-.155c.059-.07.104-.16.135-.269s.046-.239.046-.389v-2.355h.482v2.345zm1.404-.774h.182c.063 0 .114-.008.151-.024s.073-.043.106-.081l1.193-1.35c.037-.042.072-.071.106-.089s.078-.026.131-.026h.413l-1.365 1.543c-.035.038-.068.071-.099.098s-.064.048-.099.065c.047.015.088.038.123.067s.072.067.11.113l1.425 1.698h-.42c-.032 0-.058-.003-.08-.008s-.04-.012-.056-.02l-.023-.014-.061-.061-1.238-1.422-.051-.051a.238.238 0 00-.127-.057l-.046-.005-.275-.002v1.64h-.482V20.42h.482v1.57zm3.358 1.605h1.55V24H17.91v-3.582h.485v3.175z"
        />
      </svg>
    ),
  ),
);
Icon5.displayName = 'Icon5';
Icon5['iconName'] = '5';
export default Icon5;
