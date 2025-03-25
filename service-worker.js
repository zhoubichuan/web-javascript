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
    "revision": "18a0687359bba772ce07d1ffa3b8f04f"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "bf74c8202779e2c796209d45005d415d"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "aaec10ed15b0c02e66cf438f8b1ca08b"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "877988d9b4a13d27982379c3d7db51f3"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "d7cd85a240cbbf36db9a4723abd0bbd9"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "1caa00060d4aef3eeafeec8d25807d6a"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "11611123b1768b834f2684044b86aa99"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "c7a567564d3a7c829d468dc47bc2b171"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "17e6d995d410bbc9d8c8141b9804e898"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "4aae7e40fd3caf0d60948ed631c596d5"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "9fb12170d699ad67ad45a943740ada77"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "c960fcb89e1e4a6c07c137e017d43cb3"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "13c134037b7cb154354ed4bd40116f6d"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "80b14a627615fc5213b5622909bce3b4"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "9fd354c20a18130527610ac99a5f2b37"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "30a0b81986288a7a7ccf54491af74f4d"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "c84b2929ef364f02d8d1a8ac99d87c78"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "879dac591131fbb6d0ee4107f66a2932"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "152ef6b4f19ffb2f6e178329374c23c2"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "9425fded840beb71476da7b11b109654"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "51a1e102261123241d25a80fb03c77b1"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "41788391edb483707bf359d332e75565"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "5ab352a213103099a41064cce25820ab"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "656ba0833798be09f4b2a480f829a436"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "10ec7ba10397c05a6059c701e85fa446"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "507bddeb588e938a4ef017eeca05c437"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "a286833f9654e470a9e2778d985cb535"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "8605255753d877b9d9421f4ccacff0a3"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "f4c879c1628cc836a5fd2048ebb2a812"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "5c1c65c64e43a0be78b8ab9af108d3d6"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "2721ec6fd0252975e3c584e3aff9f774"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "2758a08d4554a54b0824bd2c1a8c9c0e"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "7f3d532f32a47cf90c5d6e6387a25eac"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "fc1fb4c0050db4bcefac300418b8ea1b"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "a4edfd5807cef9c9475d43527f56dfc0"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "42513c623202a4936459008cfb30eb23"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "1a391ceba2aa470898f3c588daa64110"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "34e8d61aa85bded15d4d1c7764584c9d"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "c37da3e18de39bcec1b4f2ca93970c9d"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "d2924ee9738443443cbe55c24190ddbb"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "123d6ee47ac1b96706e0775ef11b8df8"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "dcaf73c2e59e38ade2b7a493db8de88f"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "351858dd208da133eefac9ecdd11fc3a"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "54f12116aec8f6b11387be91a0146f2d"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "f2ed640545caf150385f0df4610559c1"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "c1e9728fdccc2080009cf98ab3a7c325"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "70f641262b99b689e482509886b9662a"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "883039980837089ef8205435e306a037"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "f2183fb909adafbcfad96bb32c476b2e"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "92f45ee8ec445e6846950527e6889f33"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "a2a2ee06f8ff41eff62e9fc1a5d5930f"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "6afa2c232ef254e1a805627d52478c8a"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "d30f440529806813bc2efead2b5cde03"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "e92e768d84ac01a36569fef58a45a1f6"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "589d54a9f2c8480087d2a2cc1d36b5fe"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "b6d1197498d5773e99cbad597827bbed"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "58fcbd8baa6aa6a074e0a12c30f01b17"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "ae3306a65e57d6b79a594a5a0617a8fa"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "deb6cf0973784068df60a6831ea19fc4"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "3af82b405d05d1020534b52436dce300"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "f88fa3e98ae8e784c6b89a5ba72e0a51"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "56d93cba1f3c6ff0c817febfe7f901a5"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "188ca918cce4ce443256043f80233d6d"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "1b2272401d475ea2166da97ddb6fe4c1"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "75f84703d39276ad72dff573dfc1f2fc"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "0b77df0061416c14bc59fc0a880af40f"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "4f1b3caf9c444146e7aa8e9543f5475a"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "bb58f7058bb0609451449c44aff1f019"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "5e4ba12b67f6ccec8b3c0f5706636a15"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "9343dae959ae2b1ee7d64149e788830a"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "83ab17558431f9b6b83f1b0ebd995d0e"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "48320f9f68f1f03e62fd063e2994a65c"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "5930e749a675f53c6e5dd120cfdefc1d"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "ce892a8f38d120d7a74e9d21f42ff3ca"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "9e5e02738d1296f5a5f5ce8e8e1ff503"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "cdf5273e37a5253c111df9c961c74a42"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "eb5674200f84d3fc606330c8beec286c"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "3963d82884f72ae5e5baa78af7c272be"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "6e2c9c2612486bc607edc8f1aca4e9e3"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "eb3aeb310753302fdef73da84df1c8f2"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "954817864b1565a058b8b88cfa3f84c1"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "795a13aa2a0ed99773334a02dcf5730c"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "de2d5ad33997224522372d8e2ad9b731"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "7758d5067ea52f7f44a3914362e694b3"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "d0921180fbd723a8ba10e7cc6c2b84a6"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "d10f6955f1106406b466493369195502"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "8a47c4c992b0b5759787b19b759f3d0d"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "547cbb36e04b68d3a9dd8fb768a0e6e2"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "e3377986692e01f7fb6423921fa438d8"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "6b91daf0bfbd6cc53ab35985d8c358e0"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "f670c5fd52355e76b953b33ed594cfa8"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "26921d52dfdddf71dc9c14b7875fdb65"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "013c4fd91956b229db27bb597c4ada06"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "504168f1ea25b92c32cef416bc5cdac7"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "4f1246585f960107692f9925745fe6d1"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "af5b2129b501dc0fd87f565cba992686"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "b2f3fe982a0f823b762c9b1feed54766"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "41ab442a414c099c1e504d09712f7841"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "c3bad15fa39a32c4504fc522ed9a38be"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "c29ff3730adcb17a4981a4f89a7d64fa"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "1475fc3f316e527ac4349dfc990c1a44"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "ab3111127cdbd2be3877fd250bc62527"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "dce3ac19edc3964e8da5f091dd51dded"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "73dec1d9e918dc05a646970d28767da8"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "f476455db8a44bd9c5361d9739739038"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "91a283a242a666dc68fb37e618efa09d"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "da3b554a04aee52dc293ab68e1ccf583"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "3cf9e446ba7cee8e1cf268ada26eeef8"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "77c7d4e8091aac1e13e803b8defa2193"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "4829405cb55b8b5da2a926a57a8a389d"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "c8b0f8ef1d49a05e0f9f392059decf50"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "39e62d6f4b15846c7b127353e784ae5f"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "73a3c27e814e64ab1cfa8491ad4d34e0"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "31d2f5e050e39ec9b40b5f076b902b47"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "05cdbc58d51b2021e693fd371294d3a8"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "7df2c59b74a99824453ab9d397b1631f"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "e90ee7dee8539634f04d6db90ea26969"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "346016d15e56ccc9ef67ce5617ace27c"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "240bda50e50f41e9a751e6c7d00e1156"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "500cba786423c3967aba1e1c4bf07789"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "88e0daaa8f5cb0bd6509bee9254ffd3a"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "aace74fd65b8ff101384130a05a9a79a"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "135769244e413479ac5d48ad0a8f93ed"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "f6cad21c74d48b39abea88c5bf060d61"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "c2291757e0f2eed1aca73b2c7272a745"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "5c9e11f75430292bcb4705cf2b548ca8"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "085f19096d5afdb4c8f4c9da2ef7d35f"
  },
  {
    "url": "404.html",
    "revision": "e5773d98aca651a63f9850f08af57f46"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "294ec8287f71b13643abb55cd34a9b41"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "a50f00295fe583bf7e373309d7dd87cf"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "c41cc34636db420a5048c17f976b98cd"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "934a99796be13e43bc18a87d36bcb5e0"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "c513170405d9ece0a5d8196ebbfcfe43"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "1949406e1ad15a8825b1816523e3c627"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "471c666fb314f8c31f968e4e78f919e1"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "bfac16773fe95500e5c6ed235d4554d8"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "e7df23ed9e519d8d5b64e4ba537822ed"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "5d76d1b5b53cd9497756b4233f4efec6"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "0cfd7de2624a5d32f3a0dca4e0ffad53"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "c03bc10a049361a8212bf3f75b38d120"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "6155fcd47108925119a9920a9af70486"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "8761097065eb43a2b87c75a563d37fb4"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "31b95c56aa154d3e6dc746e0544253de"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "1b092299335bd070da6b058ec7eefaa3"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "63ce333d98854c0e62bd36b91ad63929"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "8e5848a456f9d38fd09b73d017dc43ff"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "b8ccb6537174cfda0325f8ee6ab02ab3"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "768cad49fce82a0e915901e0725ec3f6"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "2596783839fd2be6c939eb9034d403c3"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "168b784c05fb2db764d8de40285103c2"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "b5f15168d2698fda302e9fef0ede9bce"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "5588cb1c92fe41d0aee34d626e1a33a8"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "293395a3d2eda11402f8a14771266490"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "c3fb18f7967c73cf3d7d8da956730be6"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "19d6fbfd6b13ef1559af62a27b7d863d"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "c9e45aee4a86d19b1664abcb5cf45d1d"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "8d58c137b0416bd10bc27367234868cb"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "b2a25105cdbd16abd7bb493789f00a9c"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "c45dee338875d0026db4d7893e29410b"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "9c419cb2d85366b014b19cf50cd20c2f"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "fc37a986c45318e0e01a13f00c9cb574"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "f833f9f8036b9ef4e1b9f7b944586ae4"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "8e591848ec3200c2db411c324f1a69a6"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "b0825f74b1130614ccda886ea846e0a4"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "8a4dd133f491db38a7a1a868a2e3ec0a"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "54f7bf0b248b8de02aa8374d4a254d9f"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "2226f33b36baa9380dc19ecafad29e2f"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "ced6f97093914e455b72d70b272121e0"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "8b098a88c39df7ff6f5e03769127ed5e"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "745012631781a99b8c7a1bcbc180795a"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "c13a028bf62da017a41cfe5414e1168f"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "a46598e8ce585aafb5995f84f7b5add6"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "d3e17fe97c9c4267e386d55f9cfed37f"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "1c1da095172de1c2fbaae005b5c68a6c"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "45667e3d1d4c73c04f9ed00a3a1184f5"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "c742be93944c346d4332b8c787db1d37"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "706563ac1d309e316a4d24d5561f1924"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "3d5f6739471b9403b4913b40c154a071"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "47244d8126f92fd34a1eca3dcfe11e8e"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "40d5c7b4da09ceb0c8dc279594095ec6"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "12157d2947a2698186aed5c63a96498e"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "469e8fcd0d0dbab43c55de64ed1a76d2"
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
    "url": "assets/js/116.12a8662a.js",
    "revision": "df55c3937c77f44bc36b899419c31465"
  },
  {
    "url": "assets/js/117.3f9a7b14.js",
    "revision": "72c144473071d79622d4f83b73419dfb"
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
    "url": "assets/js/123.be6c0ee1.js",
    "revision": "ff715304c2ee26e6db5035c58552c053"
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
    "url": "assets/js/126.39ce8fea.js",
    "revision": "074ee2bdf8366a3dc615ad37516726d6"
  },
  {
    "url": "assets/js/127.6e8be0c1.js",
    "revision": "b71d008071f2ebf3ac797c8c38eac124"
  },
  {
    "url": "assets/js/128.3bf11042.js",
    "revision": "0d0cb3c3a8fa13a010bb58781545ac5c"
  },
  {
    "url": "assets/js/129.976f03cd.js",
    "revision": "c866339289e919eee26485c4a8807611"
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
    "url": "assets/js/132.886aa18a.js",
    "revision": "743b25fcad3e8064ecd1254b0361a487"
  },
  {
    "url": "assets/js/133.07a19088.js",
    "revision": "00c52abed38967ea454eaf431ba1bf86"
  },
  {
    "url": "assets/js/134.d743d580.js",
    "revision": "180e1c7e52dba92f62b9254725eedc69"
  },
  {
    "url": "assets/js/135.b96a2481.js",
    "revision": "685d83f76abce98a37570bcada024e7f"
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
    "url": "assets/js/138.853f5054.js",
    "revision": "6fd253af81286a2f6758d7fae55841ad"
  },
  {
    "url": "assets/js/139.f4add6f5.js",
    "revision": "69a7efef82f42195e98bdd275a062804"
  },
  {
    "url": "assets/js/14.8520b2b8.js",
    "revision": "5352a2aa79771a8a508a58a96441ca82"
  },
  {
    "url": "assets/js/140.1ab39de5.js",
    "revision": "7f1d9b705acd6bec0cd8cb81d2129514"
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
    "url": "assets/js/144.07e4bf96.js",
    "revision": "f41585c9684bc746e7083452326a2264"
  },
  {
    "url": "assets/js/145.bc3a9fbf.js",
    "revision": "b33d608769156b9b46f7fc39e6e5686f"
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
    "url": "assets/js/149.8fe2a648.js",
    "revision": "859ade37482181d3ebed536d54b64d9c"
  },
  {
    "url": "assets/js/15.ec87e80a.js",
    "revision": "5fbd095255eca9c4b4fb1353ee31dd1e"
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
    "url": "assets/js/152.6e59d109.js",
    "revision": "3b6a43161d5109505124cb464cb4c3f5"
  },
  {
    "url": "assets/js/153.64abd3d4.js",
    "revision": "bc5c51b68812569e5bee60f0af68fd44"
  },
  {
    "url": "assets/js/154.228c4d63.js",
    "revision": "4f462d190263098fa434f8aee8aa9441"
  },
  {
    "url": "assets/js/155.1f960055.js",
    "revision": "f3aab4aa798a792e577c53b37c319f9c"
  },
  {
    "url": "assets/js/156.06de34eb.js",
    "revision": "36b3e42ac28c676e910122ff5afa8e21"
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
    "url": "assets/js/159.34582ae9.js",
    "revision": "016ea6ab512993cd81ef31abd1ef5583"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.774b76db.js",
    "revision": "8be78fef3646e3954458eb7d89d464b0"
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
    "url": "assets/js/167.821f9919.js",
    "revision": "b97496dac1f2e3fca0626eea01b720dd"
  },
  {
    "url": "assets/js/168.6d69c1e6.js",
    "revision": "ed72fe85656ee2c0062f7257854eaba3"
  },
  {
    "url": "assets/js/169.140deeb7.js",
    "revision": "125c5f3f24914091660ea4c62ec732a4"
  },
  {
    "url": "assets/js/17.d22eeb91.js",
    "revision": "f16c0e3b9c439cc3b75915915618f664"
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
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.ec907150.js",
    "revision": "0e234b08fcf4e346955618dc62db0195"
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
    "url": "assets/js/178.09837b73.js",
    "revision": "e280eecedd8095fa72a8b4bdcf21cc5a"
  },
  {
    "url": "assets/js/179.c54d8f06.js",
    "revision": "d465444a2e705c3e4965310f12d368f5"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.e6f30fba.js",
    "revision": "95bb27996aaa99b7fa10871c453153c4"
  },
  {
    "url": "assets/js/181.850e5b6f.js",
    "revision": "bc5340938ac1495e0709703d2eeb4a89"
  },
  {
    "url": "assets/js/182.3c548b17.js",
    "revision": "f48bb48aa403daac7f3893e2cb6e5097"
  },
  {
    "url": "assets/js/183.6f4e58f0.js",
    "revision": "76276cf391e64da8685479764294ed80"
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
    "url": "assets/js/19.668a5c5a.js",
    "revision": "ba7122431da6b9f30ae38612def6c6eb"
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
    "url": "assets/js/20.d1f3bcc2.js",
    "revision": "610cd4ccbe087e1800368ec891404943"
  },
  {
    "url": "assets/js/21.54ab1ae8.js",
    "revision": "11f7b78cbda39dd8f9e3f510036c4ea0"
  },
  {
    "url": "assets/js/22.63be2330.js",
    "revision": "8a755a83ca47abfd8b23a973a03e3440"
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
    "url": "assets/js/26.d5a4d563.js",
    "revision": "d0f6129fb7d80b33e03e6500e35bcae2"
  },
  {
    "url": "assets/js/27.50e2045b.js",
    "revision": "e2ccbf0996baf02389fa6025a1b04d59"
  },
  {
    "url": "assets/js/28.cfd70032.js",
    "revision": "b3b6b2056548ba59e704d6992d6e9ee4"
  },
  {
    "url": "assets/js/29.b34c4f73.js",
    "revision": "a71c91bfa3cd6ee20676332a7dcecc6b"
  },
  {
    "url": "assets/js/3.e9ec0dc9.js",
    "revision": "f2530fa3f331a4ded0ed022c75c73165"
  },
  {
    "url": "assets/js/30.70755bf4.js",
    "revision": "d6949bef3dbfee1437b1ff6775edac9b"
  },
  {
    "url": "assets/js/31.2516624b.js",
    "revision": "eb916be6ae7e93207ff6c04698037585"
  },
  {
    "url": "assets/js/32.071c4013.js",
    "revision": "e08b138adc0d6866be05a21cb0003c6f"
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
    "url": "assets/js/35.cd555899.js",
    "revision": "0b2cae1c2a260670692d0f597235ee3f"
  },
  {
    "url": "assets/js/36.379d441c.js",
    "revision": "3ff95a6a773fa6bf802b0ba65ed911e8"
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
    "url": "assets/js/43.029a9e7a.js",
    "revision": "5e8b1148525660e59171eccb0f03b9d0"
  },
  {
    "url": "assets/js/44.95bfa1f4.js",
    "revision": "ba1a31b68489a56e871b82654892c707"
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
    "url": "assets/js/47.54ee05a9.js",
    "revision": "237275a4bc44a69913e99c9bdb4d2743"
  },
  {
    "url": "assets/js/48.9ea890e8.js",
    "revision": "702b7f7045d35080036b907d0f9e67cb"
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
    "url": "assets/js/50.a04b4ca4.js",
    "revision": "8d00e6670bdaea7aa7021b348082e6f6"
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
    "url": "assets/js/53.df59d159.js",
    "revision": "bdf3886ec89b6cacead7d258992ea7fa"
  },
  {
    "url": "assets/js/54.f29f9806.js",
    "revision": "9fd2c667c3ae86bc4ed2eb776790acad"
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
    "url": "assets/js/57.78d9d3f8.js",
    "revision": "fd71a4b376bf0052b6c090fd526d32db"
  },
  {
    "url": "assets/js/58.f0d85d4b.js",
    "revision": "d00a1b41131a862526fa8adcb8ed0869"
  },
  {
    "url": "assets/js/59.aac7b45d.js",
    "revision": "7a2bd76766ef6b7a9bf16e44b6d609f7"
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
    "url": "assets/js/63.b216b5f0.js",
    "revision": "4568043e042b73b0a13d49181703b2cd"
  },
  {
    "url": "assets/js/64.f6a8014f.js",
    "revision": "5c72c94717cbd55aa79d3cdb85bf47f3"
  },
  {
    "url": "assets/js/65.6907eb21.js",
    "revision": "a3018cc884add003fe8d15fc50c609fe"
  },
  {
    "url": "assets/js/66.94c629a1.js",
    "revision": "379457ed9f50682c80eb26ceadfc02cc"
  },
  {
    "url": "assets/js/67.3adef651.js",
    "revision": "14c53a9c505bb61a1c8c9e4e2ba83a1e"
  },
  {
    "url": "assets/js/68.cb22c82f.js",
    "revision": "0344de844853bec8e0decb115885a9ca"
  },
  {
    "url": "assets/js/69.3031386b.js",
    "revision": "c03159ca716c9929c5c0e45e8a87958c"
  },
  {
    "url": "assets/js/7.afa77f40.js",
    "revision": "010d0121ed4ae2a2cec9654d112fbb87"
  },
  {
    "url": "assets/js/70.b1c1c832.js",
    "revision": "b3bf62426292003f734ade19fae823df"
  },
  {
    "url": "assets/js/71.459d4b4c.js",
    "revision": "bdd2a565f2a0138c21c354842b0a8c9e"
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
    "url": "assets/js/74.0fa6a06d.js",
    "revision": "c4fb585e6817729cda505d986b29c39b"
  },
  {
    "url": "assets/js/75.6106f1d3.js",
    "revision": "0a0fdecb8544c829983760ed1421ad13"
  },
  {
    "url": "assets/js/76.5ab55193.js",
    "revision": "d4bd852ede47f7a942a12e2d04ac22d2"
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
    "url": "assets/js/79.d822284a.js",
    "revision": "b18a0c191afd61dbf39499ae63125f1b"
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
    "url": "assets/js/91.658032da.js",
    "revision": "75c3e9cb5d8503b2f4c17c4647f4d905"
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
    "url": "assets/js/95.8fe4d764.js",
    "revision": "669bcba8306ba980cbec7d6dcb1df84b"
  },
  {
    "url": "assets/js/96.c6e7159c.js",
    "revision": "0342b56e27cc7a55e8ae967cf16e5354"
  },
  {
    "url": "assets/js/97.568fad9d.js",
    "revision": "fa7364d94275a29e6d165c20afe55a9a"
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
    "url": "assets/js/app.288ef62a.js",
    "revision": "9623f6c61def42dabc3cdd98aaa937cf"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "a214e668db1778bb4242a29612966682"
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
    "revision": "23f38a317244ddf5d139ccb7ffecc767"
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
