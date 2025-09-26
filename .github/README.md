# GitHub Actions Workflows

This repository includes automated CI/CD workflows that run on pull requests and pushes to the main branch.

## PR Validation Workflow

**File:** `.github/workflows/pr-validation.yml`

**Triggers:**
- Pull requests to `main` or `master` branch
- Pushes to `main` or `master` branch

**What it does:**
1. **Setup:** Checks out code and sets up Node.js environment
2. **Dependencies:** Installs npm dependencies with caching
3. **Linting:** Runs ESLint to check code quality
4. **Formatting:** Checks code formatting with Prettier
5. **Testing:** Runs Jest test suite
6. **Building:** Executes build process
7. **Type Checking:** Validates TypeScript compilation
8. **Security:** Runs npm audit for security vulnerabilities

**Matrix Strategy:**
- Tests on Node.js versions 18.x and 20.x
- Ensures compatibility across different Node.js versions

**Requirements:**
- `package.json` file in the repository root
- Appropriate npm scripts defined in package.json:
  - `lint`: ESLint configuration
  - `format:check`: Prettier formatting check
  - `test`: Jest test runner
  - `build`: Build process

**Configuration Files:**
- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Prettier formatting rules
- `jest.config.js`: Jest test configuration
- `tsconfig.json`: TypeScript configuration

The workflow is designed to be flexible and will gracefully handle missing dependencies or configuration files.