# ...:::primera etapada:::...
FROM node:19.2-alpine3.16 AS alias-dependencias
WORKDIR /app
COPY  package.json ./
RUN npm install

# ...:::segunda etapa, imagen nueva:::...
FROM node:19.2-alpine3.16 AS alias-builder
WORKDIR /app
# copiamos de alguna ruta de nuestra primera etapada
COPY --from=alias-dependencias /app/node_modules ./app/
# de nuestra ruta local haciendo uso de dockerignore copiamos todo
# y lo pegamos en el workdir
COPY . .
# realizar test
RUN npm run test
# aqui iria para hacer el build de PROD
# RUN npm run build

# ...:::tercer etapa, imagen nueva:::...
FROM node:19.2-alpine3.16 AS alias-prod-deps
WORKDIR /app
COPY  package.json ./
RUN npm install --prod

# ...:::cuarta etapa:::...
FROM node:19.2-alpine3.16 AS alias-runner
WORKDIR /app
COPY --from=alias-prod-deps /app/node_modules ./node_modules
COPY app.js ./
# todo lo de la carpeta lo copia en la nueva
COPY tasks/ ./tasks
CMD ["node", "app.js"]