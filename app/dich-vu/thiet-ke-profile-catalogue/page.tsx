import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceOverview, ServicePriceTable, ServiceProject, ServiceResult, ServiceStrategy, ServiceTestimonials } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết kế Profile công ty Catalogue chuyên nghiệp - Chìa khóa chinh phục khách hàng"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media </a>cung cấp dịch vụ thiết kế profile công ty và catalogue, giúp doanh nghiệp thể hiện năng lực, giới thiệu sản phẩm và truyền tải thông tin thương hiệu một cách rõ ràng, nhất quán. Từ việc sắp xếp nội dung, lựa chọn hình ảnh đến xây dựng bố cục thiết kế, mỗi ấn phẩm đều được định hướng theo lĩnh vực hoạt động và mục đích sử dụng thực tế.</p>
                        <p>Profile và catalogue được thiết kế nhằm hỗ trợ doanh nghiệp giới thiệu hình ảnh chuyên nghiệp đến khách hàng, đối tác, đồng thời phục vụ các hoạt động bán hàng, hợp tác kinh doanh và đấu thầu.</p>
                    </>
                )}
                ctaText="Nhận tư vấn Profile/Catalogue"
            />


            <ServiceOverview
                title="Với một profile và catalogue chuyên nghiệp, doanh nghiệp sẽ dễ dàng nổi bật hơn trong thị trường."
                description="Doanh nghiệp nên thiết kế Profile và Catalogue khi cần giới thiệu năng lực, sản phẩm và dịch vụ một cách chuyên nghiệp đến khách hàng, đối tác. Đây cũng là những tài liệu hữu ích khi tham gia đấu thầu, tìm kiếm nhà phân phối hoặc mở rộng cơ hội hợp tác kinh doanh. Đối với doanh nghiệp có nhiều sản phẩm, mã hàng và thông số kỹ thuật, catalogue giúp hệ thống thông tin rõ ràng, thuận tiện cho việc tra cứu và lựa chọn. Bên cạnh đó, khi nhận diện thương hiệu thay đổi, doanh nghiệp cần cập nhật Profile và Catalogue để đảm bảo tính đồng bộ, đồng thời bổ sung phiên bản song ngữ, thông tin dự án hoặc số liệu mới theo nhu cầu sử dụng."
            />


            <ServiceStrategy
                heading="Nâng tầm hình ảnh doanh nghiệp với Profile & Catalogue tại HomeNest.media"
                title1="Tư vấn định hướng và cấu trúc nội dung"
                desc1="Xác định mục tiêu để xây dựng nội dung phù hợp cho Profile và Catalogue."
                title2="Thiết kế Profile công ty"
                desc2="Thiết kế hồ sơ năng lực với bố cục rõ ràng, hình ảnh đồng bộ và nội dung phù hợp với doanh nghiệp. "
                title3="Thiết kế Catalogue sản phẩm và dịch vụ"
                desc3=" Sắp xếp sản phẩm, hình ảnh và thông số theo bố cục rõ ràng, dễ tra cứu."
                title4="Hoàn thiện và bàn giao file thiết kế"
                desc4="Hoàn thiện thiết kế theo phản hồi và bàn giao file đúng định dạng, phạm vi thỏa thuận."
            />


            <ServiceResult />


            <ServicePriceTable
                heading="Bảng giá thiết kế Profile/Catalogue - HomeNest.media"
                items={[
                    {
                        title: "BASIC",
                        imageTag: "/images/basic.png",
                        description: <>Catalogue dưới 10 trang</>,
                        features: [
                            "Mẫu Demo: 1 mẫu",
                            "Số lần chỉnh sửa: 3 lần",
                            "Thời gian hoàn thành: 4 ngày",
                            "Giá tính trên 1 trang sản phẩm.",
                            "Thời gian chỉnh sửa chỉ tính trong giờ hành chính",
                            "Thời gian hoàn thiện sẽ nhân gấp đôi chi phí nếu khách hàng cần gấp",
                            "Khách muốn thêm 1 mẫu demo vui lòng tính phí trên 20% tổng chi phí",
                            "Với các thiết kế tương tự, giữ nguyên bố cục chỉ thay text và màu sắc sẽ tính phí 20% trên 1 bản.",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "300K/TRANG",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "GOLDEN",
                        imageTag: "/images/golden.png",
                        description: <>Catalogue trên 10 dưới 20 trang</>,
                        features: [
                            "Mẫu Demo: 1 mẫu",
                            "Số lần chỉnh sửa: 3 lần",
                            "Thời gian hoàn thành: 4 ngày",
                            "Giá tính trên 1 trang sản phẩm.",
                            "Thời gian chỉnh sửa chỉ tính trong giờ hành chính",
                            "Thời gian hoàn thiện sẽ nhân gấp đôi chi phí nếu khách hàng cần gấp",
                            "Khách muốn thêm 1 mẫu demo vui lòng tính phí trên 20% tổng chi phí",
                            "Với các thiết kế tương tự, giữ nguyên bố cục chỉ thay text và màu sắc sẽ tính phí 20% trên 1 bản.",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "250K/TRANG",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "DIAMOND",
                        imageTag: "/images/diamond.png",
                        description: <>Catalogue trên 30 trang</>,
                        features: [
                            "Mẫu Demo: 1 mẫu",
                            "Số lần chỉnh sửa: 3 lần",
                            "Thời gian hoàn thành: 4 ngày",
                            "Giá tính trên 1 trang sản phẩm.",
                            "Thời gian chỉnh sửa chỉ tính trong giờ hành chính",
                            "Thời gian hoàn thiện sẽ nhân gấp đôi chi phí nếu khách hàng cần gấp",
                            "Khách muốn thêm 1 mẫu demo vui lòng tính phí trên 20% tổng chi phí",
                            "Với các thiết kế tương tự, giữ nguyên bố cục chỉ thay text và màu sắc sẽ tính phí 20% trên 1 bản.",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "200K/TRANG",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "PLATINUM",
                        imageTag: "/images/platinum.png",
                        description: <span style={{ color: "#972295" }}>Tùy chỉnh riêng</span>,
                        features: [
                            "Mẫu Demo: 3 mẫu",
                            "Số lần chỉnh sửa: 7 lần",
                            "Thời gian hoàn thành: 2 ngày",
                            "Giá tính trên 1 trang sản phẩm.",
                            "Thời gian chỉnh sửa chỉ tính trong giờ hành chính",
                            "Thời gian hoàn thiện sẽ nhân gấp đôi chi phí nếu khách hàng cần gấp",
                            "Khách muốn thêm 1 mẫu demo vui lòng tính phí trên 20% tổng chi phí",
                            "Với các thiết kế tương tự, giữ nguyên bố cục chỉ thay text và màu sắc sẽ tính phí 20% trên 1 bản.",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "420K/TRANG",
                        ctaText: "Tư vấn ngay",
                    },
                ]}
            />


            <CTASection />


            <ServiceExperience />


            <ServiceProject
                heading={(
                    <>
                        <TextGradient text="Project" /> - Những Mẫu <TextGradient text="Thiết Kế Chuyên Nghiệp" /> Đã Thực Hiện
                    </>
                )}
                description={(
                    <>
                        HomeNest.media triển khai các dự án <a href="https://homenest.media/dich-vu-homenest/branding/"><b>Branding</b></a> đa dạng, từ thiết kế nhận diện thương hiệu đến Profile công ty và Catalogue. Mỗi thiết kế được định hướng theo đặc trưng thương hiệu, kết hợp màu sắc, hình ảnh và bố cục phù hợp nhằm truyền tải thông điệp nhất quán. Các sản phẩm hướng đến việc xây dựng hình ảnh chuyên nghiệp, hỗ trợ doanh nghiệp giới thiệu năng lực, quảng bá sản phẩm và tạo dấu ấn với khách hàng, đối tác.
                    </>
                )}
            />



            <ServiceBenefits
                heading="Lộ trình thiết kế thương hiệu"
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                imageAlt="Lộ trình thiết kế thương hiệu"
                items={[
                    {
                        title: "Kết nối & Khởi động",
                        desc: "Chúng tôi lắng nghe nhu cầu, tư vấn giải pháp và gửi báo giá. Khi thống nhất, hợp đồng sẽ được ký kết để chính thức bắt đầu.",
                    },
                    {
                        title: "Khám phá thương hiệu",
                        desc: "Tìm hiểu doanh nghiệp, khách hàng và đối thủ để xây dựng nội dung và phong cách thiết kế phù hợp nhất.",
                    },
                    {
                        title: "Lên khung nội dung",
                        desc: "Xây dựng bố cục và nội dung chi tiết, giúp Catalogue truyền tải thông điệp rõ ràng và hấp dẫn.",
                    },
                    {
                        title: "Chuẩn bị hình ảnh",
                        desc: "Chọn lọc, chụp hoặc xử lý hình ảnh sản phẩm/doanh nghiệp để đảm bảo chất lượng cao và tính thẩm mỹ.",
                    },
                    {
                        title: "Chia sẻ ý tưởng",
                        desc: "Trình bày ý tưởng thiết kế để doanh nghiệp duyệt. Khi đã thống nhất, chúng tôi tiến hành thiết kế chi tiết.",
                    },
                    {
                        title: "Thiết kế & Dàn trang",
                        desc: "Thiết kế và sắp xếp nội dung theo bố cục đã thống nhất, tạo nên một ấn phẩm chuyên nghiệp, cuốn hút.",
                    },
                    {
                        title: "Phản hồi & Hoàn thiện",
                        desc: "Gửi bản thiết kế, nhận phản hồi và chỉnh sửa theo yêu cầu để đảm bảo sự hài lòng tối đa.",
                    },
                    {
                        title: "In ấn & Bàn giao",
                        desc: "Hoàn tất in ấn và bàn giao thành phẩm cùng các file thiết kế theo đúng cam kết.",
                    },
                ]}
            />


            <ServiceHowWeWork
                heading="Doanh nghiệp cùng đồng hành trong từng bước thiết kế Profile và Catalogue"
                items={[
                    {
                        tag: "Bản dự thảo",
                        title: "Gửi bản thiết kế dự thảo",
                        desc: "Sau khi hoàn thiện phương án thiết kế ban đầu, HomeNest.media gửi bản dự thảo để khách hàng xem xét tổng thể. Khách hàng có thể đánh giá bố cục, màu sắc, hình ảnh, kiểu chữ và cách trình bày thông tin trên từng trang.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Tiếp nhận phản hồi từ khách hàng",
                        desc: "Khách hàng tổng hợp các góp ý về nội dung, hình ảnh, thứ tự trang và những chi tiết cần điều chỉnh. HomeNest.media tiếp nhận phản hồi để xác định các hạng mục cần sửa đổi, thống nhất phương án trước khi thực hiện.",
                    },
                    {
                        tag: "Chỉnh sửa",
                        title: "Điều chỉnh và hoàn thiện thiết kế",
                        desc: "Đội ngũ thiết kế cập nhật bản thiết kế theo các ý kiến đã thống nhất, đảm bảo tính nhất quán về hình ảnh và nhận diện thương hiệu. Các yêu cầu chỉnh sửa được thực hiện theo phạm vi công việc và số lần điều chỉnh đã thỏa thuận.",
                    },
                    {
                        tag: "Duyệt thiết kế",
                        title: "Xác nhận bản thiết kế cuối cùng",
                        desc: "HomeNest.media gửi lại phiên bản đã điều chỉnh để khách hàng kiểm tra lần cuối, bao gồm nội dung, hình ảnh, thông tin liên hệ và các chi tiết trình bày. Sau khi khách hàng xác nhận, thiết kế được chuyển sang bước xuất file và bàn giao theo định dạng đã thống nhất.",
                    },
                    {
                        tag: "Bàn giao",
                        title: "Bàn giao file thiết kế",
                        desc: "Bàn giao Profile hoặc Catalogue hoàn thiện theo định dạng đã thỏa thuận, phục vụ nhu cầu sử dụng trực tuyến hoặc in ấn nếu thuộc phạm vi dịch vụ. Trước khi bàn giao, hai bên xác nhận các hạng mục, định dạng file và yêu cầu kỹ thuật liên quan.",
                    },
                ]}
            />


            <FAQSection
                items={[
                    {
                        question: "Profile năng lực công ty là gì ?",
                        answer:
                            "Profile năng lực công ty là tài liệu tổng quan giới thiệu về khả năng, thành tựu, và giá trị của doanh nghiệp. Được thiết kế chuyên nghiệp, profile giúp đối tác và khách hàng hiểu rõ tiềm lực và uy tín của công ty, tạo nền tảng vững chắc để xây dựng niềm tin và thiết lập quan hệ bền chặt.",
                    },
                    {
                        question: "Profile công ty có lợi ích gì ? tại sao phải cần thiết kế chúng ?",
                        answer:
                            "Profile công ty là công cụ quan trọng giúp doanh nghiệp giới thiệu năng lực và giá trị cốt lõi một cách chuyên nghiệp. Được thiết kế bài bản, profile tạo ấn tượng mạnh, gia tăng uy tín, và thu hút khách hàng tiềm năng. Đồng thời, nó giúp đối tác, khách hàng dễ dàng nắm bắt thế mạnh của công ty, từ đó thúc đẩy cơ hội hợp tác và phát triển bền vững.",
                    },
                    {
                        question: "Tôi cần chuẩn bị gì trước khi thiết kế profile công ty ?",
                        answer: (
                            <>
                                <p>Để thiết kế một profile công ty chuyên nghiệp, cần chuẩn bị kỹ lưỡng các thông tin sau:</p>
                                <ol>
                                    <li><strong>Giới thiệu công ty</strong>: Tóm tắt lịch sử hình thành, sứ mệnh, tầm nhìn và giá trị cốt lõi.</li>
                                    <li><strong>Thông tin sản phẩm/dịch vụ</strong>: Mô tả chi tiết các sản phẩm hoặc dịch vụ chính, điểm mạnh và lợi ích đối với khách hàng.</li>
                                    <li><strong>Thành tựu và chứng nhận</strong>: Đưa vào các giải thưởng, chứng nhận, hay thành tích nổi bật nhằm tăng cường độ tin cậy.</li>
                                    <li><strong>Thông tin đội ngũ</strong>: Giới thiệu đội ngũ lãnh đạo và các nhân sự chủ chốt, thể hiện năng lực và kinh nghiệm của công ty.</li>
                                    <li><strong>Định hướng phát triển</strong>: Chia sẻ chiến lược và mục tiêu phát triển trong tương lai, tạo niềm tin về sự phát triển bền vững.</li>
                                </ol>
                                <p>Sự chuẩn bị đầy đủ và chi tiết giúp profile thể hiện đúng năng lực và tạo dựng niềm tin trong mắt khách hàng, đối tác.</p>
                            </>
                        ),
                    },
                    {
                        question: "Mất bao lâu tôi sẽ có được profile công ty ?",
                        answer: (
                            <>
                                <p>Thời gian thiết kế profile công ty thường dao động từ 2 tuần đến 1 tháng, tùy vào yêu cầu và độ phức tạp của dự án. Nếu bạn chuẩn bị đầy đủ và chính xác dữ liệu, quá trình này sẽ nhanh chóng hơn.</p>
                                <p>Nếu bạn yêu cầu hoàn thành profile trong 2 ngày, câu trả lời của chúng tôi thường là “không thể”. Một tài liệu quan trọng như profile công ty đòi hỏi sự đầu tư kỹ lưỡng về thời gian và nguồn lực để đảm bảo chất lượng, mang lại giá trị tối ưu cho thương hiệu của bạn.</p>
                            </>
                        ),
                    },
                    {
                        question: "Làm sao để tôi có được một profile công ty chuyên nghiệp ?",
                        answer: (
                            <>
                                <p>Để có được một profile công ty chuyên nghiệp, bạn cần chú trọng đến các yếu tố sau:</p>
                                <p><strong>Nghiên cứu và Xác định Thông Tin Cần Thiết</strong>: Đảm bảo rằng profile của bạn bao gồm các thông tin quan trọng như sứ mệnh, tầm nhìn, giá trị cốt lõi, sản phẩm/dịch vụ, thành tựu, đội ngũ và khách hàng tiêu biểu.</p>
                                <p><strong>Xác Định Đối Tượng Mục Tiêu</strong>: Biết rõ bạn muốn gửi thông điệp đến ai (khách hàng, đối tác, nhà đầu tư) để tạo ra thông điệp phù hợp và dễ tiếp cận.</p>
                                <p><strong>Thiết Kế Chuyên Nghiệp</strong>:</p>
                                <ul>
                                    <li>Sử dụng hình ảnh, màu sắc và phông chữ đồng bộ với bộ nhận diện thương hiệu.</li>
                                    <li>Đảm bảo layout sạch sẽ, dễ đọc và dễ theo dõi.</li>
                                    <li>Chú ý đến hình ảnh chất lượng cao và biểu đồ minh họa để làm nổi bật những điểm mạnh.</li>
                                </ul>
                                <p><strong>Đưa Ra Thông Điệp Rõ Ràng, Mạch Lạc</strong>: Trình bày thông tin một cách súc tích, rõ ràng, tránh dài dòng nhưng vẫn đầy đủ. Tập trung vào những yếu tố quan trọng giúp công ty gây ấn tượng mạnh.</p>
                                <p><strong>Tạo Sự Khác Biệt</strong>: Profile công ty của bạn nên có yếu tố khác biệt, phản ánh đúng bản sắc và phong cách riêng của công ty, từ đó giúp khách hàng dễ dàng nhận diện.</p>
                                <p><strong>Cập Nhật Thông Tin Đầy Đủ và Kịp Thời</strong>: Đảm bảo rằng mọi thông tin trong profile luôn được cập nhật với những thành tựu và hoạt động mới nhất của công ty.</p>
                                <p><strong>Sử Dụng Dịch Vụ Thiết Kế Chuyên Nghiệp</strong>: Nếu bạn không có đội ngũ thiết kế in-house, hãy tìm kiếm các đơn vị thiết kế chuyên nghiệp để đảm bảo profile của bạn đạt chất lượng cao.</p>
                                <p>Bằng cách tập trung vào các yếu tố trên, bạn sẽ tạo ra một profile công ty không chỉ đẹp mắt mà còn đầy đủ, chuyên nghiệp và dễ tiếp cận.</p>
                            </>
                        ),
                    },
                    {
                        question: "Khi làm profile công ty tôi nên lựa chọn hình ảnh như thế nào ?",
                        answer: (
                            <>
                                <p>Khi làm profile công ty, lựa chọn hình ảnh đóng vai trò quan trọng trong việc truyền tải thông điệp thương hiệu và tạo ấn tượng với đối tượng mục tiêu. Dưới đây là một số gợi ý giúp bạn chọn hình ảnh phù hợp:</p>
                                <p><strong>Chất Lượng Cao</strong>:</p>
                                <p>Hình ảnh cần phải rõ nét, không mờ hay vỡ. Đảm bảo các bức ảnh có độ phân giải cao và không bị pixel hóa khi in hoặc hiển thị trên các nền tảng kỹ thuật số.</p>
                                <p><strong>Phù Hợp Với Thương Hiệu</strong>:</p>
                                <ul>
                                    <li>Chọn hình ảnh phản ánh đúng bản sắc thương hiệu của bạn. Ví dụ, nếu công ty của bạn chuyên về công nghệ, hình ảnh có thể liên quan đến sự đổi mới, sáng tạo và hiện đại.</li>
                                    <li>Nếu thương hiệu của bạn mang tính nhân văn, các hình ảnh có thể là những khoảnh khắc gần gũi, thể hiện sự thân thiện và gần gũi với khách hàng.</li>
                                </ul>
                                <p><strong>Chọn Hình Ảnh Chất Lượng Tốt, Sáng Sủa</strong>:</p>
                                <p>Tránh sử dụng những bức ảnh tối, kém sáng hoặc quá nhiều màu sắc làm mất tập trung. Hình ảnh sáng sủa và tươi sáng tạo cảm giác tích cực và chuyên nghiệp.</p>
                                <p><strong>Hình Ảnh Liên Quan Đến Sản Phẩm/Dịch Vụ</strong>:</p>
                                <p>Hình ảnh có thể là sản phẩm hoặc dịch vụ mà công ty cung cấp, giúp người đọc dễ dàng hiểu được công ty bạn làm gì. Cũng có thể là hình ảnh mô tả quy trình làm việc hoặc môi trường làm việc của công ty.</p>
                                <p><strong>Hình Ảnh Đội Ngũ Nhân Viên</strong>:</p>
                                <p>Hình ảnh đội ngũ nhân viên làm việc, chia sẻ sự gắn kết và văn hóa công ty sẽ tạo sự tin cậy và gần gũi. Đây là yếu tố giúp thể hiện sự chuyên nghiệp và con người trong công ty.</p>
                                <p><strong>Hình Ảnh Biểu Tượng</strong>:</p>
                                <p>Các hình ảnh biểu tượng có thể làm nổi bật giá trị cốt lõi hoặc mục tiêu công ty. Ví dụ: hình ảnh cây cối có thể tượng trưng cho sự phát triển bền vững, hoặc hình ảnh sáng tạo thể hiện sự đổi mới.</p>
                                <p><strong>Sử Dụng Hình Ảnh Thực Tế</strong>:</p>
                                <p>Nếu có thể, tránh sử dụng hình ảnh từ các kho ảnh miễn phí mà thay vào đó nên sử dụng hình ảnh thực tế từ công ty, sản phẩm hoặc dịch vụ của bạn. Điều này sẽ tạo sự độc đáo và chân thật hơn cho profile.</p>
                                <p><strong>Kết Hợp Hình Ảnh Với Văn Bản</strong>:</p>
                                <p>Hình ảnh cần phải bổ sung cho thông tin văn bản, không chỉ là yếu tố trang trí. Hình ảnh nên hỗ trợ và làm rõ các thông điệp trong profile.</p>
                                <p><strong>Đảm Bảo Tính Đồng Bộ</strong>:</p>
                                <ul>
                                    <li>Màu sắc, phong cách của hình ảnh phải đồng bộ với bộ nhận diện thương hiệu của công ty. Điều này tạo sự mạch lạc và giúp tăng tính nhận diện thương hiệu.</li>
                                    <li>Chọn hình ảnh đúng cách sẽ giúp profile công ty của bạn trở nên sinh động, hấp dẫn và truyền tải mạnh mẽ các giá trị cốt lõi, qua đó tạo dựng niềm tin và sự chú ý từ khách hàng, đối tác.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        question: "Profile công ty có kích thước như thế nào ?",
                        answer: (
                            <>
                                <p>Profile công ty là tài liệu giới thiệu quan trọng, vì vậy kích thước của nó cần đảm bảo tính “chuẩn mực” và dễ dàng sử dụng. Các kích thước thông dụng như A4 hoặc A5 (cả dạng đứng và ngang) thường được lựa chọn vì tính tiện lợi trong việc lưu trữ và sử dụng.</p>
                                <p>Ngoài ra, một số công ty chọn profile hình vuông (20cm x 20cm, 28cm x 28cm…) để tạo sự khác biệt và ấn tượng. Tuy nhiên, bạn nên tránh chọn kích thước quá lớn hoặc quá nhỏ, vì chúng sẽ gặp khó khăn trong việc lưu trữ và sử dụng hiệu quả.</p>
                            </>
                        ),
                    },
                    {
                        question: "Làm profile nên dùng loại giấy gì ?",
                        answer: (
                            <>
                                <p>Loại giấy phổ biến nhất cho profile công ty là Couches. Với cuốn profile từ 20–30 trang, bạn có thể sử dụng giấy Couches 200g/m² (C200) cho trang nội dung, và chọn giấy C300 dày hơn cho bìa để tăng sự chắc chắn.</p>
                                <p>Để tăng tính thẩm mỹ và độ bền, bạn có thể cán mờ hoặc cán bóng mặt bìa, giúp profile trở nên sang trọng và chuyên nghiệp hơn.</p>
                                <p>Ngoài giấy Couches, nếu muốn nâng cấp, bạn có thể sử dụng các loại giấy cao cấp như Conqueror hay giấy mỹ thuật ngoại nhập để tạo sự khác biệt và ấn tượng mạnh mẽ hơn.</p>
                            </>
                        ),
                    },
                    {
                        question: "HomeNest.media có nhận in ấn profile không ?",
                        answer:
                            "Có. Nếu khách hàng có nhu cầu in ấn profile công ty, HomeNest.media sẽ gửi báo giá với chi phí tốt nhất.",
                    },
                    {
                        question: "Công ty nào mới nên thiết kế profile năng lực ?",
                        answer: (
                            <>
                                <p>Profile công ty là tài liệu không thể thiếu đối với mọi doanh nghiệp, đặc biệt trong các giao dịch với đối tác và khách hàng. Đối với các công ty B2B, việc sở hữu một profile chuyên nghiệp là bắt buộc.</p>
                                <p>Một số ngành nghề yêu cầu profile công ty như một công cụ quan trọng trong các cuộc thầu và bán hàng, bao gồm:</p>
                                <ul>
                                    <li>Nhà thầu xây dựng, xây lắp</li>
                                    <li>Nhà thầu cung cấp vật tư</li>
                                    <li>Công ty kiến trúc, nội thất</li>
                                    <li>Công ty phân phối, xuất nhập khẩu</li>
                                    <li>Các công ty truyền thông, quảng cáo</li>
                                </ul>
                                <p>Profile công ty giúp nâng cao uy tín và tạo ấn tượng mạnh mẽ, là chìa khóa trong việc chinh phục khách hàng và đối tác.</p>
                            </>
                        ),
                    },
                    {
                        question: "Công ty tôi phải cập nhật những dự án mới vào mỗi năm. có thể in profile năng lực không ?",
                        answer: (
                            <>
                                <p>Profile công ty là tài liệu quan trọng được sử dụng thường xuyên trong nhiều trường hợp khác nhau, có thể lên đến hàng trăm hoặc hàng nghìn cuốn mỗi năm.</p>
                                <p>Nếu bạn muốn cập nhật thông tin hàng năm, việc làm mới và thiết kế lại profile là một lựa chọn hợp lý. Trong trường hợp chưa sử dụng hết số lượng profile cũ, bạn có thể chọn loại profile có gáy xoắn, giúp dễ dàng bổ sung thêm trang mới mà không cần thiết kế lại hoàn toàn.</p>
                            </>
                        ),
                    },
                    {
                        question: "HomeNest.media có hỗ biên tập nội dung cho Profile năng lực không ?",
                        answer:
                            "Có. Dựa trên nội dung cơ bản mà doanh nghiệp cung cấp, HomeNest.media sẽ biên tập và tinh chỉnh nội dung profile sao cho phù hợp, giúp làm nổi bật giá trị và đặc trưng của thương hiệu trước khi đưa vào thiết kế.",
                    },
                    {
                        question: "HomeNest.media có hỗ trợ phien dịch song ngữ cho profile không ?",
                        answer:
                            "Chắc chắn có. HomeNest.media sẽ hỗ trợ quý khách hàng chuyển đổi nội dung sang ngôn ngữ mong muốn với mức chi phí hợp lý và chất lượng dịch vụ tối ưu.",
                    },
                    {
                        question: "HomeNest.media có hỗ trợ chụp ảnh cho công ty không ?",
                        answer:
                            "Có. Nếu doanh nghiệp chưa có bộ ảnh, HomeNest.media sẽ hỗ trợ chụp ảnh theo concept phù hợp với yêu cầu. Gói chụp ảnh này là một lựa chọn kèm theo để đảm bảo sự đồng bộ và chuyên nghiệp cho profile của bạn.",
                    },
                    {
                        question: "Công ty nhỏ và mới thành lập có cần thiết kế profile không ?",
                        answer: (
                            <>
                                <p>Đây là quan niệm sai lầm. Thực tế, công ty nhỏ càng cần có profile để thể hiện sự chuyên nghiệp và uy tín, giúp xây dựng hình ảnh “lớn hơn” trong mắt khách hàng và đối tác.</p>
                                <p>Profile của công ty mới thành lập sẽ có cấu trúc khác so với các công ty lâu năm. Thay vì lịch sử hình thành hay dự án lớn, profile của startup thường tập trung vào tầm nhìn, năng lực và giải pháp đang cung cấp. Đồng thời, đội ngũ sáng lập và mục tiêu tương lai cũng là điểm nổi bật.</p>
                                <p>Trong trường hợp thiếu dự án lớn, sự thành công của profile sẽ phụ thuộc vào cách minh họa giải pháp và chiến lược một cách thông minh, sáng tạo, để tăng tính thuyết phục và khẳng định năng lực của công ty.</p>
                            </>
                        ),
                    },
                ]}
            />


            <ServiceTestimonials />

        </>
    )
}