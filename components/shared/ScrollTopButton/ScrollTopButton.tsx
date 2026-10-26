"use client";

import { useEffect, useRef, useState } from "react";
import { RocketIcon } from "@/components/ui/icons";
import styles from "./ScrollTopButton.module.css";

/** Cuộn quá ngưỡng này (px) thì nút mới hiện. */
const SHOW_OFFSET = 300;

export default function ScrollTopButton() {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            ticking = false;

            const scrollY = window.scrollY;
            const scrollable = Math.max(
                0,
                document.documentElement.scrollHeight - window.innerHeight,
            );
            const percent =
                scrollable === 0 ? 0 : Math.min(100, Math.max(0, (scrollY / scrollable) * 100));

            // Lưu % cuộn vào CSS custom property --progress (dùng trong CSS của nút)
            btnRef.current?.style.setProperty("--progress", `${percent.toFixed(2)}%`);
            setVisible(scrollY >= SHOW_OFFSET);
        };

        // Gom nhiều sự kiện scroll/resize vào 1 lần cập nhật mỗi frame
        const onChange = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onChange, { passive: true });
        window.addEventListener("resize", onChange);

        // Chiều cao trang đổi (đổi route, load thêm nội dung) thì tính lại
        const observer = new ResizeObserver(onChange);
        observer.observe(document.body);

        return () => {
            window.removeEventListener("scroll", onChange);
            window.removeEventListener("resize", onChange);
            observer.disconnect();
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles["homenest__scroll-top-page"]}>
            <button
                ref={btnRef}
                type="button"
                id="scrollTopBtn"
                className={visible ? styles.show : undefined}
                aria-label="Lên đầu trang"
                onClick={handleClick}
            >
                <RocketIcon />
            </button>
        </div>
    );
}