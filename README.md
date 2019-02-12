# AT-Headers
This project aims to scale the backend of an existing component within an OpenTable clone built by another developer.  The component displays header images for each restuarant in the application.


## Getting Started
### Configuring and populating the database
To use the application a PostgreSQL database must be set up and populated.
From ./db/postgres/database.js update the client variable with your local information

```
const client = new Client({
  host: 'localhost',
  user: 'your username',
  password: 'your password'
  database: 'headers'
});
```
Back in the root directory run the following
```
# install dependencies
npm install

# load database schema
npm run schema

# generate and populate restaurants table (should take a little under one minute)
# NOTE if running on Windows, copy the script that is returned and run in your terminal.
npm run populate-names

# generate and populate images table (should take about five minutes)
# NOTE if running on Windows, copy the script that is returned and run in your terminal.
npm run populate-images

```
### Running the application locally
From the root directory

```
# run webpack to build client bundle
npm run react-dev

# run the server locally
npm run server-dev

```
Access the micro-service at http://localhost:3040/restaurants/id, but replace id with a number between 1 and 10 million.
For example: http://localhost:3040/restaurants/1000 


## API
### GET Request
Will return image urls for the id of the restaurant provided in the url.

```
# Example result
{
    "images": [
        "https://picsum.photos/200/300/?1981",
        "https://picsum.photos/200/300/?86494",
        "https://picsum.photos/200/300/?75012",
        "https://picsum.photos/200/300/?2016",
        "https://picsum.photos/200/300/?81225",
        "https://picsum.photos/200/300/?44979",
        "https://picsum.photos/200/300/?97646",
        "https://picsum.photos/200/300/?85031"
    ],
}

```







