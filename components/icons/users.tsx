import { SVGProps } from 'react';

export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.5em"
      height="3.5em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={props.color}
        d="M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2.4 7.506c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0M14.002 12h-1.59a3 3 0 0 0-.04-.29a6.5 6.5 0 0 0-1.167-2.603a3 3 0 0 1 3.633 1.911c.18.522-.283.982-.836.982M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      ></path>
    </svg>
  );
}
