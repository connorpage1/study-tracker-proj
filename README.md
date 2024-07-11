# Study Tracker

## About
Study Tracker is a simple single-page React application designed to help you keep track of your study sessions and gain insight from the data. It uses a JSON server to locally store your study sessions in a `db.json` file. The app then uses client-side routing to allow users to view, modify, add, and delete study sessions. It also provides a number of helpful graphs and statistics to allow you to visualize your study data. Finally, users can customize the app to their needs without digging into the code by adding or removing subjects from the session logging form. 

![App preview gif](https://github.com/connorpage1/study-tracker-proj/blob/main/public/app-demo.gif)

## Getting started
First, fork and clone this repository. Then, `cd` into the `study-tracker-proj` folder and run `npm install` to install the packages and dependencies used in this project. 

```bash
npm install
```

### Starting JSON server
Make sure that you have the json-server package installed. If you haven't already installed it globally, run `npm install json-server`.

This comes with a `db.json` file with dummy data created by ChatGPT. This `db.json` file is created by the Python script `generate_db.py`. If you would like to make changes to the dummy data, do so in the Python file, `cd` into the `study-tracker-proj` folder, and run the command `python generate_db.py`. 

```bash
python generate_db.py
```

To start the `db.json` as a local server, `cd` into the main `study-tracker-proj` folder and run `npm run start-server`, which will use json-server to run the `db.json` on port 8000.

```bash
npm run start-server
```
### Starting the app
This app was created using Vite, so run the `npm run dev` command to start the app in the browser. 

## Navigating the app as a user
Upon opening, users are met with a landing page that provides a brief description of the app and a few at-a-glance statistics. From there, users can view sessions already stored in the database, create a new session, view graphs, or customize their subjects to personalize the app. 

### Viewing sessions
To view all logged study sessions, click on "View Sessions" on the nav bar or go to localhost:[XXXX]/sessions (note that Vite will [default to port 5173](https://vitejs.dev/config/server-options), but your address might be different depending on what is running on your machine). From that table, you can click on the "see more" button to get an expanded view with more information about each study session. 

On the expanded view, you can edit the session or delete it. This will send a PATCH or DELETE request to the json server, so your changes will be persistent. 

### Adding a new session
To add a new session, click on "Create a New Session," which will take you to a form to create a new session. All fields are required, and the app will validate your data and ensure that all fields are filled out properly.

### Graphs
This app also includes a collection of graphs to visualize your study data. To see them, click "View Graphs." You can also print or save the graphs as a JPEG or PNG file. 

### Customizing subjects
The default subjects available are Russian, coding, cybersecurity, and typing but to make this app suit your needs, you can customize the subjects listed on the create and edit forms without digging into the code. To do so, simply click on "Customize Subjects." To delete a subject, click on the trash icon next to its name. To add additional subjects, type them in the form in the "Add More" section. You can add multiple subjects at once with the "Add Another Subject" button. To POST your changes to the json server, click on the "Create Subject(s)" button. 

![Custom subject demo](https://github.com/connorpage1/study-tracker-proj/blob/main/public/add-subject-demo.gif)

## Credits
This project was created as part of the software engineering course at Flatiron School.

### Creator
This app was created by Connor Page. To see other projects, check out his GitHub [here](https://github.com/connorpage1/).

### Data and Packages
Dummy data, a logo, and favicon were generated for this app by ChatGPT. This app also relies on a number of other amazing React packages to function. The app would not be possible without:

1. [CanvasJS](https://canvasjs.com/) for graphing functionality
2. [Semantic UI](https://semantic-ui.com/) for dynamic buttons, at-a-glance statistics, styling, and more
3. [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) for form handling and form validation
4. [react-social-icons](https://www.npmjs.com/package/react-social-icons/v/5.1.1) for footer social icons
5. [Vite](https://vitejs.dev/) for project creation, initialization, and some styling
6. [dateformat](https://www.npmjs.com/package/dateformat) for user-friendly date display
7. [Hot Toast](https://react-hot-toast.com/) for dynamic user messaging
8. [React Router](https://reactrouter.com/en/main) for dynamic routing

## License
[MIT](https://opensource.org/license/mit)