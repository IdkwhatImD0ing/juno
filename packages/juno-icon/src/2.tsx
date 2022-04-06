import React, { forwardRef, memo } from 'react';

const Icon2 = memo(
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
          d="M16.119 7c.381 0 .736.056 1.067.168s.616.274.857.488c.241.213.43.473.568.779s.207.654.207 1.043c0 .331-.05.638-.151.919s-.236.552-.408.811a6.033 6.033 0 01-.593.752c-.149.162-.305.325-.466.491l-2.613 2.648c.167-.046.337-.082.508-.109s.337-.04.496-.04h3.013c.121 0 .218.035.289.106s.107.162.107.273V16h-6v-.379a.647.647 0 01.201-.472l2.881-2.863c.238-.24.456-.471.653-.693s.365-.444.505-.668c.14-.224.248-.45.323-.68s.113-.475.113-.736-.042-.49-.126-.686a1.35 1.35 0 00-.86-.777 2.039 2.039 0 00-.634-.096c-.226 0-.435.033-.628.099a1.687 1.687 0 00-.888.695 1.62 1.62 0 00-.217.534c-.033.12-.084.207-.151.261s-.155.081-.264.081l-.066-.003a1.577 1.577 0 01-.078-.009l-.584-.099c.059-.406.172-.765.339-1.078s.38-.575.637-.786c.257-.211.552-.372.885-.481s.691-.165 1.076-.165z"
        />
        <path
          fill="var(--color86, #9e9e9e)"
          d="M14.357 24h-.375c-.043 0-.078-.011-.105-.032s-.047-.049-.06-.082l-.335-.865h-1.607l-.335.865c-.012.03-.032.057-.06.08s-.063.035-.105.035H11l1.433-3.582h.492l1.433 3.582zm-2.347-1.33h1.338l-.563-1.457a2.72 2.72 0 01-.107-.337l-.054.189-.051.151-.563 1.455zm2.8 1.33v-3.582h1.143c.22 0 .41.022.569.065s.29.105.392.185c.102.08.178.178.227.294s.074.246.074.391c0 .088-.014.173-.041.255s-.069.157-.125.227c-.056.07-.126.133-.21.188s-.183.1-.296.135c.262.052.459.146.593.282s.2.317.2.54c0 .152-.028.29-.084.415s-.137.233-.245.323c-.108.09-.239.16-.395.209s-.334.074-.534.074H14.81zm.485-1.633v1.247h.775c.138 0 .257-.016.356-.047s.181-.076.245-.134c.064-.058.111-.126.141-.205s.045-.166.045-.261c0-.185-.065-.331-.196-.439s-.329-.161-.594-.161h-.773zm0-.344h.64c.137 0 .255-.015.355-.045s.183-.072.249-.125c.066-.053.115-.118.146-.194s.047-.159.047-.249c0-.21-.063-.364-.19-.462s-.323-.148-.59-.148h-.658v1.223zm5.275 1.237c.027 0 .051.011.073.032l.19.207c-.147.17-.325.302-.534.398s-.461.142-.756.142c-.258 0-.492-.045-.703-.134s-.389-.214-.538-.375c-.148-.161-.263-.354-.345-.579s-.122-.473-.122-.742c0-.27.044-.517.131-.742s.21-.418.369-.58c.158-.162.348-.287.569-.376s.465-.134.731-.134c.263 0 .49.041.681.122s.36.192.509.332l-.157.223c-.012.017-.025.03-.04.041s-.037.016-.065.016a.125.125 0 01-.069-.024l-.086-.059c-.033-.023-.073-.048-.117-.075s-.098-.052-.16-.075a1.373 1.373 0 00-.497-.083c-.192 0-.367.033-.526.099a1.19 1.19 0 00-.68.726 1.7 1.7 0 00-.096.587c0 .223.032.422.096.598s.152.323.262.444c.111.121.242.213.394.276s.315.095.49.095c.107 0 .203-.006.288-.019s.164-.032.236-.059c.073-.027.14-.06.203-.101l.094-.067.095-.079c.028-.025.056-.038.082-.038z"
        />
      </svg>
    ),
  ),
);
Icon2.displayName = 'Icon2';
Icon2['iconName'] = '2';
export default Icon2;
