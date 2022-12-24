# Wealth API

## Project source code link

### 1. stackblitz

### 2. Github

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

    {
        "message": "Auth Successfull",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySWQiOiI2M2E2ODM2YTY2MTg0YzYzNWJjZjhjZTgiLCJpYXQiOjE2NzE4NTcwMDgsImV4cCI6MTY3MTg2MDYwOH0.ReR0KsyQVC6Vae03jGjCkmupBR7ODauWoeZ-ZOr9Cd8"
    }
