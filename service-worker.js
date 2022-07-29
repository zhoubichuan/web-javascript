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
    "url": "1.base/3.javascript/1.grammar.html",
    "revision": "19e880165a19c9f3c5e9353a04d2468f"
  },
  {
    "url": "1.base/3.javascript/1.index.html",
    "revision": "bdf400149a5730215554dab128ed7272"
  },
  {
    "url": "1.base/3.javascript/10.dom.html",
    "revision": "0c3143cfc7c383f6c047cd1a3bec9296"
  },
  {
    "url": "1.base/3.javascript/11.bom.html",
    "revision": "28e8e0820087201f4a97c367151482c4"
  },
  {
    "url": "1.base/3.javascript/2.morphology.html",
    "revision": "ec8bef336481e392cc27b3decf2c230e"
  },
  {
    "url": "1.base/3.javascript/3.context.html",
    "revision": "4e103bebf145d3580da496a8260d4679"
  },
  {
    "url": "1.base/3.javascript/4.variableobj.html",
    "revision": "63ab27d8284a3e1dedd6b59b511ed44c"
  },
  {
    "url": "1.base/3.javascript/5.scope.html",
    "revision": "34cc901140423f900c93cef3da803900"
  },
  {
    "url": "1.base/3.javascript/6.closure.html",
    "revision": "91ad8d6e2d0b9ebc990460328fff3e12"
  },
  {
    "url": "1.base/3.javascript/7.this.html",
    "revision": "dd1ebb8d17d75549e38bc2ab73ac60ad"
  },
  {
    "url": "1.base/3.javascript/8.async.html",
    "revision": "b28fe1a6afdf41b2b21d6a18838fd53b"
  },
  {
    "url": "1.base/3.javascript/9.eventloop.html",
    "revision": "f3c117cf17a5228173c051b26fabceaf"
  },
  {
    "url": "2.advanced/2.js/1.grammar.html",
    "revision": "c1d998f87194804c7dbc956ba05e42ba"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "bd7ecbf24fb74359bf21635ba356d23c"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "cc45f50d8e920359359a3f15b4c7d55c"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "0c77ac3523aee63b70a963b731b81230"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "d9cad851d87fc60822ee7d525654229c"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "fdb68e24cb28c96968b1eae187a5cc17"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "9ced9ea6e30b81a6374b8e62cb5a2001"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "12cfc04a2ae2ab1bf81f6fa47802e113"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "7fd7855439e46ff20dd5f5e83e062177"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "412a98b87436480656317163dd5821c4"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "dfdb47da2fe73439082e367643a33648"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "01e34e69dc20dc53a69cd14b45506c31"
  },
  {
    "url": "2.advanced/3.type/10.prototype.html",
    "revision": "14b3a5871aa155f854603c26741fbbf1"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "1b4d512e51365c576e1fcf0108bd7a04"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "47604a3c99e19196bb9bbd012c890f0c"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "6920f63edfa93b45b65a411ea5a0bbfe"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "37b6cb537cf3dca060fdc1cc5e00f809"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "8e37bc990d5998e01e63ab5087baba87"
  },
  {
    "url": "2.advanced/3.type/6.object.html",
    "revision": "bf08ad3cb262ca4628bc6d3e3957235b"
  },
  {
    "url": "2.advanced/3.type/7.array.html",
    "revision": "6bc2ed63cd8569070afac2eccf208812"
  },
  {
    "url": "2.advanced/3.type/8.reference.html",
    "revision": "fe7a32c1edb1afbc5894c7afdb9dfa2f"
  },
  {
    "url": "2.advanced/3.type/9.extend.html",
    "revision": "9211e84ee49f9a7a45c7bdda03ae12b6"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "3cce18fd67d79c9001125f5c97e754b1"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "c30b9a86d067183ffeba9b1b77e6b4e1"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "311c523cc530cfcd97cbb21700730c07"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "baf3ea20331393385837c1812f611381"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "6d6620d307b39b8561b51a20a8667921"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "2f6240c4a01b1f69594f9cb7ecdbb225"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "ae80e1c42d1270bc6db892a4fd920329"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "d5451e53b440252079f267d3a560c889"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "28a4e92530073c8ea3e2159ffe63f5bf"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "fdb7b19622bf323abcdcff8b0a751452"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "2f5639b323f21d7d2b63c9151d38bc34"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "f3fd59bdc7b1f0121d8f7000954ba442"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "93158c4b08ac4eeb77910e012ed2210e"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "00eee5e94cf2d81b80313c6d601dec71"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "533e35ef25f87d71227492d2166151d3"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "26c6854729a48dc87e48b36953417c63"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "ffa59c4d9e126495aced3344b2afbbe9"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "8c911e56c03fcb57e45aa0fa6ee3f779"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "a8710702f16671ff4be1b523336804ca"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "acce2772b4137d81cd3203fd2cf565d7"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "63a12a7c9e1830757870251c06b5cad9"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "e975d073e40beb8e30d9e9979e7594b7"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "312843627f767f3f32f464790dbd0a27"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "addc8ed1f09858258525af4712978a97"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "dc52b4458b0282d19cbad65878f11e35"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "57b2afa351d3412b8a29eb1bec1ba04f"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "ab4f776a3f7160949e2dba4592a618e1"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "02c94211a7800e714cdbcc31ad623d61"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "b0ac6f3e2d6184e74f1f66115116dbd0"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "db4c644f839cb0420ab471ac10bc7450"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "1b3de03dcaf7ba3ed266e38d9f0f1a6a"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "7fb05fa94cb1c0dfd3e69120a0dc83a0"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "53c6c25341ceb74eea3c9075a1dc8976"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "1cfe27690689659f73b5740264031252"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "c79a3add2211ed34f8be944de2f759eb"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "0f332839e228189151d99feac9f9547f"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "6447d502594ed1ff4c27a2a6cd5b02e8"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "d510f7ef60ed6db335d2a275f20fce2b"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "e6105f09faf68152fc5241ad95ef16b5"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "74ea7a429c2176c86de92840be8e3f82"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "6b1286815bd2c5ddf458650d86ff3e1f"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "afb9f87598e010239aa186b029e3cc57"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "31b6f2fbb9edada70519b21f1b2a4955"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "f4bd0d7d03340d366cbe1f0b3604d8b6"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "690d618c2e2e9f5a4f3af6262a305e08"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "6d8ac8792f86ee80be096c31b27eaef2"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "150998b1ea6ddcc39838be781578fe8a"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "1099ad5d4925b7212e71c184a340ff80"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "f0174f5984c750738dd414e780d62166"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "4c9bc24fc36b1fbf6eb8ed40088766e2"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "77046ea13e7e5c9b9ee6dd9370cd2e68"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "2f70cab679a704129507f22bda1ab7ef"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "7f8a24596ae9de24c0c5c634429850dc"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "7a0b5363e8ccc831fca3114335a8495a"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "fde21bd2f1202541267a91ff15540425"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "27672c5fcbb2264af4e3bc27e3135193"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "c43ff2747d891c47a1606838b0598b74"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "3b379d778fef797e1bcb02d383c7494e"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "3e3ff576e171b82f0579f70268a02b9f"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "b522d1d25d93f59eadce475d78e5eb8e"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "a7182fb001d15a8899252dbe2d8a8c59"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "bf26a3eb1dc347ec7e07a47d1a0ea37c"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "c945642b85f458c0e4aa4c42daa67ecd"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "c69f442f9e80236172cf45e341111221"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "1a2a873fda172b9c2dafa87523d15ee4"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "5295371326ebc6e649a71f9a3f3b1cbb"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "6530e12daedd7939f3b201101b5a9f1f"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "bb2109f491ca0f6bb14426c8958069c2"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "d3f5a0277199404d44e5358b0443ede5"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "2b2aff6c13d7e162794d6c9d6eafa9e4"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "2228d81d1ceb62fcb49ca202479064cc"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "c6b49b7fa18b9251e36a3b4775128948"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "c6f4fdfaaa44254e3e6937784ab376bd"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "824de941d0f19b3a0e0c76a4759bdf5a"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "9f01936101c96f378ff8f5cf18cc69d3"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "65174c2fd835f48f51430b180ffae764"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "306d34c4ac72654ea3a3a11e7f9e96c4"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "86e178f84a2fcb5cf758b081e45d94a0"
  },
  {
    "url": "4.special/2.package/1.index.html",
    "revision": "b3dc1acd9d7de11195dd41cffce17da3"
  },
  {
    "url": "4.special/2.package/10.html",
    "revision": "7579f127cafc9e639a4b962b4a449577"
  },
  {
    "url": "4.special/2.package/11.html",
    "revision": "4964595b680c061b49895cd53b304535"
  },
  {
    "url": "4.special/2.package/12.html",
    "revision": "c6ad05129f78b5967dddde1de50b4505"
  },
  {
    "url": "4.special/2.package/13.html",
    "revision": "ea417b759e3387731d157ab1e1490428"
  },
  {
    "url": "4.special/2.package/14.html",
    "revision": "c66cfd3e3e6193d640034567f296d1ee"
  },
  {
    "url": "4.special/2.package/2.html",
    "revision": "6b5c8ef186cf7917e223fd2bc0194ecb"
  },
  {
    "url": "4.special/2.package/3.html",
    "revision": "ae88038afc136adc9f854ceb0db6807c"
  },
  {
    "url": "4.special/2.package/4.html",
    "revision": "89a58a69094ef8f9f4b795d5e7f9a760"
  },
  {
    "url": "4.special/2.package/5.html",
    "revision": "8b7150e719579d84bd4bcb3dd4ece8b1"
  },
  {
    "url": "4.special/2.package/6.html",
    "revision": "5e5994c74c49a96fd4c926321ce2669a"
  },
  {
    "url": "4.special/2.package/7.html",
    "revision": "16773969b53973441bda5da64a356a9a"
  },
  {
    "url": "4.special/2.package/8.html",
    "revision": "aab13ae92b8568b06239e9f7c13c8081"
  },
  {
    "url": "4.special/2.package/9.html",
    "revision": "08403d2c7a4e7febac2716665c238cda"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "13bc72ee9ae0c8b71e4736508d46811c"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "852b07ee807255c75252a9da2c389fb8"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "6918ca36a020d52b7f426dfa8b316d16"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "568fc848a0ded88037f8d8ac47127826"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "c40258142af8a4ab5ba9dca56f4354a0"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "438a912407dbf07dfb6e699f09748460"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "72e69c8b1ee922244a7cce1d2add8ae6"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "e2e4c53f884d26b367e8bf92cf869300"
  },
  {
    "url": "404.html",
    "revision": "c181bd0288138aa84a17792cdbd5792f"
  },
  {
    "url": "5.scene/2.file/1.index.html",
    "revision": "c86ff3f20e3e115d6681c36e76c59255"
  },
  {
    "url": "5.scene/3.video/1.index.html",
    "revision": "a23c7d0c588e49c4f8ef6d9b14c468e1"
  },
  {
    "url": "5.scene/3.video/2.haikang.html",
    "revision": "23458a9e283153a5afbc52b296a2c929"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "02ba5ed4762b1377b59c0591546a15e5"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "eaae4068d2f78f041f4af8fd843387a0"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "bc27bac42044a8033b5f1ce38e822232"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "7be7ee18785911009a696a1b17e85e34"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "6e2921b3181a87ab0810d25b91ec2e9e"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "32f1edf649b5b3763c241095f4d64bf8"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "2f2ba60e069cecf2275023a0166ef1a4"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "a8586da9ff97ee6693c10b937120e915"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "44a5f6f58bbf2830cfed196e241a41ea"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "8846151ef0e9140c05cdfc71b6839593"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "f3a312aec11b6fbe7a6bab8734cdddd9"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "8a22af0653b7ddb4a20c82d5d4e00c49"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "bdcf53773a1108ba7ca19f7b771e14a4"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "50964c32633256aca2dfd04826c08702"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "11678c73ff8540b54a9af363ae1fb06e"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "6959bba9e88c8dd6f6721e35edbc3ef1"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "c28d8a8d7da75b057a76712e5f80a9e9"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "5452e69a6c08b43454b74b6fc22d4021"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "8fa60f2efda9999aedc1595b844d3d50"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "b0c5b1c76d4c65ba50b71456dc9315d3"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "0b350fe16ff0caec24e28bf518b85518"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "4016b042315488bd16d529637648d212"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "28dd91a8e37169c689eb78e5675ed939"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "312d2680c1d147bcdde38339c642c75b"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "056b26400d3e29ad8d4480e808533067"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "af889ece884d5fc489eeed3b8e68676e"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "44d3c8912dac76f38d910a4e48e6ec68"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "dae0e5cbd1fc210f3a52dc034785c69b"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "93dd783a1edea03aa57e6954ab8baee5"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "77d03cf1c6e86fc17d1355fbc3770ff8"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "4bac03f94cb2bfd7e07d707586b87c3b"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "a81f1f197ba3414e45660686fa108552"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "0118c20361be1dbac71e3d748866d915"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "be808cde0ee86f04b81d18df734e9ebb"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "b615072203135d75fe98c847566a1135"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "22082e515a682ddbc9151408e5370ecd"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "4a02747a417b28c23f98acc198fe4811"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "57d3aa232d8972e5a8f94674b1fa79c4"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "a159156614e3b2903c7a75b264e1ab49"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "699de8222cfe0aa10c022f3d542ed06a"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "5af6d43dace3bf6f48ad31b8719f899e"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "d8459b3e9de6184c9de6634b69189aa6"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "8180e2aa1a24f8ae17a5abfd97fbf90d"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "2ea04c65968f1f9adedabf72db40e44b"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "3908343cc3f26ffe43631e04515675b6"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "74dcd8ebc8787a132b10f4b0adbdb509"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "33b68c897380092c8c8ff5deab2ac4ee"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "ffe129e52196930ec8c5eb97f9e8cc75"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "c4fd65ab4ebf36998e85452911c599f7"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "1d68a3ad75b57f573bcb9643903776af"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "249474950f15a2188590d75e67870465"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "e1b83fd3da0b3087051c8b7e19ae763c"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "e07bf7b7d7decd9990c30c22d61b06fb"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "e6120931d3f0fb68813f685259dd5ee0"
  },
  {
    "url": "assets/css/0.styles.23c2976a.css",
    "revision": "effd32411a8580c15d43cc8dc8faf77e"
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
    "url": "assets/js/10.e732b922.js",
    "revision": "317905844b0038f4fbf626db7895cb5f"
  },
  {
    "url": "assets/js/100.9808c338.js",
    "revision": "37c5d4be899f020b1cefe04fb9769a9f"
  },
  {
    "url": "assets/js/101.6294e033.js",
    "revision": "52c6e2e0e423ba520007797d39e85851"
  },
  {
    "url": "assets/js/102.281b4400.js",
    "revision": "d11e8f0542c7d75a40166f036e42917a"
  },
  {
    "url": "assets/js/103.54c4bccf.js",
    "revision": "6e18a3ba8ad74b20934ca6f5855efd77"
  },
  {
    "url": "assets/js/104.75bc56c3.js",
    "revision": "3e5d307f50e70c6e5b32d05b241f1e2d"
  },
  {
    "url": "assets/js/105.7f9e48ce.js",
    "revision": "a1294507b09cc028c448b5f859a32d02"
  },
  {
    "url": "assets/js/106.2ec98ef1.js",
    "revision": "735c6428208b7f95bee0dbea0f22c371"
  },
  {
    "url": "assets/js/107.05887637.js",
    "revision": "30961ab2477d922b6b0150003f367948"
  },
  {
    "url": "assets/js/108.2cab82b5.js",
    "revision": "7d472d2ae4a9d7a90a5fb5cc7c5cad59"
  },
  {
    "url": "assets/js/109.3240fb11.js",
    "revision": "2b1e60e02be9250d9efcaa3700482046"
  },
  {
    "url": "assets/js/11.53f0fe14.js",
    "revision": "15ec5017f807ff469e77530cfb700c16"
  },
  {
    "url": "assets/js/110.2b033fd4.js",
    "revision": "ff552406d57ca4aeecc45b1b671e29c6"
  },
  {
    "url": "assets/js/111.e52c7113.js",
    "revision": "95890c7498a5a14c5cebb4f042ae0b7c"
  },
  {
    "url": "assets/js/112.184fba5d.js",
    "revision": "a9170b22c54dcd26e0af3d328b26e2c4"
  },
  {
    "url": "assets/js/113.30d8a442.js",
    "revision": "2ede03e420eccb9774bcb9970c97f7b6"
  },
  {
    "url": "assets/js/114.2016e3e7.js",
    "revision": "e3d0368ff86759c686b42665a7977962"
  },
  {
    "url": "assets/js/115.629cf368.js",
    "revision": "7240640bf5260bd6d2a684856811b676"
  },
  {
    "url": "assets/js/116.a88a96ed.js",
    "revision": "d6e25df92cb3916620cc3cdb477ed950"
  },
  {
    "url": "assets/js/117.f9955bde.js",
    "revision": "70d7405e99ba0716312f4b8a0025e6e3"
  },
  {
    "url": "assets/js/118.f92c05e7.js",
    "revision": "99204df31f5478b1118eb0655e0ed2ab"
  },
  {
    "url": "assets/js/119.70d30bb2.js",
    "revision": "c0d286fe605af932189afc4ae7e58a1e"
  },
  {
    "url": "assets/js/12.5a57bdb5.js",
    "revision": "40e3f626d231df6abbae7740f26ef661"
  },
  {
    "url": "assets/js/120.33dc8e4e.js",
    "revision": "dab2cac0d89fa859658b8c22d1c5c5e9"
  },
  {
    "url": "assets/js/121.b189fb91.js",
    "revision": "3151a35d8c074ec3a21c269a841500f3"
  },
  {
    "url": "assets/js/122.bd78998f.js",
    "revision": "a9bd321928832b0f393944ca1f4251d6"
  },
  {
    "url": "assets/js/123.0db07561.js",
    "revision": "f056a5c97d888e62f7034cf031969867"
  },
  {
    "url": "assets/js/124.f8ce4900.js",
    "revision": "bd4421b38605d6ae8708ddec937cc993"
  },
  {
    "url": "assets/js/125.3c1c6adf.js",
    "revision": "e81f4034a5d7bb746c9436138f3dd568"
  },
  {
    "url": "assets/js/126.7ac15591.js",
    "revision": "2ac542881f05cc483ebedcaaa1c05b63"
  },
  {
    "url": "assets/js/127.a97d9d1f.js",
    "revision": "33b5e2aa781327fa4fbb4b25a5449589"
  },
  {
    "url": "assets/js/128.5e622da0.js",
    "revision": "afdcaaf56ee0a7da84f17d2b0b3810c0"
  },
  {
    "url": "assets/js/129.30c97b51.js",
    "revision": "d36317630d9de4b9df0d00d7d42d2d5c"
  },
  {
    "url": "assets/js/13.7cfea1c6.js",
    "revision": "dc3fca7a46db8b5d7b4f219c17d48935"
  },
  {
    "url": "assets/js/130.d5d28616.js",
    "revision": "977c61f654169ad40e1f37b5b5a4c3d3"
  },
  {
    "url": "assets/js/131.330a54d8.js",
    "revision": "8f3f0ede149d3e43a3ddf6d59475a1f9"
  },
  {
    "url": "assets/js/132.38583b44.js",
    "revision": "f28cc70d61b2982f94d953e0a3b1da4e"
  },
  {
    "url": "assets/js/133.ce188e8a.js",
    "revision": "7bb7f24390a351668ef6398d9f3b036e"
  },
  {
    "url": "assets/js/134.32a24b52.js",
    "revision": "30136665679df53f3c4125185751042c"
  },
  {
    "url": "assets/js/135.583e631b.js",
    "revision": "91d48e03d1cc477c7934d0592965c4ae"
  },
  {
    "url": "assets/js/136.99fe779a.js",
    "revision": "548446de2bdc8e67455a968dfe31958d"
  },
  {
    "url": "assets/js/137.9dceb8ef.js",
    "revision": "705bcddd38dbbc4aa981633bd36d9191"
  },
  {
    "url": "assets/js/138.760d6cee.js",
    "revision": "a5066f517b76cd6675282a6d44208d83"
  },
  {
    "url": "assets/js/139.1be5f6f4.js",
    "revision": "703bbd8cf83382cad995ae96fd9527d3"
  },
  {
    "url": "assets/js/14.1e544b87.js",
    "revision": "1256721c212c8e4c2f870299a203e00f"
  },
  {
    "url": "assets/js/140.61e7ec00.js",
    "revision": "18da2bf08fb2e3a91b3bf723781a6d37"
  },
  {
    "url": "assets/js/141.af831be1.js",
    "revision": "46766d9f50c49d1289962fbb77fb4f52"
  },
  {
    "url": "assets/js/142.f51e1905.js",
    "revision": "ae8beecd6f0eea11da58bd45a6f7069a"
  },
  {
    "url": "assets/js/143.b2db2b6b.js",
    "revision": "55877da51afea2380ea43d1b941408be"
  },
  {
    "url": "assets/js/144.e4b7f22e.js",
    "revision": "fc4a5c2ad606a6b363cb54097bcdcc46"
  },
  {
    "url": "assets/js/145.d1810ed1.js",
    "revision": "fdbae830074ea84b4deb8cc6ed383bcb"
  },
  {
    "url": "assets/js/146.75b241c5.js",
    "revision": "6a12360392ce938e6f6139451a6a3bc0"
  },
  {
    "url": "assets/js/147.158aa29c.js",
    "revision": "74c3a774a6206a9d6a7402c6b19a9e0f"
  },
  {
    "url": "assets/js/148.5d0f06d2.js",
    "revision": "2844e9e362b28f7250bff91c00d07556"
  },
  {
    "url": "assets/js/149.7b3bdc9d.js",
    "revision": "59a1cec9a7814ac9063eebed0c4f1870"
  },
  {
    "url": "assets/js/15.4e2f3c13.js",
    "revision": "48d8b2aa867b369e26ce5181d2cbd636"
  },
  {
    "url": "assets/js/150.eb25bfa0.js",
    "revision": "0c7ecf27a56c2d4d6453cbc30bb56c83"
  },
  {
    "url": "assets/js/151.c441255f.js",
    "revision": "f508f6ce02f3ce3903ed02f0c60a9410"
  },
  {
    "url": "assets/js/152.0fda549e.js",
    "revision": "adda3f35e9ed5f6051a50bc56e5e552a"
  },
  {
    "url": "assets/js/153.657f2b76.js",
    "revision": "7009b92bc113d8e6abcca92ec94630b7"
  },
  {
    "url": "assets/js/154.f8773cb5.js",
    "revision": "e04c0004f52bc40bbcf2810a2add5624"
  },
  {
    "url": "assets/js/155.42cd6542.js",
    "revision": "5d2b5af4c1851fd84cd512e211da1752"
  },
  {
    "url": "assets/js/156.fbf6c55d.js",
    "revision": "0a55fde420a19e0e8f72ad4a0c34b5b6"
  },
  {
    "url": "assets/js/157.7905702d.js",
    "revision": "246eb1f260fa7936386d58e92febc75c"
  },
  {
    "url": "assets/js/158.f223ce5d.js",
    "revision": "00d45412511749104259017b3bd088c6"
  },
  {
    "url": "assets/js/159.ca1bd4fe.js",
    "revision": "20d61a6f2c03e2167347808167ea7a33"
  },
  {
    "url": "assets/js/16.2438accb.js",
    "revision": "56d438329478d880dc242e90957459aa"
  },
  {
    "url": "assets/js/160.101c2e2c.js",
    "revision": "498168231e29f81647824090716d5e7d"
  },
  {
    "url": "assets/js/161.9a2bc0f0.js",
    "revision": "9ea1479d52101572230eb27563cdee90"
  },
  {
    "url": "assets/js/162.fb515bfd.js",
    "revision": "1e0ba5c395e24210a4b308266cf5debf"
  },
  {
    "url": "assets/js/163.2db46b3a.js",
    "revision": "5634a5d057444de506b6c949587c3d4a"
  },
  {
    "url": "assets/js/164.8aef03c2.js",
    "revision": "97a47f588c962384fc204a31ce262f25"
  },
  {
    "url": "assets/js/165.8e5a2156.js",
    "revision": "39e916efe222d6597475982c51ac5c21"
  },
  {
    "url": "assets/js/166.c3c52eb5.js",
    "revision": "8375e3d5a2b59e1b3f9719bad85a6169"
  },
  {
    "url": "assets/js/167.b78f475b.js",
    "revision": "ac6997f89db7174295ad44bd1eb03263"
  },
  {
    "url": "assets/js/168.ff2b051e.js",
    "revision": "d7c2fd8dacbb572fc21e54626798fb0d"
  },
  {
    "url": "assets/js/169.464b692a.js",
    "revision": "4190a06ea06e5faca38de743b03e3f1c"
  },
  {
    "url": "assets/js/17.b43fd237.js",
    "revision": "4521cf581727a25e97f68f192e7ee749"
  },
  {
    "url": "assets/js/170.6856a394.js",
    "revision": "19d539b0be7c6451a0981deb952bb8bd"
  },
  {
    "url": "assets/js/171.9b686f3f.js",
    "revision": "e43d875e6d13195f2627618ca707ad34"
  },
  {
    "url": "assets/js/172.5c9d9814.js",
    "revision": "70652e8d8dc21d560317a1a43e367c8d"
  },
  {
    "url": "assets/js/173.1b3148c4.js",
    "revision": "5f321d2b203c19f6ec4aff507bfa2bbc"
  },
  {
    "url": "assets/js/174.4bf7f797.js",
    "revision": "6bc7c5ed85c21ebc82d745257cf19ac7"
  },
  {
    "url": "assets/js/175.a35f6348.js",
    "revision": "0611f3758639390a0b70bc8871c947ef"
  },
  {
    "url": "assets/js/176.040cfadc.js",
    "revision": "4d8ecd416f3a050c389879e5c5a42839"
  },
  {
    "url": "assets/js/177.3ad8096f.js",
    "revision": "ef0cf57ba305606b2f5eb93c356b0894"
  },
  {
    "url": "assets/js/178.b259569d.js",
    "revision": "d08cfbadda3a9beca98bbf446c93b06e"
  },
  {
    "url": "assets/js/179.bd1d145c.js",
    "revision": "d96cc5f05fd451b217ed2a114f500f08"
  },
  {
    "url": "assets/js/18.11bd1ef7.js",
    "revision": "7d9389dfb3870cbb1c7b5a044f8738f8"
  },
  {
    "url": "assets/js/180.0b6d9f75.js",
    "revision": "7b9c154045d5388d7cb7062389957205"
  },
  {
    "url": "assets/js/181.438e1bfb.js",
    "revision": "6a038da92b139ec14286b35272eae9ad"
  },
  {
    "url": "assets/js/182.d9731a68.js",
    "revision": "732016568e42c3685e154a46030822e3"
  },
  {
    "url": "assets/js/183.766e83a0.js",
    "revision": "67cdc07f4a1539e95b8b74c5361624f9"
  },
  {
    "url": "assets/js/184.b1bb91b5.js",
    "revision": "2c16e9049d6a42ac398e4210ab8e7a9a"
  },
  {
    "url": "assets/js/185.8ab754b2.js",
    "revision": "d080d6a7bd5f8bef0fd651f736a28667"
  },
  {
    "url": "assets/js/186.30657c9c.js",
    "revision": "0a580b3d1569bdef061fdc6f7b105efc"
  },
  {
    "url": "assets/js/187.b09a0ef4.js",
    "revision": "94f079cf8930897d3512d1a056ebd415"
  },
  {
    "url": "assets/js/188.938e6d82.js",
    "revision": "33aaa84e884ce1889a791d6752089536"
  },
  {
    "url": "assets/js/189.9ed92774.js",
    "revision": "9362a3c239bfcfb2306ffc5b467f3200"
  },
  {
    "url": "assets/js/19.bce0c851.js",
    "revision": "6f1b14dd2c76c0cdbaee8cc769af4eef"
  },
  {
    "url": "assets/js/190.120d9c61.js",
    "revision": "5034f8159d51fb4d11a41d4eb0443562"
  },
  {
    "url": "assets/js/191.a30eff09.js",
    "revision": "e615f1cfb1a44065ea98d46ea77629ae"
  },
  {
    "url": "assets/js/192.92eff954.js",
    "revision": "6fc19ecbe29ad9a190446d846388b133"
  },
  {
    "url": "assets/js/193.9d8db1e3.js",
    "revision": "acd8aed1936d2391a7b9d8d1b7af85ab"
  },
  {
    "url": "assets/js/194.61293459.js",
    "revision": "142825e10e85852ed0397997842c8396"
  },
  {
    "url": "assets/js/195.918224d2.js",
    "revision": "296e8d3d5fb0ebcecbe3c648b059596a"
  },
  {
    "url": "assets/js/196.79e5dbea.js",
    "revision": "acd48a9ef2b8bf791889e13a0f3d8852"
  },
  {
    "url": "assets/js/197.bb598859.js",
    "revision": "c9f9566c6ba8871c64ff868e33b1cae5"
  },
  {
    "url": "assets/js/198.31eea1f4.js",
    "revision": "f4f721e2b5d7daa387c157c451469de3"
  },
  {
    "url": "assets/js/199.7e8e9177.js",
    "revision": "a2a77187c7b526976701da26f81b98d3"
  },
  {
    "url": "assets/js/2.972ad77e.js",
    "revision": "211cf837278e361f4762027412fe78f8"
  },
  {
    "url": "assets/js/20.5a220130.js",
    "revision": "330d9e817aaf645360266319e95c20d9"
  },
  {
    "url": "assets/js/200.3238b2d0.js",
    "revision": "703cb18762f32ec0651bce0e3ad7c87a"
  },
  {
    "url": "assets/js/21.eccef353.js",
    "revision": "4b917d0d026b94c9e309cb28cd473fdb"
  },
  {
    "url": "assets/js/22.02d712ab.js",
    "revision": "b0afdda348e1e8d7f3d232e3767c125a"
  },
  {
    "url": "assets/js/23.572b4d7a.js",
    "revision": "1aeb13b26745a27869a7c13690190835"
  },
  {
    "url": "assets/js/24.b9df89c0.js",
    "revision": "4d81bf0325b3e92df4630fc07bd4a734"
  },
  {
    "url": "assets/js/25.e9359fe3.js",
    "revision": "9d6a0b7be828b9f2f10e2c30d3294c7f"
  },
  {
    "url": "assets/js/26.775c54f0.js",
    "revision": "92239ca92a43a043d505d1fe9465aeeb"
  },
  {
    "url": "assets/js/27.9a197a0f.js",
    "revision": "619470244e1f384efc018f559d9e784f"
  },
  {
    "url": "assets/js/28.c53047d2.js",
    "revision": "eaf5f5dcf4108876500e77e919724d69"
  },
  {
    "url": "assets/js/29.7b861281.js",
    "revision": "7ba9eac0d7097da782f8545894633b8b"
  },
  {
    "url": "assets/js/3.4feac80c.js",
    "revision": "4e096977af867e8fcfbc6e9c5df1c566"
  },
  {
    "url": "assets/js/30.706a5926.js",
    "revision": "9b27874941738eb19f5e8a1e4e9e52d5"
  },
  {
    "url": "assets/js/31.78f40882.js",
    "revision": "bba1b13c572823af22a9be4173334f6d"
  },
  {
    "url": "assets/js/32.b92e49c2.js",
    "revision": "c898c591e5701c4c37d8e45f47cdb267"
  },
  {
    "url": "assets/js/33.e14aee6b.js",
    "revision": "148cebda7b3b67696195a3edfaa2093d"
  },
  {
    "url": "assets/js/34.ae189083.js",
    "revision": "52ec2c45a5c0b7e318678543fc15c08f"
  },
  {
    "url": "assets/js/35.1709477d.js",
    "revision": "c4e67daa16c6c87696463a6dfefec37f"
  },
  {
    "url": "assets/js/36.14d8e660.js",
    "revision": "fff7c47869278f2b6a29cb709348fbe3"
  },
  {
    "url": "assets/js/37.e6cd8b6e.js",
    "revision": "58cc8a774cdd334d8eb690de256af94d"
  },
  {
    "url": "assets/js/38.3c9ac14d.js",
    "revision": "d0a83f6dd0eb699b287a1a028ef405bd"
  },
  {
    "url": "assets/js/39.7ac10266.js",
    "revision": "e2a0f66803010862c145b41f1b5a7732"
  },
  {
    "url": "assets/js/4.0e9173c4.js",
    "revision": "08a7098437031b9600714c5f2cf5f681"
  },
  {
    "url": "assets/js/40.50bb50c0.js",
    "revision": "704ba5c69558ee9bb9842638de4427b7"
  },
  {
    "url": "assets/js/41.56985e5a.js",
    "revision": "6c8a9d71ccf7e46171b199b7cffc6bd2"
  },
  {
    "url": "assets/js/42.05bec931.js",
    "revision": "3a1ac6d1a33170844dd197276b633a4d"
  },
  {
    "url": "assets/js/43.d40c9a7b.js",
    "revision": "e8223b8957c6936064af1e089ecaf0fd"
  },
  {
    "url": "assets/js/44.d669de7e.js",
    "revision": "8fcbb14ee68bb48fac6dc51b52a6a01d"
  },
  {
    "url": "assets/js/45.5cb11a82.js",
    "revision": "73cb6438142368b68636456efba24b2a"
  },
  {
    "url": "assets/js/46.5e4cb761.js",
    "revision": "4b181d6ee1fda4d21b4bb96e1851bff1"
  },
  {
    "url": "assets/js/47.9c5f7337.js",
    "revision": "732b4af42479f942e42a33a4968954f7"
  },
  {
    "url": "assets/js/48.35d2fb34.js",
    "revision": "13e92429b39c72491b4d00e24c736272"
  },
  {
    "url": "assets/js/49.872888fe.js",
    "revision": "1eb65a4890cde66ea10b8a62df39fa78"
  },
  {
    "url": "assets/js/5.a0bcb2fa.js",
    "revision": "31fd1f49eca43afe051ed1b9fefa4363"
  },
  {
    "url": "assets/js/50.d3e4702f.js",
    "revision": "3658920d0cc80f50b810703078df965d"
  },
  {
    "url": "assets/js/51.ce0cff26.js",
    "revision": "1079db881a5969c505a32e32cd88d90c"
  },
  {
    "url": "assets/js/52.dd778999.js",
    "revision": "0ebeba1dd3ce04d95d52972e44bbb349"
  },
  {
    "url": "assets/js/53.ccdfdb8a.js",
    "revision": "396418a72aa3e7afbefd776ed832be35"
  },
  {
    "url": "assets/js/54.6dcac963.js",
    "revision": "ebcab2fca95346ab6af4280a8f224403"
  },
  {
    "url": "assets/js/55.58fe056e.js",
    "revision": "3f6e125d5d0810cb26b784e873c3f16e"
  },
  {
    "url": "assets/js/56.9390e286.js",
    "revision": "809562838babd2b467b2257457b5f118"
  },
  {
    "url": "assets/js/57.a1f73f22.js",
    "revision": "e742d1e6007ff3a2fe981c63951cf3ae"
  },
  {
    "url": "assets/js/58.9a941285.js",
    "revision": "54a63feeb93e8572fefe15b1d84401ab"
  },
  {
    "url": "assets/js/59.b7e1a166.js",
    "revision": "8b2abfa195c8dce073c7386ace933caf"
  },
  {
    "url": "assets/js/6.a6d94db1.js",
    "revision": "4a10f948e0409e2da6ff40040558a255"
  },
  {
    "url": "assets/js/60.5f91de6a.js",
    "revision": "b2a87de896f97953c5b0be2694b684e2"
  },
  {
    "url": "assets/js/61.5c75d351.js",
    "revision": "d349e1a34eeeee42832d876d694f9498"
  },
  {
    "url": "assets/js/62.677504e5.js",
    "revision": "2ba93732fc50cfeaa0b9ac1a487e96a8"
  },
  {
    "url": "assets/js/63.ed8844eb.js",
    "revision": "49cad5f128cd905f91f9726ba2731540"
  },
  {
    "url": "assets/js/64.d8b2c2da.js",
    "revision": "3c15e4a7320ad17fc1c7a6c271e93aec"
  },
  {
    "url": "assets/js/65.5aecaa3a.js",
    "revision": "2dbed775f36d6ae73f20905224591bee"
  },
  {
    "url": "assets/js/66.538dafed.js",
    "revision": "5704bdfee5d3f4b74c052476b238704f"
  },
  {
    "url": "assets/js/67.30daaa64.js",
    "revision": "8e3b527cae9b285c1bdfcc8526e4060c"
  },
  {
    "url": "assets/js/68.19437c65.js",
    "revision": "67187d26df4d2805c75ef23a736298d2"
  },
  {
    "url": "assets/js/69.10013bd1.js",
    "revision": "95bce92751cad658a0f40ad5c5374977"
  },
  {
    "url": "assets/js/7.53935bef.js",
    "revision": "4945795e1ec2101def2df0fc36a0737d"
  },
  {
    "url": "assets/js/70.76444ebe.js",
    "revision": "5c1a5aefc3e4d9c46387a0b9e9814d9d"
  },
  {
    "url": "assets/js/71.47190dba.js",
    "revision": "d39f221e94eba3975bceeb15c94a3a7f"
  },
  {
    "url": "assets/js/72.e855e640.js",
    "revision": "00e4dca74d97b7cda18bc0d0ed007e59"
  },
  {
    "url": "assets/js/73.81731735.js",
    "revision": "67f392fa64680a5dec4b2bd66e3ff9ea"
  },
  {
    "url": "assets/js/74.c20d63c6.js",
    "revision": "695bdf44997377526d14c7324880dcb8"
  },
  {
    "url": "assets/js/75.30618af2.js",
    "revision": "c44a2a70ae4ec0bee19cd5513409f664"
  },
  {
    "url": "assets/js/76.596d32dd.js",
    "revision": "565d2adb051969f03d843a59b311c4ae"
  },
  {
    "url": "assets/js/77.cf9acc3d.js",
    "revision": "88fbe46aeb4a5d13cee192bc21480cab"
  },
  {
    "url": "assets/js/78.d726b0f5.js",
    "revision": "0fa25fe98a2ac6d8c1a1e8ab5d4f77f3"
  },
  {
    "url": "assets/js/79.1f6c1934.js",
    "revision": "575988bc655896f97f559b9cd8a6867a"
  },
  {
    "url": "assets/js/8.109b005d.js",
    "revision": "9836b20832f1919b6b216edfc5b596aa"
  },
  {
    "url": "assets/js/80.c4a26341.js",
    "revision": "b5be9b906e78761c660aa6a8ca5fd038"
  },
  {
    "url": "assets/js/81.4fe3a16e.js",
    "revision": "1481728a940c19b6318ceaf8735d3221"
  },
  {
    "url": "assets/js/82.b62eab13.js",
    "revision": "a74810ee90c71f5ce9a9a3c7bbf6f927"
  },
  {
    "url": "assets/js/83.3a63ce39.js",
    "revision": "f2d3fb317eac047f73382bf6f7739a91"
  },
  {
    "url": "assets/js/84.e733db37.js",
    "revision": "b95be9e982139fef49d553dd2c902061"
  },
  {
    "url": "assets/js/85.da4d259d.js",
    "revision": "8a6ffe182e41c2d185f926d7152549f3"
  },
  {
    "url": "assets/js/86.c36712e1.js",
    "revision": "9de4087f061bbe3bfb9779b543bb8d28"
  },
  {
    "url": "assets/js/87.9d17aabf.js",
    "revision": "fc320528b5562ccaaf58f47f61f49c46"
  },
  {
    "url": "assets/js/88.b0b09dbd.js",
    "revision": "09f1c6f2501c26255111796e41a2b868"
  },
  {
    "url": "assets/js/89.72efb6cc.js",
    "revision": "87380ee672ce74c839892e976f2dd019"
  },
  {
    "url": "assets/js/9.08e940f3.js",
    "revision": "82a76a2d947e696591a298c23e5242bc"
  },
  {
    "url": "assets/js/90.c9d947cd.js",
    "revision": "eb5f8d085874f3c31d4822f962d8d46d"
  },
  {
    "url": "assets/js/91.0b393e0b.js",
    "revision": "4803cc154ea5774d3549d9f5c06d830a"
  },
  {
    "url": "assets/js/92.fc83f9fc.js",
    "revision": "798158dec6d784f0bc042140de9f84b1"
  },
  {
    "url": "assets/js/93.db664637.js",
    "revision": "1c50bcffc9e2eae6392743faee638c97"
  },
  {
    "url": "assets/js/94.773883a1.js",
    "revision": "9528411d4e1f9f682dd968e52e1d2618"
  },
  {
    "url": "assets/js/95.3777e1f4.js",
    "revision": "ad6d316fb5a385286219e107a3132b3d"
  },
  {
    "url": "assets/js/96.ba4d2bd7.js",
    "revision": "b5b60368e56cea469885c03ccefb8288"
  },
  {
    "url": "assets/js/97.898ed6be.js",
    "revision": "566e1721b413995e67cf6da14821e1a3"
  },
  {
    "url": "assets/js/98.acdf538c.js",
    "revision": "931df7802c7839508502c61e2d918728"
  },
  {
    "url": "assets/js/99.b76c78f0.js",
    "revision": "7a472a60fcbf26be494fc12ba2ea331a"
  },
  {
    "url": "assets/js/app.8d8f5b60.js",
    "revision": "bfc74ab112f59ba878d4358d18a5864b"
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
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "617158531f27f90d4ad3eb85c0de774f"
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
