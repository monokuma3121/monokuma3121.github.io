var posts=["2023/04/16/20个JavaScript经典案例/","2022/10/16/HTML基础知识/","2023/04/12/MATLAB/","2023/04/12/TypeScript中文文档/","2023/04/04/Nginx/","2023/03/28/TS百练飞升/","2023/03/24/Vite + Vue3 + Typescript + Pinia + Vueuse项目/","2023/03/15/Vue3观察笔记/","2023/04/14/VueRouter/","2023/04/14/axios二次封装/","2022/10/31/一些小技巧/","2023/04/16/【案例】泛型封装数据库/","2023/04/04/优雅的单行代码/","2023/04/17/前端自动化/","2023/04/09/工大生存手册/","2023/03/05/微信小程序实战/","2022/10/16/尚品汇前台项目实战/","2023/03/10/招生提报系统项目/","2022/10/15/日常生活/","2023/01/04/玩机那些事之一：解锁BL/","2022/10/15/第一篇文章：Hello-World/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};