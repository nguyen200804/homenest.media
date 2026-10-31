import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { ManropeText, TextGradient } from "@/components/ui/Text";
import styles from "../../../styles/sections/services/ServiceResult.module.css";

export type ResultItem = {
    label: string;
    number: string;
};

export const DEFAULT_RESULT_ITEMS: ResultItem[] = [
    { label: "Khách hàng hài lòng", number: "1K" },
    { label: "Đánh giá hài lòng của khách hàng", number: "800" },
    { label: "Dự án", number: "2K" },
    { label: "Đội ngũ", number: "30" },
    { label: "Tỉ lệ thành công", number: "99%" },
];

export type ServiceResultProps = {
    heading?: ReactNode;
    items?: ResultItem[];
    /** Số cột số liệu trên mỗi hàng. */
    columns?: number;
    /** Ảnh minh họa ở cột trái (để trống thì cột trái chỉ giữ khoảng trống). */
    mediaSrc?: string;
    mediaAlt?: string;
    mediaWidth?: number;
    mediaHeight?: number;
    className?: string;
};

/**
 * Chia số liệu thành các hàng `columns` cột, tính từ cuối danh sách:
 * các hàng sau luôn đủ cột, ô trống (nếu có) nằm cuối hàng đầu tiên.
 */
function toRows(items: ResultItem[], columns: number): (ResultItem | null)[][] {
    const firstRowSize = items.length % columns || columns;
    const rows: (ResultItem | null)[][] = [];

    if (items.length > 0) {
        const firstRow: (ResultItem | null)[] = items.slice(0, firstRowSize);
        while (firstRow.length < columns) firstRow.push(null);
        rows.push(firstRow);
    }

    for (let i = firstRowSize; i < items.length; i += columns) {
        rows.push(items.slice(i, i + columns));
    }

    return rows;
}

export default function ServiceResult({
    heading = (
        <>
            Kết quả <TextGradient text="HomeNest.media" /> mang lại cho khách hàng
        </>
    ),
    items = DEFAULT_RESULT_ITEMS,
    columns = 3,
    mediaSrc,
    mediaAlt = "",
    mediaWidth = 600,
    mediaHeight = 600,
    className = "",
}: ServiceResultProps) {
    if (items.length === 0) return null;

    const rows = toRows(items, Math.max(1, columns));
    const sectionClassName = [styles.serviceResult, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="container">
                <div className={styles.serviceResultWrapper}>
                    <header className={styles.serviceResultHeader}>
                        <h2 className={styles.serviceResultTitle}>{heading}</h2>
                    </header>

                    <div className={styles.serviceResultBody}>
                        {/* Cột trái: ảnh / minh họa */}
                        <div className={styles.serviceResultMedia}>
                            {mediaSrc && (
                                <Image
                                    className={styles.serviceResultMediaImage}
                                    src={mediaSrc}
                                    alt={mediaAlt}
                                    width={mediaWidth}
                                    height={mediaHeight}
                                />
                            )}
                        </div>

                        {/* Cột phải: lưới số liệu */}
                        <div className={styles.serviceResultStats}>
                            {rows.map((row, rowIndex) => (
                                <Fragment key={rowIndex}>
                                    {rowIndex > 0 && <span className={styles.serviceResultRowDivider} />}
                                    <div className={styles.serviceResultRow}>
                                        {row.map((item, colIndex) => (
                                            <Fragment key={colIndex}>
                                                {colIndex > 0 && <span className={styles.serviceResultItemDivider} />}
                                                {item ? (
                                                    <div className={styles.serviceResultItem}>
                                                        <h3 className={styles.serviceResultItemLabel}>{item.label}</h3>
                                                        <p className={styles.serviceResultItemNumber}>
                                                            <ManropeText text={item.number} gradientText={true} />
                                                        </p>
                                                    </div>
                                                ) : (
                                                    /* Ô trống để giữ đủ số cột */
                                                    <div
                                                        className={`${styles.serviceResultItem} ${styles.serviceResultItemEmpty}`}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

