This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Quy định Breakpoint (Responsive)

### Container mặc định

| Thuộc tính          | Giá trị  |
| ------------------- | -------- |
| `max-width`         | `1400px` |
| `padding` hai bên   | `40px`   |

### Các breakpoint

| Media query                | `max-width` container | `padding` hai bên     |
| -------------------------- | --------------------- | --------------------- |
| `@media (min-width: 2000px)` | `1600px`              | `40px` (giữ mặc định) |
| `@media (max-width: 1600px)` | `1400px` (giữ mặc định) | `40px` (giữ mặc định) |
| `@media (max-width: 1400px)` | giữ mặc định          | `40px` (giữ mặc định) |
| `@media (max-width: 1200px)` | giữ mặc định          | `32px`                |
| `@media (max-width: 996px)`  | giữ mặc định          | `28px`                |
| `@media (max-width: 768px)`  | giữ mặc định          | `24px`                |
| `@media (max-width: 576px)`  | giữ mặc định          | `20px`                |
| `@media (max-width: 425px)`  | giữ mặc định          | `16px`                |

> Các breakpoint `1600px` và `1400px` không thay đổi `padding` hay `max-width`, giữ nguyên giá trị đang áp dụng.

### Ví dụ CSS

```css
.container {
  max-width: 1400px;
  margin-inline: auto;
  padding-inline: 40px;
}

@media (min-width: 2000px) {
  .container { max-width: 1600px; }
}

@media (max-width: 1600px) {}

@media (max-width: 1400px) {}

@media (max-width: 1200px) {
  .container { padding-inline: 32px; }
}

@media (max-width: 996px) {
  .container { padding-inline: 28px; }
}

@media (max-width: 768px) {
  .container { padding-inline: 24px; }
}

@media (max-width: 576px) {
  .container { padding-inline: 20px; }
}

@media (max-width: 425px) {
  .container { padding-inline: 16px; }
}
```

## Quy định cấu trúc thư mục (Next.js App Router)

Dự án dùng **App Router** và đặt thư mục `app/` ở gốc dự án (không dùng `src/`).

### Cây thư mục

```
.
├── app/                        # Routing (App Router)
│   ├── (marketing)/            # Route group: trang công khai
│   │   ├── page.tsx            # Trang chủ "/"
│   │   └── about/
│   │       └── page.tsx        # "/about"
│   ├── (auth)/                 # Route group: đăng nhập, đăng ký
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # "/blog"
│   │   └── [slug]/
│   │       └── page.tsx        # "/blog/:slug"
│   ├── api/                    # Route Handlers
│   │   └── users/route.ts
│   ├── layout.tsx              # Root layout
│   ├── loading.tsx             # UI loading toàn cục
│   ├── error.tsx               # UI lỗi toàn cục
│   ├── not-found.tsx           # Trang 404
│   └── globals.css             # CSS toàn cục (chứa .container)
│
├── components/
│   ├── ui/                     # Component nhỏ, dùng lại nhiều (Button, Input, Modal)
│   ├── layout/                 # Header, Footer, Sidebar, Container
│   └── shared/                 # Component dùng chung giữa nhiều trang
│
├── features/                   # Logic theo từng tính năng
│   └── auth/
│       ├── components/         # Component riêng của tính năng
│       ├── hooks/
│       ├── services/
│       ├── types.ts
│       └── index.ts            # Public API của feature
│
├── hooks/                      # Custom hooks dùng chung (useDebounce, useMediaQuery)
├── lib/                        # Cấu hình thư viện bên thứ ba (axios, prisma, ...)
├── services/                   # Gọi API / truy cập dữ liệu dùng chung
├── stores/                     # State management (Zustand, Redux, ...)
├── types/                      # Kiểu TypeScript dùng chung
├── constants/                  # Hằng số (routes, breakpoints, config)
├── utils/                      # Hàm tiện ích thuần (formatDate, cn, ...)
├── styles/                     # CSS/SCSS dùng chung (variables, mixins)
├── public/                     # Tài nguyên tĩnh
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── .env.local                  # Biến môi trường (không commit)
├── .env.example                # Mẫu biến môi trường (commit)
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Vai trò từng thư mục

| Thư mục        | Mục đích                                                   | Ghi chú                                         |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| `app/`         | Định nghĩa route, layout, loading, error                   | Chỉ chứa file đặc biệt của Next.js, ít logic    |
| `components/`  | Component UI dùng lại                                      | Không chứa logic nghiệp vụ                      |
| `features/`    | Gom component, hook, service theo tính năng                | Mỗi feature độc lập, import qua `index.ts`      |
| `hooks/`       | Custom hooks dùng chung                                    | Tên bắt đầu bằng `use`                          |
| `lib/`         | Khởi tạo và cấu hình thư viện                              | Ví dụ: `axios.ts`, `prisma.ts`                  |
| `services/`    | Hàm gọi API, truy vấn dữ liệu                              | Không viết trực tiếp `fetch` trong component    |
| `stores/`      | Global state                                               | Mỗi store một file                              |
| `types/`       | Interface/type dùng chung                                  | Type riêng của feature đặt trong feature đó     |
| `constants/`   | Hằng số toàn dự án                                         | Viết hoa kiểu `SNAKE_CASE`                      |
| `utils/`       | Hàm thuần, không phụ thuộc React                           | Dễ viết unit test                               |
| `public/`      | File tĩnh, truy cập qua `/ten-file`                        | Ảnh dùng với `next/image`                       |

### File đặc biệt trong `app/`

| File            | Chức năng                                    |
| --------------- | -------------------------------------------- |
| `page.tsx`      | Giao diện của một route                      |
| `layout.tsx`    | Layout bọc các route con                     |
| `template.tsx`  | Giống layout nhưng mount lại mỗi lần điều hướng |
| `loading.tsx`   | UI hiển thị khi đang tải (Suspense)          |
| `error.tsx`     | UI hiển thị khi có lỗi (Client Component)    |
| `not-found.tsx` | UI cho 404                                   |
| `route.ts`      | API Route Handler                            |

### Quy tắc đặt tên

| Đối tượng                 | Quy tắc                | Ví dụ                         |
| ------------------------- | ---------------------- | ----------------------------- |
| Thư mục route             | `kebab-case`           | `app/user-profile/`           |
| Thư mục thường            | `kebab-case`           | `components/ui/`              |
| File component            | `PascalCase.tsx`       | `ProductCard.tsx`             |
| File hook                 | `camelCase.ts`         | `useDebounce.ts`              |
| File util / service       | `camelCase.ts`         | `formatDate.ts`, `userService.ts` |
| File type                 | `camelCase.ts`         | `user.types.ts`               |
| Hằng số                   | `SNAKE_CASE`           | `API_BASE_URL`                |
| CSS Module                | `ten-file.module.css`  | `ProductCard.module.css`      |
| Dynamic route             | `[param]`              | `app/blog/[slug]/`            |
| Route group               | `(ten-nhom)`           | `app/(auth)/`                 |

### Cấu trúc một component

Mỗi component phức tạp được đặt trong thư mục riêng:

```
components/ui/Button/
├── Button.tsx
├── Button.module.css
└── index.ts
```

```ts
// components/ui/Button/index.ts
export { default } from "./Button";
```

Component đơn giản có thể là một file duy nhất, ví dụ `components/ui/Badge.tsx`.

### Quy tắc import

Dùng alias `@/` thay cho đường dẫn tương đối dài. Cấu hình trong `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```

```ts
// Nên
import Button from "@/components/ui/Button";
import { formatDate } from "@/utils/formatDate";

// Không nên
import Button from "../../../components/ui/Button";
```

Thứ tự import:

1. Thư viện bên ngoài (`react`, `next/...`)
2. Alias nội bộ (`@/components`, `@/utils`, ...)
3. Đường dẫn tương đối (`./`, `../`)
4. File style (`.css`, `.module.css`)

### Server Component và Client Component

- Mặc định mọi component là **Server Component**.
- Chỉ thêm `"use client"` ở đầu file khi cần `useState`, `useEffect`, event handler hoặc API của trình duyệt.
- Đặt `"use client"` ở component nhỏ nhất có thể, tránh áp dụng cho cả trang.
- Không gọi trực tiếp database hay dùng biến môi trường bí mật trong Client Component.

### Quy tắc chung

- File trong `app/` chỉ làm nhiệm vụ routing và ghép giao diện; logic đặt ở `features/`, `services/`, `utils/`.
- Một file một component chính, không export nhiều component không liên quan.
- Component trong `ui/` không import từ `features/`.
- Feature không import trực tiếp vào bên trong feature khác, chỉ qua `index.ts`.
- Biến môi trường dùng ở trình duyệt phải có tiền tố `NEXT_PUBLIC_`.
- Không commit `.env.local`; cập nhật `.env.example` khi thêm biến mới.
- Ảnh đặt trong `public/images/` và dùng `next/image` thay cho thẻ `<img>`.
- CSS container và breakpoint tuân theo mục **Quy định Breakpoint (Responsive)** ở trên.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.