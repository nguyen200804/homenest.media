import Image from "next/image";
import styles from "./page.module.css";
import { ButtonBottomRight, ButtonTransparentToGradient } from "@/components/ui/Buttons";
import { ManropeText, TextGradient } from "@/components/ui/Text";
import { PROJECTS } from "@/constants/projects";
import { TEAM_ITEMS } from "@/constants/team";
import { LIST_TESTIMONIAL } from "@/constants/testimonial";
import FAQSection from "@/components/sections/FAQSection";
import { Star } from "@/components/ui/icons";
import { PARTNER } from "@/constants/partner";
import { BLOG_LIST } from "@/constants/blog";
import Tag from "@/components/ui/Tag";

/** Số dự án mỗi nhóm trong marquee. */
const PROJECT_GROUP_SIZE = 4;
/** Số lần danh sách dự án được render trong marquee (bản gốc + bản sao) để chạy vòng lặp liền mạch. */
const DUPLICATE_PROJECT = 2;

const PROJECT_GROUPS = Array.from(
  { length: Math.ceil(PROJECTS.length / PROJECT_GROUP_SIZE) },
  (_, index) =>
    PROJECTS.slice(index * PROJECT_GROUP_SIZE, (index + 1) * PROJECT_GROUP_SIZE),
);

const MARQUEE_GROUPS = Array.from({ length: DUPLICATE_PROJECT }, (_, copyIndex) =>
  PROJECT_GROUPS.map((projects, groupIndex) => ({
    key: `${copyIndex}-${groupIndex}`,
    projects,
    /** Bản sao: ẩn khỏi screen reader. */
    isClone: copyIndex > 0,
  })),
).flat();

/** Số lần nhân bản mỗi hàng để animation (-50% → 0) lặp liền mạch. */
const TEAM_REPEAT_COUNT = 4;

/** Chia danh sách thành viên làm 2 hàng: nửa đầu và nửa sau. */
const TEAM_MIDDLE_INDEX = Math.ceil(TEAM_ITEMS.length / 2);

const TEAM_ROWS = [
  {
    items: TEAM_ITEMS.slice(0, TEAM_MIDDLE_INDEX),
    trackClassName: styles.teamSectionTickerTrackRow1,
  },
  {
    items: TEAM_ITEMS.slice(TEAM_MIDDLE_INDEX),
    trackClassName: styles.teamSectionTickerTrackRow2,
  },
];

/** Kích thước gốc của logo đối tác (px): logo vuông 248×248, logo chữ nhật 492×248. */
const PARTNER_LOGO_HEIGHT = 248;
const PARTNER_LOGO_UNIT_WIDTH = 248;

/** Số lần danh sách logo đối tác được render (bản gốc + bản sao) để marquee chạy vòng lặp liền mạch. */
const DUPLICATE_PARTNER = 2;

/** Chia logo đối tác theo dòng (1, 2, 3). */
const PARTNER_LINES = ([1, 2, 3] as const).map((line) =>
  PARTNER.filter((partner) => partner.line === line),
);

/** Danh sách logo đối tác không trùng (dùng cho marquee 1 hàng). */
const PARTNER_LOGOS = PARTNER.filter(
  (partner, index) =>
    PARTNER.findIndex((item) => item.urlImage === partner.urlImage) === index,
);

/** Tạo alt từ tên file logo: "/images/thuong-hieu/the-oak.webp" → "the oak". */
const getPartnerName = (urlImage: string) =>
  (urlImage.split("/").pop() ?? "").replace(/\.\w+$/, "").replace(/-/g, " ");

/** Nội dung chữ chạy (marquee) ở đầu khối Blog. */
const BLOG_MARQUEE_TEXT = "Not just service, we accompany your development";
/** Số lần lặp chữ trong mỗi nhóm, đủ dài để phủ kín chiều rộng màn hình. */
const BLOG_MARQUEE_REPEAT = 3;
/** Số nhóm render (bản gốc + bản sao) để animation (0 → -50%) lặp liền mạch. */
const DUPLICATE_BLOG_MARQUEE = 2;

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
                  “HomeNest.media là đối tác tin cậy, cung cấp các giải pháp marketing và truyền thông toàn diện để giúp doanh nghiệp của bạn phát triển bền vững. Từ Digital Marketing, Branding, Thiết kế logo, Sáng tạo Video, đến Tổ chức sự kiện và Quảng cáo ngoài trời, chúng tôi đồng hành cùng bạn trên mọi bước đường.”
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
                  <p className={styles.heroStatNumber}><ManropeText text="10+" /></p>
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
                  <p className={styles.heroStatNumber}><ManropeText text="250+" /></p>
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




      <section className={styles.creationSection}>
        <div className="fullWidth">
          <div className={styles.creationWrapper}>
            <div className={styles.creationMedia}>
              <Image
                className={styles.creationMediaImage}
                src="/images/creation/Creation_1.webp"
                alt="Logo HomeNest.media"
                width={2483}
                height={2560}
              />
              <div className={styles.creationPanel}>
                <Image
                  className={styles.creationPanelImage}
                  src="/images/hero_section/hero_banner_2.webp"
                  alt="Logo HomeNest.media"
                  width={1570}
                  height={1707}
                />
                <div className={styles.creationStat}>
                  <p className={styles.creationStatNumber}><ManropeText text="1K+" /></p>
                  <p className={styles.creationStatLabel}>Dự án đã thực hiện</p>
                </div>
                <div className={styles.creationStat}>
                  <p className={styles.creationStatNumber}><ManropeText text="250+" /></p>
                  <p className={styles.creationStatLabel}>Khách hàng mới mỗi năm</p>
                </div>
              </div>
            </div>
            <div className={styles.creationContent}>
              <Image
                className={styles.creationLogo}
                src="/images/logo/logo-big_homenest-media.webp"
                alt="Logo HomeNest.media"
                width={2560}
                height={681}
              />

              <h2 className={styles.creationTitle}>
                Kiến tạo <br /><TextGradient text="thành công bền vững" />
              </h2>

              <div className={styles.creationDescription}>
                <p className={styles.creationDescriptionText}>
                  Với hơn 10 năm kinh nghiệm trong Branding, Digital Marketing, Quảng cáo và Event, chúng tôi biến ý tưởng thành kết quả, đồng hành cùng doanh nghiệp chinh phục thành công bền vững.
                </p>
                <p className={styles.creationDescriptionText}>
                  Cùng chúng tôi khai phá tiềm năng, tỏa sáng và dẫn đầu trong môi trường số!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className={styles.brandStorySection}>
        <div className="container">
          <div className={styles.brandStoryWrapper}>
            <article className={styles.brandStoryContent}>
              <header className={styles.brandStoryIntro}>
                <h2 className={styles.brandStoryTitle}>
                  <TextGradient text="Định hình giá trị thương hiệu" /> là cả một hành trình
                </h2>
                <hr className={styles.brandStoryDivider} />
                <p className={styles.brandStoryText}>
                  <TextGradient
                    className={styles.brandStorySlogan}
                    tagHTML="strong"
                    text="Not just service, we accompany your development”"
                  /> không chỉ là slogan, mà còn là cam kết của HomeNest.media với khách hàng. Đây là triết lý kinh doanh của HomeNest.media – nơi mà khách hàng không chỉ nhận được dịch vụ chất lượng mà còn có một đối tác tin cậy, sẵn sàng hỗ trợ khách hàng trong mọi giai đoạn phát triển.
                </p>
              </header>

              <ol className={styles.brandStoryList}>
                <li className={styles.brandStoryItem}>
                  <ManropeText
                    className={styles.brandStoryItemNumber}
                    text="01"
                    textStrokeGradient
                  />
                  <div className={styles.brandStoryItemContent}>
                    <h3 className={styles.brandStoryItemTitle}>
                      <TextGradient text="Tầm nhìn" />
                    </h3>
                    <p className={styles.brandStoryItemText}>Với tầm nhìn thúc đẩy sự phát triển bền vững cho doanh nghiệp, chúng tôi hướng tới vị thế tiên phong trong lĩnh vực marketing và thiết kế website, bằng cách mang đến cho khách hàng những giải pháp toàn diện, hiệu quả vượt trội và sự đột phá sáng tạo.</p>
                  </div>
                </li>
                <li className={styles.brandStoryItem}>
                  <ManropeText
                    className={styles.brandStoryItemNumber}
                    text="02"
                    textStrokeGradient
                  />
                  <div className={styles.brandStoryItemContent}>
                    <h3 className={styles.brandStoryItemTitle}>
                      <TextGradient text="Sứ mệnh" />
                    </h3>
                    <p className={styles.brandStoryItemText}>Vì sự phát triển của thương hiệu Việt, HomeNest.media được thành lập nhằm giúp các doanh nghiệp nâng cao lợi thế cạnh tranh thông qua việc xây dựng thương hiệu mạnh mẽ.</p>
                  </div>
                </li>
                <li className={styles.brandStoryItem}>
                  <ManropeText
                    className={styles.brandStoryItemNumber}
                    text="03"
                    textStrokeGradient
                  />
                  <div className={styles.brandStoryItemContent}>
                    <h3 className={styles.brandStoryItemTitle}>
                      <TextGradient text="Giá trị cốt lõi" />
                    </h3>
                    <p className={styles.brandStoryItemText}>Tận tâm – Sáng tạo – Hợp tác – Cam kết – Hiệu quả. Chúng tôi giúp doanh nghiệp phát triển bền vững, đồng hành cùng sự thành công của bạn.</p>
                  </div>
                </li>
              </ol>
            </article>

            <figure className={styles.brandStoryMedia}>
              <Image
                className={styles.brandStoryImage}
                src="/images/brand-story/brand-story_image.webp"
                alt="Brand Story"
                width={1080}
                height={1920}
                priority
              />
            </figure>
          </div>
        </div>
      </section>



      <section className={styles.projectSection}>
        <div className="container">
          <header className={styles.projectHeader}>
            <h2 className={styles.projectTitle}>
              Ý tưởng thành hình, thương hiệu vươn xa
            </h2>
            <p className={styles.projectDescription}>
              Chúng tôi tự hào mang đến những giải pháp toàn diện và hiệu quả vượt trội, giúp doanh nghiệp phát triển bền vững và chinh phục thành công trong môi trường số.
            </p>
          </header>
        </div>


        <div className={styles.projectWrapper}>
          <div className={styles.projectMarquee}>
            <div className={styles.projectMarqueeTrack}>
              {MARQUEE_GROUPS.map(({ key, projects, isClone }) => (
                <ul
                  key={key}
                  className={styles.projectMarqueeGroup}
                  aria-hidden={isClone || undefined}
                >
                  {projects.map((project) => (
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




      <section className={styles.teamSection}>
        <div className="container">
          <header className={styles.teamSectionHeader}>
            <h2 className={styles.teamSectionTitle}>
              <TextGradient text="Đội ngũ phát triển: " />
              <br />
              Giải pháp chất lượng cho doanh nghiệp
            </h2>
            <p className={styles.teamSectionDescription}>
              Những website phần mềm từ HomeNest luôn được tư vấn, phát triển, tối ưu nhằm mang lại hiệu quả rõ rệt cho hoạt động kinh doanh của doanh nghiệp.
            </p>
          </header>
        </div>
        <div className={styles.teamSectionMarquee}>
          {TEAM_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.teamSectionTickerWrapper}>
              <ul className={`${styles.teamSectionTickerTrack} ${row.trackClassName}`}>
                {Array.from({ length: TEAM_REPEAT_COUNT }).flatMap((_, copyIndex) =>
                  row.items.map((item, itemIndex) => {
                    /** Bản sao: ẩn khỏi screen reader. */
                    const isCopy = copyIndex > 0;
                    const key = `${copyIndex}-${itemIndex}`;

                    if (item.type === "quote") {
                      return (
                        <li
                          key={key}
                          className={styles.teamSectionCardQuote}
                          aria-hidden={isCopy || undefined}
                        >
                          <p className={styles.teamSectionCardQuoteText}>{item.text}</p>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={key}
                        className={styles.teamSectionCardPhoto}
                        aria-hidden={isCopy || undefined}
                      >
                        <Image
                          className={styles.teamSectionCardImage}
                          src={item.src}
                          alt={isCopy ? "" : item.alt}
                          fill
                          sizes="168px"
                          loading="lazy"
                        />
                      </li>
                    );
                  }),
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>




      <section className={styles.accompanySection}>
        {/* hình con bò xám bên trái */}
        <div className={styles.accompanyDecor}>
          <Image
            className={styles.accompanyDecorImage}
            src="/images/dau-trau.webp"
            alt=""
            width={1484}
            height={2560}
            aria-hidden="true"
          />
        </div>

        <div className={styles.accompanyQuote}>
          <blockquote className={styles.accompanyQuoteText}>
            <i><TextGradient text="Không chỉ dịch vụ - Homenest đồng hành" /> trên mọi lĩnh vực phát triển của bạn</i>
          </blockquote>
          <div className={styles.accompanyQuoteAuthor}>
            <Image
              className={styles.accompanyQuoteSignature}
              src="/images/chu_ky.svg"
              alt="Chữ ký Co-Founder HomeNest.media"
              width={288}
              height={122}
            />
            <span className={styles.accompanyQuoteRole}>CO-FOUNDER</span>
          </div>
        </div>


        <div className={styles.accompanyMarquee}>
          <div className={styles.accompanyMarqueeWrapper}>
            {/* Duplicate */}
            {Array.from({ length: DUPLICATE_PARTNER }).map((_, copyIndex) => {
              /** Bản sao: ẩn khỏi screen reader. */
              const isClone = copyIndex > 0;

              return (
                <div
                  key={copyIndex}
                  className={styles.accompanyMarqueeGroup}
                  aria-hidden={isClone || undefined}
                >
                  {PARTNER_LINES.map((partners, lineIndex) => (
                    <div key={lineIndex} className={styles.accompanyMarqueeLine}>
                      {partners.map((partner) => (
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



      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.testimonialWrapper}>
            <header className={styles.testimonialHeader}>
              <h2 className={styles.testimonialTitle}>Khách hàng nói gì về <TextGradient text="HomeNest.media" /></h2>
              <div className={styles.testimonialRating} role="img" aria-label="Đánh giá 5 trên 5 sao">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} />
                ))}
              </div>
            </header>
            <ul className={styles.testimonialList}>
              {LIST_TESTIMONIAL.map((item, index) => (
                <li key={index} className={styles.testimonialItem}>
                  <article className={styles.testimonialCard}>
                    <header className={styles.testimonialCardHeader}>
                      <h3 className={styles.testimonialCardName}>{item.name}</h3>
                      <div className={styles.testimonialCardRating} role="img" aria-label={`Đánh giá ${item.star} trên 5 sao`}>
                        {Array.from({ length: item.star }).map((_, starIndex) => (
                          <Star key={starIndex} />
                        ))}
                      </div>
                    </header>
                    <blockquote className={styles.testimonialCardContent}>{item.content}</blockquote>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      <section className={styles.partnerSection} aria-label="Đối tác của HomeNest.media">
        <div className={styles.partnerMarquee}>
          <div className={styles.partnerMarqueeTrack}>
            {Array.from({ length: DUPLICATE_PARTNER }).map((_, copyIndex) => {
              /** Bản sao: ẩn khỏi screen reader. */
              const isClone = copyIndex > 0;

              return (
                <ul
                  key={copyIndex}
                  className={styles.partnerMarqueeGroup}
                  aria-hidden={isClone || undefined}
                >
                  {PARTNER_LOGOS.map((partner) => (
                    <li
                      key={partner.urlImage}
                      className={`${styles.partnerMarqueeItem} ${partner.width === 2
                        ? styles.partnerMarqueeItemWide
                        : styles.partnerMarqueeItemSquare
                        }`}
                    >
                      <Image
                        className={styles.partnerMarqueeImage}
                        src={partner.urlImage}
                        alt={isClone ? "" : getPartnerName(partner.urlImage)}
                        width={partner.width * PARTNER_LOGO_UNIT_WIDTH}
                        height={PARTNER_LOGO_HEIGHT}
                      />
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
      </section>


      <FAQSection />



      <section className={styles.blogSection}>

        <div className={styles.blogMarqueeText}>
          <div className={styles.blogMarqueeTrack}>
            {Array.from({ length: DUPLICATE_BLOG_MARQUEE }).map((_, copyIndex) => {
              /** Bản sao: ẩn khỏi screen reader. */
              const isClone = copyIndex > 0;

              return (
                <div
                  key={copyIndex}
                  className={styles.blogMarqueeGroup}
                  aria-hidden={isClone || undefined}
                >
                  {Array.from({ length: BLOG_MARQUEE_REPEAT }).map((_, itemIndex) => (
                    <span key={itemIndex} className={styles.blogMarqueeItem}>
                      {BLOG_MARQUEE_TEXT}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="fullWidth">
          <div className={styles.blogWrapper}>

            <h2 className={styles.blogTitle}><TextGradient text="Tin tức" /> và <TextGradient text="xu hướng" /> <br />mới nhất</h2>
            <p className={styles.blogDescription}>Tìm hiểu về những phát triển thú vị và xu hướng nổi bật của tương lai tương lai trong và ngoài nước.</p>

            <div className={styles.blogList}>
              {BLOG_LIST.map((blog, index) => (

                <article key={index} className={styles.blogCard}>
                  <Tag className={styles.blogCardCategory} text={blog.category} />
                  <h3 className={styles.blogCardTitle}>{blog.title}</h3>
                  <p className={styles.blogCardText}>{blog.desc}</p>
                  <div className={styles.blogCardMeta}>
                    <p className={styles.blogCardAuthor}>{blog.author}</p>
                    <span className={styles.blogCardDivider}></span>
                    <p className={styles.blogCardDate}>{blog.date}</p>
                  </div>
                </article>


              ))}
            </div>

            <div className={styles.blogButtonSeeMore}>
              <ButtonTransparentToGradient text="Xem thêm" link="#" />
            </div>

          </div>

        </div>
      </section>

    </>
  );
}
