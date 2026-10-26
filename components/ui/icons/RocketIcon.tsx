import type { IconProps } from "./SocialIcons";

export const RocketIcon = (p: IconProps) => (
    <svg viewBox="-20 -70 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style={{ display: "inline-block" }} {...p}>
        <defs>
            <linearGradient id="hn-scroll-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#386BB7" />
                <stop offset="100%" stopColor="#E24C4A" />
            </linearGradient>
        </defs>
        <path fill="url(#hn-scroll-gradient)" d="M505.1 19.1c-1.2-5.5-6.7-11-12.2-12.2C460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.8c-16.3 0-35.6 11.9-42.9 26.5L2.5 253.3A28.4 28.4 0 0 0 0 264a24 24 0 0 0 24 24h103.8l-22.5 22.5c-11.4 11.4-13 32.3 0 45.3l50.9 50.9c11.2 11.2 32.2 13.2 45.3 0l22.5-22.5V488a24 24 0 0 0 24 24 28.6 28.6 0 0 0 10.7-2.5l98.7-49.4c14.6-7.3 26.5-26.5 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1 0-24.1 0-49.3-6.9-81.6zM384 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40" />
    </svg>
);