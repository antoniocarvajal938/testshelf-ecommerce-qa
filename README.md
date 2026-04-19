# 📚 QA TestShelf

A modern e-commerce web application built with **React + TypeScript**, designed not only as an online bookstore, but also as a **playground for QA automation testing**.

---

## 🚀 Project Purpose

This project has a dual purpose:

### 🛒 1. E-commerce Simulation

A fully interactive frontend that mimics a real online bookstore:

* Browse books
* Add/remove items from cart
* Checkout flow (simulated)
* Login system (mocked)

### 🧪 2. QA Automation Practice

Designed specifically for QA engineers to:

* Practice E2E testing (Playwright, Cypress, etc.)
* Write test cases based on real UI flows
* Validate user interactions and edge cases

---

## 🧱 Tech Stack

* ⚛️ React (Vite)
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🧠 React Context (state management)
* 🚫 No backend (mocked logic)

---
![preview](./src/assets/hero.png)


## 📸 Features

### 🏠 Home

* Hero section with modern UI
* Featured books

### 📚 Products

* Grid layout with real book data
* Add to cart interactions

### 📖 Product Detail

* Detailed view per book

### 🛒 Cart

* Quantity management
* Dynamic total calculation
* Empty state UX

### 🔐 Login

* Mock authentication
* UI feedback (toast)

### 📬 Contact

* Interactive form
* Clickable email / phone / location

### 📱 Responsive Design

* Mobile-first approach
* Hamburger menu

---

## 🧪 QA Testing Opportunities

This project is intentionally designed to be testable:

* No `data-testid` attributes → testers must define selectors
* Real user flows:

  * Login
  * Add/remove products
  * Checkout
* Edge cases:

  * Empty cart
  * Invalid login
  * Quantity limits

---

## ⚙️ Installation

```bash
git clone https://github.com/antoniocarvajal938/
testshelf-ecommerce-qa.git
cd testshelf-ecommerce-qa
npm install
npm run dev
```

---

## 📂 Project Structure

```
src/
  components/
  pages/
  hooks/
  context/
  data/
  assets/
```

---

## 🧠 Why this project?

Most demo projects are either:

* too simple ❌
* or not testable ❌

This project aims to:

* simulate a real product ✔️
* be useful for QA practice ✔️
* follow good frontend practices ✔️

---

## 🚀 Future Improvements

* Persistent login (localStorage)
* Filters & search
* Toast system globalized
* Animations (Framer Motion)
* Playwright test suite included

---

## 👨‍💻 Author

Antonio Carvajal — QA & Developer

---

## ⭐ If you like it

Feel free to fork, test, and improve it!
