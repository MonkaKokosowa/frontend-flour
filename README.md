# Floury Frontend
## 🚧 This project is still a heavy WIP 🚧
This is the main frontend of my website [that's here](https://wheatflour.pl). 
It uses Astro and WebTUI CSS Library. 

## Usage
You can use this docker-compose to run it, or just build from source and run on bare metal
```
version: '3'

services:
  wheatflour:
    image: ghcr.io/monkakokosowa/frontend-flour:main
    ports:
      - "4321:80"
```
It doesn't currently use .env so heads-up remember to change backend URL!


### Issues
If you find any bugs, please don't abuse them but just make a bug report at [the issues tab](https://github.com/MonkaKokosowa/backend-flour/issues). 
There's not much to abuse anyways, it's just me here :p

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
