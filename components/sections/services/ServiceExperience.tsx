"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type KeyboardEvent,
    type ReactNode,
    type TouchEvent,
} from "react";
import styles from "../../../styles/sections/services/ServiceExperience.module.css";

export type ExperienceItem = {
    num?: string;
    title: string;
    desc: ReactNode;
    image?: string;
    bg?: string;
    card?: string;
    thumb?: string;
};

export const DEFAULT_EXPERIENCE_ITEMS: ExperienceItem[] = [
    {
        num: "01",
        title: "Kinh nghiệm và chuyên môn",
        desc: "HomeNest.media định hướng thiết kế dựa trên lĩnh vực hoạt động, khách hàng mục tiêu và đặc điểm riêng của từng doanh nghiệp, giúp hệ thống nhận diện phù hợp với mục tiêu xây dựng thương hiệu.",
        image: "/images/service-experience/1-1.webp",
    },
    {
        num: "02",
        title: "Sáng tạo và khác biệt",
        desc: "Ý tưởng thiết kế được phát triển dựa trên bản sắc và định hướng thương hiệu, kết hợp màu sắc, kiểu chữ, hình ảnh và bố cục để tạo nên phong cách nhận diện riêng.",
        image: "/images/service-experience/2-1.webp",
    },
    {
        num: "03",
        title: "Quy trình chuyên nghiệp",
        desc: "Quá trình triển khai gồm tiếp nhận yêu cầu, tìm hiểu thương hiệu, phát triển phương án thiết kế, tiếp nhận phản hồi và hoàn thiện sản phẩm theo phạm vi công việc đã thống nhất.",
        image: "/images/service-experience/3-1.webp",
    },
    {
        num: "04",
        title: "Đáp ứng đa nền tảng",
        desc: "Hệ thống nhận diện được định hướng để ứng dụng trên website, mạng xã hội, danh thiếp, hồ sơ doanh nghiệp, bao bì và các ấn phẩm truyền thông phù hợp với nhu cầu sử dụng.",
        image: "/images/service-experience/4-scaled.webp",
    },
    {
        num: "05",
        title: "Hỗ trợ nhận diện thương hiệu",
        desc: "Từ logo, màu sắc đến kiểu chữ và các yếu tố đồ họa, HomeNest.media hướng đến sự đồng bộ giữa các hạng mục, góp phần tạo nên hình ảnh thương hiệu nhất quán trên nhiều điểm chạm với khách hàng.",
        image: "/images/service-experience/5.webp",
    },
    {
        num: "06",
        title: "Chi phí hợp lý, minh bạch",
        desc: "Chi phí thiết kế được xác định dựa trên phạm vi công việc, số lượng hạng mục, độ phức tạp và yêu cầu bàn giao. Các nội dung triển khai được trao đổi trước để doanh nghiệp chủ động cân đối ngân sách.",
        image: "/images/service-experience/6-scaled.webp",
    },
];

export type ServiceExperienceProps = {
    heading?: ReactNode;
    items?: ExperienceItem[];
    autoplay?: number;
    className?: string;
};

export default function ServiceExperience({
    heading = "HomeNest.media là lựa chọn hàng đầu để xây dựng thương hiệu.",
    items = DEFAULT_EXPERIENCE_ITEMS,
    autoplay = 6000,
    className = "",
}: ServiceExperienceProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerResetKey, setTimerResetKey] = useState(0);

    const thumbsRef = useRef<HTMLDivElement>(null);
    const touchStartXRef = useRef<number | null>(null);

    const total = items.length;
    const currentIndex = total > 0 ? activeIndex % total : 0;

    const goToSlide = useCallback(
        (index: number) => {
            if (total === 0) return;
            setActiveIndex(((index % total) + total) % total);
            setTimerResetKey((prev) => prev + 1);
        },
        [total]
    );

    // Cuộn thanh thumbnail ngang trên mobile để đưa ảnh đang chọn vào giữa
    useEffect(() => {
        const wrap = thumbsRef.current;
        if (!wrap || wrap.scrollWidth <= wrap.clientWidth) return;

        const activeThumb = wrap.children[currentIndex] as HTMLElement | undefined;
        if (!activeThumb) return;

        wrap.scrollTo({
            left: activeThumb.offsetLeft - (wrap.clientWidth - activeThumb.offsetWidth) / 2,
            behavior: "smooth",
        });
    }, [currentIndex]);

    // Tự động chuyển slide theo chu kỳ `autoplay`
    useEffect(() => {
        if (total <= 1 || autoplay <= 0 || isPaused) return;

        if (
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        const timer = window.setInterval(() => {
            if (!document.hidden) {
                setActiveIndex((prev) => (prev + 1) % total);
            }
        }, autoplay);

        return () => window.clearInterval(timer);
    }, [total, autoplay, isPaused, timerResetKey]);

    if (total === 0) return null;

    const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            goToSlide(currentIndex + 1);
        }
    };

    const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
        if (touchStartXRef.current === null) return;
        const dx = event.changedTouches[0].clientX - touchStartXRef.current;
        touchStartXRef.current = null;
        if (Math.abs(dx) > 50) {
            goToSlide(currentIndex + (dx < 0 ? 1 : -1));
        }
    };

    const normalizedItems = items.map((item, i) => {
        const baseImg = item.image ?? "";
        return {
            num: item.num ?? String(i + 1).padStart(2, "0"),
            title: item.title,
            desc: item.desc,
            bg: item.bg ?? baseImg,
            card: item.card ?? baseImg,
            thumb: item.thumb ?? baseImg,
        };
    });

    const sectionClassName = [styles.serviceExperience, className].filter(Boolean).join(" ");

    return (
        <section
            className={sectionClassName}
            data-autoplay={autoplay}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {normalizedItems.map((item, i) =>
                item.bg ? (
                    <img
                        key={i}
                        className={`${styles.bg} ${i === currentIndex ? styles.isActive : ""}`}
                        src={item.bg}
                        alt=""
                        decoding="async"
                        loading={i === 0 ? undefined : "lazy"}
                    />
                ) : null
            )}

            <div className={styles.inner}>
                <span className={styles.bar} aria-hidden="true" />

                {heading && <h2 className={styles.heading}>{heading}</h2>}

                <div className={styles.slides}>
                    {normalizedItems.map((item, i) => (
                        <article
                            key={i}
                            className={`${styles.slide} ${i === currentIndex ? styles.isActive : ""}`}
                        >
                            <div className={styles.num}>
                                {item.num}
                                <span className={styles.quote}>”</span>
                            </div>
                            <div className={styles.foot}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <div className={styles.desc}>{item.desc}</div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.aside}>
                    {total > 1 && (
                        <div
                            className={styles.cards}
                            role="button"
                            tabIndex={0}
                            aria-label="Next"
                            onClick={() => goToSlide(currentIndex + 1)}
                            onKeyDown={handleCardKeyDown}
                        >
                            {normalizedItems.map((_, i) => {
                                const next = normalizedItems[(i + 1) % total];
                                return (
                                    <div
                                        key={i}
                                        className={`${styles.card} ${i === currentIndex ? styles.isActive : ""}`}
                                    >
                                        {next.card && (
                                            <img
                                                className={styles.cardImg}
                                                src={next.card}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        )}
                                        <span className={styles.cardNum}>{next.num}</span>
                                        <span className={styles.cardTitle}>{next.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div ref={thumbsRef} className={styles.thumbs}>
                        {normalizedItems.map((item, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`${styles.thumb} ${i === currentIndex ? styles.isActive : ""}`}
                                aria-label={item.title}
                                onClick={() => goToSlide(i)}
                            >
                                {item.thumb && (
                                    <img
                                        className={styles.thumbImg}
                                        src={item.thumb}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
