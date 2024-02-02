const { rest } = require("msw");

const handlers = [
  // Handles a POST /login request
  rest.get("/app/routes/_index.tsx", null),

  // Handles a GET /user request
  rest.get("/app/routes/posts._index.tsx", null),
];

module.exports = {
  handlers,
};
