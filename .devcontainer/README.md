# Sportigo Development Container

This directory contains a simple development container configuration for the Sportigo project.

## What's Included

### Base Environment
- **Node.js 20** - Latest LTS version with TypeScript support
- **Git** - Version control

### VS Code Extensions
- TypeScript support
- Prettier code formatting
- JSON support
- GitHub Copilot

## Getting Started

1. **Open in Dev Container**: Use VS Code's "Reopen in Container" command
2. **Port**: 3000 is forwarded for development server
3. **Dependencies**: npm install runs automatically if package.json exists

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build project
npm run build

# Run tests
npm test
```

## Customization

Edit the following files to customize your development environment:

- `devcontainer.json` - Container configuration
- `settings.json` - VS Code settings

## Troubleshooting

1. **Container won't start**: Check Docker is running
2. **Port conflicts**: Modify port mappings in devcontainer.json
3. **Permission issues**: The container runs as the `node` user