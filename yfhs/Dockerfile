# docker build -t kellenschmidt/kspw-dqc .
# docker run -p 80:80 -d kellenschmidt/kspw-dqc

FROM node:9 as builder
RUN mkdir /react
WORKDIR /react
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn install --silent --prod
COPY . .
RUN yarn build

FROM nginx:1.13-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /react/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
