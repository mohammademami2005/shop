# 🛒 Next.js + TypeScript + MUI Shop Project

This project is a sample e-commerce shop built with **Next.js** and **TypeScript**, utilizing **MUI (Material UI)**, **react-query**, and **zustand**. The project is SEO optimized and combines **SSR** and **CSR**. The database is simulated locally using a **mock API**.

---

## 🎯 Demo (Live Demo)

[View Demo](https://shop.mohammademamiproject.ir/)

---

## 🖼️ Screenshots

## 🖼️ Screenshots Gallery
## 🖼️ Screenshots Gallery

<!-- Desktop & Shop Screens: 2 per row -->
<table>
  <tr>
    <td>
      [<img src="/public/screenshots/homeLight.png" width="50%" alt="Home Light Desktop" />](/public/screenshots/homeLight.png)
    </td>
    <td>
      [<img src="/public/screenshots/homeBlack.png" width="50%" alt="Home Dark Desktop" />](/public/screenshots/homeBlack.png)
    </td>
  </tr>
  <tr>
    <td>
      [<img src="/public/screenshots/shopBlack.png" width="50%" alt="Shop Dark Desktop" />](/public/screenshots/shopBlack.png)
    </td>
    <td>
      [<img src="/public/screenshots/cart.png" width="50%" alt="Cart Desktop" />](/public/screenshots/cart.png)
    </td>
  </tr>
  <tr>
    <td>
      [<img src="/public/screenshots/homeLightMobile.png" width="50%" alt="Home Light Mobile" />](/public/screenshots/homeLightMobile.png)
    </td>
    <td>
      [<img src="/public/screenshots/homeBlackMobile.png" width="50%" alt="Home Dark Mobile" />](/public/screenshots/homeBlackMobile.png)
    </td>
  </tr>
</table>

<!-- Project Structure -->
[<img src="/public/screenshots/stracture.png" width="100%" alt="Project Structure" />](/public/screenshots/stracture.png)


---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📂 Categories | Product categories |
| 🔍 Search & Filter | Search and filter by price and category |
| 🏷️ Clean URLs | Pages with readable slugs |
| 🌗 Light/Dark Theme | Light and dark theme with MUI ThemeProvider |
| 🛒 Cart | Cart management using zustand and persisted in Local Storage |
| ⚡ Data Fetching | Data fetching and caching with react-query |
| 🕸️ SEO | Meta tags, Open Graph, and logical page structure |
| 💻 SSR + CSR | Combination of server-side and client-side rendering |

---

## 🧭 Project Structure

- **app/** → Pages and layouts in Next.js 13+ (App Router)  
- **providers/** → ThemeProvider and QueryClientProvider  
- **store/** → State management with zustand  
- **theme/** → Light and dark themes using MUI Theme System  
- **shop/** → Shop pages (cart, product, listing)  
- **components/** → Shared UI components  
- **public/** → Static files  

---

## 💻 Run Locally

**Requirements:**

- Node.js 16+
- npm or yarn

**Steps:**

```bash
# Clone the repo
git clone https://github.com/mohammademami2005/nextjs-mui-shop
cd nextjs-mui-shop

# Install dependencies
npm install
# or yarn install

# Run mock API (if available)
npm run mock

# Run development server
npm run dev
# Open in browser: http://localhost:3000
