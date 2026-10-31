"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ManropeText } from "@/components/ui/Text";
import { ChevronLeft, ChevronRight, QuoteIcon } from "@/components/ui/icons";
import styles from "../../../styles/sections/services/ServiceReview.module.css";

export type ReviewItem = {
    quote: string;
    author: string;
};

export const DEFAULT_REVIEWS: ReviewItem[] = [
    {
        quote: "“HomeNest.media giúp chúng tôi có cái nhìn rõ ràng hơn về tình trạng website và định hướng SEO. Quy trình làm việc có kế hoạch, các hạng mục được trao đổi cụ thể và dễ theo dõi.”",
        author: "Nguyễn Minh Anh, Quản lí Marketing",
    },
    {
        quote: "“Sau hơn 6 tháng hợp tác triển khai SEO tổng thể cùng HomeNest.media, lưu lượng truy cập tự nhiên tăng hơn 250%, tỷ lệ chuyển đổi khách hàng tiềm năng cải thiện rõ rệt.”",
        author: "Trần Quốc Huy, Giám đốc Kinh doanh",
    },
    {
        quote: "“Chiến lược SEO của HomeNest.media không chỉ tập trung vào thứ hạng từ khóa mà còn tối ưu sâu về mặt kỹ thuật và trải nghiệm người dùng, mang lại hiệu quả bền vững cho thương hiệu.”",
        author: "Lê Hoàng Yến, Trưởng phòng Truyền thông",
    },
];

export type ServiceReviewProps = {
    items?: ReviewItem[];
    heading?: ReactNode;
    statNumber?: string;
    statLabel?: string;
    backgroundSrc?: string;
    backgroundAlt?: string;
    backgroundWidth?: number;
    backgroundHeight?: number;
    className?: string;
};

export default function ServiceReview({
    items = DEFAULT_REVIEWS,
    heading = "HomeNest.media với bộ giải pháp All-In-One là lựa chọn hoàn hảo để tối ưu SEO doanh nghiệp của bạn.",
    statNumber = "250+",
    statLabel = "Khách hàng hài lòng",
    backgroundSrc = "/images/review-service-section.webp",
    backgroundAlt = "Review Service Section",
    backgroundWidth = 2560,
    backgroundHeight = 1707,
    className = "",
}: ServiceReviewProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const sectionClassName = [styles.serviceReview, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="fullWidth">
                <div className={styles.serviceReviewWrapper}>
                    <Image
                        className={styles.serviceReviewBackground}
                        src={backgroundSrc}
                        width={backgroundWidth}
                        height={backgroundHeight}
                        alt={backgroundAlt}
                    />
                    <div className={styles.serviceReviewColSlider}>
                        <Swiper
                            className={styles.serviceReviewSlider}
                            slidesPerView={1}
                            speed={500}
                            loop
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {items.map((review, index) => (
                                <SwiperSlide key={index} className={styles.serviceReviewSlideItem}>
                                    <span className={styles.serviceReviewQuoteIcon}>
                                        <QuoteIcon />
                                    </span>
                                    <p className={styles.serviceReviewQuoteText}>{review.quote}</p>
                                    <p className={styles.serviceReviewAuthor}>-- {review.author}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={styles.serviceReviewNav}>
                            <button
                                type="button"
                                className={styles.serviceReviewNavButton}
                                onClick={() => swiperRef.current?.slidePrev()}
                                aria-label="Previous review"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                type="button"
                                className={styles.serviceReviewNavButton}
                                onClick={() => swiperRef.current?.slideNext()}
                                aria-label="Next review"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className={styles.serviceReviewColContent}>
                        <h2 className={styles.serviceReviewTitle}>{heading}</h2>

                        <div className={styles.serviceReviewStat}>
                            <p className={styles.serviceReviewStatNumber}>
                                <ManropeText text={statNumber} />
                            </p>
                            <p className={styles.serviceReviewStatLabel}>{statLabel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

