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
    "revision": "c744f80f3d77cee5f700ba32249b97e5"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "b6c888552b8b7772fcbb5c937e67d53e"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "cb5a245db477e65969181e41d07efc49"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "9106e397f34d6636798b5a4f04afe404"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "c4694b8ee3dc1e531c20bfb1f9443161"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "62cf3278b90a83dad6f32451bea79705"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "4840347439c941a0bbb9bd57ca2ede81"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "9e0085424f88d65210de6b016310d181"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "19d1631fea3ff13e449cc535550230f1"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "47e962370f6e229714b77834539b25c4"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "07c9837edfc6be27e4e1a8f13669bb09"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "f3bd96b618bbd4baa127743947d9dbd8"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "7c93c72d0454a892f2e115881b416bc7"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "98d71807116ca1d44ef15f8a29b0e956"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "9c399b72a426439298d07bdaed6edcba"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "2eff29fa922d87d91570b08427a7410e"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "d74e7e39ab5d28c1253f6e191eefb2de"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "7a8620656de778d7482542c4357a2854"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "9770809c7445b97d63bc1f0f102d0cbf"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "ea829291222f2d9256e945d40e2455fd"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "c16b148adc826bb243e2f441f3eb1678"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "32654f523cd9c855ceb592021a6943a3"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "7a12c40e8a429aab6af5988dd5d79bf6"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "c34bab0aa898b7f2f9158834381af021"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "01b0a75ebca6a5e5f4ae73f7128ad9cb"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "98e29094d500c6c12a366f89ed3dc917"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "5c8a18749ee0ddff83f4d9f5a9c7dfa7"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "cee83e67747258dc59ea1b45dbd5c5be"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "da3893ac861691a0bfae9f298bc38004"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "6de2cbe9c485456cc705c3882fa15ce4"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "e218dc6392da06398aab35c49bd6b7c7"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "c742f97c2f61f9c6ae4e6ebdc5c540da"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "c3c68a2ef8e765a2100f015e0692c184"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "7b3c69aed2d3f93a8baff6a497ad6da1"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "0565b748effdc1cfb20d2f85874c2e83"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "d250c88838e55c8cd18834ee588848f0"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "1189d6624ab0313ba3ba63e88483b19b"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "4b94ff22f9a1e50eeaaa1cf30a0a2d5a"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "87d2149a07a00dcd68f422a0ae690124"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "68c7ee84cd79bf82e41c2fc495b16020"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "f4569c27c2c252eb30994f5de8b77aa7"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "f5fec38873f8a115e4a784bae3e2aeaf"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "8df23eb978cc34c63d07478043966862"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "d4839a8e61ac9e4d1015fbb28e0ec1cd"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "344425aaee382a573561d267d778ce45"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "50d34d293038a7a15f1bbe1b1767bc3f"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "ef4ed918da717d039936bf12a5a88047"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "b994e7212c90199cfc1c56417b9ed22a"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "a2996d44f4826f053fc86e42787e326a"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "df6dea200a43bf5981d58cd3346d5214"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "2a108216d81f0f176a147b99505e704e"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "d874d759999136318ffde45678aa8d8c"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "748a2bc8b5e21727ae0e86c6ecd9252d"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "10a48afecd2c6df9e6f57049b8a14778"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "ae6ce455b5723a500b3830c35b15eb15"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "012ec8726f4b40a9b2639f5e109d07c4"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "b9124f18ff9e89ec73f4f5cc9f62617c"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "3d9d9c0b8e53ac626107e67e064e3eeb"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "f0be479000dfda94bbbd45edec2a0514"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "b90abda0e89a07598ba4f190c21054da"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "a15774f63c6a92001ad1d18aa14737ae"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "4a27f6033827bf07fad4674abf86e195"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "cf5b0f9a1dff7fc499fbb118502230fb"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "aa03c7e9490b39a6455a48cddc9a9b96"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "a1caf8955b980f30e7568e430dac94c6"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "d6bddee493a22d926358d12ffdd93457"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "47cfdbbb4b677d6e45ec4bcafee9283b"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "cd5b161a6178bc4440cf82453abe5343"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "c7729f823159443a0aff80642632309b"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "3ccc2501ff5693d6b3c4ae5bcfc63f63"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "5faff359dde987cbbef79febe7d04d43"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "0fda387ea3adfeaea93d887c53965598"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "70927a094393841818c2ff49c3a178a7"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "fefd372b98b16f1086f6fd32ef3b80a4"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "685cc28b4a845ec080d0457e4f36d38d"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "94a11b5b9131702c19fa39f3bb8fdabc"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "78fd0cf7c12d8c4c2bedb5fe6b0d65ca"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "375826da1acab49519095a40dc0e5167"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "7438221d1398a00a248599abb7d17efc"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "3ce49845f18c8f82de04e6f5fcd99800"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "421f34f003b36f4f2eb2338132f50c7f"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "8b79e7548a5c1db67840acbc4e5abdc9"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "f5eaa861ffc92736e63a668afd646ee3"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "2417e8e9b63766c62ab3d5afa7952fdf"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "750b5b22d5ae8467489cd22355c671ce"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "a95c4d98de8a8ddd9f96d4bf12c35ee6"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "118d6f831ad15c6b284ab43523c68585"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "2188f2f1db8e8a5021136ec60ac49117"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "e74de430f3734ee855ea48249e7ca59d"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "adc3e354acdc0b11fcba8885dca1fd94"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "577fa1adc22a5f76210b7ecd39bf6537"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "3fc331edfd80976ba1631cd7578dffc8"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "72debe40e5d821aa7b355cae54cefd05"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "307f4604bc4dd039aa4bfb64a84351fe"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "b5690735a653a8aa59117c317939f1fd"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "6e91d1a59f4089d0b3e316f9582af521"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "95a0e4346d79b4fb28f4da0fdd51ee28"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "8a9ae9c777a79ad5fbc4331b2321dda2"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "4cf6a45b4891ef7cda20808be2ff868c"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "45a5c8e1106546b5ad982e671be5d6a4"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "0ce873063e69ff9280d0bc00ebcaa14e"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "bd49b655c8aa335fc326c1637d1c38a5"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "feec590f190f9b87f0f99548ad6320ed"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "edb9c7e383d123b17c0f40ac79a9e61b"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "3f9f5509e7a4eb2742176eda27a9cd78"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "be646e3468c2faef34c62d9357356b7a"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "6dfa1fec8af74bf892f7d733e45f9ae0"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "7473809c762444faebdc48edd3a4ad92"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "4264457eff7e8ed12174aed35bf426d7"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "272a33d78fbc672fc21a300a8ea54c4b"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "602320be1f93ef581e55407dd421c468"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "24ba4f18e1408718490cdaa17a9b6fa1"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "12c958b9fdd7842c40e44d99ad0a75c0"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "160b85b834a2f859f9fa71a4a88a3683"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "a7464e73c66473a4f0899ef9c1cb9922"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "86bc63ccf794cf5e581f516eb857ef3c"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "65b1bff094b7464b7fed9a2a743e2bf0"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "429f8d0781c0907ce9ceedc032d4951a"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "f5df454c0dd56cbca0b63212d627fe10"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "6986adc95f813e40305bbc611f8670eb"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "802b395e2660684443674b775058181f"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "692e3d704384b526559b58707979c9f7"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "f0d1096e628de6f2502bd31c7deb259b"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "ce76e964add2eab7acbd93c4c0c2e6e9"
  },
  {
    "url": "404.html",
    "revision": "6f92562083dc4cbc72d04758f3ef326a"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "b29bad44146d79431dd250ded5039823"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "770950c6b28fef02ab9749a6290c1435"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "746c60b8d92541b02e80df4f7a4d1a48"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "d48183e4a5a23bbcf81dbc62e89aca0f"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "4b0d8309b7d663a8f2d8825b46f6076f"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "041e48a68dbda1aed5e8d9859f55f706"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "e5c699eadd8d3f4e5d8cb3fa46ebe597"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "c94bf402a26aa5dce8204c310e4cb333"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "e973695e529232ba9e77da3572e41344"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "5075b99a972dc764ad3e22d552cecdb2"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "b09f68626b263dfc16faf0768a9d856c"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "fe6e9ce0e5b4ceb32ea1085f22698a25"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "a8848d127fec39b388dc770d2bfd81d0"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "21ee20dafa0c0f0e8e013a328f1dbb19"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "2c1e7f5c574388319e594d7b0e6178c9"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "9ecc040f3d049734e23a806f03b09ed2"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "aec4f91b52495b8badc6c19474873b21"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "13c5ddc472e4abfcd335711d9bd5e242"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "300f7588efdd42d5c89aeb14c6978bd3"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "7bfe4f380b014a651c2576cbecec1780"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "b68990b8029f417046456bb5712c2f99"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "32e28e37d0b64841169288d392b57a2b"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "95cd285449107043a00dba2043d6a306"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "7eeddad58a0a66696596ae534b0a3492"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "bf67829342681e88419ad46b58d5b2e4"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "6af1a264e9a402673a11c99dc611598a"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "e69aef04e30fd0e6ce9a06badb353a9c"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "94aebaa143091c910cce41840e15f0fe"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "25e2fd498cf780cf8c032bf77b6dc935"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "c77e93f0d54f21b1572311a9392aba13"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "3e9c942afc739c9965331391c19c3ec7"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "a6e07f99d1f9d609bcb0557a7d6569b6"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "b919c11a5d3121b961b71fcd04ee2358"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "e025b217dd792e2e86cc5151e09567cb"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "3170c184beebb09e11f34fa72aa1a543"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "eeb11a723ee95ecafa913593b4d30a4b"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "e35ab3872d1b6ec087e76e3ccf1bf4c1"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "57ce7099212cf1b7e6c20558abb1d60a"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "21db6d280b751e0dcfcdcbafe71d4f27"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "6ae611d168d439977fa683226363c54a"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "35ddb95a682f224eebe3405f9eab195f"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "7fab3c8eeb3a70ca434ac28a77ee509b"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "25cf2e7ac384180fc9b703c9a4fcd549"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "913f3218dfc1629bc6a4f2e31e899f96"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "a66bbb072fa5b63669f3be900b472cd0"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "5e0e5cb8985f10ea10bc0bdcbafd5c81"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "022109c2fbf7086ca477fcfbbe03f3c5"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "3a34cf0efe5775921179d11d5b48bed7"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "6fc9d567911c6c9e906edf23f990cb9f"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "4c176b5acd821a261cb72a62a7890900"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "33b33c8158040f6196d049ea74365db5"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "9cb7b19710a7bafa61b89fc852a73024"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "2487989c3fa27716a59a4cd91a2d3a29"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "4f88f72811522eef0c47501df2a49053"
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
    "url": "assets/js/100.4cc4628d.js",
    "revision": "40e8a82d0848039b36efc8959bda0801"
  },
  {
    "url": "assets/js/101.b2127bb2.js",
    "revision": "5bfc1cbd5fa64726b7403e120de9ee20"
  },
  {
    "url": "assets/js/102.fbe7b669.js",
    "revision": "a727ff602827d967f461b9e0268231c2"
  },
  {
    "url": "assets/js/103.2f459d98.js",
    "revision": "bf95005601a4d6a038aedf894db58434"
  },
  {
    "url": "assets/js/104.392d8d9b.js",
    "revision": "d6aa8798c1b4514ab1111503ba2aa1e2"
  },
  {
    "url": "assets/js/105.623f9f02.js",
    "revision": "3b6e9c675b7d517c998ce6dec30931d8"
  },
  {
    "url": "assets/js/106.f6237427.js",
    "revision": "90ce81acd0bcbb32fa1fe0037a0c0507"
  },
  {
    "url": "assets/js/107.34440215.js",
    "revision": "3566df79c0acb07605bf4ec77d029aaf"
  },
  {
    "url": "assets/js/108.32770e90.js",
    "revision": "20c326c3bfd60cae7dd476c167bf95a4"
  },
  {
    "url": "assets/js/109.ee20bdbc.js",
    "revision": "95b5a282c2e73c682a14e0133a15b41f"
  },
  {
    "url": "assets/js/11.07dc3b33.js",
    "revision": "b830505e859fa8ef5756d8f653235e28"
  },
  {
    "url": "assets/js/110.76089aa1.js",
    "revision": "4ab38e53668439a9def852e138346584"
  },
  {
    "url": "assets/js/111.029df7a5.js",
    "revision": "6d74a9bebea4ed03900467f0042b99fb"
  },
  {
    "url": "assets/js/112.acf05727.js",
    "revision": "238cd1660032951663d310436ddb18d3"
  },
  {
    "url": "assets/js/113.079fbe79.js",
    "revision": "4977ac9b935f5b070366158943e94ccc"
  },
  {
    "url": "assets/js/114.591762fc.js",
    "revision": "08cfe3cbd592c4f73b59a9ba10f074d0"
  },
  {
    "url": "assets/js/115.09c29f0a.js",
    "revision": "c3d78144a4755f7bfcd5306720aa8580"
  },
  {
    "url": "assets/js/116.92eafff5.js",
    "revision": "864802954d6ae72729293190ef062c97"
  },
  {
    "url": "assets/js/117.7d404f39.js",
    "revision": "b59737ba9af520d37087445dcfd08313"
  },
  {
    "url": "assets/js/118.7117099e.js",
    "revision": "b81c5723f8d480fa747e63f82dff2571"
  },
  {
    "url": "assets/js/119.4a06a7f4.js",
    "revision": "15b3069dd3b817b4754d8ff085de5f47"
  },
  {
    "url": "assets/js/12.08774035.js",
    "revision": "b217c0937db3d335d68eb2002bbda97d"
  },
  {
    "url": "assets/js/120.5127763c.js",
    "revision": "434dd90d8b69e3fa1b9b58e70a8e8146"
  },
  {
    "url": "assets/js/121.7c055901.js",
    "revision": "7e4925fec40dfd981cd224cf8e7b91f3"
  },
  {
    "url": "assets/js/122.ed965f8b.js",
    "revision": "03d03f20209c52f7a6289ed46182e704"
  },
  {
    "url": "assets/js/123.f6a78a11.js",
    "revision": "d8cf58113224270a7d5f2ecd07e24b57"
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
    "url": "assets/js/126.df53ffbf.js",
    "revision": "0436831e39da16e33c037ccaa90e7ce2"
  },
  {
    "url": "assets/js/127.2859cc26.js",
    "revision": "8a70623fda7a48350c8b8e9ca9897b95"
  },
  {
    "url": "assets/js/128.899a4c65.js",
    "revision": "c1d10814362e2b3be526d4e99276d6af"
  },
  {
    "url": "assets/js/129.7799ee0b.js",
    "revision": "8f645efe57a63cf452836dcdb1f86681"
  },
  {
    "url": "assets/js/13.9a70d5ad.js",
    "revision": "f50813fd0b176e8cf4a87fc06eec8ce4"
  },
  {
    "url": "assets/js/130.8c16544b.js",
    "revision": "7c553d98f4dd010536f3f579c100e4cb"
  },
  {
    "url": "assets/js/131.918892a5.js",
    "revision": "c8a265f38e694774f900936c4b2667f6"
  },
  {
    "url": "assets/js/132.d7d1f41f.js",
    "revision": "125a28a72dfb2ce2dd5831f89445754f"
  },
  {
    "url": "assets/js/133.8eecaa0f.js",
    "revision": "0ff883f2ca18b98c2bbc9c6f8e227799"
  },
  {
    "url": "assets/js/134.14663f37.js",
    "revision": "329bc6cf6ea474f1f6a5287e174f49a1"
  },
  {
    "url": "assets/js/135.f937bbb6.js",
    "revision": "f9bbe95d9ba83cbcc36957c5c1f669fa"
  },
  {
    "url": "assets/js/136.d544d9da.js",
    "revision": "cf15820ec30fbb0ce2b8b7970da493b4"
  },
  {
    "url": "assets/js/137.b37ac2da.js",
    "revision": "ee52cc61fe374b122176355208ae55ac"
  },
  {
    "url": "assets/js/138.95b9f3d0.js",
    "revision": "2eae1ddaa50ba1758bff25d7445d1a62"
  },
  {
    "url": "assets/js/139.b6fa4aff.js",
    "revision": "0ca105f1c1bd938426ec68979d175110"
  },
  {
    "url": "assets/js/14.89c55900.js",
    "revision": "de9315d423b2537db47c706f2dd5c30f"
  },
  {
    "url": "assets/js/140.391699e1.js",
    "revision": "021bdfa2868db977d70bdf97b5e90d17"
  },
  {
    "url": "assets/js/141.adb8d28e.js",
    "revision": "40ed197dd0e1528dd9c54941b4c35311"
  },
  {
    "url": "assets/js/142.73517686.js",
    "revision": "2649f47e7c11aac80c5f6cc4eeb3458b"
  },
  {
    "url": "assets/js/143.4956bebb.js",
    "revision": "78e9a0f684b4de9f82e9d5780e6a0f2d"
  },
  {
    "url": "assets/js/144.31cfc4f6.js",
    "revision": "31dae4085dbd14edd327cc74a102f52e"
  },
  {
    "url": "assets/js/145.b31eb7d8.js",
    "revision": "ef3f31417b6a95a4581e9b6d780a883f"
  },
  {
    "url": "assets/js/146.95ab3d77.js",
    "revision": "662304b05e68f8cdf4e3acbbdf343978"
  },
  {
    "url": "assets/js/147.1c91d5fc.js",
    "revision": "ffaf202442f096f9e46c374511780cad"
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
    "url": "assets/js/15.c4857656.js",
    "revision": "721217f597f83fffae6e97b895f51657"
  },
  {
    "url": "assets/js/150.afb95b53.js",
    "revision": "c32ed1103d473662f0d5137b66fee4a1"
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
    "url": "assets/js/153.0229a703.js",
    "revision": "14d562947cf31ffba319862943459f1c"
  },
  {
    "url": "assets/js/154.75c65295.js",
    "revision": "3e5c1140fce30bd60b2857d6fc21e504"
  },
  {
    "url": "assets/js/155.b066674d.js",
    "revision": "212549b2c6c520b1ce1b29a3e397a371"
  },
  {
    "url": "assets/js/156.7307d673.js",
    "revision": "82894c5e4433fdfa9c47f3e2114825d4"
  },
  {
    "url": "assets/js/157.69938439.js",
    "revision": "c2e971e00f4e4fdc1fda6c824c0de0c9"
  },
  {
    "url": "assets/js/158.037c3db6.js",
    "revision": "7a28a950a2e97e06398dc46eac576744"
  },
  {
    "url": "assets/js/159.3162f45e.js",
    "revision": "c14c9a6ed43c8760e7b23a3aec6ae156"
  },
  {
    "url": "assets/js/16.fb180728.js",
    "revision": "c206193ab402a31a67d2ca24f219f0b0"
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
    "url": "assets/js/163.49413d80.js",
    "revision": "173a0313009bace151b520eb3332d977"
  },
  {
    "url": "assets/js/164.b7411683.js",
    "revision": "ffeaef65fedddecd3163211150d07c2d"
  },
  {
    "url": "assets/js/165.bf300217.js",
    "revision": "905fe404d321d7e38b467a491731b1ab"
  },
  {
    "url": "assets/js/166.579764a9.js",
    "revision": "78c91edeb7db9440556f536ad4180ab9"
  },
  {
    "url": "assets/js/167.e8c19c6c.js",
    "revision": "9cea24cd717ac85cb1e55a3b086034d9"
  },
  {
    "url": "assets/js/168.738a8dac.js",
    "revision": "07e6aa191c85699a3ec41260c22ec316"
  },
  {
    "url": "assets/js/169.cde1c7b9.js",
    "revision": "4905b9acc0dc9d4b3d79065577d73947"
  },
  {
    "url": "assets/js/17.3d36a152.js",
    "revision": "a2df5e01a4b61da7c0ea47081f9b6843"
  },
  {
    "url": "assets/js/170.2c068d78.js",
    "revision": "f6bc21ba6e2689971c453305e09a6884"
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
    "url": "assets/js/175.10aec927.js",
    "revision": "6afb6aec426202dcc16e517611d5a638"
  },
  {
    "url": "assets/js/176.e2ff6446.js",
    "revision": "8f0139b80d9d4d5dd49b85290ad66a0b"
  },
  {
    "url": "assets/js/177.39855111.js",
    "revision": "dc7b9769abecaa2d09a3f410bb4d8c06"
  },
  {
    "url": "assets/js/178.bfeeb830.js",
    "revision": "748b240c695e8fb0da7b01a1368135ec"
  },
  {
    "url": "assets/js/179.0a74afd9.js",
    "revision": "d50b0400c4dd1c37355e17007e161154"
  },
  {
    "url": "assets/js/18.962a8953.js",
    "revision": "78e21851331b538150fdfafe205424fd"
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
    "url": "assets/js/183.da06f4ae.js",
    "revision": "ad83d36aafff4bd9ec188518c6cf4425"
  },
  {
    "url": "assets/js/184.05d5354c.js",
    "revision": "d69117a2a02133e952848886c3459c72"
  },
  {
    "url": "assets/js/185.851d816a.js",
    "revision": "368f4d1f8eb615d18953849d4fbd1434"
  },
  {
    "url": "assets/js/186.131bb292.js",
    "revision": "38301a22719b21ca819aba4d38236412"
  },
  {
    "url": "assets/js/187.028fac1b.js",
    "revision": "7976dfa4273e50fbcc2568eac60eb3d8"
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
    "url": "assets/js/19.979be69d.js",
    "revision": "8db660d491917a2a032db9eb76abdab2"
  },
  {
    "url": "assets/js/2.2a57dcd7.js",
    "revision": "02edd57afaf8b034d36b462ac4ec6737"
  },
  {
    "url": "assets/js/20.8c271d8b.js",
    "revision": "3de5e0e85941b06f3eee256efd491c0e"
  },
  {
    "url": "assets/js/21.9d39df2e.js",
    "revision": "9634477d1ed19e44b537e8bf84fba54c"
  },
  {
    "url": "assets/js/22.f78fa8e6.js",
    "revision": "5bef81f19794040ea5e2a84f4d5d8851"
  },
  {
    "url": "assets/js/23.6dcd318f.js",
    "revision": "c65fcdb05ad65cce5dbec46ace1dc1e1"
  },
  {
    "url": "assets/js/24.fac68523.js",
    "revision": "3b74709b19912937dd1d169e5edf7cab"
  },
  {
    "url": "assets/js/25.8d04aa60.js",
    "revision": "888a5aaeb134a4f44e23a82423698ac4"
  },
  {
    "url": "assets/js/26.96c2602d.js",
    "revision": "14e204db384a53ac971d3a5c1ff2561c"
  },
  {
    "url": "assets/js/27.2ba19be6.js",
    "revision": "b0d9da15197a0861db8c60fd1ba7f186"
  },
  {
    "url": "assets/js/28.569b124e.js",
    "revision": "2302d00c8f87eb3c257de1bc304a86de"
  },
  {
    "url": "assets/js/29.61ff2bed.js",
    "revision": "2b4d9ad19191e29d0dbbdd7c11457425"
  },
  {
    "url": "assets/js/3.a7908033.js",
    "revision": "2e54eed5e5b51f9898fc7098c8d90203"
  },
  {
    "url": "assets/js/30.095b9a72.js",
    "revision": "8a1d68209b70e182104461baaaa3e1b7"
  },
  {
    "url": "assets/js/31.f4050518.js",
    "revision": "97580c445b268fd4bfcfe0bcab400988"
  },
  {
    "url": "assets/js/32.7ca987dd.js",
    "revision": "15e3f868539f3f1b053af013d7e2e083"
  },
  {
    "url": "assets/js/33.5082f91c.js",
    "revision": "c1df18cbb327edf9c4f6ecb4f46fd8c2"
  },
  {
    "url": "assets/js/34.3c1ca791.js",
    "revision": "d4b8570abca9452739c0299c46ca7897"
  },
  {
    "url": "assets/js/35.75fa9e74.js",
    "revision": "f5b8b1fe69686fb3b271ab1ccc0064c8"
  },
  {
    "url": "assets/js/36.a3113c3d.js",
    "revision": "bdc29bd3513b55af9f2b9fe303d734bf"
  },
  {
    "url": "assets/js/37.d07a1572.js",
    "revision": "00e5882d25b918c9cf5f0664c53b61d1"
  },
  {
    "url": "assets/js/38.ee037dcf.js",
    "revision": "4570d9a1a07e6e3c334fdd209bf462b7"
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
    "url": "assets/js/40.dcd8d947.js",
    "revision": "ee52599940ffb4f503ee2ef0c637d792"
  },
  {
    "url": "assets/js/41.1b7e43a7.js",
    "revision": "c5589a1e204c84b1578d526b1667515c"
  },
  {
    "url": "assets/js/42.66a998b2.js",
    "revision": "ca9b51b29476f0d6ecb9a4cca2d89c2a"
  },
  {
    "url": "assets/js/43.ffeac49c.js",
    "revision": "f9690de8e3f8456e218452061811c72b"
  },
  {
    "url": "assets/js/44.3b258ada.js",
    "revision": "320aa0628f21598452fc5a9ae6bab0b3"
  },
  {
    "url": "assets/js/45.80ab3c49.js",
    "revision": "51b702a940d7ca8683f60129f365ac60"
  },
  {
    "url": "assets/js/46.3f1d2624.js",
    "revision": "a97141b54cf3d544616f3ee100463108"
  },
  {
    "url": "assets/js/47.5b001473.js",
    "revision": "b0a7a660549071484882bddfedcc5180"
  },
  {
    "url": "assets/js/48.51658199.js",
    "revision": "1712377b23621f2a59722a00a12e5202"
  },
  {
    "url": "assets/js/49.b3b697d2.js",
    "revision": "2f0968de265cb9804ad20d0b584d030f"
  },
  {
    "url": "assets/js/5.a95eeadb.js",
    "revision": "e4db72e1005bc6fc59ba5944e48f5b0a"
  },
  {
    "url": "assets/js/50.e2ae1783.js",
    "revision": "818c144af2543bded332b14f6bcc0b7c"
  },
  {
    "url": "assets/js/51.c62c2086.js",
    "revision": "6c96b255357a252fb428135c567f7da2"
  },
  {
    "url": "assets/js/52.30cece5f.js",
    "revision": "f75ca3006c2dcb3fb85c203a097089a0"
  },
  {
    "url": "assets/js/53.daaae420.js",
    "revision": "0d2ce3c4b753b09e5c6a8c44b9f47ec8"
  },
  {
    "url": "assets/js/54.ddaa98be.js",
    "revision": "ab760800b6e9135ec1b2896b83f96125"
  },
  {
    "url": "assets/js/55.6deb9701.js",
    "revision": "375297b80814c692c2ffa817275c3831"
  },
  {
    "url": "assets/js/56.861ff4e1.js",
    "revision": "9e34569e61f7b6d813b71270aace7728"
  },
  {
    "url": "assets/js/57.864c13bf.js",
    "revision": "2d6523de155dbba9b4f67c42f96a8bac"
  },
  {
    "url": "assets/js/58.bd2f0024.js",
    "revision": "4ff4b3ef2c59e746b5f6aa2f3cb25039"
  },
  {
    "url": "assets/js/59.5835336e.js",
    "revision": "50ce9d26c4f3c148b0d0ed00653cc8b0"
  },
  {
    "url": "assets/js/6.4e4c5604.js",
    "revision": "f3209afc98326a4e9def67b96156fa1e"
  },
  {
    "url": "assets/js/60.5820e538.js",
    "revision": "2fd6f4d11767b377cca58945ab5be1db"
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
    "url": "assets/js/63.504ce90d.js",
    "revision": "ed7756df216ce4c5eaf49fc6d90bb87d"
  },
  {
    "url": "assets/js/64.622b69ff.js",
    "revision": "1609795949144e956269462d323b95bf"
  },
  {
    "url": "assets/js/65.321b8eb1.js",
    "revision": "7df72890580f41bf9d9301c86c8dca8a"
  },
  {
    "url": "assets/js/66.69324818.js",
    "revision": "75f992e4ef96adba497e5d71c4733e2e"
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
    "url": "assets/js/69.0381f8ee.js",
    "revision": "da389461502e7fbda88305f6c02c58cf"
  },
  {
    "url": "assets/js/7.16e3e98e.js",
    "revision": "88113c8f76fb7332f6b72bd275bb0f45"
  },
  {
    "url": "assets/js/70.ad3749dc.js",
    "revision": "e7ff23b7f658e1240a9f128727b49bb4"
  },
  {
    "url": "assets/js/71.a199bc92.js",
    "revision": "4137ef5c018426ce987aa3ff625acc3e"
  },
  {
    "url": "assets/js/72.7ffc9588.js",
    "revision": "bc006c6e1bab46d42959abda3efe06cc"
  },
  {
    "url": "assets/js/73.8d892e9f.js",
    "revision": "0f80db8b533681fcb40698672c05b728"
  },
  {
    "url": "assets/js/74.811f2749.js",
    "revision": "e650d56c4c9777e37f8a5074dae01e23"
  },
  {
    "url": "assets/js/75.278b74f9.js",
    "revision": "8287fcacd52be27688cd7ab199f90ef1"
  },
  {
    "url": "assets/js/76.e51ce42b.js",
    "revision": "5d55f3cd6774d8f426ed4d319951f01d"
  },
  {
    "url": "assets/js/77.efeebb55.js",
    "revision": "c072c1e8fbd83a7afd856a324ce7e5fe"
  },
  {
    "url": "assets/js/78.188ab0f6.js",
    "revision": "6afa3ae51b83241069d9fbdb827257d9"
  },
  {
    "url": "assets/js/79.a9ce0bac.js",
    "revision": "6c975006032e95e64225a6e324e0c42f"
  },
  {
    "url": "assets/js/8.df2927d1.js",
    "revision": "45e8e9187b143095e4842c64905593b0"
  },
  {
    "url": "assets/js/80.c78d6c38.js",
    "revision": "11af91d436d314031981b56a2035c39b"
  },
  {
    "url": "assets/js/81.85d215c0.js",
    "revision": "e168905543d6898cbff9b0c32c9e4efd"
  },
  {
    "url": "assets/js/82.215ceb82.js",
    "revision": "53a9efda30e21f4a1b887e7f457c54b7"
  },
  {
    "url": "assets/js/83.50c9640c.js",
    "revision": "bb970708cd86b9e7dd87851fb322eb3c"
  },
  {
    "url": "assets/js/84.1883caf1.js",
    "revision": "5f8cbe38a72aa5e9894525acdafba397"
  },
  {
    "url": "assets/js/85.2afed790.js",
    "revision": "87dfde46cee42da1b6b3002cd049bbaf"
  },
  {
    "url": "assets/js/86.aff3b894.js",
    "revision": "87a954db598d3b868665451a4fd6cd8a"
  },
  {
    "url": "assets/js/87.68c52a39.js",
    "revision": "77089a281cf1bf1fb087a27748bb30eb"
  },
  {
    "url": "assets/js/88.48765ef9.js",
    "revision": "a93bf5c525f0a84334d0dd2d304085a6"
  },
  {
    "url": "assets/js/89.9ff5d4c0.js",
    "revision": "8072df12921996540ddced28a43fc370"
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
    "url": "assets/js/91.0a88f9b7.js",
    "revision": "ff484e29fe76f323e3b3d4ae20aea25e"
  },
  {
    "url": "assets/js/92.d4df4599.js",
    "revision": "535e9b818d4ae733c53bc1aa99a8b0bb"
  },
  {
    "url": "assets/js/93.028d9948.js",
    "revision": "373f1b59abe7b223f841817cd221f424"
  },
  {
    "url": "assets/js/94.f2101853.js",
    "revision": "54cf81b69776efd5971a6cc2c3193e7c"
  },
  {
    "url": "assets/js/95.364e122e.js",
    "revision": "84f32c85a378526cf1da905978893460"
  },
  {
    "url": "assets/js/96.8b7070f6.js",
    "revision": "0b82e23f2b2a531f57ec30d068100e01"
  },
  {
    "url": "assets/js/97.8c27299e.js",
    "revision": "041d0206f525a07f45accbc873782a1d"
  },
  {
    "url": "assets/js/98.41355cc2.js",
    "revision": "c3e3f841186f7968552fabdff6310665"
  },
  {
    "url": "assets/js/99.572241fb.js",
    "revision": "9778540c1eb2b7d3fdf83676575aaf6a"
  },
  {
    "url": "assets/js/app.914469fb.js",
    "revision": "7aa60ac5328e77f88646eea0c02d539b"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "1cbc2400e6eef86942b5333ed0641d89"
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
    "revision": "213b25fec3b84691e0ed55b5a8d41de6"
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
