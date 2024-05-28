# GitHub Popular Repositories

Este proyecto es una aplicación Node.js que consume la API de GitHub y muestra los 10 repositorios más populares del usuario "google" utilizando GraphQL.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Crea un archivo `.env` con el puerto de tu servidor.
4. Inicia el servidor con `npm start`.

## Uso

### Endpoint GraphQL

#### URL

`POST /graphql`

#### Consulta de ejemplo

Puedes utilizar la siguiente consulta GraphQL para obtener los 10 repositorios más populares del usuario "google":

```graphql
{
  popularRepos(username: "google") {
    name
    stars
    url
  }
}
```
