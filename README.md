<div align="center">

  # 🚀 Dev Stack Builder

  **Build, customize, and curate your ultimate development stack in real-time.**

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React Toastify](https://img.shields.io/badge/React_Toastify-Alerts-FF6B6B?style=for-the-badge&logo=npm&logoColor=white)](https://fkhadra.github.io/react-toastify/)

</div>

---

## 📖 About the Project

**Dev Stack Builder** is an interactive web application designed to help developers browse, evaluate, and assemble their ideal software stack. Featuring a modern responsive UI, dynamic search filtering, and an interactive sidebar tracker, it offers an intuitive platform to select technologies across Frontend, Backend, Databases, DevOps, and Tools.

The interface is driven by a shared **orange ➔ pink ➔ violet gradient theme** to provide a seamless aesthetic across key UI elements, headings, and CTA buttons.

---

## 🛠️ Technologies Used

- **Core Framework:** React 19 (Hooks, Suspense, Custom Handlers)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Responsive grid, Sticky sidebar, Custom gradients)
- **Notification System:** `react-toastify`
- **Data Source:** Local JSON REST API simulation (`data.json`)

---

## ✨ Key Features

### 1. 🧰 Dynamic Stack Management
* Add technologies to your personal stack with a single click.
* Auto-disables card buttons with a **`✓ Added to Stack`** state once added.
* Individual **`✕`** removal and **`Remove All`** batch clear functionality.
* Sticky sidebar tracker that computes total selected tools in real-time.

### 2. 🔔 Real-Time React-Toastify Alerts
* **Success Toast (`toast.success`):** Triggers when a new technology is added.
* **Duplicate Warning (`toast.warn`):** Prevents duplicate entries and alerts the user if an item already exists in the stack.
* **Info Toast (`toast.info`):** Displays when a single technology is removed.
* **Danger Alert (`toast.error`):** Confirms when the entire stack is cleared.

### 3. 🎨 Responsive UI & Unified Gradient Theme
* Fully responsive across Mobile, Tablet, and Desktop screens.
* **Mobile Navigation:** Features a clean hamburger menu header with quick action buttons.
* **Unified Brand Theme:** Standardized `bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600` styling applied across headings, logos, and primary CTAs for effortless re-theming.
* **Suspense Loading State:** Integrated React `<Suspense>` boundary to render clean feedback during dynamic JSON fetching.

---

## 📦 Project Structure

```text
dev-stack-builder/
├── public/
│   └── data.json              # 10-15 Technology Data Objects
├── src/
│   ├── components/
│   │   ├── Nav.tsx            # Sticky Navbar (Desktop & Mobile Menu)
│   │   ├── Banner.tsx         # Hero section with gradient heading & buttons
│   │   ├── Techno.tsx         # Main layout & stack state logic
│   │   ├── Card.tsx           # Technology card component
│   │   ├── Stack.tsx          # "Your Stack" sidebar component
│   │   ├── Footer.tsx         # Brand footer with navigation links
│   │   └── type.ts            # TypeScript interfaces
│   ├── App.tsx                # App root with Suspense & ToastContainer
│   └── main.tsx               # Entry point with Toastify CSS imports
├── package.json
└── README.md