# ⚡ Agus Saputra - Personal Portfolio

<div align="center">
  <br />
  <h3>Modern. Scalable. Interactive.</h3>

  <p>
    A high-performance portfolio website built with <strong>React + Vite</strong> and containerized with <strong>Docker</strong>. <br/>
    Featuring interactive animations, real-time analytics, and a robust backend architecture.
  </p>

  <a href="https://agussaputraa.my.id"><strong>🔴 View Live Demo</strong></a>
  <br /> <br />

  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
</div>

<br />

## 🚀 Overview

This repository contains the source code for my personal portfolio website. It is designed to showcase my projects and technical skills while demonstrating modern web development practices.

The project is structured as a **monorepo** containing:
- **Client**: A React application powered by Vite, Framer Motion, and Tailwind CSS.
- **Server**: A lightweight Node.js/Express backend for API handling.
- **Infrastructure**: Fully Dockerized setup with Nginx as a reverse proxy.

## ✨ Key Features

- **Liquid Background**: Interactive mouse-following background animation using `framer-motion`.
- **Open Metrics**: Real-time visitor analytics integrated with [Umami](https://umami.is).
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices.
- **Dockerized**: One-command deployment using Docker Compose.
- **Performance**: Optimized build with Vite and Nginx caching strategies.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Backend & DevOps
- **Runtime**: Node.js (Express)
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (Alpine)
- **Analytics**: Umami

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose (Recommended)

### Option 1: Run with Docker (Recommended)

This method spins up the Client, Server, and Nginx automatically.

1. **Clone the repository**
   ```bash
   git clone [https://github.com/username/portfolio-me.git](https://github.com/username/portfolio-me.git)
   cd portfolio-me
