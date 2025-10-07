# TIP: los comando que menos se modifica mejor que esten arriba

# imagen base, trabajamos con imagenes ya creadas
# este es nuestro punto inicial sobre el que trabaja nuestra app
FROM node:19.2-alpine3.16
# esta imagen internamente tiene una carpeta app

# cambiamos de directorio a app
WORKDIR /app

# copiamos los archivos necesarios para arrancar y lanzar nuestra app
# lo pegamos en la ruta que ya nos movimos
COPY app.js package.json ./

# instalamos dependencias de la app
RUN npm install

# comando a ejecutar cuando se levante el container
CMD ["node", "app.js"]