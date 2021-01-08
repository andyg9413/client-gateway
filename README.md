
## Project configuration
Start by cloning this project on your workstation.

```bash
$ git clone https://github.com/andyg9413/api-gateways
```
The next thing will be to install all the dependencies of the project.
```bash
$ cd ./api-gateways
$ yarn install
```
Once the dependencies are installed, you can now configure your project by creating a new .env file containing your environment variables used for development.

```bash
$ touch .env
```
These are the environment variables you will need
```bash
MONGO_URI=mongodb://localhost:27017/gateways-db
```
Once you set the environment variables run the docker-compose file in the console in order the run MongoDB
```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
