## Blog For Vita

### Setup for Local Development

- Firstly Install nvm (Node Version Manager) and instal Node version 18.x and 16.x since the frontend and backend use two separate versions.
- run `npm install` in the project root directory and inside the `/backend` directory (don't forget to switch to Node v16.x when installing dependencies or running the strapi environment inside `/backend`).
- within the `/backend` directory find `.env.example`, make a `.env` file resembling the example file, for,

```
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
```

replace `tobemodified` with any random `base64` string (you can find many base64 generators online).
- populate the strapi server with some dummy content before making api calls.

- In the project root create an `.env.development` file and populate it with the following fields,
  ```
    STRAPI_TOKEN=<your api key here>
    STRAPI_API_URL=http://127.0.0.1:1337
  ```
- To generate your own API Key start the strapi development server within `/backend` with `npm run develop`, head over to admin panel `localhost:1337/admin` and create an account and wait for the admin to assign you permissions to create your own API key.
- To start the frontend run `gatsby develop` in the root (remember to install gatsby globally with `npm install -g gatsby-cli`)
