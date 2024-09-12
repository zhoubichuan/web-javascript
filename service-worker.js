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
    "revision": "fe5d6c1e84e0edc0b152698320b40bda"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "454847cfdb98ab4947753f6c0e684b9c"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "1885951c370b6727027fc3430a549cff"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "5525655dc3f5f5555acb377346c846f0"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "223a1687ede690c8c64ce9de8345f457"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "2b83fe6a80d49856020ef227fd3840b5"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "a4c9efcd9909edae51d77fb2375befb3"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "9513f12b3a32ded5f0785d43256f128a"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "e32e2443607ca95d2f95764f6b1a9857"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "a4fa2f8c8bf6743bd7724d2d7b137797"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "b804b6ee68acae666202039dd2a850a3"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "c11be7f8fc904d0cfc62a33c51ccd483"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "93f3580a9a57cd06aa1cb876cbecf220"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "19f7a6f1097c4b6317636f380232a041"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "7a42f6d331b9b9c2f84b547999b1848f"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "2d74c252bfa25d3a11bdc8bf7c614c25"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "83b586a1f57f96b681475ec71e4aee44"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "ae8605113e3db4301ee36e86c846602f"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "ff65cc9fa6faa99bc4f78636bbd4556d"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "93ea84e25dc66b29497757fe45c3a102"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "b1fdf65e1850295a3f39349c23603ec8"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "42f31136b572ae9bd2db8b3d4c898e16"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "9ac1b1023953d64e2b8c27d23ac88c7c"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "d28231573f9bed809e3019ff75066e0b"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "7d009a65baec0b3a23e226495be28d79"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "09c9e5e1cece00a8f3996fecc554f5d2"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "ae449f844392d13c7c66cc9ed88d0094"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "4fb9d4baaa200f49c36d8d44e8b0e553"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "76479c38e909803b0207c12bd7d136c8"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "f1a6593403bb010e36d904ec160b3d37"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "2bb4f31d3853691edfeba8fa21a94a52"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "3ae5c879158b36a9100a50cff73d5922"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "378a4d78365d30615354b26563013876"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "1966e77a4cef41ed6a38c7b44bdca67a"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "ca2ad7c5aa47956932915c42a55b284c"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "8d28d8b93ac3a8935f916780115b6844"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "01c2a8527a803f2b61e83aaa76981094"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "53885871e26e59bec792fbd49d687629"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "f0f43b1e746ab9650d9694570b408945"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "a28498ed0413ab1b7d1e2c393bc41e26"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "43fcfbc1ea34f2105ff575373bd639b4"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "ae3e91a93248b21263d463ce38025b83"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "fb4cb63b654d0ff456ce83ce06bb845d"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "84baef620b18b5e2c029cae7a7b05c8d"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "5ed9224a55158edb15772fea8f687e5f"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "047d16374ca09fbe61efa301ccdd9078"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "d85fc359b60ba3b65c57586d40ae3daa"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "a9e5ccc95bc56b20747d6959afb33f2a"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "789f0c842bbf81b2cd4c201d0f7d6da3"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "06a7e5726148f56b496cc22e85a28de0"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "5dfe8a12633cfb28acf55154bf98998f"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "9e4cf8f94488d9b6c5c10c5901af8a50"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "e1e292c98be3fd6a7285b887a7f0ea3b"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "3ab270ea6cc0d615e956f97bf916f596"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "2c78d7d5d843bd342d9f9a7dee57b1e5"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "c1b7b2b0e3f5d67fb5338a5fc9afcbc5"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "5b4b54d1918df0b8f35f02f923fa2bed"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "f1a9b208439bff7516282758736715d9"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "bf5257c1aa1ffd2c25f104f3e9454424"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "067a191e355c884252ecffbac61699df"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "6566c9e7cd5738147f8fa07954d1c1e4"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "c46d37d94383fbb78bdd9f1a3cb80dee"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "059e8884572219cc5476fc9667476c80"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "7fb843118d196b82a5ac540174ab9215"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "70e84c4e082b57b7e3801770d3631954"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "38e38e299945ac521b1ea79d581d92bf"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "8f9653c9070be4bc85de698dd1f11e9a"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "280e395618f88dd756e34e9853bad276"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "318df6d4f526fdb1b6255dd7da6f87ab"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "39e326fbebefd8a327fdca4bc24f097c"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "a27d00c57f8492e888830a96988a2afd"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "2d9af787c8d8ee0f13dc87d40faf0289"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "c46228db20518ecbd5ff835927a3e8e2"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "141dbfde8c6bfd385a6b127267ffb86a"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "6d2f7e9773add1d6a0995c2324ba0ab3"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "9237400ad08541eeedac68c681f6fdfe"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "45292668b271a1193ca534bfdbe62b64"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "c527d62de6c8345408bd00f10c790d3a"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "041881167d11e5314022f8f9dcc0d214"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "22a38332389b6a1e1cbc96e3f71d7e16"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "8e0f6568e8d3b37c26362df30f299573"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "774a623ea349dc2b8f2f23289b283878"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "c60ad7597bd7c7f667ab8adaba29634d"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "47b6b765e9bb58a4d96505ea7ae05b0a"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "d890b2dc15d5e19851d6d163ec6d1373"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "e35ab560a018bd0ed3cd3f6b70ace773"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "34e52de62738764c89d1a2be4124d22a"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "15c56b33cb8fdcc4dff9d6f9cf45409d"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "69e343ae981e2eeefa0f1bae60a7542d"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "8a1cd657b8e5e0996b7e96e763beedab"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "31ba8c291b3677b4f8ab96633357c79c"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "6e40ac21127c262de04bb1e005bfcb31"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "9be702d2d8ec508498be1c4eb10035de"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "9d7432c7ec7dd9036eaf796b3c2a3c96"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "5968354c16e1329db8183853a4b36f09"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "3bcb13b212a51a89cba07eefbfba796f"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "6ec68a5daba3c18df301aa2e3bc8fe0c"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "52e927eb7178f257e5345739fdc54ba3"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "4bb4e72c70e7864e5911bd379d3206c8"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "22cfe720faebfb4a69f001e339992814"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "99c1d5ade4f34d2df392a93887c45b63"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "6f257e8b5e3868bf4939131f36c891ce"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "58ad266ec994b6947bc80bbc8fbed248"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "8741ab3ef918c4efd080c5352d3d9457"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "52e73ab326e46579beb0cd77a9de9149"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "97458fef47e4f2097a842f766c1d93c9"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "47f5b1bfd815b20c26d400ff116c9403"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "aaa13355c7498e75eaecfbf3cdc7cdad"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "82e0ee36760485de1f32a18b54544ab5"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "b28897b3af742ff40036155a3e9791b7"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "141610eb627fcd7e7f1eb50382426cd0"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "c0f2c8e6048b7f749155546548b8595b"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "5e0446e3257b30bc932acde04b0afd0b"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "ac6ecdd94d717ed0b7cc36b2ef89fe5a"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "2d091ba023c3d29b639b0923204b4098"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "889dc3f9bbc6efa46882e7969de6beb6"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "2515008476b8866596a27e4bfc3fb100"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "2ca283cb50169b722d5723e16a7e979d"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "f4878348b033901178923ebe46899123"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "c460aec1c7bbc318fd54b6dcd25134c2"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "52ae6d760b107c28eb8d70cf5380e783"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "af027515ead41936e5c2abf06eb25865"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "f8e959540e26f54d1139a32b3c02d81c"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "0e47ae3fe3a8adc74ba6fa3cdb689911"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "dc22afbef815d70169731ac0bb02e347"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "d1aea4eef001d24859bb2c25aa2c2834"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "621b9902bb4a54b3c8b073a4fc13088f"
  },
  {
    "url": "404.html",
    "revision": "3f70c741eb4d2f649b203ee863f35bd9"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "0b339f5dd565c69dc023ae03c9227a6e"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "8f4d85a1ff88663771e4b54426e1f177"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "cd7b9064a33e0acc9f23646af43546a4"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "24e69eb219b25f2d4958918e3098bcd3"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "4127df2fde9cf690bd20efbb5cf36faa"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "bda7ee630b6b179a497cfe014ddb5416"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "f68eb6cf0b99eb67efe0c0dc06977479"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "187584254116daeeed815cbe81e6629b"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "d24dfa6a51d271e7f595cf7786eaa35f"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "ea7d6be1d684cb12ee6a027f0785b61f"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "386e362965c2bdf8dfa2cefc01c5886c"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "cffd8e2670800c54d3df9073568ed051"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "15c7164f430edbc847d3d355a4ea0831"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "b9bbc7f1dbe0b4ab2939aa6876246546"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "ee396418be46a0582a4c9ca674f73fc4"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "eac4a13ba839ee675f44da8f4b79776a"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "2405b0137e09bb46ea426cc5d63cea86"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "ca6b127898c0b1081330ac0abf636ab8"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "845de9673adf231e4136a64a6d97cf96"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "75eace63ce8973f51f0b91d4ef652422"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "d9da4735973d073789c4155948dc6407"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "9c5bea08ff29cadb5b9b326dac641ccd"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "3604abfe13d9ecc9a3303a8013cb9257"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "7081985589f42a2f156e61b89d72a2fe"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "454ffb46c0173cabc0087917f93cb530"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "5bc05ae6b82bc1d596442b0f83597bbb"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "c585f0443324366a13f941e50c0aec07"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "eaf6dfc67f3ed0b39efa7f23c269c0e3"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "32956edb3f61de799ecfa908bbf4726c"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "03b2443ee7fde52ba831121a432372f9"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "f60080f5cdd4a15ee947fb84d5707ee8"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "f201670f779f9213ea6cbb661b4097fd"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "c7e5f55eaa288c2d05b5fa4ce7138aa5"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "cca9fd01da9be150b3f7cef89c19a866"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "25d7009461dd76873d35cd235f402658"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "17addb72489de29a60fa23126586d655"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "f4df75ee4025a1ce0fcbc59f640d3a7c"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "57f13062a4751fd96e89f9d66b69478f"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "a680bad0325260d7faf1775afec1f058"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "5377d103b061fe3ade7592e431e1e382"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "1f5de41a6662d2ad2583ef0c8bffdd37"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "c8f954c1f88ddc5c21a355983a6a36c2"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "0e1de07c5252768e57302cc9e9d71ebe"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "a369a07e0c84bd304664e19ad177019b"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "3da89ef0e165b7c9eeebe49f22af1c49"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "0de61863bd6f7c55d628b72c844ff674"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "6d748677201f3a408cfda90a1d0831c9"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "fb30c3cabf4d047a1a958642d03f3e48"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "c3e280cf8fb57eba9bad76db863b8f1f"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "17247889395c967e5692859375d11ac9"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "0f9ee0cbac92a8e2b05a3a783e0fe151"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "f12aa88c49df11bf32f6d01704ec020c"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "a92d9ea53ff803da53dcca7c74cd7198"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "f1b3b88f7e8f8e3083613ccbee226e86"
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
    "url": "assets/js/100.50e459c0.js",
    "revision": "23720e4cd6fd904439016d518681f7ce"
  },
  {
    "url": "assets/js/101.2d862495.js",
    "revision": "48b04da280e9b5886144db8c1591cbd2"
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
    "url": "assets/js/104.62e90cfc.js",
    "revision": "f7c02e2449aea325ac4ae0fd4cfee9ae"
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
    "url": "assets/js/108.39db65b3.js",
    "revision": "47cb319c860c319b59c35209d72e1ed5"
  },
  {
    "url": "assets/js/109.a10f3f9c.js",
    "revision": "0844741ba74af01f860cd267364a469f"
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
    "url": "assets/js/121.cd525b00.js",
    "revision": "df45ff1df0247765ca70ab9ad8c89198"
  },
  {
    "url": "assets/js/122.5d1f9309.js",
    "revision": "dfdf4ac9c85ad9d0492c39cf300316a0"
  },
  {
    "url": "assets/js/123.f10d35e5.js",
    "revision": "b2163d2c9020ebb72049826e646dd20f"
  },
  {
    "url": "assets/js/124.b7cc4b47.js",
    "revision": "e52f234d5d47ac6b3f5e1d3f02beb198"
  },
  {
    "url": "assets/js/125.d7de7c38.js",
    "revision": "6a7a1b73ff51d88fd6948ba8dba0744a"
  },
  {
    "url": "assets/js/126.895ff4c0.js",
    "revision": "08161ff6ca2c993b9379b8816c6c3443"
  },
  {
    "url": "assets/js/127.89996c63.js",
    "revision": "6239e7325230b14f174b918040efc40d"
  },
  {
    "url": "assets/js/128.b8cc9078.js",
    "revision": "b0521d9ef4d32a283e11302d0711fed2"
  },
  {
    "url": "assets/js/129.dd5df8e1.js",
    "revision": "d356bb52d0c831cc784cefe9d20bae1a"
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
    "url": "assets/js/134.3447d412.js",
    "revision": "00a7fcb6c78461cd856caa487a349f1e"
  },
  {
    "url": "assets/js/135.53b56f12.js",
    "revision": "247ff7aa733f01a4c79303c4f2573418"
  },
  {
    "url": "assets/js/136.37d12b41.js",
    "revision": "b0542233d71b2d38ba7aef4fd2341b7d"
  },
  {
    "url": "assets/js/137.ce0cf2fb.js",
    "revision": "f70c1750bbca0236d236385eddcead16"
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
    "url": "assets/js/142.00943d59.js",
    "revision": "f4c880f4aac73f5851bc26c91d4cc805"
  },
  {
    "url": "assets/js/143.136bfded.js",
    "revision": "d15f2366cd7890e96376362235487626"
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
    "url": "assets/js/146.88791b18.js",
    "revision": "f3a971bc44a5d61d1993bc6cedc886dc"
  },
  {
    "url": "assets/js/147.9858193a.js",
    "revision": "28a52ac8562dc9d9eef2d1d356f37e2c"
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
    "url": "assets/js/151.564866af.js",
    "revision": "dc931d301e272f91ef8246ab0eac5d70"
  },
  {
    "url": "assets/js/152.6e59d109.js",
    "revision": "3b6a43161d5109505124cb464cb4c3f5"
  },
  {
    "url": "assets/js/153.3b13c641.js",
    "revision": "039cd48b1e2852386e1fa5413a824882"
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
    "url": "assets/js/16.8bc562c9.js",
    "revision": "4171e3be98e791e828f5373dbaa7e92c"
  },
  {
    "url": "assets/js/160.774b76db.js",
    "revision": "8be78fef3646e3954458eb7d89d464b0"
  },
  {
    "url": "assets/js/161.782013fc.js",
    "revision": "fd54609a83162e2fc0cdfb7cc4420ae7"
  },
  {
    "url": "assets/js/162.d0f687fd.js",
    "revision": "ff5fd035ef34e3f403f9f914d89a440d"
  },
  {
    "url": "assets/js/163.69c46410.js",
    "revision": "798fc44eeb2acb8fb9584cb527d77ce9"
  },
  {
    "url": "assets/js/164.704c23a1.js",
    "revision": "0174a14aaed002280f39d5b9dceec806"
  },
  {
    "url": "assets/js/165.d5d80cac.js",
    "revision": "9b1b61cf576863d5df048128b4c3036a"
  },
  {
    "url": "assets/js/166.d46d788a.js",
    "revision": "fce203fdea92ee9bfb1d6f344ccdfa05"
  },
  {
    "url": "assets/js/167.71c3e7db.js",
    "revision": "6b3653b2319b3bc80f7c43d65bb4bfeb"
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
    "url": "assets/js/17.3d3becd7.js",
    "revision": "c48a876bb38dc62cc792e6bba8b9fd35"
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
    "url": "assets/js/179.c54d8f06.js",
    "revision": "d465444a2e705c3e4965310f12d368f5"
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
    "url": "assets/js/181.f0c2fcf6.js",
    "revision": "ff2dbaf0c62156ceb41f38391d044a98"
  },
  {
    "url": "assets/js/182.320b35b4.js",
    "revision": "5997d5d66f70e150eeab7e9eddb6dc6b"
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
    "url": "assets/js/185.8e82eab2.js",
    "revision": "30e452cfa5950ad37464c625f348f1c9"
  },
  {
    "url": "assets/js/186.35428c0a.js",
    "revision": "74fd0b95e5a102a6a5874969cc7898c5"
  },
  {
    "url": "assets/js/187.23bd54a3.js",
    "revision": "a6c3f388af6b59ce62fde499672fb00d"
  },
  {
    "url": "assets/js/188.3c166483.js",
    "revision": "8c50e38ff19639b7dd4d7b843d497ca3"
  },
  {
    "url": "assets/js/189.ece0b420.js",
    "revision": "9aa19262f15238075b1a2d8d1d5d416a"
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
    "url": "assets/js/25.4b8aa618.js",
    "revision": "f69cb7aa7d43edb384a4493d332205f9"
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
    "url": "assets/js/31.e48d3bcc.js",
    "revision": "010fb620dd65ec00c840a1bd92a766ec"
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
    "url": "assets/js/34.4b4d45e7.js",
    "revision": "fd4935fd6d7b2a2e5b6a86742866baac"
  },
  {
    "url": "assets/js/35.8535e543.js",
    "revision": "a2db22e9c3fcce70b4e2ffc7c8f9e877"
  },
  {
    "url": "assets/js/36.5b8b4db2.js",
    "revision": "f2cf5d37546b00815efea8017ebf4014"
  },
  {
    "url": "assets/js/37.00ff46fd.js",
    "revision": "7f10a46445c81f2eb4da74518afb7292"
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
    "url": "assets/js/4.fc2e2d66.js",
    "revision": "49628625dc14e1ccae23f8048d4d208e"
  },
  {
    "url": "assets/js/40.a860f82b.js",
    "revision": "2940d99fffa43b5156b9086f76dee368"
  },
  {
    "url": "assets/js/41.5365913c.js",
    "revision": "0f9e72b30bd763749616360eb473a0e9"
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
    "url": "assets/js/44.354ae65a.js",
    "revision": "1f6ee6cda303b08964c8cb1cdb630035"
  },
  {
    "url": "assets/js/45.b9333c7b.js",
    "revision": "f7442e0159c09ee83973bc93f9a8480f"
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
    "url": "assets/js/5.792aefb7.js",
    "revision": "7b1196e38f012a751319f8eb3126cb1b"
  },
  {
    "url": "assets/js/50.18f2e341.js",
    "revision": "37a8ed502df972c9bd0325ed06d25cf2"
  },
  {
    "url": "assets/js/51.3a2e8015.js",
    "revision": "73923b0e082616cf78eec9786540de7d"
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
    "url": "assets/js/57.2a18afb5.js",
    "revision": "89a2fedc75dfd6b8a26102dd75624495"
  },
  {
    "url": "assets/js/58.2b8e982c.js",
    "revision": "f252615950b3d28b1cfddc193f3b1461"
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
    "url": "assets/js/60.039cba37.js",
    "revision": "472e9212b07ee2855cfb3801a373f243"
  },
  {
    "url": "assets/js/61.df8030da.js",
    "revision": "5da3433d16308ef377d8d21c26792d63"
  },
  {
    "url": "assets/js/62.a254fdfc.js",
    "revision": "fb8e68ea01eb2e23f05555e95a7fa13f"
  },
  {
    "url": "assets/js/63.58c14291.js",
    "revision": "484ec5ecc618af87bef53e3724e4503f"
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
    "url": "assets/js/66.5aac3fc2.js",
    "revision": "8611d673ec6bcb81c166b3311a6d3940"
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
    "url": "assets/js/71.62ddec74.js",
    "revision": "c755691948a47c8b21a3f727a9bc0f5c"
  },
  {
    "url": "assets/js/72.09d701ec.js",
    "revision": "40a5e82792758ad15a03690a1dddffcb"
  },
  {
    "url": "assets/js/73.0835e0f9.js",
    "revision": "f59fbc60611a4e0f5cb2451db720e1b6"
  },
  {
    "url": "assets/js/74.03c729d0.js",
    "revision": "5929bdfa41d04d63eff45eee86a5deb3"
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
    "url": "assets/js/77.469a47eb.js",
    "revision": "6e111c9a132d110275fb8322298baa47"
  },
  {
    "url": "assets/js/78.151421e2.js",
    "revision": "1aa6aaf42688c97ff87174531501a80f"
  },
  {
    "url": "assets/js/79.df8902e1.js",
    "revision": "111eb501cd423099c11c455c27aed7a7"
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
    "url": "assets/js/84.0ba30ca2.js",
    "revision": "a909b61c5fdea9afce3f3674ab3a2e74"
  },
  {
    "url": "assets/js/85.a4f4df44.js",
    "revision": "eda81924c288ca643b63d5440f301577"
  },
  {
    "url": "assets/js/86.c1cf644b.js",
    "revision": "5787bf920ad9f731421c8f5984a2399a"
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
    "url": "assets/js/91.52ecf6ce.js",
    "revision": "f6b32c6757504d944f54d6ea99893b99"
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
    "url": "assets/js/94.75675df1.js",
    "revision": "ab2cd153eeb8343ba808fb384e66e40d"
  },
  {
    "url": "assets/js/95.a9ed630c.js",
    "revision": "edc6155ac1e722e74811c6622ab03c08"
  },
  {
    "url": "assets/js/96.efe897a8.js",
    "revision": "f572d8c1ab0c301f4ae4872ff003df22"
  },
  {
    "url": "assets/js/97.568fad9d.js",
    "revision": "fa7364d94275a29e6d165c20afe55a9a"
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
    "url": "assets/js/app.893a03a1.js",
    "revision": "02cd847377297b5bb7c1c87e290d8e19"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "95c24f01cac6693b32938f3344558c5f"
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
    "revision": "a10ea43538965e5de8fb01f6333d5404"
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
