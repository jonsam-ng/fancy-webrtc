/*****************************************************************************************
 *                                 页面配置【建站自定义】
 ******************************************************************************************/

export const siteName = "Fancy WebRTC";

export const siteDesc = "WebRTC notes and learning map all you want.";

// 是否使用 github pages 的自定义域名
export const useCustomDomainName = true;
export const customDomainName = "webrtc.jonsam.site";

export const siteKeywords = "webRTC学习,webRTC教程,webRTC入门";

// 同时修改 `docs/.vuepress/styles/palette.styl` 中 `$accentColor`
export const siteThemeColor = "#008ACB";

export const siteIconFont = "//at.alicdn.com/t/font_3314748_9xij1pv3h4i.css";

export const siteRepo = "jonsam-ng/fancy-webrtc";

export const siteLicense = "MIT";

export const personalLink = "https://www.jonsam.site";

export const siteAuthor = {
  name: "jonsam",
  link: "https://github.com/jonsam-ng",
};

export const siteBlogger = {
  avatar:
    "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/oxygen-space/image.5a0lthv367k0.png",
  name: "Jonsam NG",
  slogan: "让有意义的事变得有意思，让有意思的事变得有意义",
};

export const siteFooter = {
  createYear: 2022,
  copyrightInfo: `${siteName} | Template by <a href="https://jonsam-ng.github.io/fancy-note-starter/">Fancy Note Starter</a> | Made by <a href=${personalLink} target="_blank">${siteAuthor.name}</a> with ❤`,
};

export const siteBase = useCustomDomainName ? "" : `/${siteRepo}/`;
export const siteHost = useCustomDomainName
  ? `https://${customDomainName}`
  : siteAuthor.link;
export const siteUrl = siteHost + siteBase;
