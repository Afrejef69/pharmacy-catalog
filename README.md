# Pharmacy Product Catalog

A modern and lightweight product catalog web application built with **Next.js**, designed for pharmacies to showcase their products in a clean, searchable interface.

The catalog is powered by **Google Sheets** as a read-only data source, making product management simple and accessible without requiring a traditional database or admin panel.

---

## 🚀 Features

- 📦 Product catalog with scalable structure (200+ products)
- 🔍 Global search bar (by name, category, or code)
- 🖼 Optimized product images using `next/image`
- 📄 Data source powered by Google Sheets (CSV export)
- ⚡ Fast performance with Next.js App Router
- 🧩 Modular and reusable component architecture
- 📱 Responsive design
- 🌐 Ready for deployment on Vercel

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS / Global styles
- **Data Source:** Google Sheets (CSV - read-only)
- **Image Optimization:** `next/image`
- **Deployment:** Vercel

---

## 📁 Project Structure

app/
│ ├── page.tsx # Main catalog page
│ ├── layout.tsx # Global layout (header, footer)
│
components/
│ ├── Footer.tsx # Contact & footer information
│ ├── ProductCard.tsx # Product display card
│ ├── SearchBar.tsx # Global search component
│
app/api/products/
│ └── route.ts # API route to fetch products from Google Sheets
│
styles/
│ └── styles.css # Global styles
│
public/

---

## 📊 Google Sheets Format

| Column       | Type   | Description                          |
|--------------|--------|--------------------------------------|
| Name         | string | Product name                         |
| Description  | string | Product description                  |
| Price        | string | Product price                        |
| Image        | string | Public Google Drive image URL        |
| Category     | string | Product category                     |
| Stock        | string | Available stock                      |
| Code         | string | Internal product code                |

> ℹ️ All data is read-only. No credentials or sensitive information are required.

---

## 🔧 Environment Setup

1. Clone the repository:

bash:

- git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git

## Install Dependencies

npm install

## Run the development server

npm run dev

## Open

http://localhost:3000

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Maintainers

This project was developed to serve as a scalable and maintainable solution for pharmacy product catalogs.

Contributions and improvements are welcome.

