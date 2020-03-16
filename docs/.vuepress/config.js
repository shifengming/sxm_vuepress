module.exports = {
    title: '小明同学的技术博客', 
    description: '查阅知识',
    themeConfig: {
        search: true,//搜索
        searchMaxSuggestions: 10,
                // 侧边栏
                sidebar: [
                    {
                      title: 'HTML',
                      collapsable: true,
                      children: [
                        'page1/',
                        'page1/新增标签',
                        'page1/BOM',
                        'page1/DOM'
                      ]
                    }
                ],
              // 导航栏
              nav: [
                { text: '首页', link: '/' },
                { text: '前端技术', link: 'page1/' },
                { text: '个人文章', items: [
                  { text: '掘金', link: 'https://juejin.im/user/5c8f3303f265da612d633276' },
                ]}
              ]
    }
}
