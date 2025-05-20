# This site was created using ReactJS, and Vite. 

## Instructions on how to run:

# Development:
Change the NODE_ENV environment variable in docker-compose.yaml to development
You can then use `docker compose up --build` to build and run the image with ENV variables specified.

# For production:
Run deploy script:
``` ./deploy```

This script will build the image and then run it as a container, serving on your localhost at port 3000.
