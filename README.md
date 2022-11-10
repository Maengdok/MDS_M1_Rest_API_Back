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