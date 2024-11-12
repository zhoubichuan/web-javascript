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
    "revision": "d08a19eaa362d93ab5ed495f9c92cdf1"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "e6db276854b4e327f4d26db6c9043694"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "2803d04280a535140756859a56a2cded"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "0684a24ffb7ef2631d3f6354b55cd4bb"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "85faab90f83ea27f356974e2d3571bf3"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "efdf558be611f80286d9b8813c5b3bdd"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "d8187a46e756129233321810a2370520"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "f482b9309de8fda463f5334e3cb3611e"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "0037174b2f48a1604b87f24523c3ec7e"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "04aa430c105bb52cd7f5ee61a106a630"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "cbdfb868edf4f9e602f3bfda8e315d1c"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "34dd1258412dd9557c70e30318c590f6"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "cc42dbda89dfe23785d19b56ed85a176"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "26a400a9eee41166ecc72ff274ff3142"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "e2f601ff2456ea51a04ac501d634da50"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "ebb0bea29cca803315dd620088851bc1"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "485c6c3d2ad5bc83b81dac8b7db168f1"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "2f8b2e1e78a09400f620f56bc550eae7"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "daf611595a257d63115e909a4cca6d74"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "17a3782c8fb04cc7c2b88db01cf9113e"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "07b3884fdabda804b0371ab5d41a4ace"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "6308e457519ff3c2cfc9ef5b6b6dbd9d"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "faad48948258d960edef0746e4b4939e"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "c1b2c9a797e9082976712c81f6770e46"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "8a03e20d68745da032dcc827dd76e4cf"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "2d226c74f1b6b5c7be3c006ad66f5919"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "4ee7b68d1a598989ab1635729b733871"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "11e628313ba297712d798b3aa7e9d419"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "a1376847128f21e37a86e8bcc9289e24"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "22dd92c54d547b575da98c9df34cf098"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "208703e3208ba330491168d6c7c13a60"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "d358876fe39575713d6ef27ca74b2834"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "7e3d995cd700401da15a8a2868190531"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "4521476547a18ebbdae608434525feab"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "f7ccf7a61a7e5cdae98abc555c7ca4ec"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "61ee4a55903b62597f64521556d7038a"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "f3d8b1258081756fc2c636fc7e22e66e"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "5506f119e5ee00b83125edf0bfaf126c"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "77c5e8c7fd1ea276fc6253cc1a5f28fc"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "74b23db91470d5bd07c91c9579015845"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "fb91ff45cd20025833945bf4b872457d"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "fc64c760d3b8be99a689b7f92f7fa670"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "fb76ff5ae4cb5066a95ef32d8f652ddd"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "8c43dcb54010ae5af69a8b4d43e8019e"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "5e8a64553aece0be37659f95905b2f15"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "57fb522cf1d91bd91ab52b22decb6f7e"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "ac3d7a2a025a00bae0862b3b1f0ff82a"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "0c5d21b64ae9968a607ad7ea9b5f7603"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "b33b257079160abac723c43f21c1c57a"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "a2e91ae15aa46a5f3ff06919f5d733ef"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "e26e4f89366b660eb7d02dc1cb4ad52f"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "83c0cb8690d65e38b5f5d167eab196cc"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "8d244cc37a85b9bb19b0dcc9b0e1d79f"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "bd887b08d9733a9aa4f2f3ce75f3e686"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "4889a546766c4663886c398080c46a6d"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "570183e4c0c2478242572cf8e8e5115b"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "fa133854cb80ef8167c145e109f45b1c"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "16d0a3abc278d3d10ec01b719560c14c"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "3ea12b2b0b1cf46510a968577b0ad223"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "c8544af2e2dc3ad8d3aebbb5e4f6ebc0"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "ff1051441a24600a1737952508ab00a0"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "e0ca2323e0c8a5c68f9e73c23cc0d52a"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "fcb86ef51c8e5c1bd4482ee6ffede605"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "63d6d057ee10f3c9e983aec7d88721f1"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "0b793aec60ce0542ed281691f2fad423"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "ea5c6e40c4e5276e278be1edd232c0de"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "473afa3926d9a67e568cda56c256463c"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "617641dc87ad6eef5bccac5d131dab30"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "28ae87a51fae862625519f36466e59b1"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "bd300566885e40f6589329b3227f79af"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "b55b5538c0aa6edbeba22cd43e3a4145"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "8488b664d2534c1ced6935abb5b9975c"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "ec133fd6085d91ec992fce010b77d140"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "9d97caf90f7c2db6ea291975594c3a59"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "e68d984fdd2fea7bc5e88ff42d58f3cc"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "e23f5893b710500a60c9a013af2b8cec"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "c4ed0013543d30f43a4871383aa032dd"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "ea0e8514af17c8dcc7b571b3e6cda92d"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "78f05a11bd967ae816730aeb8f5120d8"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "5b280662020fac971e590c142872ebb8"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "4063b8e196cc4a2242bc81a97bcaa024"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "4845248f5c47d591c3f8ceb86d9013f2"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "636b3f2c2c7804c90412f9cbfa77976f"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "d50fb0d009b5356a2c37737895df6a6e"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "74762e6059d311eb68c054c9e060fdc9"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "e18a71a214156abbae43f2269152ce9d"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "a5e69c67cf1b30e18bbc327bc8338f40"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "45abe1077119dc0af8487230415a35fb"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "4001e6b46f1ef61f0c3773d133e4ea1c"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "c5974446bff85976450ef64b3e40134b"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "0be67d4d03a4632a2dca0aa8fa22ca24"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "67b1fb9dd5e0a42f27ca55719e1c60e0"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "837a46dcbe03cf8a03a8c3455e860993"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "371af4735b1805c172b6b30bc9e3d089"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "07910c0b028e052c0f86e4ad914f9b8c"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "099b7e1e9f8f833ee4cfe5dddf78796b"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "75b55e640204929fae16e6e5a7b75df1"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "60364626ee2963ecb1b539a2b8234391"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "3be2228882beace2714c39fb73a58a28"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "c007cb4d81fb7859492056d600fd3d01"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "9810c75d8ebc16ecf584a7ebc50e4407"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "ff958cefa7f988961bd7aedcdb4acc5f"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "a04f60d5ff2eaf7765c086b55da8500c"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "747ea3b3c5f283c494e7caaf5e37da9b"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "1b465f8045e0d5dbc03debb6a7054578"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "08db6c53a7312a19d79c038d5685cfcc"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "8400e31d89a39f1a124a5f8d85d5223b"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "dfe90645216ae273113c15ebb4a7804f"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "4254ea20f977de276342bbe75b9cb3de"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "0f5c8f5b315e59b7c2b50399d8e263c6"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "eb473c0fb3c3aa9841db3e8c52e477e1"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "c4aa586c876c693cffe199df772e122c"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "eb22a27ab01b280cfa8e0f79418f8779"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "cae1a977832aa42b4c37bdd971e0a529"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "1f91b1a662e25f417dfb3cf8ca573945"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "af56445d4f35c0fa0ce880ccaaee6d11"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "916b6fa1fd70ad108f4672f3ad661c18"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "6ffee0a130576509f246c4469cfa435d"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "e2baaa5dd7cd117f24f8cf6cc46f2c6e"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "e10ba49d4588f94e00e7e2a217aa813f"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "ebe7a50b01542ba2f9bc1cc1197f08bd"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "d069a94b58efd6a68bc8752b7189f075"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "fd707dcf7484d172c5f2c3f180d1f9bc"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "c1dcb2c5a47ce4b87a69a04a2a33faac"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "a0a1e019e9ddf860c4748437c4475af0"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "3e5e9c80b1ea6bf6c60b83d2b2584d6b"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "e6598b50213d049f59caad0cc1ce34fc"
  },
  {
    "url": "404.html",
    "revision": "8d3c9b028efc834281af85a4a119fb16"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "727419e3c27a7974e6f8e0d1e3163283"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "2229f273e2b25670ca53413b9b154fe0"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "bd258677b65b577251235ce8b383d800"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "ad97c1ac29f09f24a1e721fae0d3aa87"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "daf33d56ec3c4340a7330bda3902a922"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "a2b7cd73af20a992a755878d340aec74"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "d88cb5606486a968c0e317e130637258"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "30fb4627024e0788edfe7cf02db73fe2"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "bdaa7c8d181ada5eb9441aa3a6a784d8"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "d5bbf9d48eff62e292281fdb7ec98ce1"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "c886db379ecb31078aab216d462614ea"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "01ba7c94d4e898e766458204f23f5406"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "b7fa6fa8aebf4477e1fef617df5a08da"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "79759b66b88ee00f4a352df2ae36646d"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "10cb0ec8f66a6aefd3026a09fa432071"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "bc6039a595197b4798ca4eb0cfe2ac42"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "39f35af94e2b2eb3d198b1006c9b15ad"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "3bf21d03c10cf95a80864e1a3ebe2b8f"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "dd78f380bbf9575d1c4f4ee182be53d7"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "6f58cf6d164b26e1327c28fefce26dd6"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "4b4b0639552cfa849a6c5ca782b49064"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "e3dd9a58038d3c26e631bdcfd335f5e1"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "d0f3a0c3d9a8fa23824c7cf400036fd6"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "43b2b9fda6f8aa5d54e3e4de91324457"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "a8cf2be85efa186125977b419f65e0a1"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "bce626ab30b5bb92d718f6a47e730539"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "70134f431217f2ed75a3bf04be994f7c"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "a0bec64011d5c3547830cdaecc6bdf05"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "aa4aefb0206642784559ae6c4ad79dbc"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "2acfaebee2c09fbda0a53218ac10245c"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "aa915c078dc8fc9f5eb1770b0ca9d13c"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "3906a5f4fa904463dba9dce3bbd43319"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "deb42269ccd5a255a7f8c9751893f7e5"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "980de261c266e657753f85290403902f"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "d48e3a50776389508328048e7f6a1544"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "0a08489b8b6c5e2e3f677ea476e2b436"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "eaa0e7c54049303c5edf4ab2a5ec284f"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "9155b2cdf677a641af2354a9db2b6e97"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "f780e2016764b257cd6b0bc8e44f62de"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "e23bf1133fd4167aa2bf1f63fc7af88b"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "380291a1e3608c4ba415d1e5268d1799"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "6adafd8173d4ef759bf2ddada53a4996"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "02852bb87234297a949b2734d4e6977f"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "f62c6847ca95b01e7d3da0d4eba8ebaf"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "69b570ee87b8e4ba9a021fa50867427b"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "a2ba1c48876d0539b809c86487011afe"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "23f9f26c9ed6c38770fbb9ce45c39bf0"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "b3d128c21322fbf3b66315454d0a3f99"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "d8e5c93db935740551037ebbcb6a1eae"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "21cd79467a58ab869db1d622163bff3f"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "cc775ef83df95fc1b4e23bebce46946e"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "820361957e3a01054e0c851074192f48"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "3ba348d175929fc05faf32d3f8b07501"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "e091d98d2e86cdcaba7583546f421d3d"
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
    "url": "assets/js/117.3b4d20ac.js",
    "revision": "02d8ac57cef9b2c44da8c307325327e8"
  },
  {
    "url": "assets/js/118.3589e8da.js",
    "revision": "c6bb92d839068cd7be2e9f3c2b295498"
  },
  {
    "url": "assets/js/119.765f89eb.js",
    "revision": "6586878f8cd392d93fd994def6fa40c8"
  },
  {
    "url": "assets/js/12.146b2fd9.js",
    "revision": "98a08724c19b8f62143b1958400ab3a9"
  },
  {
    "url": "assets/js/120.2b0d5cd6.js",
    "revision": "d85a5d2e27eedf5509ab83936bc1fd34"
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
    "url": "assets/js/123.be6c0ee1.js",
    "revision": "ff715304c2ee26e6db5035c58552c053"
  },
  {
    "url": "assets/js/124.b7cc4b47.js",
    "revision": "e52f234d5d47ac6b3f5e1d3f02beb198"
  },
  {
    "url": "assets/js/125.071e8945.js",
    "revision": "3f6356de7f80a4b63c048c987ff889ab"
  },
  {
    "url": "assets/js/126.39ce8fea.js",
    "revision": "074ee2bdf8366a3dc615ad37516726d6"
  },
  {
    "url": "assets/js/127.89996c63.js",
    "revision": "6239e7325230b14f174b918040efc40d"
  },
  {
    "url": "assets/js/128.49787d90.js",
    "revision": "e62882b030eb1e59756987cffcf6815e"
  },
  {
    "url": "assets/js/129.d1ade0c1.js",
    "revision": "d2e48120289760f6a3c3804c2e170524"
  },
  {
    "url": "assets/js/13.0b1396ed.js",
    "revision": "4198bfbcbe8c676fe84698e695217dd0"
  },
  {
    "url": "assets/js/130.b5cf38ab.js",
    "revision": "0de914d8973ccc20b66a740b06baf307"
  },
  {
    "url": "assets/js/131.4e404237.js",
    "revision": "c33638ebdaf306e2ea9e0b61590c718b"
  },
  {
    "url": "assets/js/132.1fcae530.js",
    "revision": "b11d9e73476d11eab518ecf76065a357"
  },
  {
    "url": "assets/js/133.c00f6dde.js",
    "revision": "2af6d5e087782ac4bcdb2177d364045d"
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
    "url": "assets/js/137.935565f7.js",
    "revision": "ac1d7bbab4cc8ab006c3640d996b1de5"
  },
  {
    "url": "assets/js/138.0f971e0f.js",
    "revision": "1b0dab788fd1e1ea1cb4b63ae9fa5978"
  },
  {
    "url": "assets/js/139.f78782bf.js",
    "revision": "255e8509fba14d8003eedd2d2313ce8c"
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
    "url": "assets/js/141.cad52bea.js",
    "revision": "10942e3d4dd74cf648f93dfa68624af8"
  },
  {
    "url": "assets/js/142.1dda2adf.js",
    "revision": "84b0e4e551ff95ee2dfdd47ec601ffbf"
  },
  {
    "url": "assets/js/143.3584f127.js",
    "revision": "0e698407e4f603c1eaf2603e63f2eccd"
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
    "url": "assets/js/146.0649a7a0.js",
    "revision": "ca8311ac1ff69a42df1599eaabf74137"
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
    "url": "assets/js/149.69131aab.js",
    "revision": "a5cca1a71872eefa622dcd3704f78007"
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
    "url": "assets/js/151.d65dda95.js",
    "revision": "7fa99885762da6f4a822b5ed384df533"
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
    "url": "assets/js/154.730f07f4.js",
    "revision": "a30f1f14c07d61b6073e3e0f5f5d1ddf"
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
    "url": "assets/js/157.c0c72142.js",
    "revision": "767fe834bc929c08ec223ddf9db2ef0d"
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
    "url": "assets/js/164.a866e2ea.js",
    "revision": "353e20c93ebd7ef84f935ff14c9239bf"
  },
  {
    "url": "assets/js/165.17cfa786.js",
    "revision": "85b6400310e246f225783a210fcaceba"
  },
  {
    "url": "assets/js/166.1fee10bd.js",
    "revision": "42763e29dee84ce20123f0fb95740c1b"
  },
  {
    "url": "assets/js/167.468b3633.js",
    "revision": "2c81599b2b9a60deb110fef303098131"
  },
  {
    "url": "assets/js/168.6d69c1e6.js",
    "revision": "ed72fe85656ee2c0062f7257854eaba3"
  },
  {
    "url": "assets/js/169.85943dce.js",
    "revision": "f82687f1f8f5ae0700855813c523433c"
  },
  {
    "url": "assets/js/17.d22eeb91.js",
    "revision": "f16c0e3b9c439cc3b75915915618f664"
  },
  {
    "url": "assets/js/170.2a19c244.js",
    "revision": "25d22f460faf9923d90560cf3aa54066"
  },
  {
    "url": "assets/js/171.4588abd5.js",
    "revision": "b78fc63f548ddf2840cd9e99c476ec7d"
  },
  {
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
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
    "url": "assets/js/175.f41ce05f.js",
    "revision": "742f936b35d2d18b58b73144dafe9824"
  },
  {
    "url": "assets/js/176.9246d169.js",
    "revision": "617cfc22fce3886ef3359e3810c24509"
  },
  {
    "url": "assets/js/177.bf39f4ef.js",
    "revision": "fcff938b468af9c5978cd9d9177d6cf0"
  },
  {
    "url": "assets/js/178.9c632b21.js",
    "revision": "523406c80fb5f87e23d08ef7137b5d1a"
  },
  {
    "url": "assets/js/179.31aa0b76.js",
    "revision": "e31657cff23953e54a88e4cc0ffa49d2"
  },
  {
    "url": "assets/js/18.a9e6d8dd.js",
    "revision": "e4ddb260d19b298a477c697c034b438c"
  },
  {
    "url": "assets/js/180.57a96b87.js",
    "revision": "d33684af27d5a7150e999390744416ce"
  },
  {
    "url": "assets/js/181.5a2f47dd.js",
    "revision": "48ff1a09ded5d3da3722af205bba26d4"
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
    "url": "assets/js/184.5470088a.js",
    "revision": "68ccccb306cef7db6d2b91b28eb32451"
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
    "url": "assets/js/188.c280942d.js",
    "revision": "025fd6ee6d09c8ed00a3ad5af3366bdc"
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
    "url": "assets/js/20.050e4b7e.js",
    "revision": "fb5cd6c8680ced3f355c49fc053255d1"
  },
  {
    "url": "assets/js/21.95164142.js",
    "revision": "19a19c3d18a7fa6f858dd87a340f12cd"
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
    "url": "assets/js/25.033ceadd.js",
    "revision": "583edd65def2a180aca14dc2a8e17a2d"
  },
  {
    "url": "assets/js/26.e5b46d0f.js",
    "revision": "a9952e14190800654531417e311527e3"
  },
  {
    "url": "assets/js/27.04bfe5a7.js",
    "revision": "af57e024ba17d1c5d3e8c1475cea1925"
  },
  {
    "url": "assets/js/28.3defadff.js",
    "revision": "0161d7cfc79f12f8e222315dc49d1899"
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
    "url": "assets/js/30.70755bf4.js",
    "revision": "d6949bef3dbfee1437b1ff6775edac9b"
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
    "url": "assets/js/34.86bebae0.js",
    "revision": "33f737d4caae289cf064eebd41919963"
  },
  {
    "url": "assets/js/35.a6fd606b.js",
    "revision": "5ef281d01583e6dfdfc7dc46d0f5ce4f"
  },
  {
    "url": "assets/js/36.665417b8.js",
    "revision": "14c1cdac6378b0134d3172c694534e34"
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
    "url": "assets/js/42.4e7d003c.js",
    "revision": "6a490d666363e30cb092a5f18f8f20b7"
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
    "url": "assets/js/56.e2c8591c.js",
    "revision": "d97bb673248977fed0c21afa544ccd08"
  },
  {
    "url": "assets/js/57.95245e13.js",
    "revision": "a03ed8c9e8b3cc3f62cb7b6b252f3b64"
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
    "url": "assets/js/62.27611daf.js",
    "revision": "4929ce50aaa9fce46812559099589a78"
  },
  {
    "url": "assets/js/63.9962e8f8.js",
    "revision": "cb50a56f999abde0a0fa2a3b8e22cac3"
  },
  {
    "url": "assets/js/64.f6a8014f.js",
    "revision": "5c72c94717cbd55aa79d3cdb85bf47f3"
  },
  {
    "url": "assets/js/65.b953a41f.js",
    "revision": "2d0f82a111da3a70cf99c048822f80a7"
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
    "url": "assets/js/68.b4bd5684.js",
    "revision": "20588a9ad9d537985bb0b06e0e68800e"
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
    "url": "assets/js/70.155fdaef.js",
    "revision": "8faf2bcabac78ced50d7899baf678698"
  },
  {
    "url": "assets/js/71.fd9b875b.js",
    "revision": "e6841bea2fc21592d06d0a8fe59c69a1"
  },
  {
    "url": "assets/js/72.92b9f56f.js",
    "revision": "e4eaa647eb19709c5e45cc47a44e61c6"
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
    "url": "assets/js/85.56ec1c57.js",
    "revision": "754a04f3b8258af510a029b2bfd2c1d3"
  },
  {
    "url": "assets/js/86.693e027b.js",
    "revision": "8ec11dc80a825f193a39c87705b50d07"
  },
  {
    "url": "assets/js/87.d6d538f5.js",
    "revision": "183659c611322064c2a36c898f4ada1c"
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
    "url": "assets/js/92.a807413f.js",
    "revision": "3ad1c5cdd43e6b991cc945dc731c3a41"
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
    "url": "assets/js/95.6030fc10.js",
    "revision": "41a2d4a63d858d3a231cad9c276b7a0a"
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
    "url": "assets/js/app.551daefc.js",
    "revision": "ed13302386327fdbd37115e78037ec86"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "866eeab9b7df9f937b31f93c52135938"
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
    "revision": "a1898ee716facf15c108e9577f4398b2"
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
