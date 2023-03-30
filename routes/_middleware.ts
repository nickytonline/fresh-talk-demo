// Learn more about middleware: https://fresh.deno.dev/docs/concepts/middleware
import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  request: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  const response = await ctx.next();
  response.headers.set("x-conference", "Node Congress 2023");

  if (request.url.includes("joke-of-the-day")) {
    response.headers.set("x-joke-page", "true");
  }

  if (request.url.includes("movie/")) {
    response.headers.set("x-movie-page", "true");
  }

  return response;
}
