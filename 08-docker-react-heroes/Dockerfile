
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

# mas pouplar que nodejs en web site frontend
FROM nginx:1.23.3 as prod
EXPOSE 80
# copiamos la carpeta dist a nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html
# copia el directorio assets y su contenido
COPY assets/ /usr/share/nginx/html/assets
# eliminamos la configuracion por defecto
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx","-g", "daemon off;"]









