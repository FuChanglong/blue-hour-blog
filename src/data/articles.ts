export interface Article {
  id: string
  title: string
  summary: string
  content: string
  author: string
  category: string
  createdAt: string
  readMinutes: number
}

export const articles: Article[] = [
  {
    id: 'blue-hour-start',
    title: '在 Blue Hour 写下第一篇博客',
    summary: '从一个简洁的写作空间开始，把日常观察、技术笔记和灵感碎片认真保存下来。',
    content:
      'Blue Hour Blog 的目标不是制造复杂功能，而是给写作者一个稳定、清爽、容易继续迭代的入口。这里可以记录技术学习、生活观察、项目复盘，也可以慢慢接入真实的后端文章接口。',
    author: 'Blue Hour',
    category: '随笔',
    createdAt: '2026-04-18',
    readMinutes: 4,
  },
  {
    id: 'zustand-auth',
    title: '用 Zustand 管理登录态',
    summary: '登录成功后把 token 放进 store 与 localStorage，页面刷新后仍然保持登录状态。',
    content:
      'Zustand 的优势是轻量直接。对于这个博客项目，用户状态只需要 token、refresh token、登录和退出方法。后续如果增加用户资料，也可以在同一个 store 中扩展。',
    author: 'Blue Hour',
    category: '前端',
    createdAt: '2026-04-17',
    readMinutes: 6,
  },
  {
    id: 'antd-layout',
    title: '用 Ant Design 搭建博客后台式布局',
    summary: '菜单、卡片、表单和列表都交给 Ant Design，业务代码就能更专注在页面组织上。',
    content:
      'Ant Design 很适合快速搭建信息密度适中的应用界面。当前版本保留了概览、文章、写作、关于等核心页面，后续可以在写作页接入发布接口。',
    author: 'Blue Hour',
    category: '设计',
    createdAt: '2026-04-16',
    readMinutes: 5,
  },
]
