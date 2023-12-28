import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { appRouter } from "router";
import { VercelApiHandler } from "@vercel/node";

const handler = createHTTPHandler({
  router: appRouter,
  createContext() {
    return {};
  },
  onError({ error }) {
    console.error(error);
  },
});

const apiHandler: VercelApiHandler = async (req, res) => {
  // Slice /api/trpc/ from the URL
  // so that the router can match the
  // correct procedure.
  req.url = req.url?.replace(/^\/api\/trpc/, "");

  return handler(req, res);
};

export default apiHandler;

export const config = {
  api: {
    bodyParser: false,
  },
};
