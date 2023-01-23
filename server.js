const jsonServer = require("json-server");
const clone = require("clone");
const data = require("./db.json");

const isProductionEnv = process.env.NODE_ENV === "production";

const server = jsonServer.create();

const router = jsonServer.router(isProductionEnv ? clone(data) : "db.json", {
    _isFake: isProductionEnv,
});

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use((req, res, next) => {
    if (req.path !== "/") router.db.setState(clone(data));
    next();
});

server.use(router);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

module.exports = server;
