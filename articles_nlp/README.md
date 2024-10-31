<a name="readme-top"></a>

# Evaluate a News Article with Natural Language Processing

This project is part of Udacity's Front-End Web Developer Nanodegree.

The aim is to create a web application that evaluates news articles using Natural Language Processing (NLP) techniques.
The application allows users to input a URL and receive a score that assesses the article's sentiment and reliability.

It focuses on enhancing skills in web development with HTML, Scss, JavaScript, Node.js, and utilizing NLP libraries.

## Table of Content

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Used](#tech-used)
- [Author](#author)

## Features

- **Article Evaluation:** Users can input a news article URL to analyze its content and receive an evaluation score based on sentiment analysis and fact-checking.

- **Dynamic Feedback:** The application provides immediate feedback on the article's reliability and sentiment, improving user engagement.

- **User-Friendly Interface:** The design is intuitive, allowing users to easily navigate through the evaluation process.

- **Responsive Design:** The layout adapts to various screen sizes, ensuring a consistent user experience on both mobile and desktop devices.

## Project Structure

```
.
├── babel.config.json
├── package.json
├── package-lock.json
├── README.md
├── webpack.dev.js
├── webpack.prod.js
└── src
    ├── client
    │   ├── index.js
    │   ├── js
    │   │   ├── formHandler.js
    │   │   ├── uriValidator.js
    │   │   └── __tests__
    │   │       ├── formHandler.test.js
    │   │       └── uriValidator.test.js
    │   ├── styles
    │   │   ├── _*.scss
    │       └── main.scss
    │   └── views
    │       └── index.html
    └── server
        ├── analyze.js
        └── index.js
```

## Tech Used

- **HTML5:** For structuring the content on the webpage.
- **SCSS:** For advanced styling and ensuring responsive design, enabling nested styles and variables.
- **JavaScript:** For DOM manipulation, handling user interactions, and adding dynamic functionality.
- **Node.js:** For managing project dependencies and running the development server.
- **Webpack:** For bundling JavaScript files, optimizing assets, and supporting SCSS compilation.

## Author

**Yousef Saeed**:
[GitHub](https://github.com/uosyph)
[LinkedIn](https://linkedin.com/in/uosyph)
[X](https://twitter.com/uosyph)

<p align="right"><a href="#readme-top">Back to Top</a></p>
