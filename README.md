# Conduit Container

This project is the containerized version of the [Conduit Backend](https://github.com/dpsec26/conduit-backend) and the [Conduit Frontend](https://github.com/dpsec26/conduit-frontend). It also uses a PostgreSQL database instead of the Sqlite database.

## Table of contents

- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Usage](#usage)
    - [Start and stop the application](#start-and-stop-the-application)
    - [Access log files](#access-log-files)

## Prerequisites

- **Git**
- **Docker**

## Quick start

1. Clone the repository
```sh
git clone --recurse-submodules git@github.com:dpsec26/conduit-container.git
```

2. Create (or copy) the `.env` file
```sh
cp example.env .env
```
> [!NOTE]
> You should change the `SECRET_KEY` and the passwords if the application is accessible from the internet.

3. Start the application via Docker Compose
```sh
docker compose up -d
```

## Usage

### Start and stop the application

You can start the application with a simple
```sh
# use -d for detached mode
docker compose up -d
```
This will start all services.

> [!NOTE]
> A Django superuser is automatically created with the credentials from the `.env` the first time you start this.

You can access the frontend and backend in your browser:
- Frontend: http://localhost:8282
- Backend: http://localhost:8080

To stop the application use
```sh
docker compose down
```

### Access log files

You can view the log files of all the parts of the application:
```sh
docker compose logs db
docker compose logs backend
docker compose logs frontend
```

To save your log files, use
```sh
docker compose logs <container-name> > my-log-file.txt
```