# Express Postgres Template

Template for developing an API with Express and PostgreSQL

## Getting Started :arrow_forward:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install these packages

- [Node y Npm](https://nodejs.org/es/)
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)

### Configuration

Set your configuration in your `.env` files depending on the case, based on the `.env.example` file:
- Development configuration: `.env`
- Test configuration: `.env.test`
- Production configuration: `.env.production`
## Deployment :package:

### Locally
 
1. Install dependencies:
```sh
$ npm i 
```

2. Comment the api service in the `docker-compose.yml` file

3. Run db and adminer(optional) containers with:
```sh
$ docker-compose up -d # -d: detach
```

4. Run migrations and seeders: <br>
`environment` can take the value: development | test | production

```sh
# Migrations
$ npm run db:migrate --env={environment}

# Seeders
$ npm run db:seed --env={environment}
```
5. Run api or tests: <br>
Change `DB_HOST` in env file to `localhost`
```sh
# API
$ npm start

# Tests
$ npm run test
```
### On docker compose

* Run api: <br>
Change `DB_HOST` in env file to {postgres db name}-db
```sh
$ docker-compose up # -d: detach
```

* Run tests:
1. In `docker-compose.yml` file, change env value to test in lines 16 & 17

2. In `docker-compose.yml` file, change command to `npm run test` in line 18
```sh
$ docker-compose up
```
## Other commands

Create new models with:
```sh
$ npm run db:model:generate --name {model-name} --atributes {column}:{data-type},{column}:{data-type}
```
## Built With :hammer_and_wrench:

- [Node](https://nodejs.org/es/)
    * [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Contributing :family_man_man_boy:

Please read [CONTRIBUTING.md](https://www.aaaimx.org/cod) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning :triangular_flag_on_post:

- [v1.0.0](https://github.com/alvarez98/e-learning-system/tree/v1.0.0)

## Contributors :family_man_man_boy:

- **Esteban Alvarez** - _Initial work_ - [@alvarez98](https://github.com/alvarez98)

## Credits :star:

- **A template to make good README.md** - _Base template_ - [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## References :link:

1. [Sequelize-Cli](https://github.com/sequelize/cli)
2. [Sequelize](https://sequelize.org/master/index.html)
3. [Express](https://expressjs.com/)
4. [Swagger](https://swagger.io/specification/)

## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Made with ❤️ by [Esteban Alvarez](https://github.com/alvarez98) 