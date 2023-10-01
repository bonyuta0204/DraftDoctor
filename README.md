# DraftDoctor
AI-powered writing assistant to review and improve your drafts effortlessly.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
    - [Direct Installation](#direct-installation)
    - [Using Docker Compose](#using-docker-compose)
- [Usage](#usage)
    - [Directly Running the Application](#directly-running-the-application)
- [Deployment](#deployment)
- [Authentication Options](#authentication-options)
- [Contributing](#contributing)
- [License](#license)

## Features

- Document review functionality

## Installation

### Direct Installation

1. **Install Poetry**: Install the poetry package manager for Python. You can install it by running `curl -sSL https://install.python-poetry.org | python3`.

2. **Poetry Install**: Run `poetry install` to install the Python dependencies defined in the `pyproject.toml`.

3. **Install Volta**: Run `curl https://get.volta.sh | bash` to instal volta.

4. **Yarn Install**: Run `yarn install` to install Node.js dependencies.

5. **Django Migration**: Run `poetry run python manage.py migrate` to apply Django database migrations.

### Using Docker Compose

1. **Docker Compose Up**: Run `docker compose up` to start all services defined in `docker-compose.yml`. This will build and start all the Docker containers.

## Usage

### Directly Running the Application

#### Frontend
1. Run `yarn dev` to start the Vite development server.

#### Backend
1. Run the Django `runserver` command with `python manage.py runserver`.

## License

This project is released under the MIT License for both frontend and backend components.

