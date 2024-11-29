import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImgCartbook3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={144}
    height={206}
    fill="none"
    {...props}
  >
    <g clipPath="url(#img_cartbook3_svg__a)">
      <rect
        width={143}
        height={205}
        x={0.5}
        y={0.5}
        fill="url(#img_cartbook3_svg__b)"
        stroke="#E6E6E6"
        rx={4.5}
      />
    </g>
    <defs>
      <clipPath id="img_cartbook3_svg__a">
        <path fill="#fff" d="M0 0h144v206H0z" />
      </clipPath>
      <pattern
        id="img_cartbook3_svg__b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#img_cartbook3_svg__c"
          transform="matrix(.001 0 0 .0007 0 -.009)"
        />
      </pattern>
      <image
        id="img_cartbook3_svg__c"
        width={996}
        height={1450}
      />
    </defs>
  </svg>
);
export default SvgImgCartbook3;