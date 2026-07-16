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
    "revision": "cb98ac8b963a80d636d4f131fae46131"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "c1d00c778d4ffc484dc2ed54708c0059"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "d371f03bb8e864913c3f45c3594df986"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "ea3ff95ec9ca6294cfc9f734f039f924"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "566a9b9eb8e50f5862620452d05f97ff"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "4f05cfb656db5e9a9399e3a22fae1108"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "72fdcadda28fba1e4081e00fa6804294"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "716aa3fbfbc2f7abc9984c5f5835ef81"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "1a5324e8b13fa802e4897e4fa0c23af7"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "0d8262ecf7c35222d436616117984b0b"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "bfc4eba0ea0618c0b35aa45ed5f28bc2"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "c7a7497a65997be132906d1fbbc9b957"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "4b2510d451aabfddbb6eb31cebd36e3e"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "3cccd66eac398d30fd37b79e35c84144"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "47e45d05d473478d1eddc14b02fdd5df"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "2f28ed3b77d769b1b7784a6a0452baed"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "75f53fd72c42dcf208dd44bfffdc11a2"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "556a732ff79c89d1fbacb27b3d69de42"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "7b0c6acc70e05bafba8bcfd771ee02bf"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "8252c73b09289dd665fedc5bb70b03cf"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "39e71dbe2fee5461c57c3234fd582f2f"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "77bdbe86f9fe87324868fb6f841efdb2"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "2ec3dd2e71a8448b744d5327add73f93"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "146a4f32c6f1ceda851a36c6dd9d193b"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "5fe4f2343f73e367fa323e74b7dae738"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "348dcf91b556acf8524496f5741c4364"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "e8505e20fcc46513e40b8c7c33835394"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "0e0d2310d49f57ae978b8e12f545f121"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "a33c3ce4599b5eff2578e04f282b9026"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "f1a9b6fd3e799238bdd817f33268069c"
  },
  {
    "url": "1.base/3.JavaScript/1.global.html",
    "revision": "811413b09acea90099216e9d52e8e42a"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "54bcf5f0dd32057a1e89f481e0c7439d"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "d2ee97d4db9dac5eb45ab19d3f008551"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "66005164b164e5716b54b85f0260707c"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "fb8291bc0fd47b5b0464ff3310c1afe7"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "321e021c939db7928513a9e26a514a8d"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "ec7481573cc18b202f208710b68013b8"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "2071dc54eb855c2b1e7787375f87a0a7"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "1960e16ca94fc9de79b7a5498e043f62"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "791b3cc8c76520533101c038d92140ee"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "50f583bd4345c28c67824b481b3078a3"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "83f5db4c96884fd5bb9375488d15dc6d"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "74c1bb8d2f27a35f95700c5e5e14871a"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "06ae07050ce7db20bb9c8772b58599e0"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "daea3d7b2770c9e6b980cc27a73f2a05"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "d12d5176db62e59fd3c835eaffb62bc6"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "69445ca47b051b759895084f4da82ab8"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "e2b22339ce6a847c0b2003977f8a8fce"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "65201f272b8d84085ec368e3b1ed81c9"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "3d99a73a9103e0c44895ce569787c1c8"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "8b5bf25b012101e2384436b0f06b44c3"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "c5ba8dd90fbab4f2d37bb9390d6a5d73"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "b62f3145125915dde676f82a822f4337"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "b4837b7a030561bc2909cb99777af982"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "c574a88038d28c01a9621e46fe36be7f"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "f5ab4026e3dd3e20daf0b9756e482486"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "b7c0b31da19fd766b0fdf57d3fdaebac"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "02f477efb2f3555a80357278037b0f4b"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "329a33a1ecd222dda4ec955791bdfcdc"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "fd62bf7cca52f989d169a07028114f97"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "fb0557a3759e626c486297e7926d212c"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "eaedb271868b86a27864f422c5c63458"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "dcf5b9a0ea2782119928da6557b9b574"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "036fd2ff3362b11b3a77a2f3bb12af91"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "14f72f03f07bda95142459fa38ba4a23"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "36787254b7d1d10aaa856698f6773161"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "c3a8897142e680535986398e2d2f1219"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "2f54f6a13363772fb876ec5ea8ea0184"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "674804736c55364d35b4a2ece534f59c"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "581849a99452dd1371021e899acf3d73"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "27db85476c76869a61e7db551b6ec7b8"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "4d7f87ae1eb4b3fb04432e220d62a00d"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "f71c603d9a107532636d976f1dae9633"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "d5d1120508396f9e57d672ebe6638b1e"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "57e64a7bf4e37410d5b28b37bf435359"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "83c58833bd0059bcafa1885680df22dc"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "42e3cd409aaa2d093e7707682d466994"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "5c59f231e07656951a0b2d2b1f7aaab4"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "ea60d295a0362342e1932dbb2afe20da"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "f735b692ce648f132ce5508839c41abe"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "59d277c0f8ff32970e89554de131b5fb"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "fb472cd64c9d2532971f24b1538d8b34"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "1501699e215c152d599602c8dd9a5bed"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "8531b076b46a21e771a8346c65c4a0af"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "58339386805d311d008235a86df48ab3"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "60e69e95133469a456d536ad5b9e114a"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "4e8b7eb7ae024dc5447343ea494a5b1e"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "2ee8cebe5fa8eb0a168621efec4f29e5"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "61c621ad6689edd8bc46751042d0a949"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "bd762b3aa90b0b4c1dcb00ee7b0d34a3"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "27b8c1452650496701a678a1dc17fbbe"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "1f11f9801a05df426b0324a9f05b3702"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "99e4fd4e50aa9b05aacecd64203d183f"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "27d6b286d01af731ca753122e9ec9950"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "cc9d2d5d9cc1c826ce3e8b6fed7386fc"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "2cec206538139e3236ee19a25fa89246"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "91a9142b3cdfe91341fa85c37bc809be"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "5b4345fbfbc7391b15b3e9f04fa490d1"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "c995dfd22f4087101c15b0e89fe32f00"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "c40de09e017208d2fb27bd41155a3a25"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "2876b9d702d83293837ea51567661faf"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "8ecaa2471aa2d948f6cd15ab872d3361"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "d9d4d2c75f266300614cc9071f3312e0"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "9f27fe09255c2e62bd6e06b509d4cf86"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "a668f3c93ff9424f3103e97db05f30fc"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "5962aae23de99cd947d1af0a2444d820"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "14d726855a5c10d8677aa62c6d100c78"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "2a107c27b1d8317caf86c955c84cf96b"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "12c2272cdf1e7be9375d702ff9c37c59"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "e464833679e8178735e98870d0e58777"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "ee21726b124425e6bb57478bdd36fbec"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "5d4354517c2473b41a4455ded868a8f3"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "8b3f00a776898a8187d7a00ec0352cc4"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "eb6cee974c6edfd57dab62f52d71ba61"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "8819729f8fe8a97c094443c6dab7697b"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "e0dfea439d066ae90ec84cae5a22e9df"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "4497f756a94164607210ef464ddf6c17"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "4a28e83cc87baf781a0b103dded8b898"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "c89b795445de3bc6461fb1786c72fb73"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "7b7d672abd335689ada9b73443a99d99"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "7637b20a80d8ee26c1dfadd938c7764f"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "27967c7b848f10a3a2498fee81d4fafa"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "344428dbb201e5cd85c4c4552332c3c7"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "5ed411799c693da83a9e36c293ff45d0"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "6e42133916c1a0485e1c0d76292f401e"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "150d2dbf14146d3aa797444285f25a56"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "c7d52e21033e993e7eaae2ab68794785"
  },
  {
    "url": "404.html",
    "revision": "9e24ad033e6c02c4e74fb6a3c311dfcf"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "860c6682f516b9a000703afc9bbc0575"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "3f1872ca11edf4595fab8bf5ad15c613"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "7604f4ee78b57d41ddb7d9a3253d711a"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "8492b4c9aa69c945de181895908df56b"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "ac1ec211e7d5265547977e36b5362569"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "30c6e1f78a0909c9704eb8967f78ab3c"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "d1b62c440bf565890aa430f820db61c0"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "f37224362411401eb07bb205b831b81f"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "5b7528ed409235a2ac3b52e16f875a9b"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "98411ae4f6bcaed1b9384bab247d900f"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "28b5790d44383b27b3075a66490acc1a"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "bf57196c019a705088a70bf7c1a35893"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "45f1665445b62145f4f8d885ce035b8c"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "574ecd13d739ee16cad398027a332eef"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "277616306b0555e188da30f0c283409e"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "ba27237747d78c406d5c25879707b8b6"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "4f967bbc1a19b5016b5970c43552a0f8"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "72718b50cb357fa70ed86971ffc1b10f"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "fb4a720fca61b8a4202d66eaa3578345"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "71449c247cc417ba57ba3fe64a581aa2"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "b085deb2e5ad3406e0e883c9da8095ee"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "2f836ccb821b1a1ef42d2ebcd576da34"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "cb5b9336d611cc31d658d29183d2f078"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "4672f7585ab32d6e0acf3cc45529dcde"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "a7b7369856f3b06f8c5b26999f554171"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "688c4db7a48b2a2723c79ade5a16886f"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "8be348ac099c549748f81410ad90e90d"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "942de1b19ed1dde78484644e274a0578"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "6404c5ad880839a897de24e695166bb2"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "25f0b119ab80d6fc5c8e596325a93c81"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "0f523df8398da672ab40a2abcf7e1cba"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "82b96879b54a423cdefbe3ce0179a64e"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "f492d5758e149460a890b4e66dc5b385"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "b02dc56144f96a42547be471dabacb2e"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "775b1d704303a6281a21b3965f0a156a"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "4aaf146fc64feb3edf29e31676521647"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "9950db97fae6bf2c5287e964eb029190"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "8cfad32a8355e12aadc854111e16bfb5"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "4d8a61319a819cb351f6e68741880f84"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "3946abb03164ec311b44405805b980d3"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "e6f2542e3c68f69f8c368d158aecee10"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "775857f3a84da45cd927dede38957a4d"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "e0e174ed02c06032295805b7b971c4d5"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "baf54cd80cbebd9bdf7b41245a7c088d"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "c9e5f6d1a35146202ea40d48c2872387"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "5c9a50b613dcdf2bf1fb022691c054aa"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "90cfa52f635b65db6c88b341b6246a79"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "20ce7ad72a86c803df695a0250e05a1a"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "6a40378396cfc45093298922bf3e0b5d"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "21d02d9cf8999e2c02c18a663d5c9e3d"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "71f2d45c31159fea17f33cd7960fb68a"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "2885670292c4a8add0909ecb158b7b4e"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "200d938a55fc8acb803f14e759154d3e"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "4695651678a102ee6b63845865db9c09"
  },
  {
    "url": "assets/css/0.styles.9643d736.css",
    "revision": "fd954b2f99e6f1a48cb4ba7b759e208c"
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
    "url": "assets/js/10.4d453b7f.js",
    "revision": "cc49cd0bfa728b7e66ffbf80da5f0cef"
  },
  {
    "url": "assets/js/100.7ce06b0e.js",
    "revision": "3156123f85aee03cfd97427e41a0866c"
  },
  {
    "url": "assets/js/101.e6c0bade.js",
    "revision": "8ba06e9b902745410baed09be38000bd"
  },
  {
    "url": "assets/js/102.2c210b22.js",
    "revision": "2e8488d7dd522a777cc68365a09b508b"
  },
  {
    "url": "assets/js/103.29856002.js",
    "revision": "20aa2514ec093fcceeb5c36df271e838"
  },
  {
    "url": "assets/js/104.b87ea893.js",
    "revision": "654e6fb57684a183bf48a586077291f8"
  },
  {
    "url": "assets/js/105.54606b61.js",
    "revision": "063a18953569efb1cd5e8f649255968b"
  },
  {
    "url": "assets/js/106.ec44f67f.js",
    "revision": "30d140491cc7078dc754716e5ab99a21"
  },
  {
    "url": "assets/js/107.cb28839c.js",
    "revision": "7abb8f1c17ee0a470ae28086de64c898"
  },
  {
    "url": "assets/js/108.4b18372f.js",
    "revision": "201cc6b97439fcf03a0a60036efa70e7"
  },
  {
    "url": "assets/js/109.bc55dc31.js",
    "revision": "fc12a04bb2ec4e79291eba97e27285af"
  },
  {
    "url": "assets/js/11.cd6f514f.js",
    "revision": "835c91ceecd5065933d7b0da0b0854a8"
  },
  {
    "url": "assets/js/110.80b26b45.js",
    "revision": "7bf3f61eb556aa2f7a4e197512190d3e"
  },
  {
    "url": "assets/js/111.971913ca.js",
    "revision": "ee8ec9d4948f35872c7a8d4c5bd2512d"
  },
  {
    "url": "assets/js/112.3a4ad73b.js",
    "revision": "cf0797cd5e97e6685903d5e6aad6b720"
  },
  {
    "url": "assets/js/113.0353f228.js",
    "revision": "2eec6a0bb1ce24610a5f9c020e6ee257"
  },
  {
    "url": "assets/js/114.252090f5.js",
    "revision": "15410d107dce9bc27a007ff366e6484c"
  },
  {
    "url": "assets/js/115.59327a62.js",
    "revision": "0837584dbe4cbbe76270ef117d5d0270"
  },
  {
    "url": "assets/js/116.ba3dbcf9.js",
    "revision": "584516db939f700540675d73ca145f2b"
  },
  {
    "url": "assets/js/117.ce43da69.js",
    "revision": "25e0f9034bb40c6bea2f80f5111500ca"
  },
  {
    "url": "assets/js/118.dacb0eda.js",
    "revision": "dd8f0609c6fc58d9d0fa6286cf020ca0"
  },
  {
    "url": "assets/js/119.15118963.js",
    "revision": "c87650f34cf5f519849a7966fb2df3d9"
  },
  {
    "url": "assets/js/12.5f7d58fe.js",
    "revision": "e05206b6bff208325f9282a0ea0f6f09"
  },
  {
    "url": "assets/js/120.f7b6c53b.js",
    "revision": "bcd58a775c7fd45656418be9f23d1487"
  },
  {
    "url": "assets/js/121.990e1458.js",
    "revision": "8f3d7918276f681e8f24f3dc6f5d1b82"
  },
  {
    "url": "assets/js/122.b226bb4b.js",
    "revision": "2d7de1cf03d512c1828ceb048ea33f7d"
  },
  {
    "url": "assets/js/123.f5687c7f.js",
    "revision": "dbff87f7f7259fc73cce8b9e889351de"
  },
  {
    "url": "assets/js/124.f2e9d7ac.js",
    "revision": "4007c23b7c8117b09f6311844866d458"
  },
  {
    "url": "assets/js/125.adc6f2ef.js",
    "revision": "4bce049ec39ec0e2ea34a33ebd4e15b4"
  },
  {
    "url": "assets/js/126.8896f080.js",
    "revision": "dd3d18f756383fbe96ca7543b3c3063b"
  },
  {
    "url": "assets/js/127.4bc2595a.js",
    "revision": "040a9d738775d1fbc3b3590c09eaef22"
  },
  {
    "url": "assets/js/128.251fe75c.js",
    "revision": "da9a9dafb9e941dcc771574355db56e4"
  },
  {
    "url": "assets/js/129.a79b047f.js",
    "revision": "ca4480d194b362b4447435b6392b22ea"
  },
  {
    "url": "assets/js/13.8e0c8d11.js",
    "revision": "c1a15a3be1a46aaa8a7cc8dfc9a56de4"
  },
  {
    "url": "assets/js/130.a4343b41.js",
    "revision": "b76cc2346eb69f5d9730a1b979ea6579"
  },
  {
    "url": "assets/js/131.472415c3.js",
    "revision": "4c38630e1f436724445adcf6e31ce6d0"
  },
  {
    "url": "assets/js/132.211513f0.js",
    "revision": "1b89a7da53291441369fb201c7992734"
  },
  {
    "url": "assets/js/133.fb373080.js",
    "revision": "0a48f822917bad80de5ecdf6f1d7e111"
  },
  {
    "url": "assets/js/134.ec7506c5.js",
    "revision": "e767b88a36c09093b6f92c47b0601849"
  },
  {
    "url": "assets/js/135.c90a10fe.js",
    "revision": "abc4c2172f1415166cc8d362ef8250df"
  },
  {
    "url": "assets/js/136.293d3c6f.js",
    "revision": "dae4b9256dd8768954eaac4728295fc6"
  },
  {
    "url": "assets/js/137.715f0a3a.js",
    "revision": "6397205204d67a18e91a994e0c042893"
  },
  {
    "url": "assets/js/138.9e3f0334.js",
    "revision": "69feb4e9419ec574f4dde943eef6c6b7"
  },
  {
    "url": "assets/js/139.19a4dba1.js",
    "revision": "2c3294a64981946d9c2967712c9df0e3"
  },
  {
    "url": "assets/js/14.908815ff.js",
    "revision": "c64a28ed2e519e22492cc2b48970491e"
  },
  {
    "url": "assets/js/140.bce8ba0b.js",
    "revision": "4083c0f82f9e7aafc2efa8d2bd203609"
  },
  {
    "url": "assets/js/141.20eb7feb.js",
    "revision": "31ce44a65a6effb6fdec7992b6b39b9c"
  },
  {
    "url": "assets/js/142.3aca064f.js",
    "revision": "f2f3cc6474e119b91ba38bc21f3f10a9"
  },
  {
    "url": "assets/js/143.01758cd0.js",
    "revision": "19d1348f3fb4e20615b4866776ea17b7"
  },
  {
    "url": "assets/js/144.58803e67.js",
    "revision": "45c99f1ac3f385f33bd447fd7269285a"
  },
  {
    "url": "assets/js/145.d9be5d35.js",
    "revision": "692eece9946eac0a1cc958ab193d3342"
  },
  {
    "url": "assets/js/146.dc0251a0.js",
    "revision": "6d527032a9c7bd8a1e5e147c4deb7bac"
  },
  {
    "url": "assets/js/147.f9a62964.js",
    "revision": "15bd677e1b72724c05459a1c2f5f679a"
  },
  {
    "url": "assets/js/148.967bb309.js",
    "revision": "b8cc675d7373ae3b866459c88f16f155"
  },
  {
    "url": "assets/js/149.88c90410.js",
    "revision": "398d1b6d651e7edbda7ba49a9eac6b18"
  },
  {
    "url": "assets/js/15.2fe79463.js",
    "revision": "47d37280b0711f308517983139b89e20"
  },
  {
    "url": "assets/js/150.55ad78e6.js",
    "revision": "bc36dbe8fcc68404f7964507e0319e5e"
  },
  {
    "url": "assets/js/151.1e2409d1.js",
    "revision": "a3a4e9c0f39328625c6b88f162c30e2f"
  },
  {
    "url": "assets/js/152.ddecda63.js",
    "revision": "ab8643beea8952f325fe4a2c1e2abc3b"
  },
  {
    "url": "assets/js/153.5daf864d.js",
    "revision": "3e4ea170bfc6bcff8cdf15029857d33f"
  },
  {
    "url": "assets/js/154.aa44d2db.js",
    "revision": "91dd09f99f32d4c55c6c8a0a5c564fbf"
  },
  {
    "url": "assets/js/155.ca9ff9af.js",
    "revision": "cd09387a1b2821a1e2866b95268e5c15"
  },
  {
    "url": "assets/js/156.b2459e80.js",
    "revision": "b2895bc6aac096e736917780f3d9dde5"
  },
  {
    "url": "assets/js/157.07d97062.js",
    "revision": "d927d5c31cae847c238e3e5c8447c156"
  },
  {
    "url": "assets/js/158.368ea326.js",
    "revision": "76d770a0f8a03481cdeebc21dd07ae6f"
  },
  {
    "url": "assets/js/159.5659276e.js",
    "revision": "1b4f1ad82e37680db5c09a08a65b97b6"
  },
  {
    "url": "assets/js/16.a4a3c26b.js",
    "revision": "efdf5c3b9253d7995c8c4281f4a75ad7"
  },
  {
    "url": "assets/js/160.2cd4ff1c.js",
    "revision": "5de60bab9fcd6fc4c68cd5005629a1ea"
  },
  {
    "url": "assets/js/161.48d65813.js",
    "revision": "2c96a05f19cdeb4befe413d0f5554ebb"
  },
  {
    "url": "assets/js/162.b764b378.js",
    "revision": "635ec159c599cbedea70160fcdf09a7c"
  },
  {
    "url": "assets/js/163.81144c12.js",
    "revision": "7097dce996320b7151bb6b3327a75cb3"
  },
  {
    "url": "assets/js/164.6ae1ecd4.js",
    "revision": "50ebf0ceabdba96bb5419823f1423002"
  },
  {
    "url": "assets/js/165.779df30e.js",
    "revision": "9383c287bfb346c9c85ac8290c5e0f18"
  },
  {
    "url": "assets/js/166.f51cb461.js",
    "revision": "3cd4dace2bf8e516a5bd4532474d3087"
  },
  {
    "url": "assets/js/167.03164cf0.js",
    "revision": "5310617a9c182679e2cb614db66e84e4"
  },
  {
    "url": "assets/js/168.deccf901.js",
    "revision": "b8ae985b4d098037b96fb798192b5eee"
  },
  {
    "url": "assets/js/169.4120d0f0.js",
    "revision": "cc646ec4eaa4d27b8bf8b7da8d8b955a"
  },
  {
    "url": "assets/js/17.3e8ca80e.js",
    "revision": "96f69d8e625d897012b25f1e81ae9fd0"
  },
  {
    "url": "assets/js/170.e64d5583.js",
    "revision": "a8fc83ae34bbed020e5b42ecb52229b2"
  },
  {
    "url": "assets/js/171.428472ad.js",
    "revision": "487e6667bf92a5a61b7919b4d4e6c97b"
  },
  {
    "url": "assets/js/172.6b94dd32.js",
    "revision": "3af30dca309d6cffe1ceda98cfd97cce"
  },
  {
    "url": "assets/js/173.abe9fd8f.js",
    "revision": "fcb3f81c693a652610572fa464c12de1"
  },
  {
    "url": "assets/js/174.031e22e3.js",
    "revision": "aac48eead644f0dcb8dc6827fdc047e5"
  },
  {
    "url": "assets/js/175.20ed2fdd.js",
    "revision": "8304a2efce21cd7e2a35b224d92a65e9"
  },
  {
    "url": "assets/js/176.8d750b23.js",
    "revision": "492db193967da2d2cffbf11210450835"
  },
  {
    "url": "assets/js/177.b69fb72f.js",
    "revision": "241dc34ea71d8cea2f5b4610aeb2882e"
  },
  {
    "url": "assets/js/178.85aa757b.js",
    "revision": "b01645c4266686f645317f1e7eb9facc"
  },
  {
    "url": "assets/js/179.c2707387.js",
    "revision": "58f478e0117c47370b622059ef15ce0d"
  },
  {
    "url": "assets/js/18.8604a8b8.js",
    "revision": "6aafd0c8436b241a50ea771f29ee3e77"
  },
  {
    "url": "assets/js/180.eebb700b.js",
    "revision": "3c5e90aaa7f38b4e52fe069bfb2a28de"
  },
  {
    "url": "assets/js/181.98f8131e.js",
    "revision": "7d2a79df8c98cf399763841835743d82"
  },
  {
    "url": "assets/js/182.b58f11e6.js",
    "revision": "08bcdf98b5a9b6262a1922a92c62f0fd"
  },
  {
    "url": "assets/js/183.3fc14f67.js",
    "revision": "a54b54f2ee40e54c46e47c91bfe4a41f"
  },
  {
    "url": "assets/js/184.73c54781.js",
    "revision": "b8e943f52e97c1e85519cf2039cfb57e"
  },
  {
    "url": "assets/js/185.24169b46.js",
    "revision": "5cb4874bfae5aaeb3d019d06a26c282f"
  },
  {
    "url": "assets/js/186.3ccd59d4.js",
    "revision": "5546350773ed0bcf037c0f4dddd930f4"
  },
  {
    "url": "assets/js/187.1d60f0b4.js",
    "revision": "dba5621cd77ae714f17d5c77a5f2ea11"
  },
  {
    "url": "assets/js/188.5af88e6a.js",
    "revision": "8ade44a2f8d2a19b0300174b033f0430"
  },
  {
    "url": "assets/js/189.fd0d5988.js",
    "revision": "d7e4042b86e60c3ce5b3d9094ec29198"
  },
  {
    "url": "assets/js/19.643b531d.js",
    "revision": "ce994ed79764d772ebd9229c6b86234b"
  },
  {
    "url": "assets/js/190.d2cd031b.js",
    "revision": "eff69a3daa08c1c44c13dd307f6ba14a"
  },
  {
    "url": "assets/js/191.5304895e.js",
    "revision": "7eb572295ee5971679015848ca263357"
  },
  {
    "url": "assets/js/192.97a0c5be.js",
    "revision": "1e6cdd73077425ac0432f390a67d30be"
  },
  {
    "url": "assets/js/193.013dce6c.js",
    "revision": "92f8df7514d7ff5445bf919bdb862531"
  },
  {
    "url": "assets/js/20.c0265fbc.js",
    "revision": "f21a06e77cfb8812dfe147640a546e44"
  },
  {
    "url": "assets/js/21.f0cbf6eb.js",
    "revision": "226e4a2c3db695d58a0f03879b1b14c4"
  },
  {
    "url": "assets/js/22.bd99ea11.js",
    "revision": "160fc58f0c5713f62be7a52be7dec60e"
  },
  {
    "url": "assets/js/23.fa0c40ae.js",
    "revision": "41ab07d2b3f8afbb79bc04277e663db9"
  },
  {
    "url": "assets/js/24.e232bc69.js",
    "revision": "7052010bf8091c1e3d82b097a0f6f1ae"
  },
  {
    "url": "assets/js/25.f7a9c453.js",
    "revision": "837764be968553487f5a369e44b7fc08"
  },
  {
    "url": "assets/js/26.52aff087.js",
    "revision": "86d3da24a3f561a16ea1df1bcfb5dd65"
  },
  {
    "url": "assets/js/27.ef96774d.js",
    "revision": "22011a0e56c0702a77d789c53b563c8a"
  },
  {
    "url": "assets/js/28.1388f031.js",
    "revision": "92c8ad08b59f93668db8acb34e98b5c9"
  },
  {
    "url": "assets/js/29.2006ac7a.js",
    "revision": "7ba7ef2e98852d86aa56c60ccdf879fc"
  },
  {
    "url": "assets/js/3.35830f29.js",
    "revision": "9a11498fd122f65e9b78df45a85da519"
  },
  {
    "url": "assets/js/30.0fdceb33.js",
    "revision": "736311ac67d1062d9402de1159089af0"
  },
  {
    "url": "assets/js/31.d9033260.js",
    "revision": "9a3cf46e8f72bc3d4e096d8987f4993c"
  },
  {
    "url": "assets/js/32.7e07e7f8.js",
    "revision": "f7f2d83f9c2aa9cb6a8427a58bd124ec"
  },
  {
    "url": "assets/js/33.93faf869.js",
    "revision": "941215fb698c2b7eb44f922c0d02212c"
  },
  {
    "url": "assets/js/34.73167771.js",
    "revision": "b4cfad54e6e2282b7553323f3f55ee90"
  },
  {
    "url": "assets/js/35.66d10aa8.js",
    "revision": "66dbf2cc43e2692eb21cd215a6fc1baf"
  },
  {
    "url": "assets/js/36.797cb337.js",
    "revision": "5307cc83ee0397d4b65c9a38f00dcdb2"
  },
  {
    "url": "assets/js/37.b6331e37.js",
    "revision": "d4d19c4b46cea05ab7f94ab0c3c3b8de"
  },
  {
    "url": "assets/js/38.7e1097d4.js",
    "revision": "f275155e0f1b6bfce0a76810b06d06b6"
  },
  {
    "url": "assets/js/39.f516ddda.js",
    "revision": "53151dfd91ad1cd3e69087f6a0e7e5c4"
  },
  {
    "url": "assets/js/4.f7e61278.js",
    "revision": "156bd1133b8c054f6522612e6828bbd0"
  },
  {
    "url": "assets/js/40.f2368bf2.js",
    "revision": "a7cc5ea363ccfe4c9fc4f534a5e35871"
  },
  {
    "url": "assets/js/41.68df09a2.js",
    "revision": "510134a7389e68277f42b8cc752df840"
  },
  {
    "url": "assets/js/42.78f19bc5.js",
    "revision": "74fed6e68afc85ebc85b4b41162ad626"
  },
  {
    "url": "assets/js/43.2d90f892.js",
    "revision": "ac6fe98a2415ea72cb8e368138056c1b"
  },
  {
    "url": "assets/js/44.e46f9224.js",
    "revision": "fec692a1f31f59a21e2f739489e481a5"
  },
  {
    "url": "assets/js/45.cc7291b7.js",
    "revision": "2db115fe3259f55a7d92923f82096c35"
  },
  {
    "url": "assets/js/46.0598f40c.js",
    "revision": "21e1b151ab6a5dd5e5db903ef5c73311"
  },
  {
    "url": "assets/js/47.ae9cb24e.js",
    "revision": "b4910b6d3a9c9c715743e47253c3e008"
  },
  {
    "url": "assets/js/48.5a66327a.js",
    "revision": "25762d340fd4682c17efb98befa8319e"
  },
  {
    "url": "assets/js/49.f3921799.js",
    "revision": "b33980a9f14a55257e0433754604868c"
  },
  {
    "url": "assets/js/5.4e4385b3.js",
    "revision": "ffaebf5c41e22cbc1a89c75707157665"
  },
  {
    "url": "assets/js/50.907a0e07.js",
    "revision": "16e598451c7a239399ce69aafe63ab24"
  },
  {
    "url": "assets/js/51.ef191457.js",
    "revision": "ca14fc364315b6e5c8afb960b02d5851"
  },
  {
    "url": "assets/js/52.9b995553.js",
    "revision": "d14473766a13a841ee4e690c8accb5fa"
  },
  {
    "url": "assets/js/53.8dd475b3.js",
    "revision": "72d2264f447a24f98eae2b5e8bf0d6b5"
  },
  {
    "url": "assets/js/54.b410fc8a.js",
    "revision": "09fa263f89e77f8e1b0fe10ff6424270"
  },
  {
    "url": "assets/js/55.afc8c014.js",
    "revision": "125c1c153b08d74fe37d85763b83c6c1"
  },
  {
    "url": "assets/js/56.4018e97f.js",
    "revision": "2be2b3a377232627105f17ff65b63476"
  },
  {
    "url": "assets/js/57.ce0d2bfc.js",
    "revision": "5a9b9a479dc98e18e69f9f46908717a3"
  },
  {
    "url": "assets/js/58.b22497e5.js",
    "revision": "c70ec5bc4c82619f986db006e080ceae"
  },
  {
    "url": "assets/js/59.a494232c.js",
    "revision": "04a940e278925a6385e6d70c9ac526de"
  },
  {
    "url": "assets/js/6.89c40a7d.js",
    "revision": "40c52f761ddfffc41d4951e49a045fae"
  },
  {
    "url": "assets/js/60.27584974.js",
    "revision": "cd765a6e83853190c95ca1b3f77b2fb7"
  },
  {
    "url": "assets/js/61.e7eefa5a.js",
    "revision": "8beb9b08943b2d6cf54a48a1df4bda38"
  },
  {
    "url": "assets/js/62.43455ac0.js",
    "revision": "ff2d7399e7666fe490c7f443ea5c1b86"
  },
  {
    "url": "assets/js/63.647e4015.js",
    "revision": "0a2b7db24bfc9d92ae0b8c8139c820f7"
  },
  {
    "url": "assets/js/64.c61c88b5.js",
    "revision": "9c19464e89843d8f44b24cfd6767bf49"
  },
  {
    "url": "assets/js/65.69fbc6d7.js",
    "revision": "3cbdadde6cfe8794bd3006303f8a5a14"
  },
  {
    "url": "assets/js/66.baa98658.js",
    "revision": "137768d4b1d61755daa9fb01a6a52b2f"
  },
  {
    "url": "assets/js/67.b2830254.js",
    "revision": "3c33b9f7f7175d009086638758114b7c"
  },
  {
    "url": "assets/js/68.8d20137b.js",
    "revision": "3db3411f350931b7d47ea1da54b690c3"
  },
  {
    "url": "assets/js/69.26a47ac3.js",
    "revision": "0c6f5a67b88f2a58bd84df6b5b818ab1"
  },
  {
    "url": "assets/js/7.a528309d.js",
    "revision": "01dfafe6bc2e56669e736d688cd074ad"
  },
  {
    "url": "assets/js/70.5715f56d.js",
    "revision": "73d90456fc44b1ec742af232cf0d4284"
  },
  {
    "url": "assets/js/71.634873b5.js",
    "revision": "01c94547dcb4da5f98100e5b26e8bc54"
  },
  {
    "url": "assets/js/72.b651e270.js",
    "revision": "928f98c5b5b1ef686a1e42e73dba5d82"
  },
  {
    "url": "assets/js/73.40481cd5.js",
    "revision": "5222c9c4131a5480de2c8855ba6f810b"
  },
  {
    "url": "assets/js/74.dc5f30eb.js",
    "revision": "07b1dddad9061ebfb79d711708b29756"
  },
  {
    "url": "assets/js/75.9122f5a0.js",
    "revision": "3ede216a06fa2cb58903be8aa75fa3d6"
  },
  {
    "url": "assets/js/76.736e0b07.js",
    "revision": "ab1a825bc9d69e78867d0473a790e847"
  },
  {
    "url": "assets/js/77.8d3610f8.js",
    "revision": "f866131df8a56cacd547581dc1275d8a"
  },
  {
    "url": "assets/js/78.6f405ae8.js",
    "revision": "464f429f6ed77dee924b869162be343e"
  },
  {
    "url": "assets/js/79.885b43d1.js",
    "revision": "2b710ae16adbc6f4c4fea354be483099"
  },
  {
    "url": "assets/js/8.1a15ae6f.js",
    "revision": "31919f37a455478bea152ace7ed7ab14"
  },
  {
    "url": "assets/js/80.b0d1d1eb.js",
    "revision": "65db649eb245dd9bbff2449d898dfc51"
  },
  {
    "url": "assets/js/81.ff7f478a.js",
    "revision": "25b3682d4433348080c30d0aea3b85da"
  },
  {
    "url": "assets/js/82.2f8db502.js",
    "revision": "0ea9952da54e91a58e170c8b9b42e143"
  },
  {
    "url": "assets/js/83.fbf69284.js",
    "revision": "a40b2412dad24d00950e396b7ed56eda"
  },
  {
    "url": "assets/js/84.ac9b9687.js",
    "revision": "aaabe2657b9a6555382a9259daa14caa"
  },
  {
    "url": "assets/js/85.468611ac.js",
    "revision": "44185f396d5454092684c5a0dd0e71d0"
  },
  {
    "url": "assets/js/86.fc06bcf3.js",
    "revision": "4ab7877f073770e042d1f62ccf283c95"
  },
  {
    "url": "assets/js/87.481a00a4.js",
    "revision": "574a477c0850e35b197392129141c32b"
  },
  {
    "url": "assets/js/88.0799843a.js",
    "revision": "a69f749eb827c8953396169419bc4e6c"
  },
  {
    "url": "assets/js/89.449be8fb.js",
    "revision": "b45b5ee9d998350434831ed6cc54b28f"
  },
  {
    "url": "assets/js/9.4cfd5cd2.js",
    "revision": "f85a999f5845b0589675bd4724bf4eea"
  },
  {
    "url": "assets/js/90.c9f8dd1d.js",
    "revision": "af64ed25be209186173b931c8ec50724"
  },
  {
    "url": "assets/js/91.6b9dd109.js",
    "revision": "563f57b4c1d30f343b9461b1bfc5f8af"
  },
  {
    "url": "assets/js/92.37aa1686.js",
    "revision": "6461d192a4405dc289ee541a3bc61707"
  },
  {
    "url": "assets/js/93.af0901de.js",
    "revision": "e5dabb4bd0f56dc9440261004f37215f"
  },
  {
    "url": "assets/js/94.b9257277.js",
    "revision": "ed507b9ba351dfb7e5cee94629ff46f7"
  },
  {
    "url": "assets/js/95.86dfcabc.js",
    "revision": "ffd47c9fe5b17f3a1c716f055a970e97"
  },
  {
    "url": "assets/js/96.113a56cd.js",
    "revision": "cb422ff1ccda662f2b5d770796b94b0f"
  },
  {
    "url": "assets/js/97.0d838445.js",
    "revision": "c6cc53e0abcb679eceed57e0c83ca3b6"
  },
  {
    "url": "assets/js/98.d7367255.js",
    "revision": "a64dbc11bd95f807b34b74a5f151e1da"
  },
  {
    "url": "assets/js/99.5555a53a.js",
    "revision": "6e7ab458298abb2d1d6cd959a152cb35"
  },
  {
    "url": "assets/js/app.bcbfa7f7.js",
    "revision": "1430696256367cd2f9b94a9123748f59"
  },
  {
    "url": "assets/js/vendors~flowchart.5fa9d3cd.js",
    "revision": "d08f25881c7f3a8f859b5b69bbddf33b"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "dc8eb567fe0e4c6100117be25b71b91e"
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
    "revision": "b20cc8ca0aa523e05b4092c34af674fa"
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
