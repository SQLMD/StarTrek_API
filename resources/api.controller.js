const configuration = require("../services/db/knexfile");
const database = require("knex")(configuration);

const OK = 200;
const CREATED = 201;
const FAIL = 400;
const SERVER_ERROR = 500;

const render = (res, code, page) => {
  res.status(code).render(page);
};
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

const episodeData = [
  { id: 1, title: "The Man Trap", airDate: "1966-09-08" },
  { id: 2, title: "Charlie X", airDate: "1966-09-15" }
];

module.exports = {
  home(req, res) {
    render(res, OK, "home.ejs");
  }
};
