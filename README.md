# MEAN template for projects

Utilizes:

* Vagrant
* Node.js
* Grunt
* Sass
* Bower
* MongoDB
* Ubuntu

# Node.js / MongoDB / Ubuntu 12.04 64-bit Vagrant Box

### How to Use
1. Download and install VirtualBox by [clicking here](https://www.virtualbox.org/wiki/Downloads)
2. Download and install Vagrant by [clicking here](http://downloads.vagrantup.com/)
3. Clone this repository.
4. `vagrant up`
5. Grab a cup of coffee while you wait for the server to download and install. This will take a little while depending on your internet connection.
6. `vagrant ssh`
7. Do stuff!

### App Setup
1. Install Karma `npm install karma-cli -g`
2. Install Protractor `npm install protractor -g` and then `webdriver-manager update`
3. Install Grunt `npm install grunt-cli -g`

### Running App
Run `grunt`

### Running Unit Tests
Run `grunt test:unit`

### Running E2E Tests
Run `webdriver-manager start` and then `protractor test/e2e/conf.js`

### MongoDB
Use '10.0.33.34:27017/local` as your MongoDB connection string.

Once you run it the first time, node will run a default server and you can access it by visiting http://10.0.33.34 in your browser.

### Further Reading
- [Vagrant Documentation](http://docs.vagrantup.com/)
- [Node.js](http://nodejs.org/api/)
- [MongoDB](http://docs.mongodb.org)



