![Logo](/screenshots/Logo.png)
-----
CodeAir is a peer-peer real time code collaboration/code-pairing platform along with text messaging and audio-connectivity. 
It offers the same experience as writing code in a google-doc on a video call with much-less bandwidth requirements and
a more focussed user-interface.

With no login/sign-up hassle and round trips to a database server (inhibiting your privacy); this is the fastest you can spin a server 
and get on with a code-pairing session.

Link: [codeair-app.herokuapp.com](https://codeair-app.herokuapp.com/) (Please note that the app may take upto a minute to load-up due to Heroku pushing it in down state when no requests are received for an extended period of time.)

## Technologies Involved
CodeAir is running on the top of following technologies:
- React
- NodeJS (Express)
- WebRTC
- Socket.io

##  Setting up the Project
(Make sure you have NodeJS and NPM installed on your machine)
1. Fork this repository
2. Clone the forked repository on your local machine using: 
`git clone https://github.com/<username>/CodeAir.git`. (Replace username with your own username)
3. Open client and server directories in different instances of your code editor.
4. Install all the dependencies using `npm install` (server directory) and `yarn install` (client directory).
5. Finally start the application using `npm start` (server instance) and `yarn start` (client instance).

## Screenshots
![Home](/screenshots/Home.png)
---
![CodeRoom](/screenshots/CodeRoom.png)
