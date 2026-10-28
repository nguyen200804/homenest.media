import styles from './ButtonBottomRight.module.css';
import ChevronRight from '../icons/ChevronRight';


export interface ButtonBottomRightProps {
    /** Nếu có url, nút sẽ render thành thẻ <a> */
    url?: string;
    /** Mở link ở tab mới (chỉ áp dụng khi có url) */
    newTab?: boolean;
    /** Ẩn nút (dùng cho hiệu ứng hiện/ẩn khi scroll) */
    hidden?: boolean;
    /** Nhãn cho screen reader */
    ariaLabel?: string;
    className?: string;
    onClick?: () => void;
}

export default function ButtonBottomRight({
    url,
    newTab = false,
    hidden = false,
    ariaLabel = 'Button',
    className = '',
    onClick,
}: ButtonBottomRightProps) {
    const classes = [styles.buttonBottomRight, styles.button, hidden ? styles.hidden : '', className]
        .filter(Boolean)
        .join(' ');

    if (url) {
        return (
            <a
                href={url}
                aria-label={ariaLabel}
                className={classes}
                onClick={onClick}
                {...(newTab && { target: '_blank', rel: 'noopener noreferrer' })}
            >
                <span className={styles.iconHover}>
                    <ChevronRight
                        aria-hidden

                        focusable={false}
                    />
                </span>
                <span className={styles.icon}>
                    <ChevronRight
                        aria-hidden
                        focusable={false}
                    />
                </span>

            </a>
        );
    }

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            className={classes}
            onClick={onClick}
        >
            <span className={styles.iconHover}>
                <ChevronRight
                    aria-hidden

                    focusable={false}
                />
            </span>
            <span className={styles.icon}>
                <ChevronRight
                    aria-hidden
                    focusable={false}
                />
            </span>
        </button>
    );
}