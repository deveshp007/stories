# Project: Stories - Terribly Tiny Tales User Profile Page

![Terribly Tiny Tales Logo](https://www.terriblytinytales.com/img/home/ttt.svg)

## Description

**Stories** is a user profile page for Terribly Tiny Tales, showcasing a beautifully designed UI layout. This project is implemented using React.js, CSS, and Bootstrap.

## Features

- Responsive design: The user profile page is designed to adapt to various screen sizes, providing a seamless experience on both desktop and mobile devices.
- Post Display: The posts on the user profile page are populated dynamically from the `Posts` component.

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
