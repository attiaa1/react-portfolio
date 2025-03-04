import server from 'server';
import { resolve } from 'path';
const { get } = server.router;

// Serve static files from the 'dist' directory
server({ public: resolve('dist') }, [
  get('/', ctx => ctx.res.sendFile(resolve('dist/index.html')))
]).then(ctx => {
  console.log(`Server running at http://localhost:${ctx.options.port}`);
});
