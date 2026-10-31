import type { ReactNode } from "react";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types/project.types";
import styles from "../../../styles/sections/services/ServiceProject.module.css";

/** Số dự án mỗi nhóm trong marquee. */
const PROJECT_GROUP_SIZE = 4;
/** Số lần danh sách dự án được render trong marquee (bản gốc + bản sao) để chạy vòng lặp liền mạch. */
const DUPLICATE_PROJECT = 2;

export type ServiceProjectProps = {
    heading?: ReactNode;
    description?: ReactNode;
    items?: Project[];
    className?: string;
};

export default function ServiceProject({
    heading = "Ý tưởng thành hình, thương hiệu vươn xa",
    description = "Chúng tôi tự hào mang đến những giải pháp toàn diện và hiệu quả vượt trội, giúp doanh nghiệp phát triển bền vững và chinh phục thành công trong môi trường số.",
    items = PROJECTS,
    className = "",
}: ServiceProjectProps) {
    const projectGroups = Array.from(
        { length: Math.ceil(items.length / PROJECT_GROUP_SIZE) },
        (_, index) =>
            items.slice(index * PROJECT_GROUP_SIZE, (index + 1) * PROJECT_GROUP_SIZE),
    );

    const marqueeGroups = Array.from({ length: DUPLICATE_PROJECT }, (_, copyIndex) =>
        projectGroups.map((groupProjects, groupIndex) => ({
            key: `${copyIndex}-${groupIndex}`,
            projects: groupProjects,
            /** Bản sao: ẩn khỏi screen reader. */
            isClone: copyIndex > 0,
        })),
    ).flat();

    const sectionClassName = [styles.projectSection, className].filter(Boolean).join(" ");

    return (
        <section className={sectionClassName}>
            <div className="container">
                <header className={styles.projectHeader}>
                    <h2 className={styles.projectTitle}>
                        {heading}
                    </h2>
                    <p className={styles.projectDescription}>
                        {description}
                    </p>
                </header>
            </div>

            <div className={styles.projectWrapper}>
                <div className={styles.projectMarquee}>
                    <div className={styles.projectMarqueeTrack}>
                        {marqueeGroups.map(({ key, projects: groupProjects, isClone }) => (
                            <ul
                                key={key}
                                className={styles.projectMarqueeGroup}
                                aria-hidden={isClone || undefined}
                            >
                                {groupProjects.map((project) => (
                                    <li key={project.id} className={styles.projectMarqueeItem}>
                                        <Image
                                            className={styles.projectMarqueeImage}
                                            src={project.thumbnail}
                                            alt={project.title}
                                            width={project.width}
                                            height={project.height}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
