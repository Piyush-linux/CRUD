# ![R E S O U R C E](https://youtu.be/W1Kttu53qTg)

# Setup
```sh
> mkdir PJ
> cd PJ
> touch server.js
> npm init -y
> npm i express nodemon body-parser mongoose pug dotenv morgan axios
> packag.jso >> {"main": "server.js" , "npm start":"node server.js"}
```

# Folder Structure
```sh
# git ignore
node_modules
.env
# git push
package.json
/server.js
/public/ { css , js , img }
/views/ {index.pug , partial(header.pug , footer.pug) }
/server
    /controller
    /model
    /database
    /routes
    /services
```


### 1. Creating Server
    - init exp with env.PORT

### 2. Middleware security, client, request, static

### 3. HTML Template 
    - header
    - add user > form(id, name, email, gender)
    - All user : table
        = usr + edit + del

### 4. load routes
1. routes/router.js
```sh
> GET / 
> GET /adduser
> GET /updateuser
```
2. /services/render.js > res.render( function )
3. /server.js > use router

### 5. db connect
- server/connect.js > connect(db) with mongoose
- .env security key : usr:pasw?dbname

### 6 API
1. crt Rules
    - /modl/model.js : exp>rules
2. crt CRUD opr
    - /controller/controller.js : req rules > export.CRUD function
    - /router/router.js > router.request(path,controller.CRUD)
    1. create
        - get data
        - new db then save
        - redirect to /
    2. read
        - get all data
        - render / with data
    3. update
    4. delete
