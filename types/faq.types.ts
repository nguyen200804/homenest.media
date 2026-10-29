import type { ReactNode } from "react";

/** Một mục câu hỏi và câu trả lời trong section FAQ. */
export type FAQItem = {
    question: string;
    answer: ReactNode;
};

/** Alias tương thích ngược với mã nguồn cũ. */
export type TFAQItem = FAQItem;
