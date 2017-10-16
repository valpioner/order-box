# VP (Valpioner) project

This is MEAN stack client-server app

Folder `vp` (root): server app (NodeJS)

Folder `angular-src`: client app (Angular-CLI)

You can run client separately on 4200 or build it and run on server 3001.

Server uses MongoDB.

## How to install & start MongoDB

Install [MongoDB](https://www.mongodb.com/download-center#community)
It will install into `C:\Program Files\MongoDB\Server\3.4\bin`

Create folder for all databases at `C:\data\db` (Must have to store db's)

Start MongoDB Server: run `mongod` from `cd C:\Program Files\MongoDB\Server\3.4\bin`

You can start MongoDB sheell: run `mongo` from `cd C:\Program Files\MongoDB\Server\3.4\bin`

Now your db is up and runing.

## How to start server

Install deps: run `npm i` from `vp` (root folder)

Start server: run `npm start` from `vp` (root folder)

Server is running on port 3001

## How to start client

Install deps: run `npm i` from `vp\angular-src`

Start client: rung `ng serve -o` from `vp\angular-src`

Client is running on port 4200

## How to build client and run on server

Build client: `ng build` from `vp\angular-src`

It will build bundles into `public` folder

Restart server, it will auto run files from `public` folder on port 3001
