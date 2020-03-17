
# ToDo-List [![Build Status](https://api.travis-ci.com/mekhalajoshi/CICD.svg?branch=master)](https://travis-ci.com/github/mekhalajoshi/CICD/builds)

The ToDo List is built using React and AWS's serverless architecture. <a href="https://mekhalajoshi.github.io/Todo-List" target="_blank">Demo it here!</a>

It allows you to
* Add tasks to the list
* Mark tasks as done
* Move tasks from the "done" state back to "todo" state
* Remove tasks from the list

## Technologies
Project is created with:
* React version: 16.10.2
* Symantic UI React version: 0.88.1
* AWS API Gateway
* AWS Lambda
* AWS Dynamo DB


## How it Works
The front-end web application is built with in React. This repository contains the code for all the html, css and javascript that make up the front end of the application. It uses 'Symantic UI React'.


The back end uses AWS's serverless architectures. Find the back-end services in <a href="https://github.com/mekhalajoshi/todo-aws-service" target="_blank">this repository!</a>

<p align="center">
  <img src="public/AWS serverless architecture.png" margin="auto">
</p>

The Serverless Architecture uses AWS Lambda in conjunction with Amazon API Gateway, Amazon DynamoDB, to build the web application.


## Setup
To run this project, install it locally using npm and navigate to the directory:

```
$ npm install
$ npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
