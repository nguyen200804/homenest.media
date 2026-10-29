import type { SVGProps } from "react";

const PATHS = {
    right: "M388.819 239.537 156.092 6.816c-9.087-9.089-23.824-9.089-32.912.002-9.087 9.089-9.087 23.824.002 32.912l216.27 216.266-216.273 216.276c-9.087 9.089-9.087 23.824.002 32.912A23.2 23.2 0 0 0 139.636 512a23.2 23.2 0 0 0 16.457-6.817L388.819 272.45a23.27 23.27 0 0 0 0-32.913",
    left: "M172.548 256.005 388.82 39.729c9.089-9.089 9.089-23.824 0-32.912s-23.824-9.089-32.912.002L123.18 239.551a23.26 23.26 0 0 0-6.817 16.454 23.28 23.28 0 0 0 6.817 16.457l232.727 232.721c4.543 4.544 10.499 6.816 16.455 6.816s11.913-2.271 16.457-6.817c9.089-9.089 9.089-23.824 0-32.912z",
    up: "M505.183 355.907 272.45 123.179a23.27 23.27 0 0 0-32.912.001L6.817 355.908c-9.089 9.089-9.089 23.824 0 32.912 9.087 9.087 23.824 9.089 32.912 0l216.266-216.27 216.277 216.27c4.544 4.544 10.501 6.816 16.457 6.816s11.913-2.271 16.457-6.817c9.086-9.089 9.086-23.824-.003-32.912",
    down: "M505.183 123.179c-9.087-9.087-23.824-9.089-32.912.002l-216.266 216.27L39.729 123.179c-9.087-9.087-23.824-9.089-32.912.002-9.089 9.089-9.089 23.824 0 32.912L239.55 388.82a23.27 23.27 0 0 0 32.91-.001l232.721-232.727c9.091-9.088 9.091-23.824.002-32.913",
} as const;

type Direction = keyof typeof PATHS;

function createChevron(direction: Direction) {
    return function Chevron(props: SVGProps<SVGSVGElement>) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="currentColor"
                {...props}
            >
                <path d={PATHS[direction]} />
            </svg>
        );
    };
}

const ChevronRight = createChevron("right");
export const ChevronLeft = createChevron("left");
export const ChevronUp = createChevron("up");
export const ChevronDown = createChevron("down");

export default ChevronRight;