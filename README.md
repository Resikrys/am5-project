# Laravel 11 + React SPA Project
A simple project management application using Laravel 11 and React.

The project was developed for [the following](https://youtu.be/VrQRa-afCAk) YouTube tutorial.

## Features
1. Registration & Login
2. Projects CRUD with sorting, filtering and pagination
3. Tasks CRUD with sorting, filtering and pagination
4. Create Tasks inside project
5. Show all tasks or show tasks for a specific project
6. Assign users to tasks
7. View Tasks assigned to me
8. Show dashboard with overview information

## Installation
1. Clone the project
2. Navigate to the project's root directory using terminal
3. Create `.env` file - `cp .env.example .env`
4. Execute `composer install`
5. Execute `npm install`
6. Set application key - `php artisan key:generate --ansi`
7. Execute migrations and seed data - `php artisan migrate --seed`
8. Start vite server - `npm run dev`
9. Start Artisan server - `php artisan serve`

## React - Vite configuration
1. Clone the project
2. Execute - `npm create vite@latest nombre-del-proyecto --template react`
3. Execute `npm install`
4. Abre CMD y seleccciona el directorio del proyecto -> cd nombre-del-proyecto
5. Selecciona el framework -> React
6. Selecciona la variante -> Javascript + SWC
7. Start vite server - `npm run dev`

## Demo
Coming soon...

# Dependencias adicionales instaladas

```sh
 npm install react-router-dom
 npm install axios
 npm install -D tailwindcss
 npm install lazy loading
 npm install react-bootstrap bootstrap
 npm install @heroicons/react
 npm install @inertiajs/inertia @inertiajs/inertia-react
 npm install reactjs-flip-card
 npm install react-hot-toast
 npm install react-scroll
 npm install cors
```

# Git Basic Commands:
```sh
git clone https://github.com/Resikrys/am5-project.git
git remote add origin https://github.com/Resikrys/am5-project.git
git add -A
git commit -m "mensaje del commit"
git push origin main
```