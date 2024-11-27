import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill="#6358FA"
      d="M.816 6.508V.328h1.332V.88h.048A3.6 3.6 0 0 1 4.224.22c1.188 0 1.8.48 1.8 1.704v4.584H4.632v-4.26c0-.624-.204-.876-1.044-.876-.48 0-1.02.156-1.392.336v4.8zm9.02.108c-2.051 0-3.06-1.164-3.06-3.12v-.168c0-2.076 1.26-3.096 2.833-3.096 1.824 0 2.616 1.02 2.616 2.988v.576H8.193c.084 1.284.744 1.74 1.92 1.74.792 0 1.368-.18 1.908-.456v.96c-.42.276-1.14.576-2.184.576m-.251-5.364c-.636 0-1.296.336-1.392 1.596h2.628c0-1.164-.432-1.596-1.236-1.596m4.544 5.256L12.413.328h1.464l1.092 4.416h.048L16.265.328h1.128l1.26 4.416h.048L19.793.328h1.26l-1.704 6.18h-1.332L16.769 2.32h-.036l-1.236 4.188z"
    />
  </svg>
);
export default SvgNew;
