# Repository Guidelines for Agents

This project powers **Zero**, an open-source email application built with Next.js, TypeScript and Bun. Use these guidelines when modifying code or documentation.

## Environment Setup
- Node.js v18+ and Bun v1.2+ are required.
- Run `bun install` after cloning to install dependencies.
- Start local services with `bun docker:up` and initialize the database with `bun db:push`.
- Copy `.env.example` to `.env` and configure any required variables.

## Development Workflow
- Use `bun dev` to start the application during development.
- Format code with `bun run format`.
- Lint the repository with `bun run lint`.
- Before committing, run `bun run check` which runs Prettier in check mode and ESLint.
- Husky runs `bun lint-staged` on pre-commit; ensure staged files are formatted.

## Coding Standards
- Write all new code in TypeScript.
- Avoid `any` types and enable strict typing.
- Follow the provided ESLint and Prettier configuration.
- Use functional React components and hooks.
- Comment complex logic and keep functions small and focused.

## Translations
- Place English strings in `apps/mail/locales/en.json`.
- Other translations are managed by Lingo.dev and updated automatically.
- When adding a new language, update `i18n.json` and `apps/mail/i18n/config.ts`.

## Commits and Pull Requests
- Use clear, descriptive commit messages (e.g. `feat:`, `fix:`).
- Reference related issues when applicable.
- Follow the `.github/PULL_REQUEST_TEMPLATE.md` when opening pull requests and avoid AI‑generated PR descriptions.
- Provide tests for new features when possible.

## Programmatic Checks
Run the following before submitting a pull request:

```bash
bun run check
```

