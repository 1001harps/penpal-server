import { server } from "@9h/react-synced-state/server";
import "dotenv/config";

const port = process.env.port ? parseInt(process.env.port) : 8080;

server().start(port);
