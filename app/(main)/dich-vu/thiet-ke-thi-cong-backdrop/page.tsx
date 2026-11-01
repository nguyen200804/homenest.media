import { CTASection, FAQSection } from "@/components/sections";
import { ServiceBenefits, ServiceExperience, ServiceHero, ServiceHowWeWork, ServiceLogoShowcase, ServiceOverview, ServicePriceTable, ServiceProject, ServiceStrategy, ServiceReview } from "@/components/sections/services";
import { TextGradient } from "@/components/ui/Text";
import styles from "./page.module.css";
import { SwiperImage } from "@/components/ui/Swiper";



export default function Page() {
    return (
        <>
            <ServiceHero
                heading="Thiết kế Backdrop chuyên nghiệp, tạo điểm nhấn cho sự kiện"
                description={(
                    <>
                        <p>
                            <TextGradient text="Backdrop" /> không chỉ là phông nền sự kiện mà còn giúp <TextGradient text="truyền tải thông điệp và thể hiện hình ảnh thương hiệu" />. Thiết kế phù hợp giúp không gian chương trình trở nên đồng bộ, làm nổi bật chủ đề và tạo điểm nhấn trực quan.
                        </p>

                        <p><a href="https://homenest.media/" target="_blank" rel="noopener">HomeNest.media</a> hỗ trợ doanh nghiệp xây dựng phương án thiết kế backdrop theo nhận diện thương hiệu, nội dung chương trình và mục đích sử dụng.</p>

                    </>
                )}
                ctaText="Nhận tư vấn thiết kế Backdrop miễn phí"
            />

            <ServiceStrategy
                heading="Định hình không gian sự kiện bằng dấu ấn thương hiệu"
                title1="Thiết kế Backdrop sự kiện"
                desc1="Thiết kế backdrop cho hội nghị, hội thảo, lễ khai trương, lễ kỷ niệm và các chương trình doanh nghiệp."
                title2="Thiết kế Backdrop ra mắt sản phẩm"
                desc2="Xây dựng bố cục hình ảnh, thông điệp và các yếu tố nhận diện phục vụ sự kiện giới thiệu sản phẩm, dịch vụ mới."
                title3="Thiết kế Backdrop triển lãm và quảng bá thương hiệu"
                desc3="Thiết kế phông nền phục vụ hoạt động triển lãm, giới thiệu thương hiệu và chương trình quảng bá tại các địa điểm tổ chức."
                title4="Thiết kế Backdrop chụp ảnh"
                desc4="Thiết kế không gian chụp ảnh tại sự kiện, phù hợp với chủ đề chương trình, hình ảnh thương hiệu và nhu cầu truyền thông."
            />






            <CTASection />




            <ServiceBenefits
                imageSrc="/images/lo-trinh-thiet-ke-logo-thuong-hieu.webp"
                heading="Lộ trình thiết kế Backdrop"
                imageAlt="quy trinh thiet ke logo 1"
                items={[
                    {
                        title: "Tiếp nhận yêu cầu và xác định mục tiêu",
                        desc: "HomeNest.media tìm hiểu mục đích sử dụng backdrop, thông điệp truyền thông, đối tượng tham dự và địa điểm tổ chức. Đây là cơ sở để định hướng thiết kế phù hợp với sự kiện và thương hiệu.",
                    },
                    {
                        title: "Nghiên cứu thương hiệu và khách hàng",
                        desc: "Phân tích nhận diện thương hiệu, nội dung truyền thông và đặc điểm người xem để lựa chọn phong cách thiết kế phù hợp, giúp backdrop truyền tải thông điệp rõ ràng và dễ nhận diện.",
                    },
                    {
                        title: "Lên ý tưởng và bố cục backdrop",
                        desc: "Phát triển ý tưởng thiết kế dựa trên chủ đề sự kiện, logo, hình ảnh và thông điệp chính. Bố cục được sắp xếp nhằm đảm bảo tính thẩm mỹ, khả năng hiển thị và sự phù hợp với không gian sử dụng.",
                    },
                    {
                        title: "Định hướng hình ảnh và màu sắc",
                        desc: "Lựa chọn màu sắc, kiểu chữ, hình ảnh và các yếu tố đồ họa phù hợp với bộ nhận diện thương hiệu. Kích thước và tỷ lệ thiết kế được cân nhắc theo vị trí lắp đặt và mục đích sử dụng backdrop.",
                    },
                    {
                        title: "Hoàn thiện phương án thiết kế",
                        desc: "Rà soát nội dung, bố cục, hình ảnh, logo và thông số kích thước để đảm bảo tính nhất quán, dễ đọc và phù hợp với yêu cầu triển khai thực tế.",
                    },
                    {
                        title: "Điều chỉnh và bàn giao thiết kế",
                        desc: "HomeNest.media tiếp nhận phản hồi, điều chỉnh phương án theo nội dung đã thống nhất và bàn giao file thiết kế theo định dạng, thông số kỹ thuật thuộc phạm vi công việc đã thỏa thuận.",
                    },
                ]}
                ctaText="Nhận tư vấn thiết kế Backdrop miễn phí!"
            />

            <ServiceHowWeWork
                heading="Doanh nghiệp đồng hành trong từng bước thiết kế Backdrop"
                items={[
                    {
                        tag: "Tiếp nhận yêu cầu",
                        title: "Tiếp nhận yêu cầu thiết kế",
                        desc: "HomeNest.media tìm hiểu mục đích sử dụng backdrop, đặc điểm thương hiệu, thông điệp và địa điểm tổ chức. Thông tin này giúp xác định định hướng thiết kế phù hợp với nhu cầu doanh nghiệp.",
                    },
                    {
                        tag: "Lên ý tưởng",
                        title: "Xây dựng phương án thiết kế",
                        desc: "Đội ngũ đề xuất ý tưởng, bố cục, màu sắc và hình ảnh phù hợp với nhận diện thương hiệu, chủ đề sự kiện và kích thước backdrop dự kiến.",
                    },
                    {
                        tag: "Tiếp nhận phản hồi",
                        title: "Trình bày và tiếp nhận phản hồi",
                        desc: "HomeNest.media gửi bản thiết kế để doanh nghiệp đánh giá bố cục, hình ảnh và nội dung. Các góp ý được tổng hợp để thống nhất những hạng mục cần điều chỉnh.",
                    },
                    {
                        tag: "Hoàn thiện thiết kế",
                        title: "Hiệu chỉnh và hoàn thiện thiết kế",
                        desc: "Đội ngũ điều chỉnh màu sắc, hình ảnh, kiểu chữ và bố cục theo phản hồi đã thống nhất, đảm bảo phù hợp với nhận diện thương hiệu và yêu cầu thực tế.",
                    },
                    {
                        tag: "Bàn giao thiết kế",
                        title: "Xác nhận và bàn giao thiết kế",
                        desc: "Sau khi doanh nghiệp duyệt phương án cuối cùng, HomeNest.media bàn giao file theo định dạng và thông số đã thống nhất. Hạng mục in ấn và thi công lắp đặt được thực hiện theo phạm vi dịch vụ đã thỏa thuận.",
                    },
                ]}
            />

            <FAQSection
                items={[
                    {
                        question: "Backdop là gì ?",
                        answer: "Backdrop là một tấm màn hoặc bảng lớn được sử dụng trong các sự kiện, triển lãm, buổi chụp hình, hoặc các hoạt động quảng bá để tạo không gian trang trí và làm nền cho các hoạt động chính. Backdrop thường có thiết kế đặc biệt, mang thông điệp thương hiệu, logo, tên sự kiện, hoặc các yếu tố hình ảnh liên quan đến chủ đề của sự kiện. Nó không chỉ giúp tạo điểm nhấn, thu hút sự chú ý mà còn giúp tăng cường khả năng nhận diện thương hiệu và truyền tải thông điệp một cách rõ ràng, ấn tượng.",
                    },
                    {
                        question: "Backdrop mang lại lợi ích gì ?",
                        answer: (
                            <>
                                <p><strong>Lợi Ích Của Backdrop:</strong></p>
                                <ul>
                                    <li><strong>Tạo Ấn Tượng Mạnh Mẽ:</strong> Backdrop giúp tạo không gian nổi bật và thu hút sự chú ý ngay từ cái nhìn đầu tiên, làm tăng ấn tượng về thương hiệu hoặc sự kiện.</li>
                                    <li><strong>Tăng Cường Nhận Diện Thương Hiệu:</strong> Với thiết kế phù hợp, backdrop giúp quảng bá logo, thông điệp và hình ảnh thương hiệu, giúp khách tham quan dễ dàng nhận diện và ghi nhớ.</li>
                                    <li><strong>Chuyên Nghiệp Hóa Sự Kiện:</strong> Một backdrop thiết kế đẹp và tinh tế làm tăng sự chuyên nghiệp cho sự kiện, tạo cảm giác tổ chức chu đáo và đẳng cấp.</li>
                                    <li><strong>Tạo Không Gian Ảo Đẹp:</strong> Backdrop giúp tạo không gian phù hợp cho các hoạt động sự kiện như chụp hình, phỏng vấn hoặc thảo luận, tạo ra những bức ảnh đẹp và ấn tượng.</li>
                                    <li><strong>Tối Ưu Quảng Bá:</strong> Nó đóng vai trò như một công cụ quảng bá mạnh mẽ, giúp truyền tải thông điệp một cách trực quan và dễ tiếp cận.</li>
                                    <li><strong>Tăng Cường Tương Tác:</strong> Một backdrop đẹp và sáng tạo có thể khuyến khích khách tham quan chụp ảnh, tạo cơ hội quảng bá thương hiệu qua các nền tảng mạng xã hội.</li>
                                    <li><strong>Linh Hoạt và Tái Sử Dụng:</strong> Backdrop có thể được thiết kế để dễ dàng tái sử dụng cho nhiều sự kiện khác nhau, giúp tiết kiệm chi phí và thời gian tổ chức.</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        question: "Thiết kế backdrop cần bao lâu để hoàn thành ?",
                        answer: "Thời gian thiết kế backdrop thường dao động từ 5 đến 7 ngày làm việc, tùy thuộc vào độ phức tạp của yêu cầu và kích thước của backdrop. Nếu yêu cầu chỉnh sửa hoặc thay đổi nhiều, thời gian hoàn thành có thể kéo dài hơn. Để đảm bảo tiến độ, bạn nên cung cấp đầy đủ thông tin và yêu cầu ngay từ đầu, và hợp tác chặt chẽ trong quá trình phê duyệt thiết kế.",
                    },
                    {
                        question: "Chi phí thiết kế backdrop là bao nhiêu ?",
                        answer: (
                            <>
                                <p>Chi phí thiết kế backdrop phụ thuộc vào nhiều yếu tố, bao gồm:</p>
                                <ul>
                                    <li><strong>Kích thước của backdrop</strong>: Backdrop lớn hơn sẽ tốn nhiều chi phí hơn do yêu cầu vật liệu và công sức thiết kế.</li>
                                    <li><strong>Chất liệu sử dụng</strong>: Các chất liệu như vải, bạt, hoặc các vật liệu cao cấp sẽ có chi phí khác nhau.</li>
                                    <li><strong>Độ phức tạp của thiết kế</strong>: Nếu thiết kế yêu cầu nhiều chi tiết, hiệu ứng đặc biệt, hoặc tích hợp công nghệ (như LED, màn hình kỹ thuật số), chi phí sẽ cao hơn.</li>
                                    <li><strong>Thời gian hoàn thành</strong>: Nếu yêu cầu gấp, chi phí có thể tăng do yêu cầu thi công nhanh chóng.</li>
                                </ul>
                                <p>Thông thường, chi phí thiết kế backdrop có thể dao động từ vài triệu đến vài chục triệu đồng, tùy thuộc vào yêu cầu cụ thể. Để có báo giá chính xác, bạn nên liên hệ trực tiếp với nhà cung cấp dịch vụ và cung cấp thông tin chi tiết về sự kiện và yêu cầu thiết kế.</p>
                            </>
                        ),
                    },
                    {
                        question: "Có thể tái sử dụng backdrop không ?",
                        answer: "Có, backdrop hoàn toàn có thể tái sử dụng nếu được thiết kế và thi công với chất liệu bền và bảo quản tốt. Nếu backdrop được làm từ vật liệu như vải, bạt hoặc nhựa in, bạn có thể sử dụng lại cho nhiều sự kiện khác nhau, miễn là thiết kế vẫn phù hợp với các sự kiện tiếp theo. Để đảm bảo độ bền và tính thẩm mỹ, bạn nên bảo quản backdrop cẩn thận, tránh bị hư hỏng trong quá trình vận chuyển và lưu trữ.",
                    },
                    {
                        question: "Chất liệu nào thường được sử dụng để thiết kế backdrop ?",
                        answer: (
                            <>
                                <p>Các chất liệu thường được sử dụng để thiết kế backdrop bao gồm:</p>
                                <ul>
                                    <li><strong>Vải</strong>: Vải là chất liệu phổ biến vì dễ in ấn, bền và tạo cảm giác sang trọng. Vải thường được dùng cho các sự kiện, triển lãm, và chụp ảnh. Các loại vải như vải polyester hoặc vải lụa được ưa chuộng.</li>
                                    <li><strong>Bạt</strong>: Bạt là chất liệu bền, chịu được điều kiện ngoài trời và có giá thành hợp lý. Nó được sử dụng phổ biến cho các sự kiện ngoài trời hoặc triển lãm dài hạn.</li>
                                    <li><strong>PVC hoặc Nhựa</strong>: Đây là chất liệu cứng, bền và có thể in trực tiếp với chất lượng cao. Nó thích hợp cho các backdrop cần độ cứng và tính ổn định lâu dài.</li>
                                    <li><strong>Vật liệu in UV</strong>: Đây là loại vật liệu được in bằng công nghệ in UV, mang lại hình ảnh sắc nét và bền màu, rất phù hợp cho backdrop trong các sự kiện lớn.</li>
                                    <li><strong>Mica hoặc Acrylic</strong>: Sử dụng cho các backdrop có thiết kế hiện đại và sang trọng, có thể kết hợp với ánh sáng LED để tạo hiệu ứng đẹp mắt.</li>
                                    <li><strong>Foam Board</strong>: Đây là loại vật liệu nhẹ, dễ dàng gia công và có chi phí phải chăng, thích hợp cho các sự kiện nhỏ hoặc cần backdrop gọn nhẹ.</li>
                                </ul>
                                <p>Mỗi loại vật liệu sẽ có ưu điểm riêng và được lựa chọn dựa trên yêu cầu cụ thể về tính thẩm mỹ, độ bền và ngân sách của sự kiện.</p>
                            </>
                        ),
                    },
                    {
                        question: "Có thể thay đổi thiết kế backdrop sau khi đã phê duyệt không ?",
                        answer: (
                            <>
                                <p>Có thể thay đổi thiết kế backdrop sau khi đã phê duyệt, nhưng điều này sẽ phụ thuộc vào mức độ thay đổi và thời gian còn lại trước sự kiện. Những thay đổi nhỏ, như chỉnh sửa màu sắc, phông chữ hoặc thêm bớt chi tiết, có thể thực hiện nhanh chóng mà không làm ảnh hưởng quá nhiều đến tiến độ.</p>
                                <p>Tuy nhiên, nếu thay đổi lớn, ví dụ như thay đổi hoàn toàn bố cục thiết kế hoặc nội dung, điều này có thể yêu cầu thêm thời gian và chi phí. Để tránh trường hợp này, bạn nên làm rõ yêu cầu ngay từ đầu và hợp tác chặt chẽ trong quá trình phê duyệt thiết kế ban đầu.</p>
                            </>
                        ),
                    },
                    {
                        question: "Backdrop có thể sử dụng công nghệ gì ?",
                        answer: (
                            <>
                                <p>Backdrop có thể tích hợp nhiều công nghệ hiện đại để tăng tính tương tác và thu hút sự chú ý, bao gồm:</p>
                                <ul>
                                    <li><strong>Ánh Sáng LED</strong>: Sử dụng ánh sáng LED để tạo hiệu ứng bắt mắt, làm nổi bật logo, thông điệp hoặc tạo không gian ấn tượng cho backdrop, đặc biệt là trong các sự kiện tối hoặc trong nhà.</li>
                                    <li><strong>Màn Hình Kỹ Thuật Số (Digital Screens)</strong>: Lắp đặt màn hình LED hoặc LCD để hiển thị video, hình ảnh động, hoặc thông tin trực tiếp, giúp tăng khả năng tương tác và làm backdrop thêm sống động.</li>
                                    <li><strong>In UV</strong>: Công nghệ in UV giúp tạo hình ảnh sắc nét và bền màu, có thể in trên nhiều vật liệu như bạt, acrylic hoặc PVC, mang lại chất lượng hình ảnh cao cho backdrop.</li>
                                    <li><strong>Hiệu Ứng 3D</strong>: Sử dụng các kỹ thuật tạo hình 3D trên backdrop, kết hợp với ánh sáng để tạo chiều sâu và các hiệu ứng thị giác đặc biệt, làm backdrop trở nên nổi bật và độc đáo.</li>
                                    <li><strong>Tương Tác với Khách Tham Quan</strong>: Các backdrop tích hợp cảm biến hoặc công nghệ nhận diện khuôn mặt có thể tương tác với khách tham quan, hiển thị hình ảnh, video hoặc thông tin liên quan khi khách bước đến gần.</li>
                                    <li><strong>Mặt Dựng Màn Hình Cảm Ứng</strong>: Một số backdrop có thể được trang bị màn hình cảm ứng, cho phép khách tham quan tương tác trực tiếp với nội dung, xem thông tin chi tiết về sản phẩm, dịch vụ hoặc sự kiện.</li>
                                </ul>
                                <p>Tích hợp công nghệ vào backdrop không chỉ giúp tăng tính hấp dẫn mà còn tạo trải nghiệm độc đáo và nâng cao hiệu quả quảng bá cho thương hiệu.</p>
                            </>
                        ),
                    },
                    {
                        question: "Làm sao để chọn thiết kế backdrop phù hợp với sự kiện ?",
                        answer: (
                            <>
                                <p>Để chọn thiết kế backdrop phù hợp với sự kiện, bạn có thể dựa trên các yếu tố sau:</p>
                                <ul>
                                    <li><strong>Mục Tiêu Sự Kiện</strong>: Xác định mục tiêu của sự kiện (ra mắt sản phẩm, triển lãm, hội thảo, tiệc công ty…) để chọn thiết kế phù hợp, truyền tải thông điệp hiệu quả.</li>
                                    <li><strong>Phong Cách và Chủ Đề</strong>: Lựa chọn thiết kế phù hợp với phong cách và chủ đề sự kiện. Một sự kiện sang trọng, lịch sự sẽ cần backdrop tinh tế, trong khi sự kiện sáng tạo, trẻ trung có thể chọn thiết kế phá cách và năng động.</li>
                                    <li><strong>Không Gian và Kích Thước</strong>: Đánh giá không gian nơi sự kiện diễn ra. Nếu không gian rộng lớn, bạn cần thiết kế backdrop lớn để tạo điểm nhấn. Ngược lại, nếu không gian nhỏ, backdrop cần gọn gàng, vừa vặn.</li>
                                    <li><strong>Màu Sắc và Thương Hiệu</strong>: Lựa chọn màu sắc phù hợp với thương hiệu hoặc chủ đề sự kiện. Màu sắc cần hài hòa và nổi bật, đồng thời không làm loãng thông điệp mà bạn muốn truyền tải.</li>
                                    <li><strong>Đối Tượng Tham Dự</strong>: Xác định đối tượng khách mời (doanh nhân, khách hàng, giới trẻ…) để thiết kế backdrop sao cho phù hợp với sở thích và sự mong đợi của họ.</li>
                                    <li><strong>Tính Tương Tác</strong>: Nếu sự kiện có tính tương tác cao (chụp ảnh, truyền thông xã hội), hãy thiết kế backdrop sao cho thu hút và dễ dàng trở thành điểm chụp hình lý tưởng cho khách tham quan.</li>
                                    <li><strong>Thể Hiện Thông Điệp</strong>: Đảm bảo rằng thiết kế backdrop truyền tải rõ ràng thông điệp của sự kiện hoặc thương hiệu, giúp khách tham quan dễ dàng nhận diện và ghi nhớ.</li>
                                    <li><strong>Lựa Chọn Vật Liệu</strong>: Cân nhắc chất liệu của backdrop (vải, bạt, nhựa, LED…) để đảm bảo tính bền vững, phù hợp với điều kiện tổ chức sự kiện (trong nhà hay ngoài trời).</li>
                                </ul>
                                <p>Chọn một thiết kế backdrop phù hợp không chỉ giúp tăng tính thẩm mỹ mà còn hỗ trợ tối đa trong việc truyền tải thông điệp và tạo ấn tượng mạnh mẽ cho sự kiện.</p>
                            </>
                        ),
                    },
                    {
                        question: "Có hỗ trợ lắp đặt backdrop không ?",
                        answer: "Có, chúng tôi cung cấp dịch vụ hỗ trợ lắp đặt backdrop cho mọi sự kiện. Đội ngũ kỹ thuật của chúng tôi sẽ đảm bảo việc lắp đặt backdrop được thực hiện nhanh chóng và chính xác, từ việc dựng backdrop đến điều chỉnh ánh sáng, màn hình kỹ thuật số (nếu có) và các chi tiết khác. HomeNest cam kết mang lại sự tiện lợi và đảm bảo backdrop sẽ được lắp đặt hoàn hảo, góp phần tạo nên sự thành công cho sự kiện của bạn.",
                    },
                ]}
            />

            <ServiceReview />
        </>
    )
}
