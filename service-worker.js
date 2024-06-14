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
    "revision": "005b4801dcb5271defcbe0674012bbd7"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "46b2e64a538d751429503a612b360be5"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "5272a72ff6020318ab3d9312d9dad220"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "7dbf318ebef335461e4f7cd1e6a0cced"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "ef0757f6bf9af8bcf83dbb3bc67da47d"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "028a8c1f953d2f24933f5ecce333b1e5"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "2af42b3697b09f907d81e360295a7ccd"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "895ec71f93aa16da0252b28cfaae4a5d"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "b30f0876babc65629d345cbf6977cf89"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "525859ab46bdf916fb179e7bc7a917ed"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "2551b10690b828b854faef8e24d30167"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "0040fb47809e8009f8bbb73c316d0840"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "81c5036ed43eaefd36f8ece4a41e7ab1"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "f5292a24e8162c14436c9954c617b9de"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "aec66a9d0dd3eeeb8a36328a8a13a394"
  },
  {
    "url": "1.base/2.ECMAScript6/1.scope.html",
    "revision": "e6a602713de8ca299b7d03a65c683b6e"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "363bd4dc182d1da269ab9c45f3c7889d"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "c9efe1c9837411b7ea6f71288beac6cf"
  },
  {
    "url": "1.base/2.ECMAScript6/2.constant.html",
    "revision": "4898f5329d2e4481b0bde79bc4b99d30"
  },
  {
    "url": "1.base/2.ECMAScript6/21.nodeJS.html",
    "revision": "6c62e4148f6b17957f888e61be6e79d6"
  },
  {
    "url": "1.base/2.ECMAScript6/3.deconstruction.html",
    "revision": "421426f08d0595d7c92640d58eed4623"
  },
  {
    "url": "1.base/2.ECMAScript6/30.module.html",
    "revision": "7f2dbf3d575555f240872df1846ef5bd"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "be49714e7a7ac34a345e66e5a1ff3339"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "17d174162329340d5c4c8455d14c333f"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "9f925ebc255ee27eac4f24e76904ee27"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "98eff6091d39b46257ffc07c8a569434"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "3c29e9b5592c49823722ba9cee671536"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "a9e3a74d3d6cb868b0d7f66af0542e7c"
  },
  {
    "url": "1.base/2.ECMAScript6/bug.html",
    "revision": "71fde00dc5b256b938ce64308f00206a"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "64d182e355107ee06adf3cb86b68635a"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "b2523c051996ca74a9a69acc1938b155"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "87c93f041a58c1cbfdd8821150fa1bce"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "9e521577287a9400a4807b9b4d66fb8e"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "d334edc57287059a57139bcbff2db890"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "edbeb7e6fb484e4a5f2deff6750dcc12"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "9a1f5ba1913601854b284b2a6eb3d489"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "fdc6bfb1edac2b4a7526a17c93581ec0"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "b7d89ce76c7ce8f1d1ebab4b9530c922"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "2a64a11eebd272caec9942ce117652ae"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "fabe2ebadd84a269b341d9d9fb5cda1c"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "99b7242f7e0917bce2b4056051a4363a"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "f7c86e59b7bcecc147f79f1c7f784718"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "88ac767c122535944befe02b0b42da0d"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "a50980b7f420623fc1d5c412a913358e"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "dc8e53510db3be37fba63c05fd1c31c0"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "84613d954f19b9ab2fdcba812145b442"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "d70db891b86bc342cfd1160a2b7e9d35"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "167b4df83fcf43f6a4922dc6cb59a96f"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "71ca1614ed3f94c6ce4dadbb7d1c99d1"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "57da566820dc4f52adcf187404601bc9"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "7e0f0c158420f778d1a19417b1cf88ed"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "9d1999fa93d03b1dfe63ae1ff0e843b8"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "8de38afe93dff5cbc7e6a9b0dd56e838"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "dfaa70ca6dfb076d402b39b8bf3fee2f"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "eeafb91c0455d5403ae9027bdf1bdcc6"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "1a2a691dd452357328d5e11382d1ec38"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "2f397ad1bb5ed5efc8a744e15683a4c1"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "367022a21a4ea8d874c71e45c455fe51"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "c40a2c1b87aa40118e4e9d99876e9dee"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "794a6a7ba909faa61b499a0f27fa21a3"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "9edfcc7f9ab3f5c29988df88850e49c5"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "79c908318d4d8030b5367e79a38c2753"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "628342ad5292a3a34aea26870f9fd566"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "b258b9393fe83ef1de4bb20faa3ad922"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "030efaf0fe77c3ebeb09adb864736f24"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "a61486c0c95168ac350d803ad0813048"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "01181a406a087b7613a6e0203a868fa9"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "4228c6671d1a742f5a221bec4372d9a8"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "605c628340d49a52e42a1af157f91fa8"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "59b8c9a0cb3487db73f7965734aa1869"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "4bb53dd37557f0291acebe7bc0a25ec1"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "3d2f10fa61724b707295da426f837103"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "ecdfae7b8841696c1a39c993938f14c2"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "b6b4eec6272cff500f190dcecc5197a6"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "d478ad36362d724740e8f467ee7c6322"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "1d96a5e2de11acc6b8f70faeaeccb389"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "d621f5f7c5fda955b11ec0850902caa7"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "7a6cdc988f4681bc8c8f501bcfa13f60"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "8ff5bb5e88963c1122f773c3deb4988b"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "abed7acecf1cce1509d4c9df15bf0d04"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "8751b8d8c0ef822c609f11dd319fd9ab"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "bb7a6d096a6a36f3c23cef89968b8d34"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "8ec4b943909e162177f3138affc085e4"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "a0f81468f17b6ea3819b809f50789466"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "f09e65250a96d6a20d9f8f14c190035a"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "fe7f7a6cd12fe88336f29d2a266a7638"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "339d972e799c400d3f7c4d675198a623"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "e2a3efe85dff22ec715efb39c6c9ad85"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "2b9ac9bab3e3ed3bfda004aabf36747d"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "2fc64402242244cdad815dfb7f7a37f1"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "7340d143002f3f758599f1d3daa6eebd"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "7e98b5b5f2acb5694bd74517a527a239"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "f19fe7a3c42a267e6ad60d382de43556"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "8527a4a0cb56604dd272d8f7d020baf5"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "d5be6f71ae4c0f0d9c9a4b50a7809bd1"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "a112fee3f496001d390a5de86f03871d"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "9ac51379df4e310fe55f0119f977fc25"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "be45ba3bb54dcd6ad44628c31178347b"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "3c942856854a89332d9232410f622346"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "b901bae6ca93d97b5c7273807c784f2f"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "cf94517cff3381c8ff21b5c2eb3768af"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "f0070dc672dcc55c8180d9f620b07cce"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "20b5b4dec10a8916739ba39c09975c7e"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "35a14d5efa6080267187a65c287cac03"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "17c7b0c495d4f5a6a7425cf5ad704984"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "7cfb06c88a876a54be43b1f6b79382c9"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "0a16d80bc6b854e8b67eff21463b6237"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "c7f547aa6f4feaff315ea2793fb19d21"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "2930ec32f03abf93877ee1428d06d9b5"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "a31a1a424786b77082df71a53daf533f"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "2cf72ae5834b4b1f8a6bea6c68baa0f1"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "ee2617aa0448159b5e84a715ef1834b3"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "3a06359a5c545c9ea21600b54c5ad94e"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "efec703646943e1bdc3150c96b7a23f0"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "70a1b0cf5da9a76c36d4d86a262cf0fe"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "1d2556cafde4f9494e4b7879cd06de42"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "06b7a18140d3911418b08c6b23c7b2e4"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "c8fe1479ffd3b161b01ce659eb416aa5"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "5b80f1f1006cb446636e12add9521050"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "b7f753ca4484219368830cf41b470d64"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "a8993e074308cb9fbcbc42929490f792"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "9ca42feff2acff8a0747344677ff6a30"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "924b1c3e030bb617970aba30e53d0a38"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "6df973b9e6cd5742583bcc2abb4b8678"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "a9cf97e8fb11a91a463cc03717e449bd"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "64c564352d2e932d7bab0534403907bb"
  },
  {
    "url": "404.html",
    "revision": "f1922b5fab3008b87034401ad535d30a"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "ae0e8b6444005ec9350b26ba8227eb3a"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "fac8e6eeb1933b56981e8f3275833dca"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "8992ab58f6e1047cf04a4d603690fc82"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "bab18fc921c55012e9904c1dbf7d7cef"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "3461eb3a30e6acc74a1c5d5f54ec09c6"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "3199e8578fffd274e50057f3a5fce8e1"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "695bb6f9a74705f6e9188455cd142666"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "9655541c8a8ff86aad7d794a3255b8ef"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "c8eb5a3bec710af24329669c26abb749"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "c798824363476b2c8ecbf3fb9ce67734"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "1bb088b2d9bab636b0052ebe9d293f41"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "50ae81fb3f8da448d244665be0fd7a26"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "b43ff8f00ea330562a5d7ec6f1992614"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "c937e9fb8f6f044f51a33912be1c9514"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "90b4f35a3ff3e7deb67c98767327b719"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "5f21de8d32d584f8d4f6548e995e1463"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "c51aef38ba92ee877e750639c64960e9"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "770a91776a40db811018177ee52fdb4f"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "e3236d8e9aa4f85c5e3a7798363a9d39"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "2df4329bafb8517234ee551adfb7e0ee"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "705bb6bc379ee7942eae6145bca0df4d"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "b2bba25955d74546cf369092133a348e"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "161e5cf9adede6eb0b7aec628b0583a8"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "e1737b279ddc4f88ac54ff5a92831444"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "a01679e8bfdd1fd4bb05212f31c04c21"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "3b0f3c09644907f7325794892f74fb2d"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "7314c56cb806d17f31f3b6743ab2e832"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "e4d2be9c54715179b59ffdf59cc05bc0"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "9510172acc589092fed140463214a1bc"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "94dfa055ea8f18445020f275651ce688"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "f1b984b1aaaf4176379e683f0f7bb44f"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "79384e4a0f1a270f7f21d22a195d1771"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "526ff0107b266e9602f117aab00fbba9"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "e0e66abec962f14f8416f4cabd50395e"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "605f5c845e58476c0711cc25e41d85bc"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "160e807828af89339e33f153c1e6a623"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "fdac2e7d92b76050a0bd4a3b970590bf"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "f82c407b72a1d9cab0dbe0c89cdd5b29"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "0e972acc823ac11008bcfb2ee54bae2f"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "3696e0622c91da2bd801c7dce252bc81"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "efc79e8b0315cbdb21ec25369a453558"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "8bca32654b2dc4cc51a35e56d21cb32f"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "381cdefe643cc676628ba94c079b2e24"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "9793dc69cf1137e8a8ee6c96f983b0ac"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "11f33e066378713ae59089e6ad10aa39"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "9ad0af6b6cdddbad3556cb0817583a38"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "43cbe5f69a6094761ae6a6ee0c01d61a"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "089eb2613b0ea1abf8303fd3971000aa"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "e92aac4f6a2f47efd9def930d4c34b6e"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "9b2fc72d0fcb53e27841b1f0189cf680"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "75063da704eb70bed1f41fab72401a81"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "10f4256ea2ee891aa2850f4286f38de8"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "30e499a00e3c661aedf6571e821bf5be"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "8bbffd247796afdcfa438d3baabc3b24"
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
    "url": "assets/js/100.fbf4ab8c.js",
    "revision": "9440b53c943e9511e2db6b5b91991db4"
  },
  {
    "url": "assets/js/101.5ff1e4af.js",
    "revision": "6c5bc19673e93322e05039c4c88177e6"
  },
  {
    "url": "assets/js/102.53b803bc.js",
    "revision": "962c36023b53f2711ef86e3ab125efaf"
  },
  {
    "url": "assets/js/103.16ccec31.js",
    "revision": "13fad8378333b966e7b62d9cdaede75a"
  },
  {
    "url": "assets/js/104.27532df9.js",
    "revision": "133770cbfcd7a73e688a8b5dc3666127"
  },
  {
    "url": "assets/js/105.b4e906e5.js",
    "revision": "b54ad45d7883d6432b4d3a52c2366a35"
  },
  {
    "url": "assets/js/106.c6f4db23.js",
    "revision": "0971f6537dad9130bf2488aea92c0073"
  },
  {
    "url": "assets/js/107.7b110d23.js",
    "revision": "21224f9ab1e9d6a0d4ae333d710f3f87"
  },
  {
    "url": "assets/js/108.c6f8d1cc.js",
    "revision": "ca2b5c63b63a911dab8f47992539ed24"
  },
  {
    "url": "assets/js/109.23134db2.js",
    "revision": "2339129a1c5bc7de2b23fc0cd265d9dd"
  },
  {
    "url": "assets/js/11.4bc148a1.js",
    "revision": "f1340a4894c7d1a766ba0e32ba93dc21"
  },
  {
    "url": "assets/js/110.1c6fcca9.js",
    "revision": "88ab59cc856abffda67c439020110c00"
  },
  {
    "url": "assets/js/111.89ef270a.js",
    "revision": "5d4d8f5902e8765dd825ab8309d5ab53"
  },
  {
    "url": "assets/js/112.5d06ec0d.js",
    "revision": "913c31d93c9119b26158510dde049e36"
  },
  {
    "url": "assets/js/113.f5d11f21.js",
    "revision": "e0bee2be3932b89c7d2431b148bece53"
  },
  {
    "url": "assets/js/114.f62ac400.js",
    "revision": "6741fe3f7325344224177e15e87ed4ed"
  },
  {
    "url": "assets/js/115.7a7504e7.js",
    "revision": "8b51b2e09e28b6bc0df626ca0fd868ec"
  },
  {
    "url": "assets/js/116.f39bc7c0.js",
    "revision": "2c34b5e96a685c124638485789eb9a07"
  },
  {
    "url": "assets/js/117.d5d33cce.js",
    "revision": "d2d9c1db3995d2943b8410b93119dc5a"
  },
  {
    "url": "assets/js/118.25ba0f39.js",
    "revision": "8c56dd11ed38e183c137f3191842ff7c"
  },
  {
    "url": "assets/js/119.4cc17095.js",
    "revision": "cdccdd4d3a540db4bc1b7dde0fdaceaf"
  },
  {
    "url": "assets/js/12.7dcfb5de.js",
    "revision": "fbcf3ddc48ac2073d7f967bd2f64003c"
  },
  {
    "url": "assets/js/120.e2ec950d.js",
    "revision": "58204a6e69659d4442e6e10e59589140"
  },
  {
    "url": "assets/js/121.bc6e745f.js",
    "revision": "c1364b241efbde03d80915c122e6e57a"
  },
  {
    "url": "assets/js/122.480019d0.js",
    "revision": "0519447344044a0afe10c82a33461673"
  },
  {
    "url": "assets/js/123.b515f5e8.js",
    "revision": "3727d23797e4a640a78b39c42baa6d78"
  },
  {
    "url": "assets/js/124.ea9e2247.js",
    "revision": "a77b935a8eee3a4f8c87a99352fa986f"
  },
  {
    "url": "assets/js/125.f9f66e68.js",
    "revision": "db5433483364f20d51d1f699bf84879b"
  },
  {
    "url": "assets/js/126.2c5a7f9c.js",
    "revision": "a351b0f6ee598454e4a38f9cfc68ae38"
  },
  {
    "url": "assets/js/127.b2b065ed.js",
    "revision": "d2d85d817615cfc3cfcf2e420481d332"
  },
  {
    "url": "assets/js/128.ddb0c6c3.js",
    "revision": "2ae60516cef7abeb6116be7d6bf11c24"
  },
  {
    "url": "assets/js/129.6e7293f3.js",
    "revision": "0a6f56582b54333c55d9020b76b4c516"
  },
  {
    "url": "assets/js/13.7a9078a8.js",
    "revision": "b5b89bbbf5231fb4d30b315acbf1951b"
  },
  {
    "url": "assets/js/130.461ef141.js",
    "revision": "9d7a979461187deff5f92d59ef620182"
  },
  {
    "url": "assets/js/131.9c242faf.js",
    "revision": "1754fcf5cca4eef8113a8a3b6b9d4ef5"
  },
  {
    "url": "assets/js/132.ac643c1f.js",
    "revision": "bc38976b0eeaafb1e09742fcd9b1a6d7"
  },
  {
    "url": "assets/js/133.bfadfad7.js",
    "revision": "0d68d5e43f962d62a0349eefa53d182d"
  },
  {
    "url": "assets/js/134.38931f61.js",
    "revision": "c8d4a15ec9b3f8575f969eb6c5e8b348"
  },
  {
    "url": "assets/js/135.2003e001.js",
    "revision": "4ef2d52c8bc7a821ed3e4a59a3cf5dd0"
  },
  {
    "url": "assets/js/136.643b8240.js",
    "revision": "c384ff2106dd20dc6dc3a9c6397522e0"
  },
  {
    "url": "assets/js/137.f681fba8.js",
    "revision": "f3a38142d1f0387e51fdac128ff10aa2"
  },
  {
    "url": "assets/js/138.d9d66479.js",
    "revision": "32230323b957a6be43c894ee9dfa3a5f"
  },
  {
    "url": "assets/js/139.ce4910ad.js",
    "revision": "59ee9d92e1500a0cc8d101adf61817a6"
  },
  {
    "url": "assets/js/14.3714f213.js",
    "revision": "ba2ebb2c7285b6e50f49b8a01b7ad2d1"
  },
  {
    "url": "assets/js/140.1626cf14.js",
    "revision": "4632a4a828f67b91ed86b5b5fd02201f"
  },
  {
    "url": "assets/js/141.73aeb9da.js",
    "revision": "25c1eeb9ecdbe5e24dd7634955c472aa"
  },
  {
    "url": "assets/js/142.9e2517ce.js",
    "revision": "2f98d30c7e83e0cb988efd050e026376"
  },
  {
    "url": "assets/js/143.55cf9578.js",
    "revision": "63fd75ada63f731b64799e0c68d02368"
  },
  {
    "url": "assets/js/144.1a6dc8d3.js",
    "revision": "f50e950bd0dbbd0f5c82078983e1f593"
  },
  {
    "url": "assets/js/145.a23fd52a.js",
    "revision": "2f6ed5116e0f7588212b8a13ac48fb43"
  },
  {
    "url": "assets/js/146.4c3a1932.js",
    "revision": "81c04a8d17aaf6bdcf1701938185d271"
  },
  {
    "url": "assets/js/147.d19e57e1.js",
    "revision": "3c73b5575620d02dc920b0904d2ff62d"
  },
  {
    "url": "assets/js/148.a5f3603e.js",
    "revision": "6d7de78c2f6646865a1787c56e6bd70a"
  },
  {
    "url": "assets/js/149.3f7d84ec.js",
    "revision": "dab7b74502a172aee044a4746b730e7f"
  },
  {
    "url": "assets/js/15.793824e6.js",
    "revision": "14288535453d548c4376a25c4a0d9e76"
  },
  {
    "url": "assets/js/150.8e8531d6.js",
    "revision": "34fe204cea17a35dba3ac9890c69ce60"
  },
  {
    "url": "assets/js/151.7d24929b.js",
    "revision": "7730ad7c8e86da2113285b93d3a317f1"
  },
  {
    "url": "assets/js/152.9e0420b9.js",
    "revision": "b864688b087189990d7f1e0a1828b8e2"
  },
  {
    "url": "assets/js/153.15ad92d1.js",
    "revision": "ad30e130f0834286bfb2b05762ed6e5d"
  },
  {
    "url": "assets/js/154.af2b42c5.js",
    "revision": "aa8c2a10f6d79a45ca08f23fc5e68cc3"
  },
  {
    "url": "assets/js/155.c380dc40.js",
    "revision": "e50747f01f61ffc4e2da77daf7f6e18f"
  },
  {
    "url": "assets/js/156.75893ffe.js",
    "revision": "1ec4fd71eb92fc8b8188545a01c56899"
  },
  {
    "url": "assets/js/157.f3041121.js",
    "revision": "5e58e4cc3a4b2fad36e1531b386b0f95"
  },
  {
    "url": "assets/js/158.b6f1155a.js",
    "revision": "6020cb9e6dfebc9754fd761433808bc2"
  },
  {
    "url": "assets/js/159.643a0bc7.js",
    "revision": "b999370502f88f31e697591988c26f33"
  },
  {
    "url": "assets/js/16.01c60035.js",
    "revision": "7b78551316f204faf1d42493cc84fa47"
  },
  {
    "url": "assets/js/160.ec2910aa.js",
    "revision": "9a4e3514c39d9e0274a3c5db4337343d"
  },
  {
    "url": "assets/js/161.79b3ac8e.js",
    "revision": "86fee72350c6a6bcb74a4a284d357893"
  },
  {
    "url": "assets/js/162.a1e71543.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.58cfa763.js",
    "revision": "dc512f4081a63caab9da893d6f20f80b"
  },
  {
    "url": "assets/js/164.825a8778.js",
    "revision": "fff8e491c7adf2ef23155d8b4fcc4395"
  },
  {
    "url": "assets/js/165.0fde4a85.js",
    "revision": "9b1b61cf576863d5df048128b4c3036a"
  },
  {
    "url": "assets/js/166.aa547ef9.js",
    "revision": "46b8f20e5619faa3be088aea777ea3fc"
  },
  {
    "url": "assets/js/167.c0d32a79.js",
    "revision": "05cf2d945550eb4ff359b9528f919d01"
  },
  {
    "url": "assets/js/168.d62a0d40.js",
    "revision": "d9838c7c48bca190444d4434426ba68c"
  },
  {
    "url": "assets/js/169.ad65b8b4.js",
    "revision": "125c5f3f24914091660ea4c62ec732a4"
  },
  {
    "url": "assets/js/17.450ef9b0.js",
    "revision": "cbaf3571d50b2b7bbf24245f17a52182"
  },
  {
    "url": "assets/js/170.f7babbb4.js",
    "revision": "200e9fe0c39713eae91aedb8307dc378"
  },
  {
    "url": "assets/js/171.cc21d426.js",
    "revision": "6786dfacf62ee7b1b8a9bb190282008c"
  },
  {
    "url": "assets/js/172.5a024006.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.204a98cf.js",
    "revision": "b223edfb73a2c009609026bc945da7c1"
  },
  {
    "url": "assets/js/174.f174a12b.js",
    "revision": "ca95514bff9e45706b2622419acef551"
  },
  {
    "url": "assets/js/175.ef2ec152.js",
    "revision": "1d86ab5f18b8e6529c2b9c13851bb9cf"
  },
  {
    "url": "assets/js/176.d69455c7.js",
    "revision": "9e3bd9c1cab60ab0473ecd4e6bd6568e"
  },
  {
    "url": "assets/js/177.b4c6d4a2.js",
    "revision": "fcff938b468af9c5978cd9d9177d6cf0"
  },
  {
    "url": "assets/js/178.3a21501c.js",
    "revision": "e280eecedd8095fa72a8b4bdcf21cc5a"
  },
  {
    "url": "assets/js/179.95a574ec.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.4f5fde73.js",
    "revision": "0eccec3ef1538b7528e1ecb8b27292cb"
  },
  {
    "url": "assets/js/180.3fd3838d.js",
    "revision": "d33684af27d5a7150e999390744416ce"
  },
  {
    "url": "assets/js/181.ecef05e1.js",
    "revision": "48ff1a09ded5d3da3722af205bba26d4"
  },
  {
    "url": "assets/js/182.466bf1eb.js",
    "revision": "5715cb9029082eccd2e0a74e64179bcf"
  },
  {
    "url": "assets/js/183.148ddd63.js",
    "revision": "591c12ead4ebc2738aaf022885e7ecb3"
  },
  {
    "url": "assets/js/184.fc3bcd2a.js",
    "revision": "5ef522c47d32333d202ccf1ab39f2f11"
  },
  {
    "url": "assets/js/185.e0de0f8a.js",
    "revision": "e7416c90f9612449bcce492bc2d579e1"
  },
  {
    "url": "assets/js/186.50283e01.js",
    "revision": "74fd0b95e5a102a6a5874969cc7898c5"
  },
  {
    "url": "assets/js/187.b7aac561.js",
    "revision": "4a0c048ac168cebc312f18c4a58256d5"
  },
  {
    "url": "assets/js/188.50f9fcb5.js",
    "revision": "c5a67763578a0f395672858e41675a51"
  },
  {
    "url": "assets/js/189.412d0438.js",
    "revision": "5eb2f0e24b4e2d05687785c2a014cc19"
  },
  {
    "url": "assets/js/19.a929294c.js",
    "revision": "58bbf7fb09459fe6e9bb4d9d0bbec303"
  },
  {
    "url": "assets/js/190.89180b1b.js",
    "revision": "565c4a03380028bf286e5a08b18a0744"
  },
  {
    "url": "assets/js/191.ee25b2ec.js",
    "revision": "61a3ec9ba32af68afcaa6d1d0126ed72"
  },
  {
    "url": "assets/js/192.8cf5721a.js",
    "revision": "112abd909bb81d50e66e34cb998c68f7"
  },
  {
    "url": "assets/js/20.ec24bdb4.js",
    "revision": "9956cb75960cd5ed70d23786e19bab9c"
  },
  {
    "url": "assets/js/21.86567ad0.js",
    "revision": "b683a7e73a40d07e6d0aa26631759a5a"
  },
  {
    "url": "assets/js/22.154a26e7.js",
    "revision": "51a359b2dd1bf5baf174abd66a1f3080"
  },
  {
    "url": "assets/js/23.848bee57.js",
    "revision": "e9a01ebb76a30933d806188a7f431370"
  },
  {
    "url": "assets/js/24.681846cb.js",
    "revision": "117955d709aa55afa735e4a32dc72f85"
  },
  {
    "url": "assets/js/25.6aa3ae35.js",
    "revision": "178fb821d940f3d7315342c7e2682066"
  },
  {
    "url": "assets/js/26.941e8f36.js",
    "revision": "0925be6373596beae14c364ff28f1664"
  },
  {
    "url": "assets/js/27.d4b89e2e.js",
    "revision": "db3a3b0ea538b0586bd92bbc92bab866"
  },
  {
    "url": "assets/js/28.ddd50712.js",
    "revision": "ae50637d05167be6ba83b31afe76bc0a"
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
    "url": "assets/js/31.788285c1.js",
    "revision": "021fa5cfe546646b7107364c4f713453"
  },
  {
    "url": "assets/js/32.1f2db302.js",
    "revision": "2dc385eaf132815afec8137831c83e4a"
  },
  {
    "url": "assets/js/33.8673b57e.js",
    "revision": "1f84951e9d2056325fcc8396eb78ffb9"
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
    "url": "assets/js/4.c8df931e.js",
    "revision": "19509759f40bbf3679e40bffb5a30055"
  },
  {
    "url": "assets/js/40.a860f82b.js",
    "revision": "2940d99fffa43b5156b9086f76dee368"
  },
  {
    "url": "assets/js/41.f004b18d.js",
    "revision": "c95495722849291b24ffffe3dc152888"
  },
  {
    "url": "assets/js/42.a5189b82.js",
    "revision": "9943a8e0b4e1bdbc4d746a9790f22571"
  },
  {
    "url": "assets/js/43.b54ddd22.js",
    "revision": "cfcfd1c41e71fa75d197e80b7b5d9830"
  },
  {
    "url": "assets/js/44.fd3f21e5.js",
    "revision": "d99559fad2b2048a0fc6352d6b5fb90d"
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
    "url": "assets/js/48.d4e2d724.js",
    "revision": "1be894afe5ef7f3f52fe298261397377"
  },
  {
    "url": "assets/js/49.052762cb.js",
    "revision": "0bb16d6c7f0559a3410a00a67f9a9386"
  },
  {
    "url": "assets/js/5.792aefb7.js",
    "revision": "7b1196e38f012a751319f8eb3126cb1b"
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
    "url": "assets/js/52.c769f74f.js",
    "revision": "1deec7d435cf0f9a095b8a693f87e02b"
  },
  {
    "url": "assets/js/53.9f3788aa.js",
    "revision": "720975861753f1fdd79eb18b89a5fb9c"
  },
  {
    "url": "assets/js/54.5168a581.js",
    "revision": "9600ae39faaf19cb68d628a32869bc38"
  },
  {
    "url": "assets/js/55.b89ca7be.js",
    "revision": "e8daae99a8948c42c0aab40d2bebb5b2"
  },
  {
    "url": "assets/js/56.81dfcc60.js",
    "revision": "3c9ec035d9ef9dd6a95049c86fadaca1"
  },
  {
    "url": "assets/js/57.a4a752ff.js",
    "revision": "0273b6605054336dd304214855404ce2"
  },
  {
    "url": "assets/js/58.8f7b6dbf.js",
    "revision": "4e1e69e3d381daae9e35fee8b2552580"
  },
  {
    "url": "assets/js/59.8e84fa86.js",
    "revision": "1976b06af3c667e3fcc5bba809715fb2"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.c533c298.js",
    "revision": "e9175f9d83b333863cf96084fa329a31"
  },
  {
    "url": "assets/js/61.e1446959.js",
    "revision": "07d9466ca091288d0bbaade232927a2d"
  },
  {
    "url": "assets/js/62.c5d03253.js",
    "revision": "31ac44085b46bbf97084ccf0a8b19ad2"
  },
  {
    "url": "assets/js/63.20fe33db.js",
    "revision": "0216600679147cfade340a47e6b1fbdb"
  },
  {
    "url": "assets/js/64.46386136.js",
    "revision": "cbe713b5d0edb19c42ebb80ef065f780"
  },
  {
    "url": "assets/js/65.29f5dfb1.js",
    "revision": "706717f9e218ccc15a6dc8172d7cc343"
  },
  {
    "url": "assets/js/66.61f29c37.js",
    "revision": "0b822f789e74f96c59e7fa160893882f"
  },
  {
    "url": "assets/js/67.72b9c863.js",
    "revision": "f603a218cefa7a9f2e5e26d2aa010633"
  },
  {
    "url": "assets/js/68.ec44c92c.js",
    "revision": "9b6e4e7072a7780bda98c3f97295ef04"
  },
  {
    "url": "assets/js/69.9013ab23.js",
    "revision": "e941647e0ffcb158ad54b3c337d6acbc"
  },
  {
    "url": "assets/js/7.359cdfa2.js",
    "revision": "d5013303bd86078f994b15e74907e77f"
  },
  {
    "url": "assets/js/70.08aee5a4.js",
    "revision": "ac543870c3b01e4e62f63939c57342c3"
  },
  {
    "url": "assets/js/71.654043be.js",
    "revision": "8c5bf2c15e9956be3371fd67148e82df"
  },
  {
    "url": "assets/js/72.8cae9011.js",
    "revision": "0e58c2f2e795640c130e40835b70b7d4"
  },
  {
    "url": "assets/js/73.686b7182.js",
    "revision": "add3e16ea7151581dc7692cc0b1498f0"
  },
  {
    "url": "assets/js/74.dfa25c63.js",
    "revision": "bf03111ff38b804bb82759acc56d64c6"
  },
  {
    "url": "assets/js/75.0f55e100.js",
    "revision": "40d9a06205be15b05ca7413c347fec28"
  },
  {
    "url": "assets/js/76.c905cd7a.js",
    "revision": "09a2c15ae3eafd7bf1d9295cf91f8cc0"
  },
  {
    "url": "assets/js/77.de532b7a.js",
    "revision": "45507c4217cc36346e5f16a127cd9afa"
  },
  {
    "url": "assets/js/78.7dfa3673.js",
    "revision": "41610fd55679b6f2a4408576ae1a8e37"
  },
  {
    "url": "assets/js/79.9ad31bf6.js",
    "revision": "1e90fc411846d22b5e89ceccceec2451"
  },
  {
    "url": "assets/js/8.49b39b40.js",
    "revision": "5be41fa0cb432cdc48a471bee774b784"
  },
  {
    "url": "assets/js/80.688d6b04.js",
    "revision": "3041226ff61d7406f49c64cad1308189"
  },
  {
    "url": "assets/js/81.ca7476ef.js",
    "revision": "e0e7071e961ad7412f94458d810de204"
  },
  {
    "url": "assets/js/82.cf4a8cf6.js",
    "revision": "5ccf23a25a937dc7e0c0b8fa3e2e61d1"
  },
  {
    "url": "assets/js/83.617002a1.js",
    "revision": "81ed2836f5119083b3564fc17b3045ea"
  },
  {
    "url": "assets/js/84.713e26cb.js",
    "revision": "d1390d703043b9d45b44c18c89b89f0c"
  },
  {
    "url": "assets/js/85.ae7d33f0.js",
    "revision": "68745ef58055a0c59e928d4be5519646"
  },
  {
    "url": "assets/js/86.df33d54e.js",
    "revision": "97ce3b48a38b00b6f2f4fdeacf59ba21"
  },
  {
    "url": "assets/js/87.1f9e86c4.js",
    "revision": "e6c2a3b1380377be956b6a0478ccc7b9"
  },
  {
    "url": "assets/js/88.4da9d5c2.js",
    "revision": "54c0799e6999396cba1f5a8078ec95a9"
  },
  {
    "url": "assets/js/89.926fe90b.js",
    "revision": "6426e2c5835c920f4a97f7ca46f56a42"
  },
  {
    "url": "assets/js/9.a6ec67f3.js",
    "revision": "dc21d3cc91f8802f808d511b31633df9"
  },
  {
    "url": "assets/js/90.f0af1d5d.js",
    "revision": "0fa5dcd1788e7257d148e38eeefbdf50"
  },
  {
    "url": "assets/js/91.a6a22a20.js",
    "revision": "7fb53ee54c17a032bd22346274173adf"
  },
  {
    "url": "assets/js/92.96faabbf.js",
    "revision": "ae6d32941089f182cd28f29cf3419c12"
  },
  {
    "url": "assets/js/93.4de85b5e.js",
    "revision": "a16c941e7a581d7acf9e81fd24e33ff0"
  },
  {
    "url": "assets/js/94.6b574084.js",
    "revision": "2068ecc733da86300b41fc039db1938c"
  },
  {
    "url": "assets/js/95.dc2b6816.js",
    "revision": "f454d7de383301cf971a02a092a99ea9"
  },
  {
    "url": "assets/js/96.b544a239.js",
    "revision": "cfe3c2b5dcc3fe574c9527d122e97382"
  },
  {
    "url": "assets/js/97.3ce90823.js",
    "revision": "3806c8bf722918ffef59cb099e6196d4"
  },
  {
    "url": "assets/js/98.0f374a8c.js",
    "revision": "8a77137312369828d4dd67145729d6fd"
  },
  {
    "url": "assets/js/99.21c7481d.js",
    "revision": "ef6a6a5f460fb3a985d3876037e491ca"
  },
  {
    "url": "assets/js/app.c8e84b08.js",
    "revision": "09e0738e61b5d888e48c3a2ef2c247b8"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "085f1439b9832985fe49d16e02c56f05"
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
    "revision": "2b30127441d5fc32bc040774af9e20bb"
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
