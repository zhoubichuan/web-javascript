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
    "revision": "bd8ffa299a7e458c32fad326e16505e8"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "363031fe214c707ad15b3d16a881aea6"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "c5077af24d167e9932b57173e0065039"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "ef37f195bbfdfb139529f0335f5de1e7"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "c7619a13e507bbf8ebe03794f37d8fba"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "847ca727ec0324e6cb547ce9b4bc3480"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "073cd00e4439e3a516a6049d9474bc3c"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "6bfc25d5676a032a2e9152e2a456f924"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "ebfe07bf4c081017a73cd89fae9e9d43"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "b55def8671e973095f683ee1590dcb10"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "a90f1fd91e1af0745d514cbc19cd2713"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "b299ab90a7294fb941002fd78fb5fd01"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "4d10cd7ceea137683b0901ae3bd45e25"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "326db4f57b867c2f1f95b5764c547054"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "b271681891b0e6414cc0ae7e3069dc25"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "e1172e7f3d43048f70715e84244a6dd6"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "4aa2adb043096dcfdbba9743fd29f0b3"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "f78a3747cafa80ee5eba1edef8f4460e"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "0e1daf1a95210cbdc8e0a1fd29bcdf50"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "5b22b360c0746ba48041f29b9bd58166"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "56901d3840a7a64b4a9e65bc45ac8250"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "bcb15771795545bc027d11532cc3110d"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "f8b6ab3f4f9954f9c5db7fee375c129b"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "dafa34575620abb08bc8aba11a14337b"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "24c9da55179fccbe987251e3a810b882"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "6aeb28801debaa4269dbba039409a13f"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "96b0ff4a1cafd7cb12aa62a5ad172b10"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "af32e0ff911c75b23cb20b5aa074075a"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "2b5948a45f75ca809bc995ea7eaaea6b"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "57c893eb14eaebceb56967228578174d"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "70a0ba980770e933b39aaed9eac5fe1a"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "60c8447bf29f7420a2c6480186778f02"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "0f2cb20668156f2c40e58cc341ce9495"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "569d2c7ac16c11f28642c5d176631941"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "b447b3f00d0aee6c0586ea03ddf5d6b4"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "4d47150032762fb7e1aca033fc8b6894"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "649a7beb272efbd66013421dc5144f9c"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "94662feefbd199b1b049a11f4b6b777b"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "935efe53c35ea592a7125eaada181747"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "d1d4e6592970c85fd09cc79447c4c622"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "6cb9849301aa015d4bb835f023b71653"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "2d477e03a9d0d9b6829d3dfbb50cdda8"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "bb6103a27bc533ac366934a304e02b5d"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "8d05838bbb8142d8b64c8652de8568e7"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "26dac0898ebb8c672b1041e7f3b32094"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "28614b592c8c90f6f7ce4a9e85cf9c14"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "6e6d746103ade5bde1c12e4e679ad7fe"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "c42e063eee667b6ad972dabfbe6b6d97"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "c2303e719f6343a18b553e6f3b9bac0f"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "0a53506f4bb4d916c776c9701a59dc1e"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "8077603ca4d85780632682362b8d7423"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "d77a225a5110f205f24b79e792656ec0"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "be03cb3877c923abf5d9275d615e5557"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "ef59ab2427ef13023e80106855f29e59"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "d7fc96799aea6f0672ca6727b117c465"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "ab5ce7b99d58e5594fca25f4b6635d2b"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "a28e05d5becf0b38a65a273cada953ff"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "b0936e09b1bc42822c503076c64031e5"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "d0039175d9fed1071882ea4c8c948119"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "af3b37352e3b297a6dc26723832620de"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "f5ed708518e91975771ed225683bcd91"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "9f5d6c6bb54aac937cd2b144691b7165"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "cfae39206d74de823372f12b53c87bb7"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "384308d8cdc3fc933ec374ab17864ac3"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "c060194c6c422110b8515305cc75d087"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "d24045295de86447341eb7b8c3b3abdd"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "96ad5235b9868a0ece0b53032a49d754"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "1d44d42232798e5632752157c0a07c39"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "be8d900603bbe5935b4145e11c8043de"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "d685be49cbd14716264a330172cabc46"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "37e956c41638f5fcb7150f28c2893178"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "21787ffc88e8224eb8ab26e2b0b25917"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "6e8d3eaedc66eb087fc9385d5db93d87"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "7b2772ff59c668c29cfb8955b86520d3"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "64649d1014c727023d06a302528054c8"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "b600c7d3001cfa2b2d2c5d9cf3c284dc"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "a48d0d0159e677e2136847ca9e0c233b"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "96e9e0c8633a8ef4e7323592ce4f216c"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "ecba4b54128f5134f4758196a469fbfa"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "bd36bed63e755c522207cdd29e8dfa55"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "6af0052ba6b2f3a9f6a1c38e17de8cb2"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "6ff8658761ce8455a952759d915a1196"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "4eb316d1aecfc3a24b99b1bf44a7fc9c"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "e4bdf094f72075326f7a0241c3406f11"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "24007ab0d332bcafdb3df7ce87e99ce5"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "5a4d4f28e647cb0bde71c03e48a86025"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "4a31e65bfa0d5c1f9d02ac253df6fa37"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "fd972ea97009ed61fac1495afa202867"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "b9802e25822896d20d076a81e90ea56d"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "ca84e24d2172d4aa3bb4acb78ab75dbf"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "ab0370518e8f1e117fa4fa8ea635b1c2"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "f4342495ca7d8f70a040d6f06bcb581d"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "5f7fb845b1d1395147cbfbbc7db9ada6"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "87d514a463133700b1b33372c6e4af3e"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "f22ee661d821ef54d3200b4a331ff671"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "6231f5882e51e1f8359f0b20879d25a4"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "176bf6581fa32b7619719f5b160ac1de"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "bbae8ac6d67b23baad2bf6efda99deaa"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "76d425734b4c17ad52201e5ca139e2fd"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "bb6be9e151664cfb46979aef10a4ca9c"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "0dfff364e857249280f6ca43b14f812d"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "8f6d0c242d87bc50e3128277874f949a"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "74fd8c74e15f4f5c989923b93c7a9aeb"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "dddf03848a6ef8cccc2783e97890c610"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "8a630f38ea2c9edc0a226fa01e31bf09"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "3681d62163cadf05227d0352a451d2a3"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "6b25b64ec8ccfb4ae807509b5ec51211"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "e0abb691d51e156c32e12b08ad2da4f1"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "6ee4ca2a4d508d077a6fba05ba75f57f"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "7a3e5f3e038f271aec1224f470b6bf38"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "3905a798673d3a43d6f30e6429bb143f"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "1691b93f0892bce32ff6d3b84ead2387"
  },
  {
    "url": "4.special/2.package/1.index.html",
    "revision": "cb5a82b46275f8f0c9baa9e8826fc0f8"
  },
  {
    "url": "4.special/2.package/10.html",
    "revision": "649bfc321ba91f23c20fdc127d9b95ff"
  },
  {
    "url": "4.special/2.package/11.html",
    "revision": "d740b1629966626fe65ca6e1b9eb8fbc"
  },
  {
    "url": "4.special/2.package/12.html",
    "revision": "4361435a04470f6bb0cc8096bec4b663"
  },
  {
    "url": "4.special/2.package/13.html",
    "revision": "bc1cef0455438793df4fd79405176beb"
  },
  {
    "url": "4.special/2.package/14.html",
    "revision": "776221971f0413e9937831795d739455"
  },
  {
    "url": "4.special/2.package/2.html",
    "revision": "d0532fb40f85d13048df6d264b3d458c"
  },
  {
    "url": "4.special/2.package/3.html",
    "revision": "3fb52c7c1dab3d939b5f9b45063fad6b"
  },
  {
    "url": "4.special/2.package/4.html",
    "revision": "b63b163650dad37cb013348f3231e032"
  },
  {
    "url": "4.special/2.package/5.html",
    "revision": "9d9b1721093c9742d62198ec340c3f67"
  },
  {
    "url": "4.special/2.package/6.html",
    "revision": "f68a40869583766a0b6a739c21797eac"
  },
  {
    "url": "4.special/2.package/7.html",
    "revision": "8257790babc85c7bf60ac6b451fb4197"
  },
  {
    "url": "4.special/2.package/8.html",
    "revision": "d48d927031f181423b7c960f459aff79"
  },
  {
    "url": "4.special/2.package/9.html",
    "revision": "21f3c8f7dec65269502fbad166a058c0"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "645612a233e6aed0de80d1508b0dad04"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "93e62dab2dd19905063a6b18ca0e1b51"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "1752820e70d292fd1219f7a2581e5a2e"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "a442ed672ba1cc0e02a352660cf03605"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "305ff153fa201cc8175d4be536446417"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "4f6855e31ae6c507a10b137f667ff3e2"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "f78905096d84da1d284e43253daf73a4"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "cf3acbb8ad3cbff26242e1bd90311868"
  },
  {
    "url": "404.html",
    "revision": "21119b4f5f3418413bb5ff5ecd8d97d1"
  },
  {
    "url": "5.scene/2.file/1.index.html",
    "revision": "7a55a2125c4249fc4d91e951274ba5b6"
  },
  {
    "url": "5.scene/3.video/1.index.html",
    "revision": "0983b772be60b066999ea35c5a860b1b"
  },
  {
    "url": "5.scene/3.video/2.haikang.html",
    "revision": "498c735cc422d84dca319723fbfff429"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "9be7d20888d2945e38e5a82b7d9fb9d6"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "89d221e9076032c3cf1275ec1ccf0578"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "43f62d675d31c68339ca6369c5998eef"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "46d2179157a467b294ae7d2600f08af8"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "c2aa7a3cca9ed3d372e6e430be5266a3"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "4ba97e54e0f76c1a4fd66069f4602676"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "079dfb472f0052290c418a06751dad52"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "6928af7e2d5957b5e290365fb2af378f"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "1ab5dff0d7378636ab7f491efd4d7c69"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "0b4800175b9046725325dbec96bf976c"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "2467c42a2678bcfe4d7e2e34698f792b"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "bbc522b08546cc43c3f5bfae7999ff4d"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "aee9ea137ea2dded5ab035e72e57745d"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "d30202d658fc482f4cf70d2498c6a8cf"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "3badde1e746304e203edfe8940d5fc1c"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "49fc73197e5bdbda007e44c3e545ee42"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "ee0e6ed3d50df59f68d46358d59a2375"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "a63251ab9871bcd665fcec4e1e3fc4fd"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "9c3f896cb35987a36ce2b8aa0bd08062"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "2053c20724ad74143de482c0c2f2f2aa"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "d5ff902a3c750a5c5790b482009511fb"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "99ae88de610020655ccbe70c2473eda8"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "0aa6e8d2c1e4925f5c6949b2d2e03ac2"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "12e3d9dc25226a2c7d86f09ee633e559"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "5490f01493949f71e73ba54193b2a1f2"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "9970b1cfdfac39d701af19902527203d"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "05d1fd7e8d6366995ec1bc603c5a5667"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "6bea10fd6ad882516a0f63af12e6d8bc"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "44f9539c20182fcf8180904cc07766a8"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "6dd8f06ee92b3ac003d6c7467c3f9f4c"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "5a34b4c993b5647cf42fe83a8f787f9e"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "18ae67718eaaa07ead84480d6ed5f139"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "b5c85aba7bcbb4e4b31a0a5bc0d52d94"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "19abcd80226bc2c30558696ee75e86c4"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "97f549b78aee4cda816ab86d19d1bb7b"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "fb542ff6b60dec2bce52c36a9ebb9a3b"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "2eff681eafebb041a68465db00b529f1"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "1f064bb5bf8d458199ff1982a2a88356"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "93307b708a9e3dfc00d63417674d32bf"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "012c766a388aae74c442ef26d2c587d9"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "6f1cd259cc24235d858b53857982c81b"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "3680256a79b6ce42565283ed3585203d"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "be71475f14de0775716549458ad3c888"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "3ce7a6833ac4d636c2b6673d979a03b7"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "5eb78ba9ff061784e8b002441c2a9d0e"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "13aa35e55de79f4bb29be47ceba911e1"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "68e0b2e6a2f1da08f521208ccc6f6762"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "748464c855380e02ba24709f01f8ca48"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "08f726734794e02277be0cec09ada87b"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "9ff5a81cda02e4db71bde88000bb8812"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "a757ed09e350ac41cd26631f9a5b2d3d"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "bbe9fa3caea66584bc596367311c0652"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "16119a5b428b7f8c1c9bcf2d6cfe9150"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "5328ef6b84b240d31ebb336d0e333fc6"
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
    "url": "assets/js/10.7760e41e.js",
    "revision": "db225fdc0765dc8f27dd447c07346ec4"
  },
  {
    "url": "assets/js/100.963d9d3a.js",
    "revision": "21b2180f8ba373c0584b144d1960214d"
  },
  {
    "url": "assets/js/101.469fde50.js",
    "revision": "d87e7403becf2cf65022a8f85f79f74a"
  },
  {
    "url": "assets/js/102.1f596139.js",
    "revision": "385ddb13af3b59184f1e335a3c8cb95a"
  },
  {
    "url": "assets/js/103.d18c8111.js",
    "revision": "7efa12f059e98efee3cac7dada40f289"
  },
  {
    "url": "assets/js/104.b940e627.js",
    "revision": "eac6bd1c65d126fe24ec89153e41cf42"
  },
  {
    "url": "assets/js/105.880f6031.js",
    "revision": "bb99e1fc1d24766d08b110c9cd3061d9"
  },
  {
    "url": "assets/js/106.0a7e5173.js",
    "revision": "6b68c9cce6df5449ea7fad7cad0c97aa"
  },
  {
    "url": "assets/js/107.86b48145.js",
    "revision": "aac6f35592d99a0fdef4d876baa3cf39"
  },
  {
    "url": "assets/js/108.72d65a2a.js",
    "revision": "fd07a9483ce7cd0e7d2d324bce441850"
  },
  {
    "url": "assets/js/109.f974774e.js",
    "revision": "ea49b56e7e0951f4e5e4ba1c3d7d0459"
  },
  {
    "url": "assets/js/11.91cf10cd.js",
    "revision": "3e9abeb80165a990c612a57a3c7c8f78"
  },
  {
    "url": "assets/js/110.8186e923.js",
    "revision": "6ed352af5142a72c0cf34e1c614c0da8"
  },
  {
    "url": "assets/js/111.a6a0df43.js",
    "revision": "97328b0d7b7644ecb337015f45e62aaf"
  },
  {
    "url": "assets/js/112.b4f8febe.js",
    "revision": "cf081986e704aacfbb300d35f368cb29"
  },
  {
    "url": "assets/js/113.ca72c5b6.js",
    "revision": "6c26d4939a0640117461a7beafec05da"
  },
  {
    "url": "assets/js/114.b3ea7e63.js",
    "revision": "c5c0d7bca42ff77fc36497f085e9c6a8"
  },
  {
    "url": "assets/js/115.f7acb1a1.js",
    "revision": "c32b006ef7eb1899c2605615b117a51a"
  },
  {
    "url": "assets/js/116.977358aa.js",
    "revision": "94e8f561603f038c1720a3a6aea83898"
  },
  {
    "url": "assets/js/117.bc28c931.js",
    "revision": "29d6a284a4d86eaeaa4ac967c90a2b5c"
  },
  {
    "url": "assets/js/118.f64bd1cd.js",
    "revision": "a7a7b247a54d1c1d87afe894bb7b4372"
  },
  {
    "url": "assets/js/119.e9af1fff.js",
    "revision": "d1b1c55a2ad7baa42c4da2b0a40340c3"
  },
  {
    "url": "assets/js/12.d2f3a781.js",
    "revision": "a3f4fe5c4ce7098e6a87438323030178"
  },
  {
    "url": "assets/js/120.76b4e1f9.js",
    "revision": "20af41da9c21d49026b0983e19dce898"
  },
  {
    "url": "assets/js/121.f4d1885d.js",
    "revision": "b8da223c96327d72113ba7260b3cf61f"
  },
  {
    "url": "assets/js/122.babfaa69.js",
    "revision": "c3756cd3e4f25ebbef377d3c7f0399de"
  },
  {
    "url": "assets/js/123.32597f68.js",
    "revision": "eed43e89b34c002efb229268c217f8ce"
  },
  {
    "url": "assets/js/124.3dcac815.js",
    "revision": "d8eada487b41240e16afb305a8490d67"
  },
  {
    "url": "assets/js/125.c8830fb3.js",
    "revision": "51e671cdd6709246db864ccfb66006e4"
  },
  {
    "url": "assets/js/126.0d53d613.js",
    "revision": "a82c9a331689d7a35ec1c9f36398c83e"
  },
  {
    "url": "assets/js/127.4b2df946.js",
    "revision": "73d5773509ef6bb0ce380b217ac1ce52"
  },
  {
    "url": "assets/js/128.d1cc7564.js",
    "revision": "48a80e3c73b077c6f38e8268b046ac76"
  },
  {
    "url": "assets/js/129.080a7787.js",
    "revision": "f939f4e96607c99d7c5bc64bcbf54846"
  },
  {
    "url": "assets/js/13.f44c61df.js",
    "revision": "caf0b3a04d877b786f6eda300ed13314"
  },
  {
    "url": "assets/js/130.62844591.js",
    "revision": "7124794b2aff611d60c986995ed4a4b3"
  },
  {
    "url": "assets/js/131.6c551915.js",
    "revision": "81a7702e8e57b7ee792d17b12fa6d965"
  },
  {
    "url": "assets/js/132.48d3757a.js",
    "revision": "20517a680e61389a6dc899353058a683"
  },
  {
    "url": "assets/js/133.4a3d57cc.js",
    "revision": "9ddc4737de882ec2fa5d30b44afd98b8"
  },
  {
    "url": "assets/js/134.1b5e8229.js",
    "revision": "fa6482465dd4468ef59fc802d1f04add"
  },
  {
    "url": "assets/js/135.14cceb80.js",
    "revision": "52cd2d0b48c28ed7ae30ae6c0880bec2"
  },
  {
    "url": "assets/js/136.e50027fd.js",
    "revision": "d777aba2494cf49ec951176009ad7683"
  },
  {
    "url": "assets/js/137.6c852be6.js",
    "revision": "e4305b9b762a604db12d57d2d042aa89"
  },
  {
    "url": "assets/js/138.181a2703.js",
    "revision": "9d364c49e5c70c839ede6a9ed53ee2d9"
  },
  {
    "url": "assets/js/139.4c1a8ef6.js",
    "revision": "9f4608608f49600c6f7824101aadf52f"
  },
  {
    "url": "assets/js/14.6542ee88.js",
    "revision": "6d54c74bffae1b079f54545e8666364a"
  },
  {
    "url": "assets/js/140.0a526f17.js",
    "revision": "2dbaa29c5029ea2e0b1484a795cff096"
  },
  {
    "url": "assets/js/141.dea0df3d.js",
    "revision": "d90eada552d6a41c50999b25ef87102b"
  },
  {
    "url": "assets/js/142.cb62090f.js",
    "revision": "5c6e8e4530231fa4ce16c6bf2a498bf6"
  },
  {
    "url": "assets/js/143.51d067c7.js",
    "revision": "05b4ac9fe00592ecfea94d3f943402fc"
  },
  {
    "url": "assets/js/144.d79bfe4f.js",
    "revision": "83151aa73d79398a4f75a7a82c9bcec4"
  },
  {
    "url": "assets/js/145.2501549c.js",
    "revision": "11e9da461f80f4236e444d5c97bcbf20"
  },
  {
    "url": "assets/js/146.d4cdd797.js",
    "revision": "db722750f47d2de7b4dec00b6cde7c80"
  },
  {
    "url": "assets/js/147.59aa8dfe.js",
    "revision": "d52e4d68881bfbb5de95af59792cced6"
  },
  {
    "url": "assets/js/148.35ddc2a4.js",
    "revision": "3dbebf5bddf565dcd010b20ff2d06017"
  },
  {
    "url": "assets/js/149.11bec995.js",
    "revision": "7fdd90650a6ebaf4a36cc741475cb664"
  },
  {
    "url": "assets/js/15.9153f4c3.js",
    "revision": "bbe7872f466f7b8f110d843eb363fbc3"
  },
  {
    "url": "assets/js/150.ee3c86d6.js",
    "revision": "8dd69eb6c974264ae68f7f12c501eb63"
  },
  {
    "url": "assets/js/151.b224846c.js",
    "revision": "bdf40389a4c8f124975172a9f9e329b2"
  },
  {
    "url": "assets/js/152.4db3208c.js",
    "revision": "b2c64435665f9f298b89ba7938fedce0"
  },
  {
    "url": "assets/js/153.8ad8250e.js",
    "revision": "259c5fbb1d0de43aa1a456e13d656533"
  },
  {
    "url": "assets/js/154.356726df.js",
    "revision": "dcd3b517aa3a88a4cdce833af264c35a"
  },
  {
    "url": "assets/js/155.8745660e.js",
    "revision": "a2150d60d4fc9cb3382e700de781408d"
  },
  {
    "url": "assets/js/156.1633ef9f.js",
    "revision": "3566d879505ba3833f1de088af2e78ae"
  },
  {
    "url": "assets/js/157.887dddef.js",
    "revision": "40f140c135a9674bc92e426a9dcc2c85"
  },
  {
    "url": "assets/js/158.7f36bc8a.js",
    "revision": "47084bf2f5adb8b67b74d104c87324a9"
  },
  {
    "url": "assets/js/159.31c26231.js",
    "revision": "cd0e94fbe817bda8b70415778ab6dea4"
  },
  {
    "url": "assets/js/16.9990e400.js",
    "revision": "81d92931a3d92f245c3d07a249996279"
  },
  {
    "url": "assets/js/160.ad8f62d0.js",
    "revision": "6a3ea705bd92c88cd16c0211ff1837c5"
  },
  {
    "url": "assets/js/161.fc1c896e.js",
    "revision": "4e2a6935ec1d3e4d81544e6ff0668f9b"
  },
  {
    "url": "assets/js/162.3ed11469.js",
    "revision": "def481031b897c0ab52fc42bf353ab99"
  },
  {
    "url": "assets/js/163.910b6e44.js",
    "revision": "8fef9b67314caffb349d882299e0cbb9"
  },
  {
    "url": "assets/js/164.52aeded1.js",
    "revision": "222c15ef96557727f2973961c8095967"
  },
  {
    "url": "assets/js/165.6e037bd2.js",
    "revision": "7dbc34cb9921876fe67fabe756a93358"
  },
  {
    "url": "assets/js/166.a3cc078a.js",
    "revision": "1c4e8a28f85e9b8280490a7fe5738aa5"
  },
  {
    "url": "assets/js/167.81300f37.js",
    "revision": "394a94c6097b2df1fe66a8299a7e3c79"
  },
  {
    "url": "assets/js/168.fcb90b0c.js",
    "revision": "2a0fe9bc2dd8cbae309674bca948cdd0"
  },
  {
    "url": "assets/js/169.df9ab546.js",
    "revision": "50c257cc07d13bb8671609be18aa805e"
  },
  {
    "url": "assets/js/17.c26e9056.js",
    "revision": "a65fdf1402781a9acc34a487d157ae10"
  },
  {
    "url": "assets/js/170.115a943c.js",
    "revision": "0632a0b1103f51226eee30b3ef626835"
  },
  {
    "url": "assets/js/171.8d530e92.js",
    "revision": "80d53f90830ed35c6fc4f08cfb08b9f1"
  },
  {
    "url": "assets/js/172.387c9484.js",
    "revision": "e7df362c6a8154a7628c664a00987846"
  },
  {
    "url": "assets/js/173.65178cb9.js",
    "revision": "d057aa32617e25a1ce2960e38be87a28"
  },
  {
    "url": "assets/js/174.2c432b33.js",
    "revision": "f20e51f2f1f574629db785a3117e0818"
  },
  {
    "url": "assets/js/175.69a9c74c.js",
    "revision": "9ca634a5b0df6e15c52961c1ae9f9cf6"
  },
  {
    "url": "assets/js/176.e043ff1e.js",
    "revision": "43d21c6618b9aa1022be0f13ae3a5750"
  },
  {
    "url": "assets/js/177.aca20bfd.js",
    "revision": "69133bbaa5c6ccc9a6ebdf400dcd7e65"
  },
  {
    "url": "assets/js/178.3a9c1181.js",
    "revision": "8895bdc338ee5b272c6b1c2017177b54"
  },
  {
    "url": "assets/js/179.e541e90a.js",
    "revision": "0d4bba0678c0f00d13071f001da61989"
  },
  {
    "url": "assets/js/18.eb528304.js",
    "revision": "1e4f5671bc98c44ea42ca1aafec830e3"
  },
  {
    "url": "assets/js/180.9e2c9497.js",
    "revision": "8ef0e8c41a250833a0070099d56bf385"
  },
  {
    "url": "assets/js/181.f37c9ab3.js",
    "revision": "052867bac00a3b587de90c381665cef1"
  },
  {
    "url": "assets/js/182.3d94366d.js",
    "revision": "a0886a82084bc3b0372ed874693784b5"
  },
  {
    "url": "assets/js/183.c47186d6.js",
    "revision": "c7632165ba3be42e7cdbeaaa70d443d3"
  },
  {
    "url": "assets/js/184.671ec5bf.js",
    "revision": "7cc33ded4764fa5320a624e0b4e924ff"
  },
  {
    "url": "assets/js/185.e6d34a05.js",
    "revision": "6039c570864c7655830bcfa4a303494c"
  },
  {
    "url": "assets/js/186.b6ada82b.js",
    "revision": "0738ae16fd245eae5f0976ff79128fe6"
  },
  {
    "url": "assets/js/187.1f93f470.js",
    "revision": "7d70b8e7055d78e2d23a79f4b99c29e0"
  },
  {
    "url": "assets/js/188.35f78205.js",
    "revision": "f9327837eb20d3b732ee46311e59c2c8"
  },
  {
    "url": "assets/js/189.4c504194.js",
    "revision": "5a5572b88b696e14f1bd5d9e07554836"
  },
  {
    "url": "assets/js/19.79192353.js",
    "revision": "dd879352bfa3ad6c2a792af1f7ff3f29"
  },
  {
    "url": "assets/js/190.0a3c348a.js",
    "revision": "b598aefdc885cb044da518cb9e96b817"
  },
  {
    "url": "assets/js/191.532765c8.js",
    "revision": "280de9e024ee956a35fd38f3ebf916d6"
  },
  {
    "url": "assets/js/192.08ad906e.js",
    "revision": "22e23bfe8064ea101e062d09afaefe9a"
  },
  {
    "url": "assets/js/193.0d1073cf.js",
    "revision": "36843911e95f74cab16a627112a0136d"
  },
  {
    "url": "assets/js/194.79bc6e84.js",
    "revision": "6869ab2725fbf182ac64b30886b559e5"
  },
  {
    "url": "assets/js/195.a292017f.js",
    "revision": "dadda538d917836ecbb2d5c4024b620a"
  },
  {
    "url": "assets/js/196.3571e3cb.js",
    "revision": "dfc2263d683fbd956f4daf5a9cc6abe4"
  },
  {
    "url": "assets/js/197.a969d22c.js",
    "revision": "80aa4cb8a8ebeeeed70ea65845340535"
  },
  {
    "url": "assets/js/198.cb1577fc.js",
    "revision": "8e2b824588645f3c2129792db36c9130"
  },
  {
    "url": "assets/js/199.26a03315.js",
    "revision": "990c754dae2c970001494d634dfd6d8c"
  },
  {
    "url": "assets/js/2.fe2bffad.js",
    "revision": "c61377be3f3cc52057e3a9644c397f47"
  },
  {
    "url": "assets/js/20.5796772e.js",
    "revision": "4e79747adbe2f2f353e10e438ca5a17d"
  },
  {
    "url": "assets/js/200.7e457c99.js",
    "revision": "170565e7473d8f376bfe6855f3ddd090"
  },
  {
    "url": "assets/js/201.49091249.js",
    "revision": "87016b9fdc420b2c440ca401e1819124"
  },
  {
    "url": "assets/js/202.63b9a30e.js",
    "revision": "d3edf18e6265adc2871cc2dbe88a65ab"
  },
  {
    "url": "assets/js/21.7e8f9868.js",
    "revision": "039d999a98b2353e2fc5c78e2fa046b8"
  },
  {
    "url": "assets/js/22.dbe1cf3a.js",
    "revision": "9a4d5f5aad2423f98aaf5c77cac61f8d"
  },
  {
    "url": "assets/js/23.ae676d64.js",
    "revision": "18755dae4f62126bd1ca1f15618a2957"
  },
  {
    "url": "assets/js/24.530ae494.js",
    "revision": "17fe02d6218a76733aa93dc727c9ac93"
  },
  {
    "url": "assets/js/25.cd6fd3f9.js",
    "revision": "290b1dcff2be00141c54cc54a3f0a565"
  },
  {
    "url": "assets/js/26.2b26fdec.js",
    "revision": "90912c784720d0090a0344b38837e071"
  },
  {
    "url": "assets/js/27.b57b4cd4.js",
    "revision": "eeec26e12552f7e0ffe8e5d93d8771ab"
  },
  {
    "url": "assets/js/28.08b0a632.js",
    "revision": "e5e87f5bca9dde5af13282d146b5e00a"
  },
  {
    "url": "assets/js/29.e985ac77.js",
    "revision": "40ebda291b00778ed7b972ad9bf9177f"
  },
  {
    "url": "assets/js/3.0a7ff457.js",
    "revision": "c26e00826e9f0ab18dc258b414dbc178"
  },
  {
    "url": "assets/js/30.fa40ee16.js",
    "revision": "f3303d274f3e4f29777934c272bc6574"
  },
  {
    "url": "assets/js/31.30c569a5.js",
    "revision": "7bec5e81802510684f78ee95307bf3fa"
  },
  {
    "url": "assets/js/32.2aa3e973.js",
    "revision": "2e9aa2800918b077f098f82c37d1fbe6"
  },
  {
    "url": "assets/js/33.58affa56.js",
    "revision": "e435b083cfbec12c1bf982d2c1d1ca83"
  },
  {
    "url": "assets/js/34.85940663.js",
    "revision": "1acf0d9179a25f04cbe97d81b9fcc8ae"
  },
  {
    "url": "assets/js/35.a29a83dc.js",
    "revision": "4c5ac4e21cdebad880721a35609ade6e"
  },
  {
    "url": "assets/js/36.a2937e20.js",
    "revision": "6a5347b326479c83b7139567746d541f"
  },
  {
    "url": "assets/js/37.25bb0a1f.js",
    "revision": "aaf2a64044398e85e6e5cd3f69ced6fc"
  },
  {
    "url": "assets/js/38.d917f921.js",
    "revision": "646fddb9dccf8f419b371d63d7199abc"
  },
  {
    "url": "assets/js/39.70ec5fa1.js",
    "revision": "9e22c96cc01b65b2bbf40c42a4a41af8"
  },
  {
    "url": "assets/js/4.2cf90f25.js",
    "revision": "bae143c22df8c54dfa916ebf8d5f3397"
  },
  {
    "url": "assets/js/40.11eb0c79.js",
    "revision": "25e7341630a389c81dca4f0bc34db2a3"
  },
  {
    "url": "assets/js/41.b49086f5.js",
    "revision": "0f8d424436f6ce71832dab792004fed2"
  },
  {
    "url": "assets/js/42.1768962e.js",
    "revision": "71d7fe64f7d417507b4d622554031a9a"
  },
  {
    "url": "assets/js/43.34a177d8.js",
    "revision": "499d3a3ac766cb2064b706170866db75"
  },
  {
    "url": "assets/js/44.1f7e3c2f.js",
    "revision": "2b472cc5a2ebf4c554fc5955d608ed09"
  },
  {
    "url": "assets/js/45.6e072b0c.js",
    "revision": "9f8a805f9fed41e57224cd8469ac4219"
  },
  {
    "url": "assets/js/46.36695e07.js",
    "revision": "7b4b71db8e63a5b5100805863f72f5e6"
  },
  {
    "url": "assets/js/47.e3044a38.js",
    "revision": "2137cb5f576f13a9f0493e9003644dac"
  },
  {
    "url": "assets/js/48.a5eec5ce.js",
    "revision": "a6db3204157469db98cb657802c7ce11"
  },
  {
    "url": "assets/js/49.9a847764.js",
    "revision": "22decf400581eda9d86bc54a44feb8da"
  },
  {
    "url": "assets/js/5.68de519c.js",
    "revision": "01e6de14b67206384f3e4cbf4350b297"
  },
  {
    "url": "assets/js/50.420753e0.js",
    "revision": "5962fde934c7ac9ea3bcdeb61b27ba85"
  },
  {
    "url": "assets/js/51.0cc34e40.js",
    "revision": "9624165168ff1b8cfb86b409d73780fa"
  },
  {
    "url": "assets/js/52.547fb814.js",
    "revision": "572279d366404b45da45513220e03eac"
  },
  {
    "url": "assets/js/53.65572998.js",
    "revision": "7293abe54cf9d8f0233642427ea4060a"
  },
  {
    "url": "assets/js/54.77c9a442.js",
    "revision": "5fed3e0c6fda34be60bc496d388bb5bd"
  },
  {
    "url": "assets/js/55.8d74ac9c.js",
    "revision": "c4f4eedc838c7a257a1ce55637a3d831"
  },
  {
    "url": "assets/js/56.3d9c09cf.js",
    "revision": "337bc18d9eda53d7d322a1e4bbc9a669"
  },
  {
    "url": "assets/js/57.bd92e24a.js",
    "revision": "5268761437cb89f81cd423b641ef3e17"
  },
  {
    "url": "assets/js/58.67ffda47.js",
    "revision": "a855a99454d070d7d85e76b1fb3c498a"
  },
  {
    "url": "assets/js/59.6b060fc0.js",
    "revision": "393886bdd2e1fed9a3c5b621d9f41c63"
  },
  {
    "url": "assets/js/6.bfcac773.js",
    "revision": "83f10ac508640131ee4eea86345d9c4c"
  },
  {
    "url": "assets/js/60.8e9093b4.js",
    "revision": "1e1ed39f59957dc239cf4c6b5a92e141"
  },
  {
    "url": "assets/js/61.7c060aed.js",
    "revision": "1882ac0c332ae1bece344d264658f9c6"
  },
  {
    "url": "assets/js/62.34c1a723.js",
    "revision": "25ae71a159d2a5ef6c5fe10ced7671cd"
  },
  {
    "url": "assets/js/63.05c67e24.js",
    "revision": "5011f762fcb9cbce5f661492a1658438"
  },
  {
    "url": "assets/js/64.3adf47ca.js",
    "revision": "d659d7cd6e73cffe3684a1be03aa4fc0"
  },
  {
    "url": "assets/js/65.5a204730.js",
    "revision": "5657e058138618b93e9559f7fffa4943"
  },
  {
    "url": "assets/js/66.3cdbe831.js",
    "revision": "55d33e599296b7d6691b339b8c8ea1b3"
  },
  {
    "url": "assets/js/67.b0479d1f.js",
    "revision": "8c22f19f9b1000582d550b5f7afdd722"
  },
  {
    "url": "assets/js/68.5e807db4.js",
    "revision": "7a9e8d9da1bd6c520e5661cdfac260d2"
  },
  {
    "url": "assets/js/69.b68e95cd.js",
    "revision": "ad586bddfdc62d300f339bc1403593ff"
  },
  {
    "url": "assets/js/7.1a11cfee.js",
    "revision": "f415b5a5464532e84fe2c9f45477b614"
  },
  {
    "url": "assets/js/70.4962b3d7.js",
    "revision": "cc7edff2117bad61b5813c18697eedae"
  },
  {
    "url": "assets/js/71.a70df0da.js",
    "revision": "1e46b90ca30d649daa1577d2f3e42814"
  },
  {
    "url": "assets/js/72.bb6afc21.js",
    "revision": "5debf66a5ec030379cdd4339064a1299"
  },
  {
    "url": "assets/js/73.e457f756.js",
    "revision": "c721833cdee507868920cbd22f82e262"
  },
  {
    "url": "assets/js/74.e6eb76a2.js",
    "revision": "b6cd8db1114c259d1d99fdd4830e4218"
  },
  {
    "url": "assets/js/75.439b047a.js",
    "revision": "f2715cf929508a4f35ceed7171d0742c"
  },
  {
    "url": "assets/js/76.a840d09e.js",
    "revision": "1dc7e0ae66fdc3af54cdf978450765d6"
  },
  {
    "url": "assets/js/77.b37e28e9.js",
    "revision": "bfe311ac70244f479e9030486a512500"
  },
  {
    "url": "assets/js/78.a1f17588.js",
    "revision": "f24fe4f5621829a13b7f7083f6a80b67"
  },
  {
    "url": "assets/js/79.372fa0eb.js",
    "revision": "7846d56a8efe04ba760c512d869350ca"
  },
  {
    "url": "assets/js/8.1892c335.js",
    "revision": "2580a12b4e4d733bf0b2b127377bd8ea"
  },
  {
    "url": "assets/js/80.ec5ec1fc.js",
    "revision": "2c6895b2100a5bf88a68fca3ef1312c3"
  },
  {
    "url": "assets/js/81.4c47bf1f.js",
    "revision": "a4dbfc403988c17d28e5e54486423ca7"
  },
  {
    "url": "assets/js/82.f3189c36.js",
    "revision": "f51ca09db1b62e4fcfb2800ca5ac6012"
  },
  {
    "url": "assets/js/83.d3913d56.js",
    "revision": "dd7e778c238ca72bb7a77b19866b6afb"
  },
  {
    "url": "assets/js/84.0d635e9e.js",
    "revision": "0f20ee1ac9a4ce109e9ef6addb88fff3"
  },
  {
    "url": "assets/js/85.218281ce.js",
    "revision": "91caf46edebd2212db15f69341a84d4e"
  },
  {
    "url": "assets/js/86.0564c43b.js",
    "revision": "606eb8da1d9b8490d71a8ca0e154e85f"
  },
  {
    "url": "assets/js/87.bc03425c.js",
    "revision": "dfd3be0c2c476db55db0a1e2943b6583"
  },
  {
    "url": "assets/js/88.c615e38f.js",
    "revision": "e4b3132f152aa39a5211f90663e9be2d"
  },
  {
    "url": "assets/js/89.3269469b.js",
    "revision": "7bc4e543583065c6dd0a1f73f8a574b2"
  },
  {
    "url": "assets/js/9.40203201.js",
    "revision": "f2ec9327d7cda7206fa5b5bd46f917c1"
  },
  {
    "url": "assets/js/90.d97a828e.js",
    "revision": "7c5bf25e3a46b01394dbb0eed5e87af6"
  },
  {
    "url": "assets/js/91.84e20a56.js",
    "revision": "265af8ef9e528bc6c9f75ad5616417ec"
  },
  {
    "url": "assets/js/92.fe565f74.js",
    "revision": "905839edb7a95fe637b6a86afbb16c81"
  },
  {
    "url": "assets/js/93.68b89831.js",
    "revision": "c7710086c55e56c194ddb2c14abbb8fa"
  },
  {
    "url": "assets/js/94.e55147d3.js",
    "revision": "a8f2accd2611a0d5dcb379dbd61dc2d3"
  },
  {
    "url": "assets/js/95.54ccb684.js",
    "revision": "0e6a12dad65cad079bba698dc34250a0"
  },
  {
    "url": "assets/js/96.77b2434b.js",
    "revision": "1f76e6cd809065d1d73d3a703470878f"
  },
  {
    "url": "assets/js/97.0a0d81e3.js",
    "revision": "dae282e271028488e351a62eeb17fe10"
  },
  {
    "url": "assets/js/98.45140cba.js",
    "revision": "565a78a01d70d8e34f3a879f96be85ef"
  },
  {
    "url": "assets/js/99.0d24978d.js",
    "revision": "e5ad7a1217a58ec0ef12c4555ecffb23"
  },
  {
    "url": "assets/js/app.9bf7704e.js",
    "revision": "9a9b14ef2b4ba80af0fde1c8edf1199a"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "8ec26e68b19fc686f83dd017b10aec75"
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
    "revision": "f74ccbc0d73cbc74d632343403d18811"
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
