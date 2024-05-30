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
    "url": "1.base/1.js/1.grammar.html",
    "revision": "6f9ca82e3da1aa281cecf8138db2da38"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "c94b3694201c33958c3929436e388eab"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "45ea69157c761f8d0e6b787977f1dd5a"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "17314511e858ba296d16cf40115c706d"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "acfe4f1e09d1b9e92db1b70b7bab7dc8"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "8bf7eeda9a6d293594a00120d2bccd02"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "406385fe69b0a3bd7539cbc18331a94f"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "67fd2eba49b34ce2565d1c0b759901e2"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "1149e894f187bd0390d8987a2efa7407"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "ccf812080270addcf9b26952d453c79a"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "a4ad70bd7fdd9b4093bb2d13796ea9a9"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "3d86d7ad5b3e358b2bbcf134b2dced41"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "aaf4238b21510763c9f1205eba3e1fa4"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "45f9b283decb395facd1f3bfa898f2f4"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "fa5bbfcd0771d9968f41bef5a3add9da"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "ce81664f10d441793efc604e16492909"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "a386982dda65798112f1e08eebff2db0"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "376588aaafd0c46f72fa47a18e5c9723"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "65e135ee7c3960190ee4f9bde195c4b8"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "1e41a12c22137131c15b5b4056500757"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "9d00bb2c2e3c8d46b1224169c6fe3e40"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "b391fe9a79e7d984ccd9d3c4e1e5332f"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "c9b5830943699ae729adf1af7d5bcb87"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "38ec0b678f3dca244880950dacd9f39d"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "ed5b0e70357315cddc2790b17c90e656"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "242137cb9a7a1e3c74d4587eb5fe5408"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "511434f8c858271bd798eb2273d19a42"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "dda6a52133c35f0d17ba5c7215378c07"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "cc192daa3afd66b577151959f22455dd"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "f548fd71f1b4f96f67fd897ab923af40"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "4ae52b5fcdfa8893345681be245338c2"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "7fb1abe22f39acbd059ea77aecfbb00c"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "8eec5d038a80da5a77f3109c3ae00dbc"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "bd810217dc59b87c7804881efc128048"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "54ef032c8002ce14ab0d1cc3b744f777"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "c564ac841c4a13c6dbeaac61ca02f7b5"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "3889d2797060ebba8397da147a9d7783"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "c8ca65c42ae5bcbe346be6fccfc41e98"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "2bbc0921a57dcfc7268fdf95d859ee83"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "a37559e258b8f7d0dcb71ddc050721dc"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "438f595bb6d1d66186da1312bf7d1859"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "bcb6af128dc8485f138e1988c80ba435"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "d148a4371918f78fa64e8d45b6a18a09"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "b224df57e7d3975f69121bbb4182d411"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "5d5ab5f15d5f440f60f06bc8b1c8baee"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "f90aba75dd29afbf5742f03dfbd2fec7"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "fd86f80b7cba6c56e2e7fb8404fff419"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "5431ea12368cefcef874751fd6787bc3"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "f632c0b3eb2975933f9b8510cbd774ca"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "fa394d447c794b5364b3b7e1b1a78546"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "66fdc16532feded9b06bd82ee6ddc535"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "2450be244a06028811453f184a6962f9"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "d2b5af3ce2e9b1ed774e55e7ab742847"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "e0b25f0cf634e9bda7f768642349f33f"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "2db5c55ab9adfde08e33b9c9d8b99390"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "2c4e6b7b45348867930dc816fa21c7fe"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "297bb72bdf8155a821eb6fd79fd8a7bd"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "7ceaa4af31762904079e8e6ce3321834"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "6079c6cdb2cdb29c30bfd4fcebdb4fd1"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "ad8e4f2823300684799707d1a3c670be"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "d123c0f1faa0e4a76e5d326f00c4d876"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "7e233aaaaac05d3b09f91bb23d476905"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "44ee98b604969dee6c7378f31e9ee2de"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "da78d4f4e858a59d3ee8509fa311aa0b"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "96c9737038aaa68b8c27b9bd92e18952"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "29e18e98cc495d483c0bb2c2e4697b56"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "cadcf89f489544ca6f0a4fdb2553f40b"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "ea49439ae8b42976230e69520f65052b"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "e5e035f73009ef7c7fd6575061c96eed"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "2c74d52dd8e6efbb4bb29eaf7a5b6089"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "f9cef0b75109f430b6f6c4b9a48be1f0"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "7d881e48f0b45a4bb2af12801c2fda80"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "c8d5933c64d2f9c2b6ba01761b7b0f50"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "942c9202cee1df1c79c5601a943d6b1b"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "4718e55885f913e90b94e586e398bbc9"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "a12ba3ff35ae7e87e3fe70463ac61b6c"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "8034093af6f0ae5831c57ccb577ee1da"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a03cce1233eecf31bd38d73239ebab83"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "abfb0802e0ebe4ee35c03dce333e5ac5"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "15d6199ae97ec01ad1f8b4ec3c44348c"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "a140da832cbd69baf8671323a8434b2e"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "d86c2992fafe9a803cce74c76af95536"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "0665472c077f98769052c7809c3b86e8"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "beb14cb3e31bc3b212b0577d11fb8060"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "5e9deac552d701885dd204961db289ad"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "a81d6e373a6398d52f24d6f1397d939f"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "b0e3221e548c0d2c25a1794dbf1e7145"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "d06ea43fd9789620ce401582b0e02c4b"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "8a613ce3e7f82f2652aa28d014b80592"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "cc8eed3cd4414bc6ff1b1774e15e67f6"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "2b1f95e5aa80be03f1be5af2b21b3f24"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "93188676bb0cfaadb87f573db7310912"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "0c0d0c1ed62059d559d1f0d5219e24cb"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "890aed5f897f124dbc6ce347ac5affc6"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "05219862d2cd939bb047873a35679ce7"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "dfde1c034f0509b13f130d7536abcdd0"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "72127d97ac3c6861a9af6b2321346b65"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "c1dde4c1bb942016d3daf3bba14554b4"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "531ca57dfec5f735608705093c31f54b"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "0f03a6970d2392708761fdeb56d4f874"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "02b44bb4c661214d0fab44f4ba0099a1"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "a0d7a268a9a1c937944a9b5cd3e81f77"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "4c9001cf1ff74afd0db4f94dc3d980e6"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "68b2020b9f15ece9099d7896338929e0"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "a257d13dd3f7aff3e7669aa223ccb61a"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "791045ed99fb6beb7be2e5b1717c139f"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "b60c24532245b69634706122c2c2c753"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "f43469326411087bf36d733708a7841d"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "dc392327936a3213065ac331f977ade2"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "2b269189a65b9edec85eb40d73902614"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "2cfd1d0f9f017516337cecc9de069075"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "fbfcf3a664995a5bbab5065692717d2d"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "5bf82ddf3f08912c89fd9dc0ef5cf58b"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "199a446a88ae2a8488fe22a9903eb5e2"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "cbb5d8537949b9b0ab362c78f33b7291"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "22341b9c980e2331a43d83233d9ae057"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "fb546af0e7110efd101a3dcb119ee2a3"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "fb804aa941775096c5a9fcfcb503c5e2"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "711f3715495d3c0e0160f55890774650"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "fdb690f45296c9d172a135692ab7f47e"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "28350300febcaa45013a24afcb641bdf"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "696c05d6d8391188dbea9d603eb75925"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "b97b2a5ebc57778ecd7df4e78ae99aa6"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "ea01bbbc0ab8b73792c1331292d6cc3a"
  },
  {
    "url": "404.html",
    "revision": "d44b4921a100e2433246c81b70714b23"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "aef5a5dd1cd97a28c1e80b987cf8ef2f"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "79bcc3c88491e1905d03ad58dc6a6b85"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "fa689e917ccd7073d169205b78dc2c4b"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "84db381e903ec48128295c575f907d8a"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "2278a9284b89226a81e96ebea703bf0f"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "38e5552db08b91c2a9db81c519dc48ca"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "169f0dbdf6d77623a34d869930f3064f"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "4f5148ca6141977323517295c0efdbe9"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "75ca90f01204a205ee00f59607a4c5dd"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "ac07fb5da35e53aea6f1c60b08c83d99"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "6f0b91df8b09faababa9a574ad38458c"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "5b2f764e08117bf0689f50ca8f3b8ef6"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "d7a8ab30888588f539c521965206fba1"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "e3ac5c4293534b9678579cb358060b55"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "c93729ba8b43ddd6ea0b5f6925aec4d3"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "b71c75eb00ae64c1766d5b29cb0e150b"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "9b2e9f914351946500037cfe7bf76164"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "8bc2fb96bd445b6e73ac3f6947c36fcb"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "769e9faee814ac3bcd3a949a089c0cc4"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "a35d39884fabebacfde55c97a0ad392a"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "44f2ecb791fe91ec18112d1b0a99304b"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "400148e59c530d23294c99ceca52adca"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "5fbe51c77d592a886194e69e54bdb74c"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "bbce92fb3c15a69cd480a5fd1df04f4f"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "316579f5b4c51819ad590646e88e6758"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "8faf006b2932c3d19fb7442750394d07"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "4d81ee314af96c144809cdcaa54cac48"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "810398f3d4d2b8eb9f3f4c9424002c39"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "0872b1e4c8cbc13e049ff0c45afa9fbb"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "480081ded99b6274908bbf9bb1bdee43"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "c7004136a36ad0ef20d48e5b332d5565"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "9fa47e0b1565074caa4c50f9cc5c5e1c"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "187fbef8cd52157df7a59dff6f1326e3"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "c9e986f82d382f4467b040591e32e2bb"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "62c3cd553858106f9f97b0b580f26b7d"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "67b06f35e4a3368ab785eba3dae11650"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "fda4f2134f7ef888f331bbb7aa9ffbd0"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "ed1c4424fd6064132e5503fc6c5f081d"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "96cbbe625c03b2bab6958208c0600899"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "12b4314833fbdecb469899c57bd60910"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "fa5030f3d61c00535e80b798da5e3610"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "fb9509c4ca4facd6a2e9405b2b0b0ee3"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "eab9ac5687a788a4622d6cbcfa0c2eec"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "afb8d14dabeae837369abe95d268155c"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "bc10dac00cbd05f9706aae83d74b430a"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "f930508bb28212619e1a0c0a55fef557"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "31f646b64e66a75953f5d1457a5b5bfa"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "f922dac2759bc77e8b727e60ef50ab65"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "249fd7526f1025db6395ca64a1df43b3"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "5ced84128a7748b2d8edd06fc2824b25"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "de36f78f17a192d87b1c95d5e07f71e0"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "af76071fdb236eb9cda3ea0e2a59f389"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "2b9e8c9b5161526030aae867c2986d9d"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "11cf15e008c9a13c09b0d3281b8f1402"
  },
  {
    "url": "assets/css/0.styles.37dc0d20.css",
    "revision": "36afdc098b493696d8b4979dd7a3998f"
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
    "url": "assets/img/5.1.dc1bb598.png",
    "revision": "dc1bb598105d50bec5014ee731bc4233"
  },
  {
    "url": "assets/img/5.5a0699db.png",
    "revision": "5a0699dbb3e2b1d4c5e38a01d699f579"
  },
  {
    "url": "assets/img/5.c04cc360.png",
    "revision": "c04cc36014c4b386c2b87a821a071137"
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
    "url": "assets/js/10.7fd34db2.js",
    "revision": "f6a0847896db6bdd6bb6c53463350a47"
  },
  {
    "url": "assets/js/100.81e3dd45.js",
    "revision": "12ae3912e7ecd72f2bab8f04d89a7cd6"
  },
  {
    "url": "assets/js/101.c868813d.js",
    "revision": "3b24e5fcd40ed67dcab97e820b5092eb"
  },
  {
    "url": "assets/js/102.35bd8f3f.js",
    "revision": "dd816245bc2de564e0802f88d6dee51d"
  },
  {
    "url": "assets/js/103.0f0d6d1f.js",
    "revision": "e1a05c2023a47c5ec58ce3b1f46ff7db"
  },
  {
    "url": "assets/js/104.26a5ba6b.js",
    "revision": "2c85397118e8e9bfaebe85788936adb8"
  },
  {
    "url": "assets/js/105.6e843deb.js",
    "revision": "04574c04078c08a14c09e902d04db020"
  },
  {
    "url": "assets/js/106.a5386b8d.js",
    "revision": "5415d762ea3f19fe154ab0d5499f48bc"
  },
  {
    "url": "assets/js/107.dffb0b5f.js",
    "revision": "70a4d0da55cd8f4a44f7ac0fd59c8b40"
  },
  {
    "url": "assets/js/108.86b2798c.js",
    "revision": "f5007841782fb90edc6217e8bc1ad7cb"
  },
  {
    "url": "assets/js/109.61bfe707.js",
    "revision": "ef2414fbd0acd24a517d463f5f68cd22"
  },
  {
    "url": "assets/js/11.901a0787.js",
    "revision": "7666f3ecaa646b572ed52e0042c31bc0"
  },
  {
    "url": "assets/js/110.b663ec4c.js",
    "revision": "dd2efc75e827f7562884c55ebe63cb60"
  },
  {
    "url": "assets/js/111.4980a76e.js",
    "revision": "34e1e15b8a4570c8e6bec6151267275e"
  },
  {
    "url": "assets/js/112.c7992e47.js",
    "revision": "edca280bb4445dbf5937ca6c9bb728e5"
  },
  {
    "url": "assets/js/113.a20d938b.js",
    "revision": "ea0c129aa51c35a3c50257b1f3de25a4"
  },
  {
    "url": "assets/js/114.2ff25504.js",
    "revision": "e9345560d1c9bb17571b36be13ef4671"
  },
  {
    "url": "assets/js/115.e95e9346.js",
    "revision": "4c1d15f467a408b978eb82a2d7ad57a6"
  },
  {
    "url": "assets/js/116.33f1aebc.js",
    "revision": "ccd08de84a368052ecc5f146f443a38a"
  },
  {
    "url": "assets/js/117.74c17e59.js",
    "revision": "38b389e704d6e60cf12ddb7cc9655293"
  },
  {
    "url": "assets/js/118.3be21076.js",
    "revision": "449136641e291e3c73a003ddcc0223f8"
  },
  {
    "url": "assets/js/119.13d1ac96.js",
    "revision": "8c42dcbf412bdc2be78d3d8946b2d43a"
  },
  {
    "url": "assets/js/12.0b5a5ab3.js",
    "revision": "959b8a826bddfcc34ebe39ea7ab59f13"
  },
  {
    "url": "assets/js/120.5127763c.js",
    "revision": "434dd90d8b69e3fa1b9b58e70a8e8146"
  },
  {
    "url": "assets/js/121.47f79cbc.js",
    "revision": "4864c14af4320e7d6cc7d47af15f7ddb"
  },
  {
    "url": "assets/js/122.d01776f6.js",
    "revision": "3f359ad9a9f77eff4a37168fb5025eae"
  },
  {
    "url": "assets/js/123.1b8f2546.js",
    "revision": "13cf84a7b4b134745b47dc002017c9fe"
  },
  {
    "url": "assets/js/124.9dbb24e2.js",
    "revision": "9d377b91733c152828205cee52831e92"
  },
  {
    "url": "assets/js/125.df1ac0bb.js",
    "revision": "206b6d6d3f0e968252af2a8943bd98eb"
  },
  {
    "url": "assets/js/126.1fe5fe37.js",
    "revision": "982f7338633efb2d7c05eedb746b9d86"
  },
  {
    "url": "assets/js/127.f7d2b4fe.js",
    "revision": "f788e49122ad53733663cfb6aa43d5c0"
  },
  {
    "url": "assets/js/128.30f0f6c8.js",
    "revision": "725f67bd9f4af9ec8fd25d71191ea93d"
  },
  {
    "url": "assets/js/129.97c14ea6.js",
    "revision": "d0427f80a0a91f4c3ea298680c6b2158"
  },
  {
    "url": "assets/js/13.da685cf6.js",
    "revision": "8f80e6c7a61cb8e9b6d16a720716c325"
  },
  {
    "url": "assets/js/130.95b14d0e.js",
    "revision": "5454ec55cb8406882186b21ac561f247"
  },
  {
    "url": "assets/js/131.5f2a9c6c.js",
    "revision": "4ad827ec43e1bbf392df77e2ac4d7589"
  },
  {
    "url": "assets/js/132.d7d1f41f.js",
    "revision": "125a28a72dfb2ce2dd5831f89445754f"
  },
  {
    "url": "assets/js/133.eab66a67.js",
    "revision": "394c4eb49db4acb71f91697e244aa85a"
  },
  {
    "url": "assets/js/134.ebd6fea4.js",
    "revision": "4b80b1803e34bdc6a136c886baed8e19"
  },
  {
    "url": "assets/js/135.00cbea64.js",
    "revision": "80f5e0af085d0da0e0265e700cfaf785"
  },
  {
    "url": "assets/js/136.d544d9da.js",
    "revision": "cf15820ec30fbb0ce2b8b7970da493b4"
  },
  {
    "url": "assets/js/137.0aec3d63.js",
    "revision": "0f321b84f442a6a14f79adb0173da58d"
  },
  {
    "url": "assets/js/138.469601e5.js",
    "revision": "f3a0fc77703899a40e1ddc8edbe50443"
  },
  {
    "url": "assets/js/139.00073cc7.js",
    "revision": "5e4a98cd617257fb1ac0face0aff131f"
  },
  {
    "url": "assets/js/14.4591e3fa.js",
    "revision": "ce0c077e3b2a749517aa84ab1b07b764"
  },
  {
    "url": "assets/js/140.302e8c0d.js",
    "revision": "de86f34a97b935b1bf84c1f16e1e5bbf"
  },
  {
    "url": "assets/js/141.cb123354.js",
    "revision": "1022bc566beabbe5a2feb1b758ca5c61"
  },
  {
    "url": "assets/js/142.9d47c1f9.js",
    "revision": "6824f62a32194d7a5c29494928cea7fc"
  },
  {
    "url": "assets/js/143.b2c572fe.js",
    "revision": "36ff1dd942b3c716bfb46b6384b9a2cb"
  },
  {
    "url": "assets/js/144.e13d5a9b.js",
    "revision": "878bef85e5c762ce6fcf62d737c52c8d"
  },
  {
    "url": "assets/js/145.34a89bcb.js",
    "revision": "1fa4a09175966853af731137fc3864ba"
  },
  {
    "url": "assets/js/146.9d006de0.js",
    "revision": "e129e342a6ccb24bd86eeefff15300ba"
  },
  {
    "url": "assets/js/147.63af6a1d.js",
    "revision": "3ea6ed476d8d3fb1ba2cbcc46f241493"
  },
  {
    "url": "assets/js/148.d74e2ccf.js",
    "revision": "636b517dea62671b081da46729ad0be6"
  },
  {
    "url": "assets/js/149.48182d6b.js",
    "revision": "efce6cc96a5909a89040ead6cb64f241"
  },
  {
    "url": "assets/js/15.afbfbc68.js",
    "revision": "456b084cc646597438f052f2e6123ddd"
  },
  {
    "url": "assets/js/150.afb95b53.js",
    "revision": "c32ed1103d473662f0d5137b66fee4a1"
  },
  {
    "url": "assets/js/151.201770d4.js",
    "revision": "607faaa306286c1e4dc3f16bd299325f"
  },
  {
    "url": "assets/js/152.7d579f17.js",
    "revision": "8e408e3aa29fd61df5e07cb246ffbe0c"
  },
  {
    "url": "assets/js/153.6cf0e3c8.js",
    "revision": "ffa62b4afa93c77c111c3613a7d581ed"
  },
  {
    "url": "assets/js/154.09de15cb.js",
    "revision": "c8466578165afec75e299622f08eca8e"
  },
  {
    "url": "assets/js/155.21574eec.js",
    "revision": "baab941967be05854163058d1fb07da3"
  },
  {
    "url": "assets/js/156.a1d33927.js",
    "revision": "5afbb5b1d9641a2538783e6644c130be"
  },
  {
    "url": "assets/js/157.932f070e.js",
    "revision": "ba20cd18a8cb34bc2a61a44a4df37f10"
  },
  {
    "url": "assets/js/158.8abfcb6d.js",
    "revision": "e655031e7f4a29161fda617b053ee452"
  },
  {
    "url": "assets/js/159.26259c6b.js",
    "revision": "e856bd0e6891dc25986068ef9f2fa896"
  },
  {
    "url": "assets/js/16.3145a5f5.js",
    "revision": "d19d5218a89c5a78f2b481b1e0ef194a"
  },
  {
    "url": "assets/js/160.c15d266c.js",
    "revision": "0892cd68c0b231686fa2c57e94353da3"
  },
  {
    "url": "assets/js/161.ff794d17.js",
    "revision": "8e9803d34396899a0d0b02460ef7d460"
  },
  {
    "url": "assets/js/162.df0cfd93.js",
    "revision": "3403b0ee6b0c359b1abf224288bf9006"
  },
  {
    "url": "assets/js/163.12c45a4d.js",
    "revision": "c865aa833d157f97f48430355f38649a"
  },
  {
    "url": "assets/js/164.b7411683.js",
    "revision": "ffeaef65fedddecd3163211150d07c2d"
  },
  {
    "url": "assets/js/165.a89d11f8.js",
    "revision": "9a4302b1075205e664734855c5ab4d79"
  },
  {
    "url": "assets/js/166.684e76bc.js",
    "revision": "dee2ef7b10b99880e5286d1aca361d7f"
  },
  {
    "url": "assets/js/167.d7cfd4c7.js",
    "revision": "ce62ab01ee56df71f64fdfe0c9861dd0"
  },
  {
    "url": "assets/js/168.abe5c77f.js",
    "revision": "96031a6de8aea6b0a988614c331e2466"
  },
  {
    "url": "assets/js/169.b79e1915.js",
    "revision": "652a0ab8d8267577839b88be146eaa8d"
  },
  {
    "url": "assets/js/17.72eb827f.js",
    "revision": "594fb794f51071217f54cb0712d68b14"
  },
  {
    "url": "assets/js/170.e1d1f195.js",
    "revision": "cf63b7967ec26e4f00ee6f5e59236626"
  },
  {
    "url": "assets/js/171.59ab7471.js",
    "revision": "fdc6ed2d715c7846946ff66043635134"
  },
  {
    "url": "assets/js/172.825d28f8.js",
    "revision": "a776734ee0f6b1e6845c0830d5f7dc3c"
  },
  {
    "url": "assets/js/173.a76bd0f1.js",
    "revision": "4ae409320aa91a9151073b6cd9a69a52"
  },
  {
    "url": "assets/js/174.328663b3.js",
    "revision": "bf7dd1e596f0c13849d57b5664bef27e"
  },
  {
    "url": "assets/js/175.b01293f8.js",
    "revision": "f160efd79cd161c10729d3f0b5235719"
  },
  {
    "url": "assets/js/176.fd944939.js",
    "revision": "34dddcf854cd17fd0c1c77243b028c32"
  },
  {
    "url": "assets/js/177.8c5b4e50.js",
    "revision": "e96c6d404f5e353448ee312fe2bf1074"
  },
  {
    "url": "assets/js/178.97ef8d4e.js",
    "revision": "d18330668867f6f1f096d42a46945ccd"
  },
  {
    "url": "assets/js/179.fd762e08.js",
    "revision": "1d71b6e4efd21c974beca00763f12901"
  },
  {
    "url": "assets/js/18.55ca0437.js",
    "revision": "663b0a0eb3da2e7fcd2ed313e6a0e138"
  },
  {
    "url": "assets/js/180.74132d42.js",
    "revision": "06916cb84c055e36b0910f0711e5062c"
  },
  {
    "url": "assets/js/181.dd1315c0.js",
    "revision": "032ddc90935899a23d859f9ee3d735cb"
  },
  {
    "url": "assets/js/182.e415404e.js",
    "revision": "d805f7e416b0593927cc3dcff8146b4a"
  },
  {
    "url": "assets/js/183.55acda5b.js",
    "revision": "968300d6f1cc9e8b2ecc16193f722ff7"
  },
  {
    "url": "assets/js/184.73930270.js",
    "revision": "038de0b3d939acc99a64943da667cda9"
  },
  {
    "url": "assets/js/185.cca28680.js",
    "revision": "315abf5a8649ff16bf3c9af0be9bc821"
  },
  {
    "url": "assets/js/186.74d8f50b.js",
    "revision": "4f8267a30e3de83882b47c40a5041cef"
  },
  {
    "url": "assets/js/187.dfaf3c49.js",
    "revision": "f37bc6a7758801c4db5c57d0b4ca8d3f"
  },
  {
    "url": "assets/js/188.00211509.js",
    "revision": "da6b0f3b8fc200e22cb7eee4055f2d2f"
  },
  {
    "url": "assets/js/189.351be7fe.js",
    "revision": "f5c8dc7b05aa53965c331650d975e12e"
  },
  {
    "url": "assets/js/19.f81eecee.js",
    "revision": "b2b2ddf73dee33903fc90266b8517896"
  },
  {
    "url": "assets/js/2.50aff010.js",
    "revision": "008e27fe22a1b9b7f8d6fcdfd3a65bd2"
  },
  {
    "url": "assets/js/20.8ea2ec96.js",
    "revision": "2811f4715effe17286d0d2bd132554d5"
  },
  {
    "url": "assets/js/21.df39c04a.js",
    "revision": "aaebf4b0f213542d9d10cdaded5653b7"
  },
  {
    "url": "assets/js/22.15472c9a.js",
    "revision": "85d15efaf7f8590200259901885ad305"
  },
  {
    "url": "assets/js/23.9452baa7.js",
    "revision": "e4221bc39248f3cefd9824ee665ea215"
  },
  {
    "url": "assets/js/24.cda03eac.js",
    "revision": "93c561ee50650cc19e1aa5c2385f701a"
  },
  {
    "url": "assets/js/25.06b87357.js",
    "revision": "06b1d53ed679e7b940a4b3a426337140"
  },
  {
    "url": "assets/js/26.14105450.js",
    "revision": "40263f61fb772fafaeeecf655e4587d3"
  },
  {
    "url": "assets/js/27.4bbb7422.js",
    "revision": "3a28d110aa9c0d050c564d7fe24498af"
  },
  {
    "url": "assets/js/28.380567d1.js",
    "revision": "985136c71dc9578cb244d62c24e6c4c2"
  },
  {
    "url": "assets/js/29.dd9cc9b2.js",
    "revision": "7363b52c388274579c961d43a0b93624"
  },
  {
    "url": "assets/js/3.f1538014.js",
    "revision": "3c9626c1b499953bb12ff56050f630bb"
  },
  {
    "url": "assets/js/30.365a3969.js",
    "revision": "2a74386bc70956996001ce95c7565f7e"
  },
  {
    "url": "assets/js/31.433ca059.js",
    "revision": "1c0c022685c713a8f1f7a9fc1f6510d4"
  },
  {
    "url": "assets/js/32.6d7a429d.js",
    "revision": "0417477e0f4fcf90b345189c1da370e4"
  },
  {
    "url": "assets/js/33.79cb5009.js",
    "revision": "1ed6a5af03a64e6a0467f14f390fc66d"
  },
  {
    "url": "assets/js/34.8aba3258.js",
    "revision": "4838745b401aeeb33822adc7e537e579"
  },
  {
    "url": "assets/js/35.49d3aadb.js",
    "revision": "192bec7b6e94cff07820d2fc8216edfb"
  },
  {
    "url": "assets/js/36.bb4c720c.js",
    "revision": "67934ec2f923dcccef61f80a94f4873a"
  },
  {
    "url": "assets/js/37.e92e1973.js",
    "revision": "9cfc2b8a1ac9ce443dd5cc53ccadd72d"
  },
  {
    "url": "assets/js/38.493683cd.js",
    "revision": "b66552a818daf1ac87236f8c3f1100de"
  },
  {
    "url": "assets/js/39.be6da2dc.js",
    "revision": "4292ecb51a12d9d3b0416949b193665a"
  },
  {
    "url": "assets/js/4.05219434.js",
    "revision": "81bcb9cdd713f87ee3d07b558f1e7a9c"
  },
  {
    "url": "assets/js/40.c9022872.js",
    "revision": "8a70392d773cde304f3c2c5222fb2154"
  },
  {
    "url": "assets/js/41.7e90b4f7.js",
    "revision": "aff14bb1d4763001138733399fa7c44c"
  },
  {
    "url": "assets/js/42.6a7acc4b.js",
    "revision": "33044e50f13b8c91e3e70b2462d88bfb"
  },
  {
    "url": "assets/js/43.d542f362.js",
    "revision": "13d5f5f6c4667c6137015f07517cb128"
  },
  {
    "url": "assets/js/44.28d9885b.js",
    "revision": "4d162d3bead65610aac352a293058088"
  },
  {
    "url": "assets/js/45.924cca59.js",
    "revision": "5584b1c4f57c7fb3a98dbf459c5469d9"
  },
  {
    "url": "assets/js/46.4df35a84.js",
    "revision": "fc23fcc4099ece2d276362464fc44d38"
  },
  {
    "url": "assets/js/47.4a0d002f.js",
    "revision": "33ac952a27077df1322b67e0b02fb3a6"
  },
  {
    "url": "assets/js/48.715472f5.js",
    "revision": "0ec46cbf72fa2218ce64eaca5dd258d9"
  },
  {
    "url": "assets/js/49.c5095b76.js",
    "revision": "db4bdbe5a6f1476eab4bbd07c65d2ab5"
  },
  {
    "url": "assets/js/5.477bf6f8.js",
    "revision": "bdf37d122941fb9821808783f9d265db"
  },
  {
    "url": "assets/js/50.135dd2af.js",
    "revision": "c441cd16ebd072baade9c7647ce5bbae"
  },
  {
    "url": "assets/js/51.7b4afcee.js",
    "revision": "8fa7645290330cedc084bbb917e40d81"
  },
  {
    "url": "assets/js/52.6bb1de5b.js",
    "revision": "997c189a66a0cac96c5d3794d98d3231"
  },
  {
    "url": "assets/js/53.346de267.js",
    "revision": "5f40962f5a5a6aec6a6405c27cca8812"
  },
  {
    "url": "assets/js/54.35644052.js",
    "revision": "0c86aa4da4ebb185886154c491f5228c"
  },
  {
    "url": "assets/js/55.ae995512.js",
    "revision": "5327acc0706ba77ab3da07496799ccc0"
  },
  {
    "url": "assets/js/56.de09d8e0.js",
    "revision": "180a451c8af0ea642324b4ef3dc3d672"
  },
  {
    "url": "assets/js/57.d6059bf5.js",
    "revision": "bfce5d3a66b9424c24a7aed13c176fec"
  },
  {
    "url": "assets/js/58.69190b7b.js",
    "revision": "80e748f07e0474479aac8f64e18f0bd4"
  },
  {
    "url": "assets/js/59.04910380.js",
    "revision": "798934db8592b709fa1716c1796c563c"
  },
  {
    "url": "assets/js/6.21d537a4.js",
    "revision": "c317b455a07c07f3d09a89325d593082"
  },
  {
    "url": "assets/js/60.6bd609c0.js",
    "revision": "2d2badbde70da61e5ae66025f627512a"
  },
  {
    "url": "assets/js/61.5db2973f.js",
    "revision": "a179c501dc326471922283127af65013"
  },
  {
    "url": "assets/js/62.373ac990.js",
    "revision": "189b0bcfff87c708de4dfb0f9879f73f"
  },
  {
    "url": "assets/js/63.0ca08639.js",
    "revision": "18c220e69145f81c310bf7b28eb56781"
  },
  {
    "url": "assets/js/64.7692b766.js",
    "revision": "d3a3c0b0f3ee64b1845f9b28c1e8a7a7"
  },
  {
    "url": "assets/js/65.b709ef21.js",
    "revision": "72d0f46765c5d819675383727a519467"
  },
  {
    "url": "assets/js/66.2ec6c99d.js",
    "revision": "fb31e82a3699abc5c8eabb0274c462e7"
  },
  {
    "url": "assets/js/67.17e6d71e.js",
    "revision": "6772b7b1cfe488d854a4f67dece33c04"
  },
  {
    "url": "assets/js/68.adf4c751.js",
    "revision": "73723fc10cedcb6cf906723dc05d42ae"
  },
  {
    "url": "assets/js/69.8a1a7203.js",
    "revision": "e89fde4181495956304883fc566081f7"
  },
  {
    "url": "assets/js/7.7f0739c5.js",
    "revision": "697d46e6ba68d4556559d2d5aa4fce9e"
  },
  {
    "url": "assets/js/70.6deb1dfb.js",
    "revision": "2e606a1bb2d0e4619097b8a769f5d597"
  },
  {
    "url": "assets/js/71.80c5e213.js",
    "revision": "be3a1603fff06a1ca7b19007f5eaac68"
  },
  {
    "url": "assets/js/72.b35c5fb2.js",
    "revision": "27391a8518ad6ddb7b5b81bee8fe6123"
  },
  {
    "url": "assets/js/73.877a7c2b.js",
    "revision": "339b02911b13a184e181db92bf6ff78d"
  },
  {
    "url": "assets/js/74.995b30c9.js",
    "revision": "79ec2000b8626d1f29b9fe75970823a3"
  },
  {
    "url": "assets/js/75.8e991d2b.js",
    "revision": "4ba2229c00191b620edde2eee7c9bbbc"
  },
  {
    "url": "assets/js/76.0adc770b.js",
    "revision": "86dcd59fddc3394a5329a1755ef22004"
  },
  {
    "url": "assets/js/77.6f1d4fd5.js",
    "revision": "bd0c30d7c490796f6b4b944d7eb30616"
  },
  {
    "url": "assets/js/78.84af9074.js",
    "revision": "5e7b9d4e1132e72d9e95b29d399db646"
  },
  {
    "url": "assets/js/79.8a86b5c8.js",
    "revision": "dc8ab22e2a3b11fd604e01e84733df3b"
  },
  {
    "url": "assets/js/8.6b397fe7.js",
    "revision": "3b665b749e81b562d6618913c1c3523a"
  },
  {
    "url": "assets/js/80.d579dbb6.js",
    "revision": "01b07d6682492a4fdb3177d473a7a4ef"
  },
  {
    "url": "assets/js/81.79a49a22.js",
    "revision": "b2275580e5d2bcfe215afc06cc27c8bf"
  },
  {
    "url": "assets/js/82.50b25875.js",
    "revision": "70c1cdc619c18274156096d3e4c2b3a7"
  },
  {
    "url": "assets/js/83.2c79911e.js",
    "revision": "17bc64e5d96dc293f0afef99ff993bbc"
  },
  {
    "url": "assets/js/84.0be2ce94.js",
    "revision": "b95ba4c3ba840b5b6d01dcf963d7709c"
  },
  {
    "url": "assets/js/85.2afed790.js",
    "revision": "87dfde46cee42da1b6b3002cd049bbaf"
  },
  {
    "url": "assets/js/86.b3fe0e6a.js",
    "revision": "fedd6deb729df808e9f6f18c30f411d5"
  },
  {
    "url": "assets/js/87.973d84a4.js",
    "revision": "ed82fb6622db6cc41100650815243a38"
  },
  {
    "url": "assets/js/88.54a57f8c.js",
    "revision": "862c74acd7350ee58f86e714bc0c0faf"
  },
  {
    "url": "assets/js/89.3eafae2b.js",
    "revision": "f5e71f2784b88d96d9f149a0f2251210"
  },
  {
    "url": "assets/js/9.b36920ae.js",
    "revision": "94799201a08cf7f3c76d51e2b3d1830e"
  },
  {
    "url": "assets/js/90.05da0f97.js",
    "revision": "c168ceb6cb5144f609e9cc4397269cb8"
  },
  {
    "url": "assets/js/91.a3fc9daa.js",
    "revision": "cd998e9b4bcd671aab032aff2c1451c5"
  },
  {
    "url": "assets/js/92.b7945119.js",
    "revision": "9acb6b551225f80947920f3ed72b20b0"
  },
  {
    "url": "assets/js/93.7b6530ea.js",
    "revision": "d8ac5507ece296d3d3c6b977f9362020"
  },
  {
    "url": "assets/js/94.003519ea.js",
    "revision": "901c0bbb1a2860e21b8f37701f5fba6a"
  },
  {
    "url": "assets/js/95.d1433310.js",
    "revision": "05b84a29ec69be5b068673ecc4708889"
  },
  {
    "url": "assets/js/96.7495fa77.js",
    "revision": "79015e668825e09a1e9505fa2a529efb"
  },
  {
    "url": "assets/js/97.b230e8d2.js",
    "revision": "c9a4a34406a7c9ed14c9affcc49a468d"
  },
  {
    "url": "assets/js/98.5d5302a0.js",
    "revision": "07a44d1638e0df430212bd154e0f9fbe"
  },
  {
    "url": "assets/js/99.b4fec55d.js",
    "revision": "de9df9f7baa4d4269dae7744f395bd31"
  },
  {
    "url": "assets/js/app.f10f5c37.js",
    "revision": "f7954f1b36b5a3164e3726114d48b1ad"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "cc5769242e308523782d2b8f109816ab"
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
    "revision": "2a0547aa121a97d97fe2ef57719c850d"
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
