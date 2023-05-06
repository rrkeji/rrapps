import { defineConfig } from "umi";

export default defineConfig({
  hash: true,
  routes: [
    {
      path: "/",
      component: "index"
    },
  ],
  npmClient: 'pnpm',
  esbuildMinifyIIFE: true,
  links: [
    { rel: 'icon', href: '/public/favicon.ico' },
  ],
  title: '软软AI-ChatGPT、Stable-diffusion、智能对话、AIGC',
  metas: [
    { name: 'keywords', content: '软软AI, ChatGPT, 文心一言, 通义千问, stable diffusion, AIGC, AI, huggingface, civitai' },
    { name: 'description', content: '软软AI,智能 AI 体验馆。ChatGPT、Stable-diffusion、智能对话、AIGC、提示词分享、模型分享。' },
  ],
});
