# Personal Website - Headless Hashnode Integration

This is my personal portfolio and blog website built using **Next.js** and integrated with **Hashnode's Headless CMS**. It serves as a platform to showcase my projects, share technical blogs, and highlight my skills.

## 🚀 Features
- 📝 **Headless Blog** powered by Hashnode
- 🌐 **Fully Responsive UI** for all devices
- 🎨 **Modern & Dark-Themed Design**
- 🏗 **Built with Next.js for Performance**
- 🛠 **Easy Deployment with Vercel**
- 🔗 **Social & GitHub Integration**

## 📸 Screenshots
### 🏠 Homepage
![1](https://github.com/user-attachments/assets/491b4bbc-a03b-41d9-afd8-d483222794a7)

### 📖 Blog Page
![2](https://github.com/user-attachments/assets/afdcfc8c-c2e1-4629-a397-86a77328ac4b)

---

## 🛠 How to Deploy
The recommended approach is deploying to **Vercel**. If you don't have an account, you can sign up for a free plan.

### Steps:
1. **Fork** this repository.
2. **Create a new project** on Vercel and connect this repo.
3. Choose **Next.js** as the framework preset.
4. Set the following **environment variables**:

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com/
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=your-hashnode-blog-url.hashnode.dev
```
_Replace `your-hashnode-blog-url` with your actual Hashnode blog handle._

5. Deploy and visit the auto-generated Vercel domain to confirm everything works.

### 🌎 Custom Domain Setup
If you have a custom domain, you can point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `blog.yourdomain.com`.

---

## 💻 Running Locally
1. **Clone** the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-blog.git
   ```
2. **Navigate into the directory**:
   ```bash
   cd portfolio-blog
   ```
3. **Copy environment variables file**:
   ```bash
   cp .env.example .env.local
   ```
4. **Install dependencies**:
   ```bash
   yarn
   ```
5. **Run the development server**:
   ```bash
   yarn dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **CMS**: Hashnode (Headless CMS)
- **Deployment**: Vercel

## 📬 Contact
If you have any project ideas or want to collaborate, feel free to reach out!

🔗 **Portfolio:** [www.neerajadhav.in](www.neerajadhav.in)

📜 **License**: MIT

---
© 2025 Neeraj Adhav. All rights reserved.
