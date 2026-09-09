import dotenv from "dotenv";
import "dotenv/config";


const environment = process.env.NODE_ENV || "local";

if (
  // environment !== "dev" &&
  // environment !== "test" &&
  // environment !== "stage" &&
  environment !== "prod"
) {
  dotenv.config({
    path: `./env/.env.${environment}`
  })
}

export const getEnvironment = () => {
  let current_env;

  switch (environment) {
    case "dev":
      current_env = "Local Development Environment"
      break;
  
    case "test":
      current_env = "Local Test Environment"
      break;
  
    case "stage":
      current_env = "Local Stage Environment"
      break;
  
    case "prod":
      current_env = "Local Production Environment"
      break;
  
    default:
      break;
  }
  return {
    environment,
    current_env
  }
}
