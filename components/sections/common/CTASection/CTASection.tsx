import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CTASection.module.css";

export type CTAData = {
    ctaInfo?: {
        title?: string;
        description?: string;
        buttonText?: string;
        buttonLink?: string;
        image?: {
            node?: {
                sourceUrl?: string;
            };
        };
    };
};

export type CTASectionProps = {
    ctaData?: CTAData;
    badge?: string;
    heading?: ReactNode;
    description?: ReactNode;
    ctaText?: string;
    ctaHref?: string;
    imageSrc?: string;
    className?: string;
};

export type CTAItem = CTASectionProps;

export default function CTASection({
    ctaData,
    badge = "Book a call now!",
    heading: headingProp,
    description: descriptionProp,
    ctaText: ctaTextProp,
    ctaHref: ctaHrefProp,
    imageSrc: imageSrcProp,
    className = "",
}: CTASectionProps) {
    const fields = ctaData?.ctaInfo || {};

    const heading =
        fields.title ||
        headingProp ||
        "Explore Our Services with Full IP Protection";
    const description =
        fields.description ||
        descriptionProp ||
        "Sign NDA and own 100% of your project.";
    const ctaText = fields.buttonText || ctaTextProp || "TALK TO OUR EXPERTS";
    const ctaHref = fields.buttonLink || ctaHrefProp || "/contact";
    const imageSrc =
        fields.image?.node?.sourceUrl ||
        imageSrcProp ||
        "https://image.homenest.software/wp-content/uploads/2026/03/Book-a-call-now.avif";

    const wrapperClassName = [styles.wrapper, className].filter(Boolean).join(" ");

    return (
        <section className={wrapperClassName}>
            <div className="container">
                <div className={styles.card}>
                    {/* Left – content */}
                    <div className={styles.content}>
                        <div className={styles.header}>
                            {/* Badge */}
                            <div className={styles.badge}>
                                <span className={styles.badgeDot} />
                                <span className={styles.badgeText}>{badge}</span>
                            </div>

                            {/* Heading */}
                            <h2 className={styles.heading}>{heading}</h2>

                            {/* Description */}
                            <p className={styles.description}>{description}</p>
                        </div>

                        {/* CTA Button */}
                        <Link href={ctaHref} className={styles.ctaButton}>
                            {ctaText}
                        </Link>
                    </div>

                    {/* Right – person image */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src={imageSrc}
                            alt="Expert consultant"
                            title="Expert consultant"
                            className={styles.image}
                            width={270}
                            height={330}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
