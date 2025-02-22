# Requirements
- [Deno](https://deno.com/)
- [11ty](https://www.11ty.dev/) (installed automatically)

# Commands

- `deno task dev` runs a local server (useful during development)
- `deno task buildClean` generates a clean _site directory
- `deno task build` generates _site directory without clearing it
- `deno task clean` clears generated _site directory

# Deployment

- Test your changes with `deno task dev` or `deno task buildClean` 
- Push your changes (`_site` folder is ignored)
- Our custom GitHub action will automatically generate and deploy the `_site` folder
