# Use the official Node.js image as base
FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install additional system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    vim \
    nano \
    htop \
    postgresql-client \
    redis-tools \
    python3-pip \
    python3-venv \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages
RUN npm install -g \
    typescript \
    ts-node \
    nodemon \
    pm2 \
    @angular/cli \
    @vue/cli \
    create-react-app \
    create-next-app \
    prisma \
    @nestjs/cli

# Install Python packages
RUN pip3 install --upgrade pip && \
    pip3 install \
    fastapi \
    uvicorn \
    sqlalchemy \
    alembic \
    psycopg2-binary \
    redis \
    pytest \
    black \
    flake8 \
    mypy

# Set up workspace directory
WORKDIR /workspace

# Create a non-root user
RUN useradd -m -s /bin/bash vscode && \
    usermod -aG sudo vscode && \
    echo "vscode ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to non-root user
USER vscode

# Set up shell
RUN echo 'export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ "' >> ~/.bashrc

# Expose common ports
EXPOSE 3000 8000 5432 6379