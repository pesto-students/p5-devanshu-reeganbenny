# Wealth API

## Project source code link

### 1. Github

    https://github.com/reeganbenny/BudgetAPI

## Run on local Computer

Follow the steps to setup the project in local machine.

1.  Clone the repository
2.  Open terminal in the project folder.
3.  Run `npm install`
4.  Run `npm start`.

## Features

### Create User API

#### API

    http://localhost:3000/user/signup

    {
        "email" : "test@test.com",
        "password" : "qwerty"
    }

#### Response

    {
        "message": "User created"
    }

### login User API

#### API

    http://localhost:3000/user/login

#### Response

    {
        "message": "Auth Successfull",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySWQiOiI2M2E2ODM2YTY2MTg0YzYzNWJjZjhjZTgiLCJpYXQiOjE2NzE4NTcwMDgsImV4cCI6MTY3MTg2MDYwOH0.ReR0KsyQVC6Vae03jGjCkmupBR7ODauWoeZ-ZOr9Cd8"
    }

### Get all Asset from logged In User API

#### API (POST)

    http://localhost:3000/assets/addAssets

#### JSON Data

    {
        "assetname" : "Stark cars",
        "description" : "Inovative cars",
        "totalCost" : 100,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySWQiOiI2M2E2ODM2YTY2MTg0YzYzNWJjZjhjZTgiLCJpYXQiOjE2NzE4NTcwMDgsImV4cCI6MTY3MTg2MDYwOH0.ReR0KsyQVC6Vae03jGjCkmupBR7ODauWoeZ-ZOr9Cd8"
    }

#### Response

    {
        "meg": "Asset  Added!",
        "AssetId": "63a707c1e693ea4b55610c94"
    }

#### API (GET)

    http://localhost:3000/assets/addAssets

#### JSON Data

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXN0LmNvbSIsInVzZXJJZCI6IjYzYTcwMGFlMGVjNWUxNjZjZTU0NTE0NSIsImlhdCI6MTY3MTg4OTA4NSwiZXhwIjoxNjcxODkyNjg1fQ.uQ_jEslPWYtxiUDfE84v4iz1wXkseR9ZetS9okK40Xc"
    }

#### Response

    {
        "items": [
            {
                "assetItemId": {
                    "_id": "63a707c1e693ea4b55610c94",
                    "assetname": "Stark cars",
                    "description": "Inovative cars",
                    "totalCost": 100,
                    "__v": 0
                },
                "_id": "63a707c1e693ea4b55610c97"
            },
            {
                "assetItemId": {
                    "_id": "63a70963f37c1d8c221b64a5",
                    "assetname": "Stark Weapons",
                    "description": "Only until world find its peace",
                    "totalCost": 100,
                    "__v": 0
                },
                "_id": "63a70963f37c1d8c221b64a9"
            }
        ]
    }
