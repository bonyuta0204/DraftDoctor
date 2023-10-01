# DraftDoctor
AI-powered writing assistant to review and improve your drafts effortlessly.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Direct Installation](#direct-installation)
  - [Using Docker Compose](#using-docker-compose)
- [Usage](#usage)
  - [Directly Running the Application](#directly-running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- Document review: Checks for grammar, style, and clarity

## Prerequisites
- Python 3.x
- Node.js
- Docker (optional)

## Installation

### Direct Installation

#### What you'll install
- Poetry for Python package management
- Python dependencies from \`pyproject.toml\`
- Volta for JS runtime management
- Node.js dependencies
- Django database migrations

1. **Install Poetry**
   ```bash
   curl -sSL https://install.python-poetry.org | python3
   ```

2. **Poetry Install**
   ```bash
   poetry install
   ```

3. **Install Volta**
   ```bash
   curl https://get.volta.sh | bash
   ```

4. **Yarn Install**
   ```bash
   yarn install
   ```

5. **Django Migration**
   ```bash
   poetry run python manage.py migrate
   ```

### Using Docker Compose
1. **Docker Compose Up**
   ```bash
   docker compose up
   ```

## Usage

### Directly Running the Application

#### Frontend
1. Start the Vite development server.
   ```bash
   yarn dev
   ```

#### Backend
1. Run the Django development server.
   ```bash
   poetry run python manage.py runserver
   ```

## License

This project is released under the MIT License for both frontend and backend components.