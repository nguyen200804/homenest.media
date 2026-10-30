import type { SVGProps } from "react";

export default function BookmarkIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="17.667 15 20.666 26"
            fill="none"
            {...props}
        >
            <path
                d="M37.333 40 28 33.333 18.667 40V18.667A2.667 2.667 0 0 1 21.333 16h13.334a2.667 2.667 0 0 1 2.666 2.667z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}