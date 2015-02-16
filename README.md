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
7. `cd www/default`
8. `sudo npm install`
9. `sudo bower install`

Once you run it the first time, node will run a default server and you can access it by visiting http://10.0.33.34 in your browser.

### Further Reading
- [Vagrant Documentation](http://docs.vagrantup.com/)
- [Node.js](http://nodejs.org/api/)
- [MongoDB](http://docs.mongodb.org)



