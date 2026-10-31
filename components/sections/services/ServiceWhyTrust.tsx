import type { ReactNode } from "react";
import Image from "next/image";
import { TextGradient } from "@/components/ui/Text";
import { BookmarkIcon } from "@/components/ui/icons";
import styles from "../../../styles/sections/services/ServiceWhyTrust.module.css";

export type WhyTrustItem = {
    title: string;
    desc: ReactNode;
};

export const DEFAULT_WHY_TRUST_ITEMS: WhyTrustItem[] = [
    {
        title: "Chiến lược SEO gắn với mục tiêu kinh doanh",
        desc: "HomeNest.media xây dựng định hướng SEO dựa trên tình trạng website, lĩnh vực hoạt động và mục tiêu phát triển của doanh nghiệp.",
    },
    {
        title: "Tối ưu toàn diện website",
        desc: "Kết hợp tối ưu kỹ thuật, cấu trúc website và nội dung nhằm cải thiện khả năng hiển thị trên Google và nâng cao trải nghiệm người dùng.",
    },
    {
        title: "Triển khai có kế hoạch, theo dõi rõ ràng",
        desc: "Các hạng mục SEO được xác định theo lộ trình, kết hợp theo dõi dữ liệu và báo cáo để đánh giá hiệu quả, điều chỉnh khi cần thiết",
    },
    {
        title: "Định hướng tăng trưởng dài hạn",
        desc: "Tập trung phát triển nền tảng tìm kiếm tự nhiên, hỗ trợ doanh nghiệp tiếp cận khách hàng tiềm năng và giảm sự phụ thuộc vào quảng cáo trả phí.",
    },
];

const DEFAULT_HEADING = (
    <>
        Vì sao doanh nghiệp nên tin tưởng <TextGradient text="Dịch vụ SEO tổng thể" /> tại HomeNest.media
    </>
);

export type ServiceWhyTrustProps = {
    heading?: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    items?: WhyTrustItem[];
    className?: string;
};

export default function ServiceWhyTrust({
    heading = DEFAULT_HEADING,
    imageSrc = "/images/why-trust-services.webp",
    imageAlt = "Vì sao doanh nghiệp nên tin tưởng Dịch vụ SEO tổng thể",
    imageWidth = 1009,
    imageHeight = 729,
    items = DEFAULT_WHY_TRUST_ITEMS,
    className = "",
}: ServiceWhyTrustProps) {
    const sectionClassName = [styles.serviceWhyTrust, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="container">
                <div className={styles.serviceWhyTrustWrapper}>
                    <header className={styles.serviceWhyTrustHeader}>
                        <h2 className={styles.serviceWhyTrustTitle}>
                            {heading}
                        </h2>
                    </header>
                    <div className={styles.serviceWhyTrustContent}>
                        <div className={styles.serviceWhyTrustColImage}>
                            <Image
                                className={styles.serviceWhyTrustImage}
                                src={imageSrc}
                                width={imageWidth}
                                height={imageHeight}
                                alt={imageAlt}
                            />
                        </div>
                        <ul className={styles.serviceWhyTrustList}>
                            {items.map((item, index) => (
                                <li key={index} className={styles.serviceWhyTrustItem}>
                                    <span className={styles.serviceWhyTrustItemIcon}>
                                        <BookmarkIcon />
                                    </span>
                                    <div className={styles.serviceWhyTrustItemBody}>
                                        <h3 className={styles.serviceWhyTrustItemTitle}>{item.title}</h3>
                                        <div className={styles.serviceWhyTrustItemDesc}>{item.desc}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
