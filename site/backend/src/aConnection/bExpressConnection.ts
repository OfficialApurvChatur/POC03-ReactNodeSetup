import express, {
  type Express, 
  type Request, 
  type Response, 
  type NextFunction, 
} from "express";
import cors from "cors"
import { getEnvironment } from "./aEnvironmentConnection.js";


class ExpressConnection {
  // Private properties
  private connection!: Express;
  private PORT: Number;
 
  // Private methods
  // 1. Init create express connection
  private initCreateExpressConnection() {
    this.connection = express();
  }

  // 2. Init listen express connection
  private initListenExpressConnection() {
    this.connection.listen(this.PORT, () => {
      console.log(`Express connection listening on http://localhost:${this.PORT} at PORT: ${this.PORT} (for ${getEnvironment().current_env})`)
    })
  }

  // 3. 
  private initMiddleware() {
    this.connection.use(express.json());
    this.connection.use(express.urlencoded({
      extended: true,
    }))
    this.connection.use(cors());
  }

  // 4. 
  private initRESTAPI() {
    // Landing Page
    this.connection.get("/", (_request: Request, response: Response, _next: NextFunction) => {
      response.send(`
        <div>
          <h1>Express Connection</h1>
          <p>Express connection created successfully for POC03-ReactNodeSetup...</p>
          <p>(For ${getEnvironment().current_env})</p>
        </div>
      `)
    })
  }

  // Init method
  constructor() {
    this.initCreateExpressConnection();

    this.PORT = Number(process.env.PORT) || 5004

    this.initMiddleware()
    this.initRESTAPI()

    // this.initListenExpressConnection(); // No need
  }
  
  // Public methods
  public getConnection() {
    return this.connection;
  }
  
}

const expressConnection = new ExpressConnection;
export default expressConnection;
