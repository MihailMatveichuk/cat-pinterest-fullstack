## Tech Stack

- Typescript
- React js
- Nest.js
- CATS API
- ORM: Type ORM
- Database: PostgreSQL

## Setting up dev environment

1. Create `.env` in api folder based on `.env.example` and fill in the necessary environment variables (they were sent with repo url).
2. Ensure you have Docker up and running.
3. Ensure you don't have running process on your 3001 port. If you do, stop it or remove it entirely. Otherwise, you will have port conflicts with docker. We need only what will run inside Docker.
4. Run `docker compose up`
5. The app will be run in cat-pinterest-proxy container.