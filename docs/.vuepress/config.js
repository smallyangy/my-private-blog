module.exports = {
    title: '我的文档',
    description: '哈哈哈哈',
    base: '/my-private-blog/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Young.Zhou的文档',
                items: [
                    {
                        text: 'Github', link: 'https://github.com/smallyangy'
                    },
                    {
                        text: '掘金', link: 'https://juejin.cn/user/2101921963325485'
                    }
                ]
            }
        ],
        subSidebar: 'auto',
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: '学前必读', path: '/' }
                ]
            },
            {
                title: '基础学习',
                path: '/handbook/ConditionalTypes',
                collapsable: false,
                children: [
                    {
                        title: '条件类型', path: '/handbook/ConditionalTypes',
                    },
                    {
                        title: '泛型', path: '/handbook/Generics'
                    }
                ]
            }
        ]
    }
}