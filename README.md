# MDS M1 - Rest API Back End
![NodeJS19.0.1](https://img.shields.io/badge/NodeJs-v19.0.1-%236EA660)
![Docker4.13.1](https://img.shields.io/badge/Docker-latest-%23003F8C)
![MongoDB](https://img.shields.io/badge/MongoDB-%20-%23023430)

## Packages
![axios1.1.3](https://img.shields.io/badge/Axios-%5E1.1.3-%23FF0000)
![bcrypt5.1.0](https://img.shields.io/badge/BCrypt-%5E5.1.0-%23FF6600)
![cors2.8.5](https://img.shields.io/badge/Cors-%5E2.8.5-%23FFFF00)
![express4.18.2](https://img.shields.io/badge/Express-%5E4.18.2-Green)
![jsonwebtoken8.5.1](https://img.shields.io/badge/JsonWebToken-%5E8.5.1-%2300FFFF)
![mongoose6.7.2](https://img.shields.io/badge/Mongoose-%5E6.7.2-%230000FF)
![nodemon2.0.20](https://img.shields.io/badge/Nodemon-%5E2.0.20-%23800080)

## URL
```
127.0.0.1:3000
```

## Create .env file
Before launching docker
```bash
$ touch .env
```

Set .env variables
```
# .env
JWT_KEY='SAY_NO_TO_JAVASCRIPT_AS_BACK_END'
CORS='https://localhost:3000'
```

## Launch docker
```bash
$ docker-compose up
```

## Access to docker
```bash
$ docker exec -ti container bash
```

## Postman Collection
[Postman Collection](https://maengdok.postman.co/workspace/BETC-Workspace~868f2fae-8182-4ab2-88c8-6ac3f5ac08a2/collection/16576874-3e931920-e1a9-4b29-a849-e9d7fdcd6a0b?action=share&creator=16576874)

## API

### Post

#### Get Posts

| URL                  | Authorization | Method |
|----------------------|---------------|--------|
| localhost:3001/posts | None          | GET    |

- Payload

None

- Response
```json
[
    {
        "_id": "636cba81f30b0d6ce8819657",
        "title": "article 1",
        "content": "Hello",
        "created_at": "2022-11-10T08:46:57.484Z",
        "__v": 0
    },
    { ... }
]
```

#### Get a Post

| URL                           | Authorization | Method |
|-------------------------------|---------------|--------|
| localhost:3001/posts/:post_id | None          | GET    |

- Payload

None

- Response
```json
{
    "_id": "636cba81f30b0d6ce8819657",
    "title": "article 1",
    "content": "Hello",
    "created_at": "2022-11-10T08:46:57.484Z",
    "__v": 0
}
```

#### Add a Post

| URL                  | Authorization | Method |
|----------------------|---------------|--------|
| localhost:3001/posts | JWT Token     | POST   |

- Payload
```json
{
    "title": "article 1",
    "content": "Hello"
}
```
- Response
```json
{
  "title": "article 1",
  "content": "Hello",
  "_id": "636cdfaf8464a884a851a85b",
  "created_at": "2022-11-10T11:25:35.178Z",
  "__v": 0
}
```
#### Update a Post

| URL                           | Authorization | Method |
|-------------------------------|---------------|--------|
| localhost:3001/posts/:post_id | JWT Token     | PUT    |

- Payload
```json
{
    "title": "update",
    "content": "Hi"
}
```
- Response
```json
{
  "_id": "636cdfaf8464a884a851a85b",
  "title": "update",
  "content": "Hi",
  "created_at": "2022-11-10T11:25:35.178Z",
  "__v": 0
}
```

#### Delete a Post

| URL                           | Authorization | Method |
|-------------------------------|---------------|--------|
| localhost:3001/posts/:post_id | JWT Token     | DELETE |

- Payload

None

- Response
```json
{
  "message": "Article supprimé"
}
```
---

### Comment

#### Get Comments

| URL                                    | Authorization | Method |
|----------------------------------------|---------------|--------|
| localhost:3001/posts/:post_id/comments | None          | GET    |

- Payload

None

- Response
```json
[
    {
      "_id": "636ce2b18464a884a851a864",
      "name": "toto",
      "message": "mon message",
      "post_id": "636cba81f30b0d6ce8819657",
      "created_at": "2022-11-10T11:38:25.878Z",
      "__v": 0
    },
    { ... }
]
```
#### Get a Comment

| URL                                  | Authorization | Method |
|--------------------------------------|---------------|--------|
| localhost:3001/comments/:comment_id  | None          | GET    |

- Payload

None

- Response
```json
{
  "_id": "636ce2b18464a884a851a864",
  "name": "toto",
  "message": "mon message",
  "post_id": "636cba81f30b0d6ce8819657",
  "created_at": "2022-11-10T11:38:25.878Z",
  "__v": 0
}
```
#### Add a Comment

| URL                                    | Authorization | Method |
|----------------------------------------|---------------|--------|
| localhost:3001/posts/:post_id/comments | None          | POST   |

- Payload
```json
{
  "name": "toto",
  "message": "mon message"
}
```

- Response
```json
{
  "_id": "636ce2b18464a884a851a864",
  "name": "toto",
  "message": "mon message",
  "post_id": "636cba81f30b0d6ce8819657",
  "created_at": "2022-11-10T11:38:25.878Z",
  "__v": 0
}
```

#### Update a Comment

| URL                                 | Authorization | Method |
|-------------------------------------|---------------|--------|
| localhost:3001/comments/:comment_id | None          | PUT    |

- Payload
```json
{
  "name": "blabla",
  "message": "blablou"
}
```

- Response
```json
{
  "_id": "636ce2b18464a884a851a864",
  "name": "blabla",
  "message": "blablou",
  "post_id": "636cba81f30b0d6ce8819657",
  "created_at": "2022-11-10T11:38:25.878Z",
  "__v": 0
}
```

#### Delete a Comment

| URL                                 | Authorization | Method |
|-------------------------------------|---------------|--------|
| localhost:3001/comments/:comment_id | None          | DELETE |

- Payload

None

- Response
```json
{
  "message": "Commentaire supprimé"
}
```
---

### User

#### Register

| URL                          | Authorization | Method |
|------------------------------|---------------|--------|
| localhost:3001/user/register | None          | POST   |

- Payload
```json
{
  "email": "test5@test.fr",
  "password": "admin"
}
```

- Response
```json
{
  "message": "Utilisateur créé : test5@test.fr"
}
```

#### Login

| URL                       | Authorization | Method |
|---------------------------|---------------|--------|
| localhost:3001/user/login | None          | POST   |

- Payload
```json
{
  "email": "test3@test.fr",
  "password": "admin"
}
```

- Response
```json
{
  "userData": {
    "id": "636bb8175c3ea4befbdf84a1",
    "email": "test3@test.fr",
    "role": "ROLE_ADMIN"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJiODE3NWMzZWE0YmVmYmRmODRhMSIsImVtYWlsIjoidGVzdDNAdGVzdC5mciIsInJvbGUiOiJST0xFX0FETUlOIiwiaWF0IjoxNjY4MDc5NTI1LCJleHAiOjE2NzA2NzE1MjV9.XCZ99EoncJ3h8hS8h2m-ImRvaNYZKrcM8PRlrvY6ysg"
}
```

#### Get Users

| URL                      | Authorization | Method |
|--------------------------|---------------|--------|
| localhost:3001/user/list | None          | POST   |

- Payload

None

- Response
```json
[
  {
    "role": "ROLE_USER",
    "_id": "636bb0c8b9f1fa32e4f8ac18",
    "email": "test@test.fr",
    "password": "admin",
    "__v": 0
  },
  { ... }
]
```

#### Update User's Role

| URL                                      | Authorization | Method |
|------------------------------------------|---------------|--------|
| localhost:3001/user/update_role/:user_id | None          | PATCH  |

- Payload

```json
{
  "role": "ROLE_ADMIN"
}
```
- Response
```json
{
  "_id": "636bb0c8b9f1fa32e4f8ac18",
  "email": "test@test.fr",
  "role": "ROLE_ADMIN"
}
```