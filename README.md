# pet-matcher

An application for connecting pet owners together.

```

[ ] Install your npm dependencies: run npm install in your terminal

Create table statements used to set up the database. As of 6/8, the images and likes table are not accessed from the code

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  firstname text,
  lastname text,
  password VARCHAR (50) NOT NULL,
  email VARCHAR (355) UNIQUE NOT NULL,
  created_on TIMESTAMP,
  last_login TIMESTAMP,
  age int,
  location VARCHAR (355),
  gender VARCHAR (355),
  gender_seeking VARCHAR (355),
  hobbies VARCHAR (355)
);

CREATE TABLE pets (
  pet_id serial PRIMARY KEY,
  owner_id int4 NOT NULL,
  name varchar(50),
  age int,
  type VARCHAR (50),
  breed VARCHAR (50),
  hobbies VARCHAR (355),
  CONSTRAINT pet_to_owner FOREIGN KEY (owner_id)
  REFERENCES users (user_id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE likes (
  liker_id int4 NOT NULL,
  likee_id int4 NOT NULL,
  CONSTRAINT likes_liker_likee FOREIGN KEY (liker_id)
  REFERENCES users (user_id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT likes_likee_liker FOREIGN KEY (likee_id)
  REFERENCES users (user_id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE images (
  img_name text,
  img bytea NOT NULL,
  user_id int4 NOT NULL,
  CONSTRAINT images_to_users FOREIGN KEY (user_id)
  REFERENCES users (user_id) MATCH SIMPLE
  ON UPDATE NO ACTION ON DELETE NO ACTION
);
```

When establishing your PG_URI pool file utilize best practices by replacing the username and password in the URI link with environmental variables.

Copy db link from Elephant and add to db Pool.js:
e-.g. = postgress://${process.env.PG_USER}:${process.env.PG_PW}<pasteElephantUriHere>

Create your .env file by creating a seperate .env file (everyone on the team will need to do this seperatly);

Storeyour username and password within the file as follows:
PG_PW='password'
PG_USER='user'

some availble resources:
https://www.freecodecamp.org/news/nodejs-custom-env-files-in-your-apps-fa7b3e67abe1/
https://www.npmjs.com/package/react-card-flip
