# webaverse/styleguide
Styleguide for Webaverse web components built with react-styleguidist.

### About

This styleguide is made up of React components leveraging Ant Design. 
We skin the Ant Design components with our own custom CSS but still retain the useful APIs, browser coverage, testing and docs from Ant Design. 

### Local dev setup

1. `npm install`

2. `npm run styles`

You can do live updates on existing files without restarting server.
If you want to add a new file / component, you need to restart server for it to compile the new files.

### Deployment

1. Double check node_modules, package.json and package-lock.json. 

2. `npx styleguidist build`

3. There is a small bug in the path resolution inside react-styleguidist. After you build the production build, you need to copy paste the fonts file (`Mulish-Regular.ttf`) into `styleguide/static/css/static/media/Mulish-Regular.<code split unique hash>.ttf`. You can find the unique code split hash you need to add by looking at console and observing the 404 path.

4. `npm run deploy`

*unless you really know what you're doing, please do not deploy this app, ask Chris E.*
