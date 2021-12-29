#Project on Ionic (frontend) and NodeJs (backend)

This project is a project that sort of showcases my level of understanding of the course on how to use ionic5(frontend) and nodeJs(backend) using sequelize as ORM to access a mysql database in programming.

## Prerequisites

 I needed a working environment with:
* [Git](https://git-scm.com) - I install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - I install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - I install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions


```

This project contains 2 different parts:
* Frontend which is referenced by the folder Projet-App
* Backend

I need a node.js working environment. The LTS is recommended: https://nodejs.org/es/


* For my frontend part:
  I have used ionic. Firstly i install it with the adequate command. 
  And after that i created my project which is called Projet-App.
  in Ionic i have created 2 
     pages:my-cars and my-clothes, the routing to go from page to page, we have created 2 services to consume API

  I used Ionic lab and Ionic to visualize the appearance of my app


* For my backend part:
I have installed NodeJS.
• I have created an API to create 2 end-points: 1 
POST and 1 GET.
• I have tested my API using POSTMAN
1.To start, i created a folder Projet-App/backend in which i have used nodeJs , express, sequelize .


MYSQL_DATABASE=db_app
MYSQL_USER=gnagna
MYSQL_PASSWORD=reussite

DB_HOST=localhost

NODE_ENV=development
```

2. You need a mysql server working.

3. I Created the mysql database "db_app" on mysql.  

Finally to start enjoying this project.



Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments

* https://www.techiediaries.com/ionic/ionic-5-jwt-authentication-node-expressjs/. Excellent tutorial as a basis for learning the Authentication basics needed for this project.
* https://www.techiediaries.com/ionic-ui-forms-theming/. Excellent tutorial to create login/register UI in Ionic 5.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.
