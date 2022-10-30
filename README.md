# README

This is a simple dummy app for testing authentication using sessions and cookies for a school management system. Parents, students and teachers should have different accounts and views once they log in.

## SETUP

* The project consists of a rails backend and a ***vite-react*** front-end

* Clone the repository and run the following commands in order to get the development mode live and running

        bundle install
        rails db:migrate db:seed
        npm install --prefix client
        rails s
        npm run dev --prefix client

## Default usernames and passwords

* the seed file contains some usernames and passwords for the different users, so once you seed you should be able to log in with those same credentials from the seed file.

## A few gotchas

* Adding a proxy on the package.json file will not work for *vite-react* applications, unlike those react apps created with *create-react-app* command. Proxy configurations will have to be done on the **vite.config.js** file (*yet to figure out a shorter way of handling proxies with vite*)

* This method of authentication implementation does not necessarily need a separate users table. However, for the different users (i.e teachers, students, parents and admin), their tables must have a role column to differentiate their roles and a password_digest column for password authentication.



