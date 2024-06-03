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
    "url": "1.base/1.js/1.index.html",
    "revision": "0972a3ff7b6c81ba9a52d30fdbefcd2b"
  },
  {
    "url": "1.base/1.js/1.syntax.html",
    "revision": "58a38249003b7f4f464c9c6bc3f30827"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "b80cb002aa3012630c2f3bb0c37e7596"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "b364984f9d50c6a5805e0b7d37b4fad1"
  },
  {
    "url": "1.base/1.js/2.expression.html",
    "revision": "8ae3f66c5a9db67bd9505fd22d14c3ad"
  },
  {
    "url": "1.base/1.js/3.statement.html",
    "revision": "4effed178bfa793657e6955b4dc9a9e1"
  },
  {
    "url": "1.base/1.js/4.datatype.html",
    "revision": "8dfc85bdbdff0af162cdb802b2276038"
  },
  {
    "url": "1.base/1.js/5.var.html",
    "revision": "5946123ca000dcf05cb87473b0c3ee7c"
  },
  {
    "url": "1.base/1.js/6.function.html",
    "revision": "31cf02a7942bd8828ffbce4e24a5d63e"
  },
  {
    "url": "1.base/1.js/7.require.html",
    "revision": "184e3b47f96264c32989db2c69242548"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "82a388a63b668600aef7fdee60f40acf"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "6023d6c0b1ded1effb7e6e6463fb4e61"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "b4ee169657d12335d20b45cec9cc25d7"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "ffa49751015a8e12e13c6b85db5c235f"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "4a7bbed6800c7591422a1374f674b70d"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "d792a7386623128618793200a4c200bd"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "c0d4525b7b0b31cbf20b9f1da644bc13"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "cba1bec300dfb8017118ac70cfb016dd"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "5fbf290a1665ce92ffb328deb3dd8ce3"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "5d6919b25952c637d73ea7bbf7ac34c5"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "2884be9f6329f3a18df09c0d98c8bbd4"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "34120edda1dae9b206ff0d5205805a04"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "a14ded9282a48a57ec08e18cdc31bcfe"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "f2c198dcfbaf2ba6480e49a986490694"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "c8f250bf84db5a0b4caa090784d620ca"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "c32143ac0bad4c670931c4376f145771"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "2c98e2b1925ec8cb9d65ac10705c10b5"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "7dd87d72ef7f588e6dd3ffb981a1e164"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "28159a0fdde4cbbb57d3957fc35f5fcb"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "2450574210a880c28bc914b0f831ef64"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "40de1d81882896adbc09e4ad26470562"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "ab4ecdcbb5d88a5fb8e6f7a18b16c559"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "a8d3545307d89e2c4db48efd1245a732"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "8c17c850dd61f317a2363f7b48d554c6"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "1dc8b9d63bd8cdeeac93c43e955ce785"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "ab0bad21b578b7ea8da9f3db4b52817d"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "482468893fb89e447f8b42b128f0ab78"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "9c5d691e58992347a62e9b6c775416b2"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "4b05cfc112ab63d7e00c7e7e91d1238d"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "1fff3512f028d71ba9e79bd7d6db5c1b"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "e162dc878bfbbbb2cbfdc3b6b83f91eb"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "fbb77a8a51727890a601c530e2fe6fcc"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "1fd47f6aec97069cadfd71f56d31fe36"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "93b7bd29052630f982f82b1ee449417c"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "1267d8b2037e68086fd230d951a6a282"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "1126f9cfd2c4ee000122c7b017968d51"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "45d86a869d7cae08dbc4258736bef881"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "06d2a5645b4f54e50053523eb8381784"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "fdd830d1327e2130f8c164d0dfd4293a"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "e19ac0c69e2936731a59baf5bad9bfce"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "f1b674f95a4dbfc6308528b73f9ecf9c"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "0f52fb373ec6259ed3d9ea6a7d0eb42c"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "995cbcad3cebd2a67243cc423349085c"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "b4e98accf54b4079b6a55db583fc06f9"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "4dce015d78d77867938a0be4c85d8bf4"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "0047fe37f5cc6ef841c3cb4127f8a602"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "9903c38ea0a1e8f6cf5f30052b732b69"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "0cdb71c4093dca72c23915d2ac383abc"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "557ce53cd27ecc6297c6fa586db22349"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "9f3c7fe633d5cf546910104636ad6269"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "85964246154026abb02662abf894e5c8"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "5020c571caccba506a73cb8c7bd3e74a"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "a02e87fdfb541fb8cabdfcf90f5d6470"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "b047860a0a03cafec6116470274ebf60"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "a62bddfbf8550c0285864dc4d23de1f8"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "a2d2840406c73d5169ec01bdee7df602"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "a2a32956ff971c5e9775e43983c29a74"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "e6222ee104c180daa9d32c03eb258621"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "52cce97e2c21e24b8285692cb7adb25d"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "a79491d879fa5afc749089e4d0244157"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "20e0111c54483edb59920ec954529203"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "aea9c90a65467d704012b897496f21a5"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "cfddc3542decd0f86f6f3c468d64e842"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "d51703c427f84ee04303353f53bc8fb4"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "c61b7d602cbc70890e4ec94d3ee64147"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "2a77193cd86bd2f3591dd480650a16ca"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "d69809deba979876731b1cff245e917e"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "45d4d8702d96c0c507d8306386b4fc97"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "30e139bee2a37f4f1e4427fc90a7bde0"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "491a42595fe7f8f881d22aa7ce1f5640"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "e05cedf27293c057b427c0713abdb938"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "10623a5a4ed4dd1f1273009d6a477f27"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "86cc04b158bcedd514e1ffa394e07f33"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "96e8e0d39e57b2f3790b9db44106a185"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "31cd2df09860035a993aafd98902f371"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "5a054f5ce11cdf5aa3865085c2b1e8cb"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "04b5177b48397e219f668638a5cca941"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "0bdb8a7e40ece5f19d1b57d1da9377b4"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "6333c96816a632bc24c7c491a7427733"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "7299c78f5497e03fc57484c170e14f64"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "7ccc0fdd017832b276cbe7435dc600c2"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "e75b6268e25ee50b596ace44a6a2e45d"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "689e701b5575ed0483c974ce6034ac43"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "e0707f30fcaee1e11d3d65b0b17e8c5f"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "902ddf658825a533e85cd00966af02e8"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "55c3a8d84ef4925678d15d70f700a906"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "e64fdef15cc2f0d12ee198c862501dd7"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "458dc3a7129407afa461fa1c97a38569"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "8242c3a110b53b5184b2ed214f6e6f21"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "ac0f6e7f97a43f9b8b365952892fcf83"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "86060488ecdf320c0a8f87ab35cdf9ad"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "7664897baa926b882885a72011703f84"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "e42969a3752c4859c480c3caa49fff9e"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "cde412032ad108b547203ab483ee1b25"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "da61ac4aa2db49b6994833b1d0dfc5eb"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "1812fcee346b99b2375816fc2ace0ea2"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "cfee6248c1fa6c6af77f55e3a23235b7"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "9d1d9fc79971bdf70b9e25c0285ea17e"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "ff4e7965ccfa02271a086b858bb5344d"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "b9e99fb9180a04ca62c7eb0dd2a2db4c"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "09f6fc669551b0d9f48dd0aba96c5953"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "47d795ea1cd22c87e922d0caf7f7689b"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "f21be3fbc5cd74b552ca02f7df92e90b"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "3db59d3b9a154e3b7c874313d2c12ff8"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "5a406ca85db701bc388fba59fb296aaf"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "a0a4098c9d9a9b09cd334f1b281c0d4e"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "97191e43f6b8a752d577525e436aaf13"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "062562a2b97d63af8b13f00ed6df13b4"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "749a4eb5d987514daf706d1ebbaac3dc"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "3661a6ab68ccea4cdaeb200aa46657f3"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "0767d29a2e9c9da141cb622070bbf695"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "2c101612475ac08e82b0defa8c76fa53"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "17fc7b7ab534c0ec8fbe862061bf0a9e"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "cccb7810d3d869a218dec6e6618cf333"
  },
  {
    "url": "404.html",
    "revision": "f1fd71868795d491767cd2fdfb4057e7"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "ae70b09627da3d8f77b49951eab9084a"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "e71bbf6818fc91c450998d304b168605"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "2f4c163db16da8f1033fbfcff43f6886"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "859df0a7008d8015cd7da47f5f57436b"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "d2fdadde193ccc3cfe31f9bea9b026ff"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "24c7a7cb9ccdab1666dd4ebf9c7da735"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "ea813571ecc9bca811248fc36f33665f"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "c33b475f662193f7b1215ba64e3f792b"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "4d840c12e4c28128c2d473a3c2c2f73b"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "dc9dcd24ce43ef3a717edc87b43975a5"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "b519c57042cbf7b94d4c90d10fef2f4e"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "86b9fb3b92d388d6405b58d7422232e9"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "5eef7c3882e1c80d5e63ef0862e5e6a4"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "624838a16eb8e1f0727ecc231c5cf1a5"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "560f4b5e35a8d3a2ce2b7f882fe39686"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "30b6358817c32d05e9e2eb62a3f2a477"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "b21a62e24805cf8a2070cbeaaf5d295c"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "343f07638b13706a6a4a840aa2173dad"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "64bddcb055ca9002c6c6edca5f7917ad"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "8d2fd45d11a89653a7da7979b2c34546"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "d1605a7b42284f98dc6ad84aa61eafd0"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "8713b670119ad9bd9de796a845d36beb"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "d23f8e04bebfe58813f85ea13c13e324"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "025f892d8a94963844b727e34dd3ee0a"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "011ee3fc3e62ede2ed2cd00817e4685e"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "16ab8e5893744abaadeeef4c0dc9d1eb"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "121fd321c86ee9342012522a3cd17d0e"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "a8755bb9846d32c928924f9d7990318c"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "92ba99e258180e311eced9ccb5133fc7"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "36ef024362f6beb3d4d13eccdd3f35c8"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "82d2b774ffbcccb70f8ca185c76efb8e"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "5a9d4aa3545afece85a4341678ab46a9"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "5c8a69fea9bfa7b7a9e9cfab15e41509"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "154a8d0d355f7f86416890e54f7402d2"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "a50177533cccc940a9372be41c65e1d1"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "c41b16fccd2dfb433adeadedf19fcad7"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "efb5f66c279ca9a4cbb72aac2b79fdd3"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "5c5731d5bc93092d06cc4f8ffadfc743"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "560f141614965422bbed0a6fe94fc1fd"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "b7ad4fe53c3dce49b1c9a8b73c2e5f54"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "dd29473c6516626fc6949918e6550a8d"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "2e741b7c63851062a761f69e9a91ac81"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "4629692695ca7f73cdf6fff30de03aeb"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "d736e9297333ee83c84a0d12bb49178b"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "fb4881e74563afb3bdf24dbc347ee877"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "1adf3a6d33fffaa2a8f406dd12e9f7e0"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "5d5bcc72e661f7057e060fab4b95c9ac"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "a308380a51e826c5607072797d794935"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "b573cb511eb6f85298bdf2790e008b9a"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "1ac20a6eafdb80f282d852f6a9fe38c4"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "102a8cb1deb2429dc897bde761d342e7"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "807f861bba064496aa94a35e745e2927"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "ca8b5429a2c45ba503cb1155ef597c66"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "cf48c7f3cce5e17d2aaaa6a1e0bada45"
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
    "url": "assets/js/10.8cf67d86.js",
    "revision": "52ed542d3523182ccfc2e37b61a1238f"
  },
  {
    "url": "assets/js/100.83212896.js",
    "revision": "ac66da60a615bed56f712d7ae9ea5578"
  },
  {
    "url": "assets/js/101.d1228661.js",
    "revision": "7662680c9e6bb5c4b9d422a92cb03faa"
  },
  {
    "url": "assets/js/102.5f61cef0.js",
    "revision": "a1590778182b8380e3eea5d4a6ac370c"
  },
  {
    "url": "assets/js/103.2f459d98.js",
    "revision": "bf95005601a4d6a038aedf894db58434"
  },
  {
    "url": "assets/js/104.af8ff3aa.js",
    "revision": "58c754b104eded961a77e58b2bb3238c"
  },
  {
    "url": "assets/js/105.b5c86b46.js",
    "revision": "9fa79b9c0c21094db929d37387ec6658"
  },
  {
    "url": "assets/js/106.b39abef3.js",
    "revision": "ea92d8bad9014923b9f1299e3853f632"
  },
  {
    "url": "assets/js/107.f9509d69.js",
    "revision": "d0512e2b363071aa9cf8e5ff725d2833"
  },
  {
    "url": "assets/js/108.30137825.js",
    "revision": "a1c0367f4a5cacb2a8a60153a0905ce0"
  },
  {
    "url": "assets/js/109.78215100.js",
    "revision": "abbeefc42570e20106c5ca011cb298f2"
  },
  {
    "url": "assets/js/11.5d7d6ca8.js",
    "revision": "3dffc1f2066e881d99fbc1f64413c608"
  },
  {
    "url": "assets/js/110.34ec82e4.js",
    "revision": "eeed36040e5ba2d861bae3d6c6539c71"
  },
  {
    "url": "assets/js/111.d766357a.js",
    "revision": "267070f3fb76cb47a1b42fa4d8dd762c"
  },
  {
    "url": "assets/js/112.96b90a00.js",
    "revision": "a4838256b54e9312ee0159757f60735f"
  },
  {
    "url": "assets/js/113.079fbe79.js",
    "revision": "4977ac9b935f5b070366158943e94ccc"
  },
  {
    "url": "assets/js/114.bc8c7a82.js",
    "revision": "29d1e59d1a37f798bfc866b99b7edf32"
  },
  {
    "url": "assets/js/115.e95e9346.js",
    "revision": "4c1d15f467a408b978eb82a2d7ad57a6"
  },
  {
    "url": "assets/js/116.0839d032.js",
    "revision": "fae10144de38bdf8ab0991e9d8891b66"
  },
  {
    "url": "assets/js/117.02586e66.js",
    "revision": "79d4852d5d5ac375253757dd75b2b116"
  },
  {
    "url": "assets/js/118.7117099e.js",
    "revision": "b81c5723f8d480fa747e63f82dff2571"
  },
  {
    "url": "assets/js/119.7a0c503a.js",
    "revision": "c51c947088b7d650fa06bfddc3176597"
  },
  {
    "url": "assets/js/12.82a8919c.js",
    "revision": "923b0c025bffce837be2bd16d41fc3f8"
  },
  {
    "url": "assets/js/120.2afa5e25.js",
    "revision": "f62accb817cce53818a6c8a18dfd16b6"
  },
  {
    "url": "assets/js/121.7c055901.js",
    "revision": "7e4925fec40dfd981cd224cf8e7b91f3"
  },
  {
    "url": "assets/js/122.bb77fdca.js",
    "revision": "02984556e8a9c543813e58e4938ecaf9"
  },
  {
    "url": "assets/js/123.846cbf2c.js",
    "revision": "ab9f1375f09851649b5d7d8eabcadbff"
  },
  {
    "url": "assets/js/124.e154f8fb.js",
    "revision": "439844ca4cfe2d658fed90177c74cf6f"
  },
  {
    "url": "assets/js/125.e77d9f04.js",
    "revision": "a825e3377c25288d1af25db8f7cebdda"
  },
  {
    "url": "assets/js/126.79dc23e3.js",
    "revision": "ed3cee1edd18c52b518650ec1882970d"
  },
  {
    "url": "assets/js/127.2518b070.js",
    "revision": "dd8d697793c917c940819bef3f569832"
  },
  {
    "url": "assets/js/128.899a4c65.js",
    "revision": "c1d10814362e2b3be526d4e99276d6af"
  },
  {
    "url": "assets/js/129.d050f2fb.js",
    "revision": "168b006bc5e73f0dc873620c89195b24"
  },
  {
    "url": "assets/js/13.7acf8edb.js",
    "revision": "50de71f12cd4eadf2831784f466246fb"
  },
  {
    "url": "assets/js/130.5f151f0d.js",
    "revision": "e4c0fe4721ee86b760aa790d30f8de20"
  },
  {
    "url": "assets/js/131.9adb3560.js",
    "revision": "c61dbacce4cd6f0a204893c2d1496693"
  },
  {
    "url": "assets/js/132.75ef609e.js",
    "revision": "a80b2b047863e0b6162f8a1f58c84c2d"
  },
  {
    "url": "assets/js/133.f76fa052.js",
    "revision": "5889d9d6bb85af244595892756656fd0"
  },
  {
    "url": "assets/js/134.d64ac354.js",
    "revision": "21d2c2f98c603ffdf7a86674d096c5a7"
  },
  {
    "url": "assets/js/135.515164da.js",
    "revision": "8ab3c1c9c3eab4a30a46e25961efb77d"
  },
  {
    "url": "assets/js/136.e9c85092.js",
    "revision": "1d9f16998dea4a9a9715c405706fd425"
  },
  {
    "url": "assets/js/137.458347ec.js",
    "revision": "de2bbc9fee7726b2e9caaf943df1bd5c"
  },
  {
    "url": "assets/js/138.2276c776.js",
    "revision": "19fa84c38b7f161b882c39318e2f3b1d"
  },
  {
    "url": "assets/js/139.1c529a9c.js",
    "revision": "1f8804c72a35c316cb35b9e7a0bf0ac0"
  },
  {
    "url": "assets/js/14.89c55900.js",
    "revision": "de9315d423b2537db47c706f2dd5c30f"
  },
  {
    "url": "assets/js/140.0f99f381.js",
    "revision": "6163ce3d83cab2985345e10f85816ff3"
  },
  {
    "url": "assets/js/141.cb123354.js",
    "revision": "1022bc566beabbe5a2feb1b758ca5c61"
  },
  {
    "url": "assets/js/142.c120b507.js",
    "revision": "70dacf9bd7b2f4474ccb61e0bba89e31"
  },
  {
    "url": "assets/js/143.dffd7624.js",
    "revision": "c25254aa908c2510398085c69a81f824"
  },
  {
    "url": "assets/js/144.28b83af2.js",
    "revision": "63dec1f0a443b09ab90cad93d0f7e7e9"
  },
  {
    "url": "assets/js/145.4afa47bc.js",
    "revision": "3287208bbd1c3ade65a2e2d68d414598"
  },
  {
    "url": "assets/js/146.95ab3d77.js",
    "revision": "662304b05e68f8cdf4e3acbbdf343978"
  },
  {
    "url": "assets/js/147.97b24945.js",
    "revision": "a6e97ac9ebc8d7d41375c4a92ed29f47"
  },
  {
    "url": "assets/js/148.52063b68.js",
    "revision": "9aa4328226445cb336f2bb2cc4d192e4"
  },
  {
    "url": "assets/js/149.8303d3f6.js",
    "revision": "2707b8beaadccf32a3f567e42a1068b2"
  },
  {
    "url": "assets/js/15.3072e74e.js",
    "revision": "c988605ccb3e9b15edfde612e132d172"
  },
  {
    "url": "assets/js/150.4981c545.js",
    "revision": "638f1bef936a9e75f2803271766d0be2"
  },
  {
    "url": "assets/js/151.aa994f36.js",
    "revision": "99f6244e2d11ddebda610e9aeed55aa9"
  },
  {
    "url": "assets/js/152.6be1589e.js",
    "revision": "728ed9b410d84074c9f082230eb48013"
  },
  {
    "url": "assets/js/153.514bb82c.js",
    "revision": "87c30aa8e43a65ca4de9708c5fad1d51"
  },
  {
    "url": "assets/js/154.ad47d410.js",
    "revision": "e04d71c2509faff61a8109d8e38a5f6f"
  },
  {
    "url": "assets/js/155.01e5f0a7.js",
    "revision": "81d55ab00ffb1b53780f3655d58fdf74"
  },
  {
    "url": "assets/js/156.26a5f3fe.js",
    "revision": "fb9d0c1d83887e4fb66b0b8695e74e4b"
  },
  {
    "url": "assets/js/157.69938439.js",
    "revision": "c2e971e00f4e4fdc1fda6c824c0de0c9"
  },
  {
    "url": "assets/js/158.c93330cd.js",
    "revision": "2f084a464db84685c7da36e54241c7c0"
  },
  {
    "url": "assets/js/159.54bfbdd3.js",
    "revision": "3b4790f37659d2d781a876dc4df08e00"
  },
  {
    "url": "assets/js/16.11faa294.js",
    "revision": "6afa7767c18f1e8000b5580e675135ee"
  },
  {
    "url": "assets/js/160.c15d266c.js",
    "revision": "0892cd68c0b231686fa2c57e94353da3"
  },
  {
    "url": "assets/js/161.51deb023.js",
    "revision": "c5784efa69fe78dc41eda127b804ec0a"
  },
  {
    "url": "assets/js/162.3a2ea73e.js",
    "revision": "c1b4036fdb6f5bab8f39acf84ff9ecf8"
  },
  {
    "url": "assets/js/163.12c45a4d.js",
    "revision": "c865aa833d157f97f48430355f38649a"
  },
  {
    "url": "assets/js/164.60cf29fe.js",
    "revision": "e350aee3b6d0e99ae5c6fdfe50a8a457"
  },
  {
    "url": "assets/js/165.3e201fcb.js",
    "revision": "ff2d62efa98aaf98f9028f5263d1b442"
  },
  {
    "url": "assets/js/166.579764a9.js",
    "revision": "78c91edeb7db9440556f536ad4180ab9"
  },
  {
    "url": "assets/js/167.cae94f85.js",
    "revision": "b208ecf9638eaa59f08ed97f372e1c3a"
  },
  {
    "url": "assets/js/168.64a35aa5.js",
    "revision": "62a3d543eb938af94d95eb6a67406ade"
  },
  {
    "url": "assets/js/169.fe044873.js",
    "revision": "466d9468d38c7e755e164d3fbb220686"
  },
  {
    "url": "assets/js/17.63ce4f8f.js",
    "revision": "1e6de12319fffc2dc26411df2ee8c193"
  },
  {
    "url": "assets/js/170.52533e92.js",
    "revision": "917dba62f235489fccc25ea267735480"
  },
  {
    "url": "assets/js/171.3225ae30.js",
    "revision": "c47a71124c0a1033b7873185e6477d64"
  },
  {
    "url": "assets/js/172.8ee56f3d.js",
    "revision": "067aea9c565308d2070ab71e6934a1c6"
  },
  {
    "url": "assets/js/173.1d60a5b8.js",
    "revision": "91a30d26383fc8ca9ce2679eb6067dd8"
  },
  {
    "url": "assets/js/174.0db696cc.js",
    "revision": "b68ae520cc299393de3baaa31bc5ce72"
  },
  {
    "url": "assets/js/175.fa0a6d0a.js",
    "revision": "516fa6d4f5edf200cca7052ee035ac9c"
  },
  {
    "url": "assets/js/176.e2ff6446.js",
    "revision": "8f0139b80d9d4d5dd49b85290ad66a0b"
  },
  {
    "url": "assets/js/177.226be2ee.js",
    "revision": "392e4a10cc6d9319c93dae2f8637c3e0"
  },
  {
    "url": "assets/js/178.f30e5354.js",
    "revision": "23f078add8acb09fbc5d56ca27d95269"
  },
  {
    "url": "assets/js/179.d103be76.js",
    "revision": "6bd35434ae5eb9b32ba3595ef5c64220"
  },
  {
    "url": "assets/js/18.64b64f6a.js",
    "revision": "030f7962ca8c7013cdb495198f2c0aa7"
  },
  {
    "url": "assets/js/180.65b1a3d3.js",
    "revision": "de382c35e5b810633f2308598e598fa1"
  },
  {
    "url": "assets/js/181.dd1315c0.js",
    "revision": "032ddc90935899a23d859f9ee3d735cb"
  },
  {
    "url": "assets/js/182.ab6ac983.js",
    "revision": "f13999bfe81b54afa32dd1ab7ff8e3d9"
  },
  {
    "url": "assets/js/183.4649d53d.js",
    "revision": "5a771bf3a403b458e4eda4ac12b90526"
  },
  {
    "url": "assets/js/184.6f9b623b.js",
    "revision": "3d449e7458f6534db5e44e416d438d67"
  },
  {
    "url": "assets/js/185.851d816a.js",
    "revision": "368f4d1f8eb615d18953849d4fbd1434"
  },
  {
    "url": "assets/js/186.224b2260.js",
    "revision": "a648fe5226d036b7d8f39edb396c07db"
  },
  {
    "url": "assets/js/187.9b381d06.js",
    "revision": "61c2faaefdd597d107aadbdae9cad8c5"
  },
  {
    "url": "assets/js/188.bbfdffc1.js",
    "revision": "d26bc9af8e4459fcfc43a6e1814e0231"
  },
  {
    "url": "assets/js/189.409a8438.js",
    "revision": "8387c7a9db57cf9a43022017d4a664a4"
  },
  {
    "url": "assets/js/19.7bfdd6c4.js",
    "revision": "289aac3c8fcc7cb6b8af99217561efb3"
  },
  {
    "url": "assets/js/2.2a57dcd7.js",
    "revision": "02edd57afaf8b034d36b462ac4ec6737"
  },
  {
    "url": "assets/js/20.5a339ce6.js",
    "revision": "dab2a0f4b37480ca0373c7d71191df8e"
  },
  {
    "url": "assets/js/21.ecbcbebe.js",
    "revision": "43eb10f68c973ff7ec4c5ef18a4e8751"
  },
  {
    "url": "assets/js/22.4786ff49.js",
    "revision": "d8d012edd048b08b56e6a14c2cdec589"
  },
  {
    "url": "assets/js/23.e5580550.js",
    "revision": "42477e3536a22279e4f43e9dd24f1673"
  },
  {
    "url": "assets/js/24.757bf7ab.js",
    "revision": "bee81cca4d1a34f8d3f55ae2a288e21f"
  },
  {
    "url": "assets/js/25.63524799.js",
    "revision": "3441cfa6a34da88b855959ee4dcae414"
  },
  {
    "url": "assets/js/26.0db340db.js",
    "revision": "a24b317706bd233be635ee4640e122d8"
  },
  {
    "url": "assets/js/27.b9de9d66.js",
    "revision": "5652eeaecb5cd728a85eb82d15f6d50b"
  },
  {
    "url": "assets/js/28.df46e05b.js",
    "revision": "d46667f6c02e414b744e13a378eee3ad"
  },
  {
    "url": "assets/js/29.28aefeb4.js",
    "revision": "32fdac0add677c55d467536349065c87"
  },
  {
    "url": "assets/js/3.f4d98bdb.js",
    "revision": "2ce1f5fb753d836cf1cedac2af8a4daf"
  },
  {
    "url": "assets/js/30.e8a2de31.js",
    "revision": "8c2c4546d462b1a1631f0aa79aa53d65"
  },
  {
    "url": "assets/js/31.1a8ed5ee.js",
    "revision": "77a3040e5e36718ee974a44a50580895"
  },
  {
    "url": "assets/js/32.f276d245.js",
    "revision": "b5061ce70d744a612836631830a6df6b"
  },
  {
    "url": "assets/js/33.e3b0ae63.js",
    "revision": "7f678a694e3d06c492520f38c1007468"
  },
  {
    "url": "assets/js/34.f4ffb19a.js",
    "revision": "759f9739c355f48b70149ea9efd0648f"
  },
  {
    "url": "assets/js/35.75fa9e74.js",
    "revision": "f5b8b1fe69686fb3b271ab1ccc0064c8"
  },
  {
    "url": "assets/js/36.735b26fe.js",
    "revision": "33c0ffb3ad0a9daff74c2d87d9f805a1"
  },
  {
    "url": "assets/js/37.d07a1572.js",
    "revision": "00e5882d25b918c9cf5f0664c53b61d1"
  },
  {
    "url": "assets/js/38.f52aafb8.js",
    "revision": "3acdbf1243c2182d2134fe6784563201"
  },
  {
    "url": "assets/js/39.c9647b83.js",
    "revision": "a4377811f3aa3c9383be94a213d17ed0"
  },
  {
    "url": "assets/js/4.0157aaa0.js",
    "revision": "ea4ff2dd38b158fe3360ab87ef1d951b"
  },
  {
    "url": "assets/js/40.4676e308.js",
    "revision": "947fc5f929f9a4d093e4b68c282cab9d"
  },
  {
    "url": "assets/js/41.351960ab.js",
    "revision": "adf88e0545a66ef776ef64f5b44bb153"
  },
  {
    "url": "assets/js/42.8cf77e42.js",
    "revision": "4e80e1791e38f747759e1515ac7b0d28"
  },
  {
    "url": "assets/js/43.67f4d30d.js",
    "revision": "766563f0cb417cbe449880e8fda44120"
  },
  {
    "url": "assets/js/44.e2630d65.js",
    "revision": "9bbbca762a151e4f488a5cf323c5859f"
  },
  {
    "url": "assets/js/45.230328cb.js",
    "revision": "fad691298f8ed84f247ed0f062e3f671"
  },
  {
    "url": "assets/js/46.4cb3ceb2.js",
    "revision": "6ba911e00e25ea22df1a3f6a0eb934a8"
  },
  {
    "url": "assets/js/47.80ced7b7.js",
    "revision": "48f93fc4031eec2810267002ecb04b74"
  },
  {
    "url": "assets/js/48.3e60d0d0.js",
    "revision": "49479ec71c4c501e38ba69cc116048e1"
  },
  {
    "url": "assets/js/49.fed4f5da.js",
    "revision": "9f3a943f24e95d99ef4935d39b1cfce9"
  },
  {
    "url": "assets/js/5.a95eeadb.js",
    "revision": "e4db72e1005bc6fc59ba5944e48f5b0a"
  },
  {
    "url": "assets/js/50.f549caaa.js",
    "revision": "b083e26aa7918e82ae1974d05264df65"
  },
  {
    "url": "assets/js/51.63c8d311.js",
    "revision": "54c3dfa924de940829ae5b1ddc085f9e"
  },
  {
    "url": "assets/js/52.30cece5f.js",
    "revision": "f75ca3006c2dcb3fb85c203a097089a0"
  },
  {
    "url": "assets/js/53.6b973207.js",
    "revision": "46f5bb9a597f686defa92ee92993393d"
  },
  {
    "url": "assets/js/54.27b843c7.js",
    "revision": "8dae43038b1f95d7e768bd57875f97f7"
  },
  {
    "url": "assets/js/55.e0a1a3aa.js",
    "revision": "31ca39fe0b24e2d8521450c9a1810c05"
  },
  {
    "url": "assets/js/56.ce1a334c.js",
    "revision": "f167f6632b6e370ca004b0e3c7464c83"
  },
  {
    "url": "assets/js/57.f664252a.js",
    "revision": "ffbefb782afe31c6c55d665c54b62c5b"
  },
  {
    "url": "assets/js/58.81fef076.js",
    "revision": "f1d7460f0ee5e8efb3eeed8515d1f395"
  },
  {
    "url": "assets/js/59.adfce4cc.js",
    "revision": "37ac0b5e8786822fd77e29c7b9010975"
  },
  {
    "url": "assets/js/6.4e4c5604.js",
    "revision": "f3209afc98326a4e9def67b96156fa1e"
  },
  {
    "url": "assets/js/60.640bf438.js",
    "revision": "1d712afea9df34e9cce434cfdb0f6c0f"
  },
  {
    "url": "assets/js/61.058d73db.js",
    "revision": "221be07c4b46e0634750d90c33ec0ae4"
  },
  {
    "url": "assets/js/62.5e292a7e.js",
    "revision": "70fc3890483a26a84a4c29aa013b31ce"
  },
  {
    "url": "assets/js/63.c91c4128.js",
    "revision": "30b25682b36d77b1129284a335259235"
  },
  {
    "url": "assets/js/64.6955e022.js",
    "revision": "1b6a79fd012a2179de8192a1eadaad4d"
  },
  {
    "url": "assets/js/65.fd2911be.js",
    "revision": "6ddf592c5b98b25558b0a002de7ee074"
  },
  {
    "url": "assets/js/66.339c79a0.js",
    "revision": "e9a0fd7c38a0fb7e90a9d970c1652b3e"
  },
  {
    "url": "assets/js/67.cb791e29.js",
    "revision": "d70173fd97e781fd6681d54057aacb7e"
  },
  {
    "url": "assets/js/68.5a3a51b6.js",
    "revision": "85ef7f0365af76ae4fa158a8e7667561"
  },
  {
    "url": "assets/js/69.2dd48e2c.js",
    "revision": "409934c48dd163e549d33309ac45e676"
  },
  {
    "url": "assets/js/7.16e3e98e.js",
    "revision": "88113c8f76fb7332f6b72bd275bb0f45"
  },
  {
    "url": "assets/js/70.b8fa7299.js",
    "revision": "5995f0fcf1373a883c97be6d3d0eacb6"
  },
  {
    "url": "assets/js/71.c49c91c5.js",
    "revision": "b74ff2b71e11c9a4e86beb323290e776"
  },
  {
    "url": "assets/js/72.45793e23.js",
    "revision": "3c5ef8f07f34e2ecfffcbd1ec6e220c9"
  },
  {
    "url": "assets/js/73.58bee3eb.js",
    "revision": "a5f5055f684c3ec3013e939f2ecdd696"
  },
  {
    "url": "assets/js/74.af5cdca4.js",
    "revision": "02f89d8a0f077e1af914d77c2979b475"
  },
  {
    "url": "assets/js/75.14581be5.js",
    "revision": "f7a0af878cf8efe52dbf349e0285bca6"
  },
  {
    "url": "assets/js/76.3c4a9ee5.js",
    "revision": "d7d856c76a351f62d3f614bbc8d51419"
  },
  {
    "url": "assets/js/77.d2eee187.js",
    "revision": "4cea1d1a626de1067c106813959d9031"
  },
  {
    "url": "assets/js/78.188ab0f6.js",
    "revision": "6afa3ae51b83241069d9fbdb827257d9"
  },
  {
    "url": "assets/js/79.19921779.js",
    "revision": "c5bed0944c3c2ede914308fda8a1ffe0"
  },
  {
    "url": "assets/js/8.df2927d1.js",
    "revision": "45e8e9187b143095e4842c64905593b0"
  },
  {
    "url": "assets/js/80.ec4c7625.js",
    "revision": "c2e1c62e5432a80d302e7d393de1a607"
  },
  {
    "url": "assets/js/81.85d215c0.js",
    "revision": "e168905543d6898cbff9b0c32c9e4efd"
  },
  {
    "url": "assets/js/82.9d97f496.js",
    "revision": "7b3b3b136985c6d495c4250d26965c49"
  },
  {
    "url": "assets/js/83.0068204b.js",
    "revision": "c9c50b435df0e6b1af3f1c739b8e24dc"
  },
  {
    "url": "assets/js/84.0c8fef49.js",
    "revision": "b0ef12e8e067f48d3a0e852f677f0337"
  },
  {
    "url": "assets/js/85.a7a6dacb.js",
    "revision": "ab05d6a76bebd9908d6fd39cc788ff64"
  },
  {
    "url": "assets/js/86.35525cf3.js",
    "revision": "2950b3ce65e20d44470d740016bd7dcc"
  },
  {
    "url": "assets/js/87.f7e174d5.js",
    "revision": "ce3eb390bb068ed6c6a7ba0636f8f622"
  },
  {
    "url": "assets/js/88.000f8477.js",
    "revision": "6766b5fbfee285f94a49a7eb999dfa80"
  },
  {
    "url": "assets/js/89.c0e6c988.js",
    "revision": "8a43faa32d0d76b338b745dc447965f0"
  },
  {
    "url": "assets/js/9.9dca2b66.js",
    "revision": "651d84c136f79b93714777d458a0719d"
  },
  {
    "url": "assets/js/90.38154974.js",
    "revision": "e102b2f5dd6cd890f237bb4f274b4388"
  },
  {
    "url": "assets/js/91.15a47a97.js",
    "revision": "519a480ce74953ff6872cc3fa921ab82"
  },
  {
    "url": "assets/js/92.ca75b802.js",
    "revision": "20a42a5b0750c595f5b724b60497e513"
  },
  {
    "url": "assets/js/93.a74bc18e.js",
    "revision": "9c76abfc90ab3c2492d3057f3727c187"
  },
  {
    "url": "assets/js/94.3ac0dc4a.js",
    "revision": "303655fc4f7944bbb5d89f09572494bd"
  },
  {
    "url": "assets/js/95.4e717d0d.js",
    "revision": "18d76931907cc86ded935a68d27a30fd"
  },
  {
    "url": "assets/js/96.d49c857e.js",
    "revision": "c6058211eb814803861c5fed3bf6c907"
  },
  {
    "url": "assets/js/97.be850c26.js",
    "revision": "44011f2068db5c406588e4067b723db7"
  },
  {
    "url": "assets/js/98.82138ce2.js",
    "revision": "3275e340fc1f3a459147097440502067"
  },
  {
    "url": "assets/js/99.faf1e9de.js",
    "revision": "562320bda1d328b50b692a4c08131fbc"
  },
  {
    "url": "assets/js/app.4a6ccd49.js",
    "revision": "e3ddaa08616dced6ea316544874089e1"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "08e6ee065a97c114b6a57967c9df01c8"
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
    "revision": "dd78d78443c21316319c9ecc653b91b8"
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
