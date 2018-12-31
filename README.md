# Neighborhood Map Project 截取项目

This code is for a project from [Udacity's Front-End Developer nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

The goal of the project was to use React, the Google Maps API, plus data from a third-party API, to create a web application from scratch. The app should display both a filterable list of results and a map view of those results, and also be responsive, accessible, and progressive.

## How to run 如何运行

This app was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app), and can be run using the standard processes for such apps:
使用步骤

1. Download or clone this repository 下载克隆此项目
2. Install: `npm install`	安装： 'npm install'
3. *Development Mode:* start the development server with `npm start`
4. *Production Mode:* create a production build with `npm run build`, which can then be run by pointing a web server at the `build` directory (for example, `serve -s build`) and opening it in a browser.
4. *如果要用ServiceWorker和离线模式，记得在Production Mode下使用，也就是说进入build路径之后再运行本地服务器

Note that the offline functionality of the app is only available in Production Mode. This caches the app boilerplate using the service worker provided with Create React App. The API data and map data are only shown when there is a network connection, to avoid violating any terms of service.
注意此应用的离线模式一定要在Production mode（生产模式）下才可以使用。这将缓存此应用的React模板在service worker上面。API数据和地图数据仅仅在有网络连接下的情况下可以使用，以避免任何协议桑的冲突。

## Additional resources used
- [react-google-maps](https://tomchentw.github.io/react-google-maps/)
- [DataSF API](https://datasf.org/opendata/)

## Contributing

## Reference