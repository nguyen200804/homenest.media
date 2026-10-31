import TextGradient from "./TextGradient";
import type { TextGradientProps } from "./TextGradient";
import styles from "../../../styles/ui/Text/ManropeText.module.css";

export type ManropeTextProps = TextGradientProps & {
    /** Bật chữ gradient (dùng TextGradient bên trong). Mặc định: false. */
    gradientText?: boolean;
    /** Chữ nền trong suốt + viền gradient (dùng TextGradient bên trong). Mặc định: false. */
    textStrokeGradient?: boolean;
};

export default function ManropeText({
    text,
    tagHTML: Tag = "span",
    gradientText = false,
    textStrokeGradient = false,
    className,
    ...gradientProps
}: ManropeTextProps) {
    const classes = [styles.manrope, className].filter(Boolean).join(" ");

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
