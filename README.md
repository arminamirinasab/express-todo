# Users Manager API with Express.js

## Overview
The Users Manager API is a simple application built with Node.js and Express.js that allows for the management of user data.

## Features
- User Registration: Admins can add new users to register by providing their details, such as name, family and etc.

- User Deletion: Admins can delete user accounts.

- Data Validation: Utilizes Fastest Validator to ensure that all user inputs are validated for correctness and security.

- MongoDB Database: users will save in MongoDB database.

## Technology Stack
- Node.js
- Express.js
- Mongoose
- Fastest Validator


## Installation

Clone the Repository:
``` bash
git clone <repository-url>
cd users-manager
```

Install Dependencies:
``` bash
npm install
```

Run the Server:
``` bash
npm start
```
Access the API: Open your browser or a tool like Postman and navigate to http://localhost:3000/api/users to interact with the API.

### API Endpoints
``` bash
POST /users/add: Create a new user.
GET /users: Retrieve a list of all users.
DELETE /users/remove?id={objectID} Delete a user by ID.
```

### Example Usage
To create a new user, send a POST request to /users/add with the following JSON body:

``` json
{
    "name": "Armin",
    "family": "Amiri Nasab",
    "age": 18,
    "address": "Iran, Tehran",
    "job": "Web Developer",
}
```

it's my first express API, open index.html and enjoy :)