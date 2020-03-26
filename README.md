# REST API implemented with nodeJS


###  Purpose of sending and receiving gps data through REST API

## Version 1.2
* CRUD Operation
  * Create - HTTP Verb : POST - Route : /users
  * Read - HTTP Verb : GET - Route : /users/:author
  * Delete - HTTP Verb : DELETE - Route : /users/:author
  * update - unimplemented
## Required json Format
```json
[
  {
    "author" : "KKS"
    "latitude" : "37.487799893872",
    "longitude" : "126.950749947430",
    "maxDistance" : "0.984596",
    "meanDistance" : "0.470540",
    "timeRatio" : "0.087210",
    "hourSpent" : "13.868333"
  }
]
```
## Technologies Used
* JavaScript
* NodeJS
* Mysql
* Used Modules
  - express (framework)
  - sequelize (ORM)
  - mysql
  - mysql2
  - body-parser
