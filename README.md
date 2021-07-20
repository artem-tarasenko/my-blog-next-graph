## My blog website

This is my first attempt to build a website using Next.js, with GraphCMS as a headless CMS and deployed to Vercel

For those who might not be familiar with those products:
* Next.js generates static website with data fetched from GraphCMS via GraphQL query
* GraphCMS is a cloud-based headless CMS that provides data through the API endpoint
* Next.js project is stored on Github
* Vercel is connected to the Github
* On each commit of Next.js to Github, Github trigger Vercel's deployment - files will be downloaded from git, compiled with data from GraphCMS and deployed.
