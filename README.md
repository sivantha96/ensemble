# Welcome to EnsembleV1!

Hi! This is the EnsembleV1 mobile application. 

## How to setup the server

###  Server Directory Structure

```
EnsembleV1/
└── server/
    ├── app/
    │   ├── routes/
    │       ├── songRoutes.js
    │       ├── index.js
    │       └── ...
    ├── config/
    │   └── db.js
    ├── node_modules/
    │   └── ...
    ├── ensemble.sql
    └── index.js
```

All the server logics are inculded in the server folder. The db used is Mysql. Add the .sql file to your mysql creating a databse name (default **ensemble**)
Change the config/db.js file if needed. (If you want to change the usename, password,  database name )

**yarn install** and add the node packages
**yarn dev** to run the server in dev mode
**yarn start** to start the server

