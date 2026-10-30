import Link from "next/link";
import ChevronRight from "../icons/Chevron";
import styles from "./ButtonGradientSpin.module.css";

export interface ButtonGradientSpinProps {
    /** Nội dung chữ hiển thị trên nút. */
    text: string;
    /** Nếu có link, nút render thành <Link />; không có thì render thẻ <button>. */
    link?: string;
    /** Mở link ở tab mới (chỉ áp dụng khi có link). */
    newTab?: boolean;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function ButtonGradientSpin({
    text,
    link,
    newTab = false,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: ButtonGradientSpinProps) {
    const classes = [styles.button, className].filter(Boolean).join(" ");

    const content = (
        <span className={styles.inner}>
            <span className={styles.iconLeft} aria-hidden>
                <ChevronRight />
            </span>
            <span className={styles.text}>{text}</span>
            <span className={styles.iconRight} aria-hidden>
                <ChevronRight />
            </span>
        </span>
    );

    if (link) {
        return (
            <Link
                href={link}
                className={classes}
                onClick={onClick}
                {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
            >
                {content}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
}