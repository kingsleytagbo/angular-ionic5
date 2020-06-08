# How To Build Your Website in Angular (9) and Ionic (5)

## Angular 9 Upgrade
### Check Angular Version
ng --version  
### Upgrade Angular Version
npm i -g @ionic/cli  <br />
install -g @angular/cli --save  <br />
npm install @ionic/angular@latest --save  <br />
ng update @angular/core@latest @angular/cli@latest --allow-dirty  <br />

## Angular 9 Upgrade Errors
run ionic build   
## # Change Config Files after Upgrade
angular.json - change aot : true to "aot": false  <br />
- tsconfig.json - change from to "target": "es2015 to "target": "es5"  <br />

## Build Information (Angular 9)
ionic --version 6.10.0 <br />
<br />
### ng --version <br />

ngular CLI: 9.1.7  <br />
Node: 12.16.1  <br />
OS: darwin x64 <br />

Angular: 9.1.9  
... common, compiler, compiler-cli, core, forms  <br />
... language-service, platform-browser, platform-browser-dynamic  <br />
... router, service-worker  <br />
Ivy Workspace: Yes  <br />

-----------------------------------------------------------
@angular-devkit/architect         0.803.26  <br />
@angular-devkit/build-angular     0.901.7  <br />
@angular-devkit/build-optimizer   0.901.7  <br />
@angular-devkit/build-webpack     0.901.7  <br />
@angular-devkit/core              9.1.7  <br />
@angular-devkit/schematics        9.1.7  <br />
@angular/cli                      9.1.7  <br />
@ngtools/webpack                  9.1.7 <br /> 
@schematics/angular               8.3.26  <br />
@schematics/update                0.901.7  <br />
rxjs                              6.5.5  <br />
typescript                        3.8.3  <br />
webpack                           4.42.0  <br />


## Build Information (Angular 8)
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
2. ionic generate page "pages/crud"

### 6. Starting Angular Ionic5 App
1. ionic serve
<br />
2. Your app will load and run locally


## References
1. Your First Ionic Angular App: 
https://ionicframework.com/docs/angular/your-first-app
<br />
2. Scaffolding Your App: 
https://ionicframework.com/docs/building/scaffolding?utm_source=cli&utm_medium=referral&utm_campaign=CLI
<br />
3. Full Stack Guru
http://code.full-stack.guru/


## Git
This project is hosted on Git by Kingsley Tagbo at: https://github.com/kingsleytagbo/angular-ionic5

### Git Setup
1. git status<br />
2. git init<br />
3. git add --all<br />
4. git commit -am "starter angular ionic5 project" <br />
5. git remote add angular-ionic5 https://github.com/kingsleytagbo/angular-ionic5
6. git pull https://github.com/kingsleytagbo/angular-ionic5 --allow-unrelated-histories
7. git push angular-ionic5 master / git push angular-ionic5 features/security

## NgRx
1. npm install @ngrx/schematics --save-dev 
2. npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save

## License
GNU LESSER GENERAL PUBLIC LICENSE Version 3
https://github.com/kingsleytagbo/react-typescript/blob/master/LICENSE

## Author Information
Kingsley Tagbo : http://code.full-stack.guru/ 


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

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
