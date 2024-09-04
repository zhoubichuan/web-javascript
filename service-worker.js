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
    "revision": "d0894b93192fdfcd278cf92fac0f0899"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "c756317ec30613a8fba1589354d06078"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "f7a049197507f56e8a32b794054d3c0a"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "5430167e3f8465354ce0657d004c8cc1"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "65a0c15739459a57c0a6a26150247083"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "01842dcfb735ce9eeedef29754202d92"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "20f726f07d1bd3a2db4bc7cee069c833"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "abea44d9e9c8ded2db668488661ecd33"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "5890268d133fd8785cea578252a09296"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "0646af901a055048b67016c5f5c76add"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "9984ee2b6a6f54cbc4695b76f849ac3b"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "8af6c2f4b9f41a41bfc71da813f2c6db"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "215346f6f5e01bdbcab4249c2b04068a"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "2439a90838ee59e03338cd472067ef20"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "53b7eb491accdf2c34fac3c38d860f78"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "86898a8c2dd72cef2b3115936a2787ba"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "361a3e85341d8ed27eaeff5b89eda2bd"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "6fb2e3b3f00b56e4a43834a11b424408"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "852637a3cb9e9fedfc4df8a374d8b288"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "54f10704175213862cdacba05cf25f9d"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "8f2deaeeb3b263370d58405ba203c8da"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "1c554179cd8d6c5dd1914deaea812bf6"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "4976b89beb985d4983988610f8561225"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "63142f6a1ff064755c73b975a19689d2"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "03316a716e58f42a7a1b87dcb2ab7253"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "f916f50536a6d34862fac35866180f4e"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "9b1f501a269f7dbf462f7cb83d02d348"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "88a9eadd9df906169bc3598d6060b3c1"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "8c6ddef82aaf510093783efc50cb1a6c"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "b1249da8dc083cc3dcb154407e1f4294"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "67ca7808a5496ee3e45af00262905187"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "1fe278a90b52c2fa1c2b1ced6cf06717"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "8cd49118ccaa13f64cc5124891062457"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "7b20d2b30e3256e854900ebbc7859337"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "8e56df7b3a2a278c6c52e1a1909031e6"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "40e680ab1bc4c884770bd380b75ad5fd"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "0424ab2df4caebe088b27e7fd242614c"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "2415aed5179d3aec38243177cf488d09"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "e05f266c9843458595eb73b9a44447f6"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "d84143e05fcccb3b95412cb293d4f254"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "7a3ed5b4700f9d0e37bca3adb3ba6ee1"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "b6e8719b91b2cab1dfe68c172bc76d53"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "fc687db5e5b5dd34ad088a950d4b4513"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "5d97aa6cfff595bf0e296c0b2b60e973"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "8f8e61f6fb2b4af9f656074c70e20ffa"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "29ea4755e3aa9a871676bad29a43a41c"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "a8e31153a62b36b3cbcc2600e0c4f88f"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "ca7657f47f02d389f3adac566def654d"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "d4614488be7cb3cd74e5a408ca6f8b8c"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "f575a1d13544ab93e2e7f66275119882"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "080855bbc24510a7362a3ef6f974f465"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "bdef690d79be745c6139d9a0b759fa62"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "7f552d00bc4ed3952ced21f3153eff30"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "564745388f15d7794664b2419ce17e72"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "1d07159708fdb88167dd89a4f8dbd669"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "d7e85208111ab224bac56c56b1d517f5"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "748a42afc958e6daf3384dae6b37a5e0"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "8778069d4ffbf43c911cb1b777a85afb"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "01f563de21b4c0a7445098d3552678a1"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "a3955176105accf56792d23ae083392a"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "8748da094dfe6cf145b4ce0b4a1aa299"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "78d775910956b9fda2ba597898039a1c"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "b8e8623d1348f3503775fd76e2d2e2a4"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "587bf7c1e65a3d4a96cfc7f477f672bb"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "8326e7c32b03fc80718073df9ccad9f2"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "24027c7c583268b2c0bf5730e7652ed0"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "ada4e3b77fb5efb2d2983be2973d353d"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "72f2c1ec94a2340be3621eeab7ed40a7"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "ad92612a6349760dfd12e545414ece7c"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "2173905657e920bab470c8ff002fb9d5"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "2ba35d3cd17a0b468193b3e8f1cb939a"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "6d1a1a35de1f0a385ab3d4e6724bdc82"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "57e887e6fe8a2b8de770704208b551c1"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "08a0dcf209dd708d1308d1cb6e6c4d69"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "719ec628707de69ea922d067d126a233"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "8a9464827f52045f1b5606a07b4e7731"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "f467eb07ffc6a64768d339e00b683058"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "8b5595110e9203cfd25351729d9f24aa"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "df362c8c03c5d6199a9a121321e2f7c0"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "75d39ad82dd3783406f122e87142213d"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a8f5fbc4c605e7f5498e1f3de99a9a25"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "ceca17c7578c0ee0ae25c2edc88ad1ca"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "4350b3d6f31b650297af13518d608bfc"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "6abad34de1d157ea9669c697684651a7"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "47a3999ade1c0f6f27b5b882c86af694"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "27bccf8d6881144acc320ce61ee35f83"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "866a111dccea751019199f6fbb5f2d61"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "7d57d2e78b0051c5b707923f0ad490fa"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "a94ad06d706889a3ba03f7031f120926"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "9ec1e39fe7b7e565115f44f518a00931"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "0dedbdb06d09f47894977fcda9127c53"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "8956c442e2f9d63e1c97fc4677def605"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "0c42afb527244aafe0ae58a597ceeb66"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "c3fb483c2712d75bf3e54996260a127d"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "2be07983511e386f0e13dcf33d9a6fea"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "52f75e52ded526d7537f144662c3b7a4"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "f14ce22aa1747e10f1e831e75c518310"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "b601ce8f54903d1f825883bd00092f32"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "117b90a50e335d56035cb2bf4eb703ec"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "465fbd37885ed762aaf8b2ca06f3eded"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "fdbb117c5a423ffa752f2e9e0bcc8782"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "a49983f11c853c4df6a67085ab3711e7"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "5cb2ad1658a1063991f1b9a6a8026832"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "bcd29d4b2b69f027d7f423c53c33eb19"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "ba611da5a1bca66e8a27955a8451b3d3"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "8fdcd57ccf55f068515b0ef7a5e5977c"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "19051c4de9fdeb4683974be3d05ed93d"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "625cec15d2bdb4a7beb795e7f70abd29"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "4e3cd4e10171ef7baa7a6be6cba731e0"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "c361dfeea3a19688a364e0f359f9e0ad"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "e6cee15e7d502a67e4ef2df8179a0b62"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "81d5277ce1752513ca633e561ccc53a7"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "4daac7b41fb4f6e53e596c2bfc3ef3dd"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "f0bf27670a1aa59807cdc5d2a10fce7f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "a53a99c61c04d77fd86cba8303c5d0da"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "360f02af1fb539b036b5b51f1d911c58"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "b093bbb0fdcae659d8cd593e8ac805bd"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "1b2d9b300c0a85b74a72e1ad67c60754"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "e55c3be5c63d0bb7eb02182e0c5a38be"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "b9bb72e568feb9720e3009bcee1717a0"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "dfd72351312ed4b46a532ad8430736d8"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "3b93f01195c14658fe94d915a6b288cf"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "c1ec8d161203a7a596f2f6db376d3923"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "000447424b57abef31fbb25e8bfa943a"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "2948a839b3ff34eed65e5352bde4e1e2"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "f5ca1818cca2f250c5bc86159d68e3da"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "aa268ca362b1c42373289126240d1907"
  },
  {
    "url": "404.html",
    "revision": "31378fec0d7a66d2a6225be9b9386259"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "49f358c8d467d4e283ea70a347998cf7"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "ae0989136166155a0e2a81c224876d21"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "7e47aa9d72d1547533fa92e3a304b5b3"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "57ba5dd88590dd0e2acd0bdcb831b091"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "eb3fd0f0743f23706610d7dabf237230"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "88e111803e2f2d8019d4d1b53cb4409c"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "168b2da55d47e2a074b902cb23a87ce9"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "447ecee3b0433e8db35e48e75b4c5c51"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "788b9d3b6889a813a0a861126dce3ea5"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "d96005ed0243b159df28e7b0e70baf66"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "93b2f3c25ad51daf0c6dcbe65d43359a"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "112f8a93bd5d19a51454f3ba521bdcb3"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "52caf0039ba5fbdfdc3016ad6c8ec49c"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "a77ac8417967e2c580deefbc40767fe9"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "3fd1545d28e963c2707c80d65a51e494"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "a087825e3893723f3233429af4adca5c"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "87a43628b3916f484f786a37d44e61ff"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "9d88f92fab02cfcee391c2d9216e58a3"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "d4dfff7e17517090f45fdd2fe1df8eeb"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "d192a513568d68121cfc260f6962a895"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "c3ee1abc530b176879039e27e7c58fc2"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "ab6a936e104c48b0051c2784f3d2af0b"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "4cbd2b3a70e80abd63bc3470c0785ab8"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "11686b467629084c6c017fd51ed736e3"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "48f3bb113a1007d870da1e36aea90400"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "c38c5c184ca5cdecd17fb063656b20da"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "d5ba5ad05bf9543bbcdc71584d681738"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "f5015d60ec7a18124275c87bbc7ad2f0"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "ba64434439c50522a5027ecde9a34f35"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "364e7ae9ade6fbd5c575239374f5f74a"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "eee748bb1ad872e8e4b4ce082d3b790b"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "c5c8816f9657b319bdc99efb963a2cec"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "39bb1a9913387881088cf077e1680803"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "a9be0329b7557d0af426582c40045bb3"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "213c4d03cd9e7d07e15e141406434339"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "880d9fe3dee51ef47e5d5ba25d017538"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "f2759741fdd905470989d3fc403489e3"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "203bb4e7ffba1212dc0ac1379255a098"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "4828c0990088e6fb20ea5ba55a4876bc"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "0ede6dba88131405ae9d69cfaf23ecb3"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "a3887c47f1f6e206d43ac41b90417eb3"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "03ddaa051f163a644547ed9f2ab9e846"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "4222ccbc1d9a0887a0cfe356bb11a1fe"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "4789e27c8989f5ca65c2c37d38ce8f4e"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "22987847f70d3b766a4743e9e2f2c78b"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "fce474e1b4f140ca292ea3db34c45955"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "5bfa44e912ca7bac5e5cd2dfedaab596"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "0493a51fd3be83355df4b6803faf965e"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "f249d07964037e05ec2c68d8bfaca75a"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "17adf1396517c7cf746b7eee5a7779bc"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "95662e33ac271fd8ca1aa123d65f6b22"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "49b0a6a2cd8f5516e90dd5db69747576"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "5f85e934596d037d9ab767606e36caab"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "7eb3e65667ccde4b7a70c3afad3cad40"
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
    "url": "assets/js/106.41f6b9ea.js",
    "revision": "3af263b9506a48891a7c154d0cadbe18"
  },
  {
    "url": "assets/js/107.92a9807a.js",
    "revision": "b0d79fabca89fab043ebf70de0c2e64d"
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
    "url": "assets/js/122.8f5a7317.js",
    "revision": "91e40e09989accc431f31aced6b4e5c7"
  },
  {
    "url": "assets/js/123.5763d899.js",
    "revision": "dba7176bce601dbf1546eaf4f44936a2"
  },
  {
    "url": "assets/js/124.b7cc4b47.js",
    "revision": "e52f234d5d47ac6b3f5e1d3f02beb198"
  },
  {
    "url": "assets/js/125.e2d4cb35.js",
    "revision": "2522c00531ab3e87a19f6deee074e777"
  },
  {
    "url": "assets/js/126.895ff4c0.js",
    "revision": "08161ff6ca2c993b9379b8816c6c3443"
  },
  {
    "url": "assets/js/127.709c30a1.js",
    "revision": "ec907d9f8cc11550f6e9f6a926330bda"
  },
  {
    "url": "assets/js/128.b8cc9078.js",
    "revision": "b0521d9ef4d32a283e11302d0711fed2"
  },
  {
    "url": "assets/js/129.d1ade0c1.js",
    "revision": "d2e48120289760f6a3c3804c2e170524"
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
    "url": "assets/js/132.6a9e6631.js",
    "revision": "87fd6b0b9b9a60ffdb1f6ccd7efb834f"
  },
  {
    "url": "assets/js/133.ebcb45fe.js",
    "revision": "486c93a5447500472022cca058d753ff"
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
    "url": "assets/js/138.23f2211b.js",
    "revision": "4c91b4a7355503069d380106491aa66f"
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
    "url": "assets/js/140.b2d42773.js",
    "revision": "d97b98e60a5a8f98fc2ddfd33dfbb02c"
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
    "url": "assets/js/148.d207b62f.js",
    "revision": "b11df600efabec8eb3973e4ada9d7102"
  },
  {
    "url": "assets/js/149.30f2a7aa.js",
    "revision": "49478d7caa0850578cd9518fec042371"
  },
  {
    "url": "assets/js/15.e7ef1bc0.js",
    "revision": "5823f79a73ad136c42e9d2b653a17324"
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
    "url": "assets/js/159.2f806017.js",
    "revision": "c362c792e16582cc7636c4549ed23291"
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
    "url": "assets/js/161.782013fc.js",
    "revision": "fd54609a83162e2fc0cdfb7cc4420ae7"
  },
  {
    "url": "assets/js/162.e46e34d5.js",
    "revision": "52fa8d301191705f1638919c0f3e19df"
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
    "url": "assets/js/165.d4643640.js",
    "revision": "4d0e73d47695e2c187ef4dabed90071d"
  },
  {
    "url": "assets/js/166.d46d788a.js",
    "revision": "fce203fdea92ee9bfb1d6f344ccdfa05"
  },
  {
    "url": "assets/js/167.468b3633.js",
    "revision": "2c81599b2b9a60deb110fef303098131"
  },
  {
    "url": "assets/js/168.96e649f8.js",
    "revision": "c0ce442ac396f092593f540479cc70ac"
  },
  {
    "url": "assets/js/169.f7bdffee.js",
    "revision": "ff4d50d3733ffbdb4905be8032b35000"
  },
  {
    "url": "assets/js/17.226eb645.js",
    "revision": "c8428fa5f319889ee59481e09ee435ef"
  },
  {
    "url": "assets/js/170.afa100ff.js",
    "revision": "d2cd29ff136fae662d405c137261bf58"
  },
  {
    "url": "assets/js/171.c29e1c77.js",
    "revision": "2695746751753c824512f29f3ee45564"
  },
  {
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.ec907150.js",
    "revision": "0e234b08fcf4e346955618dc62db0195"
  },
  {
    "url": "assets/js/174.f235d447.js",
    "revision": "bb825cb53c2bfedc740b33fa72639388"
  },
  {
    "url": "assets/js/175.66faef82.js",
    "revision": "d0612384f9b47f2d40f5c01c7b9ac9ce"
  },
  {
    "url": "assets/js/176.704e3654.js",
    "revision": "9e3bd9c1cab60ab0473ecd4e6bd6568e"
  },
  {
    "url": "assets/js/177.ab293339.js",
    "revision": "24d81cd311cf2ac6f6d6126937182c86"
  },
  {
    "url": "assets/js/178.9dfc5fe3.js",
    "revision": "6199c6778d872e84c17288eab23ab026"
  },
  {
    "url": "assets/js/179.2855eeab.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.e2b34fcc.js",
    "revision": "be1e69b6ec8cfdae3199e86b44cd98dc"
  },
  {
    "url": "assets/js/180.04ed0818.js",
    "revision": "692ac83428138c2f3d63624a8c19cc1a"
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
    "url": "assets/js/183.4033bdfe.js",
    "revision": "21e3190f731a5ecf48c884d068e60a42"
  },
  {
    "url": "assets/js/184.4a603b01.js",
    "revision": "5ef522c47d32333d202ccf1ab39f2f11"
  },
  {
    "url": "assets/js/185.2561f90a.js",
    "revision": "e7416c90f9612449bcce492bc2d579e1"
  },
  {
    "url": "assets/js/186.35428c0a.js",
    "revision": "74fd0b95e5a102a6a5874969cc7898c5"
  },
  {
    "url": "assets/js/187.1987b45d.js",
    "revision": "778da38a522cc68e5b9b73fc6f43789b"
  },
  {
    "url": "assets/js/188.688b658f.js",
    "revision": "97fb99cc27c86a01f2c5a701128ca82c"
  },
  {
    "url": "assets/js/189.4d152a6e.js",
    "revision": "abc3bae3ceb41954944370a54ccd2403"
  },
  {
    "url": "assets/js/19.7e141a18.js",
    "revision": "0aac0d9ee95a16a95fe6e0af937ebcaa"
  },
  {
    "url": "assets/js/190.7205d249.js",
    "revision": "292e88eb9d3ba33cf55889ae7774b12e"
  },
  {
    "url": "assets/js/191.a45a250b.js",
    "revision": "f5b560aee96a99fecedcc17bcffc6d6e"
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
    "url": "assets/js/20.d1f3bcc2.js",
    "revision": "610cd4ccbe087e1800368ec891404943"
  },
  {
    "url": "assets/js/21.c27a684a.js",
    "revision": "d7a843f6c334fc9c387d81c879da64b1"
  },
  {
    "url": "assets/js/22.50713d15.js",
    "revision": "115fef9f14032045c189612f09deb1f3"
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
    "url": "assets/js/27.fed864af.js",
    "revision": "0a3944dfb448e719634c3e14a17ffa5d"
  },
  {
    "url": "assets/js/28.deefaa4c.js",
    "revision": "b1d4912f94074bb73c9230ad4cce8d4b"
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
    "url": "assets/js/31.dc46ee65.js",
    "revision": "78702be8a9c7990676ffd15f709d78f9"
  },
  {
    "url": "assets/js/32.80b9610c.js",
    "revision": "3805ee83c1f2cc151d994896ff71116c"
  },
  {
    "url": "assets/js/33.2df00a18.js",
    "revision": "151a6165f452883f80b3e8bcb0cca277"
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
    "url": "assets/js/39.16dce1a8.js",
    "revision": "28181aac3da5a740852bc1de591ae103"
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
    "url": "assets/js/50.cf8bfe34.js",
    "revision": "d1565235cc5fc6ab7fea51b1a115b37e"
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
    "url": "assets/js/57.367bed35.js",
    "revision": "c8b44fd2228c9d01e1e488c610e110a7"
  },
  {
    "url": "assets/js/58.2b8e982c.js",
    "revision": "f252615950b3d28b1cfddc193f3b1461"
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
    "url": "assets/js/63.bc5a4fd8.js",
    "revision": "219e0fb3e56c4768c7f04d89ca8d66c5"
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
    "url": "assets/js/74.fa90a12f.js",
    "revision": "bf27abedc42a33e07847bfc7b1d343db"
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
    "url": "assets/js/82.ec4924a9.js",
    "revision": "99a099c4239e9ad26495a5399450b616"
  },
  {
    "url": "assets/js/83.e3fd09f3.js",
    "revision": "2b8270845c7212980cdffadb6d1f2c0a"
  },
  {
    "url": "assets/js/84.a09b5ccc.js",
    "revision": "cdbb83d7c642bd7700a9b0b24d19afc1"
  },
  {
    "url": "assets/js/85.ec5e613a.js",
    "revision": "20a094d88d2ad08022d19a97d03b8b47"
  },
  {
    "url": "assets/js/86.3b01f706.js",
    "revision": "5ea1481afa1795134be075627a86f19d"
  },
  {
    "url": "assets/js/87.5c5f3520.js",
    "revision": "c736bc35952a3cf2ec51a9da5fc09c03"
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
    "url": "assets/js/91.c2a670da.js",
    "revision": "8c2d3f40c39c866bec827a6e71eb79e4"
  },
  {
    "url": "assets/js/92.a807413f.js",
    "revision": "3ad1c5cdd43e6b991cc945dc731c3a41"
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
    "url": "assets/js/95.6030fc10.js",
    "revision": "41a2d4a63d858d3a231cad9c276b7a0a"
  },
  {
    "url": "assets/js/96.93567097.js",
    "revision": "2d93c08edaf1a3fef3dd036558695564"
  },
  {
    "url": "assets/js/97.55aeecc5.js",
    "revision": "c7450d7b61a3d3afd029b4881682a219"
  },
  {
    "url": "assets/js/98.e6101b3e.js",
    "revision": "f81094370ffb074a57150d2c59fbe21a"
  },
  {
    "url": "assets/js/99.a5b4ee81.js",
    "revision": "f0ba36eb4bee228e8a56a5a1edf02c5b"
  },
  {
    "url": "assets/js/app.18111ff1.js",
    "revision": "c903ac3ed90007ee9da50dab6dbe6bca"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "f4e96e23ffd603e8daf9cb1c453f1e8d"
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
    "revision": "37f886d866d74dce75f87d6e4a647d0a"
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
