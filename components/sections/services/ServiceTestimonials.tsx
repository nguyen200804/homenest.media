"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { QuoteIcon, ReactIcon } from "@/components/ui/icons";
import { TextGradient } from "@/components/ui/Text";
import { SERVICE_TESTIMONIALS } from "@/constants/serviceTestimonials";
import type { ServiceTestimonialItem } from "@/types/serviceTestimonial.types";
import styles from "../../../styles/sections/services/ServiceTestimonials.module.css";

/** Thời gian khóa thao tác sau mỗi lần chuyển (ms), khớp với transition 0.6s trong CSS. */
const ANIMATION_LOCK_MS = 650;
/** Breakpoint (px) chuyển sang bố cục mobile, khớp với media query trong CSS. */
const MOBILE_BREAKPOINT = 768;
/** Quãng vuốt dọc tối thiểu (px) để tính là một lần chuyển slide. */
const SWIPE_THRESHOLD = 30;

type CardPose = {
    x: number;
    y: number;
    opacity: number;
    scale: number;
    zIndex: number;
    isClickable: boolean;
};

/**
 * Tính vị trí của một thẻ dựa trên khoảng cách của nó so với thẻ đang active.
 * `relativePosition`: 0 = active, 1 = thẻ kế tiếp (phía dưới), `total - 1` = thẻ trước đó (phía trên).
 */
function getCardPose(relativePosition: number, total: number, isMobile: boolean): CardPose {
    const activeX = isMobile ? 30 : 50;
    const farX = isMobile ? -40 : -100;
    const sideY = isMobile ? 160 : 170;

    if (relativePosition === 0) {
        return { x: activeX, y: 0, opacity: 1, scale: 1, zIndex: 4, isClickable: false };
    }
    if (relativePosition === 1) {
        return { x: 0, y: sideY, opacity: 0.9, scale: 0.95, zIndex: 3, isClickable: true };
    }
    if (relativePosition === total - 1) {
        return { x: 0, y: -sideY, opacity: 0.9, scale: 0.95, zIndex: 3, isClickable: true };
    }
    if (relativePosition === 2) {
        return { x: farX, y: 0, opacity: 0.2, scale: 0.8, zIndex: 1, isClickable: false };
    }
    return { x: 0, y: 0, opacity: 0, scale: 0.8, zIndex: 0, isClickable: false };
}

export type ServiceTestimonialsProps = {
    items?: ServiceTestimonialItem[];
    className?: string;
};

export default function ServiceTestimonials({
    items = SERVICE_TESTIMONIALS,
    className = "",
}: ServiceTestimonialsProps) {
    const total = items.length;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isLockedRef = useRef(false);
    const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const touchStartYRef = useRef<number | null>(null);

    /** Chuyển slide theo hướng (+1: kế tiếp, -1: trước đó); bỏ qua nếu đang trong lúc chuyển. */
    const move = useCallback(
        (direction: 1 | -1) => {
            if (isLockedRef.current || total < 2) return;
            isLockedRef.current = true;
            setActiveIndex((current) => (current + direction + total) % total);
            lockTimerRef.current = setTimeout(() => {
                isLockedRef.current = false;
            }, ANIMATION_LOCK_MS);
        },
        [total],
    );

    // Theo dõi breakpoint mobile.
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
        const handleChange = () => setIsMobile(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Lăn chuột và vuốt dọc để chuyển slide (wheel cần listener non-passive để chặn cuộn trang).
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            move(event.deltaY > 0 ? 1 : -1);
        };
        const handleTouchStart = (event: TouchEvent) => {
            touchStartYRef.current = event.touches[0].clientY;
        };
        const handleTouchEnd = (event: TouchEvent) => {
            if (touchStartYRef.current === null) return;
            const deltaY = touchStartYRef.current - event.changedTouches[0].clientY;
            touchStartYRef.current = null;
            if (Math.abs(deltaY) > SWIPE_THRESHOLD) move(deltaY > 0 ? 1 : -1);
        };

        carousel.addEventListener("wheel", handleWheel, { passive: false });
        carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
        carousel.addEventListener("touchend", handleTouchEnd, { passive: true });
        return () => {
            carousel.removeEventListener("wheel", handleWheel);
            carousel.removeEventListener("touchstart", handleTouchStart);
            carousel.removeEventListener("touchend", handleTouchEnd);
        };
    }, [move]);

    useEffect(
        () => () => {
            if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
        },
        [],
    );

    const handleCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            move(1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            move(-1);
        }
    };

    const sectionClassName = [styles.serviceTestimonials, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="container">
                <div className={styles.serviceTestimonialsWrapper}>
                    <header className={styles.serviceTestimonialsHeader}>
                        <p className={styles.serviceTestimonialsBadge}>
                            <ReactIcon className={styles.serviceTestimonialsBadgeIcon} />
                            <span>HomeNest.media</span>
                        </p>
                        <h2 className={styles.serviceTestimonialsTitle}>
                            Khách hàng nói gì về <TextGradient text="HomeNest.media" />
                        </h2>
                    </header>

                    <div className={styles.serviceTestimonialsBody}>
                        {/* Cột trái: carousel đánh giá (lăn chuột / vuốt / bấm thẻ lân cận để chuyển) */}
                        <div
                            ref={carouselRef}
                            className={styles.serviceTestimonialsCarousel}
                            role="region"
                            aria-roledescription="carousel"
                            aria-label="Đánh giá của khách hàng"
                            tabIndex={0}
                            onKeyDown={handleCarouselKeyDown}
                        >
                            <div className={styles.serviceTestimonialsStage}>
                                {items.map((item, index) => {
                                    const relativePosition = (index - activeIndex + total) % total;
                                    const pose = getCardPose(relativePosition, total, isMobile);
                                    const isActive = relativePosition === 0;
                                    const cardClassName = [
                                        styles.serviceTestimonialsCard,
                                        isActive ? styles.isActive : "",
                                        pose.isClickable ? styles.isClickable : "",
                                    ]
                                        .filter(Boolean)
                                        .join(" ");
                                    const direction = relativePosition === 1 ? 1 : -1;

                                    return (
                                        <article
                                            key={`${item.name}-${index}`}
                                            className={cardClassName}
                                            style={{
                                                transform: `translate(${pose.x}px, calc(-50% + ${pose.y}px)) scale(${pose.scale})`,
                                                opacity: pose.opacity,
                                                zIndex: pose.zIndex,
                                            }}
                                            aria-hidden={!isActive && !pose.isClickable}
                                            role={pose.isClickable ? "button" : undefined}
                                            tabIndex={pose.isClickable ? 0 : -1}
                                            onClick={pose.isClickable ? () => move(direction) : undefined}
                                            onKeyDown={
                                                pose.isClickable
                                                    ? (event) => {
                                                          if (event.key === "Enter" || event.key === " ") {
                                                              event.preventDefault();
                                                              move(direction);
                                                          }
                                                      }
                                                    : undefined
                                            }
                                        >
                                            <div className={styles.serviceTestimonialsCardContent}>
                                                <span className={styles.serviceTestimonialsCardQuoteIcon} aria-hidden="true">
                                                    <QuoteIcon />
                                                </span>
                                                <Image
                                                    className={styles.serviceTestimonialsCardAvatar}
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    width={100}
                                                    height={100}
                                                    draggable={false}
                                                />
                                                <div className={styles.serviceTestimonialsCardInfo}>
                                                    <div className={styles.serviceTestimonialsCardHeader}>
                                                        <h3 className={styles.serviceTestimonialsCardName}>{item.name}</h3>
                                                        <span className={styles.serviceTestimonialsCardJob}>{item.job}</span>
                                                    </div>
                                                    <p className={styles.serviceTestimonialsCardText}>{item.quote}</p>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Cột phải: ảnh minh họa */}
                        <div className={styles.serviceTestimonialsMedia}>
                            <Image
                                className={styles.serviceTestimonialsMediaImage}
                                src="/images/service-testimonials.webp"
                                width={935}
                                height={935}
                                sizes="(max-width: 768px) 100vw, 40vw"
                                alt="Service Testimonials"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
