# Use the latest Node.js Alpine image
FROM node:23-alpine3.21

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set the default environment to production
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]

