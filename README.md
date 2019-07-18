# User Management Service
This service acts as the user management service for the ecosystem of micro-services that we developed.

#### MongoDB Setup
Assuming you have created the data/db directory under bin after install.

Open a new terminal for your mongo server
Change directory to <mongodb-install-directory>/bin directory and run the command to start mongo daemon
```text
cd /usr/local/mongodb/bin
sudo ./mongod
```

Also start a mongodb console to execute some queries
```sh
mongo
```
#### Build Project 
```sh
npm install
```

#### Run the Project 
```sh
node app.js
```

#### Swagger Documentation
```sh
http://localhost:1234/api-docs
```
