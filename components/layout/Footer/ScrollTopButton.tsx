"use client";

import styles from "./Footer.module.css";
import { RocketIcon } from "@/components/ui/icons";

export default function ScrollTopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles["homenest__scroll-top-page"]}>
            <button
                type="button"
                id="scrollTopBtn"
                aria-label="Lên đầu trang"
                onClick={handleClick}
            >
                <RocketIcon />
            </button>
        </div>
    );
}