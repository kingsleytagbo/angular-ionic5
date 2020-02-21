## Build Information
This project was built with: 
<br />
node -v v12.16.1
<br />
npm -v 6.13.4
<br />
ionic --version 6.1.0
<br />
angular 8.2.13

## Setup Information
### 1. Node
Download and install the latest stable Node release for Linux, Mac (my current build) or Windows from: 
https://nodejs.org/en/download/

### 2. NPM
Update to the latest NPM version: npm i -g npm

### 3. Install Ionic5
npm install -g @ionic/cli native-run cordova-res

### 4. Create Ionic5 App with Angular based on the Ionic5 Conference Template
ionic start angular-ionic5 conference --type=angular --capacitor

### 5. Add a new Angular Ionic Page named crud
1. cd angular-ionic5<br />
2. ionic generate page "pages/crud"ng --

### 6. Starting Angular Ionic5 App
1. ionic serve
<br />
2. Your app will load and run locally


## References
1. Your First Ionic Angular App: 
https://ionicframework.com/docs/angular/your-first-app
<br />
3. Scaffolding Your App: 
https://ionicframework.com/docs/building/scaffolding?utm_source=cli&utm_medium=referral&utm_campaign=CLI


## Git
This project is hosted on Git by Kingsley Tagbo at: https://github.com/kingsleytagbo/angular-ionic5

### Git Setup
1. git status<br />
2. git init<br />
3. git add --all<br />
4. git commit -am "starter angular ionic5 project" <br />
5. git remote add angular-ionic5 https://github.com/kingsleytagbo/angular-ionic5
6. git pull https://github.com/kingsleytagbo/angular-ionic5 --allow-unrelated-histories
7. git push angular-ionic5 master

## License
GNU LESSER GENERAL PUBLIC LICENSE Version 3
https://github.com/kingsleytagbo/react-typescript/blob/master/LICENSE

## Author Information
Kingsley Tagbo : http://code.full-stack.guru/ 



# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing
See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

- [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/schedule/schedule.html)

  <img src="resources/screenshots/SchedulePage.png" alt="Schedule">


- [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

  <img src="resources/screenshots/AboutPage.png" alt="Schedule">


- To see more images of the app, check out the [screenshots directory](https://github.com/ionic-team/ionic-conference-app/tree/master/resources/screenshots)!


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
