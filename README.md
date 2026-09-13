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

i.  What is JSX, and why is it used in React?
Ans: JSX (Javascript XML) is a syntax of writing html code in side Javascript.
Because, React (JSX) code clean and easy otherhand without JSX in react UI design very tuff and hard.

ii.  What is the difference between props and state?
Ans: (1). Props come from the outer (parent) component, whereas State is created inside the component itself.
     (2). Props cannot be changed (they are read-only), whereas State can be changed through clicks or user actions.
     (3). Props are used to pass data between components, whereas State is used to manage dynamic/changing data on the page.
iii.  What does the useState hook do, and where did you use it in this project?
Ans: The useState is a react built-in-tool thats gives component ots own memory. It allow a component to hold data that we can change over time users' action or dynamic values and autometically re renders the pages so the user observe the update information immediately. In my Techno.tsx component, useState used to manage the list of technologies added to the aside bar:
const [stack, setStack] = useState<TecType[]>([]);
stack
setStack
Add to Stack
Remove
iV. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: The ussEffect hook is a built in react function that lets out component perform side effects. Side effects are operations that interact with the world outside of React's rendering flow—such as fetching data from an API/JSON file, manually modifying the DOM, or setting up timers.

Needed to Load JSON Data:
When our component renders, React focuses solely on calculating and displaying the UI. Fetching data over a network takes time (it is asynchronous).

Here is why useEffect is required for fetching JSON:
Prevents Infinite Loops.
Runs at the Right Time.
Controls Dependencies.

v.  Why does every item in a .map() list need a unique key prop?
  The key prop acts as a unique ID card for each item in a list.

  It helps React identify exactly which item was added, removed, or changed.

  Without unique keys, React gets confused and re-renders the entire list unnecessarily.

  Using keys makes your web app much faster and more efficient.

  It prevents UI bugs, like form inputs or checkboxes staying attached to the wrong item.

  Always use a unique property from your data (like item.id) instead of the list index.

  It ensures that when you delete or reorder items, only the correct item updates on screen.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering in React means displaying different UI elements or components based on specific conditions (like an if statement or a boolean check). If a condition is true, React renders one element; if false, it renders something else or nothing at all.

Used in my Project-
In my Stack.tsx sidebar component, conditional rendering is used to check if the stack array is empty (stack.length === 0).

If empty: It displays the default "No items in stack" message.

If items exist: It renders the list of selected tech items alongside the "Remove All" button.


vii.  How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans:  Parent to Child (Passing Data Down)
The parent component passes data down to a child component using props, just like passing arguments to a function.

Child to Parent (Sending Data Back Up)
A child component cannot send data directly upward. Instead, the parent passes down a callback function via props. When an event happens in the child (like a button click), the child calls that function and passes the data back up as an argument.

Child (Card.tsx): Calls onAdd(data) inside its click event, sending the specific technology object back up to the parent.