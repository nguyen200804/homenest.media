import type { ReactNode } from "react";
import { TextGradient } from "@/components/ui/Text";
import styles from "./ServiceStrategy.module.css";
import { Thunder } from "@/components/ui/icons";
import Image from "next/image";

export type ServiceStrategyProps = {
    heading: string;
    title1: ReactNode;
    desc1: ReactNode;
    title2: ReactNode;
    desc2: ReactNode;
    title3: ReactNode;
    desc3: ReactNode;
    title4: ReactNode;
    desc4: ReactNode;
};

export default function ServiceStrategy({
    heading,
    title1,
    desc1,
    title2,
    desc2,
    title3,
    desc3,
    title4,
    desc4,
}: ServiceStrategyProps) {
    return (
        <section className={styles.serviceStrategy}>
            <div className="fullWidth">
                <h2 className={styles.serviceStrategyTitle}>
                    <TextGradient text={heading} />
                </h2>
                <div className={styles.serviceStrategyWrapper}>
                    <div className={styles.serviceStrategyMedia}>
                        <video
                            className={styles.serviceStrategyVideo}
                            src="/videos/homnest_media.mp4"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </div>
                    <div className={styles.serviceStrategyContent}>
                        <div className={styles.serviceStrategyGroup}>
                            <div className={styles.serviceStrategyCard}>
                                <h3 className={styles.serviceStrategyCardTitle}>{title1}</h3>
                                <hr className={styles.serviceStrategyCardDivider} />
                                <p className={styles.serviceStrategyCardDesc}>{desc1}</p>
                            </div>
                            <div className={styles.serviceStrategyCard}>
                                <div className={styles.serviceStrategyCardIcon}>
                                    <Thunder />
                                </div>
                                <div className={styles.serviceStrategyCardBody}>
                                    <h3 className={styles.serviceStrategyCardTitle}>{title2}</h3>
                                    <p className={styles.serviceStrategyCardDesc}>{desc2}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceStrategyGroup}>
                            <div className={styles.serviceStrategyCard}>
                                <Image
                                    className={styles.serviceStrategyCardImage}
                                    src="/images/dich-vu/chien-luoc-3.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                                <h3 className={styles.serviceStrategyCardTitle}>{title3}</h3>
                                <p className={styles.serviceStrategyCardDesc}>{desc3}</p>
                            </div>
                            <div className={styles.serviceStrategyCard}>
                                <Image
                                    className={styles.serviceStrategyCardImage}
                                    src="/images/dich-vu/chien-luoc-4.webp"
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                                <h3 className={styles.serviceStrategyCardTitle}>{title4}</h3>
                                <p className={styles.serviceStrategyCardDesc}>{desc4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
