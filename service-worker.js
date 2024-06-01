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
    "revision": "8842458e171617fe7a2f66c4a232126d"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "1a256ec0424d98ef29c821efbed68320"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "c3ff34561b81fcf35137d272b261415b"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "b59995c5ef2271d9746e89190ec3fd0a"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "fae4cc956f63a0e5396bcecadfa41e46"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "50db77217b970858caa4ac54ccbb3230"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "33d43b0dd5b94ad1c383ad80e8691180"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "5a83fe1a0fe927105afd796d9613b7f4"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "00717771f6d314ebdc856f85b8fe3a76"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "963ac67a6d4f24fcb9ef5618b1cbe1cf"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "ee34effdf3106c15850b232572c5269c"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "66bff5e2e4cb6c1a9647f86b94e906d1"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "ee98917a7b9357ca01120b2a0ce3fe0a"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "9fd79ba8247af65f423c85dfb4c600df"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "af888b8c2e6153fff62fd350b9c02416"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "a807cf4ad37635aaff65149945e4b24b"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "642ce31db8a03627665be635280a4756"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "67211b095a31b37ed5d14eb8657c8294"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "dc2ec7af4c460ae36bcb45632ebf2f42"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "0dc633807d6d54d11a6a91d62c1f1d70"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "20ac1060d916c13f962bd05ed9783294"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "fd34a281e8b8676d96824f8c5231797e"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "0158fc4306bc4514cf659c976a0eb859"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "9388fbf09a29ae440fe87aaedfa2dd73"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "da0b4e1ea1911d5564906cd3f9a190a3"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "6c5223f770460fa233705147d82a2a6a"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "14241ca30c614883738aa4c6f2115f20"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "0cc2d054d0c8c844061fefd7f889583f"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "2701251b3c06dd60d074e7f7fda13591"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "0e1349564bfbaf151830414aa29bf432"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "9948bb78f0aba8d3092f448f832887c1"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "ef513a473d1b298e56a13b68622cc737"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "18f8e03a1954a304e4e7ab798c622e8c"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "279f0a7eb6cd1c420fcb7ae5665006da"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "302155acc282b0b656a50550292e0a69"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "cc0829b4ca472e63771aa835c3b77351"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "8345386ecc0de8844790fd9fc442c234"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "15be934fae2f121eec73a31956c2462a"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "e455fbffad8ea9678d58bfca88cafcd3"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "b543dab5471f4092fa4147450d6b74a4"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "3639dee330b71e080392add6872078bd"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "2305dbfccadcb74eeb192c3185f61ae2"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "422cc2f092609d4c9fba67e0e8b97034"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "6cadab7a818ac89fb68289d5e5de3f3b"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "090c07ef998d9f6c3e6a6432e8f99962"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "657f77c38cf30683e23422b6939c98bc"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "00c630d088d2ef65253071ea1c539d6a"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "3d7cdfcb5886c7f6e264d7b054f7d9fd"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "09788d576731d79eeff4a23220719387"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "5c7c49141294c73e71a7589553ac5d9a"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "38c7d6a58b98600046823c4175c7f8a6"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "c6bbfc7d996503f052a82d5977f21a36"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "a9ceb2ac72d1bedd1284664bf11dc20e"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "35f5bd02f1c8f97c80a52552cbd45fcf"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "efb02198ad4d530cc50a444dfcb63072"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "31039450df94f83315ac29dfb8153668"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "f51a44f5f727806c50c37987af74a9ea"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "5a9a3ef20c83f5a4711edb8a2dc0de15"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "78a6c6ded8fd19df64ebb64ba86d3b3d"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "1129a66fc59c634d194d019a014363cd"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "f24ca78cac00b57fe32bb761d0fd3d59"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "a1d88ffeb229eb69be76271335934528"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "c4d818c5185c9dcacf3f179713f0c2c0"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "47f37d2c46d001ef04832e307bebde89"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "f7f74160d91c1c636835bee26de8c02f"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "e776d3d33334c01b7f22044ae9d0257c"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "9b6f3bfc1b04db01cbfab8bcb68ba53e"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "b145633bd41c06f30af0df774b611a25"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "1900d23b46f48fa7468dc8d02f2a961b"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "ce45729e8ed1d5a23c13a6ec8271353e"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "c88434710d29eb2fe874a0012051e352"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "f19946c7208b287223e331da95e5bdb6"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "5de89e52e78ca3a9eeb5d9afc33b169e"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "0b9a116006af0aacfa0777febcfb83c0"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "6eec37be6cd173f2ffbb63590e1f914e"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "913755cb5b2eede93ebb7912a648350e"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "76f86f91d0628ec25e58296e4a1344c7"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "63839beded91ffbdcd4262840b6ce843"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "efe93cb1692ffe4dc5aa7a8749ab1e3e"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "6d49ce9e22839f8bce692232ab1f5fda"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "a864a87a802bef8dcd7f070c8bb7d819"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "55b96c13cf9939f92963eced83842dfc"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "df8a1cd12118d3ee3c6d58f437fd9ae3"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "66a5add96769b3f9972f0049eb9266ab"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "50e3247e1ecd267bc850c6e92b59595b"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "ff43f8a26f356efa9be93ffbbfddd7a0"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "88b5adcd300225867811e2cc29618002"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "4027d999e5aed79f9bc5377554eb4844"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "1474bdf3ff892c6b3a9dd513c67049ab"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "7ef1e4679023ffacda30e6d657350ba3"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "80aad3b35dd787a41aaf76b0d1c926a0"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "874c881fb2338c862910c69d685180be"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "c504e97949fc336bf09bbf52b78826a6"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "075b7c45242b65ccac2622326f7f6411"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "3c3e8f028549d200558bfa24a488f8cc"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "7c50015c6573a79e38c1e1ff02014c4f"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "f0a8592822c891e8dc3dbb5abc6278bb"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "44d289f39f758dfa6253172ef615b1bb"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "a43de852bd28f5149a9f1189d8a85fc1"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "a6ee75ec6f6d166dc37e3130bf0a36fc"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "af52a96d5493dbe5dcde3516f0c717f5"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "6cd89a8a519417988f010a83fb2d25b7"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "5031cc73b7adcc29b45e14908a6bf258"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "ad15a18e107124475f7cf90084e7db57"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "d8abe6cfdf16abc85f01f0551c80d3bd"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "dbb6b7ae2805b33cd50f6dfac164389c"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "99dc995941f04faad5d14e9cceb82fb2"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "16eb61c389a267a46a7309d25ee3ad63"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "729904490f27de8b7078820211c3bedc"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "624a281ccf2b442767191face3ef5147"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "929ad595d9ca341fec552f3020e68b96"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "67a142a63a2a77789fbd137f6afe56d4"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "7191f51b7c96fdf07f0e08f85977c40e"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "bf62314afde885a47e728e73c136dd3e"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "fcb1682f0196e60d786f6a73469ff4ef"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "aff6740da6d1a32da4c7ca93fa90b12b"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "42178109466928fa6678748bd5a5eebf"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "af4e2cb5be25ec798a133f7b3b2e3c6d"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "8e8ef5a8247adf108e5f52e02d6dc7ce"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "f4ab4975f3b7969b47d52f21881da147"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "537793e0739c0f1e722a67e5366a3c6e"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "4e13a0e952238fe2cc46ecc25dd952cc"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "2d4107c1e65174fb437345586ac0066a"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "d1ce72e78057a1a586d18b9f75ba03b8"
  },
  {
    "url": "404.html",
    "revision": "15c7f5ff0f5b1d299a9a7c7fd997a607"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "c88ed357a775a795931d089a148a9b1b"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "e9aea17daeb971618283a668fe4ac7f1"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "65584f0921b9ca34bda8e2786c384080"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "a80f34d2b68a9cf5fb1ccd6c1abee496"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "617ded2a47ff2675fd7e31676ce134fe"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "275e2a898945eb4d8cc08b216e0e56be"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "eccbce0d6780c94fb0e633978141e452"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "e0b8373ea11b89b090272ec42d6272b8"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "c02f3413947bac25c2e464c371899a01"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "9d377c51cb8d97596088cea9c17be260"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "4ef4eb041e326b24ca8996d7b62da0ac"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "c27afd5d648e1341ae8f39bf36e6a044"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "2920c06d931db1a444951c867fad5971"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "8c16e6b47d86bfaa7b082201e7b89bae"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "4963fd7d705d802a0cceb1b3c63e73c6"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "3a2e1b12334c12f53f401334210971e0"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "25c84613977847758272d2cbea78d199"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "bdc046dcdfa414e962761d2304759b15"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "a0459347895a0d6debbf0f4d0dd03ae0"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "d68a668af17729d9222ae48e4689c2b5"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "8d3a23e94b50f0e651ba261eb497f612"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "44720f7484a08594394017b05f2744fd"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "8b033b1ef1acbac75da294004b481672"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "62b2eb400b1fd4ea97ef08b8044ff5e4"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "8d9f0d38c162c5468a38ad5e6688776a"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "1b9630ead02b85ecabaad9659f91e3d6"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "179b6fd1adfe49427539798a8087cfb1"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "4c09a4e24193e768fe26777cc1b27ccc"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "cb8471c3c9d32fae675558fe970f1cb6"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "dff13c799c5483dd6dd73c3d2e30b086"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "6b8f15aaabdcad89cb92400cacd9da13"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "63ad04c1d9fcc064c205192eeecbb535"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "0a0db476088f8ac9dc1af3fa7aff9df2"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "b83acaf70e413a40435c22ad2e882170"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "a52e0b830b495b4e41ee7f8b9d804721"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "fb2b86c6b21131afb606a02896e8fe7b"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "f56694391526ac29859c88a9c839140f"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "0a627809bcad541d543d577b3782ac26"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "dfe485d9dec4f05b5d8f2d55dbf2f0b2"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "a7fcb6c25a1fddb640ed550ab88a57a6"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "65ada7d3cec98189c1631f4ec233920c"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "742af35942bcb2d04320acf0c9d110b3"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "846426853fb14ebbce5381a621e52211"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "75924bc1112d799486665c41af1bb8cc"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "3c4e2c71cee874a927b62e90b422dd44"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "d8becc7784b91bf3d7b7fd242fee3dc2"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "d73aa7013d7ea6e49e4ff552c28f46e6"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "e04bb959ff0069d504f397cde821fb96"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "eb3d2c88f5f84054a627ee19218d65c8"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "8e4b28c21736d138e404082547298b05"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "debfa400ce039d28a1cbbe705a98baaf"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "bc5728d3d689bd3361c0464a670b9080"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "ba38825b976cd865c061ed53ea34bcef"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "aa9d7a2f6f4e9374612be7bcbc64172d"
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
    "url": "assets/js/100.83212896.js",
    "revision": "ac66da60a615bed56f712d7ae9ea5578"
  },
  {
    "url": "assets/js/101.d1228661.js",
    "revision": "7662680c9e6bb5c4b9d422a92cb03faa"
  },
  {
    "url": "assets/js/102.fbe7b669.js",
    "revision": "a727ff602827d967f461b9e0268231c2"
  },
  {
    "url": "assets/js/103.e28004bc.js",
    "revision": "66efa1b7d986482377b6c7fea8d1ce97"
  },
  {
    "url": "assets/js/104.7a734bf7.js",
    "revision": "3d72e80e4dac94fc9f5a6f4807127871"
  },
  {
    "url": "assets/js/105.b5c86b46.js",
    "revision": "9fa79b9c0c21094db929d37387ec6658"
  },
  {
    "url": "assets/js/106.b39abef3.js",
    "revision": "ea92d8bad9014923b9f1299e3853f632"
  },
  {
    "url": "assets/js/107.f9509d69.js",
    "revision": "d0512e2b363071aa9cf8e5ff725d2833"
  },
  {
    "url": "assets/js/108.32770e90.js",
    "revision": "20c326c3bfd60cae7dd476c167bf95a4"
  },
  {
    "url": "assets/js/109.7bc9135c.js",
    "revision": "74c7735c846a2de69dcf2db5dc5d4666"
  },
  {
    "url": "assets/js/11.5d7d6ca8.js",
    "revision": "3dffc1f2066e881d99fbc1f64413c608"
  },
  {
    "url": "assets/js/110.34ec82e4.js",
    "revision": "eeed36040e5ba2d861bae3d6c6539c71"
  },
  {
    "url": "assets/js/111.029df7a5.js",
    "revision": "6d74a9bebea4ed03900467f0042b99fb"
  },
  {
    "url": "assets/js/112.46c745b7.js",
    "revision": "6c5099c2d65987a38c8864783e80b156"
  },
  {
    "url": "assets/js/113.6ed20843.js",
    "revision": "5309365ee2cfa53edd38c3f0ff51af44"
  },
  {
    "url": "assets/js/114.69ced74c.js",
    "revision": "df29b381ff6c3cd41d6634b96fb86a9c"
  },
  {
    "url": "assets/js/115.e95e9346.js",
    "revision": "4c1d15f467a408b978eb82a2d7ad57a6"
  },
  {
    "url": "assets/js/116.7e0507ce.js",
    "revision": "d4e69071ce8afb8e246b0982eb9cea9f"
  },
  {
    "url": "assets/js/117.02586e66.js",
    "revision": "79d4852d5d5ac375253757dd75b2b116"
  },
  {
    "url": "assets/js/118.7117099e.js",
    "revision": "b81c5723f8d480fa747e63f82dff2571"
  },
  {
    "url": "assets/js/119.7a0c503a.js",
    "revision": "c51c947088b7d650fa06bfddc3176597"
  },
  {
    "url": "assets/js/12.82a8919c.js",
    "revision": "923b0c025bffce837be2bd16d41fc3f8"
  },
  {
    "url": "assets/js/120.2afa5e25.js",
    "revision": "f62accb817cce53818a6c8a18dfd16b6"
  },
  {
    "url": "assets/js/121.1b22f0aa.js",
    "revision": "67f554415327c6575ab81498abca57b3"
  },
  {
    "url": "assets/js/122.f71053ce.js",
    "revision": "dec6118f55239885a3f2e5f8c6c5ad8f"
  },
  {
    "url": "assets/js/123.89bff1f5.js",
    "revision": "fe3a0195ea730f1534b020de48803461"
  },
  {
    "url": "assets/js/124.e154f8fb.js",
    "revision": "439844ca4cfe2d658fed90177c74cf6f"
  },
  {
    "url": "assets/js/125.567aa89f.js",
    "revision": "e097b08d39afdba669d267c189a1479c"
  },
  {
    "url": "assets/js/126.df53ffbf.js",
    "revision": "0436831e39da16e33c037ccaa90e7ce2"
  },
  {
    "url": "assets/js/127.3e95e51b.js",
    "revision": "658b2e22c49c5a1cd469bb36849bdbda"
  },
  {
    "url": "assets/js/128.a8f19d91.js",
    "revision": "63509e91fd61a475a86565cb845bdc52"
  },
  {
    "url": "assets/js/129.1acdcaaa.js",
    "revision": "c8b0ea592545da098756950b65450dce"
  },
  {
    "url": "assets/js/13.7acf8edb.js",
    "revision": "50de71f12cd4eadf2831784f466246fb"
  },
  {
    "url": "assets/js/130.b5a272be.js",
    "revision": "2c3ef33b7c90c72ba32d5510e60bebb8"
  },
  {
    "url": "assets/js/131.a689ae32.js",
    "revision": "0546738dd3dadce1cea099d33fe2a6fe"
  },
  {
    "url": "assets/js/132.170d77a7.js",
    "revision": "8d70aacad6d4778db69041cb02980866"
  },
  {
    "url": "assets/js/133.2a34da00.js",
    "revision": "6bd6e6e51a17f81feab474ecfb854660"
  },
  {
    "url": "assets/js/134.aa27e6cd.js",
    "revision": "c796740fdfd45a08db409d551ece569e"
  },
  {
    "url": "assets/js/135.f937bbb6.js",
    "revision": "f9bbe95d9ba83cbcc36957c5c1f669fa"
  },
  {
    "url": "assets/js/136.8416c40d.js",
    "revision": "06c0bdf465b93081bc0aadcaa042d1c4"
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
    "url": "assets/js/14.8edda95a.js",
    "revision": "a97a2d026ab2cb84c875fea98dec1e09"
  },
  {
    "url": "assets/js/140.5f4181c4.js",
    "revision": "2b101cb79c983029c0fbc71a196a917f"
  },
  {
    "url": "assets/js/141.48324b42.js",
    "revision": "a536d3a1e3eba998ced9eb1e4e25320b"
  },
  {
    "url": "assets/js/142.8f3715fe.js",
    "revision": "d400d62bf8524ee09f0a28150ce70f53"
  },
  {
    "url": "assets/js/143.dffd7624.js",
    "revision": "c25254aa908c2510398085c69a81f824"
  },
  {
    "url": "assets/js/144.28b83af2.js",
    "revision": "63dec1f0a443b09ab90cad93d0f7e7e9"
  },
  {
    "url": "assets/js/145.4afa47bc.js",
    "revision": "3287208bbd1c3ade65a2e2d68d414598"
  },
  {
    "url": "assets/js/146.b040766c.js",
    "revision": "14457c361b4244ed867de51b580874b4"
  },
  {
    "url": "assets/js/147.8b90185d.js",
    "revision": "dc52b6276c624c9c3458b844577d8955"
  },
  {
    "url": "assets/js/148.4ec4c53d.js",
    "revision": "dfef4665585435d2973fa60d586e5845"
  },
  {
    "url": "assets/js/149.52a57052.js",
    "revision": "7a83d1f338e73ad6cf27c018436f4fe1"
  },
  {
    "url": "assets/js/15.3072e74e.js",
    "revision": "c988605ccb3e9b15edfde612e132d172"
  },
  {
    "url": "assets/js/150.afb95b53.js",
    "revision": "c32ed1103d473662f0d5137b66fee4a1"
  },
  {
    "url": "assets/js/151.26f3d98d.js",
    "revision": "78d2430c3fe556de60bb5edb048779cf"
  },
  {
    "url": "assets/js/152.496c335d.js",
    "revision": "1ddb2aa9b6ec37996d85827e0af8d846"
  },
  {
    "url": "assets/js/153.0229a703.js",
    "revision": "14d562947cf31ffba319862943459f1c"
  },
  {
    "url": "assets/js/154.b537e4cc.js",
    "revision": "2cba0d5010f80c408124dc1776fc54ce"
  },
  {
    "url": "assets/js/155.01e5f0a7.js",
    "revision": "81d55ab00ffb1b53780f3655d58fdf74"
  },
  {
    "url": "assets/js/156.a1d33927.js",
    "revision": "5afbb5b1d9641a2538783e6644c130be"
  },
  {
    "url": "assets/js/157.9b55d43e.js",
    "revision": "4310ffb5e945a1f1c013f6e9d2638327"
  },
  {
    "url": "assets/js/158.eeb4e48e.js",
    "revision": "f8fff9be84276b91362967fc3a7a182e"
  },
  {
    "url": "assets/js/159.54bfbdd3.js",
    "revision": "3b4790f37659d2d781a876dc4df08e00"
  },
  {
    "url": "assets/js/16.11faa294.js",
    "revision": "6afa7767c18f1e8000b5580e675135ee"
  },
  {
    "url": "assets/js/160.09172b20.js",
    "revision": "e846de7ef5fea2a8845dcf681efd25fe"
  },
  {
    "url": "assets/js/161.9ad648ff.js",
    "revision": "e93fc839a8e4bf536d9dc1621706c2c0"
  },
  {
    "url": "assets/js/162.7d388cf2.js",
    "revision": "c3459a2260e5d4082abb80dd6e92b153"
  },
  {
    "url": "assets/js/163.823c549d.js",
    "revision": "f42e7e1684837ba8c53b729509329f9b"
  },
  {
    "url": "assets/js/164.60cf29fe.js",
    "revision": "e350aee3b6d0e99ae5c6fdfe50a8a457"
  },
  {
    "url": "assets/js/165.1745f503.js",
    "revision": "d3fe90e88373df5be0d6f0de3786ff66"
  },
  {
    "url": "assets/js/166.579764a9.js",
    "revision": "78c91edeb7db9440556f536ad4180ab9"
  },
  {
    "url": "assets/js/167.275efbbf.js",
    "revision": "7b62f280a79ea3c4e93ba19d6f78bd53"
  },
  {
    "url": "assets/js/168.738a8dac.js",
    "revision": "07e6aa191c85699a3ec41260c22ec316"
  },
  {
    "url": "assets/js/169.fe044873.js",
    "revision": "466d9468d38c7e755e164d3fbb220686"
  },
  {
    "url": "assets/js/17.a3feb6a1.js",
    "revision": "40be3870a5a3fb72388a53beff54748f"
  },
  {
    "url": "assets/js/170.28169d2a.js",
    "revision": "2f196c0fbb79d39d17db37ca339b630c"
  },
  {
    "url": "assets/js/171.3225ae30.js",
    "revision": "c47a71124c0a1033b7873185e6477d64"
  },
  {
    "url": "assets/js/172.825d28f8.js",
    "revision": "a776734ee0f6b1e6845c0830d5f7dc3c"
  },
  {
    "url": "assets/js/173.1d60a5b8.js",
    "revision": "91a30d26383fc8ca9ce2679eb6067dd8"
  },
  {
    "url": "assets/js/174.328663b3.js",
    "revision": "bf7dd1e596f0c13849d57b5664bef27e"
  },
  {
    "url": "assets/js/175.ff049d0e.js",
    "revision": "a3f44b589f8a435f7f4b90efaf0bbedf"
  },
  {
    "url": "assets/js/176.291ca142.js",
    "revision": "f389ec480a7f9a17c93b3e4451698f4d"
  },
  {
    "url": "assets/js/177.211f3a7b.js",
    "revision": "f293b35909ae7a11978cea96d1e250c0"
  },
  {
    "url": "assets/js/178.bfeeb830.js",
    "revision": "748b240c695e8fb0da7b01a1368135ec"
  },
  {
    "url": "assets/js/179.b589c4b2.js",
    "revision": "0e2e4207071767789d3d26f210febc84"
  },
  {
    "url": "assets/js/18.a795f64d.js",
    "revision": "43053053ac7aaefe03e03fe5e866783a"
  },
  {
    "url": "assets/js/180.aaf4519f.js",
    "revision": "0d039d36012449bad20c8f2c89c86c85"
  },
  {
    "url": "assets/js/181.597d9b23.js",
    "revision": "b7723250229cbb918c1c1ea4576577e1"
  },
  {
    "url": "assets/js/182.6930eb7a.js",
    "revision": "f29514b9089e8e77bb44e98d1699c01f"
  },
  {
    "url": "assets/js/183.54ade36d.js",
    "revision": "b2c68b12cf2186b6bf9be1ff36d92395"
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
    "url": "assets/js/186.224b2260.js",
    "revision": "a648fe5226d036b7d8f39edb396c07db"
  },
  {
    "url": "assets/js/187.9b381d06.js",
    "revision": "61c2faaefdd597d107aadbdae9cad8c5"
  },
  {
    "url": "assets/js/188.c139c295.js",
    "revision": "990529aeaee5eb54e198693c736272b9"
  },
  {
    "url": "assets/js/189.409a8438.js",
    "revision": "8387c7a9db57cf9a43022017d4a664a4"
  },
  {
    "url": "assets/js/19.2acb528c.js",
    "revision": "0d34b84546277c6a9085273c10b3e42d"
  },
  {
    "url": "assets/js/2.2a57dcd7.js",
    "revision": "02edd57afaf8b034d36b462ac4ec6737"
  },
  {
    "url": "assets/js/20.5bc0f6cf.js",
    "revision": "9423eddd38dee1b1b811551d4a51c10e"
  },
  {
    "url": "assets/js/21.d41be0ca.js",
    "revision": "e9e87229828d6df0a5287af358aa6550"
  },
  {
    "url": "assets/js/22.4786ff49.js",
    "revision": "d8d012edd048b08b56e6a14c2cdec589"
  },
  {
    "url": "assets/js/23.57769683.js",
    "revision": "f9cc1f5faba619b95e2c29436915cc75"
  },
  {
    "url": "assets/js/24.aa35c003.js",
    "revision": "9beb1e51e2cab0ad1c5cd2572406cf64"
  },
  {
    "url": "assets/js/25.bc56aeed.js",
    "revision": "668f830ea9a9e9ac6dc8d02a88f61257"
  },
  {
    "url": "assets/js/26.39f9fe6e.js",
    "revision": "1d6be742e1e8d54fc9c837e5a1059815"
  },
  {
    "url": "assets/js/27.b0712340.js",
    "revision": "a5c31177aa58b7cf83443be8bb444a8b"
  },
  {
    "url": "assets/js/28.df46e05b.js",
    "revision": "d46667f6c02e414b744e13a378eee3ad"
  },
  {
    "url": "assets/js/29.d93a9bb6.js",
    "revision": "2d8bfc763b55bc2cbb31aeb5724b3aac"
  },
  {
    "url": "assets/js/3.cab426f3.js",
    "revision": "8b4aa6705920f0d4ed9e9c0c3d243a0d"
  },
  {
    "url": "assets/js/30.88191920.js",
    "revision": "c310d6eb7d425efa268f3378b987a32e"
  },
  {
    "url": "assets/js/31.b93a91a8.js",
    "revision": "a85efbba551033160f3d464beb89c5e3"
  },
  {
    "url": "assets/js/32.49541bd8.js",
    "revision": "b7433fc34823647b43daa1a26cda97ff"
  },
  {
    "url": "assets/js/33.fb266957.js",
    "revision": "c410773203706b75ce89f26e1013b322"
  },
  {
    "url": "assets/js/34.56624c3a.js",
    "revision": "82f964dab0d633206753242a76e8eabf"
  },
  {
    "url": "assets/js/35.75fa9e74.js",
    "revision": "f5b8b1fe69686fb3b271ab1ccc0064c8"
  },
  {
    "url": "assets/js/36.735b26fe.js",
    "revision": "33c0ffb3ad0a9daff74c2d87d9f805a1"
  },
  {
    "url": "assets/js/37.d07a1572.js",
    "revision": "00e5882d25b918c9cf5f0664c53b61d1"
  },
  {
    "url": "assets/js/38.994f9cc5.js",
    "revision": "8d30c9f52e9790724beba19b5b6afe31"
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
    "url": "assets/js/40.7bf032b2.js",
    "revision": "90fa1bf7d662a3e222c458029f5e5bc9"
  },
  {
    "url": "assets/js/41.ba38cab9.js",
    "revision": "d5f18188057d3cf8a8a145e5a8d645ac"
  },
  {
    "url": "assets/js/42.3504102f.js",
    "revision": "370f290abfc7fc321eaece25dc6c8c09"
  },
  {
    "url": "assets/js/43.0e68cc06.js",
    "revision": "2ea9dde88ea05eefb25db96ed4c54154"
  },
  {
    "url": "assets/js/44.db4a95ba.js",
    "revision": "0b7ca80ae750110ab4c82bb5496cefa0"
  },
  {
    "url": "assets/js/45.9dd1e417.js",
    "revision": "6d989458d577a3fb1ee2c6ddc9d0f19b"
  },
  {
    "url": "assets/js/46.e9b169a5.js",
    "revision": "6ccb1a331f55fda65d7a4852ecebeed3"
  },
  {
    "url": "assets/js/47.523beba6.js",
    "revision": "876eb36fd1453b8489b0eaa6fc558f64"
  },
  {
    "url": "assets/js/48.2646a6d2.js",
    "revision": "bb63822dacc27fea3c2881774c944cf9"
  },
  {
    "url": "assets/js/49.c749c439.js",
    "revision": "fcb0ed43cc44ea8cf8ef4ca846385769"
  },
  {
    "url": "assets/js/5.a95eeadb.js",
    "revision": "e4db72e1005bc6fc59ba5944e48f5b0a"
  },
  {
    "url": "assets/js/50.520d2087.js",
    "revision": "aa8beb55fca347ca6a03bea0dccc0573"
  },
  {
    "url": "assets/js/51.82d95849.js",
    "revision": "40fea1b8292c7a74b4fba2ffd186bcaa"
  },
  {
    "url": "assets/js/52.567de463.js",
    "revision": "6cf14c69e5c420b2a0e4594b4b59d51b"
  },
  {
    "url": "assets/js/53.436b24bc.js",
    "revision": "e5bf175f1d241359b2a2fe12beaf8a36"
  },
  {
    "url": "assets/js/54.f1257a0d.js",
    "revision": "6fee9cc518f173394c1acfb79d73b59e"
  },
  {
    "url": "assets/js/55.12369704.js",
    "revision": "b2f1996121cd9113140d3a833437ba0e"
  },
  {
    "url": "assets/js/56.ce1a334c.js",
    "revision": "f167f6632b6e370ca004b0e3c7464c83"
  },
  {
    "url": "assets/js/57.f664252a.js",
    "revision": "ffbefb782afe31c6c55d665c54b62c5b"
  },
  {
    "url": "assets/js/58.81fef076.js",
    "revision": "f1d7460f0ee5e8efb3eeed8515d1f395"
  },
  {
    "url": "assets/js/59.adfce4cc.js",
    "revision": "37ac0b5e8786822fd77e29c7b9010975"
  },
  {
    "url": "assets/js/6.4e4c5604.js",
    "revision": "f3209afc98326a4e9def67b96156fa1e"
  },
  {
    "url": "assets/js/60.65277313.js",
    "revision": "4c42458f27f89efe083f9ee03b277329"
  },
  {
    "url": "assets/js/61.066e9990.js",
    "revision": "d1de90490624e22d9f066cd5342a4c06"
  },
  {
    "url": "assets/js/62.741b9538.js",
    "revision": "27ab35b0d933b8b809b5460ba34df5a4"
  },
  {
    "url": "assets/js/63.0eb9dabf.js",
    "revision": "22cdbeac07e72ac8622f104402336df4"
  },
  {
    "url": "assets/js/64.6955e022.js",
    "revision": "1b6a79fd012a2179de8192a1eadaad4d"
  },
  {
    "url": "assets/js/65.fd2911be.js",
    "revision": "6ddf592c5b98b25558b0a002de7ee074"
  },
  {
    "url": "assets/js/66.339c79a0.js",
    "revision": "e9a0fd7c38a0fb7e90a9d970c1652b3e"
  },
  {
    "url": "assets/js/67.71460c44.js",
    "revision": "3a377ffe89d5f73383b617e8c7c861fc"
  },
  {
    "url": "assets/js/68.5a3a51b6.js",
    "revision": "85ef7f0365af76ae4fa158a8e7667561"
  },
  {
    "url": "assets/js/69.8a1a7203.js",
    "revision": "e89fde4181495956304883fc566081f7"
  },
  {
    "url": "assets/js/7.16e3e98e.js",
    "revision": "88113c8f76fb7332f6b72bd275bb0f45"
  },
  {
    "url": "assets/js/70.b8fa7299.js",
    "revision": "5995f0fcf1373a883c97be6d3d0eacb6"
  },
  {
    "url": "assets/js/71.1bcd2a81.js",
    "revision": "c63274b18d1ffcd1d3d10cfba2f51a86"
  },
  {
    "url": "assets/js/72.cf7b3b80.js",
    "revision": "a904e9d4afae4bfa3ea8538f32028224"
  },
  {
    "url": "assets/js/73.bd548169.js",
    "revision": "5a50862e21c0317d201d513e80c9f47d"
  },
  {
    "url": "assets/js/74.1cc93a3f.js",
    "revision": "4babafba6fb51011de0fc4f557edb7ff"
  },
  {
    "url": "assets/js/75.14581be5.js",
    "revision": "f7a0af878cf8efe52dbf349e0285bca6"
  },
  {
    "url": "assets/js/76.3c4a9ee5.js",
    "revision": "d7d856c76a351f62d3f614bbc8d51419"
  },
  {
    "url": "assets/js/77.e76d169b.js",
    "revision": "8f7ac68c186d400ac0c880325b606fe1"
  },
  {
    "url": "assets/js/78.dbdfbdd2.js",
    "revision": "1654f5526c6f2c075464340553ca8c95"
  },
  {
    "url": "assets/js/79.19921779.js",
    "revision": "c5bed0944c3c2ede914308fda8a1ffe0"
  },
  {
    "url": "assets/js/8.df2927d1.js",
    "revision": "45e8e9187b143095e4842c64905593b0"
  },
  {
    "url": "assets/js/80.ec4c7625.js",
    "revision": "c2e1c62e5432a80d302e7d393de1a607"
  },
  {
    "url": "assets/js/81.0b27af5c.js",
    "revision": "b8deb72e3814587f3d6c01025450242b"
  },
  {
    "url": "assets/js/82.27d6aa69.js",
    "revision": "18ba7b8fd22c9dc99730c29d3c8f0675"
  },
  {
    "url": "assets/js/83.0068204b.js",
    "revision": "c9c50b435df0e6b1af3f1c739b8e24dc"
  },
  {
    "url": "assets/js/84.0c8fef49.js",
    "revision": "b0ef12e8e067f48d3a0e852f677f0337"
  },
  {
    "url": "assets/js/85.7b6ee025.js",
    "revision": "76bc104d3efef8622d9927780046b3f1"
  },
  {
    "url": "assets/js/86.6d64c126.js",
    "revision": "18e049f87849a5d2f3fa7f1478cf825f"
  },
  {
    "url": "assets/js/87.32f78b85.js",
    "revision": "8360c78d7c55c2e2b4b6efed02a98855"
  },
  {
    "url": "assets/js/88.523e99b7.js",
    "revision": "dcf0616e31f7e1a1d7ae11c3bcdaa5fc"
  },
  {
    "url": "assets/js/89.c0e6c988.js",
    "revision": "8a43faa32d0d76b338b745dc447965f0"
  },
  {
    "url": "assets/js/9.9dca2b66.js",
    "revision": "651d84c136f79b93714777d458a0719d"
  },
  {
    "url": "assets/js/90.651456f1.js",
    "revision": "315c570d81c291679a2e20036aca3dcb"
  },
  {
    "url": "assets/js/91.15a47a97.js",
    "revision": "519a480ce74953ff6872cc3fa921ab82"
  },
  {
    "url": "assets/js/92.b7945119.js",
    "revision": "9acb6b551225f80947920f3ed72b20b0"
  },
  {
    "url": "assets/js/93.291b31ac.js",
    "revision": "6eeddcdf374b1e238b40aa1e583bdb8d"
  },
  {
    "url": "assets/js/94.582c082a.js",
    "revision": "d54b7313616a8c41d99e0f0b4ba5d58f"
  },
  {
    "url": "assets/js/95.30e13f85.js",
    "revision": "7380f39918252c73b0e34b9697c844eb"
  },
  {
    "url": "assets/js/96.d49c857e.js",
    "revision": "c6058211eb814803861c5fed3bf6c907"
  },
  {
    "url": "assets/js/97.be850c26.js",
    "revision": "44011f2068db5c406588e4067b723db7"
  },
  {
    "url": "assets/js/98.82138ce2.js",
    "revision": "3275e340fc1f3a459147097440502067"
  },
  {
    "url": "assets/js/99.faf1e9de.js",
    "revision": "562320bda1d328b50b692a4c08131fbc"
  },
  {
    "url": "assets/js/app.032e490d.js",
    "revision": "ed7f1401ca7236564aae3db8572410da"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "59f64e23a1ba34814d3b1efd5394b07c"
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
    "revision": "4ff50b4fe795f43a61f6de2c74f07232"
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
