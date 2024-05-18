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
    "revision": "20c93c773a067f48d955a074429920db"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "44f406f1ce3ce8318be82f4a7d1acf32"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "c685460141559ff85e3f7b57604f335a"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "23333ee5e38f7142ade1c7427daeeca4"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "651e1dd0a91867d1d6e0bb8405ec992b"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "68c4c259f96b2933d274eb870c6f2428"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "a7adc7a3734906ea1c1c29f5e0765ec5"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "9d4c8df1e7a864a15181f7440dff073d"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "d31894ef111634b82e02eae738c5d3b1"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "e74184c4b06cd9161d171fb27b7da70e"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "ba24792df8054aca75fc8f4cd3898585"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "b5d08946c318b09f8209ad542fd55a86"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "940ba497d6ae4ce767a9ba926019ef43"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "ca89c622f9899d430a556173a8e9694a"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "b7bc1ad381ed6f580bf707fd5189166c"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "34e7f5668c28f30175450a87496c0cf7"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "3c3f9f35e357ba9ff2544b22dfcf35df"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "795b8d88976b27e625ec3576978e57fb"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "4fadaa3814606cb858092a52096392e5"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "e6af323dca4624a5b27f33c36d551591"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "c980e4c3d642c47b53dce230a1d3887e"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "da1e420393ad8ff2100e67a7e9503402"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "acc3cf2baaf42dbfe89bf8b947ecd3da"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "dfe8c068fa4238f8a4ba4e7dbf8e2648"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "df482a07d0158c3978847a6ba1eca687"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "d45a5f3aa0bad56f4fbaf4ff91161f17"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "0928a2e1b284798509ddb4b04a95f100"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "d4f9907d7e16e8c427ed1839010a8f4a"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "eb8562377049ae506a30dc10983c50ca"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "8a15983c88e5a7f8285fadce7ae454c6"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "39d4fc326a32ff2c2dbb5058b9f42796"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "4adde458870f3fa344e58e4b63dcf855"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "4781e6529077deeb1f16f9066acc0fe5"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "b03d4b75bf0fd0241ccc80d65f138b94"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "8a5f395abe700de088a065479c55d300"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "d5fbb027199ff2666fe1028c99c0209e"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "3d5b04c39169d0e16349617fab631fcd"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "ea405b63634b8bf36b51cc89e086a61c"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "f39c3b147ca5200839165f246d4f02ab"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "9c7de1b3e215b37662eb649d1604c804"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "66a7bfecf5f621bb6abca065ad6d5626"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "d06b353c7226531b98269d9806c59cff"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "16f024a2a12736dac7b8e70e251e2db7"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "d31ebd817b3f5c2acd8a9bf5f96e1fb6"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "98d3ab21b34add471d31aa1ec043c3a6"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "2060c4696f9ce5a4512b3e2232f05728"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "ecfb724111bf4d12dff766a1292f805e"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "5ac2e947d11af85cfe23d1fa3f7703c7"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "574bbe6ce2ad0fd01dbc0ca8265e0a45"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "793eab14207ba24e87c6db27d29dd5ba"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "4a75144498004f5596159e4ed9ba2165"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "ce7680a6c12fdd2b1833b7dc9af3807a"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "8462266c0c42f7de38351070d55d945b"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "5d888db0b9a03b78f6204a53fce14937"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "4c9f113ee876e44338bfad4f63f6e087"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "e68add5700176e6654a7f36420595ab7"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "2c1fb5daf924d0cd91c89cffe9bf3c8d"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "2550a8f157ea99af7860504b2799c42c"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "f5d3622ca49ca9108fe03b5dbba79971"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "76a4dff895fe0e753324578b3322e5bc"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "d4a8951007399cffe09b3f1adf6f331b"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "76abde2f6aa67987c1cc3b3e031b5106"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "a3c062c67adebcd9feb1a97d6455688d"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "9289f910f1441f4315c4efc72dcb5c3f"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "37447c0a5eecf067e5a169905509c2bb"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "aa97d5c64aae6df033ee1841e77d99d4"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "520f23fe5ece2d27c607ef63ae3854c3"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "b260470188ce51bf02a53ad7c4851e50"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "a0b1304cad91b3f0f623014d4ee90391"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "2c2d6614bab595c2db34be749841cd65"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "218468f872c2b5d82f5f9021bc70b6a7"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "6590757a84702c8bb889843ef6d6a925"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "c2661420263da5bd34d901723337c718"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "ab84f5029abad37e722d23caf8cf0bba"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "466999086e902d420079f36f184fd23e"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "63d9dfc083b082e9d5a7686830b84565"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "d74ba4f15b128105df348ecf4ec1025e"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "24c4173f86faba5e87cdf19dbe984dc9"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "2793d19ae3d528330f654bdbea2cb296"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "3d7b9a03467725c18c2bd98741922bdf"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "5a441607be094a5e31d5f79bab8bf05f"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "9078ceedd66c0ada632ed9cf7e62946d"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "51698a82c0e548a192ecded9ce067eac"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "aee49ff71853003db249702de26a929a"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "c7e63ba1206ee4a7760969010779a2e2"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "9e1061aea701b49a88bc3bac0f7ca980"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "076e94c20eaa3e3ddca0e59f9652d507"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "9da60553c27b2f04000c7de69a39ce3b"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "3ff7a0a8068a4ea30c73c1c3064dfacc"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "a75ca6b72af394813925deb5b87c9f73"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "36fb0210fb8f0c2440c6e3695d895438"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "e9bddedce94305d814e40b47c8e7f3a7"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "3def1a3c1f14a7dca5c343fd04a7d4b7"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "3a31b8ef08fe772daad820824326c307"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "507ffb00a9d8adba9f43c3fd9c81147e"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "490144c4b05c1b9ea8008bc2c0b4ba59"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "b3ae7ac34e1898b518cd58b44dd3438b"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "e7c8c1bc812689df492b3acfec95c3aa"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "90f9b1f67ba9c40e6ba8c8e4c57f4416"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "16cc4e6f501d45a9b9b9437f7274d9d6"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "4b63a3420aa7fee3f19e2147077eb98f"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "932572b297e8d4b00e884a06db2b7ee2"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "5ddf92ae4f59a17006fa36273e817065"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "555a5aa59ebb4f235d77b31f098e1cd7"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "9c26fcfe5e080b645e3b1d24315c0403"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "bc16dfc2dd5a8106721a591f97ec0a25"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "3f769136fa9ff68eed11c545af39ab5b"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "434e9c76221fdbd5d00f05d07f2a6f16"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "aba9e58abcff333f7918583e72ba13b3"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "ee57a57dbe9414d957b90184e281d92e"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "fcb4668d977bdf9671f9bce8b5b90914"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "effa4717f06c9bc5fab99c4130841a64"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "9d7192e348c9fe67573e58c778f71fe0"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "068ad302387ed549129938e822ee08db"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "2cd77bd92999e2574b8d19ed7ee392f3"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "98347e4dfad0b904273437f731f1e98d"
  },
  {
    "url": "4.special/2.package/1.index.html",
    "revision": "cd28d4b5f0b3863b5b39c43155835150"
  },
  {
    "url": "4.special/2.package/10.html",
    "revision": "f73c78fca0ea76f7af118b58b3e57d6a"
  },
  {
    "url": "4.special/2.package/11.html",
    "revision": "f7ade25b18d1e5ea951661f3ba712aa8"
  },
  {
    "url": "4.special/2.package/12.html",
    "revision": "c0af1c978e4850e01febbd39b326b455"
  },
  {
    "url": "4.special/2.package/13.html",
    "revision": "4229b3ca73d2295302eda1f1b9495c72"
  },
  {
    "url": "4.special/2.package/14.html",
    "revision": "afa1c44e46c47ba44995d1f927784469"
  },
  {
    "url": "4.special/2.package/2.html",
    "revision": "4bcd63040eed529802ba2674e5c5bf73"
  },
  {
    "url": "4.special/2.package/3.html",
    "revision": "e0bc14a75417ce0bf55675a53f2aa252"
  },
  {
    "url": "4.special/2.package/4.html",
    "revision": "d54e21e9ac1bd61d41f3904faf534559"
  },
  {
    "url": "4.special/2.package/5.html",
    "revision": "ac0c66d8c29c72eec159c7573814b7fe"
  },
  {
    "url": "4.special/2.package/6.html",
    "revision": "b0d292940c117cdf6588d1b124ddba20"
  },
  {
    "url": "4.special/2.package/7.html",
    "revision": "220a61ced3b4bee981bc4cb6261a4463"
  },
  {
    "url": "4.special/2.package/8.html",
    "revision": "67e269ce8f95fe11c26e2cf4d998872f"
  },
  {
    "url": "4.special/2.package/9.html",
    "revision": "904d2643b5af665fe04f780f91cc8b17"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "8e0e9ba194d3ba9d3d2d9863a8fc1ddc"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "3a1e6f6ea7da3407581f5d67ed090d9c"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "b4c6122ceffcff68a32de8c53ba443ac"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "f90dc5030085c40383a1f7da3a3fdd13"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "107be0277f0b4747dcfad5baf59b1985"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "09ff1123f65af402f3347d94edfe71ce"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "ee82dfa3e463207a93cb1854b1591b22"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "079fa6161b4d4cea4e10ed72a7d05ac3"
  },
  {
    "url": "404.html",
    "revision": "76bc4f82edd2fbe935475ed45bab58af"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "3c4e475ad55bb324174cb6b9e2d57fea"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "17727c94e2fd795929f481aef1ea7c04"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "5f56fa14070636d66f3c3f616bcfc4a0"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "f942d2bf0c6e77446ce3c32df65f841e"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "185041a3744ac42a26540e9ed144b811"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "604925cda2ab1a9160154d2a50311aae"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "eba27135583e646e610c6f2a6f483b0b"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "59866e8a7fd6a4ff20c1ebdda35220b9"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "d1d372699042132b10ec6e70b68b06a3"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "a8a93555fc8a8eadaa492475a90011d1"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "035678d079f5720e510137df0c896c32"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "bcac5168552b14a44dcda56174d613a6"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "df412ddcbb7c26ac7a686b14e5bb1686"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "fa8e728c7006a97d8289d22f90b5fb0a"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "5dee95a6ead29de3fc02294f024427e2"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "edb48fce3d33d2ae84206576f782523e"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "05928bcc1083e8f2fcc0affbb3146a49"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "cae4066786786bcf3c63a7bab77c7e5d"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "b3ad6b4aa846eb55e102411efc7a84ea"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "d3529d1611476e58c404b1a2de0a3a7a"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "7bd8b02ad386ded5f76ef70c50207155"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "f83688244f3f7ea5291629583d331d4b"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "5dbcd4e3141ce1db151a255ef7978aa4"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "4c3752023e8661f8370a0876da5a2f79"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "9cfa08dfbd76dc77398185b40ea68478"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "642e52e6a1895c5ac3a2fb4f6eff2e23"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "bcad79599fd39918b8b6eb3a31994d9d"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "afc8abb39631c4af0fc4850c3e2cd0aa"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "cf7246fc79c34d299eb086bd6ff20b40"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "4c1a978b597bac1c4436405d2f65b0bc"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "e217a647c06a952f1bf8ebe4dc599990"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "9b5fc6366382d957180d3476ab3c2ec6"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "32832dba1717797fd2ab1e9ac7ea195f"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "ec3292b92b6885e5b4b93a27b27c0f20"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "5b51f777f8a725a271f87d59be52b7a5"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "569a0571d9317d04c665e70cd6298c1e"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "a652212e17da08fc4fbf702086522e23"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "6a7a780effde5a01bec8c1e8369e25d3"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "4e5bfa311925cf6dd4a06b686393efce"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "6654c75a5d7630bc9ab41a195cd13da6"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "5a20576004314fc19d0fedd63a8efbfb"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "01cef4f077a9f9ebdf5a3ebf8945996c"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "b05e33b4a3191e5054221f5c87561096"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "22981f0b2ba94d71c96d5380818eedb3"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "216df2ce25e67ccff79e778be23f1b06"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "3ff6e4540baaace95d4b2054f78a4ee8"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "2783ec84f5c8fbe68ae25235a1e09eff"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "1be05ec0684db8f62a8adf84c4ac2917"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "5d26a0a30c44386abe9bc28bdb9882f5"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "172a723d262423cadc8f8d8bb93b579f"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "2d1cfc0610f9dc7e3de23718a120bb13"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "3a59422e97018ae3e15d40bcef46ae87"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "ddc9a2f9455217d1137c64abb5ec832f"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "06d25c8c303383a63a3da20a2861d712"
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
    "url": "assets/js/10.7fd34db2.js",
    "revision": "f6a0847896db6bdd6bb6c53463350a47"
  },
  {
    "url": "assets/js/100.82391849.js",
    "revision": "e3022fc4e21bb218ef7a0d5c111e37fd"
  },
  {
    "url": "assets/js/101.a6e75c88.js",
    "revision": "0a3f7771c53672c45a934c70e602a7fb"
  },
  {
    "url": "assets/js/102.35bd8f3f.js",
    "revision": "dd816245bc2de564e0802f88d6dee51d"
  },
  {
    "url": "assets/js/103.0f0d6d1f.js",
    "revision": "e1a05c2023a47c5ec58ce3b1f46ff7db"
  },
  {
    "url": "assets/js/104.a62b3d66.js",
    "revision": "7684e5053f624cf71b254c4d116a76a7"
  },
  {
    "url": "assets/js/105.6e843deb.js",
    "revision": "04574c04078c08a14c09e902d04db020"
  },
  {
    "url": "assets/js/106.911698b7.js",
    "revision": "cd51dcbf00becc86326a265b3b0a6fe0"
  },
  {
    "url": "assets/js/107.69255668.js",
    "revision": "86a8cabbd7fce331a8e9c27cb415a2c6"
  },
  {
    "url": "assets/js/108.86b2798c.js",
    "revision": "f5007841782fb90edc6217e8bc1ad7cb"
  },
  {
    "url": "assets/js/109.bb9d8e46.js",
    "revision": "dd7ff604d46fb7fec27ac0569d815cda"
  },
  {
    "url": "assets/js/11.901a0787.js",
    "revision": "7666f3ecaa646b572ed52e0042c31bc0"
  },
  {
    "url": "assets/js/110.86f5bb89.js",
    "revision": "13d3fbf98077dd65242fa723d83e4240"
  },
  {
    "url": "assets/js/111.4980a76e.js",
    "revision": "34e1e15b8a4570c8e6bec6151267275e"
  },
  {
    "url": "assets/js/112.4528c36c.js",
    "revision": "7c73f53a38456a7b0bfcdcb6f9363abd"
  },
  {
    "url": "assets/js/113.bbada7d8.js",
    "revision": "6cf8d54414c91284f2180bfaee38133a"
  },
  {
    "url": "assets/js/114.a3f69cc3.js",
    "revision": "7ad4a38d368949c0364617db6e2f7d0b"
  },
  {
    "url": "assets/js/115.592bcc87.js",
    "revision": "e9a32d550bf0f190ed0017cc6cb24ec8"
  },
  {
    "url": "assets/js/116.2f003c9b.js",
    "revision": "a0ade07a92a3b0825b0c65dad1bc87d1"
  },
  {
    "url": "assets/js/117.95f02544.js",
    "revision": "48c34e74c5203e6bd908aabf48c6261b"
  },
  {
    "url": "assets/js/118.a66d104c.js",
    "revision": "7a490a4ce92e9244c4f1757a57a57e7e"
  },
  {
    "url": "assets/js/119.13d1ac96.js",
    "revision": "8c42dcbf412bdc2be78d3d8946b2d43a"
  },
  {
    "url": "assets/js/12.a8ebd8ee.js",
    "revision": "345b0ec569e7da864376cdbae3932d86"
  },
  {
    "url": "assets/js/120.5127763c.js",
    "revision": "434dd90d8b69e3fa1b9b58e70a8e8146"
  },
  {
    "url": "assets/js/121.47f79cbc.js",
    "revision": "4864c14af4320e7d6cc7d47af15f7ddb"
  },
  {
    "url": "assets/js/122.5c903fc0.js",
    "revision": "d2a6834a482b58ddf1ebae0c02dc11cf"
  },
  {
    "url": "assets/js/123.1b8f2546.js",
    "revision": "13cf84a7b4b134745b47dc002017c9fe"
  },
  {
    "url": "assets/js/124.8def2ecf.js",
    "revision": "9e973eeba9639065b164d0b028d28ac3"
  },
  {
    "url": "assets/js/125.df1ac0bb.js",
    "revision": "206b6d6d3f0e968252af2a8943bd98eb"
  },
  {
    "url": "assets/js/126.f95113d8.js",
    "revision": "4cf217ddf9ce94166df7050e086db302"
  },
  {
    "url": "assets/js/127.f7d2b4fe.js",
    "revision": "f788e49122ad53733663cfb6aa43d5c0"
  },
  {
    "url": "assets/js/128.161261c3.js",
    "revision": "979d855f9e565085d336cc7c2d943ec4"
  },
  {
    "url": "assets/js/129.44815a47.js",
    "revision": "fd1e5e32f8d444f42f8e5a505ac02ea9"
  },
  {
    "url": "assets/js/13.da685cf6.js",
    "revision": "8f80e6c7a61cb8e9b6d16a720716c325"
  },
  {
    "url": "assets/js/130.c1d2468d.js",
    "revision": "00e78b26f4fecbbd8896c24963948830"
  },
  {
    "url": "assets/js/131.d894766b.js",
    "revision": "d94deb7af8856c9053cb37a1df1ec92b"
  },
  {
    "url": "assets/js/132.cde25b76.js",
    "revision": "ef5e1dee901aab7bea90f46d0f351670"
  },
  {
    "url": "assets/js/133.f868c9d8.js",
    "revision": "77be3e6a87af98cec89f7e78f4fba182"
  },
  {
    "url": "assets/js/134.17714748.js",
    "revision": "13a4c520a0a01fd532925ec073da4fcb"
  },
  {
    "url": "assets/js/135.252d979e.js",
    "revision": "bda4e224a0295a2643adbd5c0ad16617"
  },
  {
    "url": "assets/js/136.aabe53cc.js",
    "revision": "6ebddc8f391d871c019e4b0cd593ee1d"
  },
  {
    "url": "assets/js/137.b6e2ebdf.js",
    "revision": "054667c14b37e11f77b04c197fbf7a7d"
  },
  {
    "url": "assets/js/138.6b3a1ad2.js",
    "revision": "8bd6750b47268528b22b6429375a87ec"
  },
  {
    "url": "assets/js/139.e634bfc9.js",
    "revision": "dd09a72da498a38d15079d0136b5890a"
  },
  {
    "url": "assets/js/14.4591e3fa.js",
    "revision": "ce0c077e3b2a749517aa84ab1b07b764"
  },
  {
    "url": "assets/js/140.f6c47092.js",
    "revision": "02ec2ee47c2774dc23901d3064b61987"
  },
  {
    "url": "assets/js/141.945e431a.js",
    "revision": "c07d4035b1daa3903e1297342256b564"
  },
  {
    "url": "assets/js/142.4cf90825.js",
    "revision": "a5d3b1069314e3d20194c54a39d8a8cf"
  },
  {
    "url": "assets/js/143.48c1f577.js",
    "revision": "9afc87c18deb5d05fd58386b0d0da0da"
  },
  {
    "url": "assets/js/144.1c00557f.js",
    "revision": "3f597e76d385a5ea150ababb6a1d178c"
  },
  {
    "url": "assets/js/145.54d7afa8.js",
    "revision": "4a4b8f46aaadd3d42235d9006bb628e0"
  },
  {
    "url": "assets/js/146.b7ddce88.js",
    "revision": "5b8dd5559a5fc508398e5a2d49096612"
  },
  {
    "url": "assets/js/147.501d6615.js",
    "revision": "d0bcb3a174aead120b18a2764547abf3"
  },
  {
    "url": "assets/js/148.38866016.js",
    "revision": "c9136cb5216fec22d55505dd8275f2bf"
  },
  {
    "url": "assets/js/149.c10744bc.js",
    "revision": "0d1ec0f3e268433d17819cf31aa75c35"
  },
  {
    "url": "assets/js/15.a9f6e8a3.js",
    "revision": "5555fd8a8ac8762ba140bb68b78f18f3"
  },
  {
    "url": "assets/js/150.f2a18eab.js",
    "revision": "8c53e11fba98ba7c4a9b49a8aa1d9668"
  },
  {
    "url": "assets/js/151.49788ecb.js",
    "revision": "abf9a35e4293081fabcbd13d2cfed280"
  },
  {
    "url": "assets/js/152.9e3dddb3.js",
    "revision": "7a11bcc6ad0141b43f675855f04268e4"
  },
  {
    "url": "assets/js/153.965527cc.js",
    "revision": "7956ea5e41c21940e931ff28b4805b71"
  },
  {
    "url": "assets/js/154.fa1282fb.js",
    "revision": "17424f1e1b3f724985015d67ae280e4a"
  },
  {
    "url": "assets/js/155.0c6e0eea.js",
    "revision": "76c66a222681a1b4575f1075354729b7"
  },
  {
    "url": "assets/js/156.93ee94db.js",
    "revision": "0fc4b988a4e7f8354398aa1b0f8e1e05"
  },
  {
    "url": "assets/js/157.bf0a2b3b.js",
    "revision": "7334dc723700b7356b19edb7749f548f"
  },
  {
    "url": "assets/js/158.2d4a2a7e.js",
    "revision": "feef0f28a7536016f5a7e32b18d76995"
  },
  {
    "url": "assets/js/159.3f9b3e0b.js",
    "revision": "5055f3b06d520ef2393dcbeaeda100b9"
  },
  {
    "url": "assets/js/16.3145a5f5.js",
    "revision": "d19d5218a89c5a78f2b481b1e0ef194a"
  },
  {
    "url": "assets/js/160.dbf6e7ef.js",
    "revision": "ccce91cdd0641e317f6235b6611a7357"
  },
  {
    "url": "assets/js/161.7dee7971.js",
    "revision": "8461d0556f4b98655cee0f99a071928a"
  },
  {
    "url": "assets/js/162.045b0dba.js",
    "revision": "04a8dca9c5c8dfb521e3b90f18ff186b"
  },
  {
    "url": "assets/js/163.fe56de85.js",
    "revision": "60c15c11a8cf6d7ed4f96c7ff9ab1ede"
  },
  {
    "url": "assets/js/164.f45aa9c9.js",
    "revision": "eea361cb797bc9e3fa92867b8a82666a"
  },
  {
    "url": "assets/js/165.19026c39.js",
    "revision": "3939a0e1d1ca3a775322d7a0a490be68"
  },
  {
    "url": "assets/js/166.457c6e2b.js",
    "revision": "34fbb5e80216e089a3c42f615e1c1ab5"
  },
  {
    "url": "assets/js/167.7812c982.js",
    "revision": "9d279af058e6c1c008b9bea4f744e11c"
  },
  {
    "url": "assets/js/168.5496a7ca.js",
    "revision": "f38d8b8408e50c631e5ffe48b2512210"
  },
  {
    "url": "assets/js/169.e0371ee5.js",
    "revision": "1c7ff5d3ce447e75ba5b5a53fd0bc282"
  },
  {
    "url": "assets/js/17.cf4968ce.js",
    "revision": "0534b7bc5d0baf8ded9cde8dbe613a02"
  },
  {
    "url": "assets/js/170.21541a84.js",
    "revision": "e83c81ae3bbdf763fc3d9296fd311248"
  },
  {
    "url": "assets/js/171.64e87fe2.js",
    "revision": "c91a6d322fce25af375a088c1cc44cc5"
  },
  {
    "url": "assets/js/172.a8987fa0.js",
    "revision": "9ca321d3976a4e871172686ed5e70775"
  },
  {
    "url": "assets/js/173.f7da4b0b.js",
    "revision": "91a30d26383fc8ca9ce2679eb6067dd8"
  },
  {
    "url": "assets/js/174.b36a5a38.js",
    "revision": "f20e51f2f1f574629db785a3117e0818"
  },
  {
    "url": "assets/js/175.60f23dee.js",
    "revision": "6afb6aec426202dcc16e517611d5a638"
  },
  {
    "url": "assets/js/176.7164d7ee.js",
    "revision": "604ce4b033945486360b379f1cc9441d"
  },
  {
    "url": "assets/js/177.fd0740d6.js",
    "revision": "d6990998a18d4188d526a5362f758b6b"
  },
  {
    "url": "assets/js/178.9a57d864.js",
    "revision": "23f078add8acb09fbc5d56ca27d95269"
  },
  {
    "url": "assets/js/179.4dfcfbfe.js",
    "revision": "693c49b0b6c9edff89c747e7ceae53df"
  },
  {
    "url": "assets/js/18.0a889151.js",
    "revision": "050bb4ab1e2b643ec9f144dd9a4809a0"
  },
  {
    "url": "assets/js/180.4f88c78e.js",
    "revision": "0d039d36012449bad20c8f2c89c86c85"
  },
  {
    "url": "assets/js/181.58c0079d.js",
    "revision": "052867bac00a3b587de90c381665cef1"
  },
  {
    "url": "assets/js/182.66e09c71.js",
    "revision": "d805f7e416b0593927cc3dcff8146b4a"
  },
  {
    "url": "assets/js/183.4dabd143.js",
    "revision": "923b8a8f90dd25476e2fcb8b6ad31892"
  },
  {
    "url": "assets/js/184.e83791ef.js",
    "revision": "b821d82857272d12ea476bf745eddca3"
  },
  {
    "url": "assets/js/185.5d8f5888.js",
    "revision": "3c889cca570f6fbac3b284f6c6743f65"
  },
  {
    "url": "assets/js/186.e3eee02f.js",
    "revision": "60b962dae6939d42ddfc3f6fb10935e6"
  },
  {
    "url": "assets/js/187.2dbbeaf6.js",
    "revision": "dbf66be2fdc28b2d6baead994155b041"
  },
  {
    "url": "assets/js/188.0cd6ba58.js",
    "revision": "027e0c8d48e1d3658558ca6b9b08eeac"
  },
  {
    "url": "assets/js/189.29966991.js",
    "revision": "a7d28c1bef64732ae2b59fcd5dd818c5"
  },
  {
    "url": "assets/js/19.060bae4a.js",
    "revision": "6e3777649e725c955b08397aaf4c9aef"
  },
  {
    "url": "assets/js/190.b07673b8.js",
    "revision": "b598aefdc885cb044da518cb9e96b817"
  },
  {
    "url": "assets/js/191.9cfe3fde.js",
    "revision": "2cb49426417220737c70366a909b9ed2"
  },
  {
    "url": "assets/js/192.1f9493ff.js",
    "revision": "2a3ad95fc9b23fa6f89c96470d906d0f"
  },
  {
    "url": "assets/js/193.c92c2466.js",
    "revision": "3a812adac5908b1ee8869e1752107a0d"
  },
  {
    "url": "assets/js/194.b40922e6.js",
    "revision": "d8f4de7c6d39c1a04ace799fd632293d"
  },
  {
    "url": "assets/js/195.5587d346.js",
    "revision": "dc7bfb9cb29d8fa5caff197bdd864ebc"
  },
  {
    "url": "assets/js/196.388f031b.js",
    "revision": "ef92f3b3b6a326d1c538964a51b03acb"
  },
  {
    "url": "assets/js/197.a74eaa8f.js",
    "revision": "80aa4cb8a8ebeeeed70ea65845340535"
  },
  {
    "url": "assets/js/198.7b76ae25.js",
    "revision": "2c59825a8ece6b8e076b00561c0c2bea"
  },
  {
    "url": "assets/js/199.67a93ba8.js",
    "revision": "990c754dae2c970001494d634dfd6d8c"
  },
  {
    "url": "assets/js/2.50aff010.js",
    "revision": "008e27fe22a1b9b7f8d6fcdfd3a65bd2"
  },
  {
    "url": "assets/js/20.f0ad4b25.js",
    "revision": "b5cc67616dfa86799765b90adc1f6928"
  },
  {
    "url": "assets/js/200.18767f28.js",
    "revision": "7b3e6eff51a0be690fd0c947080669d7"
  },
  {
    "url": "assets/js/201.ca3e1a82.js",
    "revision": "8b54286b638400025c6125ff0a513cdb"
  },
  {
    "url": "assets/js/202.cb38e1e4.js",
    "revision": "f28670b730fc2e1f8647595c8e617b20"
  },
  {
    "url": "assets/js/203.67868ed0.js",
    "revision": "36dac2543ec77ae37e320709db1f3665"
  },
  {
    "url": "assets/js/21.df39c04a.js",
    "revision": "aaebf4b0f213542d9d10cdaded5653b7"
  },
  {
    "url": "assets/js/22.e1681e3f.js",
    "revision": "17aa4e343a3b17753f62fac36f1898cd"
  },
  {
    "url": "assets/js/23.6c84d5cb.js",
    "revision": "43c9ca094602584329b43fb7244111b6"
  },
  {
    "url": "assets/js/24.cda03eac.js",
    "revision": "93c561ee50650cc19e1aa5c2385f701a"
  },
  {
    "url": "assets/js/25.06b87357.js",
    "revision": "06b1d53ed679e7b940a4b3a426337140"
  },
  {
    "url": "assets/js/26.14105450.js",
    "revision": "40263f61fb772fafaeeecf655e4587d3"
  },
  {
    "url": "assets/js/27.ac396343.js",
    "revision": "70b75d91b2d09bd4e570c2c6151e2b05"
  },
  {
    "url": "assets/js/28.e0400d60.js",
    "revision": "8ba1a41d541b5275559979b661c24cdd"
  },
  {
    "url": "assets/js/29.dd9cc9b2.js",
    "revision": "7363b52c388274579c961d43a0b93624"
  },
  {
    "url": "assets/js/3.6d7accfd.js",
    "revision": "962b88f285c1fa9b15f1aa1f3eace0db"
  },
  {
    "url": "assets/js/30.365a3969.js",
    "revision": "2a74386bc70956996001ce95c7565f7e"
  },
  {
    "url": "assets/js/31.433ca059.js",
    "revision": "1c0c022685c713a8f1f7a9fc1f6510d4"
  },
  {
    "url": "assets/js/32.6d7a429d.js",
    "revision": "0417477e0f4fcf90b345189c1da370e4"
  },
  {
    "url": "assets/js/33.59febbeb.js",
    "revision": "e2f196e8df6f333ca2861cdab60d24b0"
  },
  {
    "url": "assets/js/34.8aba3258.js",
    "revision": "4838745b401aeeb33822adc7e537e579"
  },
  {
    "url": "assets/js/35.49d3aadb.js",
    "revision": "192bec7b6e94cff07820d2fc8216edfb"
  },
  {
    "url": "assets/js/36.bb4c720c.js",
    "revision": "67934ec2f923dcccef61f80a94f4873a"
  },
  {
    "url": "assets/js/37.e92e1973.js",
    "revision": "9cfc2b8a1ac9ce443dd5cc53ccadd72d"
  },
  {
    "url": "assets/js/38.493683cd.js",
    "revision": "b66552a818daf1ac87236f8c3f1100de"
  },
  {
    "url": "assets/js/39.bae75a8f.js",
    "revision": "c50a0cedfb681b26003c70d1ae3671f1"
  },
  {
    "url": "assets/js/4.fd3445ac.js",
    "revision": "d0d03e9e4e6a4ba43d0d400f4d89ba11"
  },
  {
    "url": "assets/js/40.c9022872.js",
    "revision": "8a70392d773cde304f3c2c5222fb2154"
  },
  {
    "url": "assets/js/41.13ea3e62.js",
    "revision": "e627e1c966f00d34793fd3219518ab7c"
  },
  {
    "url": "assets/js/42.4b644039.js",
    "revision": "ff52ed4ba9065b0142efb805c84b635f"
  },
  {
    "url": "assets/js/43.0b9828fe.js",
    "revision": "bd7abca36f455123084fc5592110134a"
  },
  {
    "url": "assets/js/44.3bb6ac5a.js",
    "revision": "3c44e3edae01de5a7bc7fd6d68091275"
  },
  {
    "url": "assets/js/45.5c16d038.js",
    "revision": "e6dcbdb072797ac79293cf912591776d"
  },
  {
    "url": "assets/js/46.4df35a84.js",
    "revision": "fc23fcc4099ece2d276362464fc44d38"
  },
  {
    "url": "assets/js/47.0a930de0.js",
    "revision": "850a2d71b6427323f66e52016b70f5e0"
  },
  {
    "url": "assets/js/48.5c38345d.js",
    "revision": "3f132df0ddcd6eadf8a5be3388658060"
  },
  {
    "url": "assets/js/49.62ccb375.js",
    "revision": "7d7860c4ed92f50e86afbe010f80dd6d"
  },
  {
    "url": "assets/js/5.477bf6f8.js",
    "revision": "bdf37d122941fb9821808783f9d265db"
  },
  {
    "url": "assets/js/50.a7fe12e2.js",
    "revision": "56caaa220dae88dfa57b323e8e544f5e"
  },
  {
    "url": "assets/js/51.45351aa5.js",
    "revision": "fd2b753ea66fd83430a0efe0354441c4"
  },
  {
    "url": "assets/js/52.6bb1de5b.js",
    "revision": "997c189a66a0cac96c5d3794d98d3231"
  },
  {
    "url": "assets/js/53.346de267.js",
    "revision": "5f40962f5a5a6aec6a6405c27cca8812"
  },
  {
    "url": "assets/js/54.35644052.js",
    "revision": "0c86aa4da4ebb185886154c491f5228c"
  },
  {
    "url": "assets/js/55.ae995512.js",
    "revision": "5327acc0706ba77ab3da07496799ccc0"
  },
  {
    "url": "assets/js/56.de09d8e0.js",
    "revision": "180a451c8af0ea642324b4ef3dc3d672"
  },
  {
    "url": "assets/js/57.b5dbe733.js",
    "revision": "0816d3ee1a3d3b06ae93501a5b44d339"
  },
  {
    "url": "assets/js/58.69190b7b.js",
    "revision": "80e748f07e0474479aac8f64e18f0bd4"
  },
  {
    "url": "assets/js/59.04910380.js",
    "revision": "798934db8592b709fa1716c1796c563c"
  },
  {
    "url": "assets/js/6.29d5c03f.js",
    "revision": "c7278f68793b04189b0a4a0a2b9bfe15"
  },
  {
    "url": "assets/js/60.6bd609c0.js",
    "revision": "2d2badbde70da61e5ae66025f627512a"
  },
  {
    "url": "assets/js/61.6643e8c9.js",
    "revision": "084c797ec35a2c4759f9aa970447f0c8"
  },
  {
    "url": "assets/js/62.ba7820ce.js",
    "revision": "1502ef7ec5ade7fae784152d59eef92d"
  },
  {
    "url": "assets/js/63.0ca08639.js",
    "revision": "18c220e69145f81c310bf7b28eb56781"
  },
  {
    "url": "assets/js/64.7692b766.js",
    "revision": "d3a3c0b0f3ee64b1845f9b28c1e8a7a7"
  },
  {
    "url": "assets/js/65.8e2f45d6.js",
    "revision": "d94e72c9c29960fe4127b6640b9cd3e9"
  },
  {
    "url": "assets/js/66.2193e2e9.js",
    "revision": "f533682d24ea8f2808dba7d411d6eba0"
  },
  {
    "url": "assets/js/67.16df4c82.js",
    "revision": "5f2083c2703e1421918c144a66727201"
  },
  {
    "url": "assets/js/68.7bc9c2e3.js",
    "revision": "bd6c2916f5cd74444143a17cbafb6d6b"
  },
  {
    "url": "assets/js/69.aa5dc810.js",
    "revision": "947207d0ce490674b5b2387936e20bbb"
  },
  {
    "url": "assets/js/7.7f0739c5.js",
    "revision": "697d46e6ba68d4556559d2d5aa4fce9e"
  },
  {
    "url": "assets/js/70.6deb1dfb.js",
    "revision": "2e606a1bb2d0e4619097b8a769f5d597"
  },
  {
    "url": "assets/js/71.254aca18.js",
    "revision": "cf7336249696095495debdba01a0eb97"
  },
  {
    "url": "assets/js/72.4778f734.js",
    "revision": "418e27a6a1f9e475fea10f2d0d3b096a"
  },
  {
    "url": "assets/js/73.877a7c2b.js",
    "revision": "339b02911b13a184e181db92bf6ff78d"
  },
  {
    "url": "assets/js/74.995b30c9.js",
    "revision": "79ec2000b8626d1f29b9fe75970823a3"
  },
  {
    "url": "assets/js/75.8e991d2b.js",
    "revision": "4ba2229c00191b620edde2eee7c9bbbc"
  },
  {
    "url": "assets/js/76.e9e2fc46.js",
    "revision": "3f9eaf289293919448da70ee2cbfc3d8"
  },
  {
    "url": "assets/js/77.6f1d4fd5.js",
    "revision": "bd0c30d7c490796f6b4b944d7eb30616"
  },
  {
    "url": "assets/js/78.84af9074.js",
    "revision": "5e7b9d4e1132e72d9e95b29d399db646"
  },
  {
    "url": "assets/js/79.91db4a02.js",
    "revision": "314b74ee07977304472b6c2081c2add9"
  },
  {
    "url": "assets/js/8.6b397fe7.js",
    "revision": "3b665b749e81b562d6618913c1c3523a"
  },
  {
    "url": "assets/js/80.3dd02a45.js",
    "revision": "95a5af72a7919b6f02e9f9ae19e76f53"
  },
  {
    "url": "assets/js/81.ca1ce020.js",
    "revision": "a9be96ed60566e02941bebd79a1aed2e"
  },
  {
    "url": "assets/js/82.d16a2e7f.js",
    "revision": "ea0f4ade6492505b95a7d5020ff1f102"
  },
  {
    "url": "assets/js/83.2c79911e.js",
    "revision": "17bc64e5d96dc293f0afef99ff993bbc"
  },
  {
    "url": "assets/js/84.0be2ce94.js",
    "revision": "b95ba4c3ba840b5b6d01dcf963d7709c"
  },
  {
    "url": "assets/js/85.2afed790.js",
    "revision": "87dfde46cee42da1b6b3002cd049bbaf"
  },
  {
    "url": "assets/js/86.b3fe0e6a.js",
    "revision": "fedd6deb729df808e9f6f18c30f411d5"
  },
  {
    "url": "assets/js/87.973d84a4.js",
    "revision": "ed82fb6622db6cc41100650815243a38"
  },
  {
    "url": "assets/js/88.6cf49295.js",
    "revision": "7529a529e5b4be1b2581b3ea60640d2d"
  },
  {
    "url": "assets/js/89.91b7274c.js",
    "revision": "862fd10ef6ae5aa8cea434d54c25ba9d"
  },
  {
    "url": "assets/js/9.b36920ae.js",
    "revision": "94799201a08cf7f3c76d51e2b3d1830e"
  },
  {
    "url": "assets/js/90.cf89ff7f.js",
    "revision": "e0f4294b92ddd31681107c8babaf12df"
  },
  {
    "url": "assets/js/91.a3fc9daa.js",
    "revision": "cd998e9b4bcd671aab032aff2c1451c5"
  },
  {
    "url": "assets/js/92.b7945119.js",
    "revision": "9acb6b551225f80947920f3ed72b20b0"
  },
  {
    "url": "assets/js/93.7b6530ea.js",
    "revision": "d8ac5507ece296d3d3c6b977f9362020"
  },
  {
    "url": "assets/js/94.003519ea.js",
    "revision": "901c0bbb1a2860e21b8f37701f5fba6a"
  },
  {
    "url": "assets/js/95.14ee0c51.js",
    "revision": "c0f8c87e0e1b840a395c18e45577f3e6"
  },
  {
    "url": "assets/js/96.758857a2.js",
    "revision": "f5934cc3f4c32d3d461c5cac43b7dc0e"
  },
  {
    "url": "assets/js/97.b230e8d2.js",
    "revision": "c9a4a34406a7c9ed14c9affcc49a468d"
  },
  {
    "url": "assets/js/98.5d5302a0.js",
    "revision": "07a44d1638e0df430212bd154e0f9fbe"
  },
  {
    "url": "assets/js/99.8e3bcb78.js",
    "revision": "7067433f3e33b0fbdde43e8da742eb77"
  },
  {
    "url": "assets/js/app.4095f0ea.js",
    "revision": "8e5e58b111c84a64888fdf8e62e3b16e"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "834a6fb0656329fda1b3130437e49e1c"
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
    "revision": "7bc38c6576ad743b5ffab9170c5a7b07"
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
