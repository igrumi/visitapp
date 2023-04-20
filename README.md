
## Instructions

### 1. Install node_modules using __npm__ 
```
npm install
```

### 2. Rename __.env.template__ file as __.env__ and set __PORT__
```
.env >

PORT=5001
```

### 3. Run your app using the following command
```
npm run dev
```


### __Project structure__

| Folder | Content |
| ------ | ------ |
| public | All static files like: __css, js and images__ |
| src | Core folder |
| controllers | Business logic for your app |
| database | database config and utils |
| routes | routes access for API and web views |
| utils | __functions/procedures__ that you should use in your controllers |
| views | __ejs__ views provided by the server to the browser|
| app.js | express config for __routes, cookies, etc.__ |
| index.js | file that starts the app |
| .env | environment config for app, __do not provide this file. Include it in .gitignore__|
| package.json | project description and dependencies |