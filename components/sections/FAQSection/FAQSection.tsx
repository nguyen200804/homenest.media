import styles from './FAQSection.module.css';
import { ManropeText, TextGradient } from '@/components/ui/Text';

export type TFAQItem = {
    question: string;
    answer: string;
};

export type FAQSectionProps = {
    faqs?: TFAQItem[];
    headingText?: string;
};

const DEFAULT_FAQS: TFAQItem[] = [
    {
        question: 'Dịch vụ của HomeNest Media gồm những gì?',
        answer: 'Chúng tôi cung cấp giải pháp toàn diện gồm Digital Marketing, Branding, Thiết kế website, Sáng tạo video, Tổ chức sự kiện và Quảng cáo ngoài trời.'
    },
    {
        question: 'Chi phí triển khai dịch vụ được tính như thế nào?',
        answer: 'Chi phí được tối ưu linh hoạt tùy theo quy mô, mục tiêu và yêu cầu cụ thể của từng doanh nghiệp.'
    },
    {
        question: 'Thời gian hoàn thành một dự án branding/website là bao lâu?',
        answer: 'Thông thường từ 2 đến 6 tuần tùy theo độ phức tạp và khối lượng công việc của dự án.'
    },
    {
        question: 'HomeNest có hỗ trợ sau khi bàn giao dự án không?',
        answer: 'Có, chúng tôi luôn đồng hành bảo hành, hỗ trợ kỹ thuật và tư vấn phát triển lâu dài cho đối tác.'
    },
];

export default function FAQSection({
    faqs = DEFAULT_FAQS,
    headingText = "Câu hỏi thường gặp",
}: FAQSectionProps) {
    return (
        <section className={styles.faqSection}>
            <div className="container">
                <div className={styles.faqWrapper}>
                    <header className={styles.faqHeader}>
                        <h2 className={styles.faqTitle}>
                            <TextGradient text={headingText} />
                        </h2>
                    </header>
                    <div className={styles.faqContent}>
                        <ul className={styles.faqList}>
                            {faqs.map((faq, index) => (
                                <li key={index} className={styles.faqItem}>
                                    <div className={styles.faqIndex}>
                                        <ManropeText
                                            className={styles.faqIndexNumber}
                                            text={String(index + 1).padStart(2, "0")}
                                        />
                                    </div>
                                    <div className={styles.faqItemContent}>
                                        <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                        <p className={styles.faqAnswer}>{faq.answer}</p>
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
