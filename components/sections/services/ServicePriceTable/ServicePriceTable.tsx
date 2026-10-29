import type { ReactNode } from "react";
import { TextGradient } from "@/components/ui/Text";
import { PhoneIcon } from "@/components/ui/icons";
import styles from './ServicePriceTable.module.css';

export type PricePlanItem = {
    title: string;
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
        title: "STANDARD",
        description: (
            <>
                <strong>Gói Standard</strong> Tập trung vào các kỹ thuật <a href="#">SEO Onpage</a>, nâng cao trải nghiệm người dùng và tạo sự nhận diện cho thương hiệu.
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
        price: "15.000.000",
        ctaText: "Tư vấn ngay",
    },
    {
        title: "PREMIUM",
        description: (
            <>
                <strong>Gói Premium</strong> Tập trung vào các kỹ thuật <a href="#">SEO Onpage</a>, nâng cao trải nghiệm người dùng và tạo sự nhận diện cho thương hiệu.
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
        price: "25.000.000",
        ctaText: "Tư vấn ngay",
    },
    {
        title: "ENTERPRISE",
        description: (
            <>
                <strong>Gói Enterprise</strong> Tập trung vào các kỹ thuật <a href="#">SEO Onpage</a>, nâng cao trải nghiệm người dùng và tạo sự nhận diện cho thương hiệu.
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
        price: "Liên hệ",
        ctaText: "Tư vấn ngay",
    },
];

export type ServicePriceTableProps = {
    heading?: string;
    plans?: PricePlanItem[];
    className?: string;
};

export default function ServicePriceTable({
    heading = "Bảng giá dịch vụ SEO tổng thể -Homenest Media",
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
                                    <div className={styles.servicePriceTableCardHeader}>
                                        <h3 className={styles.servicePriceTableCardTitle}>{plan.title}</h3>
                                    </div>
                                    <p className={styles.servicePriceTableCardDesc}>
                                        {plan.description}
                                    </p>
                                    <hr className={styles.servicePriceTableCardDivider} />
                                    <ul className={styles.servicePriceTableFeatureList}>
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className={styles.servicePriceTableFeatureItem}>
                                                {feature}
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
                                            <PhoneIcon />
                                        </a>
                                        <p className={styles.servicePriceTablePriceInfo}>
                                            <span className={styles.servicePriceTablePriceNumber}>{plan.price}</span>
                                            <span className={styles.servicePriceTablePriceText}>{plan.ctaText ?? "Tư vấn ngay"}</span>
                                        </p>
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