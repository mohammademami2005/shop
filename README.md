# 🛒 Next.js + TypeScript + MUI Shop Project

این پروژه یک فروشگاه نمونه است که با **Next.js** و **TypeScript** توسعه داده شده و از کتابخانه‌های **MUI (Material UI)**، **react-query** و **zustand** استفاده می‌کند. پروژه برای SEO بهینه شده و ترکیبی از **SSR** و **CSR** را پوشش می‌دهد. دیتابیس به‌صورت محلی با یک **mock API** شبیه‌سازی شده است.

---

## 🎯 Demo (Live Demo)

[demo](https://shop.mohammademamiproject.ir/)

---

## 🖼️ Screenshots

![Home](/public/screenshots/homeLight.png)
![Home](/public/screenshots/homeBlack.png)
![Home](/public/screenshots/homeLightMobile.png)
![Home](/public/screenshots/homeBlackMobile.png)
![Shop](/public/screenshots/shopBlack.png)
![Cart](/public/screenshots/cart.png)
![Structure](/public/screenshots/stracture.png)


---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📂 Categories | دسته‌بندی محصولات |
| 🔍 Search & Filter | جستجو و فیلتر بر اساس قیمت و دسته‌بندی |
| 🏷️ Clean URLs | صفحات با slug خوانا |
| 🌗 Light/Dark Theme | تم روشن و تاریک با MUI ThemeProvider |
| 🛒 Cart | مدیریت سبد خرید با zustand و persist در Local Storage |
| ⚡ Data Fetching | واکشی داده‌ها و cache با react-query |
| 🕸️ SEO | متا تگ‌ها، Open Graph و ساختار منطقی صفحات |
| 💻 SSR + CSR | ترکیب رندر سمت سرور و سمت کاربر |

---

## 🧭 Project Structure

- **app/** → صفحات و layoutها در Next.js 13+ (App Router)  
- **providers/** → ThemeProvider و QueryClientProvider  
- **store/** → مدیریت state با zustand  
- **theme/** → تم‌های روشن و تاریک با MUI Theme System  
- **shop/** → صفحات فروشگاه (cart, product, listing)  
- **components/** → اجزای UI عمومی  
- **public/** → فایل‌های استاتیک  

---

## 💻 Run Locally

**Requirements:**

- Node.js 16+
- npm یا yarn

**Steps:**

```bash
# Clone the repo
git clone https://github.com/mohammademami2005/nextjs-mui-shop
cd nextjs-mui-shop

# Install dependencies
npm install
# یا yarn install

# Run mock API (در صورت وجود)
npm run mock

# Run development server
npm run dev
# سپس باز کنید: http://localhost:3000
