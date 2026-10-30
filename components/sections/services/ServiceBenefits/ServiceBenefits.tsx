import type { ReactNode } from "react";
import Image from "next/image";
import { ManropeText, TextGradient } from "@/components/ui/Text";
import { ButtonTransparentToGradient } from "@/components/ui/Buttons";
import styles from "./ServiceBenefits.module.css";

export type BenefitItem = {
    number?: string;
    title: string;
    desc: ReactNode;
};

export const DEFAULT_BENEFITS: BenefitItem[] = [
    {
        title: "Tăng Traffic tự nhiên",
        desc: "Tối ưu nội dung và cấu trúc website giúp cải thiện khả năng hiển thị trên Google, tiếp cận người dùng đang tìm kiếm sản phẩm và dịch vụ của doanh nghiệp.",
    },
    {
        title: "Giảm chi phí quảng cáo",
        desc: "SEO giúp doanh nghiệp phát triển nguồn truy cập tự nhiên, giảm sự phụ thuộc vào quảng cáo trả phí và xây dựng kênh tiếp cận khách hàng dài hạn.",
    },
    {
        title: "Tăng tỉ lệ chuyển đổi khách hàng",
        desc: "Tối ưu nội dung, trải nghiệm người dùng và hành trình chuyển đổi giúp khách hàng dễ dàng tìm thấy thông tin, đánh giá dịch vụ và thực hiện hành động phù hợp.",
    },
];

export type ServiceBenefitsProps = {
    heading?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    benefits?: BenefitItem[];
    ctaText?: string;
    ctaLink?: string;
    className?: string;
};

export default function ServiceBenefits({
    heading = "Giá trị vượt trội từ dịch vụ SEO tổng thể",
    imageSrc = "/images/dich-vu-SEO-tong-the-2.webp",
    imageAlt = "Giá trị vượt trội từ dịch vụ SEO tổng thể",
    imageWidth = 1207,
    imageHeight = 829,
    benefits = DEFAULT_BENEFITS,
    ctaText = "Tư vấn ngay",
    ctaLink = "https://zalo.me/+84708070888",
    className = "",
}: ServiceBenefitsProps) {
    const sectionClassName = [styles.serviceBenefits, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className={styles.serviceBenefitsWrapper}>
                <div className={styles.serviceBenefitsColImage}>
                    <Image
                        className={styles.serviceBenefitsImage}
                        src={imageSrc}
                        width={imageWidth}
                        height={imageHeight}
                        alt={imageAlt}
                    />
                </div>
                <div className={styles.serviceBenefitsContent}>
                    <h2 className={styles.serviceBenefitsTitle}>
                        <TextGradient text={heading} />
                    </h2>
                    <div className={styles.serviceBenefitsList}>
                        {benefits.map((item, index) => {
                            const num = item.number ?? String(index + 1).padStart(2, "0");
                            return (
                                <div key={index} className={styles.serviceBenefitsItem}>
                                    <div className={styles.serviceBenefitsItemBadge}>
                                        <span className={styles.serviceBenefitsItemNumber}>
                                            <ManropeText text={num} gradientText={true} />
                                        </span>
                                    </div>
                                    <div className={styles.serviceBenefitsItemBody}>
                                        <h3 className={styles.serviceBenefitsItemTitle}>{item.title}</h3>
                                        <div className={styles.serviceBenefitsItemDesc}>{item.desc}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.serviceBenefitsAction}>
                        <ButtonTransparentToGradient
                            className={styles.serviceBenefitsButton}
                            text={ctaText}
                            link={ctaLink}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

