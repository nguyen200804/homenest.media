import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceLogoShowcase, ServiceOverview, ServicePriceTable, ServiceProject, ServiceStrategy, ServiceTestimonials } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";
import styles from "./page.module.css";
import { SwiperImage } from "@/components/ui/Swiper";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Kiến tạo dấu ấn thương hiệu qua hệ thống nhận diện chuyên nghiệp"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế nhận diện thương hiệu, giúp doanh nghiệp xây dựng hình ảnh nhất quán và thể hiện rõ bản sắc thương hiệu trên các điểm chạm với khách hàng. Từ <a href="/dich-vu/thiet-ke-logo-chuyen-nghiep/" target="_blank" rel="noopener">thiết kế logo</a>, màu sắc, kiểu chữ đến các ấn phẩm ứng dụng, hệ thống nhận diện được phát triển dựa trên định hướng thương hiệu, lĩnh vực hoạt động và nhu cầu sử dụng thực tế.</p>
                        <p>Giải pháp thiết kế hướng đến việc chuẩn hóa hình ảnh doanh nghiệp trên các nền tảng truyền thông, hỗ trợ hoạt động marketing và tạo sự đồng bộ trong quá trình phát triển thương hiệu.</p>
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế nhận diện thương hiệu! "
            />
            <ServiceOverview
                title="Khi nào doanh nghiệp cần thiết kế hoặc chuẩn hóa nhận diện?"
                description={(
                    <>
                        <ul><li>Thành lập doanh nghiệp hoặc ra mắt nhãn hàng mới, cần hệ thống hình ảnh thống nhất từ đầu.</li><li>Tái định vị, thay đổi phân khúc khách hàng hoặc mở rộng thị trường.</li><li>Có logo nhưng các tài liệu bán hàng, đồng phục và kênh số đang thiếu đồng bộ.</li><li>Phát triển nhiều chi nhánh, đội ngũ hoặc đối tác cần sử dụng nhận diện đúng quy chuẩn.</li><li>Chuẩn bị gọi vốn, giới thiệu dự án, phát triển hệ thống phân phối hay tham gia triển lãm.</li></ul>
                    </>
                )}
            />
            <ServiceStrategy
                heading="Giải pháp thiết kế nhận diện thương hiệu toàn diện tại HomeNest.media"
                title1="Nghiên cứu thị trường và mục tiêu của thương hiệu"
                desc1="Tìm hiểu lĩnh vực, khách hàng mục tiêu và thị trường để xác định định hướng thiết kế phù hợp với thương hiệu."
                title2="Hệ thống nhận diện nhất quán "
                desc2="Thiết kế đồng bộ từ logo, màu sắc, kiểu chữ đến các ấn phẩm ứng dụng nhằm duy trì hình ảnh thương hiệu nhất quán."
                title3="Thiết kế có chiến lược "
                desc3="Thiết kế các yếu tố nhận diện thể hiện giá trị, cá tính và thông điệp thương hiệu, đồng thời đáp ứng yêu cầu thẩm mỹ."
                title4="Ứng dụng trên đa nền tảng "
                desc4="Định hướng hệ thống nhận diện để ứng dụng nhất quán trên website, mạng xã hội, danh thiếp, hồ sơ doanh nghiệp và các ấn phẩm truyền thông."
            />

            <ServiceLogoShowcase
                title={(

                    <>
                        Khởi tạo thương hiệu cùng <TextGradient text="HomeNest.media – thiết kế bộ nhận diện chuyên nghiệp" />, định hình dấu ấn riêng cho doanh nghiệp của bạn.
                    </>

                )}
            />

            <section className={styles.swiperSection}>
                <div className="container">
                    <SwiperImage
                        items={[
                            "/images/swiper-logo-chuyen-nghiep/image_01.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_02.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_03.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_04.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_05.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_06.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_07.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_08.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_09.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_10.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_11.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_12.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_13.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_14.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_15.webp",
                            "/images/swiper-logo-chuyen-nghiep/image_16.webp",
                        ]}
                    />
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
                        <TextGradient text="Project" /> - Các Mẫu Thiết Kế <TextGradient text="Bộ Nhận Diện" /> Đã Thực Hiện
                    </>
                )}
                description={(
                    <>
                        HomeNest.media cung cấp <a href="https://homenest.media/dich-vu-homenest/branding/">giải pháp thiết kế Branding</a>, giúp doanh nghiệp xây dựng bản sắc riêng và hình ảnh thương hiệu nhất quán thông qua logo, màu sắc, kiểu chữ và các ấn phẩm nhận diện phù hợp với từng ngành nghề.
                    </>
                )}
            />


            <ServiceBenefits
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                heading="Lộ trình thiết kế thương hiệu"
                imageAlt="quy trinh thiet ke logo 1"
                items={[
                    {
                        title: "Tìm hiểu & Ký kết",
                        desc: "HomeNest.media tiếp nhận yêu cầu, tìm hiểu mục tiêu, định hướng thương hiệu và nhu cầu thiết kế của doanh nghiệp. Sau khi thống nhất phạm vi công việc, các hạng mục bàn giao và chi phí, hai bên tiến hành ký kết hợp đồng.",
                    },
                    {
                        title: "Nghiên cứu",
                        desc: "Phân tích doanh nghiệp, thị trường, khách hàng mục tiêu và đối thủ cạnh tranh để xác định đặc điểm nổi bật, giá trị cốt lõi và định hướng hình ảnh phù hợp cho thương hiệu.",
                    },
                    {
                        title: "Đề ra giải pháp",
                        desc: "Xây dựng định hướng thiết kế bộ nhận diện thương hiệu dựa trên kết quả nghiên cứu, xác định phong cách hình ảnh, màu sắc chủ đạo và các hạng mục nhận diện cần triển khai.",
                    },
                    {
                        title: "Thiết kế concept",
                        desc: "HomeNest.media phát triển các ý tưởng thiết kế dựa trên định hướng đã thống nhất, thể hiện cách kết hợp logo, màu sắc, kiểu chữ và yếu tố đồ họa trong hệ thống nhận diện thương hiệu.",
                    },
                    {
                        title: "Thiết kế & Sáng tạo",
                        desc: "Triển khai thiết kế các hạng mục trong bộ nhận diện thương hiệu, đảm bảo sự hài hòa giữa các yếu tố hình ảnh và tính nhất quán khi ứng dụng trên những ấn phẩm khác nhau.",
                    },
                    {
                        title: "Trình bày & Hiệu chỉnh",
                        desc: "HomeNest.media trình bày phương án thiết kế để doanh nghiệp đánh giá và phản hồi. Các hạng mục được điều chỉnh theo ý kiến đã thống nhất, phù hợp với phạm vi công việc và số lần chỉnh sửa trong thỏa thuận.",
                    },
                    {
                        title: "Thử nghiệm thực tế",
                        desc: "Rà soát tính nhất quán của bộ nhận diện trên các hạng mục thiết kế, kiểm tra màu sắc, kiểu chữ, bố cục và khả năng hiển thị trong những bối cảnh sử dụng thực tế phù hợp.",
                    },
                    {
                        title: "Đóng gói sản phẩm",
                        desc: "Hoàn thiện các hạng mục thiết kế, chuẩn hóa những yếu tố nhận diện và chuẩn bị file thiết kế, phiên bản sử dụng cùng hướng dẫn ứng dụng theo phạm vi dịch vụ đã thống nhất.",
                    },
                    {
                        title: "Bàn giao & Nghiệm thu",
                        desc: "HomeNest.media bàn giao các file thiết kế theo định dạng và danh mục đã thỏa thuận. Hai bên kiểm tra sản phẩm bàn giao và thực hiện nghiệm thu theo các điều khoản trong hợp đồng.",
                    },
                    {
                        title: "Đồng hành phát triển",
                        desc: "HomeNest.media hỗ trợ doanh nghiệp trong phạm vi dịch vụ đã thống nhất, hướng đến việc ứng dụng bộ nhận diện nhất quán trên các kênh truyền thông, tài liệu doanh nghiệp và những hạng mục thương hiệu liên quan.",
                    },
                ]}
            />

            <ServiceHowWeWork
                heading="Doanh nghiệp cùng đồng hành trong từng bước thiết kế bộ nhận diện"
                items={[
                    {
                        tag: "Bản dự thảo",
                        title: "Gửi phương án thiết kế bộ nhận diện thương hiệu",
                        desc: "HomeNest.media gửi phương án thiết kế ban đầu để khách hàng đánh giá logo, màu sắc, kiểu chữ và định hướng hình ảnh. Khách hàng xem xét mức độ phù hợp với bản sắc thương hiệu.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Tiếp nhận phản hồi từ khách hàng",
                        desc: "HomeNest.media tổng hợp góp ý về từng hạng mục và thống nhất các nội dung cần điều chỉnh hoặc bổ sung trước khi hoàn thiện.",
                    },
                    {
                        tag: "Chỉnh sửa thiết kế",
                        title: "Điều chỉnh và hoàn thiện bộ nhận diện thương hiệu",
                        desc: "Đội ngũ thiết kế cập nhật các hạng mục theo phản hồi đã thống nhất, đảm bảo tính đồng bộ giữa logo, màu sắc, kiểu chữ và ấn phẩm ứng dụng.",
                    },
                    {
                        tag: "Duyệt thiết kế",
                        title: "Xác nhận bộ nhận diện thương hiệu cuối cùng",
                        desc: "HomeNest.media gửi bộ thiết kế hoàn thiện để khách hàng kiểm tra tính nhất quán và xác nhận trước khi bàn giao.",
                    },
                    {
                        tag: "Bàn giao file",
                        title: "Bàn giao file thiết kế bộ nhận diện thương hiệu",
                        desc: "HomeNest.media bàn giao file theo định dạng và danh mục đã thống nhất, phục vụ ứng dụng trên website, mạng xã hội, tài liệu doanh nghiệp và ấn phẩm truyền thông.",
                    },
                ]}
            />

            <FAQSection
                items={[
                    {
                        question: "HomeNest cung cấp những hạng mục nào trong bộ nhận diện thương hiệu?",
                        answer: "Chúng tôi cung cấp logo, name card, đồng phục, sổ làm việc, hộp quà tặng, nón kết và nhiều ấn phẩm khác.",
                    },
                    {
                        question: "Thời gian thiết kế và sản xuất bộ nhận diện thương hiệu là bao lâu?",
                        answer: "Tùy vào hạng mục, thời gian hoàn thiện dao động từ 7 – 21 ngày.",
                    },
                    {
                        question: "HomeNest có nhận thiết kế logo riêng lẻ không?",
                        answer: "Có, chúng tôi nhận thiết kế logo độc quyền theo yêu cầu.",
                    },
                    {
                        question: "Có thể tùy chỉnh thiết kế theo yêu cầu không?",
                        answer: "Được, chúng tôi sẽ tư vấn và điều chỉnh theo phong cách thương hiệu của bạn.",
                    },
                    {
                        question: "HomeNest có hỗ trợ in ấn không?",
                        answer: "Có, chúng tôi cung cấp cả dịch vụ thiết kế và in ấn chất lượng cao.",
                    },
                    {
                        question: "Chi phí thiết kế bộ nhận diện thương hiệu là bao nhiêu?",
                        answer: "Chi phí phụ thuộc vào hạng mục và yêu cầu cụ thể, vui lòng liên hệ để được báo giá.",
                    },
                    {
                        question: "HomeNest có nhận đặt hàng số lượng ít không?",
                        answer: "Có, chúng tôi linh hoạt theo nhu cầu khách hàng với số lượng tối thiểu tùy từng sản phẩm.",
                    },
                    {
                        question: "Làm thế nào để bắt đầu thiết kế bộ nhận diện thương hiệu?",
                        answer: "Bạn chỉ cần liên hệ HomeNest, cung cấp thông tin thương hiệu, và chúng tôi sẽ tư vấn chi tiết.",
                    },
                ]}
            />

            <ServiceTestimonials />
        </>
    )
}
