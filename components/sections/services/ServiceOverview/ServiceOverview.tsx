import type { ReactNode } from 'react';
import Image from 'next/image';
import { TextGradient } from '@/components/ui/Text';
import styles from './ServiceOverview.module.css';

export type ServiceOverviewProps = {
    title: string;
    description: ReactNode;
    urlImg?: string;
    altImg?: string;
    widthImg?: number;
    heightImg?: number;
};

export default function ServiceOverview({
    title,
    description,
    urlImg = "/images/dich-vu/seo-tong-the/Anh-bia_SEO-tong-the.jpg",
    altImg,
    widthImg = 1000,
    heightImg = 1000,
}: ServiceOverviewProps) {
    return (
        <section className={styles.serviceOverview}>
            <div className="container">
                <div className={styles.serviceOverviewWrapper}>
                    <div className={styles.serviceOverviewContent}>
                        <h2 className={styles.serviceOverviewTitle}>
                            <TextGradient text={title} />
                        </h2>
                        <div className={styles.serviceOverviewDescription}>
                            {description}
                        </div>
                    </div>
                    <div className={styles.serviceOverviewMedia}>
                        <Image
                            className={styles.serviceOverviewImage}
                            src={urlImg}
                            alt={altImg ?? title}
                            width={widthImg}
                            height={heightImg}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
