This repo contains the code about Board Micro Service of an TODO Application

To run write:
    docker build -t <username>/board_ms .
    docker-compose up

CREATE: POST http://localhost:3000/boards
LIST: GET http://localhost:3000/boards
READ: GET http://localhost:3000/boards/:board_id
UPDATE: PUT http://localhost:3000/boards/:board_id
DELETE: DELETE http://localhost:3000/boards/:board_id