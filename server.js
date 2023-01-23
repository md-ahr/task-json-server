const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/data/:id': '/:id'
}));

server.use(router);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
