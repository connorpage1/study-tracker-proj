# Getting started
First, `cd` into the `study-tracker-proj` folder and run `npm install` to install the packages and dependencies used in this project. 

## Starting JSON server
This comes with a `db.json` file with dummy data created by ChatGPT. This `db.json` file is created by the Python script `generate_db.py`. If you would like to make changes to the dummy data, do so in the Python file, `cd` into the `study-tracker-proj` folder, and run the command `python generate_db.py`. 

To start the `db.json` as a local server, `cd` into the main `study-tracker-proj` folder and run `npm run start-server`, which will use json-server to run the `db.json` on port 8000.

## Starting the app
This app was created using Vite, so run the `npm run dev` command to start the app in the browser. 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
