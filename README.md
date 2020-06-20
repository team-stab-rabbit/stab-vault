# LearnVault
A way to organize, share and discover great developer links of tutorials, blogs, and podcasts.

![](getting-started/learnvault.png?raw=true)

## Project Structure
- /client
  > React project
- /server
  > Node-Express project (using MongoDB)

## Getting Started
- After cloning
  - cd into both client and server and `npm install`,
  - then `npm start` in either client or server folder.
- Project uses concurrently to invoke both React (port 8080) and Node (port 5000).
- To seed the Mongo DB use the following:
  - [User Collection](getting-started/users.json)
  - [Collections Collection](getting-started/collections.json)

## Future work:
1. Save Button
    - Currently saves to dabase (BE done) but UI FE requires work.
2. Usage of fontawesome is currently via CDN.
    - npm a fontawesome package for performance.

[Scratch Project Presentation Deck](https://bit.ly/Peridot-Demo)
