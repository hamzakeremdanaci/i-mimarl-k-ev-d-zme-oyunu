export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    if (res.status === 404 && request.method === "GET") {
      return env.ASSETS.fetch(new Request(new URL("/", request.url)));
    }
    return res;
  },
};
