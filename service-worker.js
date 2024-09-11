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
    "revision": "d9b7c7b87a2b22b10892115c301ea514"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "58a91957f8c0e4e1f557d6cf9ea96abe"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "e6f74f380e82733486c7316e93698a94"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "41f498e05d4964b528163034de7f6c34"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "467fc292ae7dbc1b364b8b516edf5032"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "ad69a7752dec1a36422286e40b205f9b"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "5a2d1c6ccbc82d1734d3276ec42ece8e"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "372030790beffe7b6588b109969138f8"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "0fcfaadfdafc780c5680eff1101c41be"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "47ddf0225655fe8b1be6861ccf49ac02"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "01b55d9d5a8c878c7d778f3dd36eb008"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "a4276144f46feb6b96a4e9d2787ce42d"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "20490f4b2fa5e482b57c9ebb906c77e4"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "f87b58f2f638fa487d84230fd351660b"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "c740ba26abe7c963809c20e0e706256f"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "2f42d347c3d583bf054e716ca201507c"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "5e8837eafcf18fe8a0423803c476881e"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "43c8d44c97fd0b6fb81e57eb87035b31"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "33d20469d176a4c3a84452a5edde2d1c"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "023cdae6867f07be56262fbf28834c17"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "d28729519c6032e507f96cebca8ea968"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "8a5ef3a0419e53ac9d1bb63efd8ffa1b"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "aaadc8bb7f53fc358ec4fb2cb85a7b8f"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "7f1b29bec940eb87f0238f3b78993410"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "5868bd4b1fcfb99a5b58ae7aee7883ff"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "b38f1c29f247d72674c62c553060bbc8"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "ce7a9848601453a55f68341405473499"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "f261ff6e471a43e62ffe197b75af9a8a"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "42d77782c3dfb808ee7ff0dec80ad390"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "ec0d6ef3673afca4bc0d0c3cf1388ea0"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "b45a2d485c1fe425069cc09c1512a6e3"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "61c7554eef20772194c2236fc1eb0e9c"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "e8ef6244d416d8293648b343bbad2f9a"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "ff70c1d5af54f043a59ae9b846d3f8dc"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "f3ac3a3c57d27edfc52bfa61d6271a6a"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "b63542ba159cb26dc8ab4e3db0fe48f1"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "1f7f05ae92edd409447a752e7acfe076"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "ed43a46ea3d97b5435265adc30e6cc2e"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "21c694948df21aa6ac329f5098c068c2"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "391bb64e07db6f13388724b2bbd180fd"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "7c81596704f5fdf103255e3dfd22d172"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "7a4b82e426de19b23f8fe8d14dbdf479"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "72297e34b681b69103983d88a7cfe707"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "92a1e8f909ed18f70f69504360d1738c"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "e4b6eea81affa09434f9fcfc375d170d"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "7f9c7516a6bfb90d07d3b2c9c7e00ee2"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "e29293d43ee62d00b282740f3ce74a89"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "2a0d6c7255aa3188f07613ca52a6bbae"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "572b3bfc1739090eb41522fe978f4ae4"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "c892a1c62959797d69a5b10250eb9a63"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "1401ed983f37b1b02bd83f03609f83b8"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "6a1d8259b9fb612ecd14c10f461e8ca8"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "5548e1712cfbba3c1f1e07be02dd55a5"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "a1f7978009020b11aee20ea7b4701c24"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "00dccdb02cad6850d890ebf0c06836ab"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "eeab8551e627a8ca87b5d6af0bb6d4ec"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "1598d9270bc6efe2d3f5c41c4496508f"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "1e678e81bf567ef753e52b158f3853a3"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "f72f8f7008ddba6f367c5d24b3d82533"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "9488919473299a77b5f70076c6147b94"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "2111f243b63f37c48cdebb0c3f201166"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "ee8e86e2633dac8ddd6f73a9c0523a35"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "03f3ec4092f090dee96041e6fc961082"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "75a0d22f2596a3a3f832d472e21f242a"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "34c9a8477e3bf7cbdc688c4358e2c4c3"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "42c61df8d35e26c7e0ff1d1e107b525b"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "4133a2b6fe0ca0be264fc51aac9281f0"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "f8a10309fa7afa86db1af13cf4ff7384"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "046a10a5a9f9ee7cfa15ca149339e829"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "ba814c9bda822577610ab2285cc3c962"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "7986b8de13d9defe68992d6a4ad4c634"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "af7c9245cfdeea01381be6c628a611e8"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "0c41a4fcba1a9f4331cc961e4351b6a0"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "c8b05c76a10b71419242d1777e718154"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "b9609215ab21384deefa6c5c268846d8"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "ec94b662e8567548ef5d6e17b1c2a422"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "a5b63d6b3fa6e34f1c3cffeaf867739b"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "2649f997bdeffeae42b34bed3b99b272"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "370f8ae9267e352e5b22c50671600a79"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "0670167a861518c771a3071d1da61116"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a1c4787b7a6c0cacb823193973ee6c81"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "ff7607c8451ca74837da5ff53e49b94e"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "2160814c14f61b46cbaffc7b5307a1da"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "8fd97b481062250094cadabbb7eb968b"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "d68621a054a41b2987c01476fcbb551e"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "f22c79a1e8717d3600c90bdd4febb860"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "0d27348ec1c5f8fd59666db44fb49e73"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "0362fce36506271652eb8be0cc730729"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "9e049457eab6812f098091781706e012"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "145b72fca604cd3b01d05f30595c74fd"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "d3065d91548c19838e7cdb955d6067ef"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "d28b3224131eea50ec6f709a321fecbe"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "016fece78616f117a2a35db375a7f877"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "59c3c2f11be6cff96029faaa5fd418fb"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "04841e728567f62723d18a7775016164"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "f96481bcc489857e0e58fd302943ac61"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "7339152806324951ce65abda69a05b36"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "21b2594af986a36e6eb87bf055995cce"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "aa882b1aa1433bd9dad3e2cf9605e067"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "b02fc6902eea3d78ddf7b7fd17987740"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "3083e6302220da5bbe42cd2d58fcac1c"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "14b96f83b9bc2e14e5fdfe71365723cd"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "24e20a9e4104f81baeae0e07ee63243c"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "fd223b92383d0b21233d0c695d452fc2"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "09843afb8fa9d68d7055d3a3c3bf0cbb"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "8682805854e8a007b09ea21f2ce82fd5"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "8c77dfda3737f63924cd5c35623daf22"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "8c48b02b96d728576e75fdeea1e13487"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "bbdaaf3ac6fa7923d01e7a05fa6bf333"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "39a13bfa698758a930d4f8b6e25a0c1a"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "9c23df48037b069f2371b804fe75734d"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "f10123ec6c078d6a1175d93813a79496"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "8b534249dc6827088126df4b5f01121f"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "35141c7f674ac6c3f3ff9bb41df07bee"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "39cb43c4b99eaaa893b8f953045ddad8"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "682495080c34b022b1f8abe7e46132e2"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "02ff625859c52dfeeb8b967edd219d58"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "eeff41832efa34c312a0d52f25d1a81b"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "3cef1e0a57c46b72be7349dcf05ba31a"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "03243b6ece5592e78838365178f13d7e"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "cf57593503c3b56341d9b5d4fb6fca9d"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "225b95afc06ea3fc8c78ad8de5639a11"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "19400732f2d9470af3a25e11ac765ffa"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "a8324f6ceb88ff492c5986e993ef9d68"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "c5d127a8f554bb04504d7c0476594e31"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "5556b1d89a37e8003cbfe3b0cd3b61c1"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "3024aa521ce3687909bf23a862c66f20"
  },
  {
    "url": "404.html",
    "revision": "7d341a87167c7f34411af46a090df665"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "4865e876bb2a019f284e7160e74cb387"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "daba94abd70c4f971273eba3c1e27591"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "140ae946769dd6647013ee2b0f94fb67"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "7e0f2ccf428979da27b6617b7ea1e05f"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "62fedf6935b2504cec70a5deaad2dbf5"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "5d27a57a9f064e4916c6838a1474757b"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "d0bf027e333d77192d023b40e4ad2d45"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "2cf5834c4127613b8fa943821dc4df33"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "555ac24edd5c167fb87d56b2e1f5a9e9"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "1ee191e824734ac9c3cd46bd9abd2ebd"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "b109c5f4276810c46cbdf0959a4808e3"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "1d18df424ed9c3238b52c69eb0032402"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "381cd207d2bc3f88d0e967dcb46216ac"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "05244c13f3205fa3f8150e965d70367e"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "f8cd34d493c55a41c999a9573ae405ed"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "0c832e77fdfed16f773bbf5ba11f824f"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "c890ae911d756e287c90709e57a2ede8"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "debe0044b64755ba77fab132436e2ef3"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "8e03859d5258fdec7974daf2dcf39710"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "5fbb288bfbe76821debda992110c03e2"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "b8cc5b2f643f7d4887ffa1858c7da501"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "571f92d47f7537f2ccc9ad9200c7c2bf"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "6e0dee211122229388c2a1073af014a4"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "fc374ef2de50a45803136b3d4c1d1cdb"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "6723324141566c1b32bb4dfa40024254"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "a692851eb87106263c28018efa46d54f"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "2a0356c8f485e885db552ad0648aff66"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "eddc0cdc3f7d9eb53fe0c142a15b31ae"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "2425f236a1fc7a486997a3f205e976d1"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "d447e1a5faef92c60b62ace9b6b86db0"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "e1e8109ecf77556f83f5651f889bdc7f"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "03a47bf83dcf3c65cad0d36fabf251b1"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "fee26fde0bedf4345eaf3fc1894f4ca8"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "75b91d52e106af1f1eaa0ca27e43ea4d"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "17abe9bddc5db9c42ffd809ee542d209"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "b38f5f65aaef8dcf5a0c2f01d1028c75"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "0a2ceb0a76fb1c505ab5306314770f42"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "04345311869b7bad5a3bbaaa1cff3d46"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "c68c68e183191b9da52f4430059a5eb9"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "452a8e08a32028b35e37372be38401a5"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "d04842ef90724c9ec9086f586c45267b"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "8d0868e3233b053c977d27f6f0c8fb40"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "c819c4c4e1d3d79c18acdcd577289288"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "9e22cca9cd4d0e5de09d61cfe5bc52c5"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "2d51cc8be2db13e67b42ccabaab44b91"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "64194503557964d480aa51993005568e"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "67c39780f437e82bb9f0ae131e7ef9e2"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "603e409246c48a1740d05a61adf32947"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "4dab6306037874c4ee0b918f067fab21"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "340d4ddb2d9b71d8b107ca51f4609ae0"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "3ae7ebedd6bd0a00bfd9c07e291a05e6"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "662b8a629b4543ccb7f29c4452a32165"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "f691f363a55a1f7ecbc388edff2323d0"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "a7ae31b11c30513d68e934a97f30e6a2"
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
    "url": "assets/js/101.2d862495.js",
    "revision": "48b04da280e9b5886144db8c1591cbd2"
  },
  {
    "url": "assets/js/102.f0338f3b.js",
    "revision": "7841d15b260dac66eaf5e2c0dea5d39c"
  },
  {
    "url": "assets/js/103.57088005.js",
    "revision": "649dcf5afc7857687e241896dd1616be"
  },
  {
    "url": "assets/js/104.5bc87031.js",
    "revision": "49b7ad4e3c7b8cae386dec429027784f"
  },
  {
    "url": "assets/js/105.3a6bdf02.js",
    "revision": "76e3a23d645269e53f15fef01e615ef3"
  },
  {
    "url": "assets/js/106.b7639d1d.js",
    "revision": "b8396c28a9988582237ab91856ae6cbd"
  },
  {
    "url": "assets/js/107.4c9820e0.js",
    "revision": "75783bb5b1d07ec658b4e00ed71f20ea"
  },
  {
    "url": "assets/js/108.017252bb.js",
    "revision": "6f0efabe801b8e0a02934ca3eb6b7459"
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
    "url": "assets/js/110.77a1040f.js",
    "revision": "eae5fd7c1f39d3e28f610e09cc040326"
  },
  {
    "url": "assets/js/111.99c2c64d.js",
    "revision": "2c1b0d936b3fc7a5922ce630b2812ccf"
  },
  {
    "url": "assets/js/112.316623f5.js",
    "revision": "57be2580a110b28697124566eb5b4557"
  },
  {
    "url": "assets/js/113.55da2f7a.js",
    "revision": "2f04c7e84153ca5061505fe8649758e6"
  },
  {
    "url": "assets/js/114.dcf29553.js",
    "revision": "19511b1f3389acc1de987e8585f35049"
  },
  {
    "url": "assets/js/115.af4c2078.js",
    "revision": "1e255e413fd4d2d771cb8dd5c49abf5d"
  },
  {
    "url": "assets/js/116.fa95b97f.js",
    "revision": "83a1fbb995108c313271270eb71c8e35"
  },
  {
    "url": "assets/js/117.3f9a7b14.js",
    "revision": "72c144473071d79622d4f83b73419dfb"
  },
  {
    "url": "assets/js/118.3589e8da.js",
    "revision": "c6bb92d839068cd7be2e9f3c2b295498"
  },
  {
    "url": "assets/js/119.e7457b1c.js",
    "revision": "507fe244ba34811f22c9b991d9cda4eb"
  },
  {
    "url": "assets/js/12.05317eac.js",
    "revision": "deb2a5d11513ef6c132de98bac2d4a75"
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
    "url": "assets/js/122.4c64117c.js",
    "revision": "2eb5a67aad8234b29e224f357845a753"
  },
  {
    "url": "assets/js/123.f10d35e5.js",
    "revision": "b2163d2c9020ebb72049826e646dd20f"
  },
  {
    "url": "assets/js/124.4378d0ec.js",
    "revision": "3c5ce27ccc83db4c9c8996758278eb47"
  },
  {
    "url": "assets/js/125.1916f7a2.js",
    "revision": "4fb7fcf2892d425c91ea8f4268a09dde"
  },
  {
    "url": "assets/js/126.77489974.js",
    "revision": "f3df953f913e8f2dbf6974223aa3c9c1"
  },
  {
    "url": "assets/js/127.fffcb32f.js",
    "revision": "3a80bfbff41145ef78fd868d25f60cda"
  },
  {
    "url": "assets/js/128.a1b89fc2.js",
    "revision": "5d93050635b2f4892f5f130386e254e7"
  },
  {
    "url": "assets/js/129.f95e06bf.js",
    "revision": "65fa92e96b4b3c0e33cf3bc34fe51e39"
  },
  {
    "url": "assets/js/13.03d43ee3.js",
    "revision": "75a7953947cb4f30b38c534276d4ad4e"
  },
  {
    "url": "assets/js/130.6abb9efd.js",
    "revision": "62873530c4a232bd2d255adfa00ef68b"
  },
  {
    "url": "assets/js/131.56a851a4.js",
    "revision": "8523807885bf90de8c97e6a8b6e27359"
  },
  {
    "url": "assets/js/132.cf45cd5a.js",
    "revision": "d8639baa812f4073719c0f58208742f3"
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
    "url": "assets/js/135.acee1277.js",
    "revision": "858cb2534258ce52d9b78bba9ad6dc27"
  },
  {
    "url": "assets/js/136.e861488e.js",
    "revision": "5ed9aaab9cb6f56215b1d5b4400b6c3b"
  },
  {
    "url": "assets/js/137.4e2a362f.js",
    "revision": "a683cf121b8aeae5af70415a36ebd73c"
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
    "url": "assets/js/14.05c70d28.js",
    "revision": "9b04f68d32fc511eb1575190fb44bc71"
  },
  {
    "url": "assets/js/140.d22555c8.js",
    "revision": "34d4ecff59672b4c5a556da768dc8fdd"
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
    "url": "assets/js/144.c13609a6.js",
    "revision": "188cdaae6e0ec6b59322ad0f37d444fc"
  },
  {
    "url": "assets/js/145.3b0d1e50.js",
    "revision": "189cc428f0491d146881e66c883bab8d"
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
    "url": "assets/js/148.aa12c8cf.js",
    "revision": "7ce6529d1e01b9730a072f0929cf5029"
  },
  {
    "url": "assets/js/149.3a5c9067.js",
    "revision": "ebaca7e6fd675f07b2f6947e899bf643"
  },
  {
    "url": "assets/js/15.4db45722.js",
    "revision": "1aef91dddc10322ab03a1b131aafb8af"
  },
  {
    "url": "assets/js/150.8b2ccfcd.js",
    "revision": "d4237054ec69fc4a10dfd148411bdb86"
  },
  {
    "url": "assets/js/151.d65dda95.js",
    "revision": "7fa99885762da6f4a822b5ed384df533"
  },
  {
    "url": "assets/js/152.aa008a7c.js",
    "revision": "a29db6f1672e27dd16fc592d8d0e7b2b"
  },
  {
    "url": "assets/js/153.4bfbdf89.js",
    "revision": "cbcfba640e4e66c42e445b1961ce5ec0"
  },
  {
    "url": "assets/js/154.65ab5a3a.js",
    "revision": "f005e4880a84e62ba8c80cef169bdf01"
  },
  {
    "url": "assets/js/155.1f960055.js",
    "revision": "f3aab4aa798a792e577c53b37c319f9c"
  },
  {
    "url": "assets/js/156.f3345c0d.js",
    "revision": "32d8142998ebf45c032ff44733fbb0f7"
  },
  {
    "url": "assets/js/157.2f5bd6f1.js",
    "revision": "f583179b8342f625426c31888507ded0"
  },
  {
    "url": "assets/js/158.b8d6f7ef.js",
    "revision": "2c831799d90d6cb0147cc7fb56613def"
  },
  {
    "url": "assets/js/159.2f2db222.js",
    "revision": "1be6519123ee2171815050ddcaffddf3"
  },
  {
    "url": "assets/js/16.81784f4b.js",
    "revision": "09c8904f93f8d7fe5ce38dae51aeb7fd"
  },
  {
    "url": "assets/js/160.6c8d3d21.js",
    "revision": "5043f049d769032a01c7ea46eb6c1686"
  },
  {
    "url": "assets/js/161.ba3949e7.js",
    "revision": "6bafbeea045ec6179bab3671fcd27392"
  },
  {
    "url": "assets/js/162.d0f687fd.js",
    "revision": "ff5fd035ef34e3f403f9f914d89a440d"
  },
  {
    "url": "assets/js/163.6bb16a31.js",
    "revision": "3d40c9b4e91a080784f8288273944df9"
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
    "url": "assets/js/168.96e649f8.js",
    "revision": "c0ce442ac396f092593f540479cc70ac"
  },
  {
    "url": "assets/js/169.29cec371.js",
    "revision": "e2f6a4274f2e3f835ade010b7af6997b"
  },
  {
    "url": "assets/js/17.d22eeb91.js",
    "revision": "f16c0e3b9c439cc3b75915915618f664"
  },
  {
    "url": "assets/js/170.ab47fa84.js",
    "revision": "c5412db8fe50a8bec2c76112b1bccf26"
  },
  {
    "url": "assets/js/171.8147bd3e.js",
    "revision": "8b4c7994d086a595fcba46da8b4d2e0f"
  },
  {
    "url": "assets/js/172.060bec6a.js",
    "revision": "2c51f54a267d17a6e7fb896b82d1b237"
  },
  {
    "url": "assets/js/173.e2412f8a.js",
    "revision": "12c7f88073c70998137f51e3bf4615b1"
  },
  {
    "url": "assets/js/174.0c1411f0.js",
    "revision": "8870b2ecfade8de59b7a05b1a499eb23"
  },
  {
    "url": "assets/js/175.4fa01875.js",
    "revision": "d7004b24607cce27d1a5efbff6da80f0"
  },
  {
    "url": "assets/js/176.cb9aa1e5.js",
    "revision": "f9cab39c2d8b6c35e2139265bf2bc5ea"
  },
  {
    "url": "assets/js/177.785a22fe.js",
    "revision": "241cbb741f0269d294879685563ca897"
  },
  {
    "url": "assets/js/178.9dfc5fe3.js",
    "revision": "6199c6778d872e84c17288eab23ab026"
  },
  {
    "url": "assets/js/179.9aad0496.js",
    "revision": "ca6ace7550973ad84eff354c2354fb04"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.918ab8f3.js",
    "revision": "31f623652b3a0d76eb58f41ac767e50e"
  },
  {
    "url": "assets/js/181.8b53349d.js",
    "revision": "83713f99315c0f771075f9764b403914"
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
    "url": "assets/js/186.35428c0a.js",
    "revision": "74fd0b95e5a102a6a5874969cc7898c5"
  },
  {
    "url": "assets/js/187.a4418702.js",
    "revision": "4b9191fe2266781b23464bd8a5013de6"
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
    "url": "assets/js/19.eb685798.js",
    "revision": "0de14b486b95250927f4626a38df1593"
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
    "url": "assets/js/23.8a8fb5f7.js",
    "revision": "d2b92a04e0b9bb9698192fdbd88233e2"
  },
  {
    "url": "assets/js/24.a3907dea.js",
    "revision": "945709662b1f9565dd2d5cc925ad133e"
  },
  {
    "url": "assets/js/25.da73872f.js",
    "revision": "f81d986504efe5f84c5164c34beac8b7"
  },
  {
    "url": "assets/js/26.445ea3b1.js",
    "revision": "7dd9b9eaed70b33b8bd083e84938ad59"
  },
  {
    "url": "assets/js/27.678732e4.js",
    "revision": "9d0604186a296ee74e3c0541d57d4962"
  },
  {
    "url": "assets/js/28.deefaa4c.js",
    "revision": "b1d4912f94074bb73c9230ad4cce8d4b"
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
    "url": "assets/js/30.6bf4c79b.js",
    "revision": "6159da61fb05e4481ccf3c9feaf5f66f"
  },
  {
    "url": "assets/js/31.8a665781.js",
    "revision": "e472a08a875c70c8226254b39f90f6bf"
  },
  {
    "url": "assets/js/32.117797af.js",
    "revision": "28d43dbc73451cc3a4e128552350fe17"
  },
  {
    "url": "assets/js/33.1feacc7f.js",
    "revision": "e8223dcaad6d7e2ae34648cbbc4bc52e"
  },
  {
    "url": "assets/js/34.fbd1d975.js",
    "revision": "0e2a81c8589718f165c68b04772f7b88"
  },
  {
    "url": "assets/js/35.cd555899.js",
    "revision": "0b2cae1c2a260670692d0f597235ee3f"
  },
  {
    "url": "assets/js/36.7f5c2a97.js",
    "revision": "8f91fa5d8c4949b26ae7c6d4c59e038a"
  },
  {
    "url": "assets/js/37.68ba3610.js",
    "revision": "83485d1ce843b32bafc70075081c9404"
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
    "url": "assets/js/4.c1e6ad8d.js",
    "revision": "62460a8c0b58f026ad56cb258fcbe8b8"
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
    "url": "assets/js/45.74b3d941.js",
    "revision": "d73aaff8b8a14a14abd4a16f89a7be5d"
  },
  {
    "url": "assets/js/46.89211acd.js",
    "revision": "ac6676cc41fbd70e696e4f0638b0f3d6"
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
    "url": "assets/js/5.6912a568.js",
    "revision": "6b6503872b0b1e3b98765553db52e2a7"
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
    "url": "assets/js/57.3cdad42a.js",
    "revision": "281f3250ccf03b5b48f8a396800767ed"
  },
  {
    "url": "assets/js/58.1afd225f.js",
    "revision": "3930aefd04067439eb98ecb5e0ce0958"
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
    "url": "assets/js/70.b7544466.js",
    "revision": "2142b856cc35c36fb1a07d0ff2f3bc6f"
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
    "url": "assets/js/77.c9e22796.js",
    "revision": "7459a1b3cf5da5a291ada81527dbdbe9"
  },
  {
    "url": "assets/js/78.151421e2.js",
    "revision": "1aa6aaf42688c97ff87174531501a80f"
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
    "url": "assets/js/82.e4fcf364.js",
    "revision": "e12ccb7b7d88db5517241af8697785e0"
  },
  {
    "url": "assets/js/83.96d2773f.js",
    "revision": "f9b12ecfe77d849be7d5337b4d9014c6"
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
    "url": "assets/js/90.ed2992af.js",
    "revision": "b9e6bc9e47fd0e66c9a2ce572296f057"
  },
  {
    "url": "assets/js/91.ae30d2d8.js",
    "revision": "cb11089be1cb21fe3c4a6546319b07f6"
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
    "url": "assets/js/94.4f2bd589.js",
    "revision": "f44272864cd5a049cd098b76532b7142"
  },
  {
    "url": "assets/js/95.c0973d1a.js",
    "revision": "304ec6fa4744c0ced431314b675d8d2b"
  },
  {
    "url": "assets/js/96.8784d501.js",
    "revision": "c4cd35e8ff3c8ff7ba1ac5400f57cb3d"
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
    "url": "assets/js/99.886f18de.js",
    "revision": "2b4919bfe92e0085d077779a8bdc1c25"
  },
  {
    "url": "assets/js/app.758b9615.js",
    "revision": "47714a6a3f9f7b15b1c3176d7738f66a"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "94f1ee569a994e7d07d4c3f50e2854e1"
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
    "revision": "16c68dc0f69532754dabaf2ac6813515"
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
