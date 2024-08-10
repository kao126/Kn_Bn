import { SVGProps } from 'react';

// export function Task(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="2em"
//       height="2em"
//       viewBox="0 0 16 16"
//       {...props}
//     >
//       <path
//         fill="#475569"
//         fillRule="evenodd"
//         d="M4.78 3.28a.75.75 0 0 0-1.06-1.06L1.75 4.19l-.47-.47A.75.75 0 0 0 .22 4.78l1 1a.75.75 0 0 0 1.06 0zM6 3.75A.75.75 0 0 1 6.75 3h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 6 3.75M6 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 6 8m.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm-1.97-1.28a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//   );
// }

export function Task(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.2em"
      height="3.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z"
      ></path>
    </svg>
  );
}
