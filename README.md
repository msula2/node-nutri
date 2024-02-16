## Getting Started

- Setting up the database:
  - Follow the guidelines provided here for installing Postgresql on linux [over here](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/) till Step 2
  - After installing, follow the following commands:
    - Run `sudo -u postgres psql` to login with postgres user
    - Run `CREATE ROLE nutri LOGIN PASSWORD 'dwryhs478';` to create a user called nutri and give it a password
    - Run `CREATE DATABASE nutridb WITH OWNER = nutri;` to create a database called nutri and assign an owner to it
    - Run `\q` to quit the session
    - Run `psql -h localhost -d nutridb -U nutri -p 5432` to login with user called nutri and connect to database nutridb
    
- Setting up Node.js:
  - Install Node.js and NPM using an installer or command line
  - Clone the git repository
  - Inside the repository run:
    - `npm install` to install all the associated dependencies and node modules
    - `npm start` to start the server on localhost
    - If in case you encounter any errors, don't kill the server using `Ctrl + C`, instead fix your logic and press `Ctrl + S` to save and restart the server
