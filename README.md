# 待解决问题
为什么vercel dev能部署，推送到服务器上就不行了，vercel无法部署
——解决办法，因为clock原来为html框架，所以需要修改服务器为编译框架为next.js，然后编译命令为npm run build，重新构建环境。

# 项目框架
github 对应仓库，/wzeddie/myblogfortest，branch为testforlogin
技术栈，NextJS - MDX - shadcn-ui - Tailwind - Blog
本地文件夹，git_home/nextjs-mdx-blog
# 需求优化
1、添加文章，在posts文件中添加mdx格式的blog文章。

# 如何启动
2、安装vercel
3、开发环境运行，vercel dev
4、生成环境部署，npm run build 编译代码，vercel --prod，部署wzeddie.online 
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
