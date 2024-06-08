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
    "revision": "84e49f0decb42af76831fdda8c0dcbb2"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "f4b0a1569633e0297a1ace719d0fb961"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "f732cf1c23e20e3cdeea0b98fb0c6c4c"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "63418c05ac4081e0137c329f8b3c92aa"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "3522f0b5f57b4d53bf4ad7e8d40fb7db"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "958d190e2e38261bb4df46a487204e6c"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "c96be55c46aa8dbceb97d1fd8d1a7cba"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "26539cc94550afa4c0072ba70892f645"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "7def2f398831cc3bc23b8e34fa33d5b7"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "877c1885f44dd93c9b0bfe35be1039af"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "5b49f4fd1b55abb1a1e5c666e2902c20"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "cec55b082a7e69077c20733acc56fbe2"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "5cc03b371100445cd835428ef91af15a"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "eaeab37966c25ecd15f5a8bd0cae8582"
  },
  {
    "url": "1.base/2.ECMAScript6/1.scope.html",
    "revision": "008515f899861064d588ec67584df363"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "877c87c2b008db93e8eb91956ff612f7"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "788da16e3f7c1c542b3506c99e07a074"
  },
  {
    "url": "1.base/2.ECMAScript6/2.constant.html",
    "revision": "81cbbc418081408f022188438814cc0c"
  },
  {
    "url": "1.base/2.ECMAScript6/21.nodeJS.html",
    "revision": "6abdf8acb46a779943094aee1380ef40"
  },
  {
    "url": "1.base/2.ECMAScript6/3.deconstruction.html",
    "revision": "4a087176e2facecfefa517f85cd0d0ec"
  },
  {
    "url": "1.base/2.ECMAScript6/30.module.html",
    "revision": "2379cc370440efb93af417046e640374"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "aacf0674022fa0e74a662af910c48932"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "0db3fe741edf8071afdbcd11185a62d3"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "4091d630e09b7cdbacc4fdb7e010a560"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "ea1aeb33c7d0a9fa8d4fa1ef96aede30"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "bb3ddf5fb288a72018431bb6ab4a2830"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "65fae8dbdb9ebd7f5d8199567372f27b"
  },
  {
    "url": "1.base/2.ECMAScript6/bug.html",
    "revision": "bc9afdd00843cae9fdcabc9dde0b8d45"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "cd9d33d21af8447f16669edab052155a"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "0ef0bb1c3314f785e6e48a01431c73a3"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "fe31b6dca5f0e53786e3a60fd31c04f6"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "c30bcb16e64798e88529657b7813a0b3"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "09087923bba0e1cf7e1b4dd5471f1a9c"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "2f8221ef8bc6687577a3d4f9cfb37cc6"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "c5262323e47195be639c1a8713229fe7"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "e9e7e5369972a9d09c6f28b1627941fd"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "a4d0c89acaaea04d71933a8b6ad9dda2"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "bb2b0c4f2679ecd5ccf4ce88cb775b91"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "a415d4e7e1a815b98ab7788030e0fc0b"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "5c3703c6b3fe5243b40a980ffa53444a"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "392ef603f6cef3a6b1727c91b102ca9e"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "a56b6edd744ec1ce505154588d550497"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "74e2e2ff5157bfc5d84e56db77db0702"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "4c5cbdc41a1211c85d28d78d85e905ff"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "55ab6eca1d106e1c142caddf8eae0d0d"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "61f81137e320bc2845493c015a70dfae"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "fb9f66c37aac666a6a96be6164ff3fa6"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "3b2bb5e14245788ba7cb1a7034ab8025"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "194209cf6467da438fce860009310869"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "10fab85fba135b14ab4d4ab5ec38603f"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "2a0d553de8cbd5a4457d1547f3a90971"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "c7cfc3c7fa55fa2771e6873c7453cf14"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "4301d3468ca9ae4fa212d39399662475"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "b945c81598cb360114884b6a4b7e85aa"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "4e4adb413876c3c49dae9d08cf8073c1"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "5a8b7472646c745459dbb1011a11809b"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "bd3e3e4590e8e93cff8d953e9aa900cf"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "53f9a09afb289b97de4e87c13d1cacd3"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "4c69de6249a51c1dc75869eafe1357ec"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "790cfb21ee67d60b43ff6efc9c2882df"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "e23e8a15d2bcdcf9841e5013062d2202"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "eece32232577de23898645bc77661300"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "b992d913febb20945e1e81ed431bf4b3"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "c8a6e7e38f3c2db00cd4c8126ff8b9e5"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "1b389ba3f752bcb9f2e07ff2492843cf"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "0966773837094d58dd343ec54a66c8c1"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "e9fbbcd385510dbc4d74b7051349e1cd"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "0da4756383a8b58edfb1e1b5611a6ed1"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "eb89ddf8616617abf846880c7a37ab62"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "db6fcd1a889978dfec061694e47e2941"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "f206c62d3be40cd890dd6bf16dd08a11"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "ecb34bc9485e8e5c6f3a170ee744bb88"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "93b838cdcfbf7e9e434c466558588140"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "53fe82b76309ff98a111a46429aa9a6c"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "a3430c4539d60d9f35b612fb9a9c45eb"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "6030811d2b62da9c38338c78c78ecb91"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "e1bb5a9375c7ec95b50af1dc52cde67e"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "1a303befb099cae0a5fbc21e12cda41a"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "8062b233d26b08cc63df4f6eca3a8e8c"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "c6348991970d60b9597375a0e0eb1950"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "a3c338a4bbb6258cbaab672ed9440088"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "bb05f4d5061ba6dec0b6145a743e66a7"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "7862fba46b7f27ffb4dfde7173685ae3"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "24b6da0b19353d646470bf160a15016d"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "1b18b9a49491b463e19227f5d7c73e76"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "f9789cbcd5dbaeff34364d2bae4662db"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "d2202968377fae6da1e45f697a77b5e6"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "e6d80bdf6f8fae92550408bbcaa9e2ab"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "0d07ca0bd0615538350ff490f542faa5"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "f9b06a08e25f807de3145714bc0a0e43"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "734f5dcce6eb4b99bf64b72affe01771"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "6d5e8cf99b890b47dc02186ff1f05492"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "e5df3128d37e44e5d1a1d550a908edcf"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "e71b51e1d9706fb24d4ab99e1bf6629a"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "5dd18073f99c793ba5ba9639b84b2779"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "af6fd957c0df0f3117020d8e62627490"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "391ebc520e54b47653b85a0db90c0722"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "22869481e31d9703af8388f70aab3825"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "a73d3b95c8812f75689e620a06155840"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "a4541d1e9bccb6ae21a2cb7907b5659c"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "be6aebbbe07375c0b7d57e78b1772d2e"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "452f5080b899922517f32e75467ee759"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "de66a97f33372aaf2a9a38dcaf6b0cb3"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "0e311cc3255c15faae41f9bc3a0783c6"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "66b655f599f821d0e5a33e5bfca22c1f"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "691d6094a9cde20b81159be0fbe41e10"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "8866b1ea1953dcc66a24b0cf7dd4d98d"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "e6d02e209b38975e302475dec7d6e8bc"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "69a4cc0b1be164802a365f80a3b5b0fa"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "6f4d44243724db959b2003faaa88850b"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "157811a1a93f24cc6c62e03fc8c9a4b1"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "230b8351d531924039cb8c84365f3b5f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "926d33d30de1e8dbd5c3e4e9a9755e7a"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "bcc786c4ce0621c4807bb474e5daf669"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "a1e3ae2d7e8755ee83fe77e1bc132dca"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "eccce03e2b2a805641e7c3d81684c227"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "fef8865f3ec52d1f64fe7c5141b2512b"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "b5e94ccd173599d06d515a309a7593df"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "ec2c8a823049226eaae4e6126fe1f7b4"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "370dfe4961edf0a6dda340ea5e3f976e"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "ed36b831eeec73f034866d6d4fc1c316"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "12d198fe99384f1e2cbaef98a17ea7a3"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "d4b86b5295db9b13b4a66c85eb65884f"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "2f1489435fa1637542e999573d544b00"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "e759271b86f4f53893a0c83bd628f0eb"
  },
  {
    "url": "404.html",
    "revision": "a1b29bc3acc6bf51a3b234e30b00b930"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "ebc13a0577d929efbbcb595c61e51b89"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "93083ce67e12bbe4590e181522620156"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "662861eb9df3f78eaa5f6562ce1131cc"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "70292d11e3eee2e036ab43d36170581e"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "09a35d2fa04becc13f60e0d692a80deb"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "ed6705f247a685f337d72a6fe8de0ab8"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "aba2b17ee833bd761a02435f29542fe3"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "6fa7e702ed2bfff5dd1593444e2c73e5"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "a80e16301617e9713904378283fa6c5a"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "3d94f0348af1995854b5f4acbfc9e7cf"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "f6cea75178d1a0222fa86db3a069d0aa"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "750bc665b975ab2730388503ccc8da3f"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "49937fb86b5d1aeec35a8d332972584c"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "2d8bc2ed0321ff31c01e588ad577df5c"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "b0019a229d4a41e08b72fd9b3694b2cf"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "bc47298dc183dd76684cf9b648c4676f"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "a0b9473ed7c09f14d93ac7557e557a48"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "50a6f0e115dbedd88efd38bc4560215e"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "2083c31a55e8cce587a95ccb287cdf74"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "76e0e3c8ae2ffcd83228c13e7c3378d3"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "5e5f49869e7a85a6e58f0a13c70f4bb3"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "5567cb4719fd02fdde43370644285282"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "a8dbc4c420e539c631399d85fad8e4f8"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "82d7b493af8e9924838257c465c3bc74"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "a360c46c06885f0a13e4cef339e0b9e5"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "841f8bf895ad5a03a2b5088e9034c0ee"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "da483de65908546ac9bbf63b8192a9c5"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "80ccd8eb7d9d19de06300688dfa61896"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "31f3c05580c1a1d74ec4ad776f2d077e"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "275a0ca8f037591edac8a683e93cb162"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "fb375b2f4a38e90ebd29c3aae8e3741c"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "d381e7ae01bd22e1aad5bc947aa416b1"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "6a34fb3af02770c33b167b3f65075feb"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "19e861e21d1f7c4f7fe2576fc8244ef7"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "b8e75c354867594a8d146089424e2335"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "14cdd7cb17864d291dd504b0692f1920"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "a260b4283db695ec124193968c2f733f"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "13db56f3d6db280f007a1c40b9fa26cd"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "2021ac3981615d89be22f60d3eb488f9"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "b2310a21ef637624239ee00e2fa8e24f"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "15eaac441cca47d093cfde2815bfee9e"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "93f4ee7a58daea50722c79ef4c378db1"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "836388c6284d13e88eb13865af186149"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "09e26f8d8453958ef29e1a774181f601"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "df245ba81125fc67c3bf8e94c346f301"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "ed17d8d98014f3690b8e0baf1492d84c"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "42718e7c8ddc7542d6375193bb24a7f8"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "d3d4662ce9b558c47b8a28474b6c9427"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "25e2e8c2159c809ab59dfade7659cfbd"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "1099b67217a451e84b0689e695fff717"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "d0594dbf0e09bfc47346acfbb771d8d3"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "a3a09377c151f94e0c8793c7183e5892"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "efa4c4c30e73f43181283c37029d9a19"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "11c5615a7e38f1e4061a7f220e9409b7"
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
    "url": "assets/js/100.b0ed6155.js",
    "revision": "11f11922f073bdbb927a663e7eba9f58"
  },
  {
    "url": "assets/js/101.dc267205.js",
    "revision": "bce5ca84cf78e4b152b067e150e94334"
  },
  {
    "url": "assets/js/102.0493cbb1.js",
    "revision": "5264da194d5af4554c839ba0fe2c32c3"
  },
  {
    "url": "assets/js/103.8829c4e7.js",
    "revision": "7ee08d36fe0818f1386f2621282e664a"
  },
  {
    "url": "assets/js/104.ac24de7b.js",
    "revision": "eb3ed8ec4e554ad9b0d12706c6f832b1"
  },
  {
    "url": "assets/js/105.d7cc7e91.js",
    "revision": "37234692e5c17465236d38dc9828455c"
  },
  {
    "url": "assets/js/106.64c2874c.js",
    "revision": "0ef5ce5e7fb9f8637cada9177e37c0af"
  },
  {
    "url": "assets/js/107.6171a281.js",
    "revision": "112aa1f41c14f8219e7f6d807e922ce4"
  },
  {
    "url": "assets/js/108.d5de37d9.js",
    "revision": "2f08a19eed39057503ed6cd52f3a0544"
  },
  {
    "url": "assets/js/109.0eaabd58.js",
    "revision": "4dd720f35e1d9f8ef81e7d238d851e87"
  },
  {
    "url": "assets/js/11.4bc148a1.js",
    "revision": "f1340a4894c7d1a766ba0e32ba93dc21"
  },
  {
    "url": "assets/js/110.54358ac6.js",
    "revision": "e6e95886a69a9a593da62cd762ee1c4e"
  },
  {
    "url": "assets/js/111.1cd47a27.js",
    "revision": "3fdf1924b5d2797ea241b5dbf01407f2"
  },
  {
    "url": "assets/js/112.6adf47e8.js",
    "revision": "a9c019956bb07e7244f4d349f4eddaf9"
  },
  {
    "url": "assets/js/113.7c286af0.js",
    "revision": "ddcc040093f2fb12b69de74d661ca310"
  },
  {
    "url": "assets/js/114.1ed77562.js",
    "revision": "dc3479a7ee75892db27b86985697cae9"
  },
  {
    "url": "assets/js/115.e800131d.js",
    "revision": "7ffb216035715e6ae66e9712dd666937"
  },
  {
    "url": "assets/js/116.7a08a977.js",
    "revision": "2654988b3ac8726504e32af65694bbba"
  },
  {
    "url": "assets/js/117.b7750d0f.js",
    "revision": "62d80a8f3a093d8172022f02bf18675f"
  },
  {
    "url": "assets/js/118.63edb3c5.js",
    "revision": "b74ed532d8a9ce7374afb102f198787d"
  },
  {
    "url": "assets/js/119.480df94f.js",
    "revision": "921087e5288d5cba4a940ae702845a6b"
  },
  {
    "url": "assets/js/12.c81deadb.js",
    "revision": "27561cfe20ee2d6f2be1342c20492112"
  },
  {
    "url": "assets/js/120.43603cfb.js",
    "revision": "9aee0f47295bad015cb233854c0c5e6b"
  },
  {
    "url": "assets/js/121.a242451b.js",
    "revision": "e848e3025791f6006d4bdb88810e5683"
  },
  {
    "url": "assets/js/122.4f88ef38.js",
    "revision": "c065652217834d175d1bd057dce3164c"
  },
  {
    "url": "assets/js/123.3b4efa83.js",
    "revision": "9ae91aeaa35a9b5dac8af458c35c309f"
  },
  {
    "url": "assets/js/124.965c175e.js",
    "revision": "1e03a6221312590ba8060d1a4e90fe30"
  },
  {
    "url": "assets/js/125.d8d7d160.js",
    "revision": "30897ad9efe4f688a4c01dfa7593efaa"
  },
  {
    "url": "assets/js/126.46fa8356.js",
    "revision": "f14b834bcc18657c0ac51b7a6651b504"
  },
  {
    "url": "assets/js/127.31b247e7.js",
    "revision": "c7437811a80aa529523d6b3d44db4d85"
  },
  {
    "url": "assets/js/128.e70b7655.js",
    "revision": "2dee85fdbbda008664badee20242b789"
  },
  {
    "url": "assets/js/129.75490ff0.js",
    "revision": "d4db02021a04465db9c8e8eb5248b5fa"
  },
  {
    "url": "assets/js/13.63558203.js",
    "revision": "437f113d42446a289719f81ed4421399"
  },
  {
    "url": "assets/js/130.ed05c582.js",
    "revision": "1d92abdefee196e6b8b7a988ac1e69a7"
  },
  {
    "url": "assets/js/131.a152fa13.js",
    "revision": "0c14fd6a8bec934a2b3324db85958e0a"
  },
  {
    "url": "assets/js/132.e60c9b6f.js",
    "revision": "13a9b43a3995d7df1cefd02bf4548f29"
  },
  {
    "url": "assets/js/133.ff946997.js",
    "revision": "aec7f7bed0e9bdcc1b6b4b3ce3e0dba3"
  },
  {
    "url": "assets/js/134.c9f45569.js",
    "revision": "f3eb45e8b67d6f1f02e9c915f6f95c01"
  },
  {
    "url": "assets/js/135.4e3894db.js",
    "revision": "3d200d19c5fa2db21030b9d1686fd1a3"
  },
  {
    "url": "assets/js/136.b04fded3.js",
    "revision": "e3f6dd86707f58af625601add53f503d"
  },
  {
    "url": "assets/js/137.0816b3a5.js",
    "revision": "b686f0e200d20c38ebd72c76ea66eaca"
  },
  {
    "url": "assets/js/138.11c83628.js",
    "revision": "9d234afdd6d3fe2c8968dd2f1fd23084"
  },
  {
    "url": "assets/js/139.c149c95c.js",
    "revision": "3c64af653d72f1c59c3b2cb6d8754e5b"
  },
  {
    "url": "assets/js/14.e1215395.js",
    "revision": "5935616405cfd98de761c4af1c37389e"
  },
  {
    "url": "assets/js/140.2a17534c.js",
    "revision": "b9c8be5c2d525d336152d47a09529e13"
  },
  {
    "url": "assets/js/141.4b90c23d.js",
    "revision": "4cb8b57e7abf5c06bd305b736d2c348f"
  },
  {
    "url": "assets/js/142.e3e59bfe.js",
    "revision": "ca3433eccf9bd93bf33f05dfd80dde06"
  },
  {
    "url": "assets/js/143.1a081b14.js",
    "revision": "c4ebe1e3767e28ab0a45b87d23aca323"
  },
  {
    "url": "assets/js/144.26349aea.js",
    "revision": "f3fd67182da302ae0348f048b766333f"
  },
  {
    "url": "assets/js/145.01bb5c16.js",
    "revision": "4179729fc3b0407c18a5935d7a3de21a"
  },
  {
    "url": "assets/js/146.86dcc3e1.js",
    "revision": "ff8a0f2dd8d51619d4742753eef8c5b5"
  },
  {
    "url": "assets/js/147.6df473fe.js",
    "revision": "127151fc58f8c921e5fccda4193386ab"
  },
  {
    "url": "assets/js/148.51e5923d.js",
    "revision": "df2ed37eb0cfcef8dd5a27c48d6cab87"
  },
  {
    "url": "assets/js/149.724a109e.js",
    "revision": "e9278cb2478aa4bc0423f23d3ee0885f"
  },
  {
    "url": "assets/js/15.6fcffc63.js",
    "revision": "9e00e1439e0f69ed20baa969bbf1109d"
  },
  {
    "url": "assets/js/150.221457cb.js",
    "revision": "c43ebbff3ab5b82f3d6c6f3011a35a0b"
  },
  {
    "url": "assets/js/151.39a7c0e0.js",
    "revision": "94fc228a89006ae1f0867cebd9b5f650"
  },
  {
    "url": "assets/js/152.5a3ff90a.js",
    "revision": "b23262aa4e3d7aa579dbb2646ef1500f"
  },
  {
    "url": "assets/js/153.33ab628b.js",
    "revision": "e3102fa689598d4430ee7df9a5093896"
  },
  {
    "url": "assets/js/154.d4d21f21.js",
    "revision": "a720785da7a64e24f72e030a400b5333"
  },
  {
    "url": "assets/js/155.883a89e9.js",
    "revision": "6149ccad9a674c9645ea95c5bd39c922"
  },
  {
    "url": "assets/js/156.61fe0c46.js",
    "revision": "b1d510f7aada1b3d253053e63aa910c6"
  },
  {
    "url": "assets/js/157.ff0269d0.js",
    "revision": "a4ae9255a80a79d294ffcb5eac5e0f45"
  },
  {
    "url": "assets/js/158.702ac5d4.js",
    "revision": "34842a99a4a7bb85ee9005c9daa802fd"
  },
  {
    "url": "assets/js/159.60396c9f.js",
    "revision": "62ba707ace04dcc3632b03120a28be78"
  },
  {
    "url": "assets/js/16.01c60035.js",
    "revision": "7b78551316f204faf1d42493cc84fa47"
  },
  {
    "url": "assets/js/160.3cf38ca9.js",
    "revision": "6c04a7438529f7ca29ce82167d5b13ce"
  },
  {
    "url": "assets/js/161.144f862e.js",
    "revision": "86fee72350c6a6bcb74a4a284d357893"
  },
  {
    "url": "assets/js/162.c6135a26.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.a78e4af6.js",
    "revision": "dc512f4081a63caab9da893d6f20f80b"
  },
  {
    "url": "assets/js/164.00b248f7.js",
    "revision": "353e20c93ebd7ef84f935ff14c9239bf"
  },
  {
    "url": "assets/js/165.8b6f209f.js",
    "revision": "85b6400310e246f225783a210fcaceba"
  },
  {
    "url": "assets/js/166.5ff30056.js",
    "revision": "5cc8cd3bdc081bf234407136d32ff872"
  },
  {
    "url": "assets/js/167.c9117f17.js",
    "revision": "ff4bdb731555d97cf6c794365699eb57"
  },
  {
    "url": "assets/js/168.83db32f4.js",
    "revision": "57e4f927cd1d0a4000796647f8545d7b"
  },
  {
    "url": "assets/js/169.3cf08148.js",
    "revision": "4fb01580bd6f7c24d28459c3d9d1fef0"
  },
  {
    "url": "assets/js/17.226eb645.js",
    "revision": "c8428fa5f319889ee59481e09ee435ef"
  },
  {
    "url": "assets/js/170.3a4b9c56.js",
    "revision": "200e9fe0c39713eae91aedb8307dc378"
  },
  {
    "url": "assets/js/171.f8048890.js",
    "revision": "552d391ab37bf75c5d273033319a7e94"
  },
  {
    "url": "assets/js/172.79570713.js",
    "revision": "a7a5ac3361f7fa8dd6763acfb659f18e"
  },
  {
    "url": "assets/js/173.47efbc87.js",
    "revision": "5ab713fdab6bf1b8b0ec0a084a19ee4c"
  },
  {
    "url": "assets/js/174.a3a3c34d.js",
    "revision": "0de66bebb2fbe64b582ec7089fa6dba9"
  },
  {
    "url": "assets/js/175.f52ac529.js",
    "revision": "caa9ba6dc0c38e1aa58d659be089e66d"
  },
  {
    "url": "assets/js/176.5df6f196.js",
    "revision": "13ff73da46199916bc8d4c8152a3a2cd"
  },
  {
    "url": "assets/js/177.513c7509.js",
    "revision": "c4f75d13283d59275a2c451d03d483b4"
  },
  {
    "url": "assets/js/178.e97526cf.js",
    "revision": "e280eecedd8095fa72a8b4bdcf21cc5a"
  },
  {
    "url": "assets/js/179.0a317aaa.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.4f5fde73.js",
    "revision": "0eccec3ef1538b7528e1ecb8b27292cb"
  },
  {
    "url": "assets/js/180.5306a25b.js",
    "revision": "16d8fa1cee75a9bb4f1b79b0e9b1fb9b"
  },
  {
    "url": "assets/js/181.c92953ca.js",
    "revision": "0903708e248bbd6b15624ebe17e740ae"
  },
  {
    "url": "assets/js/182.47b1b4e7.js",
    "revision": "ece3457cfacc16980d16f76cd0e4b403"
  },
  {
    "url": "assets/js/183.ea4f68f9.js",
    "revision": "72c9096d52141a2bc48a5f07ceafe7fa"
  },
  {
    "url": "assets/js/184.87886b58.js",
    "revision": "5f5e5b40bec77ebebc7fcb5c3c29902a"
  },
  {
    "url": "assets/js/185.25b26634.js",
    "revision": "06c48c23af12f310073aba390a05a756"
  },
  {
    "url": "assets/js/186.66da0657.js",
    "revision": "dc1f43969d406613f8ada9edf3d61450"
  },
  {
    "url": "assets/js/187.1e4edcdf.js",
    "revision": "66931c646dc2657ee668c3eb53ba03e1"
  },
  {
    "url": "assets/js/188.f8acb9b2.js",
    "revision": "c5a67763578a0f395672858e41675a51"
  },
  {
    "url": "assets/js/189.92b4cdbc.js",
    "revision": "497cf15881dbea35a67c407994feb90b"
  },
  {
    "url": "assets/js/19.c54f8865.js",
    "revision": "49ad7474ac299d2160667be2f6c8f154"
  },
  {
    "url": "assets/js/190.152990fe.js",
    "revision": "f8951afeff4ad49b2ae06b4f1d30ba6b"
  },
  {
    "url": "assets/js/191.57390d64.js",
    "revision": "1abda00348b31687a767840d206a66a0"
  },
  {
    "url": "assets/js/20.4c159499.js",
    "revision": "a25495d5dd51a4c21ecc7fa905367d01"
  },
  {
    "url": "assets/js/21.39abd75f.js",
    "revision": "20beb85eed9ed96edcff51b2cf58933b"
  },
  {
    "url": "assets/js/22.702df168.js",
    "revision": "795fcc6f84273ffe6fc0d0190628106f"
  },
  {
    "url": "assets/js/23.3f90a9f6.js",
    "revision": "6483372ff42ee2f6f3a0f4eb31a34f53"
  },
  {
    "url": "assets/js/24.681846cb.js",
    "revision": "117955d709aa55afa735e4a32dc72f85"
  },
  {
    "url": "assets/js/25.3c0b6997.js",
    "revision": "af8c7a1dfc18fe1e01fccb08fbd8f54f"
  },
  {
    "url": "assets/js/26.288097af.js",
    "revision": "e388bbca69c328ee2f2e06ff6c34625f"
  },
  {
    "url": "assets/js/27.33f65827.js",
    "revision": "b9c1c65bca983120875cdf2d06b199dc"
  },
  {
    "url": "assets/js/28.277ab29e.js",
    "revision": "288ac1a9dfb130506349f2c015876bc8"
  },
  {
    "url": "assets/js/29.4fbf0464.js",
    "revision": "1cf3f2e93bac723c1ed0149ed998fe9b"
  },
  {
    "url": "assets/js/3.e9ec0dc9.js",
    "revision": "f2530fa3f331a4ded0ed022c75c73165"
  },
  {
    "url": "assets/js/30.ce72c211.js",
    "revision": "9eec8f611e459a30f4732fc1e09eee22"
  },
  {
    "url": "assets/js/31.9425f16b.js",
    "revision": "e77e380152018e4b8b85d5c6c5094e99"
  },
  {
    "url": "assets/js/32.a38237cb.js",
    "revision": "230fabd5e85d24ecdaa63ceaf3e85fdc"
  },
  {
    "url": "assets/js/33.115a64c2.js",
    "revision": "5c48caa9637ae17f969fe2081b765f5d"
  },
  {
    "url": "assets/js/34.b068c0aa.js",
    "revision": "15c8dbd08a7d76792ba1edbdd477d36d"
  },
  {
    "url": "assets/js/35.4eed012f.js",
    "revision": "4296c8495681925efe2c76115eafab42"
  },
  {
    "url": "assets/js/36.85818e6c.js",
    "revision": "e744f35941c205edb20841eefbfdfd16"
  },
  {
    "url": "assets/js/37.8e5c78bd.js",
    "revision": "8ad88030399ed657ab1fd36f52a237c3"
  },
  {
    "url": "assets/js/38.a3199d1f.js",
    "revision": "5695aaee295a79c0f85dbe2834645fb1"
  },
  {
    "url": "assets/js/39.816920cb.js",
    "revision": "612022eed61d7ba0878c98e1b9ad7373"
  },
  {
    "url": "assets/js/4.fc2e2d66.js",
    "revision": "49628625dc14e1ccae23f8048d4d208e"
  },
  {
    "url": "assets/js/40.a860f82b.js",
    "revision": "2940d99fffa43b5156b9086f76dee368"
  },
  {
    "url": "assets/js/41.f004b18d.js",
    "revision": "c95495722849291b24ffffe3dc152888"
  },
  {
    "url": "assets/js/42.0dcdaa92.js",
    "revision": "7edbc47a7c936e936563cc94fcb6af3c"
  },
  {
    "url": "assets/js/43.200c403c.js",
    "revision": "6dc6865b70b9b09cbe5a8238672b63a8"
  },
  {
    "url": "assets/js/44.540fb2d7.js",
    "revision": "1fec48b658cc5990d3c9a6f28dc5225e"
  },
  {
    "url": "assets/js/45.fc20a73a.js",
    "revision": "71dc600a5d2933e26357fa3e58370ec7"
  },
  {
    "url": "assets/js/46.94f5a25e.js",
    "revision": "d11fad96ed5fc249932f63cef6ef26be"
  },
  {
    "url": "assets/js/47.887bb34f.js",
    "revision": "dde80b4361a6816d6b8140b3574bdbb9"
  },
  {
    "url": "assets/js/48.bf41293d.js",
    "revision": "c49b376cbc09abc03b5623a19549e51d"
  },
  {
    "url": "assets/js/49.ccf1e6a4.js",
    "revision": "5835f95797c65c894a7d4fe96bf8aa78"
  },
  {
    "url": "assets/js/5.27c78a36.js",
    "revision": "43956e9708ea3d3d0284690dd0695c25"
  },
  {
    "url": "assets/js/50.e4145924.js",
    "revision": "7b7ffa6743cb1f368ad081247fb7e1f8"
  },
  {
    "url": "assets/js/51.b2e93787.js",
    "revision": "8ab0075a0e05610abf0544b8102a2448"
  },
  {
    "url": "assets/js/52.f1c90b66.js",
    "revision": "87d89b05b0f7e500280f87f36e4b778e"
  },
  {
    "url": "assets/js/53.b86786bc.js",
    "revision": "d8d351b605ff2831ee5724d757207dd2"
  },
  {
    "url": "assets/js/54.ba2cd897.js",
    "revision": "71a11f00e335b1ab4d30e767fb727af5"
  },
  {
    "url": "assets/js/55.8c2a68b2.js",
    "revision": "945e4b20176ffdebb1bdc6ccff5b2905"
  },
  {
    "url": "assets/js/56.3172f26c.js",
    "revision": "875f49f220093cfe3f2b5f0aa4d7a09d"
  },
  {
    "url": "assets/js/57.826b26d5.js",
    "revision": "97bb88dfa26bb38f75e0aa8730baf458"
  },
  {
    "url": "assets/js/58.36dfd0ce.js",
    "revision": "a79a7d2f980593c4dc7af425bf44c2a0"
  },
  {
    "url": "assets/js/59.284711d6.js",
    "revision": "29459f21a1f070aa64d785d4c816f1e1"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.5e619ab2.js",
    "revision": "844ae30762a6de2122181e307e897ead"
  },
  {
    "url": "assets/js/61.aacfb2d4.js",
    "revision": "5529f47ea9b613a5a66bf856f1f04e9d"
  },
  {
    "url": "assets/js/62.a9fdf7cb.js",
    "revision": "684e43fc75bc5beeae106b3b0f1b8dc2"
  },
  {
    "url": "assets/js/63.8b9da16d.js",
    "revision": "e7096a671451c9797ea633f871969cc9"
  },
  {
    "url": "assets/js/64.25bb64eb.js",
    "revision": "82a5793a77f2a97b6ee6724e03fdd6b8"
  },
  {
    "url": "assets/js/65.fa2e1163.js",
    "revision": "bfca0eb5df887aa1fa6c2f2fb5029ef0"
  },
  {
    "url": "assets/js/66.daea2a0f.js",
    "revision": "f5deae3764759066b84a32c1a58e671b"
  },
  {
    "url": "assets/js/67.036de67c.js",
    "revision": "5a040f59b6a1d5532c065728284726b8"
  },
  {
    "url": "assets/js/68.37d44853.js",
    "revision": "3d04c3295caee0d1ea5b70af2aef5783"
  },
  {
    "url": "assets/js/69.b6640f2f.js",
    "revision": "fdb6133d9d7e7de11219fe45286a9cef"
  },
  {
    "url": "assets/js/7.5d69f916.js",
    "revision": "c44b762fe93cb593a538685cfcfdbbc8"
  },
  {
    "url": "assets/js/70.8f762fdd.js",
    "revision": "8470d8dd38a038f9c5cc65c7719c31b1"
  },
  {
    "url": "assets/js/71.e0793ab5.js",
    "revision": "2fc4c8be45971c0e35ed564260ddb9fc"
  },
  {
    "url": "assets/js/72.125d7fc0.js",
    "revision": "4cf606f55fa2cd72a177b9d27e626cd6"
  },
  {
    "url": "assets/js/73.14511582.js",
    "revision": "37065258b9acdae048114ef94bf1e4e4"
  },
  {
    "url": "assets/js/74.ae9f9554.js",
    "revision": "428bdf6ff9d6661ed1d0b1ea686249f7"
  },
  {
    "url": "assets/js/75.3947c1ad.js",
    "revision": "e571d764709fc5f4b69b615d32abb5a1"
  },
  {
    "url": "assets/js/76.1c807d34.js",
    "revision": "ec820f068d1deab0996b3884ce57d5c8"
  },
  {
    "url": "assets/js/77.998c52a8.js",
    "revision": "2a78faa98be8e06490f041e9cd81a7da"
  },
  {
    "url": "assets/js/78.9b1cb513.js",
    "revision": "73d853a8ed29550ed17293543cfa29f2"
  },
  {
    "url": "assets/js/79.262f9b0e.js",
    "revision": "363c8f3ced04a84a9d2b8d8bb4a44f5b"
  },
  {
    "url": "assets/js/8.49b39b40.js",
    "revision": "5be41fa0cb432cdc48a471bee774b784"
  },
  {
    "url": "assets/js/80.6f457889.js",
    "revision": "c4cc54eff57abf300ed41d2c354c49ea"
  },
  {
    "url": "assets/js/81.9f3db715.js",
    "revision": "2e667e8205c868bdcbbd446292614cea"
  },
  {
    "url": "assets/js/82.5f71d7c2.js",
    "revision": "304121764cdca7b564b775db00f0947e"
  },
  {
    "url": "assets/js/83.407b32c5.js",
    "revision": "4d0203e34312e72b8890a7e7da042e74"
  },
  {
    "url": "assets/js/84.93479de7.js",
    "revision": "443b46b045d5f45e30842f29915ec3ae"
  },
  {
    "url": "assets/js/85.41a9668a.js",
    "revision": "0ea8ef6518fde5ce70892a3ad3759258"
  },
  {
    "url": "assets/js/86.7d99a0b5.js",
    "revision": "3fdb55fb4fb49e9f171fc5713e9e7afb"
  },
  {
    "url": "assets/js/87.362754e7.js",
    "revision": "ac07fc1a3c0d60cfda04b37abb670eae"
  },
  {
    "url": "assets/js/88.afff279d.js",
    "revision": "b364ea5a3dbb2c6774a2f99f38998137"
  },
  {
    "url": "assets/js/89.27a29f1a.js",
    "revision": "0a158e7908f5ad348a70693f0c5b8b37"
  },
  {
    "url": "assets/js/9.a6ec67f3.js",
    "revision": "dc21d3cc91f8802f808d511b31633df9"
  },
  {
    "url": "assets/js/90.02edbd00.js",
    "revision": "d487c13bcbc6cd6973061fdefa7a632a"
  },
  {
    "url": "assets/js/91.59df2706.js",
    "revision": "35da5f4a7dd1e354202e6ba035a47658"
  },
  {
    "url": "assets/js/92.b538f883.js",
    "revision": "e5e6df4fa265d63db4c6b713d2be7a4e"
  },
  {
    "url": "assets/js/93.d4025256.js",
    "revision": "1ea6b1f702c4e58e2e1d94d453945f34"
  },
  {
    "url": "assets/js/94.c12791dc.js",
    "revision": "9509b4408dd4fa9295a8de9a2a62f69b"
  },
  {
    "url": "assets/js/95.9113b12a.js",
    "revision": "84c4864b92ec11ff14e0089d01b31884"
  },
  {
    "url": "assets/js/96.1b52665f.js",
    "revision": "bc5724408cb3398e61a1239ac6589565"
  },
  {
    "url": "assets/js/97.416133ba.js",
    "revision": "fb7ec3b82c1d65cc49d6f4b3490da832"
  },
  {
    "url": "assets/js/98.e75cd60e.js",
    "revision": "380b56171e22dae461fe9dbc029f819c"
  },
  {
    "url": "assets/js/99.df1f83cd.js",
    "revision": "151790f2aa434762c4d716452c6e08da"
  },
  {
    "url": "assets/js/app.fde11f56.js",
    "revision": "91e6cb1474e58f02613f9188e087c80b"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "26ba8455364c63f9c2a72fc29c996968"
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
    "revision": "837aab17136a773f1ff613f187ebc21d"
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
