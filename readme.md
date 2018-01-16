# Notes WebApp

Web app that allows a user to create notes specific to the user.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

* [Git](https://git-scm.com/downloads)
* [Composer](https://getcomposer.org/download/)
* [XAMPP](https://www.apachefriends.org/index.html) or similar local servers with PHP version 7.0.0+


## Installation

```
git clone https://github.com/Bunjoo/axu-notes.git yourProjectName
```

```
cd yourProjectName
```

```
git checkout local-dev
```

```
Composer install
```

##Database Setup

go to localhost/phpmyadmin create a new database called 'notes'

make a copy of the file **.env.example** and name it **.env**

replace `DB_DATABASE` with 'notes' and change `DB_USERNAME` and `DB_PASSWORD` with your database username and password

```
php artisan key:generate
```

```
php artisan migrate
```

**Optional**: seeding db `php artisan db:seed`

visit your localhost to see your new notes app!

## Built With

* [Laravel 5.5](https://laravel.com/) - API,Users
* [Composer](https://getcomposer.org/) - Dependency manager
* [XAMPP](https://www.apachefriends.org/index.html)
* [REACTjs](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Heroku](http://herokuapp.com/)
* [JawsDB on Heroku](https://elements.heroku.com/addons/jawsdb-maria)
