# My Portfolio Website

## About the Project

This is a simple, personal portfolio website designed to showcase my work, skills, and experience. It provides a clean and responsive interface.

## Architecture

This project is built using the following technologies:

*   **Astro**: A modern static site builder that allows for fast content-focused websites. It enables bringing your own UI framework (or none at all) and ships zero JavaScript by default.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. It's used for styling and ensuring a responsive layout.
*   **DaisyUI**: A Tailwind CSS component library that provides pre-built, customizable UI components, accelerating development and ensuring a consistent design.
*   **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
*   **pnpm**: A fast, disk space efficient package manager.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd halim
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```
4.  Start the development server:
    ```bash
    pnpm run dev
    ```
    The website will be available at `http://localhost:4321`.

## Code Formatting

To format the code according to the project's standards:

```bash
pnpm format
```

For automatic formatting on save, consider installing the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in VS Code and setting `Prettier` as the default formatter.

## Build

To create a production-ready build of the website:

```bash
pnpm run build
```

The static assets will be generated in the `dist/` directory.