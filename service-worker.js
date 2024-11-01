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
    "revision": "5da5a80b3c694df74ad3f20c319377bb"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "6253fe7663a00dfe241ffd17124d70fd"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "118a0f3bc41dafaa14ee8d0b463599dc"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "bfc22ecdb0ffd9ae18ae87537250e9d2"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "1a3078a4ef149f8994f23be1f61ee94a"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "34af34b8ec60863f3faa39498111f202"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "30386a0b586871220dd9ec842f14c628"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "41c5d210900dce137afb9b8ffa2e4220"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "93ca1d8d9e7c0f22a070a908e35affaf"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "b392c1308674f323bfb677c342974e71"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "65dd92f47ab6aa7724d28db7b992e811"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "82c7e2d903e222de16f518296c243942"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "4d390596a4ff0ddd6a81919f117b978a"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "6dde2cb3fb61403e92ad9aa204cbfba1"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "bbf43335b465a9c60d123459776dfdef"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "021de3443c7bddf537ed0cc1da2b43c8"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "9051efb2aea6c2e59f5446d7c1c68347"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "db37773c9e54a13fe5b566d1d82f5544"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "61faf33326d297c17c312c2c185c67b8"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "6f4d1a93f43cb0fbb445c96bb394eeab"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "2a815596ef654c543d78a4d51ad02156"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "3b53289f28aae71c0d4a1d240d41a37c"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "d93d1cc2de8d4972d80f82ab26672b13"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "e47bdc67c3e5dc7d860222bb7d2f7e4e"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "6cc529bb594a2ac0e77425d9f227bf7f"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "4226dfd809b42d32745682f1dca71373"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "44b08437f31effc46abc1df40f579642"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "92ec475779d10538901492d1c203995e"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "60dd5a9b50a3dac275955281064fcb7c"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "6b0529e87599ed3d93ed41fb97b91c44"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "55684dd23e2a85f5215b4a4cf444e4d2"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "0be36f6ef3081f4f43a6a6e81808be7f"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "817365e2588a893911d86cced76580e4"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "b1bb2c26969e5e584c587e550f720e59"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "77049948a660c28862456fc1a8d8b0dd"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "efa9e6088fa31712d6bb1fe72641ea68"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "0f2c565639eb5158600159ea6205529e"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "60a3f54761166c1102d3ac01889a7729"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "44c97b4ebbaf2e632487698da66f44d4"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "e2813aa451fe223154d9ef142ff07081"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "b9684c0bf2925a313446e545a7f7782b"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "047471549638b832c205b7662c165e55"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "04766aa7cf51e52cbce554332144382a"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "26d594ed32aeeb7135147ccb205d02d6"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "0f12f3a32d48117b1d9936937c105eeb"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "a9a53a8c170792151224a116d2df0c61"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "1ac3ea5f668a6f038a87392dd6a53ae6"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "fbef23b38574fd9dc757042904a9d31b"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "8727711287a17dd705f9326a16db4c7d"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "31b58670863765d2c0e677f666fad204"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "23d0e0a4b3ec8697216cab05ac8f0068"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "56406851452155506fb6385a3e73885e"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "4cc198ab594fd85e594f731443367019"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "776642349fad86d9f3902fbef2d28e72"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "0e0c5ccc84164e9655bd2335f7375f75"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "80e263d0787fdeb1c3f5afe9a5a5d235"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "f7c7d82937d58ee4ad96735186339a06"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "99d215ff92ce6fcca56548f6c13af1a6"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "02176de0fc4472f407244b099d369a81"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "67786c04f038148459c420615d3bddd8"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "2681e2255b63610eff8aa21aa45ba60e"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "e066fd1710052248d5c3127b9d3b7ce3"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "43a36cc9ab904bae83656829ec1bbbaa"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "d3cff4c666653913065fcaeeb046a377"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "90b51c2fe468de9c4209393afb39f7db"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "a0a0b8a4953b2f403d6299b2831f9441"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "eb6245f45b515ac4f8267b52767635d1"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "fece4007d8984315e1413f1b79929cbf"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "0485a79c0b6905d91c3842b4bda57f0d"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "4aa7276a599f8e1de47c29871c4bbd21"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "5bc5032837da8360e2ed004064fe649f"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "e3f2bdffb9fbe07e8f65ea5bb8b9ee39"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "217a3664919eedeff40b56c3fb2189e6"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "2b3e9d321d8bdc55c02f40e2b6c3ccc4"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "6ba6bd2c8f25eb1c52335a3a72b47413"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "271ae875faa874e1fd072e0d7bec92ed"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "d7b1fbeccb6ab5d3b56b835b5a7508d9"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "cc2fbfebb840164e95e0fd47b9f22449"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "7b7826991385a3ab9f81c82126ed76cc"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "0f41b04aebf4a4bc9e8df5eb949c3565"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "668971f3b8a620ce5af5651291a52b90"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "b5b036c1628ceac2421967cffcd01416"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "b0ae41dedb8d7382a107c5626b43898a"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "68cecf891a3f11fcc09d658a213673ed"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "e804f05f9cdfb7a334a2477303556591"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "7a4975bff070b6079aa39ef1bc55e1ec"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "b879e1f7b7337dabb12d9e21ae5da152"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "fee764df7dde9c78f2bcc76c01a82cf5"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "e0fc268c558c55c4ef8d9dc97407127d"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "5c35e9ce37a3a30de7e761093f29cd0d"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "d5cb9eac9f3fb95e6b6be247402786ee"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "c21e5162185839192e6e8a76c532a447"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "2ecaff777352829f34664eb9627ef455"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "66dffbbb07921faf484743f7702beed3"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "46ea96bacace64171b6330a6f596d65e"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "1d29c81d52c77ed115d76754af6c7334"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "2c247c0159b6f079a66405d0a5e468ca"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "1cbdb96921ac1c8436151a38a411633f"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "11bccaa6c1eecb2921a1ec2830fb35a2"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "9f40a378dca8156287ac12a23d57bdff"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "ee92e9730192f90c4b87df9cb9c12343"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "dee8f600d9f21b107c1810643eed0bb7"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "479c906bf0352716dd442ac08db7e974"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "508e9d4b09945f10f0061bc3150b122a"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "02e9cb53878292e4b1aa033f37f0a463"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "c3876d0d3c90208cab0f66f854bd65a4"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "0db518e3c42108f009f2c0e248ac0e7f"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "01aad21e89a2baa4afcbf4983f4e5988"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "c498cc8e69adedc7af388c5feea32781"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "4dfa0c7ec017d944c7e7f3e5046e8f21"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "d73d14062e1399c3f344957428318a78"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "5a7f108b39d990d44d1ca45f30310167"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "619662013f73293c11aadf9d79769165"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "1fc3dc7159e53a342650834c443ed94f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "5f3dbcfe92bcb413ff22bd52fd0f5231"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "54269194b9674fdcce843d2205135d13"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "30ac215c50a3bc9a45c0d874999b44e6"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "35b496ccce5f2fd3183e4ba9f396fb25"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "ead86d23d5785851ec2475a9ba469340"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "45b9bd21655e48a94b3b70951cc25dbd"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "b429f2ef1695ecac05c54f622f93e32f"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "3f79397e24ef8610a032ce3f05abb551"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "518ad113bf55b9ad867d01fdabf41125"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "4297cff3e9b166572b154f49a44c1a36"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "1b3a5e87584f6f849e082408f45dda9c"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "461451571fd542571dcdcf39b15ad18e"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "5a6941f366bdac44532eaabaf33aa509"
  },
  {
    "url": "404.html",
    "revision": "8d6f149071a0b0e3d90bff720144c6ab"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "a276cf7fa6eb7194718ace6ab8ce2477"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "d5d5952b00d0a9d86dbc4c6c66adfa98"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "5daabc6cd278784ad6ef0c6f02eedcf3"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "ff1f97c493d872b717853b87b508670a"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "3c0daaf43c716faebacf2e5690b17b17"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "2f13825e1d871041295a7bb88bacb1ac"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "d9011c582ea0f70e747353087d408688"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "d2614ca9173c6106910dfcf1b23ccf4b"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "f6c2631a42c08673d1df38e52316c220"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "bf6ce0ca1c8f023b867336a5b3932a4a"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "d8da9a3c38d9b76e435efaf14205214d"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "4171c62d7a9224e5ad202fe38de2d7f3"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "8d2aa576af9497fe3782165ab6855c0b"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "76359a4ecdb7a0095358c7cb1d40d7c7"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "1650b7392c842834394f97e6ca270c32"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "5bdcb98b9d56d562873994e38ad39f62"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "ef7f082b0d8b761f67ce46bf4c79cb0f"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "3240f9a3c7123f63086f2ec305f63920"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "bf334a2f00332d43b0d2acc9c66cd903"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "128f339ba6be878bdf148fd5e27e9444"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "2326fc88c9010c5b4220916e384c8c1e"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "c77b6e0943a652b4b36bb8feade28eca"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "7114ed693c3d61764f21dbc17dc88933"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "9a02af909b2ebb16a0d156fc2359fb99"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "b3bbc8780dcff22c0901b5b73522ee5d"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "31927503f85527242cbb3d4134c9c3ee"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "b54f85f6e3bc0b2bb954e46bbb5e6ef5"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "376fef80435eccd17d407a493e7d4b1e"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "aded3f5d78caeab438cff746149aabef"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "44c44edc560ea510107f12449a6626da"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "67d8fc29e4fb107a13bf477961bf362e"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "e202bc66344f30dabb624072d1ed7f67"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "7e845a7295601bba0ba4531818c36b85"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "6ada102e35c87a12ee90c3c0251a21cb"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "77bafc7cd9fe1d74985fcbef9a9fbcec"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "70c76d857f7024ed78375c62ff688501"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "683c325ec5cc64082655e2a9749aba5d"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "97a13c8ffb355fdf5ffd760fb43b2469"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "06584576f0b7a87281dacd562ebd71cf"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "1a1f856d73623f1590777afb030a4860"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "4c11e4d4473b7c9ad71743d29a2755da"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "6f904c2152aec4a7a122983fdde7d809"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "0204a2c2e84128c207fb378b233a10f6"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "cda2a3fcfd13154b2fa48a86291383c0"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "b2638ac102e4ffad98ff8ccc254b7d46"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "34ebce2086b9dc2775ab83ee607753d0"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "18c53b1436bddca9995d59c065aff956"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "9cc99dcc0fe72e4456c3c88c853735b9"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "41d9b6a606e1ace3e61616d590032267"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "9a6b408fd767a2abe7cb0bd11fa5a9e3"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "0edb5c5af80127c021135c2496e448b5"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "70dd04f3e2fd5dde88d855b96168299c"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "2a4b4ee1884903d706cca9cc0e11916c"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "bbfce4ec65aca872c616d0ec3ff38ec5"
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
    "url": "assets/js/103.3788c08c.js",
    "revision": "296a1f882e6781716167d1bfe4b04850"
  },
  {
    "url": "assets/js/104.62e90cfc.js",
    "revision": "f7c02e2449aea325ac4ae0fd4cfee9ae"
  },
  {
    "url": "assets/js/105.7cb69fce.js",
    "revision": "37ddf326c0fcd24d09ba7f3513f6cc17"
  },
  {
    "url": "assets/js/106.15c94e60.js",
    "revision": "384bf1d82dd78219dab05e67c18012ce"
  },
  {
    "url": "assets/js/107.92a9807a.js",
    "revision": "b0d79fabca89fab043ebf70de0c2e64d"
  },
  {
    "url": "assets/js/108.017252bb.js",
    "revision": "6f0efabe801b8e0a02934ca3eb6b7459"
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
    "url": "assets/js/110.c60e9349.js",
    "revision": "35e6d51d4d5bb2dc61b9c24e098c723b"
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
    "url": "assets/js/114.8ed3cc0c.js",
    "revision": "0a881fe8c9f2f91756886360916ffdbe"
  },
  {
    "url": "assets/js/115.25dcf12a.js",
    "revision": "c3cf3921da7d9f8b57a74ed5dc4a19fd"
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
    "url": "assets/js/118.c9daba33.js",
    "revision": "272114161ae335ccdbfc7cb9cbc44255"
  },
  {
    "url": "assets/js/119.e7457b1c.js",
    "revision": "507fe244ba34811f22c9b991d9cda4eb"
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
    "url": "assets/js/121.df468ca3.js",
    "revision": "df9cfe329e0c8d7be580c2a055369fe8"
  },
  {
    "url": "assets/js/122.2c2f6175.js",
    "revision": "4a0554766adbc9a3a390bc480c860d40"
  },
  {
    "url": "assets/js/123.930dca5a.js",
    "revision": "0803acfa69b02882faeb62688779269e"
  },
  {
    "url": "assets/js/124.82ab9ca5.js",
    "revision": "1976c56b3f0b3d44ff79feb8c16ff646"
  },
  {
    "url": "assets/js/125.071e8945.js",
    "revision": "3f6356de7f80a4b63c048c987ff889ab"
  },
  {
    "url": "assets/js/126.06925d94.js",
    "revision": "afef44073aacc806edab4d1fa1a04d57"
  },
  {
    "url": "assets/js/127.54144a39.js",
    "revision": "639cd8bd90bdbc02bcb489fabcbb44ec"
  },
  {
    "url": "assets/js/128.3bf11042.js",
    "revision": "0d0cb3c3a8fa13a010bb58781545ac5c"
  },
  {
    "url": "assets/js/129.dd5df8e1.js",
    "revision": "d356bb52d0c831cc784cefe9d20bae1a"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
  },
  {
    "url": "assets/js/130.6abb9efd.js",
    "revision": "62873530c4a232bd2d255adfa00ef68b"
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
    "url": "assets/js/136.e0148f6e.js",
    "revision": "6ee7d4bc9eedd70fc02098b299cd8342"
  },
  {
    "url": "assets/js/137.ce0cf2fb.js",
    "revision": "f70c1750bbca0236d236385eddcead16"
  },
  {
    "url": "assets/js/138.0f971e0f.js",
    "revision": "1b0dab788fd1e1ea1cb4b63ae9fa5978"
  },
  {
    "url": "assets/js/139.c3cb1f62.js",
    "revision": "59ee9d92e1500a0cc8d101adf61817a6"
  },
  {
    "url": "assets/js/14.8520b2b8.js",
    "revision": "5352a2aa79771a8a508a58a96441ca82"
  },
  {
    "url": "assets/js/140.b2d42773.js",
    "revision": "d97b98e60a5a8f98fc2ddfd33dfbb02c"
  },
  {
    "url": "assets/js/141.34e50dfb.js",
    "revision": "c65dc2c265f54ccbbc18b9aa2ab711d2"
  },
  {
    "url": "assets/js/142.1dda2adf.js",
    "revision": "84b0e4e551ff95ee2dfdd47ec601ffbf"
  },
  {
    "url": "assets/js/143.136bfded.js",
    "revision": "d15f2366cd7890e96376362235487626"
  },
  {
    "url": "assets/js/144.c222e0cc.js",
    "revision": "0a9e09c76a1f35c60bd0a419b8b1c371"
  },
  {
    "url": "assets/js/145.bc3a9fbf.js",
    "revision": "b33d608769156b9b46f7fc39e6e5686f"
  },
  {
    "url": "assets/js/146.c60cac47.js",
    "revision": "68bf152890fcd377cb940552502581c6"
  },
  {
    "url": "assets/js/147.9858193a.js",
    "revision": "28a52ac8562dc9d9eef2d1d356f37e2c"
  },
  {
    "url": "assets/js/148.aa12c8cf.js",
    "revision": "7ce6529d1e01b9730a072f0929cf5029"
  },
  {
    "url": "assets/js/149.4a79adb2.js",
    "revision": "3b63a3bc32b1d654c9315dbc786b3d4f"
  },
  {
    "url": "assets/js/15.6fcffc63.js",
    "revision": "9e00e1439e0f69ed20baa969bbf1109d"
  },
  {
    "url": "assets/js/150.8b2ccfcd.js",
    "revision": "d4237054ec69fc4a10dfd148411bdb86"
  },
  {
    "url": "assets/js/151.9f91a5ae.js",
    "revision": "542f18076fdb4c8c66398c4ecc1db0da"
  },
  {
    "url": "assets/js/152.6e59d109.js",
    "revision": "3b6a43161d5109505124cb464cb4c3f5"
  },
  {
    "url": "assets/js/153.64abd3d4.js",
    "revision": "bc5c51b68812569e5bee60f0af68fd44"
  },
  {
    "url": "assets/js/154.1a4676b2.js",
    "revision": "45f893e22fee087404233f9265cb4d1b"
  },
  {
    "url": "assets/js/155.1f960055.js",
    "revision": "f3aab4aa798a792e577c53b37c319f9c"
  },
  {
    "url": "assets/js/156.06de34eb.js",
    "revision": "36b3e42ac28c676e910122ff5afa8e21"
  },
  {
    "url": "assets/js/157.c0c72142.js",
    "revision": "767fe834bc929c08ec223ddf9db2ef0d"
  },
  {
    "url": "assets/js/158.e3eb876a.js",
    "revision": "b0ac500066981d5365403eca280a94bf"
  },
  {
    "url": "assets/js/159.2f2db222.js",
    "revision": "1be6519123ee2171815050ddcaffddf3"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.2dc50048.js",
    "revision": "f10258a0dd15314da9ec7dba3cb1d70e"
  },
  {
    "url": "assets/js/161.ba3949e7.js",
    "revision": "6bafbeea045ec6179bab3671fcd27392"
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
    "url": "assets/js/164.704c23a1.js",
    "revision": "0174a14aaed002280f39d5b9dceec806"
  },
  {
    "url": "assets/js/165.d5d80cac.js",
    "revision": "9b1b61cf576863d5df048128b4c3036a"
  },
  {
    "url": "assets/js/166.d46d788a.js",
    "revision": "fce203fdea92ee9bfb1d6f344ccdfa05"
  },
  {
    "url": "assets/js/167.468b3633.js",
    "revision": "2c81599b2b9a60deb110fef303098131"
  },
  {
    "url": "assets/js/168.9b0a089c.js",
    "revision": "94ebc60ef054bcb561eec1ae1c95742b"
  },
  {
    "url": "assets/js/169.6f586e8b.js",
    "revision": "722bd8d4f6eaeb1319d4153b662bf35b"
  },
  {
    "url": "assets/js/17.d22eeb91.js",
    "revision": "f16c0e3b9c439cc3b75915915618f664"
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
    "url": "assets/js/173.bc04f44d.js",
    "revision": "c0353ed08d70e38440182ec4915358db"
  },
  {
    "url": "assets/js/174.8257a8dc.js",
    "revision": "0de66bebb2fbe64b582ec7089fa6dba9"
  },
  {
    "url": "assets/js/175.66faef82.js",
    "revision": "d0612384f9b47f2d40f5c01c7b9ac9ce"
  },
  {
    "url": "assets/js/176.1c2288fd.js",
    "revision": "13ff73da46199916bc8d4c8152a3a2cd"
  },
  {
    "url": "assets/js/177.0fdc1409.js",
    "revision": "d7d2337ef5c44090da03648376988f55"
  },
  {
    "url": "assets/js/178.09837b73.js",
    "revision": "e280eecedd8095fa72a8b4bdcf21cc5a"
  },
  {
    "url": "assets/js/179.31aa0b76.js",
    "revision": "e31657cff23953e54a88e4cc0ffa49d2"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.459a6bc7.js",
    "revision": "dc6933364a788fd739600e981de7a966"
  },
  {
    "url": "assets/js/181.5a2f47dd.js",
    "revision": "48ff1a09ded5d3da3722af205bba26d4"
  },
  {
    "url": "assets/js/182.3c548b17.js",
    "revision": "f48bb48aa403daac7f3893e2cb6e5097"
  },
  {
    "url": "assets/js/183.c3e303a1.js",
    "revision": "eb6b81583c9871c1f30faa5b68fd5e03"
  },
  {
    "url": "assets/js/184.906ce03d.js",
    "revision": "5f5e5b40bec77ebebc7fcb5c3c29902a"
  },
  {
    "url": "assets/js/185.f9acf20e.js",
    "revision": "6843113e687bb2015b1915e022245bd8"
  },
  {
    "url": "assets/js/186.f8ab4e15.js",
    "revision": "abdaaafd4de2b8d605f6d7253a89797d"
  },
  {
    "url": "assets/js/187.23bd54a3.js",
    "revision": "a6c3f388af6b59ce62fde499672fb00d"
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
    "url": "assets/js/190.ba7b5cfa.js",
    "revision": "18d40346e3e4a154090bf3f5486f8885"
  },
  {
    "url": "assets/js/191.a45a250b.js",
    "revision": "f5b560aee96a99fecedcc17bcffc6d6e"
  },
  {
    "url": "assets/js/192.7f6e6806.js",
    "revision": "ace5e84cb450e8e0c2c70ce8dd8038ac"
  },
  {
    "url": "assets/js/193.1e921039.js",
    "revision": "7a07c43e7756acd092713951b12b670a"
  },
  {
    "url": "assets/js/20.3a56a984.js",
    "revision": "8b2b951ca9e69d818dcd659299cfadd3"
  },
  {
    "url": "assets/js/21.54ab1ae8.js",
    "revision": "11f7b78cbda39dd8f9e3f510036c4ea0"
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
    "url": "assets/js/34.c90bed6b.js",
    "revision": "b6e89229e34229ea258c7d844ab9ff2c"
  },
  {
    "url": "assets/js/35.3ce8b710.js",
    "revision": "d973d7952676142501acea25ae63e440"
  },
  {
    "url": "assets/js/36.379d441c.js",
    "revision": "3ff95a6a773fa6bf802b0ba65ed911e8"
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
    "url": "assets/js/39.dd5a98e1.js",
    "revision": "907ac9bd081ea7b9a31591fe3c463cc9"
  },
  {
    "url": "assets/js/4.c8df931e.js",
    "revision": "19509759f40bbf3679e40bffb5a30055"
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
    "url": "assets/js/5.792aefb7.js",
    "revision": "7b1196e38f012a751319f8eb3126cb1b"
  },
  {
    "url": "assets/js/50.c949dbd0.js",
    "revision": "5d847605a6d9dc11dbed809da42f2d24"
  },
  {
    "url": "assets/js/51.13272cd6.js",
    "revision": "7b656af3902520a5416a4ca1d1379ea8"
  },
  {
    "url": "assets/js/52.05a86447.js",
    "revision": "cf668b128ac1565dc946f0cb46dc46bc"
  },
  {
    "url": "assets/js/53.9f3788aa.js",
    "revision": "720975861753f1fdd79eb18b89a5fb9c"
  },
  {
    "url": "assets/js/54.47e141cb.js",
    "revision": "670e913053ad6fafb51c6edbd180255e"
  },
  {
    "url": "assets/js/55.26a0791f.js",
    "revision": "c06d0b24f0c27b33546686c5f48bede2"
  },
  {
    "url": "assets/js/56.bc676a32.js",
    "revision": "a11ba1691ddc58038578a00fa4d0b9ff"
  },
  {
    "url": "assets/js/57.95245e13.js",
    "revision": "a03ed8c9e8b3cc3f62cb7b6b252f3b64"
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
    "url": "assets/js/60.6e790ae5.js",
    "revision": "124eea22ac544dd4726204fd24296a94"
  },
  {
    "url": "assets/js/61.df8030da.js",
    "revision": "5da3433d16308ef377d8d21c26792d63"
  },
  {
    "url": "assets/js/62.3ed27c6a.js",
    "revision": "ac7a76381173c86c166a0db92a49b37d"
  },
  {
    "url": "assets/js/63.b216b5f0.js",
    "revision": "4568043e042b73b0a13d49181703b2cd"
  },
  {
    "url": "assets/js/64.f6a8014f.js",
    "revision": "5c72c94717cbd55aa79d3cdb85bf47f3"
  },
  {
    "url": "assets/js/65.4955546b.js",
    "revision": "7fecb5cb1af87f310113bb8bf2c32a9e"
  },
  {
    "url": "assets/js/66.7fc14e88.js",
    "revision": "5ffdc23479de4766c30885a8211e6a15"
  },
  {
    "url": "assets/js/67.9d85ecea.js",
    "revision": "f138d3bcc6f52be6899dd374d7a1aa02"
  },
  {
    "url": "assets/js/68.cce358b7.js",
    "revision": "09e83f20497b15c3c2e0d2253a71a05b"
  },
  {
    "url": "assets/js/69.5e3e7415.js",
    "revision": "a6b53ee7ff068a5c0633d1f5cb6abc75"
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
    "url": "assets/js/71.5912de27.js",
    "revision": "843b21610db80a0e86e497afebf987c6"
  },
  {
    "url": "assets/js/72.09d701ec.js",
    "revision": "40a5e82792758ad15a03690a1dddffcb"
  },
  {
    "url": "assets/js/73.62f0477e.js",
    "revision": "f1e49d132f2c6e2ec05d6879364c28c2"
  },
  {
    "url": "assets/js/74.0fa6a06d.js",
    "revision": "c4fb585e6817729cda505d986b29c39b"
  },
  {
    "url": "assets/js/75.4e525fde.js",
    "revision": "fbb9e7a07c7e14e742c1ee1bf73d01a6"
  },
  {
    "url": "assets/js/76.ab65ce02.js",
    "revision": "5329947a441ff2ac0ecd6fea5ddf9d0f"
  },
  {
    "url": "assets/js/77.c9e22796.js",
    "revision": "7459a1b3cf5da5a291ada81527dbdbe9"
  },
  {
    "url": "assets/js/78.151421e2.js",
    "revision": "1aa6aaf42688c97ff87174531501a80f"
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
    "url": "assets/js/81.7da6b9f3.js",
    "revision": "5bbcd3cfbe6dfd48f2d167ac9578952c"
  },
  {
    "url": "assets/js/82.f9810c77.js",
    "revision": "6c8985a94236eff3dde5b6ad90a27123"
  },
  {
    "url": "assets/js/83.e3fd09f3.js",
    "revision": "2b8270845c7212980cdffadb6d1f2c0a"
  },
  {
    "url": "assets/js/84.eac30818.js",
    "revision": "6f49c4f4526ff2861ebec16111c8575b"
  },
  {
    "url": "assets/js/85.0ca6844f.js",
    "revision": "95cd443d038c5b21133d133c699532cd"
  },
  {
    "url": "assets/js/86.693e027b.js",
    "revision": "8ec11dc80a825f193a39c87705b50d07"
  },
  {
    "url": "assets/js/87.d6d538f5.js",
    "revision": "183659c611322064c2a36c898f4ada1c"
  },
  {
    "url": "assets/js/88.fb28a19d.js",
    "revision": "de5aed6a3c5f190995afb669dcf0e06b"
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
    "url": "assets/js/91.01cd0266.js",
    "revision": "08cf3f3a742f72f2fc57463524d868f7"
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
    "url": "assets/js/94.75675df1.js",
    "revision": "ab2cd153eeb8343ba808fb384e66e40d"
  },
  {
    "url": "assets/js/95.8fe4d764.js",
    "revision": "669bcba8306ba980cbec7d6dcb1df84b"
  },
  {
    "url": "assets/js/96.93567097.js",
    "revision": "2d93c08edaf1a3fef3dd036558695564"
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
    "url": "assets/js/99.7a1a6ef3.js",
    "revision": "7fcd33000c3a5a835492b29434cafe65"
  },
  {
    "url": "assets/js/app.61e07782.js",
    "revision": "f659d4433b80f739f562ea2bac465922"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "04291140004ac74fc2e6cdcc9808c60c"
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
    "revision": "6164cfb48c15cb21b8fbf4c39a344db5"
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
