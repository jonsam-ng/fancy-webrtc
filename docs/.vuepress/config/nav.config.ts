/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
  // ========== 示例 ========== //
  {
    text: "源码",
    link: "/source/index/",
  },
  {
    text: "基础",
    link: "/basic/",
  },
  {
    text: "进阶",
    link: "/advance/",
  },
  {
    text: "话题",
    link: "/topic/",
    items: [
      {
        text: "实例",
        link: "https://github.com/jonsam-ng/fancy-webrtc-demos",
        target: "_blank",
      },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  {
    text: "更多",
    items: [
      { text: "关于", link: "/about/" },
      // generate by slidev
      { text: "幻灯片", link: `/slides/#/1` },
    ],
  },
  { text: "博客", link: "https://www.jonsam.site" },
];
