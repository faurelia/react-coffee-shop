# React Coffee Shop

A responsive coffee shop website built with React, Vite, React Router, and Tailwind CSS. The site presents Copper Kettle's menu, story, rewards program, gift cards, and contact information in a warm, editorial-inspired interface.

## Features

- Responsive layout with desktop and mobile navigation
- Active navigation links with React Router
- Menu, About, Gift Cards, Rewards, and Contact pages
- Data-driven rewards cards, gift card designs, and FAQ items
- Reusable layout, header, footer, and page components
- Lucide icons and custom coffee shop imagery

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Lucide Icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Routes

| Route         | Page       |
| ------------- | ---------- |
| `/`           | Home       |
| `/menu`       | Menu       |
| `/about`      | About      |
| `/gift-cards` | Gift Cards |
| `/rewards`    | Rewards    |
| `/contact`    | Contact    |

## Project Structure

```text
src/
├── assets/          Images and other local assets
├── components/      Shared header and footer components
├── layouts/         Main page layout
├── pages/           Route-level page components
├── App.jsx          Router and route definitions
├── index.css        Tailwind theme and global styles
└── main.jsx         React application entry point
```
