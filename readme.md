# Project 3
## wishlist

#### By Kenny Nguyen, Tony Daniels and Ahmed Sorour

## Project Summary

We’re building a wishlist app using JavaScript, mongoDB, express and node. The app is to 
bring the user indeication with the things that they come up with but to store it via the app  and 
use the app whenever they need to.

## Models

The Model will consist of a schema that will have 4 properties on the backend. The front end will have to respect this schema in order to work.

-name: String,

-image: String,

-price: String,

-url: String


The Users Authentication Model will consist of a schema that will have 2 properties on the backend.

-username: String, required: true, unique: true,

-password: String, required: true

-pfp: String, default: Blank Profile Image,

-bio: String, default: ""



## Route Table

The root table was made off of full CRUD that was JavaScript.

## Wishlist
| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /wishlist           | get    | The main/ index page                   | index  |
| /wishlist/:id       | get    | get a particular wishlist item         | show   |
| /wishlist/          | post   | post the new item                      | create |
| /wishlist/:id/      | put    | update the wishlist from the list      | update |
| /wishlist/:id       | delete | delete a wishlist                      | delete |

## User
| url                 | method | action                                 |        
|---------------------|--------|----------------------------------------|
| /signup           | post    | Creates a user account                  |  
| /login      | post    | Check if user exists and logs in         | 
| /:id          | get   | Views particular user information                    | 
| /:id      | put    | Updates user information     | 

## Challenges


- At times, the filename fonts were red. While the code was still working, the team spent about 15 minutes on what the issue was. 
Then the red suddenly went away.

## List of Technologies

- node.js
- react
- EXPRESS
- mongo
- morgan
