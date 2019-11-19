# Almuz Website | Work In Progress

That will be my personal website - portfolio.
It is developed using MEVN stack - **MongoDB Express.js Vue.js and Node.js**.
**Docker** has been used to connect all the components for deployment.

## Folder structure
### client folder
All frontend things are located in a 'client' folder.
Client calls REST API to fetch all necessary data.

### server folder
Server folder contains Express.js code and Mongodb configurations.
Server is just a REST API that exposes all the data used by the client, as well as persists important data to MongoDB database.
