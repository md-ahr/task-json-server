# task-json-server

Example in users api with json-server by Abdul Halim

# Installation

```bash
git clone https://github.com/md-ahr/task-json-server.git
cd task-json-server
yarn add json-server
yarn start
```

Now opens:

- http://localhost:9000

You now have a full REST API. Test with POSTMAN or any other REST Client):

Retrieve all (GET):

```bash
GET http://localhost:3000/data
```

Retrieve one (GET):

```bash
GET http://localhost:3000/data/1
```

Add a user (POST):

```bash
POST http://localhost:3000/data name="ahr" sectors=["abc", "xyz"]
```

Update user (PUT):

```bash
PUT http://localhost:3000/todos/3 name="ahr" sectors=["abc", "xyz"]
```

Delete user (DELETE):

```bash
DELETE http://localhost:3000/data/1
```


# Links

- https://github.com/typicode/json-server
- Jswon view Chrome plugin: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
- GitHub Profile: https://github.com/md-ahr