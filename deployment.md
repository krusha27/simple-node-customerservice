# Customer Service
## Deployment Details
We need to understand the ip address of the machine to be able to use by other machines
```
sudo apt install net-tools
ifconfig
```

This is a NodeJS service that requires NodeJS and npm for the application to run
```
sudo apt install nodejs -y
sudo apt install npm
sudo apt install git
```
Now clone the repo on the machine using the following command
```
git clone https://github.com/krusha27/simple-node-customerservice
```

The application will require "express" since it hosts an endpoint
Now, go to the cloned folder and run the following installations
```
cd simple-node-customerservice
npm install express
node main.js
```
## Hosting Details
The service contains 1 endpoint, which is GET customer/info/:orderId, and it is given out on port 5000 and has been hosted or deployed locally, so whichever machine invokes this endpoint can access by the URL `http://<ip of the machine where this service is hosted>:5000/customer/info/:id`
