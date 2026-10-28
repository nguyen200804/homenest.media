import Image from "next/image";
import styles from "./page.module.css";
import { ButtonBottomRight } from "@/components/ui/Buttons";
import TextGradient from "@/components/ui/TextGradient";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="fullWidth">
          <div className={styles.heroWrapper}>
            <div className={styles.heroVideo}>
              <video src="/videos/homnest_media.mp4" autoPlay loop muted></video>
            </div>

            <div className={styles.heroContent}>
              {/* Giới thiệu */}
              <div className={styles.heroIntro}>
                <Image
                  className={styles.heroIntroImage}
                  src="/images/hero_section/hero_banner_1.webp"
                  alt="Customer Satisfaction"
                  width={347}
                  height={350}
                />
                <h2 className={styles.heroIntroTitle}>Đối tác đáng tin cậy</h2>
                <p className={styles.heroIntroText}>
                  “HomeNest Media là đối tác tin cậy, cung cấp các giải pháp marketing và truyền thông toàn diện để giúp doanh nghiệp của bạn phát triển bền vững. Từ Digital Marketing, Branding, Thiết kế logo, Sáng tạo Video, đến Tổ chức sự kiện và Quảng cáo ngoài trời, chúng tôi đồng hành cùng bạn trên mọi bước đường.”
                </p>
                <div className={styles.heroButton}>
                  <ButtonBottomRight
                    url="https://zalo.me/0986833838"
                    newTab
                    ariaLabel="Gửi tin nhắn Zalo"
                  />
                </div>
              </div>

              {/* Thống kê: kinh nghiệm */}
              <div className={styles.heroStat}>
                <Image
                  className={styles.heroStatImage}
                  src="/images/hero_section/hero_banner_2.webp"
                  alt="Customer Satisfaction"
                  width={347}
                  height={350}
                />
                <h2 className={styles.heroStatTitle}>Năm kinh nghiệm</h2>
                <div className={styles.heroStatInfo}>
                  <p className={styles.heroStatNumber}>10+</p>
                  <p className={styles.heroStatLabel}>Kinh nghiệm thực chiến</p>
                </div>
                <div className={styles.heroButton}>
                  <ButtonBottomRight
                    url="https://zalo.me/0986833838"
                    newTab
                    ariaLabel="Gửi tin nhắn Zalo"
                  />
                </div>
              </div>

              {/* Thống kê: khách hàng */}
              <div className={styles.heroStat}>
                <Image
                  className={styles.heroStatImage}
                  src="/images/hero_section/hero_banner_3.png"
                  alt="Customer Satisfaction"
                  width={156}
                  height={172}
                />
                <h2 className={styles.heroStatTitle}>Với sự hài lòng</h2>
                <div className={styles.heroStatInfo}>
                  <p className={styles.heroStatNumber}>250+</p>
                  <p className={styles.heroStatLabel}>Khách hàng mới mỗi năm</p>
                </div>
                <div className={styles.heroButton}>
                  <ButtonBottomRight
                    url="https://zalo.me/0986833838"
                    newTab
                    ariaLabel="Gửi tin nhắn Zalo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceWrapper}>
            <div className={styles.serviceIntro}>
              <h2 className={styles.serviceTitle}><span>Cùng doanh nghiệp</span> <br /><TextGradient text="xây dựng dấu ấn riêng" /></h2>
              <div className={styles.serviceStat}>
                <p className={styles.serviceStatNumber} data-text="5K+">5K+</p>
                <p className={styles.serviceStatLabel}>Hài lòng của khách hàng về dịch vụ</p>
              </div>
            </div>
            <div className={styles.serviceList}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>
                  <TextGradient text="Branding" />
                </h3>
                <p className={styles.serviceCardText}>Dịch vụ Branding của HomeNest giúp xây dựng thương hiệu mạnh mẽ, khác biệt và gắn kết với khách hàng thông qua chiến lược sáng tạo, thiết kế chuyên nghiệp và giải pháp toàn diện.</p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>
                  <TextGradient text="Digital Marketing" />
                </h3>
                <p className={styles.serviceCardText}>Dịch vụ Digital Marketing của HomeNest mang đến chiến lược trực tuyến đột phá, kết hợp SEO, quảng cáo và nội dung sáng tạo để thúc đẩy sự tăng trưởng vượt trội, tối đa hóa chuyển đổi và xây dựng thương hiệu mạnh mẽ trên mọi nền tảng số.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>
                  <TextGradient text="Thi Công Quảng Cáo" />
                </h3>
                <p className={styles.serviceCardText}>Dịch vụ thi công quảng cáo của HomeNest mang đến những giải pháp sáng tạo, từ thiết kế đến thi công, giúp thương hiệu của bạn nổi bật và gây ấn tượng mạnh mẽ, thu hút sự chú ý và tạo dấu ấn khó quên trong lòng khách hàng.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>
                  <TextGradient text="Tổ Chức Sự Kiện" />
                </h3>
                <p className={styles.serviceCardText}>Dịch vụ tổ chức sự kiện của HomeNest chuyên tạo ra những trải nghiệm ấn tượng và chuyên nghiệp, từ lên ý tưởng đến thực thi, đảm bảo mỗi sự kiện đều mang lại dấu ấn khó quên và kết nối mạnh mẽ với khách tham dự.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
