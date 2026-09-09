import http from "http";
import "./aConnection/aEnvironmentConnection.js";
import { getEnvironment } from "./aConnection/aEnvironmentConnection.js";


const PORT = process.env.PORT || 5003;

const init = () => {
  // 1. Create node connection
  const nodeConnection = http.createServer((_request, response) => {
    // Response - Write Head
    response.writeHead(201, {
      "Content-Type": "application/json"
    })

    // Response - End
    response.end(JSON.stringify({
      success: true,
      message: "Node connection created successfully for POC03-ReactNodeSetup..."
    }))
  })

  // 2. Listen node connection
  nodeConnection.listen(PORT, () => {
    console.log(`Node connection listenning on http://localhost:${PORT} at PORT: ${PORT} (for ${getEnvironment().current_env})`)
  })
}

init();
