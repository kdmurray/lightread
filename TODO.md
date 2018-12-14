##Create Routes
###/
get: The homepage should display some basic information to login or register

###/login
get: Load the login page to take credentials for login

###/register
get: Load the registration page to allow a user to sign up

###/read
get: The main application - displays a list of feeds and posts for the currently logged-in user. Redirect to the login page if no current session is available

###/version
get: show the current version

##Create Controllers
###/