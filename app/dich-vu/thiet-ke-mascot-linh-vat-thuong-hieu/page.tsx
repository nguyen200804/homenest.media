import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceLogoShowcase, ServiceOverview, ServicePriceTable, ServiceProject, ServiceStrategy, ServiceTestimonials } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết kế mascot độc đáo, tạo dấu ấn riêng cho thương hiệu"
                description={(
                    <>
                        <p><a href="/" target="_blank" rel="noopener">HomeNest.media</a> cung cấp dịch vụ thiết kế mascot trong <a href="/dich-vu-homenest/branding/" target="_blank" rel="noopener">giải pháp Branding</a>, giúp doanh nghiệp thể hiện cá tính và bản sắc thương hiệu thông qua hình tượng nhân vật độc đáo, dễ nhận diện. Mỗi mascot được phát triển dựa trên định hướng thương hiệu, lĩnh vực hoạt động và nhóm khách hàng mục tiêu.</p>
                        <p>Từ ý tưởng, tạo hình đến màu sắc và phong cách thể hiện, mascot được thiết kế để ứng dụng trong các hoạt động marketing, truyền thông và nội dung sáng tạo.  Qua đó, doanh nghiệp có thêm một yếu tố nhận diện trực quan để tăng tính nhất quán trong hệ thống Branding trên nhiều nền tảng.</p>
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế mascot miễn phí! "
            />


            <ServiceOverview
                title="Mascot là yếu tố đáng đầu tư trong chiến lược xây dựng thương hiệu"
                description="Thiết kế mascot là lựa chọn phù hợp khi doanh nghiệp muốn xây dựng hình ảnh thương hiệu khác biệt, tăng khả năng nhận diện và tạo sự gần gũi với khách hàng. Đặc biệt, khi thương hiệu cần một nhân vật đại diện để truyền tải cá tính, phát triển nội dung sáng tạo trên mạng xã hội, triển khai chiến dịch marketing hoặc làm mới cách giao tiếp với khách hàng, mascot có thể trở thành một yếu tố hữu ích trong chiến lược Branding. Việc xác định rõ mục tiêu sử dụng ngay từ đầu sẽ giúp doanh nghiệp lựa chọn phong cách nhân vật và định hướng thiết kế phù hợp."
            />


            <ServiceStrategy
                heading="Mascot - Cầu nối đưa thương hiệu đến gần khách hàng tại HomeNest.media"
                title1="Tư vấn định hướng và concept nhân vật"
                desc1="Xác định mục tiêu, khách hàng, tính cách thương hiệu và định hướng hình ảnh để xây dựng brief và concept phù hợp."
                title2="Thiết kế mascot 2D và 3D"
                desc2="Thiết kế mascot 2D hoặc 3D theo nhận diện thương hiệu và phạm vi dịch vụ đã thống nhất."
                title3="Thiết kế bộ biểu cảm, tư thế và sticker"
                desc3=" Thiết kế các trạng thái mascot và sticker tĩnh hoặc động theo nhu cầu truyền thông."
                title4="Hướng dẫn ứng dụng và duy trì nhận diện mascot"
                desc4="Xây dựng quy chuẩn sử dụng mascot về màu sắc, tỷ lệ, nền và cách thể hiện để duy trì tính nhất quán thương hiệu."
            />


            <ServiceLogoShowcase
                title={(
                    <>
                        Bắt đầu xây dựng <TextGradient text="dấu ấn thương hiệu" /> với dịch vụ <TextGradient text="thiết kế mascot tại HomeNest.media" />
                    </>
                )}
                descriptionDefault={(
                    <>
                        <p>Mascot là nhân vật đại diện giúp thương hiệu thể hiện cá tính và tạo sự gần gũi với khách hàng. Một thiết kế mascot phù hợp không chỉ tạo điểm nhấn về hình ảnh mà còn góp phần truyền tải thông điệp, giá trị và câu chuyện thương hiệu một cách sinh động.</p>
                        <p>HomeNest.media phát triển ý tưởng thiết kế mascot dựa trên định hướng Branding, đặc điểm doanh nghiệp và nhóm khách hàng mục tiêu. Từ tạo hình, màu sắc đến phong cách thể hiện, mascot được định hướng để ứng dụng nhất quán trong các hoạt động marketing, truyền thông và nhận diện thương hiệu.</p>
                    </>
                )}
                items={[
                    {
                        color: "#66E5FA",
                        bien2: [
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-1_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-2_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-3_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-4_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-5_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-6_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-7_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-8_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-9_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-10_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-11_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-12_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-13_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-14_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-15_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-16_color_1.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-17_color_1.webp", desc: "" },
                        ],
                    },
                    {
                        color: "#fccdd8ff",
                        bien2: [
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-1_color_2.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-2_color_2.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-3_color_2.webp", desc: "" },
                            { image: "/images/thiet-ke-mascot-linh-vat-thuong-hieu/logo-4_color_2.webp", desc: "" },
                        ],
                    },
                ]}
            />


            <ServiceExperience />


            <ServicePriceTable
                heading="Bảng giá thiết kế Mascot"
                items={[
                    {
                        title: "BASIC",
                        imageTag: "/images/basic.png",
                        description: "Thiết kế linh vật cơ bản cho thương hiệu mới",
                        features: [
                            "02 Concepts mascot 2D",
                            "02 nhà thiết kế tham gia",
                            "02 lần hiệu chỉnh",
                            "05 Sắc thái/ hành động cơ bản",
                            "Bản phân tích ý nghĩa Macost",
                            "File gốc thiết kế macost",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "7.000.000",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "GOLDEN",
                        imageTag: "/images/golden.png",
                        description: "Thiết kế linh vật thương hiệu chuyên nghiệp",
                        features: [
                            "03 Concepts mascot",
                            "02 nhà thiết kế tham gia",
                            "03 lần hiệu chỉnh",
                            "Bộ Stiker tĩnh",
                            "Bản phân tích ý nghĩa Macost",
                            "Kể câu chuyện nhân vật",
                            "File gốc thiết kế macost",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "15.000.000",
                        ctaText: "Tư vấn ngay",
                    },
                    {
                        title: "DIAMOND",
                        imageTag: "/images/diamond.png",
                        description: "Linh vật thương hiệu cho tổng công ty, tập đoàn",
                        features: [
                            "05 Concepts mascot 3D",
                            "02 nhà thiết kế tham gia",
                            "Không giới hạn hiệu chỉnh",
                            "Bộ Stiker tĩnh",
                            "Bộ Stiker động",
                            "Bản phân tích ý nghĩa Macost",
                            "Câu chuyện của linh vật",
                            "File gốc thiết kế macost",
                        ],
                        note: "*Liên hệ ngay để được tư vấn miễn phí",
                        price: "35.000.000",
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
                description="HomeNest.media cung cấp giải pháp thiết kế mascot, giúp doanh nghiệp xây dựng hình tượng nhân vật mang cá tính riêng và phù hợp với định hướng Branding. Mỗi thiết kế được phát triển từ ý tưởng, tạo hình đến màu sắc và biểu cảm, hướng đến khả năng ứng dụng trong các hoạt động marketing, truyền thông và xây dựng hình ảnh thương hiệu trên nhiều nền tảng."
            />


            <ServiceBenefits
                heading="Lộ trình thiết kế Mascot"
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                imageAlt="Lộ trình thiết kế Mascot"
                items={[
                    {
                        title: "Tiếp nhận & Ký kết",
                        desc: "HomeNest Media tiếp nhận yêu cầu, tìm hiểu mục tiêu sử dụng mascot và tư vấn giải pháp thiết kế phù hợp. Hai bên thống nhất phạm vi công việc, chi phí và các hạng mục bàn giao trước khi ký kết hợp đồng.",
                    },
                    {
                        title: "Nghiên cứu thương hiệu",
                        desc: "Phân tích lĩnh vực hoạt động, đặc điểm thương hiệu, đối thủ cạnh tranh và khách hàng mục tiêu để xác định định hướng thiết kế mascot phù hợp với mục tiêu truyền thông.",
                    },
                    {
                        title: "Định hướng nhân vật",
                        desc: "Xác định ý tưởng, phong cách tạo hình, màu sắc, hình dáng và tính cách mascot dựa trên bản sắc thương hiệu, đảm bảo nhân vật phù hợp với mục đích sử dụng.",
                    },
                    {
                        title: "Thiết kế & Trình bày",
                        desc: "Phát triển các phương án thiết kế mascot dựa trên định hướng đã thống nhất, trình bày tạo hình và đặc điểm nhân vật để doanh nghiệp xem xét, đánh giá.",
                    },
                    {
                        title: "Hiệu chỉnh thiết kế",
                        desc: "Tiếp nhận phản hồi từ doanh nghiệp và điều chỉnh các chi tiết về tạo hình, màu sắc, biểu cảm hoặc đặc điểm nhân vật theo nội dung đã thống nhất.",
                    },
                    {
                        title: "Hoàn thiện mascot",
                        desc: "Hoàn thiện thiết kế mascot, chuẩn hóa các chi tiết tạo hình và triển khai thêm tư thế, biểu cảm hoặc phiên bản ứng dụng nếu nằm trong phạm vi dịch vụ.",
                    },
                    {
                        title: "Bàn giao & Nghiệm thu",
                        desc: "HomeNest Media bàn giao file thiết kế mascot theo định dạng và danh mục đã thỏa thuận. Hai bên kiểm tra sản phẩm và thực hiện nghiệm thu theo hợp đồng.",
                    },
                    {
                        title: "Hỗ trợ ứng dụng mascot",
                        desc: "Hướng dẫn hoặc tư vấn ứng dụng mascot vào các hoạt động Branding, marketing và truyền thông theo phạm vi hỗ trợ đã thống nhất giữa hai bên.",
                    },
                ]}
            />


            <ServiceHowWeWork
                heading="Doanh nghiệp đồng hành trong từng bước thiết kế mascot"
                items={[
                    {
                        tag: "Bản dự thảo",
                        title: "Gửi phương án thiết kế mascot",
                        desc: "HomeNest Media gửi các phương án mascot để khách hàng đánh giá tạo hình, màu sắc, biểu cảm và phong cách nhân vật. Hai bên xem xét mức độ phù hợp với cá tính thương hiệu.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Tiếp nhận phản hồi từ khách hàng",
                        desc: "HomeNest Media tổng hợp góp ý về các chi tiết cần giữ lại, điều chỉnh hoặc bổ sung. Hai bên thống nhất nội dung chỉnh sửa trước khi hoàn thiện mascot.",
                    },
                    {
                        tag: "Chỉnh sửa thiết kế",
                        title: "Điều chỉnh và hoàn thiện mascot",
                        desc: "Đội ngũ thiết kế cập nhật hình dáng, màu sắc và biểu cảm theo phản hồi đã thống nhất. Việc chỉnh sửa tuân theo phạm vi dịch vụ đã thỏa thuận.",
                    },
                    {
                        tag: "Duyệt thiết kế",
                        title: "Xác nhận thiết kế mascot cuối cùng",
                        desc: "HomeNest Media gửi bản mascot hoàn thiện để khách hàng kiểm tra tạo hình, màu sắc và đặc điểm nhận diện trước khi xác nhận.",
                    },
                    {
                        tag: "Bàn giao file",
                        title: "Bàn giao file thiết kế mascot",
                        desc: "HomeNest Media bàn giao file theo định dạng và danh mục đã thống nhất, phục vụ ứng dụng mascot trong hoạt động Branding, marketing và truyền thông.",
                    },
                ]}
            />

            <FAQSection
                items={[
                    {
                        question: "Mascot có lợi ích gì cho thương hiệu?",
                        answer: "Mascot giúp thương hiệu trở nên thân thiện, dễ nhớ và tạo kết nối cảm xúc với khách hàng. Đồng thời, nó hỗ trợ truyền thông, quảng bá và tăng nhận diện thương hiệu hiệu quả.",
                    },
                    {
                        question: "Doanh nghiệp cần cung cấp gì để thiết kế mascot?",
                        answer: "Thông tin về thương hiệu, đối tượng khách hàng, phong cách mong muốn, màu sắc chủ đạo và ý tưởng (nếu có).",
                    },
                    {
                        question: "Thời gian hoàn thành một mascot là bao lâu?",
                        answer: "Tùy vào độ phức tạp, thời gian hoàn thiện dao động từ 2 – 4 tuần, bao gồm nghiên cứu, thiết kế và chỉnh sửa.",
                    },
                    {
                        question: "Có thể yêu cầu điều chỉnh mascot không?",
                        answer: "Có. Chúng tôi thực hiện chỉnh sửa theo phản hồi của khách hàng trong số lần điều chỉnh quy định.",
                    },
                    {
                        question: "Mascot có thể sử dụng ở đâu?",
                        answer: "Mascot có thể được ứng dụng trên website, mạng xã hội, bao bì sản phẩm, quảng cáo, sự kiện, video animation và nhiều kênh truyền thông khác.",
                    },
                    {
                        question: "Có thể thiết kế mascot động không?",
                        answer: "Có. Ngoài mascot tĩnh, chúng tôi có thể thiết kế bộ sticker động, animation ngắn hoặc các tư thế đa dạng để sử dụng linh hoạt.",
                    },
                    {
                        question: "Doanh nghiệp có thể yêu cầu phong cách thiết kế riêng không?",
                        answer: "Hoàn toàn có thể. Chúng tôi thiết kế mascot theo phong cách phù hợp với thương hiệu, từ đơn giản, vui nhộn đến chuyên nghiệp, sang trọng.",
                    },
                    {
                        question: "File bàn giao bao gồm những định dạng nào?",
                        answer: "Doanh nghiệp sẽ nhận file thiết kế gốc (.AI, .PSD), file PNG/JPG không nền và các định dạng khác theo yêu cầu.",
                    },
                    {
                        question: "Nếu chưa có ý tưởng, đội ngũ thiết kế có hỗ trợ không?",
                        answer: "Có. Chúng tôi sẽ tư vấn, đề xuất ý tưởng sáng tạo dựa trên nghiên cứu thương hiệu và thị trường.",
                    },
                    {
                        question: "Có hỗ trợ triển khai mascot vào truyền thông không?",
                        answer: "Có. Chúng tôi đồng hành cùng doanh nghiệp trong việc ứng dụng mascot vào nhận diện thương hiệu, marketing và quảng bá sản phẩm.",
                    },
                ]}
            />


            <ServiceTestimonials />


        </>
    )
}
