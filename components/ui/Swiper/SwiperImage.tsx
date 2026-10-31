"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import styles from "../../../styles/ui/Swiper/SwiperImage.module.css";

export type SwiperImageItem = {
    src: string;
    alt?: string;
};

export type SwiperImageProps = {
    /** Danh sách ảnh: có thể là đường dẫn (string) hoặc object `{ src, alt }`. */
    items: (string | SwiperImageItem)[];
    /** Tỉ lệ khung hình của slide, theo cú pháp CSS `aspect-ratio`. */
    aspectRatio?: string;
    /** Thuộc tính `sizes` của next/image, giúp tải ảnh đúng kích thước hiển thị. */
    sizes?: string;
    /** Thời gian chuyển slide (ms). */
    speed?: number;
    loop?: boolean;
    /** Ảnh đầu tiên được ưu tiên tải (dùng khi slide nằm ở đầu trang). */
    priority?: boolean;
    className?: string;
};

export default function SwiperImage({
    items,
    aspectRatio = "8 / 3",
    sizes = "(max-width: 768px) 100vw, 80vw",
    speed = 500,
    loop = true,
    priority = false,
    className = "",
}: SwiperImageProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    if (items.length === 0) return null;

    const hasMultiple = items.length > 1;
    const wrapperClassName = [styles.swiperImage, className].filter(Boolean).join(" ");

    return (
        <div
            className={wrapperClassName}
            style={{ "--swiper-image-ratio": aspectRatio } as CSSProperties}
        >
            <Swiper
                className={styles.swiperImageSlider}
                slidesPerView={1}
                speed={speed}
                loop={hasMultiple && loop}
                allowTouchMove={hasMultiple}
                simulateTouch={hasMultiple}
                grabCursor={hasMultiple}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {items.map((item, index) => {
                    const image: SwiperImageItem = typeof item === "string" ? { src: item } : item;
                    return (
                        <SwiperSlide key={`${image.src}-${index}`} className={styles.swiperImageSlide}>
                            <Image
                                className={styles.swiperImageImg}
                                src={image.src}
                                alt={image.alt ?? ""}
                                fill
                                draggable={false}
                                sizes={sizes}
                                priority={priority && index === 0}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {hasMultiple && (
                <>
                    <button
                        type="button"
                        className={`${styles.swiperImageNav} ${styles.swiperImageNavPrev}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Ảnh trước"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        type="button"
                        className={`${styles.swiperImageNav} ${styles.swiperImageNavNext}`}
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Ảnh tiếp theo"
                    >
                        <ChevronRight />
                    </button>
                </>
            )}
        </div>
    );
}

