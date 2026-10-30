import type { ReactNode } from "react";
import Image from "next/image";
import { TextGradient } from "@/components/ui/Text";
import { PARTNER } from "@/constants/partner";
import type { Partner } from "@/types/partner.types";
import styles from "./AccompanySection.module.css";

const PARTNER_LOGO_HEIGHT = 248;
const PARTNER_LOGO_UNIT_WIDTH = 248;
const DEFAULT_DUPLICATE_PARTNER = 2;

const getPartnerName = (urlImage: string) =>
    (urlImage.split("/").pop() ?? "").replace(/\.\w+$/, "").replace(/-/g, " ");

export type AccompanySectionProps = {
    className?: string;
    quoteHighlight?: string;
    quoteSuffix?: string;
    quoteNode?: ReactNode;
    decorImageSrc?: string;
    signatureSrc?: string;
    authorRole?: string;
    partners?: Partner[];
    duplicateCount?: number;
};

export default function AccompanySection({
    className = "",
    quoteHighlight = "Không chỉ dịch vụ - Homenest đồng hành",
    quoteSuffix = "trên mọi lĩnh vực phát triển của bạn",
    quoteNode,
    decorImageSrc = "/images/dau-trau.webp",
    signatureSrc = "/images/chu_ky.svg",
    authorRole = "CO-FOUNDER",
    partners = PARTNER,
    duplicateCount = DEFAULT_DUPLICATE_PARTNER,
}: AccompanySectionProps) {
    const sectionClassName = [styles.accompanySection, className].filter(Boolean).join(" ");

    const partnerLines = ([1, 2, 3] as const).map((line) =>
        partners.filter((partner) => partner.line === line),
    );

    return (
        <section className={sectionClassName}>
            {/* hình con bò xám bên trái */}
            <div className={styles.accompanyDecor}>
                <Image
                    className={styles.accompanyDecorImage}
                    src={decorImageSrc}
                    alt=""
                    width={1484}
                    height={2560}
                    aria-hidden="true"
                />
            </div>

            <div className={styles.accompanyQuote}>
                <blockquote className={styles.accompanyQuoteText}>
                    {quoteNode ?? (
                        <i>
                            <TextGradient text={quoteHighlight} /> {quoteSuffix}
                        </i>
                    )}
                </blockquote>
                <div className={styles.accompanyQuoteAuthor}>
                    <Image
                        className={styles.accompanyQuoteSignature}
                        src={signatureSrc}
                        alt="Chữ ký Co-Founder HomeNest.media"
                        width={288}
                        height={122}
                    />
                    <span className={styles.accompanyQuoteRole}>{authorRole}</span>
                </div>
            </div>

            <div className={styles.accompanyMarquee}>
                <div className={styles.accompanyMarqueeWrapper}>
                    {Array.from({ length: duplicateCount }).map((_, copyIndex) => {
                        /** Bản sao: ẩn khỏi screen reader. */
                        const isClone = copyIndex > 0;

                        return (
                            <div
                                key={copyIndex}
                                className={styles.accompanyMarqueeGroup}
                                aria-hidden={isClone || undefined}
                            >
                                {partnerLines.map((linePartners, lineIndex) => (
                                    <div key={lineIndex} className={styles.accompanyMarqueeLine}>
                                        {linePartners.map((partner) => (
                                            <div
                                                key={partner.urlImage}
                                                className={`${styles.accompanyMarqueeItem} ${partner.width === 2
                                                    ? styles.accompanyMarqueeItemWide
                                                    : styles.accompanyMarqueeItemSquare
                                                    }`}
                                            >
                                                <Image
                                                    className={styles.accompanyMarqueeImage}
                                                    src={partner.urlImage}
                                                    alt={isClone ? "" : getPartnerName(partner.urlImage)}
                                                    width={partner.width * PARTNER_LOGO_UNIT_WIDTH}
                                                    height={PARTNER_LOGO_HEIGHT}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

