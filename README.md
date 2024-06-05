# Proyecto Node.js

Este proyecto utiliza Node.js en la versión 16.20.1.

## Requisitos

- Node.js v16.20.1
## PREFIJOS
-/teams
-/jugador

## Endpoints

1. **Traer los equipos por ID** 
   - URL: `http://localhost:3001/teams/665f291d0732e32db9d9617d`
   - Método HTTP: `GET`
   - Descripción: Obtiene los detalles de un equipo específico por su ID.

2. **Traer los equipos**
   - URL: `http://localhost:3001/teams`
   - Método HTTP: `GET`
   - Descripción: Obtiene la lista de todos los equipos.

3. **Traer los jugadores**
   - URL: `http://localhost:3001/jugador`
   - Método HTTP: `GET`
   - Descripción: Obtiene la lista de todos los jugadores.

4. **Guardar Jugadores**
   - URL: `http://localhost:3001/jugador/665f27ed0732e32db9d9617a`
   - Método HTTP: `POST`
   - Descripción: Guarda un nuevo jugador.
   - Body:
     ```json
     {
         "code": "1",
         "name": "pele",
         "edad": 20,
         "posicion": "delantero"
     }
     ```
5. **EditarJugadores**
   - URL: `http://localhost:3001/jugador/665fb6185ae031d95e927f40`
   - Método HTTP: `Put`
   - Descripción: edita los jugadores.
    - Body:
     ```json
     {
        "code": "1",
        "name": "pele",
        "edad":50,
        "posicion":"delantero",
        "team":"665f29dd0732e32db9d9617e"
     }
     ```
6. **Traer los jugadores por ID** 
   - URL: `http://localhost:3001/jugador/665fb6185ae031d95e927f40`
   - Método HTTP: `GET`
   - Descripción: Obtiene los detalles del jugador por el  id 
7. **Eliminar Jugadores** 
   - URL: `http://localhost:3001/jugador/665fb6185ae031d95e927f40`
   - Método HTTP: `DELETE`
   - Descripción: elimina jugadores por su id 


    