<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</div>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/icanseetime/genre-checker-react">
    🎶
  </a>

  <h3 align="center">Genre Checker || React version</h3>
  <p align="center">
    A website using the Spotify Web API to search for artists and then display their genres.
    <br />
    <a href="https://github.com/icanseetime/genre-checker-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://genre-checker.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/icanseetime/genre-checker-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/icanseetime/genre-checker-react/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot](./public/screenshot.png)

[The original "Genre Checker" project](https://github.com/imgjeits/genre-checker) was created so that I could learn about APIs. This version is focused on learning how to do it while using the React framework. You are free to fork and reuse it as you please.

### Built With

-   [React](https://github.com/topics/react)
-   [CSS](https://github.com/topics/css)
    -   Skeleton (responsive CSS boilerplate)
    -   Normalize.css (browser reset)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Navigate to a folder where you would like to store the repo
2. Clone the repo
    ```sh
    git clone https://github.com/icanseetime/genre-checker-react.git
    ```
3. Install dev dependencies by running either either `npm install` or `yarn install` in the terminal

### Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in with your Spotify account.
2. Create an app and note the client ID and client secret for the app
3. Create a _.env_ file and add

    ```
    REACT_APP_CLIENT_ID=<Your Client ID from Spotify>
    REACT_APP_CLIENT_SECRET=<Your Client Secret from Spotify>
    ```

4. Start the project by entering `yarn start` or `npm run start` into the terminal.
5. Go nuts.

<!-- USAGE EXAMPLES -->

## Usage

The site is pretty straightforward. You search for an artist name, and the site displays up to 20 of the more popular artists from the Spotify API. You can then click on the name or picture of one of these artists, and the site will display the artist along with their genres from Spotify. You can also then click the artist name, which will take you to the artist page on Spotify (web or app, depending on your own settings).

_For more information, please contact me directly._

<!-- CONTRIBUTING -->

## Contributing

You are free to copy and use this as you please. If you find any bugs or issues, I would really appreciate it if you either [let me know](https://github.com/icanseetime/genre-checker-react/issues/new) or you fixed it and created a pull request 😀

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Ida - imgjeits@stud.ntnu.no

Project Link: [https://github.com/icanseetime/genre-checker-react](https://github.com/icanseetime/genre-checker-react)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
-   [Normalize.css](https://necolas.github.io/normalize.css/)
-   [Skeleton](http://getskeleton.com/)
-   [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/icanseetime/genre-checker-react.svg?style=for-the-badge
[contributors-url]: https://github.com/icanseetime/genre-checker-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/icanseetime/genre-checker-react.svg?style=for-the-badge
[forks-url]: https://github.com/icanseetime/genre-checker-react/network/members
[stars-shield]: https://img.shields.io/github/stars/icanseetime/genre-checker-react.svg?style=for-the-badge
[stars-url]: https://github.com/icanseetime/genre-checker-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/icanseetime/genre-checker-react.svg?style=for-the-badge
[issues-url]: https://github.com/icanseetime/genre-checker-react/issues
