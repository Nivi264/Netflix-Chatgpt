#netflix gpt
-create react app
-configured tailwindcss
-header
-login form
-signup form
-form validations
-use ref hook
-create sign up user

#features
-Login/signup page
    -signin/signup form
    -redirect to browse page
-browse(after authentication)
 -header
 -main movie
    -trailer in background
    -title and description
    -Movie suggestions
       -Movie lists *N
Netflix gpt
    -search bar
    -movie suggestions
-Bugfix->signup user displayname and profile photo update
-Bugfix->if the user is not logged in redirect/browse to login page and vicecersa
-unsubscribed to the onauthstatechange call back
-add hardcoded value to the constants file


**before login firebase we should use command npm install -g firebase tools

**once the user sign in or signup we will take the user data and store it in redux store and navigate it ito browse page**

->store->slice->again store->and rootapp.js->provider from react redux

-->on auth state change is used when sign in signout,any auth change