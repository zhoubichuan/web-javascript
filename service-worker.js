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
    "revision": "f9c466370e871e85039d17f5912a63ec"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "06e03ef29b480e1b9b9a2031b63dbfb2"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "f87620fb290bad0b02101292e73c27a5"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "8e2ea8933663ea55a649b35f20e6a445"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "a81a9494971bc353c4b9cb5b2f13efcb"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "83664ccca4c015cdaa97337dc5f764ef"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "e87a6c0a741865687876914c0b9652ea"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "e586329be506a3c26effeda73dd08675"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "5530d3537c18deac41413926f764338f"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "93eb7b1911164740e48a6931ba18b5ca"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "db3a98227f8401aa7c74822d4e1e5e89"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "002a982dd25a7a1c1be6c6527a1ca8aa"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "bf9aced9e3aade92113219d081120dbb"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "6892eddb7f59047ecae3fe00970048b8"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "9d503170c21462040bd1ee298c1fd539"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "e5dbedcf253a10179ec5277cdaa824f2"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "cf526b537e8594e8cc9c14f567ea7b26"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "7216770fac7370c61be693b83b3002af"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "ddae0cd47e3887e6a00f842f7c85f638"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "7e949ba92a4af7079ee4c05dff481aae"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "030eff2398c136bb6f16080bf5bc8068"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "77663bcd893d63f86230883919daa7e4"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "eb1f81ab698481dba1888a5bff2bb8e3"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "943cb77b0a661f84de460412e9bf23f9"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "58eaf1bb4f25e826d60b12c5a3595f67"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "cdd603d2d9be6db08bf43645c1c5c9a4"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "b932545e136fb3ca9af638f5752f0954"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "28a665e5626dfb5454cfe8172b1e84ba"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "d9393edadd35d8364fe36b5726bbbb1b"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "1e80c7b7a2c2a3112652251e4b951807"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "4bd922355a7d5fb629fc8935f2ee881c"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "125de5dd28f004e165d4f10b287b4f09"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "802d77b58f9aa0779d59e75ad3786040"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "89bb39b55a76051680c73152aed2112c"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "55990e0525fe9d9b4edff6df206f4c55"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "920d9835d731f2415c92cee545a9893f"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "083e1aa83d19082ac9a1798ff8002177"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "4a9cd8bbbe9af05e77515959322da3e3"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "bbfe47d04405742b27414237964e6e9c"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "0d99c0f9786542de6bc550c044695dd7"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "f58034826f4a573024c2578a0e3dbfcf"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "7dc63547757888a9e5dc8143493374a7"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "dec52df9d14f30a465d7a6fe4334d007"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "1e7f67f36932269b30a2fc61d7a4f58c"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "55ff070e5fb93cac5c51d7a5d6e032bd"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "d4bef9caee00eb1b220c6f6de42b888b"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "57abed62f91459e3353f7ef995c60a0b"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "1751e3aaa6e03a9301d0299e8d9237fd"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "5ef69420d0587c4b711e8a29fb47b4fb"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "a541567fa4d975242f419182c49a4102"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "27282c2a2e6ab1e6ea09e8909e69c27d"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "5a6cdeac83b940394dd7c4f2c024f577"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "ab8e9c5bbe88975785d1fd78dc3c17b5"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "bb56c4481728728c09687bfda08ff0ca"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "9e8e40fe02275095fdd05cddad0c4cdf"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "b842975f897803787d1055b0e40e39bc"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "5ef77b4b6e20c11cd2002bf94aca988c"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "b067e3ec6fc1267d898c6511e0bd0185"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "cbdae76231c77826bb19074f48ec1d21"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "d4aeca59dccd73af7de5a5908e322c74"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "1b241fb2aa5fc3bf200a64bba135e8db"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "49a9a9b008ade2b3b32e176495f22b06"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "9bbc4f346681bd4ea21a65dbb73ca522"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "b3d685d8a775290324dbe79bf5e4f3db"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "73a8f53a6471c7014af38d435c865af3"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "7cdf958029a007ef4b8c2a960e55e7d1"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "f1b09cfc56f8dfbfc495073fee9f9f14"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "50a87df31630333e25173adf2861da3e"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "2e0b9c6fbaf22e8c00ea9e20b409592a"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "1d17aeab18a3b9249b994a7cbafe2f95"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "cd9bf42b83a085c81546617f841fbb94"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "33dc95c2c2c039ef78c719cf6670dc05"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "24dd29730815b58c0145f292811862a3"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "210406bca98ba54b3373647d81fe89d4"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "6163dc5cb4145602cd398efed74fd577"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "e572932701cce5ee00ee90247b1cb05b"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "3eb89c48b25207f12cd979f634956718"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "f215a197962825c234f3f73297dd52ce"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "89ea6f63fbfc78d4a428e4223e7a4888"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "661c61ae8cf31d66334e4a79f6b29f16"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "2fdcda9e914c3df520de583a0cd35236"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "5adf265e50f2faa493a99962a2c6ed48"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "39a225101e595e15f96653e809935b07"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "7103fa9e717ba3ac73bd3aa5e3a3efbd"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "ae2e40238bd7c5efb1e338248f22dcf1"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "58e8ce3c0aa964fbe1b7a3021e02d120"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "0dbd71f496a0138377dcc6df4418daaa"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "200e1bb28261fe8bf949a6b5f5a0a582"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "08a72f139488ea26599aeed14f0aceb9"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "892134ac965e6e2b1b2e83f6b392ecc9"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "c74fea4e9cf9a48b81d1bdbc48381b7c"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "e420ea7ce00a717e43b7901179709c75"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "c23b22675acf5cdff9dc53c420b58373"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "7b1f56bd3a58d10b87010d737251213c"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "755f03da05f82242f125dcd264f39357"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "236f97b36e14eab1ac6ada2347f4e1d4"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "9c5686b2b6b5540ad50c0ea9f4a4de41"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "79f5ed5ee427c8049f55fe6f27c220e6"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "6c08c66f492d5d4bc5aa1c086153b492"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "0abf8ead44c35e4541189dd35a736635"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "4a55d68d780ac0fae95b6ef7d32ff1b6"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "67b6b3ae1fe69dc6c9905a078678b51e"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "aa4ecec69e1e5e233830d5d528cb3367"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "26e5abaa17327085f31fd0a515d1347c"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "c7177a5df826d6dd59a589eeefed2396"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "a7c815cb7ef0b1eef1849e116d96bfa2"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "5a4b8f699e7f6120a3787690ed92362f"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "0b4e7e906a4ac1c5d23cbc114098d992"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "1cf703e917e8f523cd4b797d1adbb42a"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "9b391857ba318ae4d6143f443a3d97d7"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "6b0c0348dea67f9686dc51d92d8e5dd5"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "1f8aa3da2dcf7d25e5e70298f6503029"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "aaec9a1be6aa51a64944920f572be078"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "56647d634565ad45af07777e1838ddbe"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "2eaf9f7b7b6b17e8a440913d8e84bfe6"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "e8ffc9fbd8ce114a44238662ee06937b"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "6d272ea511b5e24cc1979f4fbd3e1c93"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "8bcffd6b75dac14134fbe8a0e277f47a"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "db7d7c08541d33b59d06b815e1c593db"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "4a48535942a9762c810899f75d47e62b"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "2ff8d24fa5c05f645284389dfbb9aadd"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "23838d1d4f88b5e7d7b65bd105712a0d"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "d2141f9bf10bf3c3657b37f0dd203732"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "68467ce628052fec3df0540b737cfbec"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "5d084b0b8e6554914ebf5fa2b736600d"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "312b30917934451b36691e805512753c"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "3a11138c9e41a66b63e9653ab5af9937"
  },
  {
    "url": "404.html",
    "revision": "79dfd75d209ff112a9c38f736a363f91"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "f5c658e02bb550923d5da666b71cf4af"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "168f41c22c5cd32c1ccf71b102f8d64a"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "c24f272ed540686f85d6e4990cde913d"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "9a40aa1e6b3e60be4b592f89b1f23485"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "31dc6b3fbdb6433b91ee05ebb26ff23f"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "8e33556473ea2b6fb2763cd1e357973a"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "359e95d9a13a5f62ca1509ecef4c86dd"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "30b84f97d2a40ec3458788081f1273e7"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "0e2af615ca728c6b81747bbf07f46f7e"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "2467af3be48f72fbd10439ec1429b5da"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "5932688fb7e23a5d0110cc91dc39d534"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "aac9506b6308f0b8c3bb3855f4126bc1"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "dc95e641448ad8d089f8a23a6db7ca5a"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "82b47b9fca98aab8b0dde5a31fae750d"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "baa48081c64ff081dd16ee523dfba1c7"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "973e987094612bc34e83b4103ae1274e"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "ce05d5e48607e27397fcdd3d3e6bf820"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "bcdb372a3ce63eb28ca59b60f074a09b"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "2049e414704ee6a540f3a557d9e21ff9"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "8d1f3715dfa502383f596a03ee2f9442"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "c4040b4261b892ffbb2f87b5c46b2b29"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "8398e826f7abbd7b157227ea669f6fc1"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "e1546eed835b8177a240c3d865cd3e2a"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "5b247510acefa7c9ae4d515def809ae7"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "6dbcb187bfb48e62fb79c4c700d923d2"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "986383415a498bb207518ea4ff9c3ae2"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "0387e2fdd1250189e84118df63ef91e6"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "d3ce9be784472d9d516729ee2d894eff"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "2406b4fecad458d91c81edef0691e180"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "6d3c9f4641b9d955a9660b15279f63de"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "f67744f617526b10cb8f418aaf834fa3"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "f3a111d4480d2b87dfe5aa9645468680"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "4560df0e2369e7994a5f55916b4fc9c2"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "faec0ab846f61031b412f99b34372b86"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "cf41770563e9228dfb0fcabb66295e26"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "f4900580b39a9c5c7d9da4e6eee3e893"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "c6139288078ec69d2dc34d39f81d483e"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "57c9592e4db1002a09debe8db15ce2bd"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "8a536e1232d3c80b29d2e02c4c557d70"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "272f10cd481bf18c5e64e8c19b752b2f"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "ab4fd1a7eafd69635494f2d35a54cf74"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "e9a313a5167a2a284fb9c4801fabff9f"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "d4bb281dd57637632ddc83c0436577e2"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "9e8ae1bf4ebd7fcb937e1c2a40590bf4"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "48e584943c77dd6dfb34cd4214a14b68"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "a0645b4b73b181e98acc3e5c944508a3"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "b01c2a8e1fcaadfa056fc9e36d3509e1"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "1ef80f6a9d8db47703fe8c425208a00a"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "5e3c229bdad2575bdfdd93cf97ce5154"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "95e8797168dfe9744722a4c5262be126"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "0e5062fed937d81c158737caee2e0b31"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "06ab885e3ab7db81296f4bd4017f6421"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "d00db41a0760713d577648402a7b5333"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "a1f99964a651587cd98c2f08ea095d0c"
  },
  {
    "url": "assets/css/0.styles.e5ed1ce1.css",
    "revision": "37a06879cea3143e9412fe065b6466a7"
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
    "url": "assets/js/100.b5045112.js",
    "revision": "decdf090cecd2b2e259b960a49aefcb7"
  },
  {
    "url": "assets/js/101.b804cd29.js",
    "revision": "99f4f7adb6ba6d3a2f586f35d0cc1a4e"
  },
  {
    "url": "assets/js/102.175bd153.js",
    "revision": "e4d3b1898fb186d279371ea29ec4ac2f"
  },
  {
    "url": "assets/js/103.607461ea.js",
    "revision": "22b1e41558886c714c0c4a62915d8d91"
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
    "url": "assets/js/108.5ce1cffd.js",
    "revision": "8febf152cadb41f064ae50782cd40149"
  },
  {
    "url": "assets/js/109.c5e05618.js",
    "revision": "7af4de95e73dc7935f372f43db66e566"
  },
  {
    "url": "assets/js/11.4bc148a1.js",
    "revision": "f1340a4894c7d1a766ba0e32ba93dc21"
  },
  {
    "url": "assets/js/110.36675fb8.js",
    "revision": "17896652d6da33baebe9c68bcfb12952"
  },
  {
    "url": "assets/js/111.dd05c4a2.js",
    "revision": "c5651ab2221f8d853e37dc9160c09927"
  },
  {
    "url": "assets/js/112.25668345.js",
    "revision": "669ee437f62c8e738c516914fe393c80"
  },
  {
    "url": "assets/js/113.2d603055.js",
    "revision": "34592c2ca456c4ce9f852d8a00b1d832"
  },
  {
    "url": "assets/js/114.8ed3cc0c.js",
    "revision": "0a881fe8c9f2f91756886360916ffdbe"
  },
  {
    "url": "assets/js/115.1bdfdcbf.js",
    "revision": "251fb69833773bc1ddb3e947bca27c15"
  },
  {
    "url": "assets/js/116.33c49635.js",
    "revision": "31fb4603f2cb686286d8d65f532caa77"
  },
  {
    "url": "assets/js/117.daa4b949.js",
    "revision": "79fc302f54e030f37a24f4dd1bca0917"
  },
  {
    "url": "assets/js/118.869bda75.js",
    "revision": "82f4268fa9eeae52daea9a1e52971766"
  },
  {
    "url": "assets/js/119.765f89eb.js",
    "revision": "6586878f8cd392d93fd994def6fa40c8"
  },
  {
    "url": "assets/js/12.146b2fd9.js",
    "revision": "98a08724c19b8f62143b1958400ab3a9"
  },
  {
    "url": "assets/js/120.2b0d5cd6.js",
    "revision": "d85a5d2e27eedf5509ab83936bc1fd34"
  },
  {
    "url": "assets/js/121.0427b9e0.js",
    "revision": "077e0c93b9e4e2fca6714be3210204c0"
  },
  {
    "url": "assets/js/122.8f5a7317.js",
    "revision": "91e40e09989accc431f31aced6b4e5c7"
  },
  {
    "url": "assets/js/123.e5e1ce93.js",
    "revision": "9b20d3bbd6806ba061a9446a1ee989c4"
  },
  {
    "url": "assets/js/124.3ef4e9fc.js",
    "revision": "6949c33e6190aa0659086dd3c17df019"
  },
  {
    "url": "assets/js/125.08cb618d.js",
    "revision": "5d337a5bfd186ffc26194d3345c42536"
  },
  {
    "url": "assets/js/126.39ce8fea.js",
    "revision": "074ee2bdf8366a3dc615ad37516726d6"
  },
  {
    "url": "assets/js/127.6e8be0c1.js",
    "revision": "b71d008071f2ebf3ac797c8c38eac124"
  },
  {
    "url": "assets/js/128.49787d90.js",
    "revision": "e62882b030eb1e59756987cffcf6815e"
  },
  {
    "url": "assets/js/129.45755f63.js",
    "revision": "97817e63b7401d795e364af6f872acaf"
  },
  {
    "url": "assets/js/13.750ce4ee.js",
    "revision": "a8031188fcb53efc070c379cbe7b4fc3"
  },
  {
    "url": "assets/js/130.0f1ac1cf.js",
    "revision": "db74d3f701fa23e948625af3a0b24638"
  },
  {
    "url": "assets/js/131.5d6da4c2.js",
    "revision": "f69d0a41504a59f092697e737bd5a09d"
  },
  {
    "url": "assets/js/132.6a9e6631.js",
    "revision": "87fd6b0b9b9a60ffdb1f6ccd7efb834f"
  },
  {
    "url": "assets/js/133.fafc778c.js",
    "revision": "72f75fa0bbbd0d9cab26c81703050456"
  },
  {
    "url": "assets/js/134.deabe234.js",
    "revision": "25a009783a8fe8cf2aad483aac32343d"
  },
  {
    "url": "assets/js/135.383cb182.js",
    "revision": "2bd259c046acfe893a24ee316bf7dd9f"
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
    "url": "assets/js/138.b24642ca.js",
    "revision": "ebd33abb4782cffecd262a26d3eb7931"
  },
  {
    "url": "assets/js/139.b4a43d77.js",
    "revision": "1f626705893ad06cfbada26719e2c4c4"
  },
  {
    "url": "assets/js/14.8520b2b8.js",
    "revision": "5352a2aa79771a8a508a58a96441ca82"
  },
  {
    "url": "assets/js/140.dc05ca20.js",
    "revision": "3f227c479dfaa14ff15373ca0a47c6f3"
  },
  {
    "url": "assets/js/141.34e50dfb.js",
    "revision": "c65dc2c265f54ccbbc18b9aa2ab711d2"
  },
  {
    "url": "assets/js/142.00943d59.js",
    "revision": "f4c880f4aac73f5851bc26c91d4cc805"
  },
  {
    "url": "assets/js/143.136bfded.js",
    "revision": "d15f2366cd7890e96376362235487626"
  },
  {
    "url": "assets/js/144.07e4bf96.js",
    "revision": "f41585c9684bc746e7083452326a2264"
  },
  {
    "url": "assets/js/145.bc3a9fbf.js",
    "revision": "b33d608769156b9b46f7fc39e6e5686f"
  },
  {
    "url": "assets/js/146.88791b18.js",
    "revision": "f3a971bc44a5d61d1993bc6cedc886dc"
  },
  {
    "url": "assets/js/147.9858193a.js",
    "revision": "28a52ac8562dc9d9eef2d1d356f37e2c"
  },
  {
    "url": "assets/js/148.083f5c0a.js",
    "revision": "5c737500d22291a690331ebadbd9f895"
  },
  {
    "url": "assets/js/149.4a79adb2.js",
    "revision": "3b63a3bc32b1d654c9315dbc786b3d4f"
  },
  {
    "url": "assets/js/15.e7ef1bc0.js",
    "revision": "5823f79a73ad136c42e9d2b653a17324"
  },
  {
    "url": "assets/js/150.24f48bc4.js",
    "revision": "94241f255f33335679b87659a4d03fce"
  },
  {
    "url": "assets/js/151.6b79bb0f.js",
    "revision": "14b1f4946e47ae8ef830e3b530f6e283"
  },
  {
    "url": "assets/js/152.07833aa2.js",
    "revision": "e5a768aca89310af2d8df596e6ed969b"
  },
  {
    "url": "assets/js/153.3b13c641.js",
    "revision": "039cd48b1e2852386e1fa5413a824882"
  },
  {
    "url": "assets/js/154.6ffe4907.js",
    "revision": "bfaa31b180469bab8a418a9ee6725e2b"
  },
  {
    "url": "assets/js/155.d47d3dde.js",
    "revision": "3e9e16707d5f774491c6a4a7d25c4f35"
  },
  {
    "url": "assets/js/156.1883a0aa.js",
    "revision": "0f99e9326682a2be0c15b47ee016ec99"
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
    "url": "assets/js/160.774b76db.js",
    "revision": "8be78fef3646e3954458eb7d89d464b0"
  },
  {
    "url": "assets/js/161.c4e5195d.js",
    "revision": "c4bf25977929592e5e42146a843b5a82"
  },
  {
    "url": "assets/js/162.d0f687fd.js",
    "revision": "ff5fd035ef34e3f403f9f914d89a440d"
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
    "url": "assets/js/168.e10c53fb.js",
    "revision": "d9838c7c48bca190444d4434426ba68c"
  },
  {
    "url": "assets/js/169.140deeb7.js",
    "revision": "125c5f3f24914091660ea4c62ec732a4"
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
    "url": "assets/js/171.7cd5076c.js",
    "revision": "6786dfacf62ee7b1b8a9bb190282008c"
  },
  {
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.ec907150.js",
    "revision": "0e234b08fcf4e346955618dc62db0195"
  },
  {
    "url": "assets/js/174.e3cbec56.js",
    "revision": "ddfaae5e420080b5954775900f61ca01"
  },
  {
    "url": "assets/js/175.f41ce05f.js",
    "revision": "742f936b35d2d18b58b73144dafe9824"
  },
  {
    "url": "assets/js/176.11d82cff.js",
    "revision": "c5ef5b147c6d76e4878bcdd1f9737619"
  },
  {
    "url": "assets/js/177.cce12ee4.js",
    "revision": "c4f75d13283d59275a2c451d03d483b4"
  },
  {
    "url": "assets/js/178.9c632b21.js",
    "revision": "523406c80fb5f87e23d08ef7137b5d1a"
  },
  {
    "url": "assets/js/179.c54d8f06.js",
    "revision": "d465444a2e705c3e4965310f12d368f5"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.04ed0818.js",
    "revision": "692ac83428138c2f3d63624a8c19cc1a"
  },
  {
    "url": "assets/js/181.f0c2fcf6.js",
    "revision": "ff2dbaf0c62156ceb41f38391d044a98"
  },
  {
    "url": "assets/js/182.320b35b4.js",
    "revision": "5997d5d66f70e150eeab7e9eddb6dc6b"
  },
  {
    "url": "assets/js/183.4033bdfe.js",
    "revision": "21e3190f731a5ecf48c884d068e60a42"
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
    "url": "assets/js/187.1987b45d.js",
    "revision": "778da38a522cc68e5b9b73fc6f43789b"
  },
  {
    "url": "assets/js/188.3c166483.js",
    "revision": "8c50e38ff19639b7dd4d7b843d497ca3"
  },
  {
    "url": "assets/js/189.ece0b420.js",
    "revision": "9aa19262f15238075b1a2d8d1d5d416a"
  },
  {
    "url": "assets/js/19.1319631a.js",
    "revision": "be68c9367d44568351d48d78da38070d"
  },
  {
    "url": "assets/js/190.e3c924b6.js",
    "revision": "63d177edc2c03eecdffae3328f9ec66e"
  },
  {
    "url": "assets/js/191.b46bb844.js",
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
    "url": "assets/js/20.050e4b7e.js",
    "revision": "fb5cd6c8680ced3f355c49fc053255d1"
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
    "url": "assets/js/24.534a49ac.js",
    "revision": "28480ffec0fc40d38b6c3392ec774009"
  },
  {
    "url": "assets/js/25.4b8aa618.js",
    "revision": "f69cb7aa7d43edb384a4493d332205f9"
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
    "url": "assets/js/30.36ba599e.js",
    "revision": "1d441103a28e233893a1dc308283a14e"
  },
  {
    "url": "assets/js/31.8a665781.js",
    "revision": "e472a08a875c70c8226254b39f90f6bf"
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
    "url": "assets/js/34.63cf7d2a.js",
    "revision": "be24ab4e15c51f2660cbaf59c47c86e0"
  },
  {
    "url": "assets/js/35.bc705d92.js",
    "revision": "8d7cc713c5d72e1bd2579afd95fa60eb"
  },
  {
    "url": "assets/js/36.ff149ea0.js",
    "revision": "b1740bc9c8e10a8f3aa9de6f612b6e20"
  },
  {
    "url": "assets/js/37.00ff46fd.js",
    "revision": "7f10a46445c81f2eb4da74518afb7292"
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
    "url": "assets/js/4.d0d8ad14.js",
    "revision": "f56b92085217ac5a68d00ce18c88112a"
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
    "url": "assets/js/42.de30824f.js",
    "revision": "2961ca9323b41dda5d8e95609b8341ca"
  },
  {
    "url": "assets/js/43.1842e624.js",
    "revision": "7b68b4a3d7dd07496f96ba398e2c4572"
  },
  {
    "url": "assets/js/44.559aac16.js",
    "revision": "6958f0e0309b03b0c10e51987ef7e9e3"
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
    "url": "assets/js/5.e2b13f90.js",
    "revision": "501bac471b2ce60656316335c4ae7470"
  },
  {
    "url": "assets/js/50.18f2e341.js",
    "revision": "37a8ed502df972c9bd0325ed06d25cf2"
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
    "url": "assets/js/54.5168a581.js",
    "revision": "9600ae39faaf19cb68d628a32869bc38"
  },
  {
    "url": "assets/js/55.f896ccdd.js",
    "revision": "bf19c058983850e0c05b02a0e190e494"
  },
  {
    "url": "assets/js/56.fc6f6bbf.js",
    "revision": "463b1ffc5f5278ca84b95930e3f19bd8"
  },
  {
    "url": "assets/js/57.66b4d299.js",
    "revision": "0285eac856a739367ba8c079c15adbab"
  },
  {
    "url": "assets/js/58.f0d85d4b.js",
    "revision": "d00a1b41131a862526fa8adcb8ed0869"
  },
  {
    "url": "assets/js/59.aac7b45d.js",
    "revision": "7a2bd76766ef6b7a9bf16e44b6d609f7"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.98a70eb5.js",
    "revision": "a97045962fc127de8273ad96bfb8e577"
  },
  {
    "url": "assets/js/61.ec09cc1c.js",
    "revision": "07279e827860ec35cceba8f012143631"
  },
  {
    "url": "assets/js/62.3ed27c6a.js",
    "revision": "ac7a76381173c86c166a0db92a49b37d"
  },
  {
    "url": "assets/js/63.2dadd883.js",
    "revision": "80471c23b6f3744164901abea4825da4"
  },
  {
    "url": "assets/js/64.b0dec0ae.js",
    "revision": "c07de557c172889e2271b70f26c59a6d"
  },
  {
    "url": "assets/js/65.4955546b.js",
    "revision": "7fecb5cb1af87f310113bb8bf2c32a9e"
  },
  {
    "url": "assets/js/66.d7e4e305.js",
    "revision": "bc512212fe6443622ab2b12fd6c6405f"
  },
  {
    "url": "assets/js/67.fee29b69.js",
    "revision": "ce9de1139d5e5ebe06ae5a8338d281b7"
  },
  {
    "url": "assets/js/68.2086c7b7.js",
    "revision": "b91ff8362ab3561b4ed17abe7443f2bd"
  },
  {
    "url": "assets/js/69.954a6915.js",
    "revision": "b3b6f324511afa18bdeb9419042207b8"
  },
  {
    "url": "assets/js/7.dc920b88.js",
    "revision": "b8b9c88d6a6fa60c7aafbdc6dbd318cd"
  },
  {
    "url": "assets/js/70.43f81ccd.js",
    "revision": "faccc1b6a60503aee10a8db270f098e7"
  },
  {
    "url": "assets/js/71.5912de27.js",
    "revision": "843b21610db80a0e86e497afebf987c6"
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
    "url": "assets/js/74.fa90a12f.js",
    "revision": "bf27abedc42a33e07847bfc7b1d343db"
  },
  {
    "url": "assets/js/75.6106f1d3.js",
    "revision": "0a0fdecb8544c829983760ed1421ad13"
  },
  {
    "url": "assets/js/76.5ab55193.js",
    "revision": "d4bd852ede47f7a942a12e2d04ac22d2"
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
    "url": "assets/js/79.dba43555.js",
    "revision": "e09ffa3bef91ae90548959dcc5d08ebd"
  },
  {
    "url": "assets/js/8.2491ba32.js",
    "revision": "d6b7a6363e714cfa3cdfb9847a7cece6"
  },
  {
    "url": "assets/js/80.ef580f91.js",
    "revision": "5d89144f77d9a3d4fccd5835df369795"
  },
  {
    "url": "assets/js/81.09e376d6.js",
    "revision": "c1ee31a85e2a71d58bf9500717d7174f"
  },
  {
    "url": "assets/js/82.e4fcf364.js",
    "revision": "e12ccb7b7d88db5517241af8697785e0"
  },
  {
    "url": "assets/js/83.5373293b.js",
    "revision": "2ac8c5555eed03079cfaaca4c998f856"
  },
  {
    "url": "assets/js/84.fb7a96d3.js",
    "revision": "3b37001cb8aa29554feb87acce56361c"
  },
  {
    "url": "assets/js/85.56ec1c57.js",
    "revision": "754a04f3b8258af510a029b2bfd2c1d3"
  },
  {
    "url": "assets/js/86.3b01f706.js",
    "revision": "5ea1481afa1795134be075627a86f19d"
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
    "url": "assets/js/89.3ae8dd92.js",
    "revision": "48d6e32aa3071e07294aa476c2202a56"
  },
  {
    "url": "assets/js/9.a6ec67f3.js",
    "revision": "dc21d3cc91f8802f808d511b31633df9"
  },
  {
    "url": "assets/js/90.d969980b.js",
    "revision": "d6b739d04e05ffe8e05aba6679d98dcd"
  },
  {
    "url": "assets/js/91.658032da.js",
    "revision": "75c3e9cb5d8503b2f4c17c4647f4d905"
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
    "url": "assets/js/96.b72c8327.js",
    "revision": "a0fe73144b42b9e18309ba492e0a6680"
  },
  {
    "url": "assets/js/97.568fad9d.js",
    "revision": "fa7364d94275a29e6d165c20afe55a9a"
  },
  {
    "url": "assets/js/98.e6101b3e.js",
    "revision": "f81094370ffb074a57150d2c59fbe21a"
  },
  {
    "url": "assets/js/99.7a1a6ef3.js",
    "revision": "7fcd33000c3a5a835492b29434cafe65"
  },
  {
    "url": "assets/js/app.e0007ef2.js",
    "revision": "8f2d7cd63aad14ef0b7f7ba49f6596db"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "04565d7d79a638c53b4030e00ae470c1"
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
    "revision": "41c78a1fff84ef06d33e4a2ef6657321"
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
    "revision": "8dec783dfa1d965295ac00c4273b5be5"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/__mocks__/ajax.js",
    "revision": "ff8c425261d0184c2c958be121816e5f"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/ajax.js",
    "revision": "52d104fdf256be4929104612272915b3"
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
    "revision": "6e01619d3a919fe6ac93508e799a23e3"
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
    "revision": "8b5fb003f1c9a673b9e056e3d37870f1"
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
