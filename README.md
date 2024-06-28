# This site was created using ReactJS, and Vite. It's being served off my personal Ubuntu Server with Nginx as a reverse proxy.

## Instructions on how to run:
# Development:
```npm run dev```
Starts a local development server on the port specified in "vite.config.js", in this case its 8000.

# For production:
```./deploy-script-domain``` 
Is a shell script that: uses ```npm run build``` to build my vite project in the dist folder, and uses ```node server.js``` along with PM2 to server it to localhost:3000 in detached mode.

[PM2](https://www.npmjs.com/package/pm2) is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.
