"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ButtonGradientSpin } from "@/components/ui/Buttons";
import styles from "../../../styles/sections/services/ServiceHowWeWork.module.css";

export type HowWeWorkItem = {
    number?: string;
    tag?: string;
    title: string;
    desc?: ReactNode;
};

export const DEFAULT_HOW_WE_WORK_ITEMS: HowWeWorkItem[] = [
    {
        tag: "Bước 1",
        title: "Tiếp nhận yêu cầu & Nghiên cứu",
        desc: "Tìm hiểu mục tiêu kinh doanh, định hướng thương hiệu, khách hàng mục tiêu và thị trường để xây dựng đề bài chuẩn xác.",
    },
    {
        tag: "Bước 2",
        title: "Phát triển ý tưởng & Định hướng",
        desc: "Đề xuất chiến lược và phác thảo các phương án sáng tạo phù hợp với bản sắc riêng của doanh nghiệp.",
    },
    {
        tag: "Bước 3",
        title: "Thiết kế & Hiệu chỉnh hoàn thiện",
        desc: "Triển khai chi tiết phương án được chọn, lắng nghe phản hồi và tinh chỉnh để đạt hiệu quả thẩm mỹ và ứng dụng tối ưu.",
    },
    {
        tag: "Bước 4",
        title: "Bàn giao & Đồng hành phát triển",
        desc: "Đóng gói đầy đủ hồ sơ, file gốc theo quy chuẩn và hỗ trợ doanh nghiệp trong suốt quá trình ứng dụng thực tế.",
    },
];

export type ServiceHowWeWorkProps = {
    heading?: ReactNode;
    items?: HowWeWorkItem[];
    showCta?: boolean;
    ctaText?: string;
    ctaLink?: string;
    className?: string;
};

export default function ServiceHowWeWork({
    heading = "Quy trình triển khai",
    items = DEFAULT_HOW_WE_WORK_ITEMS,
    showCta = true,
    ctaText = "Let's Build Your Product",
    ctaLink = "https://wa.me/+84708070888",
    className = "",
}: ServiceHowWeWorkProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let ticking = false;

        const updateSection = () => {
            const vh = window.innerHeight;
            const start = vh * 0.7;
            const end = vh * 0.3;
            const rows = section.querySelectorAll<HTMLElement>("[data-hww-row]");
            const fills: number[] = [];

            rows.forEach((row) => {
                const rect = row.getBoundingClientRect();
                const pct = Math.min(1, Math.max(0, (start - rect.top) / (start - end))) * 100;
                fills.push(Math.round(pct * 10) / 10);
            });

            rows.forEach((row, i) => {
                const active =
                    i === 0
                        ? row.getBoundingClientRect().top < vh * 0.7
                        : fills[i - 1] >= 95;
                row.classList.toggle(styles.isActive, active);

                const fill = row.querySelector<HTMLElement>("[data-hww-fill]");
                if (fill) {
                    fill.style.height = `${active ? fills[i] : 0}%`;
                }
            });
        };

        const update = () => {
            ticking = false;
            updateSection();
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [items.length]);

    if (!items || items.length === 0) {
        return null;
    }

    const total = items.length;
    const shouldShowCta = showCta && Boolean(ctaText);
    const sectionClassName = [styles.serviceHowWeWork, className].filter(Boolean).join(" ");

    return (
        <section ref={sectionRef} className={sectionClassName}>
            {heading && (
                <h2 className={styles.serviceHowWeWorkLabel}>
                    <span className={styles.serviceHowWeWorkLabelDot} />
                    <span>{heading}</span>
                </h2>
            )}

            <div className={styles.serviceHowWeWorkContent}>
                <div className={styles.serviceHowWeWorkTimeline}>
                    {items.map((item, i) => {
                        const num = item.number ?? String(i + 1).padStart(2, "0");
                        const isLast = i === total - 1;
                        const textClassName = [
                            styles.serviceHowWeWorkText,
                            isLast ? styles.serviceHowWeWorkTextLast : "",
                        ]
                            .filter(Boolean)
                            .join(" ");

                        return (
                            <div
                                key={i}
                                data-hww-row
                                className={styles.serviceHowWeWorkRow}
                            >
                                <div className={styles.serviceHowWeWorkProgressWrapper}>
                                    <span className={styles.serviceHowWeWorkStepNumber}>
                                        {num}
                                    </span>
                                    {!isLast && (
                                        <div className={styles.serviceHowWeWorkProgressBar}>
                                            <div
                                                data-hww-fill
                                                className={styles.serviceHowWeWorkProgressFill}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className={textClassName}>
                                    <div className={styles.serviceHowWeWorkHeading}>
                                        {item.tag && (
                                            <div className={styles.serviceHowWeWorkBadge}>
                                                <div className={styles.serviceHowWeWorkBadgeInner}>
                                                    <p className={styles.serviceHowWeWorkBadgeText}>
                                                        {item.tag}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        <h3 className={styles.serviceHowWeWorkStepTitle}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    {item.desc !== undefined && item.desc !== null && item.desc !== "" && (
                                        <div className={styles.serviceHowWeWorkStepDesc}>
                                            {typeof item.desc === "string" ? (
                                                <p>{item.desc}</p>
                                            ) : (
                                                item.desc
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {shouldShowCta && (
                <div className={styles.serviceHowWeWorkCtaWrapper}>
                    <ButtonGradientSpin text={ctaText} link={ctaLink} newTab={true} />
                </div>
            )}
        </section>
    );
}

