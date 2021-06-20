# webpage

## Setup Instructions

### Services

- node
- npm
- yarn

### Install Dependencies

1. Local - `npm install` or `yarn`
2. Server - `npm install` or `yarn`


## Local Build and Run

```shell
# enter project folder
cd webpage
# if use new package
yarn add `package name` or npm install `package name`
# run(it depends on which website you want to run)
APP_DIR=savvypro npm run dev or APP_DIR=savvyuni npm run dev
```

## Server Build and Run

```shell
# enter project folder
cd webpage
# update code form master branch
git pull
# if use new package
yarn
# build(it depends on which website you want to update)
APP_DIR=savvypro npm run build or APP_DIR=savvyuni npm run build
# run
pm2 restart all
pm2 save
```

## Connect to Service

Local - http://localhost:3000

Server - https://savvypro.ca
Server - https://savvyuni.com

