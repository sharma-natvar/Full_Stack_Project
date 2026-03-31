Passwords are secured using bcryptjs.

# Backend API Documentation

## Base URL

Base URL: `localhost:8000/v1`


## User Endpoints

### User Registration

- Endpoint: `/user/register`
- Method: `POST`
- Description: Registers a new user.
- Body:
  ```json
  {
      "userName": "radhey",
      "email": "radhey@gmail.com",
      "password": "radhey123"
  }


### User Login

- URL: `/user/login`
- Method: `POST`
- Description: Logs in a user.
- Body:
  ```json
  {
    "email": "shyam@gmail.com",
    "password": "shyam123"
  }





## Todo List API Endpoints


### Get Todo List by User ID

- URL: `/list/get/:userId`
- Method: `GET`
- Description: Retrieves todo list items for a specific user.
- Request Body: N/A
- Response Body Format:
  ```json
  {
    "message": "get successfully",
    "data": [
      {
        "_id": "65e85e52774c092c069f7aed",
        "title": "kya baat h",
        "desc": "hay pta bhai",
        "userID": "65e8342293ca4af11d0aa707",
        "__v": 0
      }
    ]
  }



### Create ToDo List

- URL: `/list/post`
- Method: `POST`
- Description: Creates a new list.
- Body:
  ```json
  {
    "title": "js",
    "desc": "bolo pta bhai",
    "userID": "65e86ff832bfa3197ebf7b86"
  }




### Update ToDo list

- URL: `/list/update/:id`
- Description: Updates an existing user.
- Request Type: `PUT`
- Body Format:
  ```json
  {
      "title": "hahaha",
      "desc": "hay pta bhai",
      "userID": "65e8342293ca4af11d0aa707"
  }



### Delete User List

- URL: `/list/delete/:id`
- Description: Deletes a user list.
- Request Type: `DELETE`








# frountend