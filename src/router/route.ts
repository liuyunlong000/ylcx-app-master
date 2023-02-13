import { RouteRecordRaw } from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
    /*{
        path: '/',
        name: '/',
        component: () => import("/@/views/index.vue"),
        redirect: '',
        meta: {
            isKeepAlive: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("/@/views/home/index.vue"),
                meta: {
                    title: 'message.router.home',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: true,
                    isIframe: false,
                    roles: ['admin', 'common'],
                    icon: 'iconfont icon-shouye',
                },
            },
        ],
    },*/
];

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: '/index'
    }, {
        path: "/index",
        name: 'index',
        component: () => import("@/views/index.vue"),
        meta: {
            title: '',
            auth: false,
        },
        children: [
            {
                path: "/index", // 首页
                name: 'homePage',
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                }
            },
            {
                path: "/survey", // 研究院概况
                name: 'survey',
                component: () => import("@/views/survey/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/survey/",
                        redirect: '/survey/overview'
                    },
                    {
                        path: "/survey/overview",
                        name: 'overview',
                        component: () => import("@/views/survey/components/overview.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/survey/structure",
                        name: 'structure',
                        component: () => import("@/views/survey/components/organizational-structure.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/survey/leader",
                        name: 'leader',
                        component: () => import("@/views/survey/components/leader.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/survey/detail",
                        name: 'leaderDetail',
                        component: () => import("@/views/survey/components/detail.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/news", // 新闻中心
                name: 'news',
                component: () => import("@/views/news/index.vue"),
                children:[
                    {
                        path: "/news/",
                        redirect: '/news/newscore'
                    },
                    {
                        path: "/news/newscore",
                        name: 'newscore',
                        component: () => import("@/views/news/components/newscore.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/news/notice",
                        name: 'notice',
                        component: () => import("@/views/news/components/notice.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/news/detail",
                        name: 'newsDetail',
                        component: () => import("@/views/news/components/detail.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/research", // 科学研究
                name: 'research',
                component: () => import("@/views/research/index.vue"),
                children:[
                    {
                        path: "/research/",
                        redirect: '/research/mathematical'
                    },
                    {
                        path: "/research/mathematical",
                        name: 'mathematical',
                        component: () => import("@/views/research/components/mathematical.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/technological", // 技术创新
                name: 'technological',
                component: () => import("@/views/technological/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/technological/",
                        redirect: '/technological/industrial-data'
                    },
                    {
                        path: "/technological/industrial-data",
                        name: 'industrial-data',
                        component: () => import("@/views/technological/components/industrial-data.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/platform", // 创新平台
                name: 'platform',
                component: () => import("@/views/platform/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/platform/",
                        redirect: '/platform/datanet'
                    },
                    {
                        path: "/platform/datanet",
                        name: 'datanet',
                        component: () => import("@/views/platform/components/datanet.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/product", // 产品介绍
                name: 'product',
                component: () => import("@/views/product/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/product/",
                        redirect: '/product/ylctx'
                    },
                    {
                        path: "/product/ylctx",
                        name: 'ylctx',
                        component: () => import("@/views/product/components/ylctx.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/talent", // 人才队伍
                name: 'talent',
                component: () => import("@/views/talent/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/talent/",
                        redirect: '/talent/talent'
                    },
                    {
                        path: "/talent/talent",
                        name: 'talent',
                        component: () => import("@/views/talent/components/talent.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/talent/recruit",
                        name: 'recruit',
                        component: () => import("@/views/talent/components/recruit.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/talent/dynamic",
                        name: 'dynamic',
                        component: () => import("@/views/talent/components/dynamic.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/talent/detail",
                        name: 'talentDetail',
                        component: () => import("@/views/talent/components/detail.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/talent/detail2",
                        name: 'scienceDetail',
                        component: () => import("@/views/talent/components/detail2.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
            {
                path: "/scientific", // 科研动态
                name: 'scientific',
                component: () => import("@/views/scientific/index.vue"),
                meta: {
                    title: '',
                    auth: false,
                },
                children:[
                    {
                        path: "/scientific/",
                        redirect: '/scientific/dynamic'
                    },
                    {
                        path: "/scientific/dynamic",
                        name: 'dynamic2',
                        component: () => import("@/views/scientific/components/dynamic.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    },
                    {
                        path: "/scientific/detail",
                        name: 'scientificDetail',
                        component: () => import("@/views/scientific/components/detail.vue"),
                        meta: {
                            title: '',
                            auth: false,
                        }
                    }
                ]
            },
        ]
    },
];
