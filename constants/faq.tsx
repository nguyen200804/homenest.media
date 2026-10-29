import type { FAQItem } from "@/types/faq.types";

/**
 * Danh sách câu hỏi thường gặp mặc định (FAQ).
 */
export const DEFAULT_FAQS: FAQItem[] = [
    {
        question: "HomeNest.media cung cấp những dịch vụ gì?",
        answer: (
            <>
                <p>HomeNest.media cung cấp các giải pháp toàn diện trong lĩnh vực marketing và truyền thông, bao gồm:</p>
                <ul>
                    <li><strong>Digital Marketing</strong>: SEO, quảng cáo online (Google Ads, Facebook Ads), Social Media Marketing.</li>
                    <li><strong>Branding</strong>: Xây dựng thương hiệu, thiết kế logo, bộ nhận diện thương hiệu.</li>
                    <li><strong>Sáng tạo nội dung</strong>: Sản xuất video, hình ảnh, bài viết chất lượng cao.</li>
                    <li><strong>Tổ chức sự kiện</strong>: Event, booth triển lãm, hội nghị, và các hoạt động quảng cáo ngoài trời.</li>
                </ul>
                <p>Chúng tôi cam kết mang đến các giải pháp tích hợp, giúp doanh nghiệp phát triển bền vững.</p>
            </>
        ),
    },
    {
        question: "Tại sao nên chọn HomeNest.media thay vì các công ty khác?",
        answer: (
            <>
                <p>HomeNest.media không chỉ cung cấp dịch vụ mà còn là đối tác đồng hành cùng sự phát triển của doanh nghiệp bạn. Những điểm khác biệt của chúng tôi bao gồm:</p>
                <ul>
                    <li><strong>Giải pháp toàn diện</strong>: Một điểm dừng duy nhất cho mọi nhu cầu marketing và truyền thông.</li>
                    <li><strong>Đội ngũ chuyên gia giàu kinh nghiệm</strong>: Chúng tôi hiểu rõ thị trường và luôn cập nhật xu hướng mới nhất.</li>
                    <li><strong>Cam kết hiệu quả đo lường được</strong>: Mỗi chiến dịch đều được tối ưu hóa để mang lại kết quả cụ thể.</li>
                    <li><strong>Hỗ trợ tận tâm</strong>: Đồng hành cùng bạn từ giai đoạn lên kế hoạch đến triển khai và tối ưu hóa.</li>
                </ul>
            </>
        ),
    },
    {
        question: "Chi phí dịch vụ tại HomeNest.media như thế nào?",
        answer:
            "Chi phí dịch vụ tại HomeNest.media được thiết kế linh hoạt dựa trên quy mô và nhu cầu của từng doanh nghiệp. Chúng tôi cung cấp các gói dịch vụ phù hợp với ngân sách khác nhau, từ SMEs (doanh nghiệp vừa và nhỏ) đến các tập đoàn lớn. Để nhận báo giá chi tiết, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại.",
    },
    {
        question: "Làm thế nào để bắt đầu hợp tác với HomeNest.media?",
        answer: (
            <>
                <p>Rất đơn giản! Bạn chỉ cần thực hiện các bước sau:</p>
                <ol>
                    <li><strong>Liên hệ với chúng tôi</strong>: Gửi yêu cầu qua form liên hệ trên website hoặc gọi trực tiếp.</li>
                    <li><strong>Tư vấn miễn phí</strong>: Đội ngũ chuyên gia của chúng tôi sẽ lắng nghe nhu cầu và tư vấn giải pháp phù hợp.</li>
                    <li><strong>Lên kế hoạch</strong>: Chúng tôi sẽ xây dựng chiến lược chi tiết dựa trên mục tiêu của bạn.</li>
                    <li><strong>Triển khai và tối ưu hóa</strong>: Thực hiện chiến dịch và liên tục đo lường, điều chỉnh để đạt hiệu quả cao nhất.</li>
                </ol>
            </>
        ),
    },
    {
        question: "HomeNest.media có hỗ trợ doanh nghiệp nhỏ không?",
        answer:
            "Có! HomeNest.media đặc biệt chú trọng đến các doanh nghiệp vừa và nhỏ (SMEs). Chúng tôi hiểu rằng SMEs thường có ngân sách hạn chế nhưng vẫn cần các giải pháp hiệu quả. Vì vậy, chúng tôi cung cấp các gói dịch vụ linh hoạt, cá nhân hóa để đảm bảo bạn nhận được giá trị tốt nhất với chi phí hợp lý.",
    },
    {
        question: "Thời gian triển khai một chiến dịch tại HomeNest.media là bao lâu?",
        answer: (
            <>
                <p>Thời gian triển khai phụ thuộc vào loại dịch vụ và quy mô chiến dịch. Ví dụ:</p>
                <ul>
                    <li><strong>Digital Marketing</strong>: Chiến dịch quảng cáo có thể bắt đầu trong vòng 1-2 tuần sau khi ký hợp đồng.</li>
                    <li><strong>Thiết kế logo/branding</strong>: Thường mất khoảng 1-4 tuần để hoàn thiện.</li>
                    <li><strong>Tổ chức sự kiện</strong>: Tùy thuộc vào quy mô, thời gian chuẩn bị có thể từ vài tuần đến vài tháng.</li>
                </ul>
                <p>Chúng tôi luôn cố gắng tối ưu hóa thời gian để đáp ứng nhu cầu của khách hàng.</p>
            </>
        ),
    },
    {
        question: "HomeNest.media có báo cáo hiệu quả chiến dịch minh bạch không?",
        answer: (
            <>
                <p>Chúng tôi cung cấp báo cáo chi tiết và minh bạch về hiệu quả chiến dịch. Tùy thuộc vào loại dịch vụ, bạn có thể theo dõi:</p>
                <ul>
                    <li>Số liệu traffic, conversion rate (tỷ lệ chuyển đổi) trong Digital Marketing.</li>
                    <li>Phản hồi từ khách hàng trong các chiến dịch branding và event.</li>
                    <li>Báo cáo hàng tuần/tháng để bạn nắm rõ tiến độ và hiệu quả.</li>
                </ul>
                <p>Chúng tôi luôn sẵn sàng giải thích và tư vấn cách tối ưu hóa chiến dịch.</p>
            </>
        ),
    },
    {
        question: "HomeNest.media có làm việc với khách hàng quốc tế không?",
        answer:
            "Có! Chúng tôi tự hào là đối tác của nhiều doanh nghiệp quốc tế. Với đội ngũ chuyên gia am hiểu thị trường toàn cầu và khả năng sử dụng đa ngôn ngữ, chúng tôi có thể hỗ trợ khách hàng từ mọi quốc gia. Liên hệ với chúng tôi để biết thêm chi tiết!",
    },
    {
        question: "Làm thế nào để tôi liên hệ với HomeNest.media?",
        answer: (
            <>
                <p>Bạn có thể liên hệ với chúng tôi qua các kênh sau:</p>
                <ul>
                    <li>
                        <strong>Website</strong>:{" "}
                        <a href="https://HomeNest.media/" target="_blank" rel="noopener noreferrer">
                            https://HomeNest.media
                        </a>
                    </li>
                    <li>
                        <strong>Email</strong>:{" "}
                        <a href="mailto:info@HomeNest.media">info@HomeNest.media</a>
                    </li>
                    <li>
                        <strong>Hotline</strong>:{" "}
                        <a href="tel:0901689499">0901 689 499</a>
                    </li>
                    <li>
                        <strong>Địa chỉ văn phòng</strong>: 28 Mai Chí Thọ, An Phú, TP. Thủ Đức, Hồ Chí Minh, Việt Nam
                    </li>
                </ul>
                <p>Chúng tôi luôn sẵn sàng lắng nghe và tư vấn miễn phí cho bạn!</p>
            </>
        ),
    },
    {
        question: "HomeNest.media có cung cấp dịch vụ sáng tạo video không?",
        answer: (
            <>
                <p>Có! Chúng tôi cung cấp dịch vụ sản xuất video chuyên nghiệp, bao gồm:</p>
                <ul>
                    <li>Video quảng cáo (TVC).</li>
                    <li>Video giới thiệu sản phẩm/dịch vụ.</li>
                    <li>Video viral và content video cho social media.</li>
                    <li>Animation và motion graphics.</li>
                </ul>
                <p>Mỗi video đều được thiết kế sáng tạo và tối ưu hóa để thu hút khách hàng tiềm năng.</p>
            </>
        ),
    },
    {
        question: "HomeNest.media có hỗ trợ xây dựng chiến lược marketing dài hạn không?",
        answer:
            "Có! Chúng tôi không chỉ cung cấp dịch vụ ngắn hạn mà còn đồng hành cùng doanh nghiệp trong chiến lược marketing dài hạn. Từ việc phân tích thị trường, xác định mục tiêu, đến triển khai và tối ưu hóa, chúng tôi luôn đảm bảo rằng doanh nghiệp của bạn phát triển bền vững.",
    },
    {
        question: "Làm thế nào để tôi biết chiến dịch của mình thành công?",
        answer: (
            <>
                <p>Chúng tôi sử dụng các công cụ phân tích hiện đại để đo lường hiệu quả chiến dịch, bao gồm:</p>
                <ul>
                    <li>Traffic website, tỷ lệ chuyển đổi (conversion rate).</li>
                    <li>Số lượt tiếp cận (reach) và tương tác (engagement) trên social media.</li>
                    <li>ROI (Return on Investment) – Tỷ lệ lợi nhuận trên chi phí đầu tư.</li>
                </ul>
                <p>Báo cáo chi tiết sẽ được gửi định kỳ để bạn nắm rõ kết quả.</p>
            </>
        ),
    },
    {
        question: "HomeNest.media có cung cấp dịch vụ tư vấn miễn phí không?",
        answer:
            "Có! Chúng tôi cung cấp buổi tư vấn miễn phí để hiểu rõ nhu cầu của bạn và đề xuất giải pháp phù hợp. Hãy liên hệ ngay với chúng tôi để đặt lịch hẹn!",
    },
    {
        question: "HomeNest.media có cam kết về chất lượng dịch vụ không?",
        answer:
            "Chúng tôi cam kết mang đến chất lượng dịch vụ tốt nhất cho khách hàng. Nếu bạn không hài lòng với bất kỳ khía cạnh nào, chúng tôi sẵn sàng lắng nghe phản hồi và điều chỉnh để đảm bảo bạn nhận được giá trị tối đa.",
    },
];
