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


1. Creating Server
    - init exp with env.PORT
2. Middleware security, client, request, static
3. HTML Template 
    - header
    - add user > form(id, name, email, gender)
    - All user : table
        = usr + edit + del