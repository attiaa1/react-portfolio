# This site was created using ReactJS, and Vite. It's being served off my personal Ubuntu Server with Nginx as a reverse proxy.

## Instructions on how to run:

# Development:
Change the NODE_ENV environment variable in docker-compose.yaml to development

# For production:
Run deploy script:
``` ./deploy```

This script will build the image and then run it as a container, serving on your localhost at port 3000.
