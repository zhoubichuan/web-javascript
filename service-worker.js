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
    "revision": "448986cf82367484480db18c9a5b1010"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "97954745f76f2dc42d1dd748b01c2f1e"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "ee3cfeb23c04b933593d93acb17c6fcd"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "3a622185811d9a59e87fdf94f8eb1ea5"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "0ff914b4fa06e2d5d655c9acbabd8930"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "c0773d417296647009401a5d6e4f507e"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "4ac36b924f854bbd1cf1166f33da5f92"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "149a5abfdc4774f3cdd027c2c72524ee"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "e8b5d5dc85a65cf333c1e6c6145a16c7"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "1b6790110cc5637d5e4250a3f9aec5a4"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "dcdb7a6e7a5022eaf63917d2b6d53beb"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "12d49ff4d87d4566298bb78a0852aad4"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "b32e49012a271fc37e88c935992b6176"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "3e93f2509825cab426c113a289037a1c"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "9180a9b5d409faf190d956d0563d3c57"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "4acc07320aeca8e4dae5307884da07d2"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "26a92a0e0af3743ceb4e413785aa4667"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "e58f3c1f5e74a5fa17c2b6e1484e8e29"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "234c6e6757722e02910f872feb1383ac"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "a64d49bbca1c53bb22770cb275f90b31"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "d83e25febba90c4dbcf89d5de30e9b8f"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "75f0bcc34d0bf10c3d73b239a2ea0fcb"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "7b1c1f3783d2e4a16749f9fd81b5521b"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "2ab59a69dff6c7bb5a3075469bb9a9e1"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "8ce0146c155510870aeca57518de72a1"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "8a751c421f178a55fe5c6db6abaf59cf"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "8e24ce6bb367608ff425f0d55ae87d48"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "0861542f5bd0c9a0555c7901c405fd74"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "dc01251c6a4de1ddc75bfda030977ab5"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "05ec0367660f340210f12fea4a987d50"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "32d4fd61e2d3c6f82fc2dd091fdb4147"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "576d2151ec077308a79cddcef057be4a"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "e92c8068297ba21c83b869a16804556d"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "acb68e69d6b78154744d0068f9c994b5"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "8c656f815fd56e19d26a69385a4ff972"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "3e9ccb8a28902eae0f5dda075fab0328"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "6a4485c56bec5df7809345dd140a5e59"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "23cec97e821c708460d28f085e94afce"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "0772bedb34f29aaeeb34cd19f06329d5"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "d2c7ffe0581b0dedc01a17ce1f38fac7"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "58cedd5eff77612c6742762fd789de28"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "d8ef9ea3e77a5842131cb0df7f1c5d6e"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "38edec48696db6b164734052a6179cd2"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "6e94e1ae06d77e1bf2325251239b5b33"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "c20346d24cb8523dd94e3f4e89fe4ffe"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "9e6f808f921e15dac10bf3c7b359fcba"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "4a504671679add0e36b4fb1127158b78"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "42d267f0e84d1569a8ab7927b9a8c825"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "62e0065563019f9a70701183bd9962ad"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "72b703755e69b89fc962492ae667ef5b"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "ea421d207b0b623be8ed38aee57fd0ad"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "7d255458402460d029a7926c218f164e"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "b089885d81f2ca821e15bc73fb36fb7f"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "fff7ba1d930b84787ae7f2c7403b6c6b"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "658cb6da4fed30d3cefddb27d1a6669a"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "0490b2c4b001841f16dc8a95fa0c3d53"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "1e3fb58aaf8e9fcb622b25b82c573a3b"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "920d00c66ec23fdbae5a264f31ce10da"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "a7bfc45b0ec6c7cfb3de270e3c8ccba8"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "a0db0caf747241223c6601b82e409fb7"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "b9eef93b2d076b4e6b71e348bf797483"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "c871bf1951c7b6d48eca1be69c744730"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "c77ed2cc6433c851e828808e38f4368d"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "8885a4745f01ecf058c6c17bbd4ae6d4"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "16d0b44f4c719c8d8f8b3302a8b9fe53"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "3260700d88bc04d4d8d0173851bf7ac9"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "e8f58a7b913dca24ee385592461414f2"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "b747c2962ca8aab0f1f26b698a7c6795"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "9e58c984ae86f44cac3deda4287f65e8"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "e677d870a41365948dfdf4445dd8ae5b"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "48db22b51d5b686c640b882d48b0a5d3"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "abbd22f35f71697b8a8b7b69bc7702e9"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "3ceba02e27a699151f7b133fae9c427f"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "b472c407fc21676f0bb0909fc1f6a7cd"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "f33c39cf328fd1626ea194a4db6475ba"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "4c1611206433cd678691f44ad8469815"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "2627debfb59c4dffbd9ab059bb45a3ea"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "e9e7d060929053d7285bf958f81e0db3"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "311f886966ea99f5c5bdf9a8396aa08b"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "5b955552eab6a84bb03e047998968075"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "c42bb59c9e8b64c812c9a017804a711d"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "c5b6fd64c1655dab29827167ac555171"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "32f38a185a4d398c409235217715d598"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "aedb79f0776faf03c88ea3374707d000"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "1311c9b531b8fc958122f2611ed8be60"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "a86a4707e98e40c38ede3baa9244f036"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "d1b6eaa1298b1806cd5883d015e1f28e"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "81c2075ec534507c1104542f37dbd596"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "f261cd93b2a09827028a79f01face8e3"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "df7ff177c87528f4cedb12b869bd0477"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "b5f215f9470d2cf709363f1cccea75c8"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "672808cdd8df1196729b6c8a07321849"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "6a664ad33be7491028c11c31fbf30c9e"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "556f0cdaf462cb6ff4c019bc75c01cf4"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "e5b6ae3770db2f61c5af4757d3ba5712"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "774975d86ab300b8efbeec11410d1ca7"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "2c41f76e0a0931eb79e44dc065b49084"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "bf983bef8f4d7ae80c4766c34c68525d"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "c7e3aa5f3458cc856af42aa34a237668"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "026d77dc5f7ed6d5735bb9f5026160e3"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "00df5f050e90f7f6261116a2b17f22de"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "51046190408fd22855655a04cab83438"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "feaaa2173c13e115bb5f44b3da8da306"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "c74d2e9ffa5fad808d512a9f026a51c6"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "2f743bd2cee1a982f3e677730cf71938"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "daad677cd8e58d6bd48fcb114b7a1e44"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "61c29565a1a59af547e31b30b959e06e"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "0daf83e9f4af98a317dd03643907f786"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "164555d296f68a150a8550963d5992ef"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "f3f5f22ac2cc761628a8adae07d8ad47"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "7714ffa2b1b275a870c7318583ea42a9"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "b1c6115db4a32b4fdf7f028c44ef5ccf"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "bef27444fe17636b08c4d25eb6a37a8c"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "c22e711bef119d762964103d99213778"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "7a9e089ee0bedcb1a5ffb7dd21b8bd49"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "30b68b48e5c30749b387fba78196b1a1"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "a49d0d829c4440f65e0194e0174cc44b"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "7331c48c2cdfc80ac9c4fb17f9056515"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "9f6ef14f31caa124f570406f740a05f8"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "487c5dde27ddb079ed58194c7e08303b"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "0f2a9541d115ec29525f072db205723b"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "e4e3fc12a672466636d0618794b5b809"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "8411cf43067dee205b46131968b7218c"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "40a9ac8f31fcd92b66f710edcf1c4e58"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "fe1ea8c3a3866351890a4911365884d0"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "5f74099f04bc1e8afce36b76efe880ab"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "e0717531783c7977cb059fa132d54ac1"
  },
  {
    "url": "404.html",
    "revision": "a13f016700e5fde68422fe17d231d438"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "d1b95056ec25ce4f9f6ec9ff236ad772"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "8f430d6b388058f08c1469b4e1f279f5"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "b5cc9685feb486f5df7ced1c52ec4bbc"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "5bd17bbedc4baf18f4b7a391c35b4dae"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "09f2e2142a8097bfea8a3862580f76eb"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "61ff8772e8072caf1d315026fe01cd5c"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "ea402771d1571da13a253dc412824a81"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "1d6868f21fe4f83c4067ab9535f2f943"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "806650ef94b1834bd6605e6867b5dae0"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "ec897ca414a7a9a94608ddca0a9a1ddf"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "9fe100df5d5fa00d451ca7116b35f6e6"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "675842628cfaf1516a4f04df3e488a31"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "eb7810df01e0fb26b39e4062b0c4c92b"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "aeb0e2903eefd007c535bc8859fa309d"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "bf092fb566f9cd9bb6a3f4cb24972971"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "4c32bb87396efaef6b0c1adb8c6c2604"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "24f416231e615825c1d1b974faecc218"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "41b7b5b412f688ba5c80e583d1e7f090"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "22adcf04aa630f4135438bc9ac0b93df"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "a21f335a37afc260d75489de8001a112"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "0f418e6f61b32da8481250af49657ab2"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "a92a812930496a5db1004d3a284f0b33"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "5ea511e95a2ed609e2026897e83af464"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "223f8ee3c6b26c840d64615f29b348aa"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "d3bee59b09a692d930f2d9243c1494c7"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "06eb093bb0ef49e461ed0eb4301de89d"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "bc521c84a28976a96bdb421a02d706ea"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "4819e3c7af4d865e214f45ef84efcdb4"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "333e83c7745e11c458c3f2415b4ef685"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "4397e7bf1b7ac6484536f3aeffc36736"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "83bcae4a0507b058f7c6e981dc29fde3"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "137d0976e12a9fa65e90d47bd6ef906e"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "8fbdf2b52ebc5704100c77d1412b5d6a"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "6e4cda1f3d1ace455ee98dc6d7117c39"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "d0314e3c310d1eb6c70d81f99be1955d"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "df8038170e44183b180c55ccfb0f4ba5"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "1f9fb74cd3d3840cf7ddfea57a1ead81"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "ff438dafead47138ef54495e226e8516"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "698a27021a4b979c6acb126000ae3b9c"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "03ae1b3acbd2347975aaa2022ee449d6"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "501d8daf02858d4fb38c90f4c99bdcb7"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "855a9829cc5c2dd95b23f217fdb570ec"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "c477658367a78b61090c1e76e2eff3c3"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "5a4bcf66c3c0d6aeef595a205b8dee5c"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "71735ebde72a295ffc460eb5d84b3b5a"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "c18eabfeeb2079851ed5d138875cde57"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "d0ed3e70e8842e3ba57fbc3313f88b1b"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "b502ae65ae5ea050c2ba7044e29e5368"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "c3c7e1043a4347dc36a96a4b80737368"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "f6ea0845e4bb00d439568d85c98a46fb"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "ff04b5a6e55157b22bd7cb87b0f0d7fc"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "713ad8009629a8c88b5abc5b59956bb6"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "a28c31ff924bef193ddbdd511b1a8609"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "9b97eb161e2f955bf45d3c149adc5452"
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
    "url": "assets/js/103.d1e03397.js",
    "revision": "b997fb3644326303830917327cbdb119"
  },
  {
    "url": "assets/js/104.ad4ec018.js",
    "revision": "5c286a352f0d029293e03a8c074747f4"
  },
  {
    "url": "assets/js/105.9978ba15.js",
    "revision": "f8c7ed10627d3f9ebbdba572a14ac117"
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
    "url": "assets/js/113.2525ea72.js",
    "revision": "96035a82b36d8a893546dd598e0a4f01"
  },
  {
    "url": "assets/js/114.b72aa3a6.js",
    "revision": "15a6fa983c5aff79728be34418076c52"
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
    "url": "assets/js/118.869bda75.js",
    "revision": "82f4268fa9eeae52daea9a1e52971766"
  },
  {
    "url": "assets/js/119.a2a8eced.js",
    "revision": "e019fda35c6f4665534cb1b7ebe9ecbd"
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
    "url": "assets/js/121.df468ca3.js",
    "revision": "df9cfe329e0c8d7be580c2a055369fe8"
  },
  {
    "url": "assets/js/122.899fb787.js",
    "revision": "a3737b072a2f7d2e987afd1cc9675ed2"
  },
  {
    "url": "assets/js/123.5bda7667.js",
    "revision": "b5b8b5aaff51edc60a19884935f00634"
  },
  {
    "url": "assets/js/124.82ab9ca5.js",
    "revision": "1976c56b3f0b3d44ff79feb8c16ff646"
  },
  {
    "url": "assets/js/125.08cb618d.js",
    "revision": "5d337a5bfd186ffc26194d3345c42536"
  },
  {
    "url": "assets/js/126.06925d94.js",
    "revision": "afef44073aacc806edab4d1fa1a04d57"
  },
  {
    "url": "assets/js/127.709c30a1.js",
    "revision": "ec907d9f8cc11550f6e9f6a926330bda"
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
    "url": "assets/js/134.b580d839.js",
    "revision": "c83dfb68c9bfece05a210986d6ae9ed7"
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
    "url": "assets/js/14.bf9d9cd6.js",
    "revision": "8f5f1f77477b1410e163c000fedbc264"
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
    "url": "assets/js/143.ad4d4060.js",
    "revision": "c3575ace68325f69087b2b1ea84360a6"
  },
  {
    "url": "assets/js/144.26e2f9af.js",
    "revision": "440bdd20b13f9ce350036064d6d5afb0"
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
    "url": "assets/js/147.68616caa.js",
    "revision": "815a725c5f5e67b33eab8cd33666313c"
  },
  {
    "url": "assets/js/148.4edbfd2f.js",
    "revision": "eddddf394d8d744c5ee4eb560fbaab3d"
  },
  {
    "url": "assets/js/149.30f2a7aa.js",
    "revision": "49478d7caa0850578cd9518fec042371"
  },
  {
    "url": "assets/js/15.63510516.js",
    "revision": "cb3703daaeeaead959dcbb35074a99cf"
  },
  {
    "url": "assets/js/150.6fa7092a.js",
    "revision": "8f2e41758bb4cd4b8451567dade94b32"
  },
  {
    "url": "assets/js/151.564866af.js",
    "revision": "dc931d301e272f91ef8246ab0eac5d70"
  },
  {
    "url": "assets/js/152.f310937f.js",
    "revision": "c4787acecdf08ffb1808ed89cfd7fa73"
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
    "url": "assets/js/159.1321d561.js",
    "revision": "e160329afd9b2d63ed06abac84cb5f66"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.dab31533.js",
    "revision": "e63b366e5f25c119ed0426091ce639bf"
  },
  {
    "url": "assets/js/161.766f3adf.js",
    "revision": "86fee72350c6a6bcb74a4a284d357893"
  },
  {
    "url": "assets/js/162.62e2c7c6.js",
    "revision": "c98e5f70712f2a967ccdc47ba9755610"
  },
  {
    "url": "assets/js/163.fe8b2146.js",
    "revision": "94bb3acac5825c2ec3eb104286188542"
  },
  {
    "url": "assets/js/164.704c23a1.js",
    "revision": "0174a14aaed002280f39d5b9dceec806"
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
    "url": "assets/js/167.243a8745.js",
    "revision": "af7fde7f50972e329ec8c3256bf28063"
  },
  {
    "url": "assets/js/168.9b0a089c.js",
    "revision": "94ebc60ef054bcb561eec1ae1c95742b"
  },
  {
    "url": "assets/js/169.140deeb7.js",
    "revision": "125c5f3f24914091660ea4c62ec732a4"
  },
  {
    "url": "assets/js/17.be04e724.js",
    "revision": "61e12dd6d0c2bb27f60890b4bc70b303"
  },
  {
    "url": "assets/js/170.ca63477f.js",
    "revision": "8fb1bbd8a8e1bc27a65910848873203f"
  },
  {
    "url": "assets/js/171.c29e1c77.js",
    "revision": "2695746751753c824512f29f3ee45564"
  },
  {
    "url": "assets/js/172.74cb4d80.js",
    "revision": "a7a5ac3361f7fa8dd6763acfb659f18e"
  },
  {
    "url": "assets/js/173.a50853e8.js",
    "revision": "705d7fea87c726d07853bd73a5f63e84"
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
    "url": "assets/js/179.9aad0496.js",
    "revision": "ca6ace7550973ad84eff354c2354fb04"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
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
    "url": "assets/js/182.229010ad.js",
    "revision": "7eb312edbef13cd3790cb3a28085ff5e"
  },
  {
    "url": "assets/js/183.1bc7579b.js",
    "revision": "2b99e932e859babbaa241724f676a97c"
  },
  {
    "url": "assets/js/184.aee74db4.js",
    "revision": "016b4262af3e701b565bed155791fa69"
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
    "url": "assets/js/188.13644d04.js",
    "revision": "660085d73a72b6f97a840edfb179f206"
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
    "url": "assets/js/190.e3c924b6.js",
    "revision": "63d177edc2c03eecdffae3328f9ec66e"
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
    "url": "assets/js/20.050e4b7e.js",
    "revision": "fb5cd6c8680ced3f355c49fc053255d1"
  },
  {
    "url": "assets/js/21.95164142.js",
    "revision": "19a19c3d18a7fa6f858dd87a340f12cd"
  },
  {
    "url": "assets/js/22.a166727a.js",
    "revision": "9211de8619b601d6ba041fa3d83d6582"
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
    "url": "assets/js/26.727bb961.js",
    "revision": "60b82fbd1c8b166ecd021ff3f5d32d5d"
  },
  {
    "url": "assets/js/27.50e2045b.js",
    "revision": "e2ccbf0996baf02389fa6025a1b04d59"
  },
  {
    "url": "assets/js/28.deefaa4c.js",
    "revision": "b1d4912f94074bb73c9230ad4cce8d4b"
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
    "url": "assets/js/33.969d339d.js",
    "revision": "d631319743167e9514fafcf731f5661e"
  },
  {
    "url": "assets/js/34.df9e3db7.js",
    "revision": "2d0091df67b7a16c21a578a9167a9ca4"
  },
  {
    "url": "assets/js/35.24b5cd4a.js",
    "revision": "48184cd03912261732cd786d8053f75b"
  },
  {
    "url": "assets/js/36.911cbd77.js",
    "revision": "ea7e2d4acd9ee9a19c4171329a6c4d12"
  },
  {
    "url": "assets/js/37.f893928d.js",
    "revision": "b4071b418bc5c94484aa285dda7ac5c8"
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
    "url": "assets/js/42.a5189b82.js",
    "revision": "9943a8e0b4e1bdbc4d746a9790f22571"
  },
  {
    "url": "assets/js/43.5b345feb.js",
    "revision": "28c0bcb50599e7b488bde53c4fc8239b"
  },
  {
    "url": "assets/js/44.559aac16.js",
    "revision": "6958f0e0309b03b0c10e51987ef7e9e3"
  },
  {
    "url": "assets/js/45.8ad2403a.js",
    "revision": "d6c821f1eb9f079a99990ad780b2bfd2"
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
    "url": "assets/js/73.0835e0f9.js",
    "revision": "f59fbc60611a4e0f5cb2451db720e1b6"
  },
  {
    "url": "assets/js/74.0fa6a06d.js",
    "revision": "c4fb585e6817729cda505d986b29c39b"
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
    "url": "assets/js/80.78037ac8.js",
    "revision": "4acf91e619a5ac56ed4c686ba4faccd5"
  },
  {
    "url": "assets/js/81.dbe0db3d.js",
    "revision": "27e90cafb4bf6232de24b7145edcfb6c"
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
    "url": "assets/js/85.ec5e613a.js",
    "revision": "20a094d88d2ad08022d19a97d03b8b47"
  },
  {
    "url": "assets/js/86.c1cf644b.js",
    "revision": "5787bf920ad9f731421c8f5984a2399a"
  },
  {
    "url": "assets/js/87.970f3805.js",
    "revision": "c9d4c4cf215fb04d4782161ad3dd61c7"
  },
  {
    "url": "assets/js/88.fb28a19d.js",
    "revision": "de5aed6a3c5f190995afb669dcf0e06b"
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
    "url": "assets/js/91.f2f8cefe.js",
    "revision": "b2c5df3b27868d49f76526b8b9872a8d"
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
    "url": "assets/js/94.c0e6d4d5.js",
    "revision": "4f327a3b750d173df8dfebb50f28c763"
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
    "url": "assets/js/99.7a1a6ef3.js",
    "revision": "7fcd33000c3a5a835492b29434cafe65"
  },
  {
    "url": "assets/js/app.886fbdde.js",
    "revision": "58e997752c8090c9fbe2a167cb36563f"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "67bd5df3cac76c5bab83373bb09d053f"
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
    "revision": "d4a4d72103f2eab90fc1be349931a26c"
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
