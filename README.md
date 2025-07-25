# Full-Stack Portfolio Site

<img width="1888" height="870" alt="image" src="https://github.com/user-attachments/assets/7abd0db7-e716-4198-9d99-afd988d52706" />
<img width="1875" height="878" alt="image" src="https://github.com/user-attachments/assets/73181606-5935-4673-a14c-90ea670451d4" />
--------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1826" height="868" alt="image" src="https://github.com/user-attachments/assets/8b355858-19b6-4d57-a237-159910532b1f" />
<img width="1827" height="861" alt="image" src="https://github.com/user-attachments/assets/ba77e354-1de4-4e91-a505-ca72ad75262d" />

## About

This is a full-stack personal portfolio site showcasing my education, experiences, skills, and certifications. It features a modern, responsive design with both light and dark mode support.

- **Frontend:** Next.js, React, Redux Toolkit (RTK Query), TypeScript, Tailwind CSS  
- **Backend:** Node.js, Express.js, PostgreSQL, Prisma ORM  
- **Deployment:** Railway (backend), Any host/domain (frontend)  
- **CI/CD:** Fully automated with GitHub Actions for linting, testing, building, and deploying both frontend and backend  
- **Database:** PostgreSQL managed with Prisma migrations and seeded with initial portfolio data  

## Features

- Responsive UI with dark/light theme toggle  
- Fully dynamic portfolio data powered by backend API  
- CRUD operations for portfolio content using RESTful endpoints  
- Redux Toolkit Query handles data fetching, caching, and state management seamlessly  
- Data seeded and managed via Prisma with relations (education, experiences, certifications, skills)  
- Continuous integration and deployment with automated workflows  
- Backend health check endpoint  

## Getting Started

### Prerequisites
- Node.js (v18 recommended)  
- PostgreSQL database (local or hosted)  
- Git  

### Local Setup
1. Clone the repository

```bash
git clone https://github.com/yusufhayirli/yusufhayirli.com-next.git
cd yusufhayirli.com-next
```

2. Setup environment variables

- Copy .env.example to .env in both /frontend and /backend folders and fill in the values like DATABASE_URL, API URLs, etc.

3. Install dependencies and start development servers

- Backend:

```
cd backend
npm install
npm run dev
```
- Frontend:

```bash
cd frontend
npm install
npm run dev
```

4- Open your browser at http://localhost:3000

## Deployment
- CI/CD pipeline using GitHub Actions are ready to build and deploy for both frontend and backend on `main` branch push.  
- Deployment can be configured for your chosen hosting provider, domain, and server environment.  
- FTP and SSH deployment workflows are also available for manual deployment to any compatible host or server.

## Folder Structure
- /frontend — Next.js app with React components, Redux store, RTK Query API slices
- /backend — Express server, Prisma ORM models, controllers, services
- /shared — Shared TypeScript types and interfaces
- /.github/workflows — GitHub Actions workflows for automated testing and deployment

## Future Improvements
- Add user authentication and admin panel for editing portfolio data through UI
- Implement WebSocket or SSE for real-time updates
- Enhance accessibility for better user experience
- Add multilingual support

## License
MIT License

Created by Yusuf HAYIRLI
