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
    "url": "1.base/1.ECMAScript/1.index.html",
    "revision": "c6c1599238c90709fcb5836aefe61896"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "ec2dc9504d4cf14c71a604debbce4ec2"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "b89905cfcde282b5ee036bdb1f0d396c"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "e6ef163f2d01fb65f38be5bef6315b31"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "a096c24673783d95791f68d42a7087f1"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "b6168ab9130f5ad3667b447c4e320056"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "23c75308a4a2e738e54e0887b226c195"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "df83ccbdb59c463524b389ae4c78d4d6"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "b87e047b621a9f2718ae338264e5facd"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "71349c2d9d0532605299c4dddbab3f91"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "61fc25970ed701ab21e489d0403e7278"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "e416c7eff05803780921551a707c0ff2"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "5ec9fecd72a7df868d8027ad59a66233"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "3c107d197ca1a0d73473ad37bfe5a5d8"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "d1cbb5a9dd7ddfe493992bf95bbac58d"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "22a854a1d4c18d156180d010f61b538e"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "011221447c6c47a38d175edf39b5ae9e"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "2380b4d499601be96feae501ac222831"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "028db96711f6c593dc5c8113286120f2"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "ab1adfe05236d161961b989ae442352d"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "a9d93f5bc2586d24fb2205cde6f221a1"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "58320c314a65b085b78c4e440e206d19"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "8e2d4e465c6525c370314c74e3482851"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "bfb4b0ef841247626305e1ea7c665d0b"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "9752e6758f5e6519d3a075f6450d8c1b"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "caae40c024719f5b6e3b8e939ffa13d8"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "001d5a04fa72a77e38c31469a305d6e9"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "925c737a0e4e6f68d462cac215ca4516"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "e68d29551d085a3ad9b86c924783ca54"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "b4af21345499ee923f65d396ad3b958e"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "d40aed71990d44aad92a847975a016f6"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "912cb1cacf23f4df19ca6c3cb0e70351"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "36448d7658454b0fbd6c276c3654c299"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "9d6f068c6dcad83c8c276026261dcdc0"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "302a2ee66167fd17d28e2b8a9b645f11"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "c219067546ad500af463ee5e4205d51f"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "4f41fccf7b818f878d0b30d08d416ad4"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "4f11b1f2164f1afdaec3078c49f0b43e"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "4fd14d008dcc44690bf11d68beb35a5d"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "ba93eec674d7a609a90a2c0052fcd9b0"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "2624d34734def2095b01b72c731771a5"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "8db58833dda7bc86d0c54436f9536cc1"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "4ea3146b8b49cbbc379effefa9e8e36d"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "5700783045e6edd60ad5f9a2b180a7ee"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "d6296e731e90e60b42b58971378eca19"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "69a56591f86146ddc316cecf7f56b848"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "200a66c37ac1d5f60aae6958a75b1755"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "cfd5e0dc92b87a15cc094896d35c9e25"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "1be2ad9ca0b1f8e0ec41d34e92451fa6"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "fd0713c7cbc6967c5fba0842b631699b"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "cdf0627131b2b0b43d94a8f56becda62"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "dbc2f28e47111ed670cf7344e2e1d09c"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "a945104d32541789dc02eb39fe68693f"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "f4e54bac95ecb91e414b81d2a13d83fa"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "236dba513f82a0e367faa1f8315adbe6"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "fe32698730e547eda837de9a0d7b06da"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "37d6e0f51b9598a11d629c9a92f135a4"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "bcac2eede29335cfb4339b571355ceda"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "970f2c287d53aad1777b6e7ff903707b"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "90ce4f7ebfcd4126b75c972f78dbe7af"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "3645b0db4299faaf73e5e763e0cbc857"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "f6661f479abe7162830063128dc879b5"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "0c5db97dc60eaf9becabec3b33bf1c77"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "96c259b5ca6b7caa92bf3571285232fd"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "375ba0e0806e35b077baa4d97f2f4357"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "24f9bc4765ea72b179f77fd9c19e8220"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "dcdc70aab4d274183436b9bb5397a3b9"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "634805fdc6a447a20fc0cbc7bfb2d7b6"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "fa3e08f5f9063de9428b5dd7934c7215"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "1ba70bc02d174b54f52bfda6a4f923db"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "c0de8830a1102042e314d779bcad5e6e"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "2345cc69fc8eb35e6dbe6257bf6cbdd7"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "8cf5ee370ce090f5164da449eb4f0515"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "bddd7ac6dc7fd3932f4c71a6a778fa32"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "ad989d31a425bea6d86d22fa14240425"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "8c3f027a3ad69b9fe3072553410df803"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "2b54a26e6baf60165be8f2d93169ebcb"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "bf25089d2c636bb7256e1324cc3795c4"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "e34a80d6448c4a4ceee899da6fb7d550"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "d82055578368278e06f95b9ca39f361c"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "8ad229e20846b91846906b72a7fce357"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "7620c1a3f4a6c4f58bac92d08273c85d"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "c0b0c8d9f2ebd69b3e8be8063de3ea6f"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "b94e603a946a86e87f3c10d49bb66858"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "7f10b60d4dffc57669c61d148977dd9c"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "754f5047a22d7e4965395166abb597fe"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "ff52c3cc247bfc80967e1fd7a3fa4201"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "c02defa3a5506d71cb8aa7a595dbce46"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "b66e42adfe842d391e828ae159673435"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "5fc45715e83527615a0d1b6c84e25ba9"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "64c4703b9e72b1016b376c3cb282ad4c"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "b37aa78350c15f09730cd50f0fc36745"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "2f2d10b26ed45a2e3b45cf2280b74bb9"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "068181a9168cf2088573628d1944a346"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "36d53553086c015f6fb92b5292e71225"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "92e5420190afd830e61fa5cae6ea2998"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "e55ccfc73fc073717bf4a2cb7e72ef42"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "794866bb201444dd5ba2719c2eab9aa7"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "edbaf79c008c54bbecf6b2b01e8b38a1"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "77d2cf95c45aab0b69434184ca3724ee"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "6bf41dcbb678dbe8357b755eb01c265e"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "6852b168f71b93e4077d9faead17e90d"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "0a9586ab1f51652d88c0a4cefeb17257"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "3fc8ca00c225a27f382c76927b8aa709"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "2cff347e08a8d437ebff1beb63e63db2"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "4e1f5bacffc635ca4c06e88b3da510ca"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "4ae3782a69095e6cace08832e4a37170"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "85254cac42cef6a88088ad22bea1b7b7"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "1187a5504fc93c348521383268e1d80c"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "6a851cf902cfdc38a11224da3f2ba55f"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "600740e2004b8fa7f55784c75867cd78"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "433c6531dbd1113cda7649dd59839773"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "e06d21052bb2d36c5e77d2efc8d5a47e"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "cfcc77106fe67775b9721c50b36fc70f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "7a909320f36abc915fdecc64d496a8a3"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "539b87cb3f761851aaa5d0b444ce9706"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "3ac0e395adadb3929ac681893c2e71e8"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "14ee67977c1f34f09aac36e269951cf7"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "692da9a073485fdc9e967f1ea7537d2b"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "c2329ff6e914b9d393f5b0022e969063"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "2d0fbae7b8fb12282c852d6e1a19498f"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "4f6030325c9b6ddd08451d4da7cec314"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "6bc77aa6c6e633854d9016193a0d2ee5"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "669fa819555e894e50346589bd574d1b"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "b7f764ddf6f543581c5f5eafedff654e"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "fca4cb7e2e8d77c0d89f9a346c159ac1"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "730d6abd844bdaff9239968d107ebc02"
  },
  {
    "url": "404.html",
    "revision": "b50535b002a04fe2479e14634eb69655"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "35a5495b2278414e60e1b139f29b0452"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "0664cfed7b9f860feeef334b93ee8a3f"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "93c8ca7cb49b5dd025540b0465f60ed4"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "a0fc0937ec4cc175c33a9710655db2c6"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "df3529810da60a725b2c9137ff14a5e3"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "100403b6253a205c0319325e108a5586"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "84d993cc66c65ebc70abaa89018a8bf7"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "b2dcab97be68d0dad9e9381397bbb382"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "aa2431d9390b0bc8adaaedacf60752b3"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "133f1ff9dff1e0da4bb7fa9b62e2f8a0"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "296d48e7c961ca262bdd9ece65bd768f"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "417851409fe21d965363faea1c89309e"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "f439e7b83ce09917a460e7d2830f30c6"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "a6b9723fb35792762c27886f4acbcda3"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "3eca31f2b929a4a85f215a29c5ccde99"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "6cfcd4dc72cf59b530539c09691888c9"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "369c1fa7935fba7cfad54efac449fe08"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "af8b31e5815d5e3c8ac5a47ed7432539"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "1a6fe7aa4c5c3d75429a995d7a2966bb"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "468b27f9ad425bcb64c1f150af17c3e6"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "a52a47b6c3b418727fae39089e8b3ca9"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "c6fabb6982f3a67a19acc95c3381629a"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "fd72c3d3646fdfbc5f5dac197d32ed77"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "196a2586a07b6a1fa582984c4d9fe918"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "804424e39178128c8e9657a0608427bf"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "2dad6f614de3e0e5f456b20ff3f695be"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "237f9296cc9e98ac42cf5b6feb49c100"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "2f24289fb138cd5c3d4acb0aefe3bae6"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "03fc880705656fd6b80bed0ed11a3492"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "74dd2f82c99a5e835d3fb2c49547b254"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "b1cee47979eb4706c5f55ca097dded48"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "f2fb8937c2d6d7d46ce08aaaf2b0f33e"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "2440c42f270f05db58700e15ba12ab82"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "15a0ec955028a005088a3861e1dea538"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "40fe3268f4a1cdb47e015a7999d8c704"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "61defe08dd23a9265d7d170cb117a662"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "9e5432eafcda8431bf81d96d077681d2"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "80ab21ec4f62f33c29c61aa1fe26cc76"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "0bb38d71cd3f8db645d8bd83bd888c8b"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "cdafca13055da796443120f13fcb3c2c"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "a3b7d845e9a9132fb5d5673e664b14a3"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "93ab65df669dbf375074c0168da4b4c7"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "1b127d12d10816f05fd02aabd04a8797"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "c7421b048ce0efad1715a12b109f87f6"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "97a15754b57928d6e2d1317473e55380"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "248755db6f7cf1600b9aa3e82efa5217"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "86aaae378e10e58bf13218cce3d680d6"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "e893c76652ec29c82bc61616aea5a7d6"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "7d421b17b272e25a698f4b82dac8a4ed"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "cc45bb5b66c1659d53b3f227ca0cf591"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "e6a3ae49f14375fb319ae45c49b8cb7b"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "a9077c52216562eb79764dd06d660ec3"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "19a9a8eb313aff8f4c513eee245f3a6d"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "bf8cfed15fbfb52b25dc66a7771da22e"
  },
  {
    "url": "assets/css/0.styles.b166fd3a.css",
    "revision": "ff30cefb435e8091a63f7c1dfda3f645"
  },
  {
    "url": "assets/img/1.0.24681155.jpg",
    "revision": "2468115597e7492aeec2e7962a83ea59"
  },
  {
    "url": "assets/img/1.0b494f95.png",
    "revision": "0b494f95123a3f5422f448b7e551d8ec"
  },
  {
    "url": "assets/img/1.11e93466.png",
    "revision": "11e93466d73194f644b67663dd1cbfb7"
  },
  {
    "url": "assets/img/1.2.7142c400.png",
    "revision": "7142c400b4258e23787650a4175bc546"
  },
  {
    "url": "assets/img/1.29ac119d.jpg",
    "revision": "29ac119d42b0dedc5da7ee5c4527893f"
  },
  {
    "url": "assets/img/1.3.bd32d06e.png",
    "revision": "bd32d06e47be4cbf283b69099bea8b01"
  },
  {
    "url": "assets/img/1.4d41cdb6.png",
    "revision": "4d41cdb6e14be7289eb00da95d3a7572"
  },
  {
    "url": "assets/img/1.c284738c.png",
    "revision": "c284738c297a57fd920596ef2d10a14e"
  },
  {
    "url": "assets/img/10.f4adccba.png",
    "revision": "f4adccba4944e29879783b0e984eb699"
  },
  {
    "url": "assets/img/12.a5cc3b99.png",
    "revision": "a5cc3b9921b8c065cc8805a11f988d2e"
  },
  {
    "url": "assets/img/13.d9e1d5f2.png",
    "revision": "d9e1d5f286fa2c18604fbbb866f679ba"
  },
  {
    "url": "assets/img/14.c10b952f.png",
    "revision": "c10b952f3cecf5375a5827c0398dc547"
  },
  {
    "url": "assets/img/15.75ec05fb.png",
    "revision": "75ec05fb44e1ef199ffeb5216396632b"
  },
  {
    "url": "assets/img/18.a365ebb1.png",
    "revision": "a365ebb1d7548ebb83e3cd8a3b2fc49e"
  },
  {
    "url": "assets/img/2.1052f81f.png",
    "revision": "1052f81fc6aac6b3eb92946d353c8506"
  },
  {
    "url": "assets/img/2.46748e29.png",
    "revision": "46748e297f0d7de1526b76916262a140"
  },
  {
    "url": "assets/img/20.b701f6c1.png",
    "revision": "b701f6c15a0f5f92f4e5c1f5b8e4cfe8"
  },
  {
    "url": "assets/img/21.520202dd.png",
    "revision": "520202dd2563db0bf8249fcc6e9493f6"
  },
  {
    "url": "assets/img/22.cb722fb6.png",
    "revision": "cb722fb63165c2204dd7de155b3f3295"
  },
  {
    "url": "assets/img/3.1.59274cd7.png",
    "revision": "59274cd75c605d3bc46d46117e971478"
  },
  {
    "url": "assets/img/3.5a7c70a8.png",
    "revision": "5a7c70a865533101f927a3cb83e60950"
  },
  {
    "url": "assets/img/3.656d330d.png",
    "revision": "656d330db5132d74024b21d9a0fdd751"
  },
  {
    "url": "assets/img/4.41d61c80.png",
    "revision": "41d61c80eb2e3a292ed722b5f3c01199"
  },
  {
    "url": "assets/img/5.5a0699db.png",
    "revision": "5a0699dbb3e2b1d4c5e38a01d699f579"
  },
  {
    "url": "assets/img/6.ea033b0c.png",
    "revision": "ea033b0c2ef27ef1c58905000d8c7f97"
  },
  {
    "url": "assets/img/6.fc8bc691.png",
    "revision": "fc8bc691d6091dd6d53235c71e6d8ed5"
  },
  {
    "url": "assets/img/9.1.2d47c0b1.png",
    "revision": "2d47c0b18d08427898a8f07952b8f48e"
  },
  {
    "url": "assets/img/9.2.39453120.png",
    "revision": "394531209fd95d8582f4cbccbdb37355"
  },
  {
    "url": "assets/img/aggregate.a55e7774.png",
    "revision": "a55e7774fd7fcb1788f8ccd5cacbc934"
  },
  {
    "url": "assets/img/huohu1.2a21f2f4.png",
    "revision": "2a21f2f47db2e170a354ec62858a6f94"
  },
  {
    "url": "assets/img/huohu2.91b76628.png",
    "revision": "91b76628cf367ac8cb1b40518e1810ca"
  },
  {
    "url": "assets/img/prototype.86665e7a.jpg",
    "revision": "86665e7a500a108fe4ef42259b2a47bf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sequence.083a7391.png",
    "revision": "083a7391d6f4384ab5783f06b9aa618a"
  },
  {
    "url": "assets/img/UMLS.a05a63bc.png",
    "revision": "a05a63bc9581ed8a2da1e58ba1e73c2f"
  },
  {
    "url": "assets/img/waterfall.0b2f7821.gif",
    "revision": "0b2f7821f18de5d4bbbc698a7b6968fd"
  },
  {
    "url": "assets/js/10.3d96434f.js",
    "revision": "aec4503d406a12fc626e736dbb823779"
  },
  {
    "url": "assets/js/100.c80e2656.js",
    "revision": "fb6814e008ee64ddd7546b78c1b2ea63"
  },
  {
    "url": "assets/js/101.9e2452b0.js",
    "revision": "91f56640bcc98d095d8bd42bd92f29b6"
  },
  {
    "url": "assets/js/102.f0338f3b.js",
    "revision": "7841d15b260dac66eaf5e2c0dea5d39c"
  },
  {
    "url": "assets/js/103.57088005.js",
    "revision": "649dcf5afc7857687e241896dd1616be"
  },
  {
    "url": "assets/js/104.5a65ca34.js",
    "revision": "05b1c18066ff0412c47cde67017bb786"
  },
  {
    "url": "assets/js/105.7cb69fce.js",
    "revision": "37ddf326c0fcd24d09ba7f3513f6cc17"
  },
  {
    "url": "assets/js/106.f380fdd3.js",
    "revision": "b3e450afdaa068bba0ea70d59af141d3"
  },
  {
    "url": "assets/js/107.cf8a0829.js",
    "revision": "9a32554a6e9202d1992ef29df35e2dd7"
  },
  {
    "url": "assets/js/108.3c5889a2.js",
    "revision": "13c3bf31eab1299dd63dfdfafe8e48b4"
  },
  {
    "url": "assets/js/109.a10f3f9c.js",
    "revision": "0844741ba74af01f860cd267364a469f"
  },
  {
    "url": "assets/js/11.4bc148a1.js",
    "revision": "f1340a4894c7d1a766ba0e32ba93dc21"
  },
  {
    "url": "assets/js/110.369cf043.js",
    "revision": "97cc4dd742cf50202518788c2773dc76"
  },
  {
    "url": "assets/js/111.99c2c64d.js",
    "revision": "2c1b0d936b3fc7a5922ce630b2812ccf"
  },
  {
    "url": "assets/js/112.25668345.js",
    "revision": "669ee437f62c8e738c516914fe393c80"
  },
  {
    "url": "assets/js/113.2522d900.js",
    "revision": "6260caacdf042e77eb23b9049efa7f6f"
  },
  {
    "url": "assets/js/114.e6812dd6.js",
    "revision": "72df24073dfce08e2873cab3dfc0f2f8"
  },
  {
    "url": "assets/js/115.af4c2078.js",
    "revision": "1e255e413fd4d2d771cb8dd5c49abf5d"
  },
  {
    "url": "assets/js/116.33c49635.js",
    "revision": "31fb4603f2cb686286d8d65f532caa77"
  },
  {
    "url": "assets/js/117.3217c7b2.js",
    "revision": "56e3447230cbe779be86aac65b139193"
  },
  {
    "url": "assets/js/118.869bda75.js",
    "revision": "82f4268fa9eeae52daea9a1e52971766"
  },
  {
    "url": "assets/js/119.91c7754e.js",
    "revision": "8241335620f4ca2e7cfd1a78af82b792"
  },
  {
    "url": "assets/js/12.146b2fd9.js",
    "revision": "98a08724c19b8f62143b1958400ab3a9"
  },
  {
    "url": "assets/js/120.873c96b3.js",
    "revision": "d6c0a719e926f72a2ac31755b61a128f"
  },
  {
    "url": "assets/js/121.0427b9e0.js",
    "revision": "077e0c93b9e4e2fca6714be3210204c0"
  },
  {
    "url": "assets/js/122.9dddf121.js",
    "revision": "18dd30480da2c90b3172d4f6aa56f0a9"
  },
  {
    "url": "assets/js/123.5bda7667.js",
    "revision": "b5b8b5aaff51edc60a19884935f00634"
  },
  {
    "url": "assets/js/124.471219f0.js",
    "revision": "6e3809db64f353d51f307d94e45c25ae"
  },
  {
    "url": "assets/js/125.e2d4cb35.js",
    "revision": "2522c00531ab3e87a19f6deee074e777"
  },
  {
    "url": "assets/js/126.77489974.js",
    "revision": "f3df953f913e8f2dbf6974223aa3c9c1"
  },
  {
    "url": "assets/js/127.6e8be0c1.js",
    "revision": "b71d008071f2ebf3ac797c8c38eac124"
  },
  {
    "url": "assets/js/128.a1d00bed.js",
    "revision": "82111df35acc20137fd8642d4d96dbc3"
  },
  {
    "url": "assets/js/129.976f03cd.js",
    "revision": "c866339289e919eee26485c4a8807611"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
  },
  {
    "url": "assets/js/130.41279563.js",
    "revision": "26d6a6164f57e4d377b99589da9cc4cd"
  },
  {
    "url": "assets/js/131.b2c85dfd.js",
    "revision": "1195fdc84b8385fc6aebedbae266590e"
  },
  {
    "url": "assets/js/132.1fcae530.js",
    "revision": "b11d9e73476d11eab518ecf76065a357"
  },
  {
    "url": "assets/js/133.07a19088.js",
    "revision": "00c52abed38967ea454eaf431ba1bf86"
  },
  {
    "url": "assets/js/134.3447d412.js",
    "revision": "00a7fcb6c78461cd856caa487a349f1e"
  },
  {
    "url": "assets/js/135.53b56f12.js",
    "revision": "247ff7aa733f01a4c79303c4f2573418"
  },
  {
    "url": "assets/js/136.37d12b41.js",
    "revision": "b0542233d71b2d38ba7aef4fd2341b7d"
  },
  {
    "url": "assets/js/137.ce0cf2fb.js",
    "revision": "f70c1750bbca0236d236385eddcead16"
  },
  {
    "url": "assets/js/138.b47f2f8b.js",
    "revision": "32230323b957a6be43c894ee9dfa3a5f"
  },
  {
    "url": "assets/js/139.45d6dc1a.js",
    "revision": "969853a28ba39d4d064d1e72fa69d5ca"
  },
  {
    "url": "assets/js/14.8c3a8afc.js",
    "revision": "e715f860f1dbbed125c6c64365703428"
  },
  {
    "url": "assets/js/140.8560c2b9.js",
    "revision": "2d408c9331d2b5f8de3b8f2657d1d21b"
  },
  {
    "url": "assets/js/141.ff42de96.js",
    "revision": "5963d4a11825aeb63458a8c718e8e184"
  },
  {
    "url": "assets/js/142.de132003.js",
    "revision": "66c1c977ab4e7c3609ac29d94acaaf9f"
  },
  {
    "url": "assets/js/143.136bfded.js",
    "revision": "d15f2366cd7890e96376362235487626"
  },
  {
    "url": "assets/js/144.5549e9b2.js",
    "revision": "51025b09712e5e40f7fc2696be338d43"
  },
  {
    "url": "assets/js/145.609dc80d.js",
    "revision": "229055e0561256af843772d840be03fe"
  },
  {
    "url": "assets/js/146.659183a3.js",
    "revision": "0f885a9012905f911c68296f360deb42"
  },
  {
    "url": "assets/js/147.68616caa.js",
    "revision": "815a725c5f5e67b33eab8cd33666313c"
  },
  {
    "url": "assets/js/148.083f5c0a.js",
    "revision": "5c737500d22291a690331ebadbd9f895"
  },
  {
    "url": "assets/js/149.8e00a268.js",
    "revision": "5d885b556ff357c9a9c57f00a8692b0c"
  },
  {
    "url": "assets/js/15.7ab85031.js",
    "revision": "c9cd97521792d9ee38ad201137af0c89"
  },
  {
    "url": "assets/js/150.6fa7092a.js",
    "revision": "8f2e41758bb4cd4b8451567dade94b32"
  },
  {
    "url": "assets/js/151.9f91a5ae.js",
    "revision": "542f18076fdb4c8c66398c4ecc1db0da"
  },
  {
    "url": "assets/js/152.20f6cf1b.js",
    "revision": "eb365a8b68295c7ecdfdc478172309bb"
  },
  {
    "url": "assets/js/153.64abd3d4.js",
    "revision": "bc5c51b68812569e5bee60f0af68fd44"
  },
  {
    "url": "assets/js/154.5cc01934.js",
    "revision": "3bee49ffc132623858a37e27d3b42209"
  },
  {
    "url": "assets/js/155.2120fd80.js",
    "revision": "3460e3396ef1ab6b5799f4837ac2c4a7"
  },
  {
    "url": "assets/js/156.06de34eb.js",
    "revision": "36b3e42ac28c676e910122ff5afa8e21"
  },
  {
    "url": "assets/js/157.259263df.js",
    "revision": "bc50ada21bcb60fcc972f692e1fa4ee4"
  },
  {
    "url": "assets/js/158.4b8e09b4.js",
    "revision": "710f9de3eb1f97f3d0daa3fd5b5fa410"
  },
  {
    "url": "assets/js/159.34582ae9.js",
    "revision": "016ea6ab512993cd81ef31abd1ef5583"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.448fb0d8.js",
    "revision": "f879cfc22fe500fc69aa3d09679d8327"
  },
  {
    "url": "assets/js/161.ba3949e7.js",
    "revision": "6bafbeea045ec6179bab3671fcd27392"
  },
  {
    "url": "assets/js/162.fbf781ad.js",
    "revision": "fac9bcbe0092ceee16c26395222cae65"
  },
  {
    "url": "assets/js/163.ed69afed.js",
    "revision": "58715658bafc2ac47e913c54e0a9c675"
  },
  {
    "url": "assets/js/164.81ef45c2.js",
    "revision": "fff8e491c7adf2ef23155d8b4fcc4395"
  },
  {
    "url": "assets/js/165.d5d80cac.js",
    "revision": "9b1b61cf576863d5df048128b4c3036a"
  },
  {
    "url": "assets/js/166.e9193c2f.js",
    "revision": "c8978aba150ba4a111d77a5f91cec951"
  },
  {
    "url": "assets/js/167.821f9919.js",
    "revision": "b97496dac1f2e3fca0626eea01b720dd"
  },
  {
    "url": "assets/js/168.64c26353.js",
    "revision": "f01434713e1251e4b2343ec0ba2a7386"
  },
  {
    "url": "assets/js/169.29cec371.js",
    "revision": "e2f6a4274f2e3f835ade010b7af6997b"
  },
  {
    "url": "assets/js/17.226eb645.js",
    "revision": "c8428fa5f319889ee59481e09ee435ef"
  },
  {
    "url": "assets/js/170.250f4147.js",
    "revision": "200e9fe0c39713eae91aedb8307dc378"
  },
  {
    "url": "assets/js/171.4588abd5.js",
    "revision": "b78fc63f548ddf2840cd9e99c476ec7d"
  },
  {
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.51b459b6.js",
    "revision": "b223edfb73a2c009609026bc945da7c1"
  },
  {
    "url": "assets/js/174.8257a8dc.js",
    "revision": "0de66bebb2fbe64b582ec7089fa6dba9"
  },
  {
    "url": "assets/js/175.f41ce05f.js",
    "revision": "742f936b35d2d18b58b73144dafe9824"
  },
  {
    "url": "assets/js/176.704e3654.js",
    "revision": "9e3bd9c1cab60ab0473ecd4e6bd6568e"
  },
  {
    "url": "assets/js/177.bf39f4ef.js",
    "revision": "fcff938b468af9c5978cd9d9177d6cf0"
  },
  {
    "url": "assets/js/178.9c632b21.js",
    "revision": "523406c80fb5f87e23d08ef7137b5d1a"
  },
  {
    "url": "assets/js/179.9aad0496.js",
    "revision": "ca6ace7550973ad84eff354c2354fb04"
  },
  {
    "url": "assets/js/18.e2b34fcc.js",
    "revision": "be1e69b6ec8cfdae3199e86b44cd98dc"
  },
  {
    "url": "assets/js/180.5468b34e.js",
    "revision": "58e9a1fc5a38b8124b525ffea37b6790"
  },
  {
    "url": "assets/js/181.850e5b6f.js",
    "revision": "bc5340938ac1495e0709703d2eeb4a89"
  },
  {
    "url": "assets/js/182.3c548b17.js",
    "revision": "f48bb48aa403daac7f3893e2cb6e5097"
  },
  {
    "url": "assets/js/183.6f4e58f0.js",
    "revision": "76276cf391e64da8685479764294ed80"
  },
  {
    "url": "assets/js/184.4a603b01.js",
    "revision": "5ef522c47d32333d202ccf1ab39f2f11"
  },
  {
    "url": "assets/js/185.f9acf20e.js",
    "revision": "6843113e687bb2015b1915e022245bd8"
  },
  {
    "url": "assets/js/186.eef3e44d.js",
    "revision": "dc1f43969d406613f8ada9edf3d61450"
  },
  {
    "url": "assets/js/187.934d7a8b.js",
    "revision": "4a0c048ac168cebc312f18c4a58256d5"
  },
  {
    "url": "assets/js/188.b565ec18.js",
    "revision": "c5a67763578a0f395672858e41675a51"
  },
  {
    "url": "assets/js/189.5a39c173.js",
    "revision": "5eb2f0e24b4e2d05687785c2a014cc19"
  },
  {
    "url": "assets/js/19.eba79294.js",
    "revision": "8f4fbbbef7752db87eaf3d54537a2f26"
  },
  {
    "url": "assets/js/190.7205d249.js",
    "revision": "292e88eb9d3ba33cf55889ae7774b12e"
  },
  {
    "url": "assets/js/191.50ea2cde.js",
    "revision": "4ebbe5179949c622317245cd968d32de"
  },
  {
    "url": "assets/js/192.63a754e7.js",
    "revision": "9ae709291ac08d7c08d00354906875da"
  },
  {
    "url": "assets/js/193.1e921039.js",
    "revision": "7a07c43e7756acd092713951b12b670a"
  },
  {
    "url": "assets/js/20.d1f3bcc2.js",
    "revision": "610cd4ccbe087e1800368ec891404943"
  },
  {
    "url": "assets/js/21.95164142.js",
    "revision": "19a19c3d18a7fa6f858dd87a340f12cd"
  },
  {
    "url": "assets/js/22.2f58c1fa.js",
    "revision": "dfdcded331ec7cce477a30ef69b2b115"
  },
  {
    "url": "assets/js/23.ef4e0a77.js",
    "revision": "319f5826f04417bded45825447e2d44f"
  },
  {
    "url": "assets/js/24.444ce017.js",
    "revision": "ccbebca598a2e1d47cbe0831e31d9486"
  },
  {
    "url": "assets/js/25.17b74b6b.js",
    "revision": "65091ff025fdc95f49c5d5fce0ce652e"
  },
  {
    "url": "assets/js/26.fe68b077.js",
    "revision": "560764455e67d5bf6b1f4c43b9a2f3e2"
  },
  {
    "url": "assets/js/27.04bfe5a7.js",
    "revision": "af57e024ba17d1c5d3e8c1475cea1925"
  },
  {
    "url": "assets/js/28.47ebb86f.js",
    "revision": "2fe19a93bd791683af8219778995691b"
  },
  {
    "url": "assets/js/29.5dec92e8.js",
    "revision": "f31e9682a950715b61511caccced1b6e"
  },
  {
    "url": "assets/js/3.e9ec0dc9.js",
    "revision": "f2530fa3f331a4ded0ed022c75c73165"
  },
  {
    "url": "assets/js/30.70755bf4.js",
    "revision": "d6949bef3dbfee1437b1ff6775edac9b"
  },
  {
    "url": "assets/js/31.dc46ee65.js",
    "revision": "78702be8a9c7990676ffd15f709d78f9"
  },
  {
    "url": "assets/js/32.4125cd77.js",
    "revision": "5270c9efc052d48e0cc4a4780d17e3e5"
  },
  {
    "url": "assets/js/33.6faae56f.js",
    "revision": "b444b1797690777cfd8968e84ca986db"
  },
  {
    "url": "assets/js/34.df9e3db7.js",
    "revision": "2d0091df67b7a16c21a578a9167a9ca4"
  },
  {
    "url": "assets/js/35.c693bd0a.js",
    "revision": "eb106366e483ad3f0783becc1845113f"
  },
  {
    "url": "assets/js/36.8266431e.js",
    "revision": "d860e7fb7f26ad89edafee2b2309be93"
  },
  {
    "url": "assets/js/37.d3eaf453.js",
    "revision": "ae1ba86d2424f718298c44115dc26dd9"
  },
  {
    "url": "assets/js/38.a3199d1f.js",
    "revision": "5695aaee295a79c0f85dbe2834645fb1"
  },
  {
    "url": "assets/js/39.16dce1a8.js",
    "revision": "28181aac3da5a740852bc1de591ae103"
  },
  {
    "url": "assets/js/4.7111ef8f.js",
    "revision": "51d485ffd49f274c459df5acb0188a3a"
  },
  {
    "url": "assets/js/40.a860f82b.js",
    "revision": "2940d99fffa43b5156b9086f76dee368"
  },
  {
    "url": "assets/js/41.2c4b6912.js",
    "revision": "8034e4974a232472a5b770f5d4f91a74"
  },
  {
    "url": "assets/js/42.a5189b82.js",
    "revision": "9943a8e0b4e1bdbc4d746a9790f22571"
  },
  {
    "url": "assets/js/43.029a9e7a.js",
    "revision": "5e8b1148525660e59171eccb0f03b9d0"
  },
  {
    "url": "assets/js/44.fd3f21e5.js",
    "revision": "d99559fad2b2048a0fc6352d6b5fb90d"
  },
  {
    "url": "assets/js/45.74b3d941.js",
    "revision": "d73aaff8b8a14a14abd4a16f89a7be5d"
  },
  {
    "url": "assets/js/46.89211acd.js",
    "revision": "ac6676cc41fbd70e696e4f0638b0f3d6"
  },
  {
    "url": "assets/js/47.5276c351.js",
    "revision": "a42bfaf53d62a3662242e1009b1e34b1"
  },
  {
    "url": "assets/js/48.1edc97da.js",
    "revision": "5a0051aa3ed20022db01b2f6a7002d59"
  },
  {
    "url": "assets/js/49.8a61149f.js",
    "revision": "e514f8af1d89bc5512536d192efe71d6"
  },
  {
    "url": "assets/js/5.e38a005a.js",
    "revision": "88d61af86655ba0f77a2eb1d00bbe81b"
  },
  {
    "url": "assets/js/50.b37fb1be.js",
    "revision": "77c5691f00889a0df10be3e5ec31056c"
  },
  {
    "url": "assets/js/51.13272cd6.js",
    "revision": "7b656af3902520a5416a4ca1d1379ea8"
  },
  {
    "url": "assets/js/52.6599f277.js",
    "revision": "6f572ee3edf6006be71443ba568659e4"
  },
  {
    "url": "assets/js/53.9f3788aa.js",
    "revision": "720975861753f1fdd79eb18b89a5fb9c"
  },
  {
    "url": "assets/js/54.9639df49.js",
    "revision": "800da3b4b350882fa2679f6877681831"
  },
  {
    "url": "assets/js/55.26a0791f.js",
    "revision": "c06d0b24f0c27b33546686c5f48bede2"
  },
  {
    "url": "assets/js/56.fc6f6bbf.js",
    "revision": "463b1ffc5f5278ca84b95930e3f19bd8"
  },
  {
    "url": "assets/js/57.3cdad42a.js",
    "revision": "281f3250ccf03b5b48f8a396800767ed"
  },
  {
    "url": "assets/js/58.1afd225f.js",
    "revision": "3930aefd04067439eb98ecb5e0ce0958"
  },
  {
    "url": "assets/js/59.dc53d652.js",
    "revision": "2527bbf64635f999ce1debfac5d27d5a"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.847db4bc.js",
    "revision": "372d1b6ebed115dd7a8ebb238f0e72cf"
  },
  {
    "url": "assets/js/61.dc4f14dc.js",
    "revision": "81e72a738ad8e3e3beda2617220932d1"
  },
  {
    "url": "assets/js/62.0c915c96.js",
    "revision": "206dd4e441285eaf50f2ec947b165a25"
  },
  {
    "url": "assets/js/63.41634ebf.js",
    "revision": "330369ceb53538c0f06d0062d66143e0"
  },
  {
    "url": "assets/js/64.f6a8014f.js",
    "revision": "5c72c94717cbd55aa79d3cdb85bf47f3"
  },
  {
    "url": "assets/js/65.6907eb21.js",
    "revision": "a3018cc884add003fe8d15fc50c609fe"
  },
  {
    "url": "assets/js/66.5aac3fc2.js",
    "revision": "8611d673ec6bcb81c166b3311a6d3940"
  },
  {
    "url": "assets/js/67.b9caf63e.js",
    "revision": "2b8323e41f1596c1133be390de5338ab"
  },
  {
    "url": "assets/js/68.cce358b7.js",
    "revision": "09e83f20497b15c3c2e0d2253a71a05b"
  },
  {
    "url": "assets/js/69.caa0b77e.js",
    "revision": "f3b7ec976292876515438d3b446a5f15"
  },
  {
    "url": "assets/js/7.afa77f40.js",
    "revision": "010d0121ed4ae2a2cec9654d112fbb87"
  },
  {
    "url": "assets/js/70.743f5a35.js",
    "revision": "076b0cc65ac6c79d5262d57b7e926bcf"
  },
  {
    "url": "assets/js/71.fd9b875b.js",
    "revision": "e6841bea2fc21592d06d0a8fe59c69a1"
  },
  {
    "url": "assets/js/72.2a1940b9.js",
    "revision": "74a5a761f859d56ba2db855ee5f5ac11"
  },
  {
    "url": "assets/js/73.0835e0f9.js",
    "revision": "f59fbc60611a4e0f5cb2451db720e1b6"
  },
  {
    "url": "assets/js/74.21d8059a.js",
    "revision": "6355068fab63729aa81fff5bbf1735fb"
  },
  {
    "url": "assets/js/75.6106f1d3.js",
    "revision": "0a0fdecb8544c829983760ed1421ad13"
  },
  {
    "url": "assets/js/76.665e1137.js",
    "revision": "af2b148b3c185c45210ee30b9d56d11e"
  },
  {
    "url": "assets/js/77.5dddf6a1.js",
    "revision": "c3d5b98a1ceab72eefe6e86ca5ee48f3"
  },
  {
    "url": "assets/js/78.3f63fb2b.js",
    "revision": "37dcd37870ec41ef3be70a10aac392b0"
  },
  {
    "url": "assets/js/79.a361a93d.js",
    "revision": "699d9ab7935ca92f9a0ad596070d9809"
  },
  {
    "url": "assets/js/8.49b39b40.js",
    "revision": "5be41fa0cb432cdc48a471bee774b784"
  },
  {
    "url": "assets/js/80.bade1611.js",
    "revision": "c29e4076b0a2b7724ce9b42a07149f52"
  },
  {
    "url": "assets/js/81.09e376d6.js",
    "revision": "c1ee31a85e2a71d58bf9500717d7174f"
  },
  {
    "url": "assets/js/82.ec4924a9.js",
    "revision": "99a099c4239e9ad26495a5399450b616"
  },
  {
    "url": "assets/js/83.e3fd09f3.js",
    "revision": "2b8270845c7212980cdffadb6d1f2c0a"
  },
  {
    "url": "assets/js/84.0ba30ca2.js",
    "revision": "a909b61c5fdea9afce3f3674ab3a2e74"
  },
  {
    "url": "assets/js/85.56ec1c57.js",
    "revision": "754a04f3b8258af510a029b2bfd2c1d3"
  },
  {
    "url": "assets/js/86.693e027b.js",
    "revision": "8ec11dc80a825f193a39c87705b50d07"
  },
  {
    "url": "assets/js/87.0a539fc1.js",
    "revision": "5ac29d16608250a986e21ed0c17050aa"
  },
  {
    "url": "assets/js/88.85f677e5.js",
    "revision": "c4c0f689e5de7e87cabbc31c144febcb"
  },
  {
    "url": "assets/js/89.882ada9c.js",
    "revision": "6d18c855bc94d936f0e1f565f44f4757"
  },
  {
    "url": "assets/js/9.a6ec67f3.js",
    "revision": "dc21d3cc91f8802f808d511b31633df9"
  },
  {
    "url": "assets/js/90.d7a7229f.js",
    "revision": "a09497b97469f63e46c24f6dffdb5651"
  },
  {
    "url": "assets/js/91.17543bbf.js",
    "revision": "81f4a5af0034a10a7c63b4522a70b7fa"
  },
  {
    "url": "assets/js/92.68985482.js",
    "revision": "edd15fba96fdb3367bf6943b97854795"
  },
  {
    "url": "assets/js/93.8be5b7db.js",
    "revision": "c0c2efc59dd0e42863dcbe357029ccf5"
  },
  {
    "url": "assets/js/94.045a49d3.js",
    "revision": "55884942e485e640500486fb4c26046c"
  },
  {
    "url": "assets/js/95.a9ed630c.js",
    "revision": "edc6155ac1e722e74811c6622ab03c08"
  },
  {
    "url": "assets/js/96.d9d2a03d.js",
    "revision": "a2d6dbe41bd12a075d057f06ec9dbba3"
  },
  {
    "url": "assets/js/97.c1b5591e.js",
    "revision": "6b8478e53e4de7f0ea933f29a2954f75"
  },
  {
    "url": "assets/js/98.f7490804.js",
    "revision": "d5e157dad264975887c349e6de3958f1"
  },
  {
    "url": "assets/js/99.e9e3b936.js",
    "revision": "520010ad8526444580c2cacbb1c05704"
  },
  {
    "url": "assets/js/app.33ad72ae.js",
    "revision": "a80e3a8021ac4849d54edfe102507234"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "7227544344e6973a2e95ca00253ee3ea"
  },
  {
    "url": "crossdomain/browser/business.js",
    "revision": "7ad093a576c2dc507f7029d3cad95f7e"
  },
  {
    "url": "crossdomain/browser/common/commonRequest.js",
    "revision": "22601c170d2ce9967bb0ffee69f0bea7"
  },
  {
    "url": "crossdomain/browser/common/global.js",
    "revision": "5cdfffe2666b4eb745beb114bde44c31"
  },
  {
    "url": "crossdomain/browser/index.html",
    "revision": "e2760315a28527f6a96c1eb04129a3a7"
  },
  {
    "url": "crossdomain/domain/a-page.png",
    "revision": "7094d8e55e41a3b91bbd9b1a4d96ef98"
  },
  {
    "url": "crossdomain/domain/a.html",
    "revision": "3dc2b859c48381cce2541bd7be9953ff"
  },
  {
    "url": "crossdomain/domain/b.html",
    "revision": "b237c1ba4e8ca69bcb0199a56010c334"
  },
  {
    "url": "crossdomain/domain/static-server.js",
    "revision": "a6c624ca18397bbab866976262f723a9"
  },
  {
    "url": "crossdomain/hash/a-page.png",
    "revision": "b45985f683c0cb3d8976e488d6227f01"
  },
  {
    "url": "crossdomain/hash/a.html",
    "revision": "83be7cc40e9f37d9fc620f590e177f78"
  },
  {
    "url": "crossdomain/hash/b.html",
    "revision": "2b195fb76c37467277a7f11cd1da85c0"
  },
  {
    "url": "crossdomain/hash/c.html",
    "revision": "b364fe476f33f1862bbb524292d05ba3"
  },
  {
    "url": "crossdomain/hash/static-server1.js",
    "revision": "f1eef7f9903fedd3dce5b18fbb953f48"
  },
  {
    "url": "crossdomain/hash/static-server2.js",
    "revision": "82010067ef775ef4d22382aabd2c26ab"
  },
  {
    "url": "crossdomain/name/a-page.png",
    "revision": "106ea2c21400ee83c7084976f0b5ff7a"
  },
  {
    "url": "crossdomain/name/a.html",
    "revision": "b81a05523df3c2f844b68f04e89582a0"
  },
  {
    "url": "crossdomain/name/b.html",
    "revision": "d985003a7a6e436695704ee19570dfc0"
  },
  {
    "url": "crossdomain/name/c.html",
    "revision": "4e087b338c8a2a8ae35c80d63ca38759"
  },
  {
    "url": "crossdomain/name/static-server1.js",
    "revision": "f1eef7f9903fedd3dce5b18fbb953f48"
  },
  {
    "url": "crossdomain/name/static-server2.js",
    "revision": "9e45deb8b5c483f961035d6131096cdf"
  },
  {
    "url": "crossdomain/postMessage/a.html",
    "revision": "9742ee4f531e85503f23b47e44feda39"
  },
  {
    "url": "crossdomain/postMessage/a.js",
    "revision": "f1eef7f9903fedd3dce5b18fbb953f48"
  },
  {
    "url": "crossdomain/postMessage/b.html",
    "revision": "d6dec8b256f2f3f702714f08dffef617"
  },
  {
    "url": "crossdomain/postMessage/b.js",
    "revision": "53d42d3a9fd4abd1aab4db71d09c19f9"
  },
  {
    "url": "crossdomain/webSocket/a.html",
    "revision": "3e10bb4467a834d34604b04c61597834"
  },
  {
    "url": "crossdomain/webSocket/b.html",
    "revision": "1f97a1a04cc671317c077271c5d2912d"
  },
  {
    "url": "crossdomain/webSocket/static-server2.js",
    "revision": "82010067ef775ef4d22382aabd2c26ab"
  },
  {
    "url": "crossdomain/webSocket/static.js",
    "revision": "4a1704318c01e310018b694e8dd0e2a5"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "6bcd9f59c319baaf5b08c9f002c644a5"
  },
  {
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "f76ae320fbadee1c3b01776c200813a4"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "special/1.手工测试/eg/qs.js",
    "revision": "053be423c2b2446e3861f942c14aebcb"
  },
  {
    "url": "special/1.手工测试/eg/test.js",
    "revision": "43825e2f53cb2f2f4d262a15c49efe75"
  },
  {
    "url": "special/2.assert断言/eg/src/qs.js",
    "revision": "053be423c2b2446e3861f942c14aebcb"
  },
  {
    "url": "special/2.assert断言/eg/src/qs.test.js",
    "revision": "4eea4bd6a66f3e58197ebe403c3a4014"
  },
  {
    "url": "special/3.测试框架/3.jasmine/eg/babel.config.js",
    "revision": "547f815e2c510d12b863f6f494359966"
  },
  {
    "url": "special/3.测试框架/3.jasmine/eg/public/index.html",
    "revision": "ab4ce15a3617c2b9f9fe9ddff937814e"
  },
  {
    "url": "special/3.测试框架/3.jasmine/eg/src/assets/logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "special/3.测试框架/3.jasmine/eg/src/main.js",
    "revision": "2c6a8c749f0292671e1279030500dd87"
  },
  {
    "url": "special/3.测试框架/3.jasmine/vue-test/babel.config.js",
    "revision": "547f815e2c510d12b863f6f494359966"
  },
  {
    "url": "special/3.测试框架/3.jasmine/vue-test/public/index.html",
    "revision": "20a89e1d7d287648aa44431eaddb8aa2"
  },
  {
    "url": "special/3.测试框架/3.jasmine/vue-test/src/assets/logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "special/3.测试框架/3.jasmine/vue-test/src/main.js",
    "revision": "2c6a8c749f0292671e1279030500dd87"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/__tests__/matchers.js",
    "revision": "dd3c693923f0a714ebe147621d6df196"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/ajax.js.html",
    "revision": "c431065b29435c3a66e1fb0b633974e3"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/getUsers.js.html",
    "revision": "0735df183ebb5fff8918b79519f023e8"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/index.html",
    "revision": "d8cecd3c6e5439cfb1b8ac54881ed9ed"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/calc.js.html",
    "revision": "ae9a67ca7d21f12137ac095f3c07a4a7"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/dom.js.html",
    "revision": "20310abb32a7baa7d62dc10818e57678"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/forEach.js.html",
    "revision": "5af68523328c004ba09fb59da58c2855"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/index.html",
    "revision": "e4941ed3c4efe8e16effaf12c705740e"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/qs.js.html",
    "revision": "1213b1b5923461858729ea6cdf394e3d"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/2.jest/src/Tab.js.html",
    "revision": "2c92b830406d432d15ac068bea47b01c"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/ajax.js.html",
    "revision": "5ae9ffd759be090ab690d90d685d19ea"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/base.css",
    "revision": "31d745d917e15e49443ddf799f1e5669"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/calc.js.html",
    "revision": "e50b1a0e0ba87f4380b386e207b883b7"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/dom.js.html",
    "revision": "04f81b84d201daf2827252a8c5b5ff55"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/forEach.js.html",
    "revision": "f95b672c679a3d05591e9a71ff54d12d"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/getUsers.js.html",
    "revision": "57f8dd486afa6a955d2ec635dcfb0622"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/index.html",
    "revision": "2a6b45621338731572cc488d4143bf90"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/prettify.css",
    "revision": "31f0c9da5ac09f2563cab46ebc6e445a"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/prettify.js",
    "revision": "fdaf2510a4125a409882ed554f89c039"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/qs.js.html",
    "revision": "71a04465a80160639af9e1fbebb59fd9"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/sort-arrow-sprite.png",
    "revision": "70204d3a4999d42a7767ef188cea1333"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/sorter.js",
    "revision": "2451f54f011e7d0295be5a4c6fd597f5"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/coverage/lcov-report/Tab.js.html",
    "revision": "705ef907803557a916bbab4321a293e3"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/server.js",
    "revision": "53c10fa32999348b5d19f1cf93ff56da"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/__mocks__/ajax.js",
    "revision": "57584ee27e691104f4a8eacb186be98a"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/ajax.js",
    "revision": "cf8def70b18d2081b99b9d0b6617100b"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/ajax1.js",
    "revision": "4410c912dfa2e40a1154dc98f7eb6547"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/async.test.js",
    "revision": "8b0f7dee1bf023bdf70344ff2f94baa6"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/calc.js",
    "revision": "2aaeb7587e0ed0c41ccd3c60f7963f48"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/calc.test.js",
    "revision": "9e42c41dc7453c2e591b6bf3e2c83037"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/dom.js",
    "revision": "4ff72f9ee836ac2c644d7b9cc61b8478"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/dom.test.js",
    "revision": "f18632e86849d075413f3cb1b54c304d"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/forEach.js",
    "revision": "91dc8346eb4d1066859aea04a7241170"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/forEach.test.js",
    "revision": "e79888048456857fba158b6b41644248"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/getUsers.js",
    "revision": "71575875faf20e6e1d4d0f189cd58f75"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/getUsers.test.js",
    "revision": "f7c0826a3f6984e2ae2f777e1c2e3e60"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/jest.config.js",
    "revision": "73d31d96ef5804a1a26e93888a4b7427"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/qs.js",
    "revision": "9a868041ce9b07f948cb0ea672050ee7"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/qs.test.js",
    "revision": "99bca32d5bee751633ac56c200e4eb56"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/tab.html",
    "revision": "574cc612ef6827ccdbacc65bdd18fbd4"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/Tab.js",
    "revision": "9bd5e536d222a82f2a91cb9177ad1cb1"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/Tab.test.html",
    "revision": "4eefeb4a77749dd553e99735e5fdd14a"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/Tab.test.js",
    "revision": "ff3cefd45905936091a94ce1ae872457"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/users.html",
    "revision": "d690734c8cb44de136338c90ae1610a3"
  },
  {
    "url": "special/单元测试/eg/calculator.js",
    "revision": "a0a4bea784d55d889966d17e895e1430"
  },
  {
    "url": "special/单元测试/eg/server.js",
    "revision": "db32768d0798f0b270aa0ae9ff472d03"
  },
  {
    "url": "special/单元测试/eg/test/1.test.js",
    "revision": "46dc4e92ced8ec80d1b2eeb4f0f12794"
  },
  {
    "url": "special/单元测试/eg/test/2.test.js",
    "revision": "f0466112fe8be26811d2c98bc8997d47"
  },
  {
    "url": "special/单元测试/eg/test/3.test.js",
    "revision": "fe6b785c91603db7f59b38ae4e098984"
  },
  {
    "url": "special/单元测试/eg/test/4.api.test.js",
    "revision": "42037157f8fadcd27792fe900173d08d"
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
