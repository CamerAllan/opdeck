# OpDeck

SH Project hoping to create a framework allowing capture of user's opinions through a gamelike interface.

# User Manual

## Start the backend

This step is required for the frontend (game) or admin sections to run correctly.

- Download OpDeck from MMS
- Ensure that Node and NPM are installed on you machine
- Navigate to the project root directory
- `cd backend`
- `npm install`
- `node server.js`

Once this server is running, admin and game applications can be run simultaneously

## Start the game

These steps should be performed in a new terminal window, while the backend server is running.

- Navigate to the project root directory
- `cd frontend`
- `npm install`
- `npm start`
- Navigate to `localhost:3001`

## Start the admin tools

These steps should be performed in a new terminal window, while the backend server is running.

Note that no user data is uploaded in the submission, so the game must be played before the visualisation app is populated.

- Navigate to the project root directory
- `cd admin`
- `npm install`
- `npm start`
- Navigate to `localhost:3000/maker` for game maker tools
- Navigate to `localhost:3000/data` for visualisation tools
