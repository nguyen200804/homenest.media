import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="fullWidth">
          <div className={styles.wrapper}>
            <div className={styles.videoBox}>
              <video src="/videos/homnest_media.mp4" autoPlay loop muted></video>
            </div>
            <div>
              <div className={styles.heading}>
                <h1>
                  GIẢI PHÁP MARKETING & TRUYỀN THÔNG TOÀN DIỆN CHO DOANH NGHIỆP
                </h1>
                <p>
                  “HomeNest Media là đối tác tin cậy, cung cấp các giải pháp marketing và truyền thông toàn diện để giúp doanh nghiệp của bạn phát triển bền vững. Từ Digital Marketing, Branding, Thiết kế logo, Sáng tạo Video, đến Tổ chức sự kiện và Quảng cáo ngoài trời, chúng tôi đồng hành cùng bạn trên mọi bước đường.”
                </p>
              </div>
              <div className={styles.slogan}>

              </div>
              <div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
