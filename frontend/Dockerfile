FROM node:23 AS build
WORKDIR /dist
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
# Usar uma imagem do NGINX para servir o frontend
FROM nginx:alpine

# Remover configuração padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivos do React para a pasta do NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuração personalizada do NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

