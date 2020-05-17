# Kuma Backend
![](https://img.shields.io/github/stars/kubil-ismail/kuma_backend) ![](https://img.shields.io/github/forks/kubil-ismail/kuma_backend) ![](https://img.shields.io/github/tag/kubil-ismail/kuma_backend) ![](https://img.shields.io/github/release/kubil-ismail/kuma_backend) ![](https://img.shields.io/github/issues/pandaokubil-ismail/kuma_backend)

Kuma Backend is an Kuma Book API. It's built on the Node Js, uses Mysql & Express.

## Installation

Just clone this repo to your local repo

```bash
git clone https://github.com/kubil-ismail/kuma_backend.git
```

## Usage
Setting your dotenv file

```env
APP_URL=
APP_PORT=
APP_KEY=
APP_PIN=

APP_EMAIL=
APP_EMAIL_PASS=
APP_EMAIL_SERVICE=

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```
run the server
```js
nodemon
```
## HTTP Response
* 200 ```OK``` - the request was successful.
* 201 ```Create Success``` - the request was successful.
* 400 ```Bad Request``` - You've made an invalid request or to an invalid endpoint.
* 401 ```Unauthorized``` - The request has not been applied because it lacks valid authentication credentials for the target resource.
* 404 ```Not Found``` - Kuma Book responded with a 404
* 422 ```Unprocessable Entity``` - Unable to process the contained instructions

## JSON Response
This is a typical response
```json
{
    "status": false,
    "message": "Resource does not exist",
    "data": [],
    "option": []
}
```

* ```status``` - Status response returned
* ```message```- Appropriate message from the REST API
* ```data``` - Return data from database
* ```options``` - Return optional data Like pagination or etc

# Routes


## Auth Routes

- **POST** Login Endpoint Path:```/login/```
- **POST** Sign In Endpoint Path:```/signin/```
- **POST** Activate Endpoint Path:```/activate/```

## Author Routes

- **GET** Author Endpoint Path: ```/author[/{id}]```
- **POST** Author Endpoint Path:```/author/```
- **PATCH** Author Endpoint Path: ```/author/{id}```
- **DELETE** Author Endpoint Path: ```/author/{id}```

## Book Routes

- **GET** Book Endpoint Path: ```/book[/{id}/{?search=[keyword]}&{?sort=1}]```
- **POST** Book Endpoint Path:```/book/```
- **PATCH** Book Endpoint Path: ```/book/{id}```
- **PATCH** Book Cover Endpoint Path: ```/book/cover/{id}```
- **DELETE** Book Endpoint Path: ```/book/{id}```

## Favorite Routes

- **GET** Favorite Endpoint Path: ```/favorite[/{id}]```
- **POST** Favorite Endpoint Path:```/favorite/```
- **PATCH** Favorite Endpoint Path: ```/favorite/{id}```
- **DELETE** Favorite Endpoint Path: ```/favorite/{id}```

## Genre Routes

- **GET** Genre Endpoint Path: ```/genre[/{id}]```
- **POST** Genre Endpoint Path:```/genre/```
- **PATCH** Genre Endpoint Path: ```/genre/{id}```
- **DELETE** Genre Endpoint Path: ```/genre/{id}```

## Review Routes

- **GET** Review Endpoint Path: ```/review[/{id}]```
- **POST** Review Endpoint Path:```/review/```
- **PATCH** Review Endpoint Path: ```/review/{id}```
- **DELETE** Review Endpoint Path: ```/review/{id}```

## Profile Routes

- **GET** Profile Endpoint Path: ```/profile[/{id}]```
- **POST** Profile Endpoint Path:```/profile/```
- **PATCH** Profile Endpoint Path: ```/profile/{id}```
- **DELETE** Profile Endpoint Path: ```/profile/{id}```

## Sosmed Routes

- **GET** Sosmed Endpoint Path: ```/sosmed[/{id}]```
- **POST** Sosmed Endpoint Path:```/sosmed/```
- **PATCH** Sosmed Endpoint Path: ```/sosmed/{id}```
- **DELETE** Sosmed Endpoint Path: ```/sosmed/{id}```

## License
[MIT](https://choosealicense.com/licenses/mit/)
