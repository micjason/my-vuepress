import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Hello xubu",["/index.html","/README.md"]],
  ["v-87aba878","/study/skill/git.html","",["/study/skill/git","/study/skill/git.md"]],
  ["v-cc905988","/study/skill/shell_base.html","使用双引号拼接",["/study/skill/shell_base","/study/skill/shell_base.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
