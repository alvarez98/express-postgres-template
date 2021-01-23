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
5. Run api or tests:
```sh
# API
$ npm start

# Tests
$ npm run test
```
## Built With :hammer_and_wrench:

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing :family_man_man_boy:

Please read [CONTRIBUTING.md](https://www.aaaimx.org/cod) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning :triangular_flag_on_post:

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Future work :rocket:

## Contributors :family_man_man_boy:

- **Esteban Alvarez** - _Initial work_ - [@alvarez98](https://github.com/alvarez98)

## Credits :star:

- **A template to make good README.md** - _Base template_ - [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## References :link:

1. 

## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Made with ❤️ by [Esteban Alvarez](https://github.com/alvarez98) 