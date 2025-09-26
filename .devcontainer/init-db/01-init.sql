-- Initialize Sportigo database
CREATE DATABASE IF NOT EXISTS sportigo_dev;
CREATE DATABASE IF NOT EXISTS sportigo_test;

-- Create a user for the application
CREATE USER IF NOT EXISTS sportigo_user WITH PASSWORD 'sportigo_password';
GRANT ALL PRIVILEGES ON DATABASE sportigo_dev TO sportigo_user;
GRANT ALL PRIVILEGES ON DATABASE sportigo_test TO sportigo_user;

-- Enable extensions that might be useful
\c sportigo_dev;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

\c sportigo_test;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";