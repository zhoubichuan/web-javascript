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
    "revision": "19e78d0a9132224b294aaa6130da89cd"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "8efad893cf45b90842bd43f7b92cff0f"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "ab35874a72e0910728fd238397117019"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "1fa9cc00fbfeab025394b2fbfb5805a7"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "46dfb3cab76f5a30c4fd310c10670604"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "d0f269b7ddf987100d1d6cec0126730e"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "c3ed8205bae4db012dc8d0792a06a505"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "b9fb0e4e39bd50d8e3ee34d48dda350b"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "ccd2eec10f9be2134e6640e4755c52a5"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "798c53c9ca4432a37de82f13cb3ace6d"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "09331ead570072b49fb9fbbe27006023"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "02ab86c3dbafc83be51719db6e7b5878"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "f99ebf3ffe025d877fa0117b8784b789"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "a794a749f757ba186a70097af5053564"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "c2ac6bf2fa7a3134ede57e09a0532b40"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "cded9a153f3bc8cf43c305091fc86494"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "e51adc02c21cae7736e45a6da40574af"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "92e2de027b7e0254461679893a1ac7f6"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "70466ada1de88f4fb3c7ed43d31c1e71"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "72964171d4187c9d79a6d4f98928df52"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "b6f46cc5e01d6fbc6cd016596212baf3"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "ae180feedd5b65138be4a1e05d8691a1"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "40f0661fc0d3a36fa5fdc89892263987"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "3ad45f0c4f7aff366ba52ae825aea56c"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "513e6b46370c170c875b0ae7dfe193e0"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "c4bb03d4771b02cd5d7f43d5b9e6f693"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "17ddce882d57f9f1ab250e859f7eaa88"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "ae9d46f59f62e322c18b5c3a42413ee1"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "35663ac61d6da7bf54b51f2d0e9360c4"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "83c1f2e58885e977845433eaedc8fab5"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "1125354d0712bbd560c0d65b06d39703"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "b54f91a370e9dfb0cb14ea69991320ae"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "f7a8aceb951ab68eadb69a955461cff0"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "2acfd703a87b20825330fee6f17782a2"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "8350dfcc6c5ae0ddf91b8e849c5c3102"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "5f244e48e2de55e0d68f24d56b4a305b"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "0d8d728a827ed99df48c0816ce7cf192"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "786334f160d3a092727b44cf3cb80881"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "9fad550f2bbe4a00594fdbc25a73f914"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "3adb73b54f36e161ed19194ed8d1f816"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "4cc1ad4f00dab9c397d8c42d0d173d37"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "38e415995c73e0e138ee43bb67839ae5"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "7ee83f2df2d65af0a268609354d11eb7"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "328c3f6d1bb864522c64a7631654d1d9"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "7e61c0ee3111c6bc9c60cf2df156392d"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "9faddebecbdf162fb71d1b5de474fddd"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "be3a16c1e0fe9e351de500d362f8a8a3"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "a03e74c48527a899ba331e107e8e0ebb"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "7dc9bd2cae4b4cd2029b9e4b10babbf6"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "d91018ad68f3b084a6cd88c36a1bd241"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "a5bff6771ea16c06ae4a9f5a25638749"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "b105ff143d53676b99c5aa1cb5134c34"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "b5b94bcfa72f7e4d6b952c589e616dc6"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "ae87802778bb03b6f3330ed5bafbc745"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "90cba33bb4dbdc95cfdd42f68940aa1e"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "f86861f15a843ae8e5a724d4bc6f2123"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "dd83157414c72098bb4518c367827858"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "b26917774becbdc4d1f44ebcdaaf4273"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "fe68e0c21d40066be47fe0ab085ad4af"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "fe2e60611834a8765fff9407dceb53e4"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "ab7be3e1466eb03727ca404f67a715dd"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "5d1c327ba600417c6c1ade6e8104c946"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "e01eecd9f88d0458c1ce590f74ed6c5a"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "347af2ba8fe083d410b2dab172c45cde"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "fa7ad3cca7fd008e102395b57f3f0561"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "e1488bf6d07308ccabaa7a72c5438971"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "0d9763444e3f688fcf67171e308ab1de"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "702623ba75db366a6b14ad54769c0b8b"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "5e82a042541cb8f1edb681975dfca5ad"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "e470cf3f7b49028a20dd135e8382526e"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "34b63afd8e5e4628b52537a82f749d91"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "c6c7d5df67d6809437f1d2332cf5d80d"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "9c51c2c96ed2a62a13fd487a6d37a34d"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "b488b99f4840c09396416de9bb43bab9"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "3770461440b6654b66cd4afb270557b3"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "23a113615daa0c76349f940aa220ef9a"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "4e5e91f8feff742756ebdd1753895c48"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "7e2de4c7b6c3298c0eb18adb66850527"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "4d7cf72ed17c876c88b161934e0c2e1c"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "c0559594f73c4db5a8480c52f32bb234"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "14ed012c000f5a482c750ad4f01068ac"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "882015744d597d4714cd483ce42f72a0"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "d3cb609022a4035a018fdc6aff332efe"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "efffaac52173d51d7cb66ff0783eb108"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "740a28c6609a44632db307246ddc13d5"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "fdbeef8555417fe454f65316f1899c98"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "f7870c205a2bff83964976afc5dfa5e7"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "73a81722862d531b8449ad6de9d9ddeb"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "7b54f0cd0de7c5a02526975dd019a5b2"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "5be423526deb52526687b6528f88b3f9"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "45f359d2cf088e8a441d8757833c854c"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "b2bfebdf87ce8f15c2493494c01351ed"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "06b59ea3ac7bea61e28198bfd63bb71d"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "4f3397d0a7767ccdcfdfea381c03de8c"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "6c97961f8a48ff5f05a9c01b6aa61da3"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "baad18e1f8314ef57c1ec7694c2968af"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "968e4ee5aedf5c13060c82d6376fd795"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "0b126ca9382ddf7a61760a5ce0bc02d3"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "20601e20bc96933c6fb430825e246124"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "addad276620e6b7048f43e12da969004"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "3c18d798f403eb96ad0e7ebb28d54b68"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "f049131e03b02ccc2701adf3aab53db8"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "603564c46158f4d48103a0d9722fa8fc"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "ce2cd07607efbbaacbdf3cbe90597e32"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "0201c73152a9eb4846866ecf891019a4"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "770190212c5030387b1f305d35aa9b88"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "ff2e8aadb771bc50cac93d432bbd3edf"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "d2d5782fd9bac790a0afb7ff41d7d5e3"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "930a770bc10171ab42e7f0606c5c5fd3"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "fe8323d62fc6283b019996a09c8f0969"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "67c4a32165cdc2bc6b150784447b75ce"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "ca4e0acfe47366dbe983f29e321aef60"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "f6477ef711d878b77f29264d25324d06"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "455e40f314bf3f9c5939d3cef1c1045f"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "d83584d64d01641b277e2c6af295bd8f"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "0398257a8f952862bde5d69ba447bd96"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "208e1fec674447663c186aaefa4aee11"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "1e0ceb7f3086071a562da6a5a7c1cbef"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "611ea51045f4a3dbb7a66444f7212f6f"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "ad2a0cbc7c64f943ec5dd62150483c34"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "b3251e3e51eb52aacfd40198b0978f54"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "ccb0fcbd6b85f69dd7aa5f956c5f6681"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "23345c2c3a0dd44c8da02171d415d8d9"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "cdf0ef492f250b52a3b43d79aee0d093"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "ab3254923a4f007fac648895ec7ac711"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "dd9f85d6ff39b982782ff7d019104503"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "74b03c79097ec964b8c58d28cad31396"
  },
  {
    "url": "404.html",
    "revision": "1544e3cd1843da70d4f64dcebbac6452"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "922ad6d8e68dfef9b4a69b1612cc7852"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "4cbf99774e6a6f9a1bfbc7fdc1010140"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "6f5984b65df033c1165bc2f7230a45dd"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "e509759dee80d23100eb44377404001a"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "1c3f6740227fa8aa2e7c19b25099c980"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "bc9e4190f3018def7a1b9d09988ac299"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "780ec0fdc686967316938dc2aca1c9d0"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "b529b4a8ae2673ef8a0c5bdce69dd432"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "0e00feed707dfd3cf3befe5d5b7f79c1"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "17d21f22261fbb77843f8bf82c298869"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "dbb484c8affd2a840a4162ed62e9b7de"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "606eaf7054ed145b5956d52a32e5809d"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "4774ce77194375ec782919633867a214"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "5cc81e6ca9bd71a305b6fe6df0637218"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "74be067aa7368973fa507190239c49d6"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "28e1f17c3d24efc55ed6788266d5cc27"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "3c48724f3d1bedce30e1c830fcaaa3d5"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "7687681f3f9583e556ccd85f22cbcb30"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "3f9834fadf344f90f262f07f466f3165"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "4e76fee0260be185cbae5a1c69a01b71"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "2ce2839085886f834b5d3c9c0361d45e"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "39b5dd73e1bb3e1647b232781e29c162"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "917dde8d186477ce1b3859cc254df84e"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "939aa8b9621c460fb3e7d7b793ad0504"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "3228091fd5106452838a830812e19ee3"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "31b31212a0e6f879eaa1e73d3234fb6a"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "792a5fa1cfeeac6db1d84772e3576bd2"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "030cebde0714d17a431a74c25d495d0c"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "46f00f58e478f6fff8d26f3400c9a133"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "d73d048c2701ccf1c5f9ffeb21721660"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "efbc6db3b342c4450d68c970b2b97325"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "7ba70955dcea6de9a36df5d63ed2f0b5"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "e9efe5e4d9082795949b060a68b16971"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "ce8787e90fce66b36c986af8709c895d"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "1c87b044a57a1b66a8c41c7473bc1c46"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "fa368884743bc88b2cd2af9424ee74e5"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "0c0333b4401325434d2dc30a5b9f3fe1"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "e6c4670cc12918b7d24a5d713754ddde"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "0e81194bb9caad655bd918d7775e170b"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "78a429d3b6bd25532b5523dd8820f499"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "7a1389ebbe7c6653423fc947707e31f0"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "8f0ed78c9083dba52a1edec16ecd222d"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "1adcbf793b89aa11e83431b74ff927fa"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "c34e4572672922a59f91d58f1a46c713"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "51349699a7e16758960c7aeb41b14c83"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "840075c408d5ecd3ee754049cde981bc"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "6d37712ede52fd8a1f1087c2d624238e"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "f1cb79debe838f0f3ac1a0df538c5cc9"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "ec8c3ffeca065dabcc0400db61ee4142"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "9b5bf48f1f1c4209425c25043ac831b1"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "9d2d07cff77b20e8a14818c2bbad7162"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "460a3a8adfb76f88cbe1b72fb25f7811"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "9487f2bb37e109fa80b9d765bc2c634c"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "3d843fa68376f29908535ee459a815f3"
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
    "url": "assets/js/123.323e6822.js",
    "revision": "a80e2dd0ef7a47e9110dff0a7d90fda2"
  },
  {
    "url": "assets/js/124.3f34bbda.js",
    "revision": "ce93e5f9b96137adb2f7540755529c67"
  },
  {
    "url": "assets/js/125.53ccd73c.js",
    "revision": "4c4835d1b0cb9d23d8fe57415a39ee6d"
  },
  {
    "url": "assets/js/126.895ff4c0.js",
    "revision": "08161ff6ca2c993b9379b8816c6c3443"
  },
  {
    "url": "assets/js/127.f2d753a1.js",
    "revision": "40b0db1661c2e2b5bc0b1e93fab0e690"
  },
  {
    "url": "assets/js/128.7e91b67b.js",
    "revision": "a6729a34e582c7f140b2d43af99de51b"
  },
  {
    "url": "assets/js/129.f95e06bf.js",
    "revision": "65fa92e96b4b3c0e33cf3bc34fe51e39"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
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
    "url": "assets/js/132.9d3427fb.js",
    "revision": "4230ee5eee0fc20cedfe49f544880142"
  },
  {
    "url": "assets/js/133.ebcb45fe.js",
    "revision": "486c93a5447500472022cca058d753ff"
  },
  {
    "url": "assets/js/134.d743d580.js",
    "revision": "180e1c7e52dba92f62b9254725eedc69"
  },
  {
    "url": "assets/js/135.55824ac4.js",
    "revision": "4a5aea5923b3da46805965be7e4a3a7c"
  },
  {
    "url": "assets/js/136.6d02d7ca.js",
    "revision": "6e29e72e0e7b460208535589079f43fc"
  },
  {
    "url": "assets/js/137.02ae02f1.js",
    "revision": "9b5324fac5e0b15be7f53d9820d6f5b2"
  },
  {
    "url": "assets/js/138.0f971e0f.js",
    "revision": "1b0dab788fd1e1ea1cb4b63ae9fa5978"
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
    "url": "assets/js/140.b2d42773.js",
    "revision": "d97b98e60a5a8f98fc2ddfd33dfbb02c"
  },
  {
    "url": "assets/js/141.ff42de96.js",
    "revision": "5963d4a11825aeb63458a8c718e8e184"
  },
  {
    "url": "assets/js/142.10da29aa.js",
    "revision": "3f0b8c4f2eba894ef4367ffcb8348d3a"
  },
  {
    "url": "assets/js/143.9abfcc3f.js",
    "revision": "ce32222cc93057b5ac440f1dd0f8d255"
  },
  {
    "url": "assets/js/144.c222e0cc.js",
    "revision": "0a9e09c76a1f35c60bd0a419b8b1c371"
  },
  {
    "url": "assets/js/145.32c81f3f.js",
    "revision": "84fe855aac9501396bec143bfc600d4d"
  },
  {
    "url": "assets/js/146.c60cac47.js",
    "revision": "68bf152890fcd377cb940552502581c6"
  },
  {
    "url": "assets/js/147.0960ed01.js",
    "revision": "6b0e5cda7a4df588b4255fa4596b992b"
  },
  {
    "url": "assets/js/148.7ff2a5c1.js",
    "revision": "83a573b8e03e5bcdba5f23866c93a4a3"
  },
  {
    "url": "assets/js/149.31d90075.js",
    "revision": "0cf555d6f6054476438e7df8f5c1c31b"
  },
  {
    "url": "assets/js/15.6fcffc63.js",
    "revision": "9e00e1439e0f69ed20baa969bbf1109d"
  },
  {
    "url": "assets/js/150.6fa7092a.js",
    "revision": "8f2e41758bb4cd4b8451567dade94b32"
  },
  {
    "url": "assets/js/151.657d48cb.js",
    "revision": "e828b3cc984cad5cb42bc7ecbeb17a57"
  },
  {
    "url": "assets/js/152.f310937f.js",
    "revision": "c4787acecdf08ffb1808ed89cfd7fa73"
  },
  {
    "url": "assets/js/153.4bfbdf89.js",
    "revision": "cbcfba640e4e66c42e445b1961ce5ec0"
  },
  {
    "url": "assets/js/154.ddc4316a.js",
    "revision": "11955ba1e856eda8e67e332b087325fb"
  },
  {
    "url": "assets/js/155.2120fd80.js",
    "revision": "3460e3396ef1ab6b5799f4837ac2c4a7"
  },
  {
    "url": "assets/js/156.29c3b074.js",
    "revision": "45c71100a5400e516ed97a687f77dc4f"
  },
  {
    "url": "assets/js/157.c0c72142.js",
    "revision": "767fe834bc929c08ec223ddf9db2ef0d"
  },
  {
    "url": "assets/js/158.d51eb52b.js",
    "revision": "c306f916fc406f2698f630bd9e34a723"
  },
  {
    "url": "assets/js/159.8ccacafc.js",
    "revision": "2bdd76ea5fb8bbc069872b3f5533caec"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.8c56e5d7.js",
    "revision": "4911284b12545e8b01d2c64b4e295e95"
  },
  {
    "url": "assets/js/161.d887660c.js",
    "revision": "f738cea80580a57a41f657310a5ff840"
  },
  {
    "url": "assets/js/162.e46e34d5.js",
    "revision": "52fa8d301191705f1638919c0f3e19df"
  },
  {
    "url": "assets/js/163.fd00174e.js",
    "revision": "b2425ba1ca31576d9a315643f375edba"
  },
  {
    "url": "assets/js/164.e64e1d80.js",
    "revision": "05846f300d435381f580d7cae718e233"
  },
  {
    "url": "assets/js/165.c2c3e501.js",
    "revision": "7ee0b710134da44a82d0e9547c785228"
  },
  {
    "url": "assets/js/166.1fee10bd.js",
    "revision": "42763e29dee84ce20123f0fb95740c1b"
  },
  {
    "url": "assets/js/167.827b5a00.js",
    "revision": "0a9c911df96f6415fbb34baad904783a"
  },
  {
    "url": "assets/js/168.9b0a089c.js",
    "revision": "94ebc60ef054bcb561eec1ae1c95742b"
  },
  {
    "url": "assets/js/169.6f586e8b.js",
    "revision": "722bd8d4f6eaeb1319d4153b662bf35b"
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
    "url": "assets/js/171.c29e1c77.js",
    "revision": "2695746751753c824512f29f3ee45564"
  },
  {
    "url": "assets/js/172.5c54162b.js",
    "revision": "56e282c7e664ab2e0673df93a43dbfb7"
  },
  {
    "url": "assets/js/173.a50853e8.js",
    "revision": "705d7fea87c726d07853bd73a5f63e84"
  },
  {
    "url": "assets/js/174.8ad9ad9c.js",
    "revision": "08e1ecc62b4d9c1d76926a46210e6ccf"
  },
  {
    "url": "assets/js/175.4fa01875.js",
    "revision": "d7004b24607cce27d1a5efbff6da80f0"
  },
  {
    "url": "assets/js/176.1c2288fd.js",
    "revision": "13ff73da46199916bc8d4c8152a3a2cd"
  },
  {
    "url": "assets/js/177.38d6b4bb.js",
    "revision": "e64dd51a5500d7c4c7ff3476abf396ee"
  },
  {
    "url": "assets/js/178.9dfc5fe3.js",
    "revision": "6199c6778d872e84c17288eab23ab026"
  },
  {
    "url": "assets/js/179.31aa0b76.js",
    "revision": "e31657cff23953e54a88e4cc0ffa49d2"
  },
  {
    "url": "assets/js/18.99de7daf.js",
    "revision": "0c4c73b06bb6577d820411b4f8eba814"
  },
  {
    "url": "assets/js/180.e6f30fba.js",
    "revision": "95bb27996aaa99b7fa10871c453153c4"
  },
  {
    "url": "assets/js/181.eab669b3.js",
    "revision": "da8cb41b80600556f51f01109027ea30"
  },
  {
    "url": "assets/js/182.c1c2a48f.js",
    "revision": "b3889077357b5abf9fa41143f25011d3"
  },
  {
    "url": "assets/js/183.c3e303a1.js",
    "revision": "eb6b81583c9871c1f30faa5b68fd5e03"
  },
  {
    "url": "assets/js/184.906ce03d.js",
    "revision": "5f5e5b40bec77ebebc7fcb5c3c29902a"
  },
  {
    "url": "assets/js/185.12aa4cf3.js",
    "revision": "61a1378612270863932378f841dfba80"
  },
  {
    "url": "assets/js/186.f8ab4e15.js",
    "revision": "abdaaafd4de2b8d605f6d7253a89797d"
  },
  {
    "url": "assets/js/187.8c5e9946.js",
    "revision": "4dd47b9cf526ecd637132a60005de6c6"
  },
  {
    "url": "assets/js/188.95d89ecc.js",
    "revision": "224b8ee8504fa27432be1f7197947682"
  },
  {
    "url": "assets/js/189.6b7e336e.js",
    "revision": "e5ff56a46ef54915a60ac468369a37e7"
  },
  {
    "url": "assets/js/19.1319631a.js",
    "revision": "be68c9367d44568351d48d78da38070d"
  },
  {
    "url": "assets/js/190.5a580b36.js",
    "revision": "a371e6a0dddba376857e86284719dd5f"
  },
  {
    "url": "assets/js/191.a45a250b.js",
    "revision": "f5b560aee96a99fecedcc17bcffc6d6e"
  },
  {
    "url": "assets/js/192.bee3bc49.js",
    "revision": "634d652e4f3522ef9af610094bf28d11"
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
    "url": "assets/js/23.ef4e0a77.js",
    "revision": "319f5826f04417bded45825447e2d44f"
  },
  {
    "url": "assets/js/24.444ce017.js",
    "revision": "ccbebca598a2e1d47cbe0831e31d9486"
  },
  {
    "url": "assets/js/25.17b74b6b.js",
    "revision": "65091ff025fdc95f49c5d5fce0ce652e"
  },
  {
    "url": "assets/js/26.fe68b077.js",
    "revision": "560764455e67d5bf6b1f4c43b9a2f3e2"
  },
  {
    "url": "assets/js/27.04bfe5a7.js",
    "revision": "af57e024ba17d1c5d3e8c1475cea1925"
  },
  {
    "url": "assets/js/28.47ebb86f.js",
    "revision": "2fe19a93bd791683af8219778995691b"
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
    "url": "assets/js/31.dc46ee65.js",
    "revision": "78702be8a9c7990676ffd15f709d78f9"
  },
  {
    "url": "assets/js/32.4125cd77.js",
    "revision": "5270c9efc052d48e0cc4a4780d17e3e5"
  },
  {
    "url": "assets/js/33.6faae56f.js",
    "revision": "b444b1797690777cfd8968e84ca986db"
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
    "url": "assets/js/39.eba15917.js",
    "revision": "72e75522200c14c66e6b37345ed01dc9"
  },
  {
    "url": "assets/js/4.a910b13a.js",
    "revision": "d691fb9725d591cfd4b9ca3705f4f7e0"
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
    "url": "assets/js/48.d4e2d724.js",
    "revision": "1be894afe5ef7f3f52fe298261397377"
  },
  {
    "url": "assets/js/49.f875d121.js",
    "revision": "2d0c5668a8249a2564a4ea11e1aeb6af"
  },
  {
    "url": "assets/js/5.e38a005a.js",
    "revision": "88d61af86655ba0f77a2eb1d00bbe81b"
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
    "url": "assets/js/55.f896ccdd.js",
    "revision": "bf19c058983850e0c05b02a0e190e494"
  },
  {
    "url": "assets/js/56.fc6f6bbf.js",
    "revision": "463b1ffc5f5278ca84b95930e3f19bd8"
  },
  {
    "url": "assets/js/57.3cdad42a.js",
    "revision": "281f3250ccf03b5b48f8a396800767ed"
  },
  {
    "url": "assets/js/58.e6d825e5.js",
    "revision": "18aa621395f2a1493c828a9bc1fd2a6e"
  },
  {
    "url": "assets/js/59.80ca92d2.js",
    "revision": "3fab382575bccf2d33915e5f55760e22"
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
    "url": "assets/js/79.dba43555.js",
    "revision": "e09ffa3bef91ae90548959dcc5d08ebd"
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
    "url": "assets/js/84.0ba30ca2.js",
    "revision": "a909b61c5fdea9afce3f3674ab3a2e74"
  },
  {
    "url": "assets/js/85.56ec1c57.js",
    "revision": "754a04f3b8258af510a029b2bfd2c1d3"
  },
  {
    "url": "assets/js/86.210476e5.js",
    "revision": "55947576fe149a5664986797ee0c2972"
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
    "url": "assets/js/91.17543bbf.js",
    "revision": "81f4a5af0034a10a7c63b4522a70b7fa"
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
    "url": "assets/js/95.1f15ef27.js",
    "revision": "2084746f4efc5d4191fcf922aa1242f3"
  },
  {
    "url": "assets/js/96.93567097.js",
    "revision": "2d93c08edaf1a3fef3dd036558695564"
  },
  {
    "url": "assets/js/97.c1b5591e.js",
    "revision": "6b8478e53e4de7f0ea933f29a2954f75"
  },
  {
    "url": "assets/js/98.f7490804.js",
    "revision": "d5e157dad264975887c349e6de3958f1"
  },
  {
    "url": "assets/js/99.e9e3b936.js",
    "revision": "520010ad8526444580c2cacbb1c05704"
  },
  {
    "url": "assets/js/app.e6579aa5.js",
    "revision": "24ac647288fb16132581e8ff8d60de9c"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "e123621e9e8902b72c879afae576b815"
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
    "revision": "3906d2e6eb2fa72d59e15093c71f6a51"
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
