## Used frontend libraries: 
+ vue.js
+ vue-router
+ vuex
+ axios
+ vee-validate - to validate forms
+ vue-browser-geolocation - wrapper around geo web api
+ vue-progressbar - proggress indicator
+ awesome-phonenumber - validate phone numbers

## Fontend
Frontend build as SPA with vue-router and vuex to manage state between pages.

## Backend
Backend is simple without authentication, just 2 api methods.
*Valid API key from openweathermap.org* required to run application.

## Install
+ Get the project
+ Run composer install
+ Run npm install
+ Run npm run dev[prod][watch]
+ Run configure your database
+ Run php artisan migrate
+ Set your openweathermap.org api key as OPENWEATHER_API_KEY param in .env file
+ Run php artisan serve
+ Navigate to the seved url in browser
