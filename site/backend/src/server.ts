import http from "http";
import "./aConnection/aEnvironmentConnection.js";
import { getEnvironment } from "./aConnection/aEnvironmentConnection.js";
import expressConnection from "./aConnection/bExpressConnection.js";


const PORT = Number(process.env.PORT) + 2000 || 5003;

const init = () => {
  // 1. Create node connection
  const nodeConnection = http.createServer(expressConnection.getConnection());

  // 2. Listen node connection
  nodeConnection.listen(PORT, () => {
    console.log(`Node connection listening on http://localhost:${PORT} at PORT: ${PORT} (for ${getEnvironment().current_env})`)
  })
}

init();
