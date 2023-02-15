To run 

only requirement is Docker desktop

docker build . -t timedb

docker run -p 5432:5432 timedb

server can then be accessed locally on port 5432, with credentials

ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB time

you can change credentials in the Dockerfile, to change schema, edit sql/schema.sql and rebuild
