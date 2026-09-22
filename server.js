import { createServer } from 'node:http';
import { createApp, eventHandler, toNodeListener } from 'h3';

const app = createApp();

// Main route
app.use('/', eventHandler(() => {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Setembro Amarelo</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
      background-color: #fff9e6;
    }
    h1 {
      color: #f4c430;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    .content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>🎗️ Setembro Amarelo</h1>
    <p>Bem-vindo ao projeto Setembro Amarelo - uma iniciativa de conscientização sobre a saúde mental.</p>
    <p>Este é um projeto desenvolvido com H3 Framework.</p>
  </div>
  
  <!-- Vercel Speed Insights -->
  <script>
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/speed-insights/script.js"></script>
</body>
</html>`;
}));

const server = createServer(toNodeListener(app));
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
