# Stage 1: Build Stage
FROM node:24-alpine3.21 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Stage
FROM node:23-alpine3.21

# Set the working directory
WORKDIR /usr/src/app

# Copy only the build output and necessary files from the build stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./

# Install only production dependencies
RUN npm install 

# Expose the port the app runs on
EXPOSE 3000

# Set the default environment to production
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]

