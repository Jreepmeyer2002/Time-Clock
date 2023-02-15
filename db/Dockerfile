FROM postgres:latest
COPY sql/*.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB time

expose 5432
