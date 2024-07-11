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
    "revision": "f61b7898ba0a46a52468d77c17cb4e3c"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "fac9943900c44a20ee7dffcd781cb4ae"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "b73c44cb4e84e076af5ee59dc665e54a"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "a46f56fde0267717f63b65e59f5ba098"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "669ef9e72c2e17725e8f2c19700eab00"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "6b273c71d56534b9b38cb715224c259a"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "91fd818b67b2d5ea5b17c2519f87116d"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "25b45ece1e3dd17af4d5a0bd6a33b6cb"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "3ddcebe7a7aa0fe2ad1abedee41259f9"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "dc7de9b64a6c592cf1a9a4713700ce1d"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "76aa930cf4990701de2fdb6c3e8a415a"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "eca386538f6757ecf69904b7c33bad7c"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "99b63966a9510ea712b4633752dd8b47"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "4bce0899ec2f113082517c7c48b585a1"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "e3ffa1371aa7c8ae5a31fca92db4c539"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "79f66d2c30c2b1a5a1fc729a73a79766"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "79097a9c8222070820aa6a59968a8046"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "764033f21581513fa8d87c044a309a2f"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "8124d0e25c05489c497d71b5bd5f3f78"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "2c8e46d6f0d7a9ed233966bd10964921"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "c4d3854b9674d01486a786d1d743f370"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "8eb5744cd246eb3a099246fb95ac9b3a"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "a7634193f5815a34f752a4dfd3630ad8"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "1596a4ff4d5461ae65283c940cdc764c"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "52a4820ca58bd3e99b4ea8d8b5ef23fc"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "3e90bce5b33561687898fa90c11404e3"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "8e891f943cf6278c012441950d83106d"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "2ae5b8a5d0f5d2e4030347ef6ab33cc1"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "171822ca4c63efcdb835e6e2527d016c"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "4698d9fe4a81bc232b7ae771e1f3712f"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "851f6d31cc1d3d9728b255cb63e73703"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "e5bc629c403873a0293d446d95034d63"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "b16b821d8a807f7c45dcc41e28d902e7"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "c6fbd450b91432da1d20cb6f0acb9035"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "56724071765fe611ad4fff69ce5056a0"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "3e0d16d787dc990b990208b7b71e79b9"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "e61e0a8d3e974f48d60e73e419c19638"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "480a8a031bc2e221806766b0a9f4cf84"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "c5d9a6dd9de6ad9dddf922719804907a"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "e78689b72a51e1fa1db30b893d4cd5c0"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "c8c3dce9836c00b29f7a160525e92139"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "247870efbec8e47caff1b643e9f225f3"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "dfeef93d4fcc5bb1c3dbb24ceb7e4f10"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "7c2e5b8bea7f6c30efa1de2373cf8958"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "8fc8631e045bd594e156ce87d56aba21"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "3757d9e37bae3c1576e69b5748b44be0"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "07fe5cc36febfbc61d9c7f479c1fa48c"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "2962b8350192e07724648cf6f69b6974"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "4f30ac8da05704780d9d502e7a56fd50"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "85c2cfed790bdce0b82ccbfb7828ca2f"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "b60e4a2d47816adf795607d868773468"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "806d6cb605a4eae6e6905cdbf2a1b24d"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "c9288d8bb4092302bd3c2bc79ff4f98c"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "232d1352c91da29a2bd751e678da4996"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "7be83e9964fff01f7d0b81885d0a93e0"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "8a96e7cdbef424456082244d0fe32d90"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "b2ca13aa94fc42db4526bc6b06089192"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "3ef00d262d008b966fb3609bb2a422a0"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "c82f7e98796f265a6780c3cbf51a4630"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "d6a29788260dabe7409e6b8e22eee7ae"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "117e9e4a894be007c696431a88d52d8d"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "5ea9f16d6b386747dbda5920d2d71347"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "b41904e3a51e9cfd86e2aa93e4a068ca"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "2454d2a0a6c1c71474880e10d5cf87e6"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "781d09cf2cd6bc298d465aba9a74494a"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "aa68ab9b10b4472d4f20e081c29b6bbe"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "15c381687863af7b03484b8200eae98a"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "d2874777d893a6493d1c2958a0149716"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "14abb546be2df68e2229498b2220c064"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "dd7d9b1214bcf1078772bea85c605732"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "a637fc53f61c802655d4417cf6de7916"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "ccf8a079835ab8b3af98c71b0f1c15a8"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "ca1e80538da0f5659cd3d3d44edd4e55"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "83c9876d7bfded1098159164dfa1a085"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "b1cd72f21bcb2d9410e3c3bd00743776"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "123c23f3d66c58320ada373dc441e992"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "60375c4e589a2b6e740f6f1972188afd"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "a26483c40e2ea2aa050e4dd3bb4eb654"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "aee618233c028f709a989ee2af6dd648"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "4a66bafb73c64ddf8d59d01875f0852c"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "183af7a26d8a26fff7c118f161c8f5bd"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "6c84814d05ff215cc9810927813095b9"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "4e826cf945a8cfe4590b247962cd6416"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "532181217420f77238096b790c68ecfb"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "db9b059e5824c30bc951023d039e8f92"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "be02788f64ca207468c814d5d8ab78be"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "f0866468cf3f7a32f8325c1207db2f06"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "67b451b3f648d5171a08bc36e4afc1b0"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "ab1482a18eb72d9633b069e6cc4d3597"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "9ea8c84300ae7e65835e6a5b764c6fe6"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "d3c63260b4d62aafc357d3fae932d091"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "16f22f2f51f58265bf0eda41ffb14a52"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "6c4fc86acf812e3949b616e7ed86a3b8"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "65f1f1781f2010835e78be2b852745d0"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "07fa3c17542ac03c4770f0142f22f7f4"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "abc60daa108c41198591236fdd4b4207"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "5a1ff72b7d31f453bc23381b87954c27"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "4f5b1a75cfadc6434747bba841bf09f8"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "090239109cd5d0e68412f75774ae3793"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "814df6a2c4a02d56cdbb42bd298f394d"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "69f8d5cf42ca6759ec058f7906850540"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "0b2800dfacb6117d480d103367ca7f81"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "378ccbbdac416da6ccc50fdf5b402fee"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "466ced2824239e8a50f3469f64516e64"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "2551c4a89eee1f85efd6bc64e132ed95"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "7381ef38d3d63f7c5fe59511fc177e31"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "7cf4d20b1c456929db4389908cb37ece"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "b2da9067333489a345401494ec51119a"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "55f8ccf86f3332b85084a18612fc0c4d"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "6f97569e03a12be43d28b2d6207d5d2f"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "3ac1f5fc412a7fe8b36707b6d36ff9f7"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "18e95214c048f3346a3a87c068399076"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "cc821f6964767fc7bd8eb98057620301"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "00a34bc35263e11cab46d73dad251e09"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "04067dc49ef1a4b35bcb652850e8c515"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "cf6361d23e14be37a0c6f07fd6fc8202"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "4cb3642f2a86a0352a735594c4bda53c"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "af532f2f6022511658b0c433ffe5986f"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "1b182eb855dcb1c46eef3b94e7a8c5ff"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "313ac5ad9507ff301d3e72e2f9b78fdc"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "c36e47e37d9a6321c264d127f1f647ab"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "cabc3c53b056244807558353d0739d99"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "c99531dbb18d33c1ea2a2d831e3bade1"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "6b7f013c5e108f6cdccc5080289037fc"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "71bf1e55acedaf38f6f6d7d3a98bd2db"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "cf3886e7bb77a9b78d872da3a4b7eaed"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "1387fc1051f139cf9825213c16ec15e0"
  },
  {
    "url": "404.html",
    "revision": "55972b8c8e0ad18cf96640a0eeb8df2c"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "d761e58772b1220f2ecc1852ad7d4dfe"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "937f5d47b26c96f9995826418ef35e67"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "d7c50fcdee2cda20b086a3720b631ea0"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "81b6d97730d956d53e707c4e41578dac"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "1996009265006656a3b88d3041deac38"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "635ab567da48f9d28f01d30007df370c"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "25aa3bbefdf876f5a9664eb36854eb51"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "5a1b4a29bfd4542e5d558ebe3a3c9164"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "fef652ef29a587a11db924f83b6273ae"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "bfbaf59d5d3454e272e368b31f2eecd1"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "e77bf18a5284cdfff3cc29024b223852"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "b3fb65cec6b26e26a68b62cc9a8047a2"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "7f513dec43458e5a4c662dc549248919"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "12fc0902a5bcea225f2f7a9f91cb2fc3"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "76877ffe1b021a2363b160c43a55c6a4"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "d09813ceaeb2d5ce0a20a95f04114154"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "3cb892cd3def101e6b6f4c2f44590de1"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "b40683dff874c14de5390c989e47a51b"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "54b42d13a6a4db580d7d263aebba7823"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "a3e9bdc51da2ccc1bf41fc5f1b17a2c2"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "7d4525c7de30e7f84479cef01c509c40"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "9d62405d7fc303c92664c758eaf9b66d"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "2fa5f24d591a460355cd74a1ce67834e"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "db4a57452eea0f57ed2a50a1273eee63"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "78a90239a8c712dcd6eb54c32b8c3d7c"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "8e737dda3c97b19a85c58e17aff882eb"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "2d82db87fde6db1f2dba9319eb14d6a0"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "ae62687a48d938eb5e4a21603172ea4c"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "7a3bfe0a81d6a406e97ddb8c75129b3f"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "508ec3fc02c6b562ddf9f8b330525bfc"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "cbb7867398c1911c44bc272434a8e6c5"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "b7810ce1760ef56de113b4530bc855d2"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "15ce753880ff7f4415c8a338c2c80b1f"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "af2d1b70fcbcb71ab663fa148d4649a6"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "d6f67461f54220bc6e9d3a0ae3a4d5f3"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "48dd16543bae0123a60f75d8b31c0a87"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "30f0149060e1460f0e0bfa09dc40754a"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "b5028d538b215e86ba8b27ba151f0969"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "a346e1d15f710b846def4e48c2cd37e2"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "aec0aa368a16594aa83bf67cae19391e"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "bec99d48850c703c7ee6bf05a5f6032e"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "0c5276eb139cb2894fe768aec956f96f"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "75f7fd779c9d37fa2134d13d17fcc3cd"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "20018e7fb09f194edf7994a6b2f9cc54"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "59edacfe9f10e4c5401841919cab7368"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "959c8580cfbc7a11fca2a7ab81b36cd2"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "fcde45847310c26b5486d55faac2f025"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "0315c0c4d840fb68125d750612ea46cc"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "c1d3d9c8f8a3eaf44f42666a6ea2abf7"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "7a58130056e9f768d3326406349d3090"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "19ad2c107a9d0ac80b4bfdab6f94a7de"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "9afe7432ba1bd0ed282d827b29ef2f4d"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "1336b5b5ac786a678853b4f6957c95c5"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "07b43a3de6faf64492d87c26641510b3"
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
    "url": "assets/js/104.5bc87031.js",
    "revision": "49b7ad4e3c7b8cae386dec429027784f"
  },
  {
    "url": "assets/js/105.3a6bdf02.js",
    "revision": "76e3a23d645269e53f15fef01e615ef3"
  },
  {
    "url": "assets/js/106.15c94e60.js",
    "revision": "384bf1d82dd78219dab05e67c18012ce"
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
    "url": "assets/js/11.95df9bcf.js",
    "revision": "2bd431679754b68c3cef176dbac45978"
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
    "url": "assets/js/123.be6c0ee1.js",
    "revision": "ff715304c2ee26e6db5035c58552c053"
  },
  {
    "url": "assets/js/124.e422b04d.js",
    "revision": "eb836bbba2c62644e63b1d1e5e573903"
  },
  {
    "url": "assets/js/125.53ccd73c.js",
    "revision": "4c4835d1b0cb9d23d8fe57415a39ee6d"
  },
  {
    "url": "assets/js/126.2e7d6492.js",
    "revision": "9c958ebf608d8a7e80610308fa124fac"
  },
  {
    "url": "assets/js/127.6e8be0c1.js",
    "revision": "b71d008071f2ebf3ac797c8c38eac124"
  },
  {
    "url": "assets/js/128.aa8783d2.js",
    "revision": "cd71246bb58e9f6b97d219a85235d75e"
  },
  {
    "url": "assets/js/129.d1ade0c1.js",
    "revision": "d2e48120289760f6a3c3804c2e170524"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
  },
  {
    "url": "assets/js/130.3f3e093d.js",
    "revision": "4eafe988649f4487e5ec279322f46de2"
  },
  {
    "url": "assets/js/131.4e404237.js",
    "revision": "c33638ebdaf306e2ea9e0b61590c718b"
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
    "url": "assets/js/134.2238ef56.js",
    "revision": "8c85bba0e287919a2b5dd9f974567a00"
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
    "url": "assets/js/137.c4ed8828.js",
    "revision": "d938d4d2a88de7d413e3c289320ba889"
  },
  {
    "url": "assets/js/138.044d0f15.js",
    "revision": "9d234afdd6d3fe2c8968dd2f1fd23084"
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
    "url": "assets/js/140.1ab39de5.js",
    "revision": "7f1d9b705acd6bec0cd8cb81d2129514"
  },
  {
    "url": "assets/js/141.180b0e95.js",
    "revision": "dc18b301c5ca5a9775ab3c6476bf70e0"
  },
  {
    "url": "assets/js/142.bbee59eb.js",
    "revision": "ea44bee4baf8a7a62af28f99ee4adbfc"
  },
  {
    "url": "assets/js/143.ad4d4060.js",
    "revision": "c3575ace68325f69087b2b1ea84360a6"
  },
  {
    "url": "assets/js/144.07e4bf96.js",
    "revision": "f41585c9684bc746e7083452326a2264"
  },
  {
    "url": "assets/js/145.609dc80d.js",
    "revision": "229055e0561256af843772d840be03fe"
  },
  {
    "url": "assets/js/146.0649a7a0.js",
    "revision": "ca8311ac1ff69a42df1599eaabf74137"
  },
  {
    "url": "assets/js/147.1d80fca3.js",
    "revision": "fd5decf361c8d0d315ed05b8053d7ea4"
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
    "url": "assets/js/15.63510516.js",
    "revision": "cb3703daaeeaead959dcbb35074a99cf"
  },
  {
    "url": "assets/js/150.295efe48.js",
    "revision": "96894136e8b607a4c98d0804b0e558f5"
  },
  {
    "url": "assets/js/151.9f91a5ae.js",
    "revision": "542f18076fdb4c8c66398c4ecc1db0da"
  },
  {
    "url": "assets/js/152.07833aa2.js",
    "revision": "e5a768aca89310af2d8df596e6ed969b"
  },
  {
    "url": "assets/js/153.c6584fa3.js",
    "revision": "8514df0fddc4577c2812803ce82c1fca"
  },
  {
    "url": "assets/js/154.1a4676b2.js",
    "revision": "45f893e22fee087404233f9265cb4d1b"
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
    "url": "assets/js/16.82cf5280.js",
    "revision": "7d5361924de6f7173cf3203b81be6b74"
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
    "url": "assets/js/162.73827d68.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.11804061.js",
    "revision": "4f5b3b5e085bab9d3ddb41e003c9a67e"
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
    "url": "assets/js/166.e9193c2f.js",
    "revision": "c8978aba150ba4a111d77a5f91cec951"
  },
  {
    "url": "assets/js/167.3172d15b.js",
    "revision": "ff4bdb731555d97cf6c794365699eb57"
  },
  {
    "url": "assets/js/168.9b0a089c.js",
    "revision": "94ebc60ef054bcb561eec1ae1c95742b"
  },
  {
    "url": "assets/js/169.f7bdffee.js",
    "revision": "ff4d50d3733ffbdb4905be8032b35000"
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
    "url": "assets/js/171.7cd5076c.js",
    "revision": "6786dfacf62ee7b1b8a9bb190282008c"
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
    "url": "assets/js/176.11d82cff.js",
    "revision": "c5ef5b147c6d76e4878bcdd1f9737619"
  },
  {
    "url": "assets/js/177.a74b2af2.js",
    "revision": "70d4b009158e2d1be7e503bfd4b7d9e4"
  },
  {
    "url": "assets/js/178.d7348239.js",
    "revision": "d7e08d34ddabba0034250b8ff186ede3"
  },
  {
    "url": "assets/js/179.2855eeab.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.777b9910.js",
    "revision": "8771211132e2b8a702cbd09149519692"
  },
  {
    "url": "assets/js/180.5468b34e.js",
    "revision": "58e9a1fc5a38b8124b525ffea37b6790"
  },
  {
    "url": "assets/js/181.4cf53fe5.js",
    "revision": "6f1e4ee89b6f1a9c0f4650debdc297c8"
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
    "url": "assets/js/184.906ce03d.js",
    "revision": "5f5e5b40bec77ebebc7fcb5c3c29902a"
  },
  {
    "url": "assets/js/185.f9acf20e.js",
    "revision": "6843113e687bb2015b1915e022245bd8"
  },
  {
    "url": "assets/js/186.69536c58.js",
    "revision": "c66f5e38efce46b8260d2bf16aa9b2b2"
  },
  {
    "url": "assets/js/187.23bd54a3.js",
    "revision": "a6c3f388af6b59ce62fde499672fb00d"
  },
  {
    "url": "assets/js/188.b565ec18.js",
    "revision": "c5a67763578a0f395672858e41675a51"
  },
  {
    "url": "assets/js/189.4d152a6e.js",
    "revision": "abc3bae3ceb41954944370a54ccd2403"
  },
  {
    "url": "assets/js/19.1319631a.js",
    "revision": "be68c9367d44568351d48d78da38070d"
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
    "url": "assets/js/20.9b691bb4.js",
    "revision": "1216910f0eab9f6b6416d9b0f71e296c"
  },
  {
    "url": "assets/js/21.54ab1ae8.js",
    "revision": "11f7b78cbda39dd8f9e3f510036c4ea0"
  },
  {
    "url": "assets/js/22.63be2330.js",
    "revision": "8a755a83ca47abfd8b23a973a03e3440"
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
    "url": "assets/js/39.1518f094.js",
    "revision": "6c560263a2ee708efa708af434ddab52"
  },
  {
    "url": "assets/js/4.f75a6751.js",
    "revision": "50d74fee02616f704e338320458af481"
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
    "url": "assets/js/48.d4e2d724.js",
    "revision": "1be894afe5ef7f3f52fe298261397377"
  },
  {
    "url": "assets/js/49.f875d121.js",
    "revision": "2d0c5668a8249a2564a4ea11e1aeb6af"
  },
  {
    "url": "assets/js/5.e38a005a.js",
    "revision": "88d61af86655ba0f77a2eb1d00bbe81b"
  },
  {
    "url": "assets/js/50.69bae393.js",
    "revision": "b4b038d5fb54c6ccd6c546d68514d3dc"
  },
  {
    "url": "assets/js/51.13272cd6.js",
    "revision": "7b656af3902520a5416a4ca1d1379ea8"
  },
  {
    "url": "assets/js/52.170b1764.js",
    "revision": "2c4f98f5c86f7727ccdc12eb4620c019"
  },
  {
    "url": "assets/js/53.df59d159.js",
    "revision": "bdf3886ec89b6cacead7d258992ea7fa"
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
    "url": "assets/js/58.e6d825e5.js",
    "revision": "18aa621395f2a1493c828a9bc1fd2a6e"
  },
  {
    "url": "assets/js/59.80ca92d2.js",
    "revision": "3fab382575bccf2d33915e5f55760e22"
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
    "url": "assets/js/62.c7116109.js",
    "revision": "5b55177ef590736403a7b47506152552"
  },
  {
    "url": "assets/js/63.41634ebf.js",
    "revision": "330369ceb53538c0f06d0062d66143e0"
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
    "url": "assets/js/66.7fc14e88.js",
    "revision": "5ffdc23479de4766c30885a8211e6a15"
  },
  {
    "url": "assets/js/67.3adef651.js",
    "revision": "14c53a9c505bb61a1c8c9e4e2ba83a1e"
  },
  {
    "url": "assets/js/68.148d4516.js",
    "revision": "8386c0b12377c81c74648585a40e05f3"
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
    "url": "assets/js/72.32b6488a.js",
    "revision": "edce00e63ca8723e9c3e72f8446c77c4"
  },
  {
    "url": "assets/js/73.62f0477e.js",
    "revision": "f1e49d132f2c6e2ec05d6879364c28c2"
  },
  {
    "url": "assets/js/74.03c729d0.js",
    "revision": "5929bdfa41d04d63eff45eee86a5deb3"
  },
  {
    "url": "assets/js/75.4980835f.js",
    "revision": "07f3bf978d68489a5976c2179bedde92"
  },
  {
    "url": "assets/js/76.5ab55193.js",
    "revision": "d4bd852ede47f7a942a12e2d04ac22d2"
  },
  {
    "url": "assets/js/77.2346e05a.js",
    "revision": "cf6423c71ab6b171a66182e918f6cdf9"
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
    "url": "assets/js/82.2436309b.js",
    "revision": "e494dbb5e77096e18a48dcbd5208c579"
  },
  {
    "url": "assets/js/83.96d2773f.js",
    "revision": "f9b12ecfe77d849be7d5337b4d9014c6"
  },
  {
    "url": "assets/js/84.a580b935.js",
    "revision": "1435b661026560d1a9d94c5f6f3e8634"
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
    "url": "assets/js/91.33a28478.js",
    "revision": "75ac5c7ee3991301cb982268c62c40da"
  },
  {
    "url": "assets/js/92.68a1be96.js",
    "revision": "59d9c745e5e8d48db665d1b9862bdd50"
  },
  {
    "url": "assets/js/93.ed6b9e19.js",
    "revision": "ec69c9046e4468524778939f793ea10c"
  },
  {
    "url": "assets/js/94.045a49d3.js",
    "revision": "55884942e485e640500486fb4c26046c"
  },
  {
    "url": "assets/js/95.8fe4d764.js",
    "revision": "669bcba8306ba980cbec7d6dcb1df84b"
  },
  {
    "url": "assets/js/96.efe897a8.js",
    "revision": "f572d8c1ab0c301f4ae4872ff003df22"
  },
  {
    "url": "assets/js/97.568fad9d.js",
    "revision": "fa7364d94275a29e6d165c20afe55a9a"
  },
  {
    "url": "assets/js/98.1b218d25.js",
    "revision": "37d3931e192f7b4f33babffbfc968bbb"
  },
  {
    "url": "assets/js/99.a5b4ee81.js",
    "revision": "f0ba36eb4bee228e8a56a5a1edf02c5b"
  },
  {
    "url": "assets/js/app.e9234be7.js",
    "revision": "87bc12fe66dd886a4a568c5e4bb2641a"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "a178977b4d9acddd51dacf5cd31b8bd8"
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
    "revision": "c472ca54d8e86adecee39f61e75b5444"
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
