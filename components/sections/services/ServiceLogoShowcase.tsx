"use client";

import { useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { ButtonTransparentToGradient } from "@/components/ui/Buttons";
import {
    LOGO_SHOWCASE,
    LOGO_SHOWCASE_DESCRIPTION_DEFAULT,
    LOGO_SHOWCASE_HEADING,
} from "@/constants/logoShowcase";
import type { LogoShowcaseItem } from "@/types/logoShowcase.types";
import styles from "../../../styles/sections/services/ServiceLogoShowcase.module.css";

/** Giới hạn và bước phóng to / thu nhỏ ảnh logo (đơn vị %). */
const ZOOM_MIN = 50;
const ZOOM_MAX = 200;
const ZOOM_STEP = 1;
const ZOOM_DEFAULT = 100;

/** Phần trăm đã kéo của thanh trượt ứng với mức zoom `value`. */
const getRangeProgress = (value: number) => ((value - ZOOM_MIN) / (ZOOM_MAX - ZOOM_MIN)) * 100;

export type ServiceLogoShowcaseProps = {
    /** Tiêu đề của section. */
    title?: ReactNode;
    /** Tên logo hiển thị ở cột bên phải. */
    heading?: string;
    /** Mô tả mặc định khi biến thể đang chọn chưa có `desc`. */
    descriptionDefault?: ReactNode;
    items?: LogoShowcaseItem[];
    ctaText?: string;
    className?: string;
};

export default function ServiceLogoShowcase({
    title,
    heading = LOGO_SHOWCASE_HEADING,
    descriptionDefault = LOGO_SHOWCASE_DESCRIPTION_DEFAULT,
    items = LOGO_SHOWCASE,
    ctaText = "Liên hệ miễn phí ngay",
    className = "",
}: ServiceLogoShowcaseProps) {
    const [colorIndex, setColorIndex] = useState(0);
    const [variantIndex, setVariantIndex] = useState(0);
    /** Zoom được ghi thẳng vào biến CSS (không qua state) để kéo thanh không render lại component. */
    const previewRef = useRef<HTMLElement>(null);

    if (items.length === 0) return null;

    const activeItem = items[colorIndex];
    const variants = activeItem.bien2;
    const activeVariant = variants[variantIndex];
    const description = activeVariant?.desc || descriptionDefault;
    const handleZoom = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget;
        const value = Number(input.value);
        previewRef.current?.style.setProperty("--zoom", String(value / 100));
        input.style.setProperty("--range-progress", `${getRangeProgress(value)}%`);
    };

    const handleSelectColor = (index: number) => {
        setColorIndex(index);
        setVariantIndex(0);
    };

    return (
        <section className={[styles.serviceLogoShowcase, className].filter(Boolean).join(" ")}>
            <div className="container">
                <div className={styles.serviceLogoShowcaseWrapper}>
                    {title && (
                        <header className={styles.serviceLogoShowcaseHeader}>
                            <h2 className={styles.serviceLogoShowcaseTitle}>{title}</h2>
                        </header>
                    )}

                    <div className={styles.serviceLogoShowcaseBody}>
                        {/* Bên trái: bộ xem logo */}
                        <div className={styles.serviceLogoShowcaseViewer}>
                            {/* Cột chọn màu (bên trái) */}
                            <ul className={styles.serviceLogoShowcasePicker} aria-label="Chọn màu logo">
                                {items.map((item, index) => {
                                    const isActive = index === colorIndex;
                                    return (
                                        <li key={`${item.color}-${index}`} className={styles.serviceLogoShowcasePickerItem}>
                                            <button
                                                type="button"
                                                className={`${styles.serviceLogoShowcasePickerButton} ${isActive ? styles.isActive : ""}`}
                                                style={{ backgroundColor: item.color }}
                                                aria-label={`Màu ${index + 1}`}
                                                aria-pressed={isActive}
                                                onClick={() => handleSelectColor(index)}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Cột giữa: ảnh logo lớn + thanh tiến trình */}
                            <div className={styles.serviceLogoShowcasePreview}>
                                <figure ref={previewRef} className={styles.serviceLogoShowcasePreviewCard}>
                                    {activeVariant?.image && (
                                        <Image
                                            className={styles.serviceLogoShowcasePreviewImage}
                                            src={activeVariant.image}
                                            alt={heading}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    )}
                                </figure>
                                <div className={styles.serviceLogoShowcaseRange}>
                                    <input
                                        type="range"
                                        className={styles.serviceLogoShowcaseRangeInput}
                                        min={ZOOM_MIN}
                                        max={ZOOM_MAX}
                                        step={ZOOM_STEP}
                                        defaultValue={ZOOM_DEFAULT}
                                        style={{ "--range-progress": `${getRangeProgress(ZOOM_DEFAULT)}%` } as CSSProperties}
                                        aria-label="Phóng to / thu nhỏ logo"
                                        onInput={handleZoom}
                                    />
                                </div>
                            </div>

                            {/* Cột ảnh thu nhỏ các biến thể */}
                            <ul className={styles.serviceLogoShowcaseThumbs} aria-label="Chọn biến thể logo">
                                {variants.map((variant, index) => {
                                    const isActive = index === variantIndex;
                                    return (
                                        <li key={index} className={styles.serviceLogoShowcaseThumbItem}>
                                            <button
                                                type="button"
                                                className={`${styles.serviceLogoShowcaseThumbButton} ${isActive ? styles.isActive : ""}`}
                                                aria-label={`Biến thể ${index + 1}`}
                                                aria-pressed={isActive}
                                                onClick={() => setVariantIndex(index)}
                                            >
                                                {variant.image && (
                                                    <Image
                                                        className={styles.serviceLogoShowcaseThumbImage}
                                                        src={variant.image}
                                                        alt=""
                                                        width={48}
                                                        height={48}
                                                    />
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Bên phải: lời mô tả + nút */}
                        <div className={styles.serviceLogoShowcaseContent}>
                            <div className={styles.serviceLogoShowcaseContentBody}>
                                <h3 className={styles.serviceLogoShowcaseContentTitle}>{heading}</h3>
                                <div className={styles.serviceLogoShowcaseContentDescription}>{description}</div>
                            </div>
                            <div className={styles.serviceLogoShowcaseCta}>
                                <ButtonTransparentToGradient text={ctaText} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

