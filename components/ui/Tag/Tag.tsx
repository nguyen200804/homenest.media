import styles from "./Tag.module.css";

export type TagProps = {
    /** Nội dung nhãn hiển thị. */
    text: string;
    className?: string;
};

export default function Tag({ text, className }: TagProps) {
    const classes = [styles.tag, className].filter(Boolean).join(" ");

    return (
        <p className={classes}>
            <span className={styles.tagText}>{text}</span>
        </p>
    );
}