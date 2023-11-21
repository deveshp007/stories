<p align="center">
  <img src="https://www.terriblytinytales.com/img/home/ttt.svg" align="center" width="128" height="128" />
<p>

<h1 align="center"> Stories - Terribly Tiny Tales User Profile Page </h1>

## Description

**Stories** is a user profile page for Terribly Tiny Tales, showcasing a beautifully designed UI layout. This project is implemented using React.js, CSS, and Bootstrap.

Link to the live deployment: [https://ttt-stories-dp.netlify.app/](https://ttt-stories-dp.netlify.app/)

## Features

- Responsive design: The user profile page is designed to adapt to various screen sizes, providing a seamless experience on both desktop and mobile devices.
- Post Display: The posts on the user profile page are populated dynamically from the `Posts` component.

## Components

The following components are used in the project:

- `App`: The main component that renders the entire page.

- `TopBar`: The top bar of the page that contains the Terribly Tiny Tales logo, STORIES a text and a Courses Button.

- `UserInfo` : The component that renders the user's cover picture, profile picture, name, and bio.

- `Posts`: The component that renders the posts on the page.

## Posts Data

The posts displayed on the page are generated using the following `Posts` function:

```jsx
const Posts = () => {
  const posts = [
    // ... (list of post objects)
  ];

  return (
    // ... (JSX rendering posts)
  );
};

export default Posts;
```

## Packages Used

The following packages are used in the project:

- [react](https://www.npmjs.com/package/react): A JavaScript library for building user interfaces.

- [react-icons](https://www.npmjs.com/package/react-icons): A collection of icons for React.js.

- [bootstrap](https://www.npmjs.com/package/bootstrap): A CSS framework for developing responsive, mobile-first websites.

## How to Run the App

To run the React.js app locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/deveshp007/stories.git
```

2. Navigate to the project directory.

```bash
cd stories
```

3. Install the dependencies.

```bash
npm install
```

4. Run the app.

```bash
npm start
```

5. Open the app in your browser.

```bash
http://localhost:3000
```
