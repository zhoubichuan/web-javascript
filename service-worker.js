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
    "revision": "db8d73257fdc7c645803f5f72fb8ffc4"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "39c97b6b1b23a441f7e0d6d5681a4cc5"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "6b4c56afed22bd001d5bbfa6d80fd138"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "9a96858dda2ea67027846ffeab3a7133"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "b78f2f8f98e319c491568439296e19f1"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "09616e3c1d533fe208581852e6253bb4"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "3fe51454d112ee08f9855a3a64a1b23c"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "357d2367e3c56762340740345f65fa31"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "06846f52abd3c45acfb986b38a3cf953"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "8d53e077695b32ed1e4494af3cbcfd95"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "28baaccf328dc7ad8fe0da04b11a8908"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "59ffc58854d53007ad7196079fc8a5fb"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "af3bc00add9aa525ea61cce83a288b26"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "60a54b3c9dbc4671e947cbef4fffde3b"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "782e7399335aa3d6d54a046d66e3091a"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "bf539ba84fd4519d54a34281309312c0"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "8da255c231d333997970a229bd7aefe6"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "f071f75083e090fa10babe41950eda82"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "37627c80f4692fc126e3963e154bff2f"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "0ff6628ffe94b65d11c414702ce22b7e"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "0794de7ae510a94c6664ea960dafcbc0"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "90e4db0b922bc7d0443afd26e741aecf"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "3b89e6177cc246e8b953d3df81c4bc64"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "90bf18ad0d352b14c2433f3bab299f1d"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "7dc7b5456fd068df4b5f92570df32557"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "368edec12fbc3a39ae6273750cbf518a"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "b10648688b3f3848d5475de92a6dfb8c"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "4dd3f85ff472779d4bb241bf795c5b19"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "c2d0b0cffd307b995afd99e00de68e6e"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "3c7b64936580a7fa5d4b35bb3ad784f8"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "d3a938c2d0bd6c766feaa524eea42308"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "65ea53f9944f59fc9fb84bbb749bd042"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "26a96ca67c427cb5382c363a50a81058"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "534070ef8070e723a1f0d496826e431f"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "1638a7bbd7a7240c7ea459e20ce9096d"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "f2e5de0514c8ed223f8e4f53bdebdff1"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "32e3ee673ac7112eaf088899f73bd1a7"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "d09d6e27196bbbb94fb9aba98871b6c7"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "86d19635a6d4c1397551518eb70acf32"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "240d5f357ff6879c863064f5d70a0558"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "13bdde38b02d38264ccaeb86c989cd81"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "4c25476a03fd741baae3c8e497bfbc6b"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "af9d7b0e8375e5c4c51a649ab40634a4"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "e2913d271f73e865d8c2309ca739d684"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "aaabb8d61d89e76edd2e35a118044120"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "508ad567211c17d34747454fb1d314a4"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "e28aa20ac4517a89b1108f5a126fa66a"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "caecdeeaec76891b27101fdcc7b4a507"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "af8c4cf045604719b755f2d3bf9ab8ad"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "2150f156805331f7a76ff3c3e6beda40"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "19b47e91e68724f46ca3e3dd0c6763aa"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "dad4291712bb51ee5a00b9867e8f4e5d"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "6a837c9c4f3a97e88c6612f9cd68fd61"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "55f91fb399a6269c27f7e72bd8cdb99c"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "67cfd03833fe319d28d97c35fe71c4d8"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "cfbcc0f636229a3836b12044128cb143"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "4ea0e5ff8dd35b350e5b9628fc7a6b35"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "08f46db3049ecb0c93463dbdafdee6d4"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "f6f81ac19a3e2c02a863711b4e5d4d91"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "f6cef0672c157b2acb72d54760b43bef"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "a5a9f62b8b2312401bdd110657e531a0"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "2d80f1453c2dc9b3d182e52002b741be"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "03240474c20e7707878448ac52bf77df"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "87e426f8366ea4cb75571bc3b815190a"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "6f35f500dfb70444ecc7b637f250599e"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "2581f1ef807a7448b332b6803a426500"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "88bfb477c02069381a3ef73208832536"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "2c47ba7eba4253c1a5dfc657358b4e96"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "4a67168bdd2172e45d5734447d2b9fac"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "d251d58c75e71e489823fb1386ab85cb"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "8c05c21232720f1ef8b58529f19a5d58"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "053d25c0ad2ee97b812b7be2658b633e"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "8719c772faa113e117cf8fdbc3dbf096"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "38bb9f87cabd1137baafd4278fffb95c"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "f97f83696295c3181300ed7519116da9"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "582d8f43c8f2d84c5764e64b74fdae6d"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "d563abc4d2f6b316ae601a2fb9a8b287"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "41e336ab3eccf0930681852818de3497"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "c6118671540022687d405ad17b53baa1"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "2cbcbc8f3952745a8c6cb7df88d580a3"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "4f07c8c13ae1b1dd3de7e1f2e86e4db4"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "88d777d04c9dd3e304281eee1dea09f3"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "b367489a3d7cd98e4aff9f58b9aa2e68"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "3553d1c15473a87a0425bc12c8beb77e"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "340c47b5cdd2c4d6ee88f30eda25855b"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "4385303b06d4936b3e7dd9d22c4b3f4e"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "11b45c5420cfa7bad1f2fcb49c68beee"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "93414e6c54d239b8f1ed653417dadc39"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "4b9836f685987ad10644082c17183a21"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "c277d33bb32bdc7423f508c0388da2a1"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "d42a3972be177dfeb5bc063fae9b7ca0"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "0f76bfa060a80bead026a7bc7f3f4caa"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "e0a3ad4053dec25db1db6d3f8543534c"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "f7a79d4e7a0dc577f8b9e885b484d6bb"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "0ad87c2700e7889df6f63fce36210b9d"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "859092bb558c2ce65e01617523d6fcd6"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "57ff338f0690b49818ccf46b57a9f7fe"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "f671ce338d17cb12cb23711e9549efb9"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "20fc0ff3df839c0e5cd5957d034cb41b"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "2f817c4d20638e63b1abed077baca6f1"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "dacf7377f8dd3f2c21d7be9324ed3531"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "922fb38e9ca954ac40af5ad976fed85b"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "0465239b9e03521306cb4239bcc7a6bf"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "5c0c557b0cc15ec330d5ac48004f9cb9"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "941d16b1059d89afd80b68d4a76f2102"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "91d9f9e2d3dc1cce4296891b1df84ceb"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "940ab14d868dcf45ecda171956ce8fc1"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "ec9c8cfdb6cb47cbbafc734e15b43632"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "0d41ac28f6a09d8e5ce91a7e6b739158"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "7575a327872b3280035bcdf8f4fea2f2"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "d7ca8ae66141b952ac8bfa28f59d4a56"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "3cae2a42ae093f10643c9fc811c62110"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "32113ed523d371987d83a4326bac9b84"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "3b5822c274354b84ac52739e2941832f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "6215f7aacc3b14caedc2bb2569699267"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "55b8da7cbd63a5c7c9e613d43c92279b"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "e084350f86f80a8002b9678f427ba236"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "c380130bca94af3b80797f00018fe029"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "90c07be825e34d683883b2ed05e744ca"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "976d6bb4833352954a237f2cba15eb91"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "e880eb3d4eda1dc644277f6527c0fed5"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "57c4da9c57fc8dd89d357610d7e33daf"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "a41c08e9b4e8084d561b6a98e0a407ba"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "7f298cfdf29f092592576c528ca0608a"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "aa9cfe7290bae5af444962c74aaa46b6"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "1bab4cfe6b5c405c4232e5fb0a6443ee"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "2fcf7ace9bc4b398127c28358677516c"
  },
  {
    "url": "404.html",
    "revision": "7d2d31b763ac95802a99ab5a9fdf7a36"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "46778d3a1174984831600c578583364b"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "1015dc6da3d8e72ad6417e8f47c2624f"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "9fb2775823d65d180cd8bb754f699474"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "cb17c1c13ceb65d9db0d6cdfe6ab9140"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "ea931dbc83fbc5a21930ca9bdd0108aa"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "578e8b30d045c76bc74cdbe009a29337"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "79acbe000286d8cdfd370ef7abec4b06"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "77cdc4412b479f07324efe709b083acd"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "66941989cb2aa7ce0ac4c6a70b981232"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "38393c62de514ab3a4732d90573d30bf"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "d242eb3606360287cfcb30cd8fb59293"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "876192273eb5087df2aa11a0fd4d5e60"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "f0429d96bed808e9aed5f95c7acdd689"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "ae263a3cc6be1958956413977bbad37d"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "3c662212ce223ca83731b120dc544ecc"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "5e7d11492130116ba6e06ca612dfbdaf"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "8e3f739c312e7d37704675737449360d"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "f23eaf37a7dacc3a9eb070a74dcde9e4"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "8f8716e5452dd65f059c2228823efc00"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "f3f49103d7358eadec8295c54bf7d803"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "24a8cb5560578a4d1b40f4140cfdb8ba"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "60843d603ef36f21140ffd1b66ca50b4"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "f1cd648a858762212aea5cacb2d761cd"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "59eabe4f77c52689ba6e9fd7f6d42f80"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "b3697f9cbd5d0cbf592ab393908030c2"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "b399b43624b0826066a973ab5f4dfee7"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "2612e9bd270362df3ac0c33cc277ba9d"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "ee375a2e624c1fc49124dcefbc0973cf"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "feb54fa9b47c8a37d0927d29401e4d5b"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "a956fe2fb8c6285f10ad4a3e76a29ec6"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "c6113b26ee0c333c491cb21b9b2fcc11"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "4e08debdd4478f940a075564c540ca02"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "96153065ecab6021d53e7d382af5b4ae"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "29fa50bb8947ecdc9f334c002b9ccf0e"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "1dc8e2bb304da4470490c9611d0b9aba"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "724dbbf43616ed7594eb72463d87ccbd"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "ddccdf25287a87f8ffbe1966fd9c98d8"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "1b4e731ba7b466733d70031637bbf316"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "f21378644bd6553efaea9f92cbb2fd00"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "de6c9ab7d9c7277454c52c61ffe29462"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "e74c1de95376a7cdb2936442e52c48a7"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "9f02d259cf0f4406827b8d48d26acfa5"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "913f0e4c5acbc253b710a1ea63ac13e5"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "129836e98c386f5d56b1efabbeefa120"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "eec3e0aa3a233fe6c0e38c64af285bd4"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "24796d24d3409b091d0e4ea2bc46f315"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "7d226c3b9bc70c238831839331569c90"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "69aef99242fd2ba7c2394698caad8066"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "7cc7d98ab342f56b06cf45eb0fd06b4d"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "e9f6d92bc0a2503983c84453bf448de6"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "95f944b067c1fc0849499cb09be81b8b"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "a33f1e6d8fcbac9fadb30852160c5a2c"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "7c38d3206c231b99cc4b571d34e376a2"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "cae400ba817050f9a7cf556b6dd1d7bf"
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
    "url": "assets/js/109.ff201df3.js",
    "revision": "3febcfbecd9014508b5929ba0e306ee9"
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
    "url": "assets/js/111.6c21e5e7.js",
    "revision": "734ab4cc04d2ecc6220be9d00ef683ae"
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
    "url": "assets/js/115.25dcf12a.js",
    "revision": "c3cf3921da7d9f8b57a74ed5dc4a19fd"
  },
  {
    "url": "assets/js/116.33c49635.js",
    "revision": "31fb4603f2cb686286d8d65f532caa77"
  },
  {
    "url": "assets/js/117.25f01f37.js",
    "revision": "71a1ee9e34ba8b7f6c6d919d59df4393"
  },
  {
    "url": "assets/js/118.3589e8da.js",
    "revision": "c6bb92d839068cd7be2e9f3c2b295498"
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
    "url": "assets/js/120.cf1d25f3.js",
    "revision": "d0b95debdb5d35325d8339b9502ded08"
  },
  {
    "url": "assets/js/121.e9fb9eed.js",
    "revision": "5746bc4b3c2c5baadd92741d39f0ede4"
  },
  {
    "url": "assets/js/122.5d1f9309.js",
    "revision": "dfdf4ac9c85ad9d0492c39cf300316a0"
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
    "url": "assets/js/127.3891c201.js",
    "revision": "e35a1a3843cca583386a26a84e4f9098"
  },
  {
    "url": "assets/js/128.35292750.js",
    "revision": "0dba5e2b2959023247c4f49481f71552"
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
    "url": "assets/js/130.6abb9efd.js",
    "revision": "62873530c4a232bd2d255adfa00ef68b"
  },
  {
    "url": "assets/js/131.b2c85dfd.js",
    "revision": "1195fdc84b8385fc6aebedbae266590e"
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
    "url": "assets/js/134.3447d412.js",
    "revision": "00a7fcb6c78461cd856caa487a349f1e"
  },
  {
    "url": "assets/js/135.53b56f12.js",
    "revision": "247ff7aa733f01a4c79303c4f2573418"
  },
  {
    "url": "assets/js/136.bb592e50.js",
    "revision": "dbc50008f3e922e4694d8b64b339cf7a"
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
    "url": "assets/js/139.c3cb1f62.js",
    "revision": "59ee9d92e1500a0cc8d101adf61817a6"
  },
  {
    "url": "assets/js/14.1d231775.js",
    "revision": "854ca39f0586733ede345a9f19e53891"
  },
  {
    "url": "assets/js/140.8560c2b9.js",
    "revision": "2d408c9331d2b5f8de3b8f2657d1d21b"
  },
  {
    "url": "assets/js/141.cad52bea.js",
    "revision": "10942e3d4dd74cf648f93dfa68624af8"
  },
  {
    "url": "assets/js/142.1dda2adf.js",
    "revision": "84b0e4e551ff95ee2dfdd47ec601ffbf"
  },
  {
    "url": "assets/js/143.5a0ddab2.js",
    "revision": "f691e34d8fde62be47cd02336bc61fa3"
  },
  {
    "url": "assets/js/144.c222e0cc.js",
    "revision": "0a9e09c76a1f35c60bd0a419b8b1c371"
  },
  {
    "url": "assets/js/145.5e0206f0.js",
    "revision": "ac6f7597729a65227f4400ed585ddb7e"
  },
  {
    "url": "assets/js/146.8a9d44ab.js",
    "revision": "1684c70f8aa525fd7c89b998b85506b7"
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
    "url": "assets/js/149.4a79adb2.js",
    "revision": "3b63a3bc32b1d654c9315dbc786b3d4f"
  },
  {
    "url": "assets/js/15.63510516.js",
    "revision": "cb3703daaeeaead959dcbb35074a99cf"
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
    "url": "assets/js/157.028a96bd.js",
    "revision": "32596e88023cb375f98974d54da3b16d"
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
    "url": "assets/js/161.766f3adf.js",
    "revision": "86fee72350c6a6bcb74a4a284d357893"
  },
  {
    "url": "assets/js/162.73827d68.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.6b44308f.js",
    "revision": "dc512f4081a63caab9da893d6f20f80b"
  },
  {
    "url": "assets/js/164.6fbf3723.js",
    "revision": "0051e9d520b62dad4e8b6f9f49e0fb83"
  },
  {
    "url": "assets/js/165.17cfa786.js",
    "revision": "85b6400310e246f225783a210fcaceba"
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
    "url": "assets/js/171.8b3b888c.js",
    "revision": "20941dbbb9c3cc9e2ed6f707c069c0e0"
  },
  {
    "url": "assets/js/172.74cb4d80.js",
    "revision": "a7a5ac3361f7fa8dd6763acfb659f18e"
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
    "url": "assets/js/175.f9f02b48.js",
    "revision": "9c4b6e1ef7b8e2b2ce71a3835ec2f927"
  },
  {
    "url": "assets/js/176.1c2288fd.js",
    "revision": "13ff73da46199916bc8d4c8152a3a2cd"
  },
  {
    "url": "assets/js/177.bf39f4ef.js",
    "revision": "fcff938b468af9c5978cd9d9177d6cf0"
  },
  {
    "url": "assets/js/178.d7348239.js",
    "revision": "d7e08d34ddabba0034250b8ff186ede3"
  },
  {
    "url": "assets/js/179.e9b8d4b9.js",
    "revision": "defde6880e0f1f6081523db65212d735"
  },
  {
    "url": "assets/js/18.4f5fde73.js",
    "revision": "0eccec3ef1538b7528e1ecb8b27292cb"
  },
  {
    "url": "assets/js/180.e6f30fba.js",
    "revision": "95bb27996aaa99b7fa10871c453153c4"
  },
  {
    "url": "assets/js/181.5a2f47dd.js",
    "revision": "48ff1a09ded5d3da3722af205bba26d4"
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
    "url": "assets/js/23.7155ac9b.js",
    "revision": "28235f91a9e195b7630c0c48867d664d"
  },
  {
    "url": "assets/js/24.a3907dea.js",
    "revision": "945709662b1f9565dd2d5cc925ad133e"
  },
  {
    "url": "assets/js/25.42354659.js",
    "revision": "f44f75aa15b1b69717e3646e12e959f9"
  },
  {
    "url": "assets/js/26.e5b46d0f.js",
    "revision": "a9952e14190800654531417e311527e3"
  },
  {
    "url": "assets/js/27.50e2045b.js",
    "revision": "e2ccbf0996baf02389fa6025a1b04d59"
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
    "url": "assets/js/34.63cf7d2a.js",
    "revision": "be24ab4e15c51f2660cbaf59c47c86e0"
  },
  {
    "url": "assets/js/35.ae84bc37.js",
    "revision": "7ea40785f6ca675da39a0a69ac672778"
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
    "url": "assets/js/43.029a9e7a.js",
    "revision": "5e8b1148525660e59171eccb0f03b9d0"
  },
  {
    "url": "assets/js/44.95bfa1f4.js",
    "revision": "ba1a31b68489a56e871b82654892c707"
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
    "url": "assets/js/57.66b4d299.js",
    "revision": "0285eac856a739367ba8c079c15adbab"
  },
  {
    "url": "assets/js/58.122b01eb.js",
    "revision": "8b98eccd9faadbffc9600b97ec300574"
  },
  {
    "url": "assets/js/59.8bc2adb2.js",
    "revision": "f7267ae36571de4daef27cd4b795efe3"
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
    "url": "assets/js/63.a0a45444.js",
    "revision": "b22e26bc1c6544d8ff68943c84d994d5"
  },
  {
    "url": "assets/js/64.592c07a5.js",
    "revision": "4d6ebfe2f2a7cf726cb585b25d0cec68"
  },
  {
    "url": "assets/js/65.49e82a59.js",
    "revision": "a54e2f9797dc91375e7537625237daf1"
  },
  {
    "url": "assets/js/66.4614414f.js",
    "revision": "610f52c0830243398934071d82a395cb"
  },
  {
    "url": "assets/js/67.410dd42c.js",
    "revision": "70580e07bf4642ce366af0ff337f8144"
  },
  {
    "url": "assets/js/68.41e825ac.js",
    "revision": "081d790bf1555b82709d18f725ac2298"
  },
  {
    "url": "assets/js/69.7d649fe3.js",
    "revision": "a88d795970dd2fff0f883e4ad9e27cdf"
  },
  {
    "url": "assets/js/7.afa77f40.js",
    "revision": "010d0121ed4ae2a2cec9654d112fbb87"
  },
  {
    "url": "assets/js/70.ec01c718.js",
    "revision": "cfdac5e19a1634d18f896c0c71d034fa"
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
    "url": "assets/js/77.469a47eb.js",
    "revision": "6e111c9a132d110275fb8322298baa47"
  },
  {
    "url": "assets/js/78.151421e2.js",
    "revision": "1aa6aaf42688c97ff87174531501a80f"
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
    "url": "assets/js/80.78037ac8.js",
    "revision": "4acf91e619a5ac56ed4c686ba4faccd5"
  },
  {
    "url": "assets/js/81.dbe0db3d.js",
    "revision": "27e90cafb4bf6232de24b7145edcfb6c"
  },
  {
    "url": "assets/js/82.e4fcf364.js",
    "revision": "e12ccb7b7d88db5517241af8697785e0"
  },
  {
    "url": "assets/js/83.2b4ca871.js",
    "revision": "6a2ff297445769d3e6c5459be0646ce1"
  },
  {
    "url": "assets/js/84.eac30818.js",
    "revision": "6f49c4f4526ff2861ebec16111c8575b"
  },
  {
    "url": "assets/js/85.e8cff7c8.js",
    "revision": "326c52265ad4ad07e2ea7d584263de7f"
  },
  {
    "url": "assets/js/86.3b01f706.js",
    "revision": "5ea1481afa1795134be075627a86f19d"
  },
  {
    "url": "assets/js/87.38afa402.js",
    "revision": "f6764dc49e868f1271fcfd65af4e818a"
  },
  {
    "url": "assets/js/88.fb28a19d.js",
    "revision": "de5aed6a3c5f190995afb669dcf0e06b"
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
    "url": "assets/js/91.09175279.js",
    "revision": "022ddb0f73953563620f2ec5801fcb84"
  },
  {
    "url": "assets/js/92.97e2cdca.js",
    "revision": "1ca00801aa04ecccb913078ccf6159a9"
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
    "url": "assets/js/96.93567097.js",
    "revision": "2d93c08edaf1a3fef3dd036558695564"
  },
  {
    "url": "assets/js/97.abae11f5.js",
    "revision": "e1854c614d3acec5048ef84523ea3945"
  },
  {
    "url": "assets/js/98.e6101b3e.js",
    "revision": "f81094370ffb074a57150d2c59fbe21a"
  },
  {
    "url": "assets/js/99.e9e3b936.js",
    "revision": "520010ad8526444580c2cacbb1c05704"
  },
  {
    "url": "assets/js/app.eecc1585.js",
    "revision": "22df6b409650afee667b9b2782faa990"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "ae37c66d77fde6ff3e3cbb36a6e72e6b"
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
    "revision": "4c605910f7bf06c5a568257d7fc328f0"
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
