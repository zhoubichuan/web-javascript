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
    "url": "1.base/3.javascript/1.grammar.html",
    "revision": "1176a27ca3a951a8ab18acd6a72c723c"
  },
  {
    "url": "1.base/3.javascript/1.index.html",
    "revision": "314606ce5ec6388be17e50f9ed280ad1"
  },
  {
    "url": "1.base/3.javascript/10.dom.html",
    "revision": "9318b0ce0eaf8569a061df13485d947c"
  },
  {
    "url": "1.base/3.javascript/11.bom.html",
    "revision": "fbfb2b24cdab48466af497b758201a47"
  },
  {
    "url": "1.base/3.javascript/2.morphology.html",
    "revision": "998ab703e2026d2b481b326d787c3f9a"
  },
  {
    "url": "1.base/3.javascript/3.context.html",
    "revision": "720413c9a16958e5f0f2f6cf3ff1268f"
  },
  {
    "url": "1.base/3.javascript/4.variableobj.html",
    "revision": "b8fe2bf44ecd004819c93ffc72a4619d"
  },
  {
    "url": "1.base/3.javascript/5.scope.html",
    "revision": "386a0e6cd60236cbfebba8bc17e1503a"
  },
  {
    "url": "1.base/3.javascript/6.closure.html",
    "revision": "d3af2549c1d08639b6bc9cb7aca25750"
  },
  {
    "url": "1.base/3.javascript/7.this.html",
    "revision": "086e02ca25e26dcdd7c4aa9850204f9c"
  },
  {
    "url": "1.base/3.javascript/8.async.html",
    "revision": "f55a2361a7e69f0c8001035f9726d31e"
  },
  {
    "url": "1.base/3.javascript/9.eventloop.html",
    "revision": "609f48e44eb23a1e173947def1f4c837"
  },
  {
    "url": "2.advanced/2.js/1.grammar.html",
    "revision": "aa6ece51d5ef282b3ba0bf03650b665b"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "05e57b1a76e6e3fe919637edfc33069a"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "c2e37af0b2d476e89c8a0a3f2df520d8"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "83354e179ff2f269e42c8663ab2ad5f5"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "98820df6b72f48dc075ea30f853a9554"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "45dddd896eff6c1f4bd531b21ef9d463"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "18d49d8a51c4036e463f7810ebdeb5ea"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "69f4656bff39ea25bfa25f0d84f5c354"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "cb583c21d5c4ac37c0f08ebcce8acc05"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "17b547acc9f7fa8efb8a1fe0a9f48625"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "910d72dd03f41d5968e56717d4cd3b0d"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "9eadff18cf5d36c7cfc848cbf7503e28"
  },
  {
    "url": "2.advanced/3.type/10.prototype.html",
    "revision": "7bf02be3553d5bdebebb1c7123291a4f"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "78e8129eb4b27478e8aee0ba47394c22"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "19af22c2e7e499c4cb93529960a6a45a"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "81e19b3388f3ae21dc83ed2dc3c00991"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "802fe961fd72d183b79ac2035a07743d"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "3f745f7331558f1b6bdfc286051b2a3f"
  },
  {
    "url": "2.advanced/3.type/6.object.html",
    "revision": "a9d1bc8a2d4af19d6dfd97bcc8bbb890"
  },
  {
    "url": "2.advanced/3.type/7.array.html",
    "revision": "77d7bf9dd07f7f080ea9b1a34148180b"
  },
  {
    "url": "2.advanced/3.type/8.reference.html",
    "revision": "c247cdb0731557b9e182c9cbb2293349"
  },
  {
    "url": "2.advanced/3.type/9.extend.html",
    "revision": "044446bfa63de2d38ae321f2c199833b"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "92d760b492668c4d4abea9c4d63d766e"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "99e3757b49a564641df8d96932a42dc2"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "d9cc2c73a9ab2b329de73b717d13c1c4"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "e602f702d5cbddae46665f6417b0b320"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "b70f5d9d10effb5326849a2d52cdb9f9"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "8954d6f02a1c0533fc0a07b7cb5609aa"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "c8458a8fff5c2642448ff83f99bf9b3b"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "9d73442887cd1c156e31f0150f404567"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "1a02ae63872d9167190a36c0f77e5ffc"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "a5c768d3bb4d63780a088576d6fedd61"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "c8e4aeeef6f0176bf3e94086e177242c"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "3230d78c3225a95020b46c4e65d4c4e2"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "ae8e971d8d11cd27f6248fbbab06161c"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "18090a7611f7db8d90fa6e6b6cc5d260"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "878da0586cd0ae3f70262e24ac69735b"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "557ae69ffd4f2b7165716f56f88c73aa"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "2faf65020905303a478a5ef3904eb15b"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "ab0a79a4da12afa6e4d98b0bfd8ac726"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "d8c7cf4646baedd4980dcd781f29310b"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "2dc4a96fdf4c406a65ef713baa884f68"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "6f22eb78d4c9efcc8da85debfaa714f8"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "0d8debc847a89c083d83cfecfb95d862"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "6ac3853cbe61ff4629e5b5372a38f59a"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "3171d5ff3d75892c1d70d837a7fb875e"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "8a923d29b9c19625a5495179a41123cd"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "393276a91cecc94667a5ae092f84d6eb"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "0b8698588b5ebe158b34f7d889f745ac"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "478828146c5b16d9e1982b2e671fc68a"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "efd94e7750fbe3c0db31ec1bddcbc758"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "d5128b568fafdaed20feec91a28efde1"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "46ba47864a4a3a7f6278bb2e4dad6098"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "2bedd01fa01ccc9aaf677e52e05d1359"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "86711f45b6e9dc554afe47a581d237e7"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "5414a9447a1fc4bfe144910d91d13a6b"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "122d69caef3f544206dd725de0d7bfd2"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "5e98502e51b6f2a6279d6cbf020fd336"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "5b4842a81b10deacd027a0d71dc15f64"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "a43487b74122fec5669ee79dc8c5ed28"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "dbe447eff96bfb40c57609ed83e4930b"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "3321dbd98ce1dfac2e6a7cd45f8c6bdb"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "14df40a0ab6c50ecb5320248168d9c1c"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "e958c1c02a38b712c1211e6e562b9093"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "5f889904651a5e02d99cafb4f012b551"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "a7d164d7f9b7b8ba9f9da189bc2991cf"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "ac184d05aa4574fff79e032af540b65f"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "25ce4e921f0950b591989e21f59bf2e8"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "fa517f2c27fda9dda556ec23df7bf491"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "c64fed1f137532cc6b89129242ab4875"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "59fd34de6e98f9c52d4ef21ad9cbb1f6"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "fd1edccbeeda06b026459749d9e224e3"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "52f4393bb7c421ed85b7778b15fd7a3f"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "b4cd422d6cf4e8a9466191c1083ae5f3"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "ece50842784bb3d8cc5157950c422ed5"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "2f197a1c6d5d2271241bc1ad47419895"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "dbda730c060132324844dca197c4fe23"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "9ee3f35709dd726ed8d907dc39c6a98e"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "696f1c356396f8e620299a67dce244d6"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "320e6a4527461fb5ada89eea5804f154"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "3d050ee37c794f6c442b144d0712dacc"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "49e0278732661db1280d8b62d8c07bed"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "eda056fb0624e505fe1c6ae71b74b2e3"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "0ef8addcd28cc96593d766218777b9d6"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "7ad25ea890e7141e30e2f3c12ced302d"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "6f1a4fab18ed363faef7fdb1ee2d9b45"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "bdf81fa3cae894f85c833176dde45604"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "8e5acad05a057be5f69ae4bd7037baf8"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "852f92e98a4f3d4b83b2daea298b9de5"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "4561e3f19cc60aec06d5fb5a2bce5d41"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "d75794caa52f1c268b3d56e46a21d803"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "5ea349b1d7c4acdf4758ab978a9acabf"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "3bae30029c980a3c8fb614136d9709fe"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "ca549f4f81ce9b853ef01971b99415c8"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "ba8d9647bfc67f377789003d34f32c3a"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "889045ec7a419499fdfb8d880a2af499"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "4feb1695da426e8d3eaaef7f9d3b8032"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "c0a06511c63b95e34b776abe7be7666a"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "3b088e37433f2cd2f6f3871d6c04e0ee"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "4c08f21092e90e26f60306ef5f55f4e4"
  },
  {
    "url": "4.special/2.package/1.index.html",
    "revision": "90192f8b11c59ea2f9b7b32afbb288f4"
  },
  {
    "url": "4.special/2.package/10.html",
    "revision": "eff4d8dab35e0532a7b35bef35e647b6"
  },
  {
    "url": "4.special/2.package/11.html",
    "revision": "6a8cb955dbe8ae231596f23b36049cad"
  },
  {
    "url": "4.special/2.package/12.html",
    "revision": "c49c5ff1b9239216c348a427768391c8"
  },
  {
    "url": "4.special/2.package/13.html",
    "revision": "9fe43c5f9389ee4471763e3a1f179f80"
  },
  {
    "url": "4.special/2.package/14.html",
    "revision": "70b6a79a0fb28a84a3826b7ee9100e8f"
  },
  {
    "url": "4.special/2.package/2.html",
    "revision": "bab7d0b261ded756569c128b4b2321df"
  },
  {
    "url": "4.special/2.package/3.html",
    "revision": "b8a433ccf8d74287b6fb2e3fb1982bfd"
  },
  {
    "url": "4.special/2.package/4.html",
    "revision": "44632331997d6e6afa43cfed1dbafe35"
  },
  {
    "url": "4.special/2.package/5.html",
    "revision": "910f125bf8ae5f332042eec854434e6d"
  },
  {
    "url": "4.special/2.package/6.html",
    "revision": "a1b608e01d8d706dc02264a0c6b1d95f"
  },
  {
    "url": "4.special/2.package/7.html",
    "revision": "ea9ec4b06d24d8864db84723769ac03b"
  },
  {
    "url": "4.special/2.package/8.html",
    "revision": "11bcbe104b12e5c329e23bb53b879497"
  },
  {
    "url": "4.special/2.package/9.html",
    "revision": "50adda8fa2fd7d73b8a6316ff54e08e8"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "48b75d513308e60332cc8324e6256849"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "9a0d5f7948c72a62414e4063be6e762c"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "13c1677da93a66b3f512255cbadae43a"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "e8985213dedf336d86cd800f78917571"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "242c53f0d5574bddfe2d802295530d70"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "ee8912897ed9422e62582bf5b8862090"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "2eee3c4ede0f7840336708bc06a7ca0e"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "c779a7f79e7bb7cd35afe86c782134c3"
  },
  {
    "url": "404.html",
    "revision": "455f429bf3f6ad2c7f14e800a7eca4e4"
  },
  {
    "url": "5.scene/2.file/1.index.html",
    "revision": "c7b62bb1206df0523e52ecbb827e7763"
  },
  {
    "url": "5.scene/3.video/1.index.html",
    "revision": "7691b3a30aa810bff151c185a5aa6434"
  },
  {
    "url": "5.scene/3.video/2.haikang.html",
    "revision": "cc7fb18a8b121dd0c2e282826678c74e"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "bad934607e5385128a471f7d601782d4"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "a5164534ad3ccec2e3a3d70c88f1d916"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "4658346e24dd2d12f57649b77906c022"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "03b5e39207b57ef8093d934a58fb612a"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "7d2fd83a2e277ffdf55523dfd4e03fee"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "ae348bc6b0c986eec94c3dad68fedc7e"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "4e2aea62fe1ef5ff8058954f1c639d49"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "9dc20b25aec887183c77a6c7a41d1e51"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "6d0ca19bd3bbdef814be69125251fbdb"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "6bb6772fcb0c62bb8d3d25e4b5bdecc8"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "6140252c9d9c16463a05c2b48b047609"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "482137ee5d22fc662518bf6bf18f5b69"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "1384fccb8dc97e456ec9faf996f2256e"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "9624c0c06f28786d1ee7a3b8e9bdaa88"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "71d2910fbb5c2ad3e3f3891bb6482cc7"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "c0b1bddd9c7443e1d9ffa3b620bfac53"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "82171277c62c1b6992c3bdf55c799048"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "8e27bb4e2f6a019d02b26c36cb13be43"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "4c008ffaa088c7c723e17cde2ac9b16d"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "f5325f7a2c79707425198d76a36d9e87"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "2251f53f83bcf13bae96698c945a2208"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "d9b78c0ede70e745d3a891106a8c9e3d"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "9659a7b47c68ecf07f6b7204ef76b0a8"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "05a67240e85332ade913c3312a358498"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "9f0aca7da1566842fdfe1c6174cde8d2"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "03f3d28c87cfcbf6b6f390063aba5809"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "02f09cc541ccc4c934b1d511961cc145"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "9ca040aaea517b985da88973abde24c4"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "ae6edd316f5d50836bf1b6b17a146364"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "651afc525df2730eb94f78accbbcd2aa"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "79179df80db19b6301319089b97b75d4"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "957464d8575bd9e9ff523576376ec0df"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "23ce978ff61184e3bbc38329ef3da50d"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "9541004437de176e2155c0768e00e1dd"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "1c53e13b1a6f92b84cc2eb9b3cb000b5"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "c229a9a4c1dcd4a35429b59f9492fb6d"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "5695793b0af61959502c466f61164f12"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "07e95cb783cfd3d2b2c910b525ecbc01"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "e8938e8e0b126f8b55c25fa8af6ae7cd"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "8ad517fd6ec694ff41a9b42e921edbe3"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "3593542bf9c547d90676a5d2109ee595"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "2489d6c9eb517d008e0d6bcf985d1eb6"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "965fabfa05995ed77884b4b6c651dee9"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "0d4ccd2728c9432a69032056230a7d87"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "e1c355ee45f21534d611abe9a3f5fc5d"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "0b1e9cead0bc7dc9a7447db8c23732b3"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "7ee6f15979e7736e3cf8746d315f8329"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "5073c880d978976ba71abfe17c831850"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "eb70edccd565dbcfa84d82a0070bfd59"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "ef54adbb098bf612762c8604865abb43"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "fddd07fb98ab91d862e9932545be7349"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "e445ac05b67c35532e4b903fa1b39c9f"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "20e946983f49f986ff9a89147698dc8d"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "715d6aaf4258087215b4703460e8820f"
  },
  {
    "url": "assets/css/0.styles.23c2976a.css",
    "revision": "effd32411a8580c15d43cc8dc8faf77e"
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
    "url": "assets/img/1.3.c2a7d4f0.png",
    "revision": "c2a7d4f0c30bd4433379a935d20abb23"
  },
  {
    "url": "assets/img/1.4d41cdb6.png",
    "revision": "4d41cdb6e14be7289eb00da95d3a7572"
  },
  {
    "url": "assets/img/1.9b569a0b.png",
    "revision": "9b569a0b0a7885076265c930bfe6daff"
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
    "url": "assets/img/ajax.1ac8d026.png",
    "revision": "1ac8d02616721e5be13ff663bb62665c"
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
    "url": "assets/js/10.e732b922.js",
    "revision": "317905844b0038f4fbf626db7895cb5f"
  },
  {
    "url": "assets/js/100.9808c338.js",
    "revision": "37c5d4be899f020b1cefe04fb9769a9f"
  },
  {
    "url": "assets/js/101.7e2c0e22.js",
    "revision": "243db2af044ba1228555e415390b6445"
  },
  {
    "url": "assets/js/102.9e6549f4.js",
    "revision": "63cd7f4594d63b30369e71903642870f"
  },
  {
    "url": "assets/js/103.54c4bccf.js",
    "revision": "6e18a3ba8ad74b20934ca6f5855efd77"
  },
  {
    "url": "assets/js/104.75bc56c3.js",
    "revision": "3e5d307f50e70c6e5b32d05b241f1e2d"
  },
  {
    "url": "assets/js/105.7f9e48ce.js",
    "revision": "a1294507b09cc028c448b5f859a32d02"
  },
  {
    "url": "assets/js/106.2ec98ef1.js",
    "revision": "735c6428208b7f95bee0dbea0f22c371"
  },
  {
    "url": "assets/js/107.05887637.js",
    "revision": "30961ab2477d922b6b0150003f367948"
  },
  {
    "url": "assets/js/108.2cab82b5.js",
    "revision": "7d472d2ae4a9d7a90a5fb5cc7c5cad59"
  },
  {
    "url": "assets/js/109.3240fb11.js",
    "revision": "2b1e60e02be9250d9efcaa3700482046"
  },
  {
    "url": "assets/js/11.53f0fe14.js",
    "revision": "15ec5017f807ff469e77530cfb700c16"
  },
  {
    "url": "assets/js/110.2b033fd4.js",
    "revision": "ff552406d57ca4aeecc45b1b671e29c6"
  },
  {
    "url": "assets/js/111.e52c7113.js",
    "revision": "95890c7498a5a14c5cebb4f042ae0b7c"
  },
  {
    "url": "assets/js/112.184fba5d.js",
    "revision": "a9170b22c54dcd26e0af3d328b26e2c4"
  },
  {
    "url": "assets/js/113.30d8a442.js",
    "revision": "2ede03e420eccb9774bcb9970c97f7b6"
  },
  {
    "url": "assets/js/114.2016e3e7.js",
    "revision": "e3d0368ff86759c686b42665a7977962"
  },
  {
    "url": "assets/js/115.629cf368.js",
    "revision": "7240640bf5260bd6d2a684856811b676"
  },
  {
    "url": "assets/js/116.a88a96ed.js",
    "revision": "d6e25df92cb3916620cc3cdb477ed950"
  },
  {
    "url": "assets/js/117.f9955bde.js",
    "revision": "70d7405e99ba0716312f4b8a0025e6e3"
  },
  {
    "url": "assets/js/118.f92c05e7.js",
    "revision": "99204df31f5478b1118eb0655e0ed2ab"
  },
  {
    "url": "assets/js/119.70d30bb2.js",
    "revision": "c0d286fe605af932189afc4ae7e58a1e"
  },
  {
    "url": "assets/js/12.5a57bdb5.js",
    "revision": "40e3f626d231df6abbae7740f26ef661"
  },
  {
    "url": "assets/js/120.33dc8e4e.js",
    "revision": "dab2cac0d89fa859658b8c22d1c5c5e9"
  },
  {
    "url": "assets/js/121.b189fb91.js",
    "revision": "3151a35d8c074ec3a21c269a841500f3"
  },
  {
    "url": "assets/js/122.bd78998f.js",
    "revision": "a9bd321928832b0f393944ca1f4251d6"
  },
  {
    "url": "assets/js/123.0db07561.js",
    "revision": "f056a5c97d888e62f7034cf031969867"
  },
  {
    "url": "assets/js/124.f8ce4900.js",
    "revision": "bd4421b38605d6ae8708ddec937cc993"
  },
  {
    "url": "assets/js/125.ef39494f.js",
    "revision": "f0f6f285d50cbbedd63f755c377d0dee"
  },
  {
    "url": "assets/js/126.2957d38f.js",
    "revision": "c48fa39470afaa00eeb0cfa36031bf41"
  },
  {
    "url": "assets/js/127.631fde4e.js",
    "revision": "a43b73cd781b67b778821e9536376047"
  },
  {
    "url": "assets/js/128.4434d34f.js",
    "revision": "b9b9a29d9fff1963bb8eac76d794abe2"
  },
  {
    "url": "assets/js/129.7384ea41.js",
    "revision": "247e9e5de74074c05690678eba80cb01"
  },
  {
    "url": "assets/js/13.3346f75c.js",
    "revision": "c6ed0fab0cf6aa11a7b0fb7e130b03bf"
  },
  {
    "url": "assets/js/130.fbfdc4f7.js",
    "revision": "d104d9efa808b0073a92017c9ba668f3"
  },
  {
    "url": "assets/js/131.14af9210.js",
    "revision": "e0c811dae2807cf2493c1dfd6f0ef825"
  },
  {
    "url": "assets/js/132.9ec716e5.js",
    "revision": "ff0a35d251fb27d329da74b5c2386773"
  },
  {
    "url": "assets/js/133.df282c2b.js",
    "revision": "5e3a35e8135dd6fb2b4103d712866a2c"
  },
  {
    "url": "assets/js/134.bfd984cd.js",
    "revision": "bb832ba9d06329fd7f4228ef5f09e4df"
  },
  {
    "url": "assets/js/135.ef35deb7.js",
    "revision": "01fc99ab30ae3337efdd3f2dcd518a21"
  },
  {
    "url": "assets/js/136.b4d3cc7f.js",
    "revision": "47087b11324c7b782fdc53cacd46d676"
  },
  {
    "url": "assets/js/137.ec0fe69b.js",
    "revision": "968d579b7b93533775098ae15d6c99c5"
  },
  {
    "url": "assets/js/138.0e8d38e5.js",
    "revision": "cf96d4bbf604d478ca8b277e542697f3"
  },
  {
    "url": "assets/js/139.a4c5090a.js",
    "revision": "f6cd9231de5bb68ab3f9ed190a884b2a"
  },
  {
    "url": "assets/js/14.1e544b87.js",
    "revision": "1256721c212c8e4c2f870299a203e00f"
  },
  {
    "url": "assets/js/140.8529d92e.js",
    "revision": "8f379dd9000c88fdc4681fa479d6ecf1"
  },
  {
    "url": "assets/js/141.deb95faf.js",
    "revision": "5ce9f3f89c0eb900499401ec81cae3b3"
  },
  {
    "url": "assets/js/142.907fe1e4.js",
    "revision": "03a36cd5c00bc7482cd6e17bbbb73d80"
  },
  {
    "url": "assets/js/143.9672e0e6.js",
    "revision": "2377254c7148f781f8685ed68d1e589e"
  },
  {
    "url": "assets/js/144.60944f47.js",
    "revision": "5dd38ab782dd3c89d054418abd8a4991"
  },
  {
    "url": "assets/js/145.7100c231.js",
    "revision": "fcfacc383a7b1c1a8139f95ab76ad9ee"
  },
  {
    "url": "assets/js/146.e655ca27.js",
    "revision": "206167198916b32cf2504ed06d00aeac"
  },
  {
    "url": "assets/js/147.4143c8da.js",
    "revision": "24f2b5eb720527eedbb365af86842610"
  },
  {
    "url": "assets/js/148.c70b4207.js",
    "revision": "a68c029656942f3fba63e1ff75226dce"
  },
  {
    "url": "assets/js/149.42c00a00.js",
    "revision": "4e1c3efd85d7b14e7a7925581f93dc3a"
  },
  {
    "url": "assets/js/15.4e2f3c13.js",
    "revision": "48d8b2aa867b369e26ce5181d2cbd636"
  },
  {
    "url": "assets/js/150.51597206.js",
    "revision": "e85b3816676c90d5f4577018ffdeedfe"
  },
  {
    "url": "assets/js/151.15f8362b.js",
    "revision": "9db4849d92d1f00b261098f0dd82307a"
  },
  {
    "url": "assets/js/152.5cd85caa.js",
    "revision": "5bae75cbc2c7c1df57187a169c4653e7"
  },
  {
    "url": "assets/js/153.a29d5296.js",
    "revision": "c0f3ef4020007036bb1dd85f3cb13f1e"
  },
  {
    "url": "assets/js/154.9aee0955.js",
    "revision": "111727fdcde568f21eec48d438d0556e"
  },
  {
    "url": "assets/js/155.30f7a551.js",
    "revision": "72f8f622f3b5b968e7e262d89361468b"
  },
  {
    "url": "assets/js/156.fbf6c55d.js",
    "revision": "0a55fde420a19e0e8f72ad4a0c34b5b6"
  },
  {
    "url": "assets/js/157.c1b4fe11.js",
    "revision": "2f1b1ae39bd2387d425a6d1f5b6ea690"
  },
  {
    "url": "assets/js/158.fef07fdc.js",
    "revision": "41c9ad79939a06dea7ec104e22df98cf"
  },
  {
    "url": "assets/js/159.ca1bd4fe.js",
    "revision": "20d61a6f2c03e2167347808167ea7a33"
  },
  {
    "url": "assets/js/16.2438accb.js",
    "revision": "56d438329478d880dc242e90957459aa"
  },
  {
    "url": "assets/js/160.1a138a80.js",
    "revision": "133d94209b3dd22ccdd31ee4483221a9"
  },
  {
    "url": "assets/js/161.4720b1a3.js",
    "revision": "fc97d507d9a5ba7aff63ae9880763352"
  },
  {
    "url": "assets/js/162.fb515bfd.js",
    "revision": "1e0ba5c395e24210a4b308266cf5debf"
  },
  {
    "url": "assets/js/163.2db46b3a.js",
    "revision": "5634a5d057444de506b6c949587c3d4a"
  },
  {
    "url": "assets/js/164.8aef03c2.js",
    "revision": "97a47f588c962384fc204a31ce262f25"
  },
  {
    "url": "assets/js/165.8e5a2156.js",
    "revision": "39e916efe222d6597475982c51ac5c21"
  },
  {
    "url": "assets/js/166.c3c52eb5.js",
    "revision": "8375e3d5a2b59e1b3f9719bad85a6169"
  },
  {
    "url": "assets/js/167.b78f475b.js",
    "revision": "ac6997f89db7174295ad44bd1eb03263"
  },
  {
    "url": "assets/js/168.ff2b051e.js",
    "revision": "d7c2fd8dacbb572fc21e54626798fb0d"
  },
  {
    "url": "assets/js/169.464b692a.js",
    "revision": "4190a06ea06e5faca38de743b03e3f1c"
  },
  {
    "url": "assets/js/17.b43fd237.js",
    "revision": "4521cf581727a25e97f68f192e7ee749"
  },
  {
    "url": "assets/js/170.6856a394.js",
    "revision": "19d539b0be7c6451a0981deb952bb8bd"
  },
  {
    "url": "assets/js/171.9b686f3f.js",
    "revision": "e43d875e6d13195f2627618ca707ad34"
  },
  {
    "url": "assets/js/172.5c9d9814.js",
    "revision": "70652e8d8dc21d560317a1a43e367c8d"
  },
  {
    "url": "assets/js/173.1b3148c4.js",
    "revision": "5f321d2b203c19f6ec4aff507bfa2bbc"
  },
  {
    "url": "assets/js/174.4bf7f797.js",
    "revision": "6bc7c5ed85c21ebc82d745257cf19ac7"
  },
  {
    "url": "assets/js/175.a35f6348.js",
    "revision": "0611f3758639390a0b70bc8871c947ef"
  },
  {
    "url": "assets/js/176.6db0dde5.js",
    "revision": "bb138efeb9a881b7cc546b6d3367c3a1"
  },
  {
    "url": "assets/js/177.3ad8096f.js",
    "revision": "ef0cf57ba305606b2f5eb93c356b0894"
  },
  {
    "url": "assets/js/178.b259569d.js",
    "revision": "d08cfbadda3a9beca98bbf446c93b06e"
  },
  {
    "url": "assets/js/179.bd1d145c.js",
    "revision": "d96cc5f05fd451b217ed2a114f500f08"
  },
  {
    "url": "assets/js/18.11bd1ef7.js",
    "revision": "7d9389dfb3870cbb1c7b5a044f8738f8"
  },
  {
    "url": "assets/js/180.0b6d9f75.js",
    "revision": "7b9c154045d5388d7cb7062389957205"
  },
  {
    "url": "assets/js/181.438e1bfb.js",
    "revision": "6a038da92b139ec14286b35272eae9ad"
  },
  {
    "url": "assets/js/182.d9731a68.js",
    "revision": "732016568e42c3685e154a46030822e3"
  },
  {
    "url": "assets/js/183.766e83a0.js",
    "revision": "67cdc07f4a1539e95b8b74c5361624f9"
  },
  {
    "url": "assets/js/184.b1bb91b5.js",
    "revision": "2c16e9049d6a42ac398e4210ab8e7a9a"
  },
  {
    "url": "assets/js/185.8ab754b2.js",
    "revision": "d080d6a7bd5f8bef0fd651f736a28667"
  },
  {
    "url": "assets/js/186.30657c9c.js",
    "revision": "0a580b3d1569bdef061fdc6f7b105efc"
  },
  {
    "url": "assets/js/187.b09a0ef4.js",
    "revision": "94f079cf8930897d3512d1a056ebd415"
  },
  {
    "url": "assets/js/188.938e6d82.js",
    "revision": "33aaa84e884ce1889a791d6752089536"
  },
  {
    "url": "assets/js/189.9ed92774.js",
    "revision": "9362a3c239bfcfb2306ffc5b467f3200"
  },
  {
    "url": "assets/js/19.bce0c851.js",
    "revision": "6f1b14dd2c76c0cdbaee8cc769af4eef"
  },
  {
    "url": "assets/js/190.120d9c61.js",
    "revision": "5034f8159d51fb4d11a41d4eb0443562"
  },
  {
    "url": "assets/js/191.a30eff09.js",
    "revision": "e615f1cfb1a44065ea98d46ea77629ae"
  },
  {
    "url": "assets/js/192.92eff954.js",
    "revision": "6fc19ecbe29ad9a190446d846388b133"
  },
  {
    "url": "assets/js/193.9d8db1e3.js",
    "revision": "acd8aed1936d2391a7b9d8d1b7af85ab"
  },
  {
    "url": "assets/js/194.61293459.js",
    "revision": "142825e10e85852ed0397997842c8396"
  },
  {
    "url": "assets/js/195.918224d2.js",
    "revision": "296e8d3d5fb0ebcecbe3c648b059596a"
  },
  {
    "url": "assets/js/196.79e5dbea.js",
    "revision": "acd48a9ef2b8bf791889e13a0f3d8852"
  },
  {
    "url": "assets/js/197.bb598859.js",
    "revision": "c9f9566c6ba8871c64ff868e33b1cae5"
  },
  {
    "url": "assets/js/198.31eea1f4.js",
    "revision": "f4f721e2b5d7daa387c157c451469de3"
  },
  {
    "url": "assets/js/199.7e8e9177.js",
    "revision": "a2a77187c7b526976701da26f81b98d3"
  },
  {
    "url": "assets/js/2.972ad77e.js",
    "revision": "211cf837278e361f4762027412fe78f8"
  },
  {
    "url": "assets/js/20.5a220130.js",
    "revision": "330d9e817aaf645360266319e95c20d9"
  },
  {
    "url": "assets/js/200.3238b2d0.js",
    "revision": "703cb18762f32ec0651bce0e3ad7c87a"
  },
  {
    "url": "assets/js/21.eccef353.js",
    "revision": "4b917d0d026b94c9e309cb28cd473fdb"
  },
  {
    "url": "assets/js/22.02d712ab.js",
    "revision": "b0afdda348e1e8d7f3d232e3767c125a"
  },
  {
    "url": "assets/js/23.572b4d7a.js",
    "revision": "1aeb13b26745a27869a7c13690190835"
  },
  {
    "url": "assets/js/24.b9df89c0.js",
    "revision": "4d81bf0325b3e92df4630fc07bd4a734"
  },
  {
    "url": "assets/js/25.e9359fe3.js",
    "revision": "9d6a0b7be828b9f2f10e2c30d3294c7f"
  },
  {
    "url": "assets/js/26.775c54f0.js",
    "revision": "92239ca92a43a043d505d1fe9465aeeb"
  },
  {
    "url": "assets/js/27.9a197a0f.js",
    "revision": "619470244e1f384efc018f559d9e784f"
  },
  {
    "url": "assets/js/28.c53047d2.js",
    "revision": "eaf5f5dcf4108876500e77e919724d69"
  },
  {
    "url": "assets/js/29.7b861281.js",
    "revision": "7ba9eac0d7097da782f8545894633b8b"
  },
  {
    "url": "assets/js/3.d3c65411.js",
    "revision": "eb1d9542d3986ed971bbac099a1b09c3"
  },
  {
    "url": "assets/js/30.706a5926.js",
    "revision": "9b27874941738eb19f5e8a1e4e9e52d5"
  },
  {
    "url": "assets/js/31.78f40882.js",
    "revision": "bba1b13c572823af22a9be4173334f6d"
  },
  {
    "url": "assets/js/32.b92e49c2.js",
    "revision": "c898c591e5701c4c37d8e45f47cdb267"
  },
  {
    "url": "assets/js/33.e14aee6b.js",
    "revision": "148cebda7b3b67696195a3edfaa2093d"
  },
  {
    "url": "assets/js/34.ae189083.js",
    "revision": "52ec2c45a5c0b7e318678543fc15c08f"
  },
  {
    "url": "assets/js/35.1709477d.js",
    "revision": "c4e67daa16c6c87696463a6dfefec37f"
  },
  {
    "url": "assets/js/36.14d8e660.js",
    "revision": "fff7c47869278f2b6a29cb709348fbe3"
  },
  {
    "url": "assets/js/37.6cd30145.js",
    "revision": "571a0579ecf6b0508a31668181f7dbc5"
  },
  {
    "url": "assets/js/38.e7440b61.js",
    "revision": "3e1bee5a109d485d3cfab5c043fb5142"
  },
  {
    "url": "assets/js/39.7ac10266.js",
    "revision": "e2a0f66803010862c145b41f1b5a7732"
  },
  {
    "url": "assets/js/4.0e9173c4.js",
    "revision": "08a7098437031b9600714c5f2cf5f681"
  },
  {
    "url": "assets/js/40.64d47afc.js",
    "revision": "5701abe7e77303932a84bc60b8e1aa15"
  },
  {
    "url": "assets/js/41.56985e5a.js",
    "revision": "6c8a9d71ccf7e46171b199b7cffc6bd2"
  },
  {
    "url": "assets/js/42.05bec931.js",
    "revision": "3a1ac6d1a33170844dd197276b633a4d"
  },
  {
    "url": "assets/js/43.d40c9a7b.js",
    "revision": "e8223b8957c6936064af1e089ecaf0fd"
  },
  {
    "url": "assets/js/44.d669de7e.js",
    "revision": "8fcbb14ee68bb48fac6dc51b52a6a01d"
  },
  {
    "url": "assets/js/45.5cb11a82.js",
    "revision": "73cb6438142368b68636456efba24b2a"
  },
  {
    "url": "assets/js/46.5e4cb761.js",
    "revision": "4b181d6ee1fda4d21b4bb96e1851bff1"
  },
  {
    "url": "assets/js/47.9c5f7337.js",
    "revision": "732b4af42479f942e42a33a4968954f7"
  },
  {
    "url": "assets/js/48.35d2fb34.js",
    "revision": "13e92429b39c72491b4d00e24c736272"
  },
  {
    "url": "assets/js/49.872888fe.js",
    "revision": "1eb65a4890cde66ea10b8a62df39fa78"
  },
  {
    "url": "assets/js/5.a0bcb2fa.js",
    "revision": "31fd1f49eca43afe051ed1b9fefa4363"
  },
  {
    "url": "assets/js/50.d3e4702f.js",
    "revision": "3658920d0cc80f50b810703078df965d"
  },
  {
    "url": "assets/js/51.ce0cff26.js",
    "revision": "1079db881a5969c505a32e32cd88d90c"
  },
  {
    "url": "assets/js/52.dd778999.js",
    "revision": "0ebeba1dd3ce04d95d52972e44bbb349"
  },
  {
    "url": "assets/js/53.ccdfdb8a.js",
    "revision": "396418a72aa3e7afbefd776ed832be35"
  },
  {
    "url": "assets/js/54.6dcac963.js",
    "revision": "ebcab2fca95346ab6af4280a8f224403"
  },
  {
    "url": "assets/js/55.58fe056e.js",
    "revision": "3f6e125d5d0810cb26b784e873c3f16e"
  },
  {
    "url": "assets/js/56.9390e286.js",
    "revision": "809562838babd2b467b2257457b5f118"
  },
  {
    "url": "assets/js/57.a1f73f22.js",
    "revision": "e742d1e6007ff3a2fe981c63951cf3ae"
  },
  {
    "url": "assets/js/58.9a941285.js",
    "revision": "54a63feeb93e8572fefe15b1d84401ab"
  },
  {
    "url": "assets/js/59.b7e1a166.js",
    "revision": "8b2abfa195c8dce073c7386ace933caf"
  },
  {
    "url": "assets/js/6.a6d94db1.js",
    "revision": "4a10f948e0409e2da6ff40040558a255"
  },
  {
    "url": "assets/js/60.5f91de6a.js",
    "revision": "b2a87de896f97953c5b0be2694b684e2"
  },
  {
    "url": "assets/js/61.5c75d351.js",
    "revision": "d349e1a34eeeee42832d876d694f9498"
  },
  {
    "url": "assets/js/62.e2397b08.js",
    "revision": "4c29b843b0e764e432baf633e93238df"
  },
  {
    "url": "assets/js/63.ed8844eb.js",
    "revision": "49cad5f128cd905f91f9726ba2731540"
  },
  {
    "url": "assets/js/64.d8b2c2da.js",
    "revision": "3c15e4a7320ad17fc1c7a6c271e93aec"
  },
  {
    "url": "assets/js/65.5aecaa3a.js",
    "revision": "2dbed775f36d6ae73f20905224591bee"
  },
  {
    "url": "assets/js/66.538dafed.js",
    "revision": "5704bdfee5d3f4b74c052476b238704f"
  },
  {
    "url": "assets/js/67.30daaa64.js",
    "revision": "8e3b527cae9b285c1bdfcc8526e4060c"
  },
  {
    "url": "assets/js/68.19437c65.js",
    "revision": "67187d26df4d2805c75ef23a736298d2"
  },
  {
    "url": "assets/js/69.10013bd1.js",
    "revision": "95bce92751cad658a0f40ad5c5374977"
  },
  {
    "url": "assets/js/7.53935bef.js",
    "revision": "4945795e1ec2101def2df0fc36a0737d"
  },
  {
    "url": "assets/js/70.76444ebe.js",
    "revision": "5c1a5aefc3e4d9c46387a0b9e9814d9d"
  },
  {
    "url": "assets/js/71.47190dba.js",
    "revision": "d39f221e94eba3975bceeb15c94a3a7f"
  },
  {
    "url": "assets/js/72.e855e640.js",
    "revision": "00e4dca74d97b7cda18bc0d0ed007e59"
  },
  {
    "url": "assets/js/73.81731735.js",
    "revision": "67f392fa64680a5dec4b2bd66e3ff9ea"
  },
  {
    "url": "assets/js/74.c20d63c6.js",
    "revision": "695bdf44997377526d14c7324880dcb8"
  },
  {
    "url": "assets/js/75.30618af2.js",
    "revision": "c44a2a70ae4ec0bee19cd5513409f664"
  },
  {
    "url": "assets/js/76.596d32dd.js",
    "revision": "565d2adb051969f03d843a59b311c4ae"
  },
  {
    "url": "assets/js/77.cf9acc3d.js",
    "revision": "88fbe46aeb4a5d13cee192bc21480cab"
  },
  {
    "url": "assets/js/78.d726b0f5.js",
    "revision": "0fa25fe98a2ac6d8c1a1e8ab5d4f77f3"
  },
  {
    "url": "assets/js/79.1f6c1934.js",
    "revision": "575988bc655896f97f559b9cd8a6867a"
  },
  {
    "url": "assets/js/8.109b005d.js",
    "revision": "9836b20832f1919b6b216edfc5b596aa"
  },
  {
    "url": "assets/js/80.c4a26341.js",
    "revision": "b5be9b906e78761c660aa6a8ca5fd038"
  },
  {
    "url": "assets/js/81.4fe3a16e.js",
    "revision": "1481728a940c19b6318ceaf8735d3221"
  },
  {
    "url": "assets/js/82.b62eab13.js",
    "revision": "a74810ee90c71f5ce9a9a3c7bbf6f927"
  },
  {
    "url": "assets/js/83.3a63ce39.js",
    "revision": "f2d3fb317eac047f73382bf6f7739a91"
  },
  {
    "url": "assets/js/84.e733db37.js",
    "revision": "b95be9e982139fef49d553dd2c902061"
  },
  {
    "url": "assets/js/85.da4d259d.js",
    "revision": "8a6ffe182e41c2d185f926d7152549f3"
  },
  {
    "url": "assets/js/86.c36712e1.js",
    "revision": "9de4087f061bbe3bfb9779b543bb8d28"
  },
  {
    "url": "assets/js/87.9d17aabf.js",
    "revision": "fc320528b5562ccaaf58f47f61f49c46"
  },
  {
    "url": "assets/js/88.b0b09dbd.js",
    "revision": "09f1c6f2501c26255111796e41a2b868"
  },
  {
    "url": "assets/js/89.72efb6cc.js",
    "revision": "87380ee672ce74c839892e976f2dd019"
  },
  {
    "url": "assets/js/9.08e940f3.js",
    "revision": "82a76a2d947e696591a298c23e5242bc"
  },
  {
    "url": "assets/js/90.c9d947cd.js",
    "revision": "eb5f8d085874f3c31d4822f962d8d46d"
  },
  {
    "url": "assets/js/91.0b393e0b.js",
    "revision": "4803cc154ea5774d3549d9f5c06d830a"
  },
  {
    "url": "assets/js/92.fc83f9fc.js",
    "revision": "798158dec6d784f0bc042140de9f84b1"
  },
  {
    "url": "assets/js/93.db664637.js",
    "revision": "1c50bcffc9e2eae6392743faee638c97"
  },
  {
    "url": "assets/js/94.773883a1.js",
    "revision": "9528411d4e1f9f682dd968e52e1d2618"
  },
  {
    "url": "assets/js/95.3777e1f4.js",
    "revision": "ad6d316fb5a385286219e107a3132b3d"
  },
  {
    "url": "assets/js/96.ba4d2bd7.js",
    "revision": "b5b60368e56cea469885c03ccefb8288"
  },
  {
    "url": "assets/js/97.898ed6be.js",
    "revision": "566e1721b413995e67cf6da14821e1a3"
  },
  {
    "url": "assets/js/98.acdf538c.js",
    "revision": "931df7802c7839508502c61e2d918728"
  },
  {
    "url": "assets/js/99.b76c78f0.js",
    "revision": "7a472a60fcbf26be494fc12ba2ea331a"
  },
  {
    "url": "assets/js/app.d3cd88e9.js",
    "revision": "5c35fa1013b4ce1a13ece3bf1bb72236"
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
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "c9adc0a32aefbc3965688896be5c139a"
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
