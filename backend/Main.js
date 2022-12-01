let express = require('express');
let router = express.Router();
const port = process.env.PORT || 4000;

let cors = require('cors');
let bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const { createHash } = require('crypto');
const SendMail = require("./SendMail");

// app.get("/users/data", function (req, res) {
//   res.send("get worked!");
// });

function sha256hash(str) {
  return createHash('sha256').update(str).digest('hex');
}

app.post("/hashstr", function (req, res) {
  try {
    console.log(req.body);
    let str = req.body.text;
    let outHash = sha256hash(str);
    res.send(outHash);
  } catch (err) {
    console.log("[ERROR: at post /hashstr]: " + err);
  }
});

app.post("/sendmail", async function (req, res) {
  try {
    console.log(req.body);
    let obj = req.body;
    await SendMail.sendMail(obj.mail, obj.subject, obj.msg);

    res.send("Send Mail!");
  } catch (err) {
    console.log("[ERROR: at post /sendmail]: " + err);
  }
});

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const server = app.listen(port, () => {
  console.log('Started Express Server on http://localhost:' + port)
})