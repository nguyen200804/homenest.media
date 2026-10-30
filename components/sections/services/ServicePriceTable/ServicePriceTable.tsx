import type { ReactNode } from "react";
import { TextGradient } from "@/components/ui/Text";
import { ChipIcon, PhoneCallIcon } from "@/components/ui/icons";
import styles from './ServicePriceTable.module.css';
import Image from "next/image";

export type PricePlanItem = {
    title: string;
    imageTag?: string;
    description: ReactNode;
    features: string[];
    note?: string;
    phone?: string;
    price: string;
    ctaText?: string;
};

export const DEFAULT_PRICE_PLANS: PricePlanItem[] = [
    {
        title: "BASIC",
        imageTag: "/images/basic.png",
        description: (
            <>
                <strong>Gói Basic</strong> Tập trung vào các kỹ thuật <a href="#">SEO Onpage</a>, nâng cao trải nghiệm người dùng và tạo sự nhận diện cho thương hiệu.
            </>
        ),
        features: [
            "90 - 100% Top 10",
            "Cam kết Top 10 các Keywords Top Volume Search",
            "x2 - x5 Organic Traffic tổng thể",
            "Chiến lược Content Marketing & Thực thi",
            "Tối ưu tỷ lệ chuyển đổi cho Website",
            "Nghiệm thu hàng tháng theo KPI",
            "Chính sách hoàn phí & Bảo hành kết quả",
            "Combo đào tạo & Chuyển giao Trainning nhân sự",
        ],
        note: "*Liên hệ ngay để được tư vấn miễn phí",
        price: "9.000.000",
        ctaText: "Tư vấn ngay",
    },
    {
        title: "GOLDEN",
        imageTag: "/images/golden.png",
        description: (
            <>
                <strong>Gói Golden</strong> Tối ưu hóa trải nghiệm người dùng và thúc đẩy quảng bá thương hiệu, đồng thời hỗ trợ trong việc phát triển kinh doanh.
            </>
        ),
        features: [
            "20 - 30% Top 5",
            "50 - 80% Top 10",
            "Cam kết Top 10 các Keywords Top Volume Search",
            "x2 - x5 Organic Traffic tổng thể",
            "Chiến lược Content Marketing & Thực thi",
            "Tối ưu tỷ lệ chuyển đổi cho Website",
            "Nghiệm thu hàng tháng theo KPI",
            "Chính sách hoàn phí & Bảo hành kết quả",
            "Combo đào tạo & Chuyển giao Trainning nhân sự",
        ],
        note: "*Liên hệ ngay để được tư vấn miễn phí",
        price: "19.000.000",
        ctaText: "Tư vấn ngay",
    },
    {
        title: "DIAMOND",
        imageTag: "/images/diamond.png",
        description: (
            <>
                <strong>Gói Diamond</strong> SEO tăng mạnh đồng thời cải thiện thứ hạng từ khóa, tăng lượng truy cập và tối ưu hóa tỷ lệ chuyển đổi
            </>
        ),
        features: [
            "25 - 40% Top 5",
            "65 - 80% Top 10",
            "Cam kết Top 10 các Keywords Top Volume Search",
            "Organic Traffic Top 5 - 10 thị trường",
            "Chiến lược Content Marketing & Thực thi",
            "Tối ưu tỷ lệ chuyển đổi Website",
            "Nghiệm thu hàng tháng theo KPI",
            "Chính sách hoàn phí & Bảo hành kết quả",
            "Combo Đào tạo & Chuyển giao Trainning nhân sự",
        ],
        note: "*Liên hệ ngay để được tư vấn miễn phí",
        price: "39.000.000",
        ctaText: "Tư vấn ngay",
    },
    {
        title: "PLATINUM",

        imageTag: "/images/plantinum.png",
        description: (
            <>
                <strong>Gói Platinum</strong> Thống trị thị trường trong lĩnh vực ngành, chiếm lĩnh toàn bộ không gian tìm kiếm tự nhiên trên Google.
            </>
        ),
        features: [
            "15 - 50% Top 3",
            "40 - 60% Top 5",
            "70 - 85% Top 10",
            "Cam kết Top 5 các Keywords Top Volume Search",
            "Organic Traffic Top 1 - 3 thị trường",
            "Chiến lược Content Marketing & Thực thi",
            "Tối ưu tỷ lệ chuyển đổi cho Website",
            "Nghiệm thu hàng tháng theo KPI",
            "Chính sách hoàn phí & Bảo hành kết quả",
            "Combo Đào tạo & Chuyển giao Trainning nhân sự",
        ],
        note: "*Liên hệ ngay để được tư vấn miễn phí",
        price: "Linh hoạt",
        ctaText: "Tư vấn ngay",
    },
];

export type ServicePriceTableProps = {
    heading?: string;
    plans?: PricePlanItem[];
    className?: string;
};

export default function ServicePriceTable({
    heading = "Bảng giá dịch vụ SEO tổng thể - HomeNest.media",
    plans = DEFAULT_PRICE_PLANS,
    className = "",
}: ServicePriceTableProps) {
    const sectionClassName = [styles.servicePriceTable, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="container">
                <div className={styles.servicePriceTableWrapper}>
                    <header className={styles.servicePriceTableHeader}>
                        <h2 className={styles.servicePriceTableTitle}>
                            <TextGradient text={heading} />
                        </h2>
                    </header>

                    <div className={styles.servicePriceTableContent}>
                        <div className={styles.servicePriceTableList}>
                            {plans.map((plan, index) => (
                                <article key={index} className={styles.servicePriceTableCard}>
                                    <div className={styles.servicePriceTableCardItem}>
                                        <div className={styles.servicePriceTableCardHeader}>
                                            {plan.imageTag && (
                                                <Image
                                                    className={styles.servicePriceTableCardImage}
                                                    src={plan.imageTag}
                                                    alt={plan.title}
                                                    width={120}
                                                    height={36}
                                                />
                                            )}
                                            <h3 className={styles.servicePriceTableCardTitle}>{plan.title}</h3>
                                        </div>
                                        <div className={styles.servicePriceTableCardDesc}>
                                            {plan.description}
                                        </div>
                                        <hr className={styles.servicePriceTableCardDivider} />
                                        <ul className={styles.servicePriceTableFeatureList}>
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className={styles.servicePriceTableFeatureItem}>
                                                    <ChipIcon />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <hr className={styles.servicePriceTableCardDivider} />
                                        {plan.note && (
                                            <p className={styles.servicePriceTableCardNote}>{plan.note}</p>
                                        )}
                                        <div className={styles.servicePriceTableCardFooter}>
                                            <a
                                                className={styles.servicePriceTablePhoneBtn}
                                                href={plan.phone ? `tel:${plan.phone}` : "tel:"}
                                                aria-label={`Liên hệ tư vấn gói ${plan.title}`}
                                            >
                                                <PhoneCallIcon />
                                            </a>
                                            <div className={styles.servicePriceTablePriceInfo}>
                                                <span className={styles.servicePriceTablePriceNumber}>{plan.price}</span>
                                                <span className={styles.servicePriceTablePriceText}>{plan.ctaText ?? "Tư vấn ngay"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}