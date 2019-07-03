## Setup Instructions:

prerequisites: have `npm` and `node.js` installed

clone this repo: `git clone https://github.com/Broshen/CS490.git`

cd into the repo: `cd CS490`

run `npm install` to install `concurrently`

cd into the client folder and install the client side dependencies (mainly react): `cd client && npm install`

cd into the server folder and install the server side dependencies: `cd server && npm install`


## Repo structure:

There's a folder for the client side code (based off of create-react-app) and a folder for the server side code (node.js and express, nothing fancy)

Idk what else you want.


## Development Instructions

run `npm run dev` in the top level folder to start the client && server side code concurrently

If you add any dependencies client or server side, make sure to save them into the respective `package.json` so you don't fuck over the next person who tries to set up this project but can't do it because they can't install whatever you added with `npm install`.

(i.e. use `npm i -S <whatever package you need>`)

## Deployment Instructions

deployment is done through heroku. create a heroku account, and ask me to add you to the access settings.

ensure you have `heroku` as one of your remotes. if not, run `git remote add heroku	https://git.heroku.com/cfc-matcher.git`

then, after you've committed your changes, run `git push heroku master` to push to the heroku remote and trigger a build + redeploy.


