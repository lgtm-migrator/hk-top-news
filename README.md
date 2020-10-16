<p align="center">
    <img alt="Deno Wikipedia CLI" src="./public/static/media/touch-icons/apple-touch-icon-1024x1024.png" width="150" />
</p>
<h1 align="center">Hong Kong Top News PWA</h1>
<p align="center">
    A Progressive Web Application to fetch Top News in Hong Kong. News results are from <a href="https://newsapi.org/">News API</a>.
</p>
<p align="center">
    <a href="https://reactjs.org/"><img height="20" src="https://img.shields.io/badge/made_with-React-61dafb.svg?logo=react&style=flat" alt="Made with React"></a>
    <a href="https://nodejs.org/en/"><img height="20" src="https://img.shields.io/badge/Node.js-10.16-026e00.svg?logo=Node.js&logoColor=white&style=flat" alt="Node.js"></a>
    <a href="https://yarnpkg.com/"><img height="20" src="https://img.shields.io/badge/Yarn-1.17.3-25799f.svg?logo=Yarn&logoColor=white&style=flat" alt="Yarn"></a>
    <a href="https://eslint.org/"><img height="20" src="https://img.shields.io/badge/code_style-ESLint-5b5be0.svg?logo=eslint&style=flat" alt="ESLint"></a>
    <a href="https://conventionalcommits.org"><img height="20" src="https://img.shields.io/badge/conventional_commits-1.0.0-fa6673.svg?style=flat" alt="Conventional Commits"></a>
    <a href="./LICENSE"><img height="20" src="https://img.shields.io/github/license/icelam/hk-top-news?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAAC5UlEQVRIDd2WPWtVQRCGby5pVASLiGghQSxyG8Ui2KWwCfkH9olY2JneQkiR0oCIxH/gB+qVFDYBIWBAbAIRSbCRpLXwIxLiPT7vnNm9e87ZxJtUwYH3zO47Mzv7Mbv3tlo5KYriGtgAJ81OY1ENdG/YI4boFEOI911BXgY/pdtwGuAtXpvmB1tAXHDnUolE5urkPOQo6MqA3pXWmJJL4Bb4rQ7yEYfxsjnIF29NJIoNC6e5fxOL/qN+9KCz7AaLpN8zI415N2i2EptpGrkRIjGeAuvR6IY1hSFLFUOug9Ms2M7ZxIUNytm1mnME186sdI2BOCwAyQMg54ugzSmKmwbPwSbolKH+hbAtQdsOoF+BsF3anUVwBdiOWRidFZDKTTrKEAJTm3GVrGkHzw/uPZbyx7DNNLfB7KGmRsCcr+/gjaiPSpAOTyX9qG4L/XBDdWXDDf1M+wtQ5fwCOtcb4Dto6VpLmzByB6gqdHbTItGSJdAGqibJQhmRfCF7IN4beSF2G9CqnGXQrxofXU+EykllNeoczRgYytDKMubDIRK0g5MF8rE69cGu0u9nlUcqaUZ41W0qK2nGcSzr4D2wV9U9wxp1rnpxn8agXAOHMQ9cy9kbHM7ngY4gFb03TxrO/yfBUifTtXt78jCrjY/jgEFnMn45LuNWUtknuu7NSm7D3QEn3HbatV1Q2jvgIRf1sfODKQaeymxZoMLlTqsq1LF+HvaTqQOzEzUCfni0/eNIA+DfuE3KEtbsegckGmMktTXacnBHPVe687ugkpT+axCkkhBSyRSjWI2xf1KMMVmYiQdWksK9BEFiQoiYLIlvJA3/zeTzCejP0RbB6YPbhZuB+0pR3KcdX0LaJtju0ZgBL8Bd+sbz2QIaU2OfBX3BaQLsgZysQtrk0M8Sh1A0w3DyyYnGnAiZ4gqZ/TvI2A8OGd1YIbF7+F3P+B6dYpYdsJNZgrjO0UdOIhmom0nwL0pnfnzkL1803jAoKhvyAAAAAElFTkSuQmCC" alt="License"></a>
    <a href="https://lgtm.com/projects/g/icelam/hk-top-news/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/icelam/hk-top-news.svg?logo=lgtm"/></a>
</p>

## Development Notees ##

### Workbox ###
To cache third party responses and image assets, `workbox-build` was useed to override the default service worker generated by `create-react-app`, which will be run when building for production environment. In other words, service worker does not work in development mode. Please build the project to test.

### API and API Key ###
* A simple PHP wrapper is written to secure the API key from frontend
* The PHP wrapper can be found inside `public/api` folder
* You will need to register a News API key and add it to `.env` file's `NEWS_API_KEY` variable

### Node version ###
* Developed using Node.js 10.16

### Development ###
* `npm start`

### Build production ###
* `npm run build`

### Ideas ###
* Background sync
* Notification when there is update after background sync ([Reference](https://pwa-workshop.js.org/5-background-sync/#background-synchronization))
* Detect for device offline and inform user they are reading cached results
* Bookmark function (i.e. Local Storage)
