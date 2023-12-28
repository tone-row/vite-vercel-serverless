import { QueryClient } from "@tanstack/react-query";
import { trpc } from "./trpc";
import { httpLink } from "@trpc/client";

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: "/api/trpc",
    }),
  ],
});
