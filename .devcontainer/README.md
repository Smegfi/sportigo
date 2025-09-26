# Sportigo Development Container

This directory contains the development container configuration for the Sportigo project.

## What's Included

### Base Environment
- **Node.js 20** - Latest LTS version
- **Python 3.11** - For backend services
- **PostgreSQL 15** - Database
- **Redis 7** - Caching and session storage
- **Docker-in-Docker** - For containerized development

### Development Tools
- **Git** - Version control
- **GitHub CLI** - GitHub integration
- **TypeScript** - Type-safe JavaScript
- **Prisma** - Database ORM
- **FastAPI** - Python web framework
- **Black & Flake8** - Python code formatting and linting

### VS Code Extensions
- TypeScript support
- Tailwind CSS
- Prettier
- Python support
- Docker support
- GitHub Copilot

## Getting Started

1. **Open in Dev Container**: Use VS Code's "Reopen in Container" command
2. **Services**: PostgreSQL and Redis will start automatically
3. **Ports**: 
   - 3000: Frontend development server
   - 8000: Backend API server
   - 5432: PostgreSQL database
   - 6379: Redis cache
   - 5050: pgAdmin (admin@sportigo.dev / admin)

## Database Access

- **Host**: localhost (from host machine) or db (from container)
- **Port**: 5432
- **Database**: sportigo_dev
- **Username**: postgres
- **Password**: password

## Redis Access

- **Host**: localhost (from host machine) or redis (from container)
- **Port**: 6379

## Development Commands

```bash
# Install dependencies (if package.json exists)
npm install

# Start development servers
npm run dev

# Database migrations
npx prisma migrate dev

# Python development
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Customization

Edit the following files to customize your development environment:

- `devcontainer.json` - Container configuration
- `Dockerfile` - Base image and dependencies
- `docker-compose.yml` - Multi-service setup
- `settings.json` - VS Code settings

## Troubleshooting

1. **Container won't start**: Check Docker is running
2. **Port conflicts**: Modify port mappings in devcontainer.json
3. **Database connection issues**: Ensure PostgreSQL service is running
4. **Permission issues**: Check file permissions and user setup