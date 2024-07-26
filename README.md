# NextJS - MDX - shadcn-ui - Tailwind - Blog

添加login
为什么vercel无法部署
npm run dev可以运行
next build 则提示不行

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-mdx-blog.git
cd nextjs-typescript-mdx-blog
npm cache clean --force
删除node-modle
npm install，重新安装
然后编译npm run build
然后运行

npm run dev
```

Your new site will be up at http://localhost:3000/

Blog posts can be added to the `posts` directory, in the root folder.

Update the `WEBSITE_HOST_URL` when taking your site live. This lives in `/src/lib/constants.ts`

Make sure to update the `sitemap.ts` file, specifically the `const routes` if you add more pages to the website.
