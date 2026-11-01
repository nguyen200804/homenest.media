import Image from 'next/image';
import { ButtonGradientSpin } from '@/components/ui/Buttons';

export default function ErrorPage() {
    return (
        <section>
            <div className="fullWidth">
                <div>
                    <Image src="/images/error.gif" width={960} height={540} alt="Error" />
                    <div>
                        <p>404</p>
                    </div>
                    <div>
                        <p>Oops! <br />
                            Có gì đó không đúng</p>
                        <p>Bạn đang ở đây vì bạn đã nhập địa chỉ của một trang không còn tồn tại hoặc đã được chuyển đến một địa chỉ khác</p>
                        <ButtonGradientSpin text="Quay lại trang chủ" link="/" />
                    </div>

                </div>

            </div>
        </section>
    )
}