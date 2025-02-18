# Personal Website - Headless Hashnode & Mastodon Integration  
---
This is my personal portfolio and blog website built with **Next.js**, featuring integration with **Hashnode's Headless CMS** for blogging and **Mastodon API** for social feed updates. The site serves as a platform to showcase my work, share technical articles, and provide insights into my projects.  

## Features  
- **Homepage** – About the author, background, and professional journey.  
- **Feed** – Live updates from Mastodon, powered by the Mastodon API.  
- **Blog** – Technical articles and insights, managed via Hashnode's Headless CMS.  
- **Projects** – A collection of open-source projects with links to GitHub repositories.  
- **Responsive Design** – Optimized for all devices.  
- **Next.js Performance** – Built with server-side rendering and static generation for fast loading times.  
- **Vercel Deployment** – Easy to deploy and manage with Vercel.  

## Screenshots  

### Homepage  
![Homepage Screenshot](https://github.com/user-attachments/assets/491b4bbc-a03b-41d9-afd8-d483222794a7)  

### Blog Page  
![Blog Screenshot](https://github.com/user-attachments/assets/afdcfc8c-c2e1-4629-a397-86a77328ac4b)  

---

## Deployment  

The recommended deployment method is **Vercel**.  

### Steps  
1. **Fork** the repository.  
2. **Create a new project** on Vercel and connect this repository.  
3. Select **Next.js** as the framework.  
4. Set up the following **environment variables**:  

```bash
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com/
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=your-site.hashnode.dev
NEXT_MASTODON_ACCESS_TOKEN=your-mastodon-api-access-token
NEXT_MASTODON_USERNAME=your-mastodon-username
NEXT_MASTODON_INSTANCE=https://mastodon-instance.com
```
_Replace above data with actual values._  

5. Deploy and visit the assigned Vercel domain to verify the setup.  

---

## Running Locally  

1. Clone the repository:  
   ```bash
   git clone https://github.com/neerajadhav/floaty-hashnode-headless.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd floaty-hashnode-headless
   ```  
3. Copy environment variables:  
   ```bash
   cp .env.example .env
   ```  
4. Install dependencies:  
   ```bash
   yarn
   ```  
5. Start the development server:  
   ```bash
   yarn dev
   ```  
6. Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## Tech Stack  

- **Framework**: Next.js  
- **Styling**: Tailwind CSS  
- **CMS**: Hashnode Headless CMS  
- **API Integration**: Mastodon API  
- **Deployment**: Vercel  

---

## Contact  

For collaborations, projects, or inquiries, feel free to reach out.  

**Portfolio:** [www.neerajadhav.in](www.neerajadhav.in)  

**License**: MIT