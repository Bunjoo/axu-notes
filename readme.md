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

```
php artisan key:generate
```

##Database Setup
go to localhost/phpmyadmin create a new database called 'notes'

make a copy of .env.example and name it .env

replace `DB_USERNAME` and `DB_PASSWORD` with your database username and password

In Terminal:
```
php artisan migrate
```

**Optional**: seeding db `php artisan db:seed`

visit your localhost to see your new notes app!

## Built With

* [Laravel 5.5](https://laravel.com/) - PHP Framework
* [REACTjs](https://reactjs.org/) - Javascript library
* [Composer](https://getcomposer.org/) - Dependency manager for PHP
* [XAMPP](https://www.apachefriends.org/index.html) - Local hosted server
