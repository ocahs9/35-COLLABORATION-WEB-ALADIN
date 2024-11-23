import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAladinLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="url(#aladin_logo_svg__a)"
      fillRule="evenodd"
      d="M48.7 14.552c-2.156-1.946-3.856-5.437-.794-7.869 3.822-3.036 8.432 1.665 2.892 7.718-.556.608-1.486.703-2.098.15M5.682 17.003c2.805-.423 11.01-.904 19.602 1.788 7.787 2.439 11.126 1.019 14.678-.491 2.509-1.067 5.123-2.179 9.486-2.007 5.906.234 9.547 1.905 12.172 3.109 2.059.945 3.492 1.603 4.902 1.054 2.016-.785 3.174-2.439 4.446-4.255 1.178-1.681 2.453-3.502 4.598-4.903 4.007-2.617 11.638.178 8.826 6.244-2.224 4.798-7.434 6.474-11.934 7.922-2.918.939-5.538 1.781-6.852 3.317-5.42 6.33-9.618 7.312-11.342 7.715-.317.074-.55.129-.692.194 5.62 1.248 7.452 3.746 7.452 4.578 0 1.249-1.586 2.498-10.201 2.498-9.502 0-10.997-1.25-10.997-2.498 0-1.236 1.914-2.88 6.282-4.529-1.034.047-4.757-.653-13.613-7.958-5.073-4.185-15.554-9.364-26.442-9.24-.923.011-1.607-.899-1.289-1.766.149-.405.491-.708.918-.772m70.891-2.78c-1.742.993-3.996 3.866-5.653 6.222-.869 1.234.1 2.736 1.545 2.305 4.019-1.2 8.827-3.739 8.827-6.991 0-1.963-2.113-3.023-4.719-1.537"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="aladin_logo_svg__a"
        x1={63.614}
        x2={22.535}
        y1={36.179}
        y2={3.443}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6358FA" />
        <stop offset={1} stopColor="#AFA9FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAladinLogo;
