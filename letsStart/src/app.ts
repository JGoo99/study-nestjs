import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]); // 요청 위치.
  console.log("this is logging middleware");
  next();
});

// json middleware
app.use(express.json());

// catRounter 등록
app.use(catsRouter);

// 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  console.log({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
