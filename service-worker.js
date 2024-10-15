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
    "revision": "7c49aaf1bb930e5bcef0d6f64ff0eb0f"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "83655a42d1b49dae8c8234778ca53467"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "a706b4eccaa451cd4a4590aeb711a2b3"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "a4f8ef6d2e29b4bae74f41d75b0819c6"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "664de9b08d362a3f47ab9ff49408946a"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "f16fded7ac470cb7260cc3dd9ddc5cd2"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "cb3f807abbe0908cb788f403a94835a4"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "1e29640854609eeb39e5543aa8d46ebc"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "371e627b818fca990e1b52e4a248f601"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "8b25e4546179c42dccdfa3bfd940de67"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "b9571939a20a3c1886d4f58f7fedf839"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "0052c81ecd67f6ac6c11856710032c61"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "263d590004b328113e9e9c838d05c56a"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "20e1148eede0857644256e193d9408b6"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "bc0b483f74094d93d16183dfb57e6416"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "8a61d2b266095de81fed7128a4e1f6da"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "d2415ab4b0e6bae9a2da0ac6e16a806f"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "87ec75fdb667db1494f5504b72e67dee"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "9573f38698227c5488f0d83b0d6e863a"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "1d19281f7daf958b878ad20be04cfd49"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "fb41c1a1e2cd1fb113af54baec3a51d7"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "02b0f7557da5b941ff21d3a63479bbd2"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "bfd5ec5f3473c95681baf0cec01ceafa"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "52adea38bedff2b5024e100bdc6c0020"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "adb53feec89ae263f77ff326bc9735f4"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "aeac9d9eaf061a58c7651f2048b05fbb"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "92bbe86a9136c016229ccc95521b678a"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "809eabc3ffa5e09b30e9a23fcb4d1dc5"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "c4dba3a2649c961cd63b6d850c26c2ab"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "80578dcac7bbefb3c9fe44725ec07b6f"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "327536e8937131b783bd1ce12139aff2"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "b9cf3b20783df10fd92717b42da3475f"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "88031adbf9b79d7928a4411f515822d7"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "38785aa952ea7d1954d65c01b90aa4ec"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "707c20c975583e39a0b9a34849d9ec98"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "9630ea6209cc32f733e4b5bf1b48d54a"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "fd9cc9c8bd557ccb3a07e5c1cecdc5dd"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "bdf4412397c8b12b442f6127e7505470"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "b3793180cfab7d3d9ccbda35d3ba1fe3"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "d6c2d66940e4960a8b7be74a631ed482"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "a7e1f23b15b72701ef11c68bfc9dbf1b"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "2a92cbef154f812773aaa32915d24cff"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "15f0ec99450ce00d0827b5a1eae9095a"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "1095eb46fa6f53e7ea8198095ed431cd"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "dabb9338eadfb61b6ce5f3819e54477f"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "c9745cb37b131d2846889d6aed582b39"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "b2133c4e5dc48d6e0b139c366791e6d3"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "613fb9fc3b3ceed401ab0ce204370453"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "65f38e85d44f6fdcd930196312ac8d5a"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "c0e383ae4be4c64520961ea241f59e1d"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "d8a907ab0737a14915222972348d3cf8"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "213ae036f51cc43f20f23a2df7682281"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "1de25e1ae2b08c4d72124eb798d5e566"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "5153a415ee965795dba93b7c88be227a"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "ae7312cb53a7d9c7e8bf489620ddc6a7"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "7cb7e4002af19ca50d8e34f6f42a36f8"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "1191070e2ad8a54528ad67dc4e9de486"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "b2c9f2b7fca51b264581d656e6c03cbf"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "17efd9e7cc8b01ec8223d5e72c005dbe"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "eedd9a2186653748e214b3eb4a6af64b"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "24f7d7a77f8791c2b8e0daa6209faf54"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "7bdc5fb10c5660e4996182963065a885"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "d567580513b0086fa33e980b8dbd16f4"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "6b92ea84524a62b18f85fc30096cf15f"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "23d670351d9968b2c9ca0eb94d951944"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "580b2132b79e01a1eb323dd5c5a1fbef"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "e37df0ab77a07a0adbb40a94cf3e92be"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "dc6170ccbb1cae5b5942859bda4b1879"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "38caf707f9c40d9c94927b7e04e5b04b"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "fc9c99c21531692361649f64868c194c"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "756acf058791df548251ed14c4e736bd"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "abd207caff609e5c79221a5b5d616875"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "50405ac7930fde1108eb3a91ea3baca0"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "0162b6f1ee2851efaa37334630272e48"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "ec9da58bb2c5ebebc863aa622b7222d0"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "b6be1c1367e557dbf2664479602430d3"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "621064f462b80fcb96da907afe3b6324"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "7d8de1a2902feb7878a6e184acfda34f"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "4208b31ef0b3c3739e2f0688d806e13f"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "a79ee6abe077729f073e084df022cf4a"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "54e9dcb9031e4beb66e26d06c5ec17e0"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "d3f82055b4db68016b2b0890c233ce4b"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "95e47db08af21d07cbf1b4d8bdd3c7f2"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "2203acbfbbd13c8e0080f1272e971c3e"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "382b3fdf079c39edeaa8ff5d289645f5"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "ab4aa353997353433ece3acfca4e0cd7"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "fdfc9f57f8e09235cd38561914278e82"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "b247ef655b2fb4f13107376c8334479c"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "dd2960af5adb453c79b8fd33b685d26f"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "8516d33fbd881ccadc261e48ee92483c"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "e3186ae21c1b902b36ecee6d2093ec4e"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "b8996b1b8f0eecb4ab274597f3ca7e1b"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "ab1603e754ac5ca7a5c7f9bcc6e664f9"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "bb150e70dc5340fb2ca07e0f38ec7a7f"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "aece9ae700ffabd8da5b3395f94537f9"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "943dd60c43a59be48123e4c7165ce53e"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "fc9aa7da23881cf55da5d29d50889c72"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "362018cde91dfb4198223c0515ba185a"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "bbe3b9d15f4f9218a7da05e6afa4944e"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "c810c862be94c5fe3421075fda3b74b2"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "312344c632dca56e79fad3be9e7a70ed"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "9bac07fe5afa7e1c0802ec05f16364da"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "d87288e154b4631f8f12a8d0c0331a57"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "ac9474cc126a4d3a66da0ee2e9d6bc31"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "cd8bac27d3be41fb1beecf5bd375fbaa"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "6d3276d5a4d852138f213e1c0afffe14"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "4fc6e3a55656e3de297c3fefcdc6b6df"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "4dd27e149b220d0e71c241fab3758d9d"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "1b1e4e15b2323b9751869204e6df684f"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "c027d1b0dd8d1f2498619f956ec3e148"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "ff849ca78f1e980a61d10431d6bd9091"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "1ecf372b3e50be4c2c42d8a0422f1d25"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "8aa3ac69252810ebc801533c5fd09ca2"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "e051b0563c8350ab3f83c573c5638e0c"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "be50bdb304c5c869416e063514d0b7d5"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "88f8de89d4e1e5b9632192c3972e9329"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "0a52801aa25e542020196c1e346d8240"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "6d7ece4190121a927ff3dd72f26b3239"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "17af84d5d9f9127930189d2079222d84"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "a346ca4e8a702f177061a16a00bdbbf4"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "8d7671fa17ff9e3792550654e0e7bdb5"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "ed49104a7fcb4cd48f78dabb7e2a2d9c"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "3a0349f5b15680bf561ccd7d75200fa6"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "681ada4fe4c6f86ec260fdb27f8e050a"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "64d0a66d23803d0f8dc63b0cf996a7f7"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "90c765eca0fc7f526f5ccf6bba1ecbd6"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "9fcbc834c17cc85c5e2c6e15e79be453"
  },
  {
    "url": "404.html",
    "revision": "39207277ad105ba9f7c9957c57a681f0"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "3ecbd4dc292215c3bff56bfa942e1435"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "fe76ebace24e0b5070c79ce3cd4fa44e"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "c08b530f2dac68e024b20e5e12ba38e5"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "990a4eb715ff27da828ecafc92604e6d"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "537a6c65f4152d4d9e0efee929998452"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "3efb928b1fae991c26ed12af9e0f264c"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "b28771ea58cee7a3ec1de5e4c82d4c61"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "92ccfcbe1af82496db4ecbb8dcaca3f2"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "811274a731d613e34787b5a277a9cc20"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "a316f95ecae4bfdc89b4af3260a07948"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "f5ea1487f595f1e6684be0f25bf41272"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "7d2216524c9a6fbf78e5f2583d8d8de2"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "4013027050df33da9db0c89c07bdeaf0"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "099810679c32fa79b4f898158836ed18"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "1886352585c5648a653289191ed8012e"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "aefc39927c088cb04bff5f705f31b2ed"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "a34460c122fa24204c5fbef8499cb508"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "2e52920b81ac73e5ff07d4b8b3499651"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "1a567aec1355861163f3c831dfdb7ce9"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "4c44b2180639a3698d9c647c0ddc0b6b"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "c2fbaf0a68f18d99ed630516a944f2ee"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "d47f336204c23516d3dcc8fbbf513baf"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "8717b76af0a2f43a13a9bb47bf8cf236"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "6cd1ad60ce8b40f2f2eeb013f6c74aa6"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "e7f54f2db8368c5adcf74854921889d3"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "c2bb890d4eac36fb1312f70381f47381"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "daff21f9b465fb87928eef4696104aaa"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "aa2aeae3272ab3e0ca9984543222d2df"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "72c8c6eac0d7855514fee41fa540dc52"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "d2aefba002f8a4cef6384f55671939a2"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "33a0a576ee0249fdb27c9da3fe0cb99e"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "f4fa7281fca961d8601746c4aba8c66b"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "f74d5cc7551d2a6e136498b23e0af736"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "9494714a22be7e67cccf442b02b99e2e"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "ae76b83654ab3ed048dfcf25ec16e2a7"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "70a0b3411c5a3035ac5a6ccfe602c8e0"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "bde5b5fbe589adaf6be60bc4a3999b2c"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "d1cd224701004c677a63c4fa86511621"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "20487c523f466b63ca8b444825c41856"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "678b1acd72e77b796bcaaf733b499435"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "d561e1832cccdcec860398a94132c227"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "6630bba65dad63a71bb94ae0397fb86d"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "451dc0f5f716775b47d3d6a1dfff534d"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "d4144fe6b38ced123579dad7f6443133"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "6cc4ef652df21ff0a7a583ef3400e3ad"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "abbd20a07238efdc2aa1ab6738dca61c"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "a9123c7f02f313df49e62386b1a20c51"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "628071a4874673604c011122742c4a34"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "42999fbaee4d1a87f552080d85319101"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "0cadd04470ab7e9a14dfd481f093c544"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "0d2d0e70f33965218df882213535a7a9"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "60d7a56cb8d32630711c55aa46f9dce7"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "63af187689944f2d89869a22ca184ba4"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "61cb0a572ed5cdfb1b81de940c4c79ed"
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
    "url": "assets/js/105.4e4c6904.js",
    "revision": "aab0846d80fd909c7f76c736237185a8"
  },
  {
    "url": "assets/js/106.f380fdd3.js",
    "revision": "b3e450afdaa068bba0ea70d59af141d3"
  },
  {
    "url": "assets/js/107.0028ffdb.js",
    "revision": "022d5d6130350b2113bdf23303166969"
  },
  {
    "url": "assets/js/108.017252bb.js",
    "revision": "6f0efabe801b8e0a02934ca3eb6b7459"
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
    "url": "assets/js/110.957c0c20.js",
    "revision": "a26e04f9342cf9c087a4fd21c76660fa"
  },
  {
    "url": "assets/js/111.eac70358.js",
    "revision": "c93a3f09e00b11ed5bc4a538a01c2ab0"
  },
  {
    "url": "assets/js/112.241c10f2.js",
    "revision": "de1bcbff33279dd0dedac44163c4d933"
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
    "url": "assets/js/122.854aa9c7.js",
    "revision": "91b8a94a0ea95e6d45a3446ceb5e68f6"
  },
  {
    "url": "assets/js/123.e5e1ce93.js",
    "revision": "9b20d3bbd6806ba061a9446a1ee989c4"
  },
  {
    "url": "assets/js/124.e422b04d.js",
    "revision": "eb836bbba2c62644e63b1d1e5e573903"
  },
  {
    "url": "assets/js/125.534ed3ef.js",
    "revision": "0ec7cd94299791ed817b8447fe8ac3d3"
  },
  {
    "url": "assets/js/126.06925d94.js",
    "revision": "afef44073aacc806edab4d1fa1a04d57"
  },
  {
    "url": "assets/js/127.d6639a59.js",
    "revision": "9a62cb3606ce4f94c87b3cec2355349f"
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
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
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
    "url": "assets/js/133.5c4f50ee.js",
    "revision": "f174c03e73471f058ee39c4b565f9ca7"
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
    "url": "assets/js/139.c3cb1f62.js",
    "revision": "59ee9d92e1500a0cc8d101adf61817a6"
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
    "url": "assets/js/142.bbee59eb.js",
    "revision": "ea44bee4baf8a7a62af28f99ee4adbfc"
  },
  {
    "url": "assets/js/143.ad4d4060.js",
    "revision": "c3575ace68325f69087b2b1ea84360a6"
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
    "url": "assets/js/146.c60cac47.js",
    "revision": "68bf152890fcd377cb940552502581c6"
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
    "url": "assets/js/149.0a835eed.js",
    "revision": "e7f975608ecf0e59199488923a8f9926"
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
    "url": "assets/js/152.20787467.js",
    "revision": "f38faafd0c04edab0b1e655cb3ae8be4"
  },
  {
    "url": "assets/js/153.64abd3d4.js",
    "revision": "bc5c51b68812569e5bee60f0af68fd44"
  },
  {
    "url": "assets/js/154.6ffe4907.js",
    "revision": "bfaa31b180469bab8a418a9ee6725e2b"
  },
  {
    "url": "assets/js/155.7757c1a1.js",
    "revision": "89f27848c2f9c4d45a228180b6c57249"
  },
  {
    "url": "assets/js/156.06de34eb.js",
    "revision": "36b3e42ac28c676e910122ff5afa8e21"
  },
  {
    "url": "assets/js/157.94baac42.js",
    "revision": "2d603649aa6ad2840d802faf364c5219"
  },
  {
    "url": "assets/js/158.8a9fbf21.js",
    "revision": "d2fe1fb6bc5b59980824aff50121d7d3"
  },
  {
    "url": "assets/js/159.34582ae9.js",
    "revision": "016ea6ab512993cd81ef31abd1ef5583"
  },
  {
    "url": "assets/js/16.01c60035.js",
    "revision": "7b78551316f204faf1d42493cc84fa47"
  },
  {
    "url": "assets/js/160.6c8d3d21.js",
    "revision": "5043f049d769032a01c7ea46eb6c1686"
  },
  {
    "url": "assets/js/161.766f3adf.js",
    "revision": "86fee72350c6a6bcb74a4a284d357893"
  },
  {
    "url": "assets/js/162.a93ea9e5.js",
    "revision": "e01c5d569bceed834943c5e5f80a9dde"
  },
  {
    "url": "assets/js/163.6b44308f.js",
    "revision": "dc512f4081a63caab9da893d6f20f80b"
  },
  {
    "url": "assets/js/164.e64e1d80.js",
    "revision": "05846f300d435381f580d7cae718e233"
  },
  {
    "url": "assets/js/165.7ffbbf6e.js",
    "revision": "9625ebb7e0445fe968310cf91f982f41"
  },
  {
    "url": "assets/js/166.d46d788a.js",
    "revision": "fce203fdea92ee9bfb1d6f344ccdfa05"
  },
  {
    "url": "assets/js/167.821f9919.js",
    "revision": "b97496dac1f2e3fca0626eea01b720dd"
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
    "url": "assets/js/173.d87ecffe.js",
    "revision": "b8ed659f70bae087b2b5bdbdffa15d17"
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
    "url": "assets/js/176.11d82cff.js",
    "revision": "c5ef5b147c6d76e4878bcdd1f9737619"
  },
  {
    "url": "assets/js/177.cce12ee4.js",
    "revision": "c4f75d13283d59275a2c451d03d483b4"
  },
  {
    "url": "assets/js/178.6d74a10e.js",
    "revision": "03b3a469b0b55b8e6550441da671ef01"
  },
  {
    "url": "assets/js/179.2855eeab.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.57a96b87.js",
    "revision": "d33684af27d5a7150e999390744416ce"
  },
  {
    "url": "assets/js/181.eab669b3.js",
    "revision": "da8cb41b80600556f51f01109027ea30"
  },
  {
    "url": "assets/js/182.229010ad.js",
    "revision": "7eb312edbef13cd3790cb3a28085ff5e"
  },
  {
    "url": "assets/js/183.bdb8c276.js",
    "revision": "ea9ded771e3bdd673fad2c8a5bc9a19d"
  },
  {
    "url": "assets/js/184.aee74db4.js",
    "revision": "016b4262af3e701b565bed155791fa69"
  },
  {
    "url": "assets/js/185.58e869a5.js",
    "revision": "06c48c23af12f310073aba390a05a756"
  },
  {
    "url": "assets/js/186.63ee42ba.js",
    "revision": "6448a69056e3a662759967020b2cd686"
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
    "url": "assets/js/189.5a39c173.js",
    "revision": "5eb2f0e24b4e2d05687785c2a014cc19"
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
    "url": "assets/js/20.3a56a984.js",
    "revision": "8b2b951ca9e69d818dcd659299cfadd3"
  },
  {
    "url": "assets/js/21.31a50015.js",
    "revision": "3f86f6c67b9d63bd754df5dab5668f5e"
  },
  {
    "url": "assets/js/22.50713d15.js",
    "revision": "115fef9f14032045c189612f09deb1f3"
  },
  {
    "url": "assets/js/23.d87f552f.js",
    "revision": "32def642d34a6ea918f1e142e23b9438"
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
    "url": "assets/js/29.4fa5f570.js",
    "revision": "c60e663e4285e14ce7526930df149846"
  },
  {
    "url": "assets/js/3.e9ec0dc9.js",
    "revision": "f2530fa3f331a4ded0ed022c75c73165"
  },
  {
    "url": "assets/js/30.6bf4c79b.js",
    "revision": "6159da61fb05e4481ccf3c9feaf5f66f"
  },
  {
    "url": "assets/js/31.344b317b.js",
    "revision": "c038a52b81a51581f2dbba73df63f85b"
  },
  {
    "url": "assets/js/32.071c4013.js",
    "revision": "e08b138adc0d6866be05a21cb0003c6f"
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
    "url": "assets/js/36.5478a54e.js",
    "revision": "507cd9488fcb0c25cb51ab0f18fcfca9"
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
    "url": "assets/js/42.de30824f.js",
    "revision": "2961ca9323b41dda5d8e95609b8341ca"
  },
  {
    "url": "assets/js/43.f1b45a1e.js",
    "revision": "bf2631fa053564bc5c3b80a34dcc469e"
  },
  {
    "url": "assets/js/44.559aac16.js",
    "revision": "6958f0e0309b03b0c10e51987ef7e9e3"
  },
  {
    "url": "assets/js/45.ae3fe7df.js",
    "revision": "a410453c016f7ca35e5fabda8441e2fe"
  },
  {
    "url": "assets/js/46.fa4f599d.js",
    "revision": "3a9be15e7adf5c10301f9ca6ba0b6173"
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
    "url": "assets/js/62.3ed27c6a.js",
    "revision": "ac7a76381173c86c166a0db92a49b37d"
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
    "url": "assets/js/68.ee118c40.js",
    "revision": "dc9cd4ca81e220d18d19dd2da0d7d28e"
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
    "url": "assets/js/70.c5938415.js",
    "revision": "ca1cfc9dac769e623981a278dac47dc7"
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
    "url": "assets/js/73.83428461.js",
    "revision": "fe4e5f2e4de05c406cb0a6ac06b89b65"
  },
  {
    "url": "assets/js/74.03c729d0.js",
    "revision": "5929bdfa41d04d63eff45eee86a5deb3"
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
    "url": "assets/js/8.49b39b40.js",
    "revision": "5be41fa0cb432cdc48a471bee774b784"
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
    "url": "assets/js/85.a4f4df44.js",
    "revision": "eda81924c288ca643b63d5440f301577"
  },
  {
    "url": "assets/js/86.c1cf644b.js",
    "revision": "5787bf920ad9f731421c8f5984a2399a"
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
    "url": "assets/js/91.01cd0266.js",
    "revision": "08cf3f3a742f72f2fc57463524d868f7"
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
    "url": "assets/js/95.1f15ef27.js",
    "revision": "2084746f4efc5d4191fcf922aa1242f3"
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
    "url": "assets/js/99.e9e3b936.js",
    "revision": "520010ad8526444580c2cacbb1c05704"
  },
  {
    "url": "assets/js/app.b19974fd.js",
    "revision": "0a2a3fa02e0bf886b54ca199915c0adb"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "54fca3d678cd91a3ffe476240c5f7cf1"
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
    "revision": "404402558bfc56df0e5b320024af56eb"
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
