import TextGradient from "../TextGradient";
import type { TextGradientProps } from "../TextGradient";
import styles from "./AntonText.module.css";

export type AntonTextProps = TextGradientProps & {
    /** Bật chữ gradient (dùng TextGradient bên trong). Mặc định: false. */
    gradientText?: boolean;
    /** Chữ nền trong suốt + viền gradient (dùng TextGradient bên trong). Mặc định: false. */
    textStrokeGradient?: boolean;
};

export default function AntonText({
    text,
    tagHTML: Tag = "span",
    gradientText = false,
    textStrokeGradient = false,
    className,
    ...gradientProps
}: AntonTextProps) {
    const classes = [styles.anton, className].filter(Boolean).join(" ");

    if (gradientText || textStrokeGradient) {
        return (
            <TextGradient
                text={text}
                tagHTML={Tag}
                className={classes}
                textStrokeGradient={textStrokeGradient}
                {...gradientProps}
            />
        );
    }

    return <Tag className={classes}>{text}</Tag>;
}
