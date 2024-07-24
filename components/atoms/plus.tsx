import { SVGProps } from 'react';

export function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#bf94ff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
    </svg>
  );
}
