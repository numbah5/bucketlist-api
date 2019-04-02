# Bucket List Back End API
This is the back-end repository for the bucketlist project. This website allows
users to view their bucket list, where they can add, update, and delete items.

## How it works
As a user, one can create, read, update and delete bucketlist items. This tool is
useful when user need a way to manage their life's lists of things to accomplish.

## Directory
    - Bucket List Front End Repo: https://github.com/numbah5/bucketlist-client
    - Bucket List Back End Repo: https://github.com/numbah5/bucketlist-api
    - Deployed Site: https://numbah5.github.io/bucketlist-client/
    - Heroku: https://bucketlist-app-api.herokuapp.com/

## Entity Resource Diagram
    https://i.imgur.com/sVMAU3S.jpg

## Technologies used
    - Ajax
    - Bootstrap
    - CSS3
    - Express.js
    - Handlebars
    - HTML5
    - JavaScript
    - jQuery
    - MongoDB and Mongoose
    - Node.js
    - Sass

## User Stories
    * As user, I'd like to sign up with email and password.
    * As a registered user, I'd like to sign in with email and password.
    * As a signed in user, I'd like to change password.
    * As a signed in user, I'd like to sign out.
    * As a signed in user, I'd like to create a bucket list item with a title and description.
    * As a signed in user, I'd like to update my bucket list item's title and description.
    * As a signed in user, I'd like to delete my bucket list item.
    * As a signed in user, I'd like to see all my bucket list items but not other users'.
    * As a signed-in user, I'd like to see bucket list items I've completed.


## Planning, process, and problem-solving strategies
    In future iterations, we would like to add some animation, especially in the
    bucket list title. Ideally, we'd also spend more time on styling as well; we
    used Bootstrap templates, and customized them just enough for MVP.

## Routes and Methods
    '/sign-up' --> router.post()
    '/sign-in' --> router.post()
    '/sign-out' --> router.delete()
    '/change-password' --> router.patch()
    '/list-items' --> router.get(), router.post()
    '/list-items/:id' --> router.get(), router.patch(), router.delete()

## Members
    * [Allan Oliveira]
    * [Henrique Oliveira]
    * [Rex]
    * [Rish]
    * [Vicky]
