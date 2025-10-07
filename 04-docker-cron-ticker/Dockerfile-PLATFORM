# Va coger el buildx por defecto seleccionado por consola
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7,linux/amd64/v2 -t swa91/cron-ticker:latest --push .
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# FROM --platform=linux/amd64 node:19.2-alpine3.16
# esta imagen internamente tiene una carpeta app

# cambiamos de directorio a app
WORKDIR /app

COPY  package.json ./

# instalamos dependencias de la app
RUN npm install

#copiamos todo, mal!
COPY . .

# realizar test
RUN npm run test

# eliminar archivos y directorios innecesarios en PROD
# remove r:recursivo f:forzado
RUN rm -rf tests && rm -rf node_modules

# solo dependencias de PROD
RUN npm install --prod

# comando a ejecutar cuando se levante el container
CMD ["node", "app.js"]