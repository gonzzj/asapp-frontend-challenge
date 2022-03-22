# ASAPP Front End Challenge

In these files, you'll find the API needed to work on the ASAPP Front End
Challenge. You should have an email with the challenge details.

To run the API you'll need a version of Node and NPM with `npx` (Node 8+). Then
run `api-server` (for a \*nix like environment) or `api-server.bat` (for
Windows).

Once that the server starts, it will be listening at http://localhost:3030

The API reference is also available at http://localhost:3030/help

> **Note:** This API was created for the challenge, and is not a battle-tested
> production API. If you find a bug or issue that prevents you from doing the
> challenge contact us as soon as possible.

## Getting Started

First, install every package in the client and api folder:

```bash
npm run install-packages
# or
cd ./api && npm install
cd ./client && npm install
```

Then, run the API server in another terminal:

```bash
npm run start:api
```

Finally, start the development server:

```bash
npm run dev:client
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful commands

- `npm run build:client` - Build a client side version in order to deploy
- `npm run lint:client` - Run lint testing on client side code
- `npm run test:client` - Run unit tests on client side code
- `npm run test-watch:client` - Run watch mode of unit tests on client side code
- `npm run test-coverage:client` - Run unit tests on client side code and show full coverage