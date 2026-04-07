#!/bin/bash

set -e

python manage.py migrate
python manage.py collectstatic --noinput
python manage.py create_superuser_from_env

if [ "${DJANGO_DEBUG}" == "true" ]; then
    python manage.py runserver 0.0.0.0:${BACKEND_PORT}
else
    gunicorn conduit.wsgi:application --bind 0.0.0.0:${BACKEND_PORT} --log-level debug --capture-output
fi