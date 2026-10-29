'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';
import { ManropeText, TextGradient } from '@/components/ui/Text';
import { ChevronDown } from '@/components/ui/icons';
import type { FAQItem, TFAQItem } from '@/types/faq.types';
import { DEFAULT_FAQS } from '@/constants/faq';

export type { FAQItem, TFAQItem };

export type FAQSectionProps = {
    faqs?: FAQItem[];
    headingText?: string;
};

export default function FAQSection({
    faqs = DEFAULT_FAQS,
    headingText = 'Câu hỏi thường gặp',
}: FAQSectionProps) {
    /** Chỉ số câu hỏi đang mở (accordion mở 1 mục tại một thời điểm); null = đóng tất cả. */
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

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
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                const buttonId = `faq-question-${index}`;
                                const panelId = `faq-answer-${index}`;

                                return (
                                    <li
                                        key={index}
                                        className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                                    >
                                        <div className={styles.faqIndex}>
                                            <ManropeText
                                                className={styles.faqIndexNumber}
                                                text={String(index + 1).padStart(2, '0')}
                                                gradientText={true}
                                            />
                                        </div>
                                        <div className={styles.faqItemContent}>
                                            <h3 className={styles.faqItemHeader}>
                                                <button
                                                    type="button"
                                                    id={buttonId}
                                                    className={styles.faqButton}
                                                    aria-expanded={isOpen}
                                                    aria-controls={panelId}
                                                    onClick={() => handleToggle(index)}
                                                >
                                                    <span className={styles.faqQuestion}>{faq.question}</span>
                                                    <span className={styles.faqToggle} aria-hidden="true">
                                                        <ChevronDown />
                                                    </span>
                                                </button>
                                            </h3>
                                            <div
                                                id={panelId}
                                                className={styles.faqAnswerWrapper}
                                                role="region"
                                                aria-labelledby={buttonId}
                                            >
                                                <div className={styles.faqAnswerInner}>
                                                    <div className={styles.faqAnswer}>{faq.answer}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
