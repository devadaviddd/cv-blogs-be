FROM node:16
WORKDIR /app
COPY . .
EXPOSE 8000

RUN npm install ts-node --save-dev
RUN npm install prisma --save-dev
RUN npm install @prisma/client
# add permissions to the deploy script
RUN chmod +x deploy.sh
ENTRYPOINT [ "/app/deploy.sh" ]