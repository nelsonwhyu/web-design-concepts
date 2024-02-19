FROM node:21.4 AS builder

WORKDIR /home/sveltekit-app
COPY . .
RUN npm install
RUN npm run build


FROM node:21.4 AS express_server
WORKDIR /home/app

COPY --from=builder /home/sveltekit-app/build /home/app/build
COPY --from=builder /home/sveltekit-app/server.js /home/app/server.js
COPY --from=builder /home/sveltekit-app/package.json /home/app/package.json

RUN npm install express

CMD ["node","server.js"]