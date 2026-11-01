import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceLogoShowcase, ServiceOverview, ServicePriceTable, ServiceProject, ServiceStrategy, ServiceReview } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";
import styles from "./page.module.css";
import { SwiperImage } from "@/components/ui/Swiper";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Nổi bật tại mọi điểm chạm thương hiệu - Thiết kế Booth quảng cáo"
                description={(
                    <>
                        Thiết kế booth quảng cáo giúp doanh nghiệp xây dựng không gian giới thiệu sản phẩm, quảng bá thương hiệu và tương tác trực tiếp với khách hàng tại sự kiện, triển lãm hoặc điểm bán. <a href="https://homenest.media/" target="_blank" rel="noopener">HomeNest.media</a> định hướng thiết kế theo nhận diện thương hiệu, mục tiêu sử dụng và đặc điểm không gian triển khai.
                    </>
                )}
                ctaText="Nhận tư vấn thiết kế Booth quảng cáo!"
            />

            <ServiceStrategy
                heading="Từ ý tưởng thương hiệu đến không gian trải nghiệm thực tế  "
                title1="Thiết kế booth triển lãm"
                desc1="Thiết kế không gian trưng bày tại hội chợ, triển lãm và sự kiện thương mại, giúp doanh nghiệp giới thiệu thương hiệu và sản phẩm"
                title2="Thiết kế booth quảng bá sản phẩm"
                desc2="Xây dựng khu vực giới thiệu và trải nghiệm sản phẩm, phù hợp với các chiến dịch ra mắt sản phẩm mới hoặc quảng bá thương hiệu."
                title3="Thiết kế booth activation và sampling"
                desc3="Thiết kế booth phục vụ hoạt động tương tác, phát mẫu thử và giới thiệu sản phẩm trực tiếp đến khách hàng tại sự kiện hoặc điểm bán."
                title4="Thiết kế booth sự kiện và bán hàng"
                desc4="Thiết kế không gian phục vụ hoạt động quảng bá, tư vấn và bán hàng, bảo đảm sự phù hợp với nhận diện thương hiệu và mục đích sử dụng."
            />






            <CTASection />




            <ServiceBenefits
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                heading="Lộ trình thiết kế Booth quảng cáo"
                imageAlt="quy trinh thiet ke logo 1"
                items={[
                    {
                        title: "Tiếp nhận yêu cầu và xác định mục tiêu",
                        desc: "HomeNest.media tìm hiểu mục tiêu quảng bá, đối tượng khách hàng, địa điểm tổ chức và nhu cầu sử dụng booth. Đây là cơ sở để định hướng phương án thiết kế phù hợp với thương hiệu và chương trình.",
                    },
                    {
                        title: "Nghiên cứu thương hiệu và khách hàng",
                        desc: "Phân tích đặc điểm thương hiệu, thông điệp truyền thông và nhu cầu của khách tham quan để xác định hướng thiết kế phù hợp, tạo sự khác biệt trong không gian trưng bày.",
                    },
                    {
                        title: "Lên ý tưởng và bố cục booth",
                        desc: "Phát triển ý tưởng thiết kế dựa trên nhận diện thương hiệu, cách bố trí khu vực trưng bày, vị trí giới thiệu sản phẩm và không gian tương tác với khách hàng.",
                    },
                    {
                        title: "Định hướng hình ảnh và vật liệu",
                        desc: "Chất liệu và công nghệ là yếu tố quyết định giúp booth quảng cáo nổi bật và ấn tượng. Lựa chọn chất liệu phù hợp như gỗ, kim loại, acrylic hay vải sẽ tạo nên không gian chuyên nghiệp và chắc chắn, đồng thời tăng tính thẩm mỹ. Lựa chọn màu sắc, hình ảnh, ánh sáng và các yếu tố trực quan phù hợp với ý tưởng thiết kế. Những yêu cầu liên quan đến vật liệu và công nghệ được xác định theo phạm vi dịch vụ đã thống nhất.",
                    },
                    {
                        title: "Hoàn thiện phương án thiết kế",
                        desc: "Rà soát bố cục, kích thước, hình ảnh và các chi tiết thiết kế để bảo đảm tính nhất quán với nhận diện thương hiệu và điều kiện không gian dự kiến.",
                    },
                    {
                        title: "Điều chỉnh và bàn giao thiết kế",
                        desc: "Tiếp nhận phản hồi, hoàn thiện phương án theo nội dung đã thống nhất và bàn giao tệp thiết kế theo định dạng, phạm vi công việc đã thỏa thuận.",
                    },
                ]}
                ctaText="Nhận tự vấn thiết kế Booth quảng cáo miến phí!"
            />

            <ServiceHowWeWork
                heading="Doanh nghiệp đồng hành trong từng bước thiết kế Booth quảng cáo"
                items={[
                    {
                        tag: "Tiếp nhận yêu cầu",
                        title: "Tiếp nhận yêu cầu thiết kế",
                        desc: "HomeNest.media tìm hiểu mục tiêu quảng bá, đặc điểm thương hiệu, địa điểm tổ chức và nhu cầu sử dụng booth. Hai bên thống nhất phạm vi thiết kế và các yêu cầu liên quan trước khi triển khai.",
                    },
                    {
                        tag: "Lên ý tưởng",
                        title: "Xây dựng phương án thiết kế",
                        desc: "Đội ngũ đề xuất ý tưởng, bố cục không gian, màu sắc và hình ảnh phù hợp với nhận diện thương hiệu. Phương án được xây dựng theo thông điệp truyền thông và mục đích sử dụng booth.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Trình bày và tiếp nhận phản hồi",
                        desc: "HomeNest.media gửi phương án để doanh nghiệp đánh giá hình thức, bố cục và khả năng ứng dụng tại địa điểm tổ chức. Các góp ý được tổng hợp để thống nhất nội dung cần điều chỉnh.",
                    },
                    {
                        tag: "Hoàn thiện thiết kế",
                        title: "Hiệu chỉnh và hoàn thiện thiết kế",
                        desc: "Đội ngũ cập nhật bố cục, màu sắc, hình ảnh và kích thước theo phản hồi đã thống nhất. Việc chỉnh sửa được thực hiện theo phạm vi công việc đã thỏa thuận.",
                    },
                    {
                        tag: "Bàn giao thiết kế",
                        title: "Xác nhận và bàn giao thiết kế",
                        desc: "Sau khi doanh nghiệp duyệt phương án cuối cùng, HomeNest.media bàn giao hồ sơ thiết kế theo định dạng đã thống nhất. Các hạng mục sản xuất, thi công và lắp đặt được xác định riêng theo phạm vi dịch vụ.",
                    },
                ]}
            />

            <FAQSection
                items={[
                    {
                        question: "Booth quảng cáo là gì ?",
                        answer: "Booth quảng cáo là một không gian trưng bày được thiết kế đặc biệt tại các sự kiện, hội chợ, triển lãm, hay các hoạt động quảng bá khác, nhằm giới thiệu sản phẩm, dịch vụ và tăng cường nhận diện thương hiệu. Booth quảng cáo thường được trang trí bắt mắt, với các yếu tố như bảng hiệu, vật phẩm quảng cáo, màn hình kỹ thuật số, và khu vực tương tác, giúp thu hút sự chú ý của khách tham quan và tạo cơ hội giao tiếp trực tiếp giữa thương hiệu và khách hàng.",
                    },
                    {
                        question: "Làm thế nào để thiết kế booth quảng cáo hiệu quả ?",
                        answer: (
                            <>
                                <p>Để thiết kế booth quảng cáo hiệu quả, hãy tập trung vào những yếu tố sau:</p>
                                <ol>
                                    <li><strong>Xác định mục tiêu rõ ràng</strong>: Biết bạn muốn đạt được gì, như tăng nhận diện thương hiệu hay giới thiệu sản phẩm mới.</li>
                                    <li><strong>Tạo ấn tượng mạnh</strong>: Sử dụng màu sắc nổi bật, logo và thông điệp rõ ràng để thu hút sự chú ý ngay từ đầu.</li>
                                    <li><strong>Bố trí tối ưu</strong>: Sắp xếp không gian mở, dễ tiếp cận và thuận tiện cho khách tham quan.</li>
                                    <li><strong>Sử dụng công nghệ và ánh sáng</strong>: Màn hình LED, video và ánh sáng tạo điểm nhấn, nâng cao trải nghiệm.</li>
                                    <li><strong>Khuyến khích tương tác</strong>: Tạo cơ hội cho khách hàng thử nghiệm sản phẩm hoặc tham gia hoạt động thú vị.</li>
                                    <li><strong>Chọn vật liệu phù hợp</strong>: Lựa chọn chất liệu dễ thi công và đồng bộ với thương hiệu.</li>
                                </ol>
                                <p>Một booth quảng cáo hiệu quả không chỉ thu hút mà còn tạo ấn tượng mạnh mẽ và kết nối trực tiếp với khách hàng.</p>
                            </>
                        ),
                    },
                    {
                        question: "Booth quảng cáo có thể sử dụng những vật liệu gì ?",
                        answer: (
                            <>
                                <p>Booth quảng cáo có thể sử dụng các vật liệu như:</p>
                                <ul>
                                    <li><strong>Vải và bạt</strong>: Dễ dàng in ấn và vận chuyển.</li>
                                    <li><strong>Gỗ và kim loại</strong>: Tạo sự chắc chắn, sang trọng.</li>
                                    <li><strong>Acrylic và PVC</strong>: Dễ dàng tạo hình và ánh sáng nổi bật.</li>
                                    <li><strong>Màn hình LED và màn hình cảm ứng</strong>: Thể hiện nội dung sống động, hiện đại.</li>
                                    <li><strong>Thép không gỉ và kính</strong>: Tạo sự tinh tế, sang trọng.</li>
                                </ul>
                                <p>Lựa chọn vật liệu phù hợp giúp booth nổi bật, thu hút khách hàng và phù hợp với ngân sách và mục tiêu quảng bá.</p>
                            </>
                        ),
                    },
                    {
                        question: "Lợi ích của việc sử dụng booth quảng cáo ?",
                        answer: (
                            <>
                                <p>Việc sử dụng booth quảng cáo mang lại nhiều lợi ích quan trọng, bao gồm:</p>
                                <ul>
                                    <li><strong>Tăng nhận diện thương hiệu</strong>: Booth giúp thương hiệu nổi bật, dễ dàng ghi dấu ấn trong mắt khách hàng.</li>
                                    <li><strong>Tạo cơ hội tương tác trực tiếp</strong>: Là cầu nối để thương hiệu giao tiếp và xây dựng mối quan hệ với khách hàng.</li>
                                    <li><strong>Khả năng trải nghiệm sản phẩm</strong>: Khách hàng có thể trực tiếp trải nghiệm sản phẩm/dịch vụ, từ đó nâng cao sự tin tưởng và quyết định mua hàng.</li>
                                    <li><strong>Tăng tỷ lệ chuyển đổi</strong>: Booth quảng cáo giúp chuyển đổi quan tâm thành hành động, thúc đẩy doanh thu.</li>
                                    <li><strong>Tạo ấn tượng lâu dài</strong>: Một booth thiết kế ấn tượng sẽ khiến khách hàng nhớ đến thương hiệu lâu dài.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        question: "Chi phí thiết kế và thi công booth quảng cáo là bao nhiêu ?",
                        answer: "Chi phí thiết kế và thi công booth quảng cáo dao động tùy theo kích thước, thiết kế, vật liệu và công nghệ sử dụng. Thông thường, chi phí có thể từ vài triệu đến hàng chục triệu đồng. Các yếu tố như độ phức tạp của thiết kế, yêu cầu về vật liệu (gỗ, kim loại, màn hình LED) và thời gian thi công cũng ảnh hưởng trực tiếp đến giá thành.",
                    },
                    {
                        question: "Booth quảng cáo có thể tái sử dụng không ?",
                        answer: "Có, booth quảng cáo có thể tái sử dụng nếu được thiết kế thông minh và bền vững. Với cấu trúc modul và vật liệu linh hoạt, booth có thể dễ dàng tháo lắp và tái sử dụng cho nhiều sự kiện khác nhau, giúp tiết kiệm chi phí và tăng hiệu quả quảng bá.",
                    },
                    {
                        question: "Booth có cần chuẩn bị nhân sự không ?",
                        answer: "Có, booth quảng cáo cần có nhân sự để giao tiếp, giới thiệu sản phẩm, dịch vụ và tương tác trực tiếp với khách tham quan. Nhân viên booth đóng vai trò quan trọng trong việc tạo ấn tượng, giải đáp thắc mắc và thu thập thông tin khách hàng, giúp tối ưu hiệu quả quảng bá và tạo kết nối sâu sắc với người tham gia.",
                    },
                    {
                        question: "Thời gian thiết kế và thi công booth quảng cáo là bao lâu ?",
                        answer: "Thời gian thiết kế và thi công booth quảng cáo thường dao động từ 1 đến 3 tuần, tùy vào độ phức tạp của thiết kế và yêu cầu cụ thể. Cần đảm bảo đủ thời gian cho việc lên ý tưởng, hoàn thiện thiết kế, sản xuất và lắp đặt để booth hoàn thiện và sẵn sàng trước sự kiện.",
                    },
                ]}
            />

            <ServiceReview />
        </>
    )
}
