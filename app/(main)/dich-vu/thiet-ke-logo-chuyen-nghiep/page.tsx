import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceLogoShowcase, ServiceOverview, ServicePriceTable, ServiceProject, ServiceResult, ServiceStrategy, ServiceTestimonials } from "@/components/sections/services";
import styles from "./page.module.css";
import { TextGradient } from "@/components/ui/Text";
import { CTASection, FAQSection } from "@/components/sections";
import { SwiperImage } from "@/components/ui/Swiper";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết Kế Logo Chuyên Nghiệp - Dấu ấn vững bền, chinh phục niềm tin."
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế logo phù hợp với định hướng thương hiệu, lĩnh vực hoạt động và nhóm khách hàng mục tiêu. Logo được phát triển dựa trên đặc điểm riêng của doanh nghiệp, góp phần xây dựng hình ảnh nhất quán và là nền tảng cho quá trình <a href="/dich-vu/thiet-ke-nhan-dien-thuong-hieu/" target="_blank" rel="noopener">thiết kế bộ nhận diện thương hiệu</a> trên các kênh truyền thông.</p>
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế logo miễn phí!"
            />
            <ServiceOverview
                title="Thiết kế logo chuyên nghiệp là khoản đầu tư cần thiết cho doanh nghiệp"
                description="Doanh nghiệp nên thuê thiết kế logo chuyên nghiệp khi mới thành lập, cần xây dựng hình ảnh thương hiệu, muốn làm mới logo hiện tại hoặc nhận thấy logo chưa phù hợp với định hướng phát triển. Một thiết kế logo được đầu tư bài bản giúp thể hiện bản sắc doanh nghiệp, tạo sự khác biệt trên thị trường và đảm bảo khả năng ứng dụng nhất quán trên website, mạng xã hội, bao bì và các ấn phẩm truyền thông. Đây cũng là bước nền tảng để doanh nghiệp phát triển hệ thống nhận diện thương hiệu đồng bộ trong dài hạn."
            />
            <ServiceStrategy
                heading="Truyền tải câu chuyện riêng của thương hiệu qua Logo cùng HomeNest.media"
                title1="Tư vấn định hướng và concept logo"
                desc1="Xác định lĩnh vực, khách hàng mục tiêu và tính cách thương hiệu để xây dựng concept logo phù hợp"
                title2="Thiết kế logo 2D"
                desc2="Phát triển phương án logo với biểu tượng, kiểu chữ và màu sắc phù hợp. Các phiên bản logo được triển khai theo phạm vi thiết kế đã thỏa thuận."
                title3="Hoàn thiện phiên bản và biến thể logo"
                desc3="Điều chỉnh logo và hoàn thiện các phiên bản màu, đơn sắc, âm bản, ngang hoặc dọc theo nhu cầu sử dụng và phạm vi dịch vụ."
                title4="Hướng dẫn sử dụng và bàn giao file logo"
                desc4="Xây dựng hướng dẫn sử dụng logo và bàn giao file thiết kế theo định dạng đã thống nhất, phục vụ ứng dụng trên website, mạng xã hội và các ấn phẩm thương hiệu."
            />


            <ServiceLogoShowcase
                title={(
                    <>
                        Bắt đầu thương hiệu với <TextGradient text="HomeNest.media – thiết kế logo ấn tượng" />, kể trọn câu chuyện thương hiệu của bạn.
                    </>
                )}
                descriptionDefault="Mỗi thương hiệu đều có một câu chuyện, và logo chính là trang đầu tiên khách hàng nhìn thấy. Một logo chuyên nghiệp không chỉ giúp doanh nghiệp dễ nhận diện, mà còn truyền tải được bản sắc, giá trị và sứ mệnh của thương hiệu."
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


            <ServiceResult />


            <ServicePriceTable
                heading="Bảng giá thiết kế logo chuyên nghiệp - HomeNest.media"


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
                            "Đồng phục (Áo thun, Somi)",
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
                            "Đồng phục (Áo thun, somi, áo khoác)",
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
                            "Đồng phục (Áo thun, somi, áo khoác)",
                            "Thời gian thực hiện: 10 ~ 15 ngày",
                            "Chỉnh sửa không giới hạn",
                            "Brand guidelines logo",
                            "Thiết kế kẹp Folder (Kẹp file)",
                            "Thiết kế Letter Header",
                            "Thiết kế profile công ty (15 trang)",
                            "Thiết kế bảng hiệu công ty",
                            "Thiết kế tờ roi",
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
                            "Thiết kế phong bì thư",
                            "Thời gian thực hiện:",
                            "Chỉnh sửa không giới hạn",
                            "Brand guidelines logo",
                            "Thiết kế kẹp Folder (Kẹp file)",
                            "Thiết kế Letter Header",
                            "..............",
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

            <ServiceExperience />


            <ServiceProject
                heading={(
                    <>
                        <TextGradient text="Project" /> - Các Mẫu <TextGradient text="Thiết Kế Logo Chuyên Nghiệp" /> Đã Thực Hiện
                    </>
                )}
                description={(
                    <>
                        HomeNest.media cung cấp giải pháp thiết kế logo và <a href="https://homenest.media/dich-vu-homenest/branding/">Branding</a>, giúp doanh nghiệp xây dựng dấu ấn riêng và phát triển hình ảnh thương hiệu nhất quán. Mỗi dự án được định hướng theo đặc điểm ngành nghề, phong cách và mục tiêu kinh doanh, góp phần hoàn thiện hệ thống nhận diện thương hiệu trong nhiều lĩnh vực như bất động sản, F&amp;B, thời trang và công nghệ.
                    </>
                )}
            />

            <ServiceBenefits
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                heading="Lộ trình thiết kế logo thương hiệu"
                items={[
                    {
                        title: "Tìm hiểu & Ký kết",
                        desc: "HomeNest.media tiếp nhận yêu cầu, tìm hiểu mục tiêu dự án và tư vấn chi tiết về dịch vụ. Sau khi thống nhất, tiến hành báo giá và ký kết hợp đồng.",
                    },
                    {
                        title: "Nghiên cứu",
                        desc: "Phân tích doanh nghiệp, thị trường, khách hàng mục tiêu và đối thủ để tìm ra điểm khác biệt. Đồng thời, xác định mối liên kết giữa thương hiệu và khách hàng.",
                    },
                    {
                        title: "Đề ra giải pháp",
                        desc: "Định hướng chiến lược thương hiệu, xác lập mục tiêu cụ thể cho thiết kế logo nhằm đảm bảo sự nhất quán với định vị thương hiệu.",
                    },
                    {
                        title: "Thiết kế concept",
                        desc: "HomeNest.media tạo ra các concept logo dựa trên nghiên cứu và định hướng ban đầu. Sau đó, thảo luận và điều chỉnh để chọn ra phương án phù hợp nhất.",
                    },
                    {
                        title: "Thiết kế & Sáng tạo",
                        desc: "Hoàn thiện chi tiết logo, thử nghiệm phối cảnh, màu sắc và ứng dụng thực tế, đảm bảo logo thể hiện rõ cá tính thương hiệu.",
                    },
                    {
                        title: "Trình bày & Hiệu chỉnh",
                        desc: "Gửi các phương án logo đến doanh nghiệp, lắng nghe phản hồi và thực hiện các điều chỉnh cần thiết để đạt kết quả tối ưu.",
                    },
                    {
                        title: "Thử nghiệm thực tế",
                        desc: "Kiểm tra logo trong nhiều trường hợp sử dụng thực tế, đánh giá mức độ hiệu quả và tiếp tục điều chỉnh nếu cần.",
                    },
                    {
                        title: "Đóng gói sản phẩm",
                        desc: "Hoàn thiện bộ logo bao gồm file gốc, hướng dẫn sử dụng, các phiên bản màu sắc và ứng dụng phổ biến.",
                    },
                    {
                        title: "Bàn giao & Nghiệm thu",
                        desc: "HomeNest.media bàn giao toàn bộ thiết kế và phối hợp nghiệm thu theo hợp đồng đã ký kết.",
                    },
                    {
                        title: "Đồng hành phát triển",
                        desc: "Luôn sẵn sàng hỗ trợ doanh nghiệp trong việc ứng dụng logo vào thực tế và phát triển các hạng mục thương hiệu tiếp theo như nhận diện thương hiệu, website, ấn phẩm truyền thông.",
                    },
                ]}
            />


            <ServiceHowWeWork
                heading="Doanh nghiệp cùng đồng hành trong từng bước thiết kế Logo"
                items={[
                    {
                        tag: "Bản dự thảo",
                        title: "Gửi phương án thiết kế Logo",
                        desc: "HomeNest.media gửi các phương án logo ban đầu để khách hàng đánh giá biểu tượng, màu sắc, kiểu chữ và mức độ phù hợp với thương hiệu.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Tiếp nhận phản hồi từ khách hàng",
                        desc: "HomeNest.media tổng hợp góp ý về logo và thống nhất các chi tiết cần điều chỉnh trước khi hoàn thiện.",
                    },
                    {
                        tag: "Chỉnh sửa thiết kế",
                        title: "Điều chỉnh và hoàn thiện Logo",
                        desc: "Đội ngũ thiết kế cập nhật logo theo phản hồi đã thống nhất, đảm bảo sự hài hòa giữa biểu tượng, kiểu chữ và màu sắc.",
                    },
                    {
                        tag: "Duyệt thiết kế",
                        title: "Xác nhận thiết kế Logo cuối cùng",
                        desc: "Khách hàng kiểm tra và xác nhận logo hoàn thiện trước khi chuyển sang bước bàn giao file.",
                    },
                    {
                        tag: "Bàn giao file",
                        title: "Bàn giao file thiết kế Logo",
                        desc: "HomeNest.media bàn giao file logo theo định dạng và phạm vi dịch vụ đã thỏa thuận, phục vụ ứng dụng trên các nền tảng và ấn phẩm thương hiệu.",
                    },
                ]}
            />


            <FAQSection
                headingText="Những câu hỏi thường gặp"
                items={[
                    {
                        question: "Logo thương hiệu có ý nghĩa gì ?",
                        answer:
                            "Logo thương hiệu là biểu tượng cô đọng của giá trị và bản sắc doanh nghiệp. Nó không chỉ là hình ảnh đại diện mà còn truyền tải thông điệp, sứ mệnh và tinh thần của thương hiệu tới khách hàng. Một logo ấn tượng tạo dấu ấn mạnh mẽ, giúp thương hiệu dễ nhận diện, tạo lòng tin và kết nối cảm xúc với khách hàng. Khi được thiết kế đúng cách, logo sẽ là công cụ đắc lực trong việc xây dựng uy tín và ghi nhớ thương hiệu lâu dài.",
                    },
                    {
                        question: "Có những loại Logo nào phổ biến hiện nay ?",
                        answer: (
                            <>
                                <p>Hiện nay, có sáu loại logo phổ biến mà các thương hiệu thường sử dụng:</p>
                                <p><strong>Logo chữ (Wordmark)</strong>: Sử dụng chính tên thương hiệu làm logo, thể hiện qua phông chữ độc đáo, ví dụ: Coca-Cola, Google.</p>
                                <p><strong>Logo chữ cái viết tắt (Lettermark)</strong>: Tập trung vào tên viết tắt của thương hiệu, thích hợp với những thương hiệu có tên dài, ví dụ: IBM, HBO.</p>
                                <p><strong>Logo biểu tượng (Symbol/Icon)</strong>: Sử dụng biểu tượng hoặc hình ảnh đặc trưng để thể hiện thương hiệu. Loại logo này đòi hỏi sự nhận diện mạnh mẽ, ví dụ: Apple, Twitter.</p>
                                <p><strong>Logo kết hợp (Combination Mark)</strong>: Kết hợp giữa chữ và biểu tượng, mang lại sự linh hoạt khi sử dụng, ví dụ: Adidas, Burger King.</p>
                                <p><strong>Logo linh vật (Mascot)</strong>: Sử dụng hình ảnh nhân vật hoặc linh vật đại diện cho thương hiệu, phù hợp với các thương hiệu hướng đến sự thân thiện, vui tươi, ví dụ: KFC, Pringles.</p>
                                <p><strong>Logo huy hiệu (Emblem)</strong>: Logo dạng huy hiệu hay con dấu, thường bao gồm cả biểu tượng và tên thương hiệu, mang tính chất cổ điển và uy tín, ví dụ: Starbucks, Harley-Davidson.</p>
                                <p>Mỗi loại logo mang lại cách truyền tải khác nhau, tùy vào tính chất, phong cách và thông điệp mà thương hiệu muốn hướng tới.</p>
                            </>
                        ),
                    },
                    {
                        question: "Tại sao logo nên được thiết kế chuyên nghiệp",
                        answer: (
                            <>
                                <p>
                                    Logo chuyên nghiệp là yếu tố cốt lõi để tạo dựng và{" "}
                                    <a href="https://homenest.media/dich-vu/thiet-ke-nhan-dien-thuong-hieu/">nhận diện thương hiệu</a>{" "}
                                    mạnh mẽ. Một logo được thiết kế chỉn chu không chỉ thu hút ánh nhìn mà còn truyền tải rõ ràng giá trị, cá tính và thông điệp của doanh nghiệp. Nó giúp thương hiệu nổi bật, tạo ấn tượng lâu dài với khách hàng và xây dựng lòng tin một cách hiệu quả. Đồng thời, logo chuyên nghiệp đảm bảo sự linh hoạt khi sử dụng trên các phương tiện khác nhau, từ ấn phẩm quảng cáo đến nền tảng kỹ thuật số, giúp thương hiệu phát triển và thích ứng tốt với thị trường.
                                </p>
                            </>
                        ),
                    },
                    {
                        question: "Như thế nào là một logo thương hiệu tốt ?",
                        answer:
                            "Logo thương hiệu tốt là logo truyền tải được cá tính và giá trị cốt lõi của doanh nghiệp, đơn giản và dễ nhận diện, linh hoạt cho nhiều ứng dụng, và dễ nhớ. Một logo chất lượng tạo ấn tượng ngay lập tức và có khả năng tạo dựng sự gắn kết với khách hàng, giúp thương hiệu dễ dàng được nhận diện trong tâm trí người tiêu dùng.",
                    },
                    {
                        question: "Cách các công ty lớn tạo ra logo như thế nào ?",
                        answer:
                            "Các công ty lớn tạo logo qua các bước: nghiên cứu thương hiệu và khách hàng, xác định chiến lược thiết kế, sáng tạo và thử nghiệm ý tưởng, lấy phản hồi để hoàn thiện, đảm bảo linh hoạt trên mọi nền tảng và đăng ký bản quyền. Nhờ đó, logo không chỉ nhận diện tốt mà còn truyền tải mạnh mẽ giá trị thương hiệu.",
                    },
                    {
                        question: "Ai sẽ là người được sở hữu bản quyền logo ?",
                        answer:
                            "Bạn chính là đơn vị sở hữu bản quyền tác giả của logo thương hiệu. Sau khi dự án thiết kế logo hoàn tất, HomeNest sẽ hỗ trợ bạn đăng ký bản quyền tác giả tại Cục Bản quyền tác giả.",
                    },
                    {
                        question: "Tôi có thể liên hệ trực tiếp người thiết kế không ?",
                        answer:
                            "Có thể, Trong suốt quá trình dự án diễn ra, bạn có thể liên hệ trực tiếp với nhà thiết kế bên HomeNest.media để có thể có truyền đạt ý tưởng và có được phản hồi đúng như ý muốn.",
                    },
                    {
                        question: "Tôi nên làm gì để bắt đầu thiết kế logo ?",
                        answer:
                            "Bạn có thể liên hệ ngay cho HomeNest.media, hoặc điền form thông tin bên dưới để có thể có được tư vấn về những thông tin hữu ích, về các giải pháp thiết kế logo tốt nhất cho doanh nghiệp.",
                    },
                    {
                        question: "Tôi có được phép đề xuất chỉnh sửa logo không ?",
                        answer: (
                            <>
                                <p>Số lần chỉnh sửa phụ thuộc gói dịch vụ thiết kế Logo bạn chọn.</p>
                                <p>HomeNest.media sẽ tiếp tục chỉnh sửa nếu vẫn chưa đạt đủ các tiêu chí, lẫn tiêu chuẩn theo bản nghiên cứu thương hiệu.</p>
                            </>
                        ),
                    },
                    {
                        question: "Mất bao lâu để chúng tôi có được logo thương hiệu",
                        answer:
                            "Thời gian thiết kế logo trung bình theo các gói sản phẩm. Tuy nhiên, thời gian chính xác phụ thuộc vào độ phức tạp của dự án và sự phối hợp giữa doanh nghiệp và HomeNest.media.",
                    },
                    {
                        question: "Chúng tôi nên làm gì sau khi thiết kế xong logo ?",
                        answer: (
                            <>
                                <p>Bạn có thể sử dụng ngay Logo dựa theo cẩm nang hướng dẫn của HomeNest.media để xây dựng và phát triển thương hiệu.</p>
                                <p>Ngoài ra, để xây dựng thương hiệu nhất quán, mạnh mẽ và rõ ràng hơn, bạn có tiếp tục:</p>
                                <p>+ Xây dựng bộ nhận diện thương hiệu toàn diện cho doanh nghiệp</p>
                                <p>+ Xây dựng Website chuẩn nhận diện thương hiệu</p>
                                <p>+ Triển khai hoạt động ra mắt thương hiệu, hay dịch vụ thiết kế catalouge, profile,mascot,…</p>
                                <p>+ Thực hiện các chiến dịch truyền thông xây dựng thương hiệu.</p>
                                <p>+ … và nhiều giải pháp khác</p>
                                <p>Nếu bạn đang có nhu cầu phát triển khả năng định vị thương hiệu mạnh mẽ hơn thì có thể liên hệ ngay cho HomeNest.media, chúng tôi sẵn sàng mang lại những giải pháp tối ưu cho doanh nghiệp.</p>
                            </>
                        ),
                    },
                    {
                        question: "Quy trình thiết kế logo tiêu chuẩn quốc tế như thế nào ?",
                        answer: (
                            <>
                                <p>Quy trình thiết kế logo chuẩn quốc tế gồm:</p>
                                <ol>
                                    <li><strong>Nghiên cứu thương hiệu</strong>: Hiểu rõ giá trị và đối tượng mục tiêu.</li>
                                    <li><strong>Phát triển ý tưởng</strong>: Đưa ra các khái niệm phù hợp.</li>
                                    <li><strong>Phác thảo và thử nghiệm</strong>: Tạo mẫu và chọn lựa thiết kế tối ưu.</li>
                                    <li><strong>Hoàn thiện</strong>: Điều chỉnh dựa trên phản hồi.</li>
                                    <li><strong>Thử nghiệm đa nền tảng</strong>: Đảm bảo logo hoạt động tốt ở mọi định dạng.</li>
                                    <li><strong>Bàn giao và bảo hộ</strong>: Cung cấp file chuẩn và đăng ký bản quyền.</li>
                                </ol>
                                <p>Quy trình này giúp tạo logo nhận diện tốt và bền vững.</p>
                            </>
                        ),
                    },
                ]}
            />

            <ServiceTestimonials />
        </>
    )
}