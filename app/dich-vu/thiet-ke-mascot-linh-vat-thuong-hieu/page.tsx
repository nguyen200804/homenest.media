import { ServiceHero, ServiceOverview, ServiceStrategy } from "@/components/sections/services";



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
        </>
    )
}