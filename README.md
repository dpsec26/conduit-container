# Conduit Container

This project is the containerized version of the [Conduit Backend](https://github.com/dpsec26/conduit-backend) and the [Conduit Frontend](https://github.com/dpsec26/conduit-frontend). It also uses a PostgreSQL database instead of the Sqlite database.

## Table of contents

- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Usage](#usage)

## Prerequisites

** Git **
** Docker **

## Quick start

1. Clone the repository
```sh
git clone git@github.com:dpsec26/conduit-container.git
```

1. Create (or copy) the `.env` file
```sh
cp example.env .env
```
> [!NOTE]
> You should change the `SECRET_KEY` and the passwords if the application is accessible from the internet.

1. Start the aplication via Docker Compose
```sh
docker compose up -d
```

1. Check if the application is running under <your-ip>:<frontend-port> in your browser.

## Usage

### Start and stop the application

You can start the application with a simple
```sh
# use -d for detached mode
docker compose up -d
```
This will start all parts of the application.

You can access the frontend and backend in your browser:
- Frontend: <your-ip>:<frontend-port>
- Backend: <your-ip>:<backend-port>

To stop the application use
```sh
docker compose down
```

### (Optional) Create Django superuser

Open an interactive shell on the backend with
```sh
docker compose exec backend sh
```

> [!NOTE]
> Make sure variables in the `.env` (`DJANGO_SUPERUSER_*`) are set correctly. 

In the shell you can create the superuser with
```sh
python manage.py create_superuser_from_env
```
You only have to do this once.

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