import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



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
        </>
    )
}