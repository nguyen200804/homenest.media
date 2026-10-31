import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceOverview, ServicePriceTable, ServiceProject, ServiceStrategy, ServiceTestimonials } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";
import styles from "./page.module.css";
import { SwiperImage } from "@/components/ui/Swiper";
import { ButtonGradientSpin } from "@/components/ui/Buttons";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Ấn phẩm sáng tạo - Truyền thông hiệu quả"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế ấn phẩm marketing phục vụ hoạt động quảng bá thương hiệu, truyền thông và các chiến dịch marketing. Từ tờ rơi, brochure, poster, standee đến ấn phẩm kỹ thuật số, mỗi thiết kế được định hướng theo thông điệp truyền thông, đối tượng khách hàng và nhận diện thương hiệu.</p>
                        <p>Doanh nghiệp có thể lựa chọn thiết kế từng hạng mục hoặc kết hợp nhiều định dạng theo nhu cầu thực tế. Phạm vi triển khai, số phương án, số lần hiệu chỉnh, thời gian và định dạng bàn giao được thống nhất trước khi thực hiện. </p>

                    </>
                )}
                ctaText="Nhận tư vấn thiết kế miễn phí "
            />


            <ServiceOverview
                title="Các ấn phẩm marketing là phương thức đưa doanh nghiệp đến gần hơn với khách hàng"
                description="Doanh nghiệp nên sử dụng dịch vụ thiết kế ấn phẩm marketing khi chuẩn bị ra mắt sản phẩm, dịch vụ mới hoặc cần xây dựng hình ảnh đồng nhất trên nhiều kênh truyền thông. Đây cũng là giải pháp phù hợp khi tham gia triển lãm, tổ chức sự kiện, khai trương điểm bán hoặc triển khai chiến dịch khuyến mãi. Đặc biệt, nếu các ấn phẩm hiện tại thiếu nhất quán về nhận diện, chưa làm nổi bật thông điệp và CTA, hoặc đội ngũ marketing chưa đủ nguồn lực thiết kế, HomeNest.media có thể hỗ trợ doanh nghiệp xây dựng các ấn phẩm phù hợp với mục tiêu truyền thông và nhu cầu sử dụng thực tế."
            />


            <ServiceStrategy
                heading="Cùng HomeNest.media tạo ấn tượng với khách hàng qua từng ấn phẩm Marketing"
                title1="Flyer/Leaflet"
                desc1="Thiết kế tờ rơi, tờ gấp giới thiệu ưu đãi, sản phẩm và dịch vụ."
                title2="Brochure"
                desc2="Trình bày thông tin sản phẩm, dịch vụ với bố cục rõ ràng, dễ theo dõi."
                title3="Ấn phẩm quảng cáo"
                desc3="Thiết kế poster, standee, backdrop và banner phù hợp với từng kênh hiển thị."
                title4="Ấn phẩm thương hiệu và chiến dịch"
                desc4="Phát triển key visual, bộ ấn phẩm marketing, catalogue và profile doanh nghiệp."
            />


            <section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutHeader}>
                            <h2 className={styles.aboutTitle}><TextGradient text="Đồng bộ nhận diện, khẳng định dấu ấn thương hiệu" /></h2>
                            <p className={styles.aboutDescription}>
                                HomeNest Media triển khai các dự án <a href="https://homenest.media/dich-vu-homenest/branding/"><b>Branding</b></a> đa dạng, từ thiết kế nhận diện thương hiệu đến Profile công ty và Catalogue. Mỗi thiết kế được định hướng theo đặc trưng thương hiệu, kết hợp màu sắc, hình ảnh và bố cục phù hợp nhằm truyền tải thông điệp nhất quán. Các sản phẩm hướng đến việc xây dựng hình ảnh chuyên nghiệp, hỗ trợ doanh nghiệp giới thiệu năng lực, quảng bá sản phẩm và tạo dấu ấn với khách hàng, đối tác.
                            </p>
                        </div>
                        <div className={styles.aboutContent}>
                            <SwiperImage />
                        </div>
                        <div className={styles.aboutCTA}>
                            <ButtonGradientSpin text="Nhận tư vấn thiết kế miễn phí" />
                        </div>
                    </div>
                </div>
            </section>


            <ServiceExperience />


            <ServicePriceTable
                heading="Bảng giá thiết kế chuyên nghiệp HomeNest.media"
                items={[
                    {
                        title: "BASIC",
                        imageTag: "/images/basic.png",
                        description: (
                            <>
                                <strong>Gói Basic</strong> xây dựng nhận diện thương hiệu cơ bản, chuyên nghiệp, chi phí tối ưu.
                            </>
                        ),
                        features: [
                            "Thiết kế logo chuyên nghiệp : 2 mẫu chọn 1",
                            "Thiết kế Namecard",
                            "Thiết kế thẻ nhân viên",
                            "Đồng phục (Áo thun, Sơmi)",
                            "Thiết kế phòng bì thư (A4,A5)",
                            "Thời gian thực hiện: 3 ~ 5 ngày",
                            "Chỉnh sửa không giới hạn",
                            "Bàn giao: File gốc (AI, Vector), File in ấn chất lượng cao, File PDF, File ảnh PNG, JPG",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "5.000.000",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "GOLDEN",
                        imageTag: "/images/golden.png",
                        description: (
                            <>
                                <strong>Gói Golden</strong> nâng tầm thương hiệu, đồng nhất, ấn tượng, chuyên nghiệp hơn.
                            </>
                        ),
                        features: [
                            "Thiết kế logo chuyên nghiệp : 3 mẫu chọn 1",
                            "Thiết kế Namecard",
                            "Thiết kế thẻ nhân viên",
                            "Đồng phục (Áo thun, sơmi, áo khoác)",
                            "Thiết kế phòng bì thư (A4,A5)",
                            "Thời gian thực hiện: 5 ~ 10 ngày",
                            "Chỉnh sửa không giới hạn",
                            "Brand guidelines logo",
                            "Thiết kế kẹp Folder (Kẹp file)",
                            "Thiết kế Letter Header",
                            "Thiết kế profile công ty (10 trang)",
                            "Thiết kế bảng hiệu công ty",
                            "Bàn giao: File gốc (AI, Vector), File in ấn chất lượng cao, File PDF, File ảnh PNG, JPG",
                            "Ưu đãi 10% khi thiết kế website tại Homenest",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "10.000.000",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "DIAMOND",
                        imageTag: "/images/diamond.png",
                        description: (
                            <>
                                <strong>Gói Diamond</strong> khẳng định vị thế, nhận diện mạnh mẽ, đồng bộ, dẫn đầu thị trường.
                            </>
                        ),
                        features: [
                            "Thiết kế logo chuyên nghiệp : 5 mẫu chọn 1",
                            "Thiết kế Namecard",
                            "Thiết kế thẻ nhân viên",
                            "Thiết kế phòng bì thư (A4,A5)",
                            "Đồng phục (Áo thun, sơmi, áo khoác)",
                            "Thời gian thực hiện: 10 ~ 15 ngày",
                            "Chỉnh sửa không giới hạn",
                            "Brand guidelines logo",
                            "Thiết kế kẹp Folder (Kẹp file)",
                            "Thiết kế Letter Header",
                            "Thiết kế profile công ty (15 trang)",
                            "Thiết kế bảng hiệu công ty",
                            "Thiết kế tờ rơi",
                            "Thiết kế Backdrop",
                            "Thiết kế tiêu đề thư",
                            "Bàn giao: File gốc (AI, Vector), File in ấn chất lượng cao, File PDF, File ảnh PNG, JPG",
                            "Ưu đãi 15% dịch vụ khác tại Homenest",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "15.000.000",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "PLATINUM",
                        imageTag: "/images/platinum.png",
                        description: (
                            <>
                                <strong>Gói Platinum</strong> độc quyền, sang trọng, linh hoạt, phản ánh giá trị doanh nghiệp.
                            </>
                        ),
                        features: [
                            "Thiết kế logo chuyên nghiệp: Linh hoạt điều chỉnh",
                            "Thiết kế Namecard",
                            "Thiết kế thẻ nhân viên",
                            "Thiết kế phòng bì thư",
                            "Thời gian thực hiện:",
                            "Chỉnh sửa không giới hạn",
                            "Brand guidelines logo",
                            "Thiết kế kẹp Folder (Kẹp file)",
                            "Thiết kế Letter Header",
                            "...............",
                            "Gói dịch vụ linh hoạt – Xây dựng theo từng nhu cầu riêng của bạn",
                            "Bàn giao: File gốc (AI, Vector), File in ấn chất lượng cao, File PDF, File ảnh PNG, JPG",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "Linh hoạt",
                        ctaText: "Tư vấn ngay",
                    },
                ]}
            />


            <CTASection />

            <ServiceProject
                heading={(
                    <>
                        <TextGradient text="Project" /> - Các Mẫu Thiết Kế <TextGradient text="Chuyên Nghiệp" /> Đã Thực Hiện
                    </>
                )}
                description="Dịch vụ thiết kế Website HomeNest đã thực hiện nhiều dự án tiêu biểu trong các lĩnh vực khác nhau, từ thương mại điện tử, giáo dục đến bất động sản. Các trang web do HomeNest thiết kế luôn nổi bật với giao diện trực quan, thân thiện với người dùng và tích hợp nhiều tính năng hiện đại. Bên cạnh đó, HomeNest luôn chú trọng đến việc tối ưu hóa trải nghiệm người dùng và đảm bảo tính tương thích trên mọi thiết bị. Những dự án này thể hiện sự chuyên nghiệp và sáng tạo, đáp ứng tốt nhu cầu đa dạng của khách hàng."
            />


            <ServiceBenefits
                heading="Lộ trình thiết kế ấn phẩm Marketing"
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                imageAlt="Lộ trình thiết kế ấn phẩm Marketing"
                items={[
                    {
                        title: "Nghiên cứu",
                        desc: "Tiếp nhận yêu cầu, tìm hiểu thương hiệu, sản phẩm, khách hàng mục tiêu và mục đích sử dụng ấn phẩm để xác định hướng triển khai phù hợp.",
                    },
                    {
                        title: "Tư vấn & Đề xuất",
                        desc: "Đề xuất giải pháp thiết kế dựa trên thông điệp truyền thông, nhận diện thương hiệu, kênh phân phối và mục tiêu của chiến dịch.",
                    },
                    {
                        title: "Chuẩn bị",
                        desc: "Thu thập logo, hình ảnh, thông tin sản phẩm, nội dung truyền thông và các tài nguyên cần thiết để phục vụ quá trình thiết kế.",
                    },
                    {
                        title: "Thiết kế & Sáng tạo",
                        desc: "Triển khai thiết kế theo định hướng đã thống nhất, đảm bảo bố cục rõ ràng, hình ảnh phù hợp và nội dung dễ tiếp nhận.",
                    },
                    {
                        title: "Phản hồi & Hiệu chỉnh",
                        desc: "Gửi bản thiết kế để doanh nghiệp xem xét, tiếp nhận phản hồi và điều chỉnh theo yêu cầu trong phạm vi công việc đã thỏa thuận.",
                    },
                    {
                        title: "Hoàn thiện & Đóng gói",
                        desc: "Kiểm tra nội dung, hình ảnh, màu sắc và thông số kỹ thuật; hoàn thiện file thiết kế theo định dạng bàn giao đã thống nhất.",
                    },
                    {
                        title: "In ấn & Bàn giao",
                        desc: "Bàn giao file thiết kế hoàn chỉnh theo thỏa thuận. Trường hợp có dịch vụ in ấn, sản phẩm được triển khai theo quy cách và phạm vi đã thống nhất trong hợp đồng.",
                    },
                ]}
            />


            <ServiceHowWeWork
                heading="Doanh nghiệp đồng hành trong từng bước thiết kế ấn phẩm truyền thông"
                items={[
                    {
                        tag: "Tiếp nhận yêu cầu",
                        title: "Tiếp nhận yêu cầu thiết kế",
                        desc: "HomeNest.media tìm hiểu thương hiệu, mục tiêu truyền thông, khách hàng mục tiêu và loại ấn phẩm cần thiết kế. Hai bên thống nhất phạm vi công việc và yêu cầu sử dụng trước khi triển khai.",
                    },
                    {
                        tag: "Lên ý tưởng",
                        title: "Xây dựng phương án thiết kế",
                        desc: "Đội ngũ thiết kế đề xuất ý tưởng, bố cục, màu sắc và phong cách hình ảnh phù hợp với thương hiệu. Phương án được xây dựng theo thông điệp và mục đích sử dụng của từng ấn phẩm.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Trình bày và tiếp nhận phản hồi",
                        desc: "HomeNest.media gửi bản thiết kế để khách hàng đánh giá nội dung, hình ảnh, bố cục và nhận diện thương hiệu. Các góp ý được tổng hợp để thống nhất những nội dung cần điều chỉnh.",
                    },
                    {
                        tag: "Hoàn thiện thiết kế",
                        title: "Hiệu chỉnh và hoàn thiện thiết kế",
                        desc: "Đội ngũ thiết kế cập nhật nội dung, hình ảnh, màu sắc và bố cục theo phản hồi đã thống nhất. Việc chỉnh sửa tuân theo phạm vi công việc đã thỏa thuận.",
                    },
                    {
                        tag: "Bàn giao ấn phẩm",
                        title: "Xác nhận và bàn giao ấn phẩm",
                        desc: "Sau khi khách hàng xác nhận bản thiết kế cuối cùng, HomeNest.media bàn giao file theo định dạng và thông số đã thống nhất. File phục vụ nhu cầu sử dụng trên nền tảng số hoặc in ấn theo phạm vi dịch vụ.",
                    },
                ]}
            />


            <FAQSection
                items={[
                    {
                        question: "Dịch vụ thiết kế ấn phẩm Marketing bao gồm những gì?",
                        answer:
                            "HomeNest.media nhận thiết kế nhiều loại ấn phẩm như tờ rơi, tờ gấp, brochure, poster, standee, banner, key visual và bộ ấn phẩm chiến dịch. Hạng mục cụ thể được xác định theo nhu cầu và brief của doanh nghiệp.",
                    },
                    {
                        question: "Tôi có thể thuê thiết kế riêng một ấn phẩm không?",
                        answer:
                            "Có. Doanh nghiệp có thể đặt thiết kế riêng từng hạng mục như poster, tờ rơi hoặc banner mà không cần triển khai cả bộ ấn phẩm. Chi phí được xác định dựa trên yêu cầu và khối lượng công việc thực tế.",
                    },
                    {
                        question: "Chi phí thiết kế đã bao gồm in ấn chưa?",
                        answer:
                            "Chi phí thiết kế và chi phí in ấn được xác định riêng trong báo giá. Dịch vụ in ấn chỉ được tính khi có thỏa thuận cụ thể về hạng mục, số lượng và quy cách sản xuất.",
                    },
                    {
                        question: "Thời gian hoàn thành thiết kế là bao lâu?",
                        answer:
                            "Thời gian thực hiện phụ thuộc vào loại ấn phẩm, độ phức tạp, mức độ hoàn thiện nội dung và số vòng hiệu chỉnh. Tiến độ dự kiến sẽ được thống nhất trước khi triển khai.",
                    },
                    {
                        question: "Tôi có được bàn giao file gốc để chỉnh sửa sau này không?",
                        answer:
                            "File thiết kế gốc như AI hoặc PSD và các định dạng bàn giao khác sẽ được xác định theo phạm vi dịch vụ đã thỏa thuận. Doanh nghiệp nên thống nhất rõ danh mục file cần nhận ngay từ đầu.",
                    },
                    {
                        question: "HomeNest.media có hỗ trợ chỉnh sửa theo góp ý không?",
                        answer:
                            "Có. Thiết kế được điều chỉnh dựa trên phản hồi của doanh nghiệp theo số vòng chỉnh sửa và điều kiện đã thống nhất trong báo giá hoặc hợp đồng.",
                    },
                    {
                        question: "Có thể thiết kế nhiều kích thước cho cùng một chiến dịch không?",
                        answer:
                            "Có. HomeNest.media có thể triển khai các phiên bản kích thước theo nhu cầu sử dụng trên từng nền tảng. Doanh nghiệp nên cung cấp danh sách kích thước và định dạng cần thiết ngay từ giai đoạn brief.",
                    },
                    {
                        question: "Doanh nghiệp cần cung cấp những tài liệu gì trước khi thiết kế?",
                        answer:
                            "Doanh nghiệp nên chuẩn bị logo, màu sắc thương hiệu, nội dung, hình ảnh sản phẩm, thông điệp truyền thông và kích thước ấn phẩm mong muốn. Nếu có bộ nhận diện thương hiệu hoặc guideline, việc cung cấp tài liệu này sẽ giúp định hướng thiết kế nhất quán hơn.",
                    },
                ]}
            />


            <ServiceTestimonials />
        </>
    )
}