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
    "revision": "bd8364e12da77239e95cda3648cf6d22"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "0a4febd8d2de1c1b77c4cdd85893bb53"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "95ead68ca411aeb3a9f5711a0fb87df4"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "4bbdf21d83cfd1a4d82d6f9c5559d6c4"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "3562a27cade63a50ba3a1a316456a9f1"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "07dc5eb35801ac3979ee236243b9b75e"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "3761c15f872dcc2d3ce11c97b1ca8e2e"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "b20893e2930b4329e00b3c2c20300268"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "b8542c3e27280ae6a47bb11c33fbef57"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "0626fea1b1f8fa6aa9c3df3f38e0c632"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "b726c83c7b1cd9e605cca94942e36c62"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "8422d540be5e6fc617c6b4c34e83462c"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "e57cf8885ce9cdb0c7a468656b85c5f3"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "13b198f15e34bdb4f3ae2ba9844656d4"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "c337ca26b14da889aeae892832274ddc"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "50029779c919d01c6b739186b83880d2"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "7361ef22527bcffb034f5276dbec8160"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "f790ba2a9bd02bcd95b59bc734bb03bc"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "98cf9718d926c214491687a3a130b537"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "e24666fe76dd92ab0ae934849bb38758"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "cf1da2d09f18ebe8138b2899a6587c35"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "aa918683245b5b3a6dd6916d75807d14"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "8a292d52a474d3e98feb0306106c9459"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "a7c684ebf4502bd34fabe926beb3251d"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "da718e144df6d648c67e7f4b0ef6da81"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "8214309738b3834d2fb160e17815d6de"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "8800bd17ba1f23caa2cdb6c95de9f884"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "058fbb27bae19ae9cce32e240f3ef5e3"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "5ac911d869f845714fcec63828d909c7"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "7fe7dc495e5ed6b81863b843c49b4032"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "c70098d8b4c03481fb12cd7a5a732a2b"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "637c9cb0f8c047dfa89fc91a9fd5edf7"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "6959597a419376a4e3a6301e4c8ac842"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "f24c3c6d76b045d3d789f3a2d987a400"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "6d6e7cd31144e7bebee2b0acf155a819"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "a548f59520152da3f83069f708657f08"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "c805fe31ad2d99a177939fa9717835a0"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "f6410dc2919f29a9f093db822b36ba68"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "c65974b5d11ad32fd5466a0ee095128f"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "51060cf80a380eb9ffa31b68b9ce5d95"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "fe97dc225f27c8b957824da7d73ecb73"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "1c95aed87cebcb1835748aac29c41a89"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "9d98307593c5a5ff44bd1c8eabb31fdc"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "bc91de079f4c83f50f06dda0705baa89"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "afbb93ec267d32f170a9809e3f28469e"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "66297f16d3bd1193420c2ed35ec598e2"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "ea33304fde60c57a14d0d6a0577cead4"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "50264d1c6566db2875cf1b2a9ca42bbf"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "2be6aaacbbe8fd0f9e3488b8f9742887"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "589d8211b7839c8a9fc327ccaff36a84"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "52d78edbbab54af52b8438f169ec8b8c"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "fb389aca82b9745620d6adb00c8802ac"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "78d10d31a4d2d954ebc9d8c21b044894"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "c159428f9b921b3e459f5e2bd7e0b94d"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "bad0beef319520b04d9095d54cb970aa"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "24fe9d401192d361c9972d1f5498fe6d"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "2fa70e1a72761b7548ec16c46c158afa"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "822021de09f58329d8c2d45e1af37bf0"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "f6a3787a3ad506ddc961c73fe13ad2ab"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "6b0dcf3c0dfdae36a69d8a1d608b0550"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "0f773d2495707dcaa7639ad15cc6d1b3"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "ce2128340212610d453a0a2b3dea7373"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "4642b191d4774c337fb8846fcdfb2d29"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "74679c994619c3e121cea415ec2f5c80"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "140844c975052f888bfed0baa871d67d"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "ab05b186353de7350a86f9378d29b89b"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "ce7b7f787a35d68d67d00526a94477ec"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "40a0c4c1ab5021f614f4c3e3f352c998"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "c83e7de6378f50dde34767025e0ecc94"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "8b9e8f0c5fb3aa80fd3b2734492c91f9"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "341b934f8b545cebe93eca35d4cbb8a2"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "776352e879b91bb48f62159c34ffcd21"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "0daf2666f82fa5ad6a6d65402a7bd5ae"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "7bf95367419caec9cbbdaf1319f0331e"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "f19926e84170346b8c00e56daf904bbc"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "36bc815817408fa8236d2659c108ded6"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "2fb466a9bc3e6de7ea8dbcd620edf726"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "c567d86b4df14c3ba8de02c0de922884"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "bfdbff5d333d6e936aad256fd0ebe2ab"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "2703d9ab3ada3ce8dba9c533c8da75b9"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a50b5dd4e0428f5357dff29c50d70667"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "7584017868f075db3e2fe13d0e5c065c"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "d8299073726a5afd262bfacafa916236"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "6e3db4646a94342930a77f7b537fa2a0"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "3fa4feb0cf8a7ce158cd5631dfa5576b"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "0cfd7bbb9d9fb9f5c998a601bfc28588"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "324ccad7695ff7d5455b46a20d61fc78"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "8b410b8993a6d99483a3ab05b39d1364"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "79baf5a6eb1aec83ecc730dfaa089491"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "75816ef26531a3882f15eca7609a63a5"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "b7783b98affccf5e75fc28fc1a977dbc"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "4bf682c8d1407047d98047c26f67aeec"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "8b59bc3802e9f8aac224f03c20a9f7e7"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "9207ab90fc78e036a0bbdcefafa53e3f"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "28f7fca364538832dcca28b6e382b379"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "e64af86b95ba5b8121af97912efa7c6b"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "128e549943c8801d2760771afbcb3337"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "3dc0db0e1f10b34a1715b1214d555d33"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "0479385480b1529b622eb56c22531be6"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "d8b15f9af450da0822b94e6cb5639123"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "35c78862a9732c0f0883732c3430a659"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "d264c6d1149c58bb3b8177a30b9604c8"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "6638a3998b0c3d87fa2c83a35f554a3f"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "7356be75d49f37c4b34bed70be284724"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "2c6238760ea263b0007c2b4efd7ba134"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "28786e24c083995b1d0803268f2cfba7"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "709c7c64178f6739e43904aeb2cbec78"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "e11b85af49b1145ac831258d19331dc7"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "88e0bdaef17fd3e45f21855e89e0a88d"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "b9355ec59f4395069b7235902a7b0ff3"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "811f31d5ae9474f16cfffc2143e9d8e4"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "17ca8548214ec5c573fe9f330bd2b9e8"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "d8a264123128b4ce4be7de9f63fd262b"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "33f2496bc58ec662a1d9a8b06d76c71f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "c2e425eaadf5998f67260f51eb95fb0e"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "7413f5d33ba28c293cd9222620027fb6"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "cf419c83f6bf247561eb8f0e261b052c"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "cfa81c3e73e7828459e62397186b6284"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "db4c3b8ec6bbaf754fc604804ab4f5ae"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "01fa2166e616411717d44c2e0c0fe0bd"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "e0c5685f3fa8bc7ec822c657ddafc1c5"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "2ed9a8f72bc08b3c6aae5309d17d284f"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "12258d486b72669c6aada2e8b30cd8fa"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "76cbfe7cb8f7e0ccc29772b680ba0be7"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "c73e40243ec12289ea994e1eb6793541"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "3163e1a3821bd45e4035a39385370660"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "d9ef2d5b68460801b0971511de87cf92"
  },
  {
    "url": "404.html",
    "revision": "fc997709a6cc5d6cc7b39e61a50ea4ff"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "e2f3c95186e18e6d45511a5fe5cf97d5"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "b34ccd1740894e7724af8d1a58e62944"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "b61fca274e8f27f23fe35eae39d192c8"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "ee8224072c2a1abb69ff23e8cff9f179"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "93bff613e179c0d97b77ef49b22fa895"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "42d18e9e4d497c5746d8e1a1f11a066b"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "1ef090e4c14335b3a77a750605195a46"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "b2ae5ff219305519c86c52b91bc6c814"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "e61ff4b5b9ecbcadc1bff11dbe8e0d69"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "1e724e90133a48bce87fdbc082645459"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "b90c2b84b1d282b85a681db641c549cd"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "d3a55301c7e04197e308b9a3c23f517c"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "ec356b0f14b1bac932ad703c5f822eeb"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "6e6da6bec02829eef85033929a270354"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "ced6ccd9f5783b94b2acfc7e14e62f72"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "e1625599c2775aa87e13f45a4d18f4cc"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "8399bb515afe364663cacd68fbc0d0af"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "61fe9e377511340871274d97e5235e47"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "2accb7e18e4aeda3d197dff976d141c4"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "5882f614390b25e1d3677f1ee8b0f530"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "4315f7526ce273f1d9ad3357674b81d1"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "67b0595db9ebe3e7068308f439da1465"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "2aac9fc3ec89907f8456b00649131be4"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "870822abc247d22cf84009b769757ded"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "1b95d61b43fd5d452ad2d6f9929e4847"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "02da71dec073322d791268310980226e"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "24963996843e86a1c0a2adebff9c8627"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "ce77d02c035d2161f2adadcfaac00bf9"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "d8058eb2f888a5eb71cb99d8004cf34f"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "1051e9fd9801bdd4b42621d36f27f404"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "50bcdd585145bf171b43e7919eaa73a2"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "b90c06115cb514552777ca8f9fa72262"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "923757643bdcc471d82c1e39b02e79c0"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "691a2144092c4e8a305a1a5af0308e25"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "895223f7fe17c9f9f40e59f23c8060a4"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "74a2cdaee1d2734d39bd349a530d7d2a"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "7f2b5b0e3ce76e829a47770598690da3"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "cfd860f0f2001d0f693550d203af2071"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "9b4fb4b773ef7bbe6512a8a0454ea88f"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "028f158c1d6f411aeb9dddb5cd4662a8"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "e6905628c4f4b2a1cae9ed644fd1f9d4"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "6b30d0b3c16fd8be2ac84ef7c21fc5e4"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "008b0dede7a407ca0e58192db6faf14b"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "213f4a52fa3f7d67523f47ce17e8cbe1"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "b19b25336abe7970deef3b7218e182f8"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "4e0645f65fc1d3186faa46a2d17d3a75"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "f5d5c44ea990a806a12af0a7ad5ee2c1"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "ac8353eff906ed747d7883f3f5ffbd6d"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "81a79d3b8ad7e51fba04cf1fb01f8b1c"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "e69e38449ac4e7583eb439daa194c78d"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "eefeecea1b16a2dc71f7ccb139f2e7b1"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "d1245f6e33f7368dd2ea81e1043ae03e"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "17f4f9db81a6869cd41bbaedb322e136"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "0ea893698bced1513359081eb6ef0777"
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
    "url": "assets/js/101.18e2af7f.js",
    "revision": "db02b686c54217834b6719bfa9640f0a"
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
    "url": "assets/js/104.62e90cfc.js",
    "revision": "f7c02e2449aea325ac4ae0fd4cfee9ae"
  },
  {
    "url": "assets/js/105.4e4c6904.js",
    "revision": "aab0846d80fd909c7f76c736237185a8"
  },
  {
    "url": "assets/js/106.41f6b9ea.js",
    "revision": "3af263b9506a48891a7c154d0cadbe18"
  },
  {
    "url": "assets/js/107.e0dc69a5.js",
    "revision": "db71a90a027513efd558237faf527c8e"
  },
  {
    "url": "assets/js/108.c8a5f366.js",
    "revision": "6564e6aa437afbfc9b25c7e15537d42b"
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
    "url": "assets/js/113.2d603055.js",
    "revision": "34592c2ca456c4ce9f852d8a00b1d832"
  },
  {
    "url": "assets/js/114.b72aa3a6.js",
    "revision": "15a6fa983c5aff79728be34418076c52"
  },
  {
    "url": "assets/js/115.451fbb33.js",
    "revision": "d779265aef2ce736e22d2fe80c16e96f"
  },
  {
    "url": "assets/js/116.658d1cda.js",
    "revision": "7922f18d020f9fca2b53c2d7353978e9"
  },
  {
    "url": "assets/js/117.daa4b949.js",
    "revision": "79fc302f54e030f37a24f4dd1bca0917"
  },
  {
    "url": "assets/js/118.3589e8da.js",
    "revision": "c6bb92d839068cd7be2e9f3c2b295498"
  },
  {
    "url": "assets/js/119.91c7754e.js",
    "revision": "8241335620f4ca2e7cfd1a78af82b792"
  },
  {
    "url": "assets/js/12.7dcfb5de.js",
    "revision": "fbcf3ddc48ac2073d7f967bd2f64003c"
  },
  {
    "url": "assets/js/120.f1a4dc29.js",
    "revision": "aa9b2850cf16005f4a41d5da07f32846"
  },
  {
    "url": "assets/js/121.cd525b00.js",
    "revision": "df45ff1df0247765ca70ab9ad8c89198"
  },
  {
    "url": "assets/js/122.1d8a9e93.js",
    "revision": "00ea9c381ef69fb25a82d4b879da4541"
  },
  {
    "url": "assets/js/123.86e204ca.js",
    "revision": "2b103f5a9b65d10f1906b8712024c2e1"
  },
  {
    "url": "assets/js/124.4378d0ec.js",
    "revision": "3c5ce27ccc83db4c9c8996758278eb47"
  },
  {
    "url": "assets/js/125.dfb57f62.js",
    "revision": "9e47d4efb5d735733ff9d4d16e319e5f"
  },
  {
    "url": "assets/js/126.06cd9409.js",
    "revision": "16d08b69012f925b62ab6c80ca007ed1"
  },
  {
    "url": "assets/js/127.54144a39.js",
    "revision": "639cd8bd90bdbc02bcb489fabcbb44ec"
  },
  {
    "url": "assets/js/128.f5989600.js",
    "revision": "05aed21fc20a567791450d7c09bea11b"
  },
  {
    "url": "assets/js/129.dd5df8e1.js",
    "revision": "d356bb52d0c831cc784cefe9d20bae1a"
  },
  {
    "url": "assets/js/13.7a9078a8.js",
    "revision": "b5b89bbbf5231fb4d30b315acbf1951b"
  },
  {
    "url": "assets/js/130.6abb9efd.js",
    "revision": "62873530c4a232bd2d255adfa00ef68b"
  },
  {
    "url": "assets/js/131.685f6e1f.js",
    "revision": "97aa38ad53980704cf32397adaed01d1"
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
    "url": "assets/js/134.94ce2c23.js",
    "revision": "d6325b303378cb753697effbd4d62ac7"
  },
  {
    "url": "assets/js/135.55824ac4.js",
    "revision": "4a5aea5923b3da46805965be7e4a3a7c"
  },
  {
    "url": "assets/js/136.6d02d7ca.js",
    "revision": "6e29e72e0e7b460208535589079f43fc"
  },
  {
    "url": "assets/js/137.71a12aff.js",
    "revision": "e42a249e7bc74975531a6785f41bbb01"
  },
  {
    "url": "assets/js/138.b47f2f8b.js",
    "revision": "32230323b957a6be43c894ee9dfa3a5f"
  },
  {
    "url": "assets/js/139.a30442c1.js",
    "revision": "621d8473d3235510feb433b54cb95c05"
  },
  {
    "url": "assets/js/14.3714f213.js",
    "revision": "ba2ebb2c7285b6e50f49b8a01b7ad2d1"
  },
  {
    "url": "assets/js/140.5434dcf2.js",
    "revision": "a3a3da79a0004521175d93c35c0622ee"
  },
  {
    "url": "assets/js/141.ff42de96.js",
    "revision": "5963d4a11825aeb63458a8c718e8e184"
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
    "url": "assets/js/144.b30598e6.js",
    "revision": "9cc38e20ba0603c9935666e45fe70bdd"
  },
  {
    "url": "assets/js/145.3b0d1e50.js",
    "revision": "189cc428f0491d146881e66c883bab8d"
  },
  {
    "url": "assets/js/146.88791b18.js",
    "revision": "f3a971bc44a5d61d1993bc6cedc886dc"
  },
  {
    "url": "assets/js/147.0960ed01.js",
    "revision": "6b0e5cda7a4df588b4255fa4596b992b"
  },
  {
    "url": "assets/js/148.083f5c0a.js",
    "revision": "5c737500d22291a690331ebadbd9f895"
  },
  {
    "url": "assets/js/149.3a5c9067.js",
    "revision": "ebaca7e6fd675f07b2f6947e899bf643"
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
    "url": "assets/js/151.6b79bb0f.js",
    "revision": "14b1f4946e47ae8ef830e3b530f6e283"
  },
  {
    "url": "assets/js/152.f310937f.js",
    "revision": "c4787acecdf08ffb1808ed89cfd7fa73"
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
    "url": "assets/js/155.5e610ee0.js",
    "revision": "6ac3ddeeb54885f0e59fa45544844ccc"
  },
  {
    "url": "assets/js/156.29c3b074.js",
    "revision": "45c71100a5400e516ed97a687f77dc4f"
  },
  {
    "url": "assets/js/157.c0c72142.js",
    "revision": "767fe834bc929c08ec223ddf9db2ef0d"
  },
  {
    "url": "assets/js/158.4b8e09b4.js",
    "revision": "710f9de3eb1f97f3d0daa3fd5b5fa410"
  },
  {
    "url": "assets/js/159.1321d561.js",
    "revision": "e160329afd9b2d63ed06abac84cb5f66"
  },
  {
    "url": "assets/js/16.29fb6f38.js",
    "revision": "fdeba6070884e91d5b96bfd52b549d75"
  },
  {
    "url": "assets/js/160.2dc50048.js",
    "revision": "f10258a0dd15314da9ec7dba3cb1d70e"
  },
  {
    "url": "assets/js/161.31733017.js",
    "revision": "681428236096fd976ce9c266240347f7"
  },
  {
    "url": "assets/js/162.463f31b3.js",
    "revision": "eb6a04dbf29510606ea0847cc8dc0724"
  },
  {
    "url": "assets/js/163.fd00174e.js",
    "revision": "b2425ba1ca31576d9a315643f375edba"
  },
  {
    "url": "assets/js/164.e64e1d80.js",
    "revision": "05846f300d435381f580d7cae718e233"
  },
  {
    "url": "assets/js/165.c2c3e501.js",
    "revision": "7ee0b710134da44a82d0e9547c785228"
  },
  {
    "url": "assets/js/166.1fee10bd.js",
    "revision": "42763e29dee84ce20123f0fb95740c1b"
  },
  {
    "url": "assets/js/167.827b5a00.js",
    "revision": "0a9c911df96f6415fbb34baad904783a"
  },
  {
    "url": "assets/js/168.96e649f8.js",
    "revision": "c0ce442ac396f092593f540479cc70ac"
  },
  {
    "url": "assets/js/169.140deeb7.js",
    "revision": "125c5f3f24914091660ea4c62ec732a4"
  },
  {
    "url": "assets/js/17.693871c7.js",
    "revision": "d2d304c303d292904723c0c689f0e9fe"
  },
  {
    "url": "assets/js/170.ab47fa84.js",
    "revision": "c5412db8fe50a8bec2c76112b1bccf26"
  },
  {
    "url": "assets/js/171.4588abd5.js",
    "revision": "b78fc63f548ddf2840cd9e99c476ec7d"
  },
  {
    "url": "assets/js/172.060bec6a.js",
    "revision": "2c51f54a267d17a6e7fb896b82d1b237"
  },
  {
    "url": "assets/js/173.ec907150.js",
    "revision": "0e234b08fcf4e346955618dc62db0195"
  },
  {
    "url": "assets/js/174.8ad9ad9c.js",
    "revision": "08e1ecc62b4d9c1d76926a46210e6ccf"
  },
  {
    "url": "assets/js/175.83197346.js",
    "revision": "7f1fa7e7b00a2695c03830c841ac5cf2"
  },
  {
    "url": "assets/js/176.cb9aa1e5.js",
    "revision": "f9cab39c2d8b6c35e2139265bf2bc5ea"
  },
  {
    "url": "assets/js/177.785a22fe.js",
    "revision": "241cbb741f0269d294879685563ca897"
  },
  {
    "url": "assets/js/178.9dfc5fe3.js",
    "revision": "6199c6778d872e84c17288eab23ab026"
  },
  {
    "url": "assets/js/179.31aa0b76.js",
    "revision": "e31657cff23953e54a88e4cc0ffa49d2"
  },
  {
    "url": "assets/js/18.e2b34fcc.js",
    "revision": "be1e69b6ec8cfdae3199e86b44cd98dc"
  },
  {
    "url": "assets/js/180.e6f30fba.js",
    "revision": "95bb27996aaa99b7fa10871c453153c4"
  },
  {
    "url": "assets/js/181.eab669b3.js",
    "revision": "da8cb41b80600556f51f01109027ea30"
  },
  {
    "url": "assets/js/182.c1c2a48f.js",
    "revision": "b3889077357b5abf9fa41143f25011d3"
  },
  {
    "url": "assets/js/183.1bc7579b.js",
    "revision": "2b99e932e859babbaa241724f676a97c"
  },
  {
    "url": "assets/js/184.17032d30.js",
    "revision": "2347b724671ec22b017145e85fbe1266"
  },
  {
    "url": "assets/js/185.eea88a4e.js",
    "revision": "f8f17f8e3b3145c5ed719a5348274915"
  },
  {
    "url": "assets/js/186.3431be74.js",
    "revision": "734d3c37b92b12cb2b65918a9684f7ed"
  },
  {
    "url": "assets/js/187.8c5e9946.js",
    "revision": "4dd47b9cf526ecd637132a60005de6c6"
  },
  {
    "url": "assets/js/188.3c166483.js",
    "revision": "8c50e38ff19639b7dd4d7b843d497ca3"
  },
  {
    "url": "assets/js/189.5a39c173.js",
    "revision": "5eb2f0e24b4e2d05687785c2a014cc19"
  },
  {
    "url": "assets/js/19.a929294c.js",
    "revision": "58bbf7fb09459fe6e9bb4d9d0bbec303"
  },
  {
    "url": "assets/js/190.7205d249.js",
    "revision": "292e88eb9d3ba33cf55889ae7774b12e"
  },
  {
    "url": "assets/js/191.57bd7491.js",
    "revision": "27bf897c4bb2796ad166b2a9b4d3983c"
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
    "url": "assets/js/20.ec24bdb4.js",
    "revision": "9956cb75960cd5ed70d23786e19bab9c"
  },
  {
    "url": "assets/js/21.d63549bc.js",
    "revision": "d9e86c0308fc942926cb00f3dad22f14"
  },
  {
    "url": "assets/js/22.d084f31d.js",
    "revision": "52c52d87d98258d888d880823295d157"
  },
  {
    "url": "assets/js/23.bd7a87b8.js",
    "revision": "dca3877f5c4faf88a8d36a45dd2313f9"
  },
  {
    "url": "assets/js/24.c74b986a.js",
    "revision": "0508bfeac71e3e59b8d084cfda8739a9"
  },
  {
    "url": "assets/js/25.e8fe43b9.js",
    "revision": "e4695a4ae0e166c4cfff214570775af3"
  },
  {
    "url": "assets/js/26.912c137e.js",
    "revision": "8dd328ffb0261ec453722bb68ea5a6bf"
  },
  {
    "url": "assets/js/27.01359b80.js",
    "revision": "42f3592e4a60a2ec9f67778e671f86be"
  },
  {
    "url": "assets/js/28.185ccc50.js",
    "revision": "e82c61176ece48ac148a2d8bdab5fb26"
  },
  {
    "url": "assets/js/29.1aee186c.js",
    "revision": "5bfaa9ea3a166f73b538b1bca696fd37"
  },
  {
    "url": "assets/js/3.e9ec0dc9.js",
    "revision": "f2530fa3f331a4ded0ed022c75c73165"
  },
  {
    "url": "assets/js/30.95d57cbb.js",
    "revision": "dc95c7a40305c5cc921b67b5856e0f22"
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
    "url": "assets/js/34.c90bed6b.js",
    "revision": "b6e89229e34229ea258c7d844ab9ff2c"
  },
  {
    "url": "assets/js/35.b0daa30b.js",
    "revision": "51a999d674c6bffa7b59eccbff493b0e"
  },
  {
    "url": "assets/js/36.5478a54e.js",
    "revision": "507cd9488fcb0c25cb51ab0f18fcfca9"
  },
  {
    "url": "assets/js/37.817d7b66.js",
    "revision": "84f230a147047bc945d21f9a9061457f"
  },
  {
    "url": "assets/js/38.a3199d1f.js",
    "revision": "5695aaee295a79c0f85dbe2834645fb1"
  },
  {
    "url": "assets/js/39.eba15917.js",
    "revision": "72e75522200c14c66e6b37345ed01dc9"
  },
  {
    "url": "assets/js/4.981ac68c.js",
    "revision": "56dde6cd69e682499b48402eec66fe82"
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
    "url": "assets/js/43.5b345feb.js",
    "revision": "28c0bcb50599e7b488bde53c4fc8239b"
  },
  {
    "url": "assets/js/44.bae0476f.js",
    "revision": "f14262f4828a50aeca3ef57d365d5233"
  },
  {
    "url": "assets/js/45.b9333c7b.js",
    "revision": "f7442e0159c09ee83973bc93f9a8480f"
  },
  {
    "url": "assets/js/46.89211acd.js",
    "revision": "ac6676cc41fbd70e696e4f0638b0f3d6"
  },
  {
    "url": "assets/js/47.3fcae11f.js",
    "revision": "f8e0efd840ade35b5537981a6c11ecb3"
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
    "url": "assets/js/54.9639df49.js",
    "revision": "800da3b4b350882fa2679f6877681831"
  },
  {
    "url": "assets/js/55.22d27f82.js",
    "revision": "fe4be31ace98edb9205852a5d96369f3"
  },
  {
    "url": "assets/js/56.49b19dc3.js",
    "revision": "641501e08bd93e6a610234079d9308d4"
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
    "url": "assets/js/59.0c584c63.js",
    "revision": "83bc317c6b3082f982db079ee95a1708"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.039cba37.js",
    "revision": "472e9212b07ee2855cfb3801a373f243"
  },
  {
    "url": "assets/js/61.0cd46f6e.js",
    "revision": "899eb971c1cbfe4ecef253dd8116f101"
  },
  {
    "url": "assets/js/62.a254fdfc.js",
    "revision": "fb8e68ea01eb2e23f05555e95a7fa13f"
  },
  {
    "url": "assets/js/63.9c8eb40f.js",
    "revision": "cc881947e24f5898a60bf67133f28c2e"
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
    "url": "assets/js/75.caf15e4b.js",
    "revision": "090f471d486cce6778b2813c23ed99a1"
  },
  {
    "url": "assets/js/76.ab65ce02.js",
    "revision": "5329947a441ff2ac0ecd6fea5ddf9d0f"
  },
  {
    "url": "assets/js/77.5dddf6a1.js",
    "revision": "c3d5b98a1ceab72eefe6e86ca5ee48f3"
  },
  {
    "url": "assets/js/78.57fad0f2.js",
    "revision": "e9262676c0ce776dafd74951853b0471"
  },
  {
    "url": "assets/js/79.df8902e1.js",
    "revision": "111eb501cd423099c11c455c27aed7a7"
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
    "url": "assets/js/85.d5712679.js",
    "revision": "394c495ca0a1f3a68e21565cefed4490"
  },
  {
    "url": "assets/js/86.96da39e7.js",
    "revision": "b4cefcb30bf43452dc1ac08b82dda8b2"
  },
  {
    "url": "assets/js/87.5c5f3520.js",
    "revision": "c736bc35952a3cf2ec51a9da5fc09c03"
  },
  {
    "url": "assets/js/88.85f677e5.js",
    "revision": "c4c0f689e5de7e87cabbc31c144febcb"
  },
  {
    "url": "assets/js/89.b4e3465d.js",
    "revision": "522ec69b84f4d74a218d42d7f7ac9d53"
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
    "url": "assets/js/91.dfa740a5.js",
    "revision": "c1d2a2b4ac2a6edb5e4774c7bbb48402"
  },
  {
    "url": "assets/js/92.a807413f.js",
    "revision": "3ad1c5cdd43e6b991cc945dc731c3a41"
  },
  {
    "url": "assets/js/93.ed6b9e19.js",
    "revision": "ec69c9046e4468524778939f793ea10c"
  },
  {
    "url": "assets/js/94.c0d97b2c.js",
    "revision": "d096f9e1727292446541b29545d53c12"
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
    "url": "assets/js/97.abae11f5.js",
    "revision": "e1854c614d3acec5048ef84523ea3945"
  },
  {
    "url": "assets/js/98.e8781e5b.js",
    "revision": "4f5b68a3e538f5744838d69c61bd305a"
  },
  {
    "url": "assets/js/99.886f18de.js",
    "revision": "2b4919bfe92e0085d077779a8bdc1c25"
  },
  {
    "url": "assets/js/app.6a57d9f1.js",
    "revision": "d73c7bf757d5f8694a6026cfe3bec71e"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "e65a89c0096e60bdb32ba5cbf68bffe2"
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
    "revision": "a909d8518fa90aa3445789bfc0d686a2"
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
