'use client';

import { useState } from "react";
import { ServiceHero, ServiceOverview, ServiceStrategy, ServicePriceTable, ServiceBenefits, ServiceReview, ServiceWhyTrust, CTASection, AccompanySection, FAQSection } from "@/components/sections";
import { AntonText, TextGradient } from "@/components/ui/Text";
import styles from "./page.module.css";
import Image from "next/image";
import { ButtonTransparentToGradient } from "@/components/ui/Buttons";

const SEO_PROCEDURES = [
    {
        heading: "Tiếp nhận thông tin khách hàng",
        content: "HomeNest.media tìm hiểu lĩnh vực kinh doanh, sản phẩm, dịch vụ và đối tượng khách hàng mục tiêu. Qua đó, đội ngũ xác định nhu cầu, mục tiêu SEO và kỳ vọng của doanh nghiệp để làm cơ sở xây dựng phương án triển khai phù hợp.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Phân Tích Dự Án",
        content: "Đội ngũ tiến hành đánh giá hiện trạng website, cấu trúc nội dung và khả năng hiển thị trên công cụ tìm kiếm. Đồng thời, việc phân tích đối thủ và thị trường giúp xác định cơ hội phát triển cũng như những vấn đề cần ưu tiên xử lý.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Lên kế hoạch và phương án",
        content: "Dựa trên kết quả phân tích, HomeNest.media xây dựng kế hoạch SEO theo mục tiêu và nguồn lực của doanh nghiệp. Phương án triển khai xác định các hạng mục công việc, thứ tự ưu tiên và chỉ số cần theo dõi trong quá trình thực hiện.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Nghiên cứu và gom nhóm từ khóa",
        content: "Từ khóa được nghiên cứu dựa trên nhu cầu tìm kiếm, lĩnh vực kinh doanh và mục tiêu tiếp cận khách hàng. Sau đó, các từ khóa được phân nhóm theo chủ đề và mục đích tìm kiếm để xác định hướng phát triển nội dung, đồng thời lựa chọn trang đích phù hợp.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Tối ưu website",
        content: "Các hạng mục tối ưu tập trung vào nội dung, cấu trúc website, liên kết nội bộ và những yếu tố kỹ thuật ảnh hưởng đến SEO. Việc triển khai được thực hiện theo thứ tự ưu tiên nhằm cải thiện khả năng thu thập dữ liệu, lập chỉ mục và trải nghiệm người dùng.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Nghiệm thu dự án",
        content: "Các hạng mục đã triển khai được kiểm tra và đối chiếu với phạm vi công việc đã thống nhất. Quá trình nghiệm thu giúp xác định mức độ hoàn thành, phát hiện những điểm cần điều chỉnh và bảo đảm các đầu việc đáp ứng tiêu chí đã đề ra.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Bảo hành dự án",
        content: "HomeNest.media theo dõi các chỉ số như lượt nhấp tự nhiên, lượt hiển thị, hiệu suất từ khóa và lưu lượng truy cập website. Báo cáo định kỳ giúp doanh nghiệp nắm bắt tình hình triển khai, đánh giá những thay đổi và xác định các hạng mục cần tiếp tục tối ưu.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
    {
        heading: "Chăm sóc khách hàng",
        content: "Sau quá trình triển khai, HomeNest.media tiếp nhận phản hồi và trao đổi với doanh nghiệp về tình hình hoạt động của website. Dựa trên dữ liệu theo dõi và nhu cầu thực tế, đội ngũ đề xuất các hướng cải thiện nhằm duy trì và phát triển hiệu quả SEO trong giai đoạn tiếp theo.",
        linkImg: "/images/ten-quy-trinh.webp",
    },
];

export default function Page() {
    const [activeProcedure, setActiveProcedure] = useState<number>(0);

    return (
        <>
            <ServiceHero
                heading="Dịch vụ SEO tổng thể cho tăng trưởng website"
                description={(
                    <>
                        <p data-pm-slice="1 1 []"><a href="https://HomeNest.media/" target="_blank" rel="noopener">HomeNest.media</a> hỗ trợ doanh nghiệp xây dựng kế hoạch SEO tổng thể dựa trên mục tiêu kinh doanh, tình trạng website và dữ liệu Google Search Console. Phạm vi triển khai có thể bao gồm SEO kỹ thuật, chiến lược nội dung, cấu trúc website, liên kết nội bộ và đo lường hiệu quả tìm kiếm tự nhiên.</p>
                        <p>Kế hoạch thực hiện, chi phí và thời hạn được xác nhận theo nhu cầu thực tế trong báo giá hoặc hợp đồng.</p>
                    </>
                )}
                ctaText="Tư vấn miễn phí"
            />
            <ServiceOverview
                title="Khi nào doanh nghiệp cần SEO tổng thể?"
                description="Nếu doanh nghiệp muốn cải thiện khả năng hiển thị trên Google, phát triển lưu lượng truy cập tự nhiên và tiếp cận khách hàng có nhu cầu thực tế, SEO tổng thể chính là một lựa chọn tối ưu. Thay vì chỉ tập trung vào một vài từ khóa, dịch vụ SEO cung cấp bởi HomeNest.media tổng thể xem xét toàn bộ website, từ kỹ thuật, nội dung đến cấu trúc và trải nghiệm người dùng."
            />
            <ServiceStrategy
                heading="Chiến lược SEO tổng thể cho doanh nghiệp: từ nền tảng đến tăng trưởng"
                title1="Phân tích website và Technical SEO"
                desc1="Kiểm tra hiệu suất tìm kiếm, lập chỉ mục, tốc độ tải trang và lỗi kỹ thuật để xác định các hạng mục cần cải thiện."
                title2="Nghiên cứu từ khóa và cấu trúc website"
                desc2="Phân tích Search Intent, tối ưu trang dịch vụ và xây dựng cấu trúc Silo, liên kết nội bộ phù hợp."
                title3="Phát triển nội dung và độ uy tín"
                desc3="Xây dựng nội dung theo nhu cầu tìm kiếm, cập nhật bài viết và phát triển liên kết chất lượng."
                title4="Tối ưu chuyển đổi và đo lường"
                desc4="Cải thiện CTA, biểu mẫu và trải nghiệm người dùng; theo dõi lưu lượng truy cập, khách hàng tiềm năng và tỷ lệ chuyển đổi."
            />

            <section className={styles.seoIntro}>
                <div className="container">
                    <div className={styles.seoIntroWrapper}>
                        <header className={styles.seoIntroHeader}>
                            <h2 className={styles.seoIntroTitle}>
                                Dịch vụ SEO tổng thể tại HomeNest.media giúp <TextGradient text="tối ưu nội dung và kỹ thuật website, cải thiện thứ hạng Google" />
                            </h2>
                        </header>
                        <div className={styles.seoIntroBrand}>
                            <Image className={styles.seoIntroLogo} src="/images/logo/logo-big_homenest-media.webp" alt="Dịch vụ SEO tổng thể" width={2560} height={681} />
                        </div>
                        <div className={styles.seoIntroContent}>
                            <div className={styles.seoIntroColLeft}>

                                <Image className={styles.seoIntroImageMain} src="/images/seo-tong-the/seo-tong-the-1.webp" alt="Dịch vụ SEO tổng thể" width={778} height={430} />

                                <p className={styles.seoIntroDescription}>HomeNest.media cung cấp giải pháp <a href="/seo-la-gi-nhung-dieu-ban-can-biet-ve-seo-search-engine-optimization/" target="_blank" rel="noopener">SEO</a> tổng thể, kết hợp tối ưu nội dung, cấu trúc website và các yếu tố kỹ thuật nhằm cải thiện thứ hạng trên Google. Với chiến lược SEO được xây dựng dựa trên mục tiêu kinh doanh và nhu cầu tìm kiếm của khách hàng, chúng tôi hỗ trợ doanh nghiệp phát triển lưu lượng truy cập tự nhiên, tiếp cận khách hàng tiềm năng và nâng cao hiệu quả hoạt động trực tuyến.</p>
                                <ButtonTransparentToGradient className={styles.seoIntroButton} text="Tư vấn ngay" link="/lien-he" />
                            </div>
                            <div className={styles.seoIntroColRight}>
                                <Image className={styles.seoIntroImageSecondary} src="/images/seo-tong-the/seo-tong-the-2.webp" alt="Dịch vụ SEO tổng thể" width={548} height={714} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <ServicePriceTable />

            <CTASection />


            <section className={styles.dataSection}>
                <div className="container">
                    <div className={styles.dataWrapper}>
                        <h2 className={styles.dataTitle}>
                            Số liệu là <TextGradient text="minh chứng cho sự thành công" /> và <TextGradient text="tiềm lực" /> của chúng tôi.
                        </h2>
                        <ul className={styles.dataStatList}>
                            <li className={styles.dataStatItem}>
                                <p className={styles.dataStatNumber}>
                                    <AntonText text="+300%" textStrokeGradient={true} />
                                </p>
                                <h3 className={styles.dataStatLabel}>Mức độ tăng trưởng website</h3>
                            </li>
                            <li className={styles.dataStatItem}>
                                <p className={styles.dataStatNumber}>
                                    <AntonText text="+2.000%" textStrokeGradient={true} />
                                </p>
                                <h3 className={styles.dataStatLabel}>Lượng traffic tăng trưởng</h3>
                            </li>
                            <li className={styles.dataStatItem}>
                                <p className={styles.dataStatNumber}>
                                    <AntonText text="6.000+" textStrokeGradient={true} />
                                </p>
                                <h3 className={styles.dataStatLabel}>Contact đổ về trong tháng</h3>
                            </li>
                            <li className={styles.dataStatItem}>
                                <p className={styles.dataStatNumber}>
                                    <AntonText text="12.000+" textStrokeGradient={true} />
                                </p>
                                <h3 className={styles.dataStatLabel}>Khách hàng trong và ngoài nước</h3>
                            </li>
                        </ul>
                        <ul className={styles.dataCardList}>
                            <li className={styles.dataCardItem}>
                                <Image
                                    className={styles.dataCardImage}
                                    src="/images/data_1.webp"
                                    width={800}
                                    height={450}
                                    alt="Tăng trưởng bứt phá"
                                />
                                <p className={styles.dataCardDesc}>
                                    Tăng trưởng bứt phá – Doanh nghiệp vươn lên top Google, thu hút hàng ngàn khách hàng tiềm năng mỗi tháng.
                                </p>
                            </li>
                            <li className={styles.dataCardItem}>
                                <Image
                                    className={styles.dataCardImage}
                                    src="/images/data_2.webp"
                                    width={800}
                                    height={450}
                                    alt="Hiệu quả bền vững"
                                />
                                <p className={styles.dataCardDesc}>
                                    Hiệu quả bền vững – Chiến lược SEO tối ưu giúp website duy trì thứ hạng cao, mang lại giá trị dài lâu.
                                </p>
                            </li>
                            <li className={styles.dataCardItem}>
                                <Image
                                    className={styles.dataCardImage}
                                    src="/images/data_3.webp"
                                    width={800}
                                    height={450}
                                    alt="Dẫn đầu thị trường"
                                />
                                <p className={styles.dataCardDesc}>
                                    Dẫn đầu thị trường – Thương hiệu của bạn không chỉ được tìm thấy mà còn tỏa sáng trong lĩnh vực kinh doanh.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>



            <AccompanySection />


            <section className={styles.procedureSection}>
                <Image className={styles.procedureBackground} src="/images/quy-trinh-tu-van.webp" width={2000} height={1333} alt="Quy trình tư vấn" />
                <div className="container">
                    <div className={styles.procedureWrapper}>
                        <div className={styles.procedureHeader}>
                            <h2 className={styles.procedureTitle}>
                                Quy trình <TextGradient text="Tư vấn & Triển khai" /> Dịch vụ SEO Tổng thể
                            </h2>
                            <p className={styles.procedureDescription}>
                                HomeNest.media đồng hành cùng doanh nghiệp trong quá trình triển khai{" "}
                                <a href="https://homenest.media/dich-vu-homenest/digital-marketing/" target="_blank" rel="noopener">
                                    <strong>digital marketing tổng thể</strong>
                                </a>
                                , từ phân tích website, xây dựng chiến lược đến thực hiện và tối ưu SEO. Quy trình hướng đến cải thiện hiệu suất tìm kiếm, thu hút khách hàng tiềm năng và hỗ trợ doanh nghiệp đạt được mục tiêu kinh doanh.
                            </p>
                        </div>

                        <ul className={styles.procedureList}>
                            {SEO_PROCEDURES.map((item, index) => {
                                const isActive = activeProcedure === index;
                                const num = String(index + 1).padStart(2, "0");
                                return (
                                    <li
                                        key={index}
                                        className={`${styles.procedureItem} ${isActive ? styles.procedureItemActive : ""}`}
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom, #00000000, #000000), url('${item.linkImg}')`,
                                        }}
                                        onClick={() => setActiveProcedure(index)}
                                    >
                                        <div className={styles.procedureCollapsed}>
                                            <div className={styles.procedureCollapsedNumber}>{num}.</div>
                                            <div className={styles.procedureCollapsedTitle}>{item.heading}</div>
                                        </div>
                                        <div className={styles.procedureExpanded}>
                                            <div className={styles.procedureExpandedNumber}>{num}.</div>
                                            <h3 className={styles.procedureExpandedTitle}>{item.heading}</h3>
                                            <p className={styles.procedureExpandedDesc}>{item.content}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>



            <ServiceWhyTrust />



            <ServiceBenefits />


            <FAQSection
                headingText="Câu hỏi thường gặp về dịch vụ SEO tổng thể"

                items={[
                    {
                        question: "SEO tổng thể là gì ?",
                        answer: (
                            <>
                                <p>SEO tổng thể là chiến lược tối ưu hóa toàn diện website để tăng cường hiệu quả hiển thị trên công cụ tìm kiếm, bao gồm cả SEO on-page, off-page, và trải nghiệm người dùng (UX/UI). Nó không chỉ tập trung vào từ khóa mà còn cải thiện tổng thể chất lượng và hiệu suất của website.</p>
                            </>
                        ),
                    },
                    {
                        question: "SEO tổng thể mang lại lợi ích gì ?",
                        answer: (
                            <>
                                <p>SEO tổng thể mang lại nhiều lợi ích quan trọng, giúp doanh nghiệp xây dựng nền tảng bền vững trên môi trường trực tuyến.</p>
                                <p><strong>Tăng khả năng hiển thị và lưu lượng truy cập tự nhiên: </strong>SEO tổng thể giúp website xuất hiện trên nhiều từ khóa và truy vấn liên quan, thu hút lưu lượng truy cập ổn định mà không phụ thuộc vào quảng cáo.</p>
                                <p><strong>Cải thiện trải nghiệm người dùng: </strong>Website được tối ưu hóa kỹ thuật, tốc độ tải nhanh, thân thiện với thiết bị di động và dễ điều hướng, mang lại trải nghiệm tốt hơn cho khách hàng.</p>
                                <p><strong>Xây dựng uy tín và thương hiệu: </strong>Thứ hạng cao trên công cụ tìm kiếm không chỉ tăng cường nhận diện mà còn củng cố niềm tin của khách hàng vào thương hiệu.</p>
                                <p><strong>Tăng tỷ lệ chuyển đổi: </strong>Bằng cách đáp ứng đúng nhu cầu tìm kiếm, SEO tổng thể thu hút khách hàng tiềm năng và thúc đẩy họ thực hiện các hành động giá trị như mua hàng hay đăng ký dịch vụ.</p>
                                <p><strong>Hiệu quả chi phí dài hạn: </strong>Đầu tư SEO tổng thể mang lại kết quả bền vững, giảm chi phí cho quảng cáo và duy trì lưu lượng truy cập tự nhiên trong thời gian dài.</p>
                                <p><strong>Bền vững trước các thay đổi thuật toán: </strong>Tập trung vào chất lượng và tối ưu toàn diện giúp website ổn định, ít bị ảnh hưởng bởi những thay đổi từ Google.</p>
                                <p><strong>Nâng cao khả năng cạnh tranh: </strong>Website được tối ưu toàn diện dễ dàng vượt qua đối thủ chưa đầu tư hoặc không có chiến lược SEO bài bản.</p>
                                <p>SEO tổng thể không chỉ cải thiện hiệu suất website mà còn đóng vai trò chiến lược trong việc phát triển thương hiệu và tăng trưởng doanh thu dài hạn.</p>
                            </>
                        ),
                    },
                    {
                        question: "Khác biệt giữa SEO tổng thể và SEO từ khóa là gì ?",
                        answer: (
                            <>
                                <ul>
                                    <li><strong>SEO tổng thể:</strong> Tập trung vào toàn bộ cấu trúc, nội dung, và hiệu suất website, nhằm tăng thứ hạng bền vững trên nhiều từ khóa.</li>
                                    <li><strong>SEO từ khóa:</strong> Chỉ tập trung tối ưu một số từ khóa chính, thường dễ bị cạnh tranh và không lâu dài.</li>
                                </ul>
                                <p>Tùy vào mục tiêu sử dụng mà chọn các loại SEO khác nhau, hoặc có thể sử dụng đồng thời cả 2 loại để có thể nhận được lợi ích từ 2 loại SEO kể trên, mang lại quá trình tổng thể hiệu quả hơn.</p>
                            </>
                        ),
                    },
                    {
                        question: "Tại sao SEO tổng thể quan trọng hơn trong thời đại hiện nay ?",
                        answer: (
                            <>
                                <p>Vì hành vi người dùng ngày càng đa dạng, họ không chỉ tìm kiếm bằng từ khóa chính mà còn sử dụng từ khóa dài, câu hỏi, hoặc truy vấn cụ thể. SEO tổng thể giúp website đáp ứng được nhiều loại nhu cầu tìm kiếm khác nhau. Vì thế SEO dần phổ biến hơn, cũng là công cụ nổi bật để có thể tiếp cận những khách hàng mục tiêu thông qua Google</p>
                            </>
                        ),
                    },
                    {
                        question: "Các yếu tố quan trọng trong SEO tổng thể là gì ?",
                        answer: (
                            <>
                                <ul>
                                    <li><strong>Tối ưu nội dung:</strong> Cung cấp nội dung chất lượng, phù hợp nhu cầu người dùng.</li>
                                    <li><strong>Tối ưu kỹ thuật:</strong> Cải thiện tốc độ tải trang, cấu trúc URL, bảo mật (HTTPS), và khả năng tương thích trên thiết bị di động.</li>
                                    <li><strong>Xây dựng liên kết:</strong> Tạo ra liên kết chất lượng từ các website uy tín.</li>
                                    <li><strong>Trải nghiệm người dùng (UX):</strong> Thiết kế giao diện trực quan, dễ sử dụng, giảm tỷ lệ thoát trang.</li>
                                    <li><strong>Phân tích dữ liệu:</strong> Theo dõi hành vi người dùng và hiệu suất qua các công cụ như Google Analytics, Search Console.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        question: "Làm sao để biết website của mình có cần SEO tổng thể không ?",
                        answer: (
                            <>
                                <p>Bạn nên kiểm tra các yếu tố sau:</p>
                                <ul>
                                    <li>Website không hiển thị ở vị trí cao khi tìm kiếm từ khóa liên quan.</li>
                                    <li>Tốc độ tải trang chậm hoặc không thân thiện với thiết bị di động.</li>
                                    <li>Nội dung không hấp dẫn hoặc không đáp ứng được nhu cầu người dùng.</li>
                                    <li>Lượng truy cập giảm hoặc không ổn định.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        question: "Chi phí SEO tổng thể thường là bao nhiêu ?",
                        answer: (
                            <>
                                <p>Chi phí tùy thuộc vào quy mô website, ngành nghề kinh doanh, và mức độ cạnh tranh. Một số công ty tính phí từ vài triệu đến hàng chục triệu đồng mỗi tháng.</p>

                                <p>Bạn có thể liên hệ ngay với HomeNest để có thể được tư vấn những gói dịch vụ phù hợp, với mức giá tốt, cũng như chất lương cho doanh nghiệp của bạn.</p>
                            </>
                        ),
                    },
                    {
                        question: "Thời gian để thấy kết quả của SEO tổng thể là bao lâu ?",
                        answer: (
                            <>
                                <p>Thông thường, cần từ 3-6 tháng để thấy sự cải thiện rõ rệt, nhưng điều này còn phụ thuộc vào chất lượng website hiện tại và ngành nghề của bạn.</p>

                                <p>Tại HomeNest bạn có thể an tâm về việc này, với nhiều năm kinh nghiệm trong việc SEO cho nhiều đối tác khác nhau, HomeNest cam kết mang lại những kết quả rõ ràng  và nhanh chóng cho thương hiệu.</p>
                            </>
                        ),
                    },
                    {
                        question: "Công cụ nào hỗ trợ SEO tổng thể hiệu quả ?",
                        answer: (
                            <>
                                <ul>
                                    <li><strong>Google Search Console</strong>: Để kiểm tra hiệu suất và các vấn đề kỹ thuật.</li>
                                    <li><strong>Google Analytics</strong>: Phân tích lưu lượng truy cập.</li>
                                    <li><strong>Ahrefs, SEMrush, Moz</strong>: Nghiên cứu từ khóa và đối thủ cạnh tranh.</li>
                                    <li><strong>Screaming Frog</strong>: Kiểm tra cấu trúc và lỗi kỹ thuật trên website.</li>
                                </ul>
                            </>
                        ),
                    },
                ]}
            />


            <ServiceReview />



        </>
    )
}