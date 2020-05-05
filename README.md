# REST API implemented with nodeJS


###  Purpose of sending and receiving gps data through REST API

* CRUD Operation
  * show list - HTTP Verb : GET - Route : /gps
  * show author - HTTP Verb : GET - Route : /gps/:author
  * delete author - HTTP Verb : DELETE - Route : /gps/:author
  * create row - HTTP Verb : POST - Route : /gps/:author
  * auth verify - HTTP Verb : POST - Route : /user/auth
  
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
  - express 
  - sequelize
  - jsonwebtoken
  - mysql
  - mysql2
  - body-parser
