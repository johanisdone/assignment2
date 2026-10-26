# Employee Dashboard

A React application built with Vite, React Router, Axios, and Bootstrap.

## Features

- Home dashboard fetches employees from https://jsonplaceholder.typicode.com/users.
- Responsive table displays ID, name, and email.
- Employee form includes Name, Designation, Location, and Salary.
- Navbar links navigate between Home and Employee Form.
- Form submission is handled locally; no data is posted to an API.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Routes: `/` and `/home` show the dashboard; `/employee-form` shows the form.
When deploying, configure the host to serve `index.html` for client-side routes.
