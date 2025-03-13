import * as express from "express";
import catsRouter from "./cats/cats.route";

// app 싱글톤으로 생성
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // catRounter 등록
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]); // 요청 위치.
      console.log("this is logging middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      console.log({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
