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


**before login firebase we should use command npm install -g firebase tools

**once the user sign in or signup we will take the user data and store it in redux store and navigate it ito browse page**

->store->slice->again store->and rootapp.js->provider from react redux

-->on auth state change is used when sign in signout,any auth change