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
    "revision": "4db58d3ce289dacd0c5c4608c462903e"
  },
  {
    "url": "about/index.html",
    "revision": "8597302ee53b4535fa97b8f69acd51f0"
  },
  {
    "url": "advance/index.html",
    "revision": "81cf9c96b97b944ef469122f7adff716"
  },
  {
    "url": "advance/index/index.html",
    "revision": "7bc2b787ddcd4057fa4d15c039b64cf4"
  },
  {
    "url": "advance/plan/index.html",
    "revision": "654cacb9d50a6342b03c842337c189d7"
  },
  {
    "url": "advance/roadmap/index.html",
    "revision": "afc95b8b8ac1c87d021350a0c4b3757c"
  },
  {
    "url": "archives/index.html",
    "revision": "04e228206cc7dc6adcbfd1ee618d127a"
  },
  {
    "url": "assets/css/0.styles.fa1913f3.css",
    "revision": "af865aef88e760b5e95b24564dd6742f"
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
    "url": "assets/js/1.2068c1db.js",
    "revision": "c309840aca9fc995b70441dabb251d2b"
  },
  {
    "url": "assets/js/11.8f8d8c94.js",
    "revision": "fd8e0130303c44673ce6f4fa531970df"
  },
  {
    "url": "assets/js/12.a86359d8.js",
    "revision": "427420e7f57bbb9a91616f62a33e0d25"
  },
  {
    "url": "assets/js/13.f9165900.js",
    "revision": "7607cada8937fa49c190fe38b266e66f"
  },
  {
    "url": "assets/js/14.5bcc0334.js",
    "revision": "071f36d5fcecc58e072bcd853d89b727"
  },
  {
    "url": "assets/js/15.daa60dcc.js",
    "revision": "da869dc418479fb1efadcfcbedd5853c"
  },
  {
    "url": "assets/js/16.2ef6dce7.js",
    "revision": "3cc396639a4a93427ea49e4c5c37b027"
  },
  {
    "url": "assets/js/17.8c318acc.js",
    "revision": "f06cd6743d3653eb8b91abfbc2e08000"
  },
  {
    "url": "assets/js/18.7f4f6ced.js",
    "revision": "9203be0bf06247c695d16893d5a9c03a"
  },
  {
    "url": "assets/js/19.7a274e56.js",
    "revision": "349a452ce0b30e62e3fd88d8226388ab"
  },
  {
    "url": "assets/js/20.cc7484e4.js",
    "revision": "5f2a391b5cd39aa3e59ef734a62c63dd"
  },
  {
    "url": "assets/js/21.8f4f04c1.js",
    "revision": "66fee2fe8654730711d59152a371a435"
  },
  {
    "url": "assets/js/22.8e03dbef.js",
    "revision": "013f701b8e956c3d80902e8ab3787e48"
  },
  {
    "url": "assets/js/23.ae5d7b1a.js",
    "revision": "591aefa1685b041eec61cc0fee4dab92"
  },
  {
    "url": "assets/js/24.a07e377d.js",
    "revision": "5e025b29dc29a6dd5d35ead67d9307d0"
  },
  {
    "url": "assets/js/25.ae45a243.js",
    "revision": "98b9214e6da2f351018fa86e1502f456"
  },
  {
    "url": "assets/js/26.292813ba.js",
    "revision": "445429acb55d32f2e275602c220dde93"
  },
  {
    "url": "assets/js/27.b5422518.js",
    "revision": "b5464736f2545fd76d2f28a2ba390b44"
  },
  {
    "url": "assets/js/28.5b569d05.js",
    "revision": "4e71e56274b099afdb0f8d584e03d9d2"
  },
  {
    "url": "assets/js/29.e406c2e9.js",
    "revision": "c9faeea510acbed33ee5e39209c23862"
  },
  {
    "url": "assets/js/30.0eba634f.js",
    "revision": "4903ac8f7a7c725f2b550a62115e3e02"
  },
  {
    "url": "assets/js/31.4f67e3d8.js",
    "revision": "bf2d9b6500acdc3cf6320fdaca641fd0"
  },
  {
    "url": "assets/js/32.9e0293ef.js",
    "revision": "fee525a14033baf1b74ade3b561ef832"
  },
  {
    "url": "assets/js/33.7c756595.js",
    "revision": "9e2f81ddafe9667702cb246586a081f3"
  },
  {
    "url": "assets/js/34.335b4f17.js",
    "revision": "f57ee7d503ea1444f500af4ca8b83b9b"
  },
  {
    "url": "assets/js/35.01786aab.js",
    "revision": "a4d59b71cc8b26a39abfbe76f3068a51"
  },
  {
    "url": "assets/js/36.f2070bed.js",
    "revision": "7b7e4e87e547080f2cc141e91e72e053"
  },
  {
    "url": "assets/js/37.7c70043c.js",
    "revision": "735f99ad388e93f87c2794817f524393"
  },
  {
    "url": "assets/js/38.303adcdf.js",
    "revision": "e79f5dab7aebe87c4f3af73fed17c3f4"
  },
  {
    "url": "assets/js/39.39b0a121.js",
    "revision": "0f3af3bb001a3fe7cb92c8ad4c598467"
  },
  {
    "url": "assets/js/40.27cf0425.js",
    "revision": "8df567daceafc967bfe5e705431cdb43"
  },
  {
    "url": "assets/js/41.60cc5ac0.js",
    "revision": "b4350bea5208db4c5685701103765b97"
  },
  {
    "url": "assets/js/42.48c15345.js",
    "revision": "699db61161a5a0ed7871b878328aef8d"
  },
  {
    "url": "assets/js/43.836eadb6.js",
    "revision": "e5693ff80eb6502512db7249627d5046"
  },
  {
    "url": "assets/js/44.f83a74c1.js",
    "revision": "5e4e49bbb0fe4fc4f5b191363d0e1ccb"
  },
  {
    "url": "assets/js/45.1325bd73.js",
    "revision": "84834782837dabe106167d3494c33268"
  },
  {
    "url": "assets/js/46.26125c7a.js",
    "revision": "fca846dc2cdb9b8212f9f92c9bb00a29"
  },
  {
    "url": "assets/js/47.d8603164.js",
    "revision": "4ff66d312fd2d502c2085cc790af5d4f"
  },
  {
    "url": "assets/js/48.6a5f1eab.js",
    "revision": "167034c940654694b4fec9a73d69152d"
  },
  {
    "url": "assets/js/49.2d88e192.js",
    "revision": "ee3a461c0daa8e6aa76f58c19d549639"
  },
  {
    "url": "assets/js/50.e1d6d683.js",
    "revision": "1b254fc65d82fcf142ced16989ff1038"
  },
  {
    "url": "assets/js/51.5204c164.js",
    "revision": "5b145bd0818cd0070835be3f2f6d6951"
  },
  {
    "url": "assets/js/52.890170b0.js",
    "revision": "1a1f6c10bc1995d3b361faf3283a4937"
  },
  {
    "url": "assets/js/53.7d5218da.js",
    "revision": "8ec200b68a87b4896173112a195369c0"
  },
  {
    "url": "assets/js/54.081d6d8a.js",
    "revision": "6218ee6c39109ab16cf571cbd8939ebb"
  },
  {
    "url": "assets/js/55.9193e648.js",
    "revision": "7e47080131b9b48639efc4f1be02c8f7"
  },
  {
    "url": "assets/js/56.c283c363.js",
    "revision": "52bd7e252dc555910c8ca99745e538e9"
  },
  {
    "url": "assets/js/57.36ca963e.js",
    "revision": "43c17ba331da7c1aec520fb87adc3975"
  },
  {
    "url": "assets/js/58.ca50e853.js",
    "revision": "052f26d8d9dc014b7061772449a370ec"
  },
  {
    "url": "assets/js/59.1dfc405f.js",
    "revision": "3a2b155ef6139e6aa7152130bb045e8e"
  },
  {
    "url": "assets/js/60.a6aafe70.js",
    "revision": "e84336e39bdd1226abe3a44053deee36"
  },
  {
    "url": "assets/js/61.35b09da6.js",
    "revision": "ccdabfc44e88720ef06a4572db070716"
  },
  {
    "url": "assets/js/62.d9905bc4.js",
    "revision": "370ef0e5a89ed524c981d2f3f969342c"
  },
  {
    "url": "assets/js/63.f502a4a5.js",
    "revision": "a9d203e304e440e3fe1c54a927a46eab"
  },
  {
    "url": "assets/js/64.63cb0948.js",
    "revision": "f5041a7a997c97b65a7b332d8b47457a"
  },
  {
    "url": "assets/js/65.15922937.js",
    "revision": "f80bc85b74b0670559a3f7c58dfed3b2"
  },
  {
    "url": "assets/js/66.0f2a61bf.js",
    "revision": "b595431a3319bdcc1527506d96fb205a"
  },
  {
    "url": "assets/js/67.b9bb6554.js",
    "revision": "f087c27ef2e1fecf9627416d9525d8f0"
  },
  {
    "url": "assets/js/68.c993ab07.js",
    "revision": "52156318fdaf1ca85bc87a65d95049dc"
  },
  {
    "url": "assets/js/69.16e4d5cd.js",
    "revision": "103f9157969cdfc18ac9217edfc7e877"
  },
  {
    "url": "assets/js/70.453a604a.js",
    "revision": "9856be486dbd38fbdffa498aeadb6441"
  },
  {
    "url": "assets/js/71.57070527.js",
    "revision": "5c12a9f4be4812386cc4092fced943d1"
  },
  {
    "url": "assets/js/72.7edf97b7.js",
    "revision": "8a3ba2f38483f644413ff44cba04bd10"
  },
  {
    "url": "assets/js/73.cb826c97.js",
    "revision": "ebbdd4194a35d5d6a836e068f6bba0d4"
  },
  {
    "url": "assets/js/74.f40761ed.js",
    "revision": "9daa3f0f334c7ff2c82c64bd356270cb"
  },
  {
    "url": "assets/js/75.a8fde850.js",
    "revision": "245ad7538e44f206e8cbc8a75825a917"
  },
  {
    "url": "assets/js/76.71255e54.js",
    "revision": "9ce00ad86ed6822a9b5dcf37a61be1ea"
  },
  {
    "url": "assets/js/77.de20ce37.js",
    "revision": "e889959d87610f91129b7c2098d0f4ea"
  },
  {
    "url": "assets/js/78.91afa182.js",
    "revision": "e53c41981aa4c212d5de3440bb677bc7"
  },
  {
    "url": "assets/js/79.5ec162b8.js",
    "revision": "a722bf480dde20a6b82f2696d106dee2"
  },
  {
    "url": "assets/js/80.81ba4a79.js",
    "revision": "a9b76fabcf36d81f3bf0d0ebb732891e"
  },
  {
    "url": "assets/js/81.dd9dad97.js",
    "revision": "6b1840f5d0388640021e3587f59d0a0e"
  },
  {
    "url": "assets/js/82.5d12f510.js",
    "revision": "8a9576c0b9f4b0c5216a872a1ba8fd22"
  },
  {
    "url": "assets/js/83.14bee419.js",
    "revision": "7548326b2fa1554466679790fdd5b937"
  },
  {
    "url": "assets/js/84.f01335e5.js",
    "revision": "7c0494d3bbabc0137a310d242ce4c19e"
  },
  {
    "url": "assets/js/app.2b835d01.js",
    "revision": "33ce1f85ec0907c4afe931ced9d8fe70"
  },
  {
    "url": "assets/js/vendors~aplayer.ef69e8c8.js",
    "revision": "ef7a1ae576befcc4b0d518af3587ffee"
  },
  {
    "url": "assets/js/vendors~artplayer.9f457d6b.js",
    "revision": "8b09a871621d6e86ef0b21ff0f09afb8"
  },
  {
    "url": "assets/js/vendors~dash.c779a1b8.js",
    "revision": "38305b0644b4b7388519bc43ccbd261f"
  },
  {
    "url": "assets/js/vendors~dplayer.008e957a.js",
    "revision": "eef59f5bdceda956eb6ced5c02b7fa6f"
  },
  {
    "url": "assets/js/vendors~hls.18d1f653.js",
    "revision": "d39adcf226d1be55d015ce3467416b3f"
  },
  {
    "url": "assets/js/vendors~mpegts.02ab45df.js",
    "revision": "431a95364c727fa65548c7b1fa68f828"
  },
  {
    "url": "assets/js/vendors~shaka-player.f723bd71.js",
    "revision": "abfac16fb3f19e00cf25a0accb0cede7"
  },
  {
    "url": "assets/js/vendors~webtorrent.271bb3b6.js",
    "revision": "5951a5a71a017945eea679d0cd4cf30e"
  },
  {
    "url": "basic/app/devices/index.html",
    "revision": "a8d270696265e4cfeda1a4145a75a8fd"
  },
  {
    "url": "basic/app/get-user-media/index.html",
    "revision": "25d6198b1ca35cca1475dfb3d09edb18"
  },
  {
    "url": "basic/app/index/index.html",
    "revision": "37365dcc1aac26066f0344e39806e230"
  },
  {
    "url": "basic/app/streamCapture/index.html",
    "revision": "dfb1669aac54fcd94a3d4a75a7ae567f"
  },
  {
    "url": "basic/index.html",
    "revision": "92b814567a4ea0adec22e7cad19ca6ce"
  },
  {
    "url": "basic/index/index.html",
    "revision": "38a35e05952668c912073a4c11d36810"
  },
  {
    "url": "basic/intro/dict/index.html",
    "revision": "ce4f59aec26a911d99794ce56fc97a09"
  },
  {
    "url": "basic/intro/index/index.html",
    "revision": "d8f5509b3ac0441989899ed5c0086768"
  },
  {
    "url": "basic/intro/introduce/index.html",
    "revision": "79d824e867723ee0294f22b67c3afd3f"
  },
  {
    "url": "basic/intro/session/index.html",
    "revision": "64cd2c485257d8bf92fd2dec514abe1d"
  },
  {
    "url": "basic/intro/stats/index.html",
    "revision": "001f9c93dde9916991b7540e31e42a3d"
  },
  {
    "url": "basic/p2p/ice/index.html",
    "revision": "4a79d370872686594d8338f042a085f5"
  },
  {
    "url": "basic/p2p/index/index.html",
    "revision": "a92ce62a2b7cc2a4aab326976da11a02"
  },
  {
    "url": "basic/p2p/nat-advance/index.html",
    "revision": "1637e50fe3243b7ee7edb832a3eacc9c"
  },
  {
    "url": "basic/p2p/nat-basic/index.html",
    "revision": "619cdbd49de525b427b51a1d911b6eec"
  },
  {
    "url": "basic/p2p/nat/index.html",
    "revision": "fbd8e08b7849134cf75387e0b15a1959"
  },
  {
    "url": "basic/p2p/stun-turn-ice/index.html",
    "revision": "eb6842b58b50faeb4e01032918b4c49f"
  },
  {
    "url": "basic/p2p/stun/index.html",
    "revision": "eb7c01366790230bad107875d9a7eb2d"
  },
  {
    "url": "basic/plan/index.html",
    "revision": "f1a020c5ddde2b23ac4d193d20671f9a"
  },
  {
    "url": "basic/roadmap/index.html",
    "revision": "60ef73899a8989ca1a872d7d59106c46"
  },
  {
    "url": "basic/webrtc_api/basic/index.html",
    "revision": "4de5994882b1baedadeaebc81a25738a"
  },
  {
    "url": "basic/webrtc_api/guide/index.html",
    "revision": "a9440bec2921a5a1c16f94f51a074968"
  },
  {
    "url": "basic/webrtc_api/index/index.html",
    "revision": "b2215b1dba6718af471d76816ade816d"
  },
  {
    "url": "basic/webrtc-1.0/index.html",
    "revision": "4662ee41f5fd270b93764253b4b890dc"
  },
  {
    "url": "categories/index.html",
    "revision": "c479e266103f16320f910e6549739349"
  },
  {
    "url": "example/index/index.html",
    "revision": "7ff80096c5ecaff7a4c7a55d97963c8f"
  },
  {
    "url": "example/plan/index.html",
    "revision": "5e6e224cadffdab28c04d633bf812673"
  },
  {
    "url": "example/roadmap/index.html",
    "revision": "707e2b6d2fccf85835913eecb9b8089d"
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
    "revision": "9ed73c1e677be967bcec591d79ddef1e"
  },
  {
    "url": "pages/e76933/index.html",
    "revision": "6590c12e50349701cc90836817fd62bd"
  },
  {
    "url": "resource/index.html",
    "revision": "ea39d992bd3e3b222e55bac8909b13f8"
  },
  {
    "url": "source/api/index/index.html",
    "revision": "e40bbca2309c3d6e7bf04b6c4eb9ee39"
  },
  {
    "url": "source/category/index.html",
    "revision": "19043c4397afbf69a8ad4958f2ad80b5"
  },
  {
    "url": "source/index/index.html",
    "revision": "8c5ede0c5574f82daca1f3718b3af77f"
  },
  {
    "url": "source/plan/index.html",
    "revision": "b4b45a0f2b14e37fdb7c26ad3795344f"
  },
  {
    "url": "source/roadmap/index.html",
    "revision": "6c87b0fc7ce9813352579b2648fa3702"
  },
  {
    "url": "tags/index.html",
    "revision": "019ad1182168ee5f7f291b0ecca19073"
  },
  {
    "url": "topic/experiment/index.html",
    "revision": "3637f1a0e40a752638e5ab78e0c62442"
  },
  {
    "url": "topic/index.html",
    "revision": "0f9c2e0dd6576b5d97f0ed5e910a50a9"
  },
  {
    "url": "topic/index/index.html",
    "revision": "59466983bbad9f9faa98995ffa1e051e"
  },
  {
    "url": "topic/peerjs/index.html",
    "revision": "11041ae53750fa0b463dd3fd5f5e49e3"
  },
  {
    "url": "topic/plan/index.html",
    "revision": "fae35f3516d1d11603850491e9a94c2f"
  },
  {
    "url": "topic/roadmap/index.html",
    "revision": "7e9c8e19fcc16a964e96e65ba9d4d654"
  },
  {
    "url": "topic/simpleWebRTC/index.html",
    "revision": "38f7bab6041ad4198fd7dd547a139a31"
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
