/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "287828b0604faffb32fd00fed8230b5c"
  },
  {
    "url": "about/index.html",
    "revision": "c4e5d2043f93312189b97df349ce752d"
  },
  {
    "url": "advance/index.html",
    "revision": "a61d2a0cc5ac130c527eed2656118ea3"
  },
  {
    "url": "advance/index/index.html",
    "revision": "0eaeed74692a77f5edd6f8c95807eda8"
  },
  {
    "url": "advance/plan/index.html",
    "revision": "59054620c761b6c51065c105b0440952"
  },
  {
    "url": "advance/roadmap/index.html",
    "revision": "c3dc3cfecd1b08871ef45e15a78fa03c"
  },
  {
    "url": "archives/index.html",
    "revision": "b7ce6b92125adb37134dde152ea8d462"
  },
  {
    "url": "assets/css/0.styles.25614acb.css",
    "revision": "5f29df795479d8621947991f759dbd1f"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.10824af7.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.56573229.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",
    "revision": "66c678209ce93b6e2b583f02ce41529e"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",
    "revision": "796f3797cdf36fcaea18c3070a608378"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",
    "revision": "f9e6a99f4a543b7d6cad1efb6cf1e4b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.4cdba646.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",
    "revision": "a9382e25bcf75d856718fcef54d7acdb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",
    "revision": "d873734390c716d6e18ff3f71ac6eb8b"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.65297062.woff2",
    "revision": "652970624cde999882102fa2b6a8871f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.818582da.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",
    "revision": "f8a7f19f45060f7a177314855b8c7aa3"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",
    "revision": "1320454d951ec809a7dbccb4f23fccf0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",
    "revision": "d8b7a801bd87b324efcbae7394119c24"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",
    "revision": "ad546b4719bcf690a3604944b90b7e42"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",
    "revision": "e934cbc86e2d59ceaf04102c43dc0b50"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",
    "revision": "1ac3ed6ebe34e473519ca1da86f7a384"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",
    "revision": "b8b8393d2e65fcebda5fa99fa3264f41"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.fd048565.js",
    "revision": "1525fcd80e2f806db4fd0acc7a50cdc0"
  },
  {
    "url": "assets/js/11.f689fb14.js",
    "revision": "668f6932b40b233c375d5ca0fe067515"
  },
  {
    "url": "assets/js/12.63ce8dc9.js",
    "revision": "edad53692a2aa0cda6c7ca1679611740"
  },
  {
    "url": "assets/js/13.45601e9d.js",
    "revision": "c45b046c77f3c41c01ef5797704843ab"
  },
  {
    "url": "assets/js/14.166a0278.js",
    "revision": "97d88e7a45af94b0b489864d8bd3f443"
  },
  {
    "url": "assets/js/15.798a02bb.js",
    "revision": "c72609be4c2d7f95704f467c161309b4"
  },
  {
    "url": "assets/js/16.299d764a.js",
    "revision": "905f0d225e09e3bc6133b27ac00ea779"
  },
  {
    "url": "assets/js/17.27416899.js",
    "revision": "69bb33e9f888370ca365e0c369d04430"
  },
  {
    "url": "assets/js/18.31c32a59.js",
    "revision": "43b2cb95c99e90bf06b021df8b1dd6ff"
  },
  {
    "url": "assets/js/19.5285d173.js",
    "revision": "243d2c4824fd4c078e49f738e6a2f889"
  },
  {
    "url": "assets/js/20.bdc4e3a5.js",
    "revision": "de8c456c50f7b6250b4a5974af32ae65"
  },
  {
    "url": "assets/js/21.1787fc8b.js",
    "revision": "f64e644a374510c28369a4d8f6c8b50a"
  },
  {
    "url": "assets/js/22.a0a27a49.js",
    "revision": "3262ea3b799886d9953eab04be04b14b"
  },
  {
    "url": "assets/js/23.bf5e4a57.js",
    "revision": "3c266f5cb90fa05c78890f2e3f2ec045"
  },
  {
    "url": "assets/js/24.d438b542.js",
    "revision": "2e7dc423967cdbc5e8e93036398c8302"
  },
  {
    "url": "assets/js/25.8520e9c6.js",
    "revision": "b6161615ab92b883a18f7e84a672295f"
  },
  {
    "url": "assets/js/26.bd6ee5d2.js",
    "revision": "e1a356ef43413b1a825ba9e40efbce27"
  },
  {
    "url": "assets/js/27.a8bba017.js",
    "revision": "94b9ee87ed913cef867d446aa92d0f2c"
  },
  {
    "url": "assets/js/28.e08151a7.js",
    "revision": "09916abe75b3dccde6daa3e64c44e500"
  },
  {
    "url": "assets/js/29.71576892.js",
    "revision": "6c31bb8d0c2b59f9b894138794000027"
  },
  {
    "url": "assets/js/30.c2670658.js",
    "revision": "a743453b8686699426f4d86e671a03cc"
  },
  {
    "url": "assets/js/31.3176402c.js",
    "revision": "c25b4715e0a0e78fa4f889efcd1678aa"
  },
  {
    "url": "assets/js/32.4194eddb.js",
    "revision": "868d8fd6f4b4527977a331a19b1e6dde"
  },
  {
    "url": "assets/js/33.6a0d582c.js",
    "revision": "b4943af7a3210a5f4169495fddef201b"
  },
  {
    "url": "assets/js/34.50a2cf8c.js",
    "revision": "3ec8529f2e3b9926f3725a69f8813f09"
  },
  {
    "url": "assets/js/35.636da109.js",
    "revision": "6f142927974f54cd3c40432575260c2e"
  },
  {
    "url": "assets/js/36.d4ee3242.js",
    "revision": "c414be77de2f4d9483881b4f489a55dc"
  },
  {
    "url": "assets/js/37.37def475.js",
    "revision": "0e09ee1e0b698fedf38e04d75d43ff61"
  },
  {
    "url": "assets/js/38.89807263.js",
    "revision": "79dba62130528243b14c039e5f9b7cb6"
  },
  {
    "url": "assets/js/39.ec75bfb3.js",
    "revision": "1ce5c99460323ca061bcba03b5c52af1"
  },
  {
    "url": "assets/js/40.09a7fb86.js",
    "revision": "5d813cdcc5934eec8cdbc0b298adefdd"
  },
  {
    "url": "assets/js/41.677dafa7.js",
    "revision": "b6c096dfd8b356b7868038a659ad1219"
  },
  {
    "url": "assets/js/42.6843c5a2.js",
    "revision": "b53fce1c66453b2766b53b5859d0e13e"
  },
  {
    "url": "assets/js/43.e9c52c25.js",
    "revision": "a99395b344a3a0b4d7b916e88404b229"
  },
  {
    "url": "assets/js/44.0220a311.js",
    "revision": "df31a4c59bec0337e1eba71e006908ed"
  },
  {
    "url": "assets/js/45.6e67d7af.js",
    "revision": "bf477ced9d6be6806d3ed2e818c51836"
  },
  {
    "url": "assets/js/46.dc03a5ae.js",
    "revision": "0d8031f346d3186f02c6809ec8bb148f"
  },
  {
    "url": "assets/js/47.588c519f.js",
    "revision": "a66cacfd5a8f8c21406f76721c71373e"
  },
  {
    "url": "assets/js/48.ae16a16e.js",
    "revision": "d8d00696180fd0a66ebad80c0ed451be"
  },
  {
    "url": "assets/js/49.6b390020.js",
    "revision": "255a57ac2b2ac5e7474caa088292f834"
  },
  {
    "url": "assets/js/50.f8e87649.js",
    "revision": "97092c73b565b9fd544d70d186b673dc"
  },
  {
    "url": "assets/js/51.96740f2a.js",
    "revision": "60c62e6911c8c29132e3354ee3cd7b75"
  },
  {
    "url": "assets/js/52.a0d1b182.js",
    "revision": "b5da7d2c3c91dc606b21c9c6de9d85ad"
  },
  {
    "url": "assets/js/53.0249070e.js",
    "revision": "8e15a935a779750e693758b7c41df46b"
  },
  {
    "url": "assets/js/54.7e57db7c.js",
    "revision": "f13b34a8006e74624d8205db54dfbbe7"
  },
  {
    "url": "assets/js/55.b05aff81.js",
    "revision": "77f5d1d20743cd1a27f5c1d6faa66be5"
  },
  {
    "url": "assets/js/56.9461fda3.js",
    "revision": "18863c83fad6c6366159d11c3ea8f54f"
  },
  {
    "url": "assets/js/57.3f99798d.js",
    "revision": "ea42c5371eb9d927cbfb4b23d3bf9346"
  },
  {
    "url": "assets/js/58.453a483b.js",
    "revision": "6b489f4ec5e80fbef4caf96790a7bf83"
  },
  {
    "url": "assets/js/59.2fd565d5.js",
    "revision": "b2fca9c447ede663ce98f355a61068b4"
  },
  {
    "url": "assets/js/60.aa6e0b73.js",
    "revision": "f6389efb5c48c78bbdb46eeb2b0897c4"
  },
  {
    "url": "assets/js/61.cf8be126.js",
    "revision": "9a7d74ce77378b7055bbf2622aa71353"
  },
  {
    "url": "assets/js/62.5a8178e2.js",
    "revision": "5f92a5a80c635c25f50a1144896783a1"
  },
  {
    "url": "assets/js/63.a1e73558.js",
    "revision": "cdebba4cc7ef0ac01a0bc8b72346bbb1"
  },
  {
    "url": "assets/js/64.79eaf2f6.js",
    "revision": "1db6ad607e088eb973141fc4bc8c64be"
  },
  {
    "url": "assets/js/65.e8279306.js",
    "revision": "32fa0dcf25e45de1618dadb94724e5aa"
  },
  {
    "url": "assets/js/66.8ceff0fa.js",
    "revision": "7cc10ff02e1a79453fd9d2d7d7dc73b3"
  },
  {
    "url": "assets/js/67.d4fc1379.js",
    "revision": "a9bfd84c9d5e7e82cd42d486189ec4d8"
  },
  {
    "url": "assets/js/68.5e3f4359.js",
    "revision": "bedd808d51250d0baee50ea622689c50"
  },
  {
    "url": "assets/js/69.dcd6a3a8.js",
    "revision": "509f746864a7eb6f0ce7a636cbb3892a"
  },
  {
    "url": "assets/js/70.bf16523d.js",
    "revision": "4bf72b7eeb2ec19981b8924c381ded20"
  },
  {
    "url": "assets/js/71.de6a94e1.js",
    "revision": "77b5927e5a341edcb1b93cab011e61d8"
  },
  {
    "url": "assets/js/72.72934214.js",
    "revision": "6e78303be4de918cd879c1f3d40e993e"
  },
  {
    "url": "assets/js/73.1f6139f2.js",
    "revision": "28ad4c7858aa9739211cce15f7bbda17"
  },
  {
    "url": "assets/js/74.77e03da8.js",
    "revision": "10832672fd7ae71a4a602ef7d74b5b67"
  },
  {
    "url": "assets/js/75.2c8bf26f.js",
    "revision": "5d4b6cf97b98c32d73bbaa9595f1b226"
  },
  {
    "url": "assets/js/76.9b96dd38.js",
    "revision": "22c79b361feb858aa7d85a0b02c92546"
  },
  {
    "url": "assets/js/77.a3e1d9de.js",
    "revision": "8caeccb2047f1c65ac3e820ab54e12e5"
  },
  {
    "url": "assets/js/78.cf2822fc.js",
    "revision": "7783ec0e8f8b200cbabc165224f4991e"
  },
  {
    "url": "assets/js/79.4d98f9ee.js",
    "revision": "bd8a62a89af8270fddb79fd7f4310778"
  },
  {
    "url": "assets/js/app.9b8bfbea.js",
    "revision": "c6730843c99a27f64bcdc3ae9cc4f397"
  },
  {
    "url": "assets/js/vendors~aplayer.f96278d0.js",
    "revision": "a5046089a29d6a2f6d492fb5aa6b8b21"
  },
  {
    "url": "assets/js/vendors~artplayer.a9db8d7e.js",
    "revision": "fc2f3c97d3caf77467770e71cd367f8e"
  },
  {
    "url": "assets/js/vendors~dash.a7433c80.js",
    "revision": "280ab8edbde240337ea6284d6ac0aa54"
  },
  {
    "url": "assets/js/vendors~dplayer.c29ddcb1.js",
    "revision": "78cafe016960b8f09bb209857865f6b6"
  },
  {
    "url": "assets/js/vendors~hls.0e6be8f9.js",
    "revision": "432a14d5de1457ffc31e8226bd0e5ad2"
  },
  {
    "url": "assets/js/vendors~mpegts.749d0941.js",
    "revision": "005eca03ea0078de9bf5c3ef83987c22"
  },
  {
    "url": "assets/js/vendors~shaka-player.e0c261e1.js",
    "revision": "e975ee23b74e1a0bdcb8eb27ff450a2f"
  },
  {
    "url": "assets/js/vendors~webtorrent.537bb66c.js",
    "revision": "4e5a9f4ec5abb7ba4696527705cace21"
  },
  {
    "url": "basic/app/get-user-media/index.html",
    "revision": "27b10173c02e473cd003435df2ee3b56"
  },
  {
    "url": "basic/app/index/index.html",
    "revision": "12338a2adf03783cfeb76efffb0a0997"
  },
  {
    "url": "basic/index.html",
    "revision": "671ad51245f7089481cf329128a7a9a0"
  },
  {
    "url": "basic/index/index.html",
    "revision": "e3885413e9c469cf7ff5fd82214392c0"
  },
  {
    "url": "basic/intro/dict/index.html",
    "revision": "81dd108d4d6367d276e2a36ba321f921"
  },
  {
    "url": "basic/intro/index/index.html",
    "revision": "329dab2ef3ffd947d68df36374677fc6"
  },
  {
    "url": "basic/intro/introduce/index.html",
    "revision": "20c3ebbc37cf4caab3f34f418162c081"
  },
  {
    "url": "basic/intro/session/index.html",
    "revision": "79bdebb6679d59c525252323350ca477"
  },
  {
    "url": "basic/intro/stats/index.html",
    "revision": "284cf5e8af4e197b2954a2964a1e1fa3"
  },
  {
    "url": "basic/p2p/ice/index.html",
    "revision": "79ad735ba230050e365c38db66560a36"
  },
  {
    "url": "basic/p2p/index/index.html",
    "revision": "7f4af0fbe9d1a4d2b9ccf0fa7529f8de"
  },
  {
    "url": "basic/p2p/nat-advance/index.html",
    "revision": "b7397d4cf4d6987ad878c5104bb33d68"
  },
  {
    "url": "basic/p2p/nat-basic/index.html",
    "revision": "4699d46687cced5c2930e5cbce322745"
  },
  {
    "url": "basic/p2p/nat/index.html",
    "revision": "62cf84e24c8d175e6bc64748106e388d"
  },
  {
    "url": "basic/p2p/stun-turn-ice/index.html",
    "revision": "8750eeaf06fc8c8f002e66b3a8c16a50"
  },
  {
    "url": "basic/plan/index.html",
    "revision": "d07fedb7a8888f135d2447bdd93c8c74"
  },
  {
    "url": "basic/roadmap/index.html",
    "revision": "0c3ba8df6b26d4eba0884e58b62b8b09"
  },
  {
    "url": "basic/webrtc_api/basic/index.html",
    "revision": "62796340bfc0e19d8c8539138681ef99"
  },
  {
    "url": "basic/webrtc_api/guide/index.html",
    "revision": "3c8140a32cfd19336fde72bc7664a0d5"
  },
  {
    "url": "basic/webrtc_api/index/index.html",
    "revision": "d4e335c3eb7ab610a3400fe62d67f33f"
  },
  {
    "url": "basic/webrtc-1.0/index.html",
    "revision": "411045f124e5f8dcff199cc0fa9c83ad"
  },
  {
    "url": "categories/index.html",
    "revision": "8b02963ed33fdea8f96b38f319614c61"
  },
  {
    "url": "example/index/index.html",
    "revision": "ad8e9020479e5d0417cf33df91e4fa35"
  },
  {
    "url": "example/plan/index.html",
    "revision": "5067fed673d100d937cadc2bfd8d0ce9"
  },
  {
    "url": "example/roadmap/index.html",
    "revision": "c52a894c7165838972a62641a747a99e"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "0f98e7787a5a260a0bf024fc916df6a5"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "f37bd7e75dbd951b03e4a345a3a936bc"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "a25e3a30302e0216505b30d4c5c22f55"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "628d23241f04957e463287e8fd723f2e"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "8133a3cc68d466aa1c31d86d68246d8e"
  },
  {
    "url": "img/logo.png",
    "revision": "e32af1d30fd53270d500615d58493187"
  },
  {
    "url": "index.html",
    "revision": "410fa867543ddea377ac0a83ef6839ff"
  },
  {
    "url": "pages/e76933/index.html",
    "revision": "2033b3207ae155a55c62d78c1e9181f7"
  },
  {
    "url": "resource/index.html",
    "revision": "7eade764e14775943554e3120f982f17"
  },
  {
    "url": "source/index/index.html",
    "revision": "4869c92d158f684ff302eb896c080d40"
  },
  {
    "url": "source/plan/index.html",
    "revision": "73841caca723498ce2a8a5a1de11b1ab"
  },
  {
    "url": "source/roadmap/index.html",
    "revision": "b99627155ee7392ccc4e4c6c931e1224"
  },
  {
    "url": "tags/index.html",
    "revision": "6780d335170aa1a9700fbec1cf176bdc"
  },
  {
    "url": "topic/experiment/index.html",
    "revision": "f27f94c74ce872485fcf3ca7c7f22643"
  },
  {
    "url": "topic/index.html",
    "revision": "7691fa0679449fabd5c6f758a7e5b1f2"
  },
  {
    "url": "topic/index/index.html",
    "revision": "12a07dc073ac7802b4ed2e78f9c9e4c4"
  },
  {
    "url": "topic/peerjs/index.html",
    "revision": "bf8ba5cd0f115cf777f6a8558314f95e"
  },
  {
    "url": "topic/plan/index.html",
    "revision": "713edff6f2fd97341cfa71b86fa4f589"
  },
  {
    "url": "topic/roadmap/index.html",
    "revision": "20dfb71dfc42f5de0c111833fa2ee44b"
  },
  {
    "url": "topic/simpleWebRTC/index.html",
    "revision": "636d237a68ab4b31d3584461cf7eed83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
