# Requirements
- [Deno](https://deno.com/)
- [11ty](https://www.11ty.dev/) (installed automatically)

# Commands

- `deno task buildClean` generates a clean _site directory
- `deno task dev` runs a local server (useful during development)
- `deno task clean` removes generated _site directory
- `deno task build` generates _site directory without clearing it

# Deployment

- Push your changes to `src` folder
- Our custom GitHub action will automatically generate and deploy the `_site` folder
