https://medium.com/@holasoymalva/how-to-build-a-rest-api-with-node-js-and-typescript-3491ddd19f95

curl -X GET http://localhost:3000/api/books

curl -X GET http://localhost:3000/api/books/<id>

curl -X POST -H 'Content-Type: application/json' -d '{"title": "Book Title", "author": "Author Name"}' http://localhost:3000/api/books

curl -X PUT -H 'Content-Type: application/json' -d '{"title": "Book Title", "author": "Author Name"}' http://localhost:3000/api/books/<id>