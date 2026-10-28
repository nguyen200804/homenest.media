import Link from "next/link";
import type { CSSProperties, ElementType } from "react";
import styles from "./TextGradient.module.css";

export type TextGradientProps = {
    /** Nội dung chữ hiển thị. */
    text: string;
    /** Thẻ HTML bao ngoài ("span", "h1", "h2", "p", ...). Mặc định: "span". */
    tagHTML?: ElementType;
    /** Màu bắt đầu. Mặc định: #386bb7. */
    fromColor?: string;
    /** Màu kết thúc. Mặc định: #e24c4a. */
    toColor?: string;
    /** Góc gradient (độ). Mặc định: 90 (90deg). */
    angle?: number;
    /** Nếu có, chữ trở thành đường dẫn (nội bộ dùng Link, http(s) mở tab mới). */
    link?: string;
    /** Chữ nền trong suốt, chỉ hiển thị viền gradient. Mặc định: false. */
    textStrokeGradient?: boolean;
    className?: string;
};

export default function TextGradient({
    text,
    tagHTML: Tag = "span",
    fromColor = "#386bb7",
    toColor = "#e24c4a",
    angle = 90,
    link,
    textStrokeGradient = false,
    className,
}: TextGradientProps) {
    const style = {
        "--tg-from": fromColor,
        "--tg-to": toColor,
        "--tg-angle": `${angle}deg`,
    } as CSSProperties;

    const classes = [
        styles.gradient,
        textStrokeGradient ? styles.strokeGradient : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    let content: React.ReactNode = text;

    if (link) {
        const isExternal = /^https?:\/\//.test(link);
        content = isExternal ? (
            <a
                className={styles.link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        ) : (
            <Link className={styles.link} href={link}>
                {text}
            </Link>
        );
    }

    return (
        <Tag
            className={classes}
            style={style}
            {...(textStrokeGradient && { "data-text": text })}
        >
            <span>{content}</span>
        </Tag>
    );
}