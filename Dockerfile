FROM node:latest
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]
