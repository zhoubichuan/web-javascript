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
    "url": "1.base/1.js/1.index.html",
    "revision": "ba4a9385e1c06a90171c110c1131ebb3"
  },
  {
    "url": "1.base/1.js/1.syntax.html",
    "revision": "5fb9d263b642228cefc96162f9561797"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "353882c33b38dbc01b083ee368d4a3d3"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "ab48ba5ddca74009e0af549ddc7a92b3"
  },
  {
    "url": "1.base/1.js/2.expression.html",
    "revision": "dd2b31a02f9f386e58eb00928eeda295"
  },
  {
    "url": "1.base/1.js/3.statement.html",
    "revision": "2fd63c755bb8d583663195a97c255342"
  },
  {
    "url": "1.base/1.js/4.datatype.html",
    "revision": "9a0bc730490a03f0bd37bdc11b29a6d0"
  },
  {
    "url": "1.base/1.js/4.implement.html",
    "revision": "1357a244399aa85ddaf15232a44e6a08"
  },
  {
    "url": "1.base/1.js/5.var.html",
    "revision": "69c145feb03dede857aaddd627fb9613"
  },
  {
    "url": "1.base/1.js/6.function.html",
    "revision": "3525a35ddf49805e04d9321086e2bc37"
  },
  {
    "url": "1.base/1.js/7.require.html",
    "revision": "ae1634f5821b62e630315592ce124249"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "27436971359b562a94a7a16034edff11"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "2c7030aa98fad5a206239a71c10f7831"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "d2b0a052510786f9d9f909bdf4fa3668"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "25bfae99e5a2d7d34f2202a2c3c54911"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "571400df32c380bfcb531aaa48eac1f3"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "b2a646b92374b3175c84714661c030b0"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "146c9fb8ebd7a6920b9723af31a51aed"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "f531b5abe320c264333c503f8bd0ab5d"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "b7c7990fa93fd08fc0ecba024c1bb0e3"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "31a0a425cd7e381d33a8e8df2cac99a5"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "04a76db9d2e351ae4b1094d1129fb90e"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "55998857041143f950887b2db29842c6"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "952ef8bf61d6484887cccf45cbf3fbbd"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "07471aa2a75814ad19c2896ea321c3f1"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "266408e9616d4890f4223ed77f542aaf"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "7c9a3fe80ca52b925620e4b3c2366074"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "e3165b863cd96dbf5081b995df57e74e"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "594172c579fe6e256d349a99872232e8"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "bf5a87cd0361926cc021be07a9184e68"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "a6de52dc140344707b818d76e822dd3c"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "1b46040083d9f3de9bfc589ce031841f"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "3b525559015d8f3707b1f8d655b5c2e7"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "f181dc36571d6320f6e09c35b6623a93"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "1569305be8f6d9c61b234e8a2167ab99"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "59c84f48303108f023559ced50b6fc9f"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "83f2d97f3c8ea178abe635c873742801"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "6e911832c6dabb12e67e229d908a13a6"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "ca08ea3de3ff3742fc41e366b51ec3a5"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "366825bf03364368afd1f87b92021d36"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "84e0b98071e5a4893b84c5243f08937f"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "83e05c7a13e5c5ce7f62a589af80b0d5"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "2169687fe86f67ebe26a8e9f43c5ced2"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "9c3e65fe3442b7f9b0ad720a58ed28bc"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "852c44b2bc4a01c349005b88a7554cd9"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "cefe12f7a1e9680874ddc234b0893b34"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "514078c07ec7ee138c87c7243ef95e43"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "ebee2569a19ebdc6f981449358d66e4f"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "de8db1e9f41fe44dba2b5b7fb63f4b73"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "634d09653dbb9c7dd5df9647d481ee2a"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "173383f9196f677f30234195169f2c82"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "7c125ffb60592fb03c3bd793f5492e0b"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "6297abba47bf5801bbaf588bd3110a9f"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "fdec44ba585b1c958158267cc4c960b0"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "43869504bf551d99aa7d48df68927e5a"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "3e51cd9c59f5d67c580e355bfaced9c7"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "9f77d121b30f9e5752599e8d681d4537"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "d341e3450473970034b67b9e73a13cea"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "b329c226757232cc6be14ac40dd8675a"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "dbb144448aaab0f2579fbb776b4804e3"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "4e50ca13a8264b56c55a837e59c87c7b"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "5efb51b9e212d2589071ce73400943f8"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "a9f220943c6d27685e054f412ac5103f"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "2a97d196f3ef41ba31f39964165b5826"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "1960f99597f6ea5dd4b0fd5f64fa60a3"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "79728f05b50eeee39fe4d3892a9b12c4"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "05a6d4c9c54b73ac496daf407f5dc585"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "25a1ec78998c2ef2c15fb11477ef42e2"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "6143ffa3019c45a1a1b4a4046c9d9689"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "f8ae89e861ef266f11cc0c6b7f3d5b8b"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "04fdb2926a27ecaee82e38bcb535743a"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "98bdd1282107b664be874a590e0cef48"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "fdb64cda251d14663ecf47673d13b1e6"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "a56b37a5d5f91dd8d355b3e552e39b96"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "c8ae505d69a88014a364f066cda22897"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "3d23202380576d698f8b7873e2ecb624"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "8230e6797673d06d95cbb01d8108c186"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "5942815f024cafc713dd5818a1aa8061"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "85654d095c6990fddb1dd84f654d5ac2"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "a53b4809a4e9438bc97334ee2812375a"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "cfabdf65ea3e019df8559f55968b2e13"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "1c52592e9d2eed5d31026966a4f3f7ee"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "aa4483637e20a21dca22361bc9f3d0eb"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "c9a1cf5a6ed54c4661f6dbbf65d99c27"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "13f43cdd6b8044bfd2e1958db21fab6f"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "240fb60b4c2d7482664a3a0338ee921f"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "cc9666dfc58b83218a8e5df858acba47"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "b9e8299ea35ededd9dc441fd35188b4c"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "15d4522e0b59c85a0a0b79b06b508f43"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "8f0ab906225198cc2f11e648dd686679"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "ef913085dd09f35c07c9a6ecedfbb425"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "ac320b40fab80f38419a4929d9058051"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "4594eceebf4c0f590d6da5b4d982235c"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "bd8f1493b60315b8a4ebf50751ee30c5"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "9a4685794b10332c42d192b4421dbb53"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "a7a08f36f6c1cba5568bc2759181e557"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "84337920c6e21c7d6c570a796eaa1994"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "2b3187d43f1c274a084ca490e211e6bb"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "f8430f49a1eb236d8c029958c832791a"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "af4ff2a3343d212a4e34705205fd803a"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "3d5ad57a40e0d8231c872dc81b4ea2cf"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "8e54edc597dd98001752d4b81b2f7982"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "336c2cd3f26228e5923644b14f64569a"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "52b95efb3a8946cefc4eb29ee7f93b9d"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "ea4f25cc8b17b75c830557a64155e3b9"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "526e5796c784d67a096f72e46c1466f7"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "150cb3d19ac310a212ccab9e49fb574b"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "47c88f8c4e52b2cd0e7d13f928f58c88"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "353447aa8029de924a81804c19d0eff4"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "f5589c14ac0ad7abfb8cb90fb44c2c03"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "47e8f8676ace3e9650f39ef8a2ab37ed"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "55c46ce0f1715b1a45d9b2eaa20b9bd0"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "570e46fedbd831e1e8a73039c443b08e"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "bd161923cdede85afaa861b748b20928"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "27d1c659e2d60dcbe7bf59110a828043"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "062fbbf922750bc1fbde66fe62c8dc54"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "7de95dbf2092c4bf7a9e1dc12b17c947"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "a3e952150cf9980804e8c063f7ee2b5b"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "4dd83cbd5e915b9916c402dfb0093091"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "977068b5b8c45b4b5de39db5215e78da"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "dbf21a94ef33a5b51a26e9f744b798d1"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "690512aafb74306834f52503af43e375"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "30f8c8173058cea5d9168fbb60da8963"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "28c05e2aea6c71a2817310f790a2d725"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "ca095334b285c4c8b07227c5f7617300"
  },
  {
    "url": "404.html",
    "revision": "ae055c0927faaed46961eb30689c530e"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "8882ae357d84919584165fe76557f1a8"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "96ee0475e3e1113a3e1c354c5582895a"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "4e966f45c70e6dd0bdc65ca6eb17353f"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "82c0225b32b389ee36ef5d5c53ed89e2"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "727925d2dc2c76eeac50f848f47a1e98"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "7f34e60848d6afc0f3b7666dedec3653"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "964e0e53bf5e95c5aaa6ebbab7bb9083"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "2c75b537a7abe62ae80ad868ba25fa96"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "f7272164f05be1963034e131c7ba161f"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "ace95772a730965c83ae31deff7c3603"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "fabd8df975147a852b4a58feeee6c509"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "529f52c24f2d52595cbe1c33095a3340"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "577adcc8f4d4664e0dae5d32ac0810c2"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "57827bcecce7bafc28796c8e65286e20"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "f5451882b3db57d3a9612ffa07414dc4"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "3e5b251bfaf253c6e82b7a8cd52cc03d"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "90326ccf99c92ce24c836b091fa3f82a"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "876b68f33d921fc0dd99fc02b72126ab"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "4eb0c68774a1933cba6ffc7362c4fb73"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "4e0565352c66e824dd9e9053a871e375"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "f568b0d6c4ec00194cc93e95234f630f"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "447c0fcac54f7b16e65b853b38ebc73b"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "8dbdb73b8c9b93581be80215a0dde438"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "89a82a74bee72b10dc53b30d8878cc74"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "f469265693b8dd09f0a3ea05f5e8d25c"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "15717ed1e2af50c8bf67200b294f8809"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "9ef190cae630f5a450650bc657b1ef41"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "72c3113d130a1feef17eecfc7c9eca88"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "35c3731e0d57bfa86580c115547ee36d"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "e05e4c75dd40cef4d02c31a04e82ad67"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "bc1d7b75e9e091217bd4f4c45e97b385"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "bca1ee7ebded16b03d4c610f66f09a32"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "74afdbf1a1bfeb435babbbef05075123"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "40a45a86a1793d448acaf75f605fabf7"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "dafd6efed92aaa6c00583782b5c46143"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "40cd15dca4d493d1b8347ba83f4da722"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "8cb88e606fb79e14095b45b5b947ea66"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "343e4b1888c8dc4f8266b4f1beae2cbc"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "c4064b77245b52df654117eb1d9104e2"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "88322cc948c73e2ddef1c09dd97c3c16"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "88b22b1d886023e111f94dd88748ed34"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "2cb501c20812df7bfec00ba36bde2941"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "6c8b1e8e23850d376f77003feca15365"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "1b5671d83b83e958140271a4172fba05"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "07a2e85ddc242e757c5cb107edc6c40c"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "5b74d2b39fc7aa492205ed632830e826"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "9eab2215364085f9817c71819c3157d3"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "00b009b02455347dab1ee27442980b89"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "9d5119747b03f0b9ad244aa09d41d57e"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "581e4efe0b07152bf35be0210661f8c1"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "8d81722ffa3bd56237194c7239758daa"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "9d36afbcc668603a84e4d9cd9ab1a8ab"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "dc454abb3cf09c4e483dba9d63d29d46"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "0b74fd2d9073e0f5b43b36673426ac97"
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
    "url": "assets/js/100.58e8e632.js",
    "revision": "f57dd7d024df516685b342bcc82c7cc9"
  },
  {
    "url": "assets/js/101.c1d44b5d.js",
    "revision": "fa73585d8729a7cddbde38b6727bbe75"
  },
  {
    "url": "assets/js/102.9fca2d05.js",
    "revision": "e2c1f540532c466ebb889fb1a331157b"
  },
  {
    "url": "assets/js/103.11d86abd.js",
    "revision": "85b84b2464822f0cce21565d3b082197"
  },
  {
    "url": "assets/js/104.02675ab9.js",
    "revision": "7720649f6717d43fa4e4b293e6ac22e1"
  },
  {
    "url": "assets/js/105.35acad37.js",
    "revision": "84e6cae5de212584f064478e0e513612"
  },
  {
    "url": "assets/js/106.4a3e040d.js",
    "revision": "e3e155830b7a7cfc98e1ca92385d98af"
  },
  {
    "url": "assets/js/107.6623f175.js",
    "revision": "fb6b81f30b871c45d06e1747617351ef"
  },
  {
    "url": "assets/js/108.9d3dc055.js",
    "revision": "cca31e9c08cde3310cb6e09922a6838d"
  },
  {
    "url": "assets/js/109.b9e4c882.js",
    "revision": "cbf1fce533a461021a0125af85a5374c"
  },
  {
    "url": "assets/js/11.07dc3b33.js",
    "revision": "b830505e859fa8ef5756d8f653235e28"
  },
  {
    "url": "assets/js/110.2b62e9d4.js",
    "revision": "e3c3afded971a6a6c5e61ddcdab08213"
  },
  {
    "url": "assets/js/111.014a7b24.js",
    "revision": "047f02270a64fcf57d915e4a1355ca4a"
  },
  {
    "url": "assets/js/112.d698111b.js",
    "revision": "e193a635b0174e2146d09e2e101d43ee"
  },
  {
    "url": "assets/js/113.4e3fe00f.js",
    "revision": "b4797a84fc1f5af07c18790105e00b56"
  },
  {
    "url": "assets/js/114.7a9a0897.js",
    "revision": "a0ddf723362d97b8cba3e5f308bb7628"
  },
  {
    "url": "assets/js/115.4b3dde90.js",
    "revision": "11f381a185b64c74c8fb1b53971dc830"
  },
  {
    "url": "assets/js/116.2c4d30bb.js",
    "revision": "9c1d4da2b6a0d87050b8fd115d05dadf"
  },
  {
    "url": "assets/js/117.83cca5d4.js",
    "revision": "79f63237807c6a4e5e8c8bd7992b795e"
  },
  {
    "url": "assets/js/118.ff2ba5d1.js",
    "revision": "b192c16256b1b1e36eb651d7492785c2"
  },
  {
    "url": "assets/js/119.848745ae.js",
    "revision": "7bb571336a41ea12d9410324c36ce84b"
  },
  {
    "url": "assets/js/12.f19dd47a.js",
    "revision": "61bce804f16c7493b737f2c2a108ba7d"
  },
  {
    "url": "assets/js/120.72f4afa3.js",
    "revision": "b296de62e03b257a5402ea19f29b4c34"
  },
  {
    "url": "assets/js/121.98476388.js",
    "revision": "3b6862a7a6b55c5e77f695e636cc3104"
  },
  {
    "url": "assets/js/122.14867a16.js",
    "revision": "7b1ce7d0d651e684a6ca438afcf5c929"
  },
  {
    "url": "assets/js/123.4a7e7671.js",
    "revision": "f5c8762b077080191a810c443637318f"
  },
  {
    "url": "assets/js/124.f8590aca.js",
    "revision": "adb54f00848aaa173edb61d200ad4f53"
  },
  {
    "url": "assets/js/125.de959487.js",
    "revision": "ba9d97ed1d6fc617fa060e09965b5415"
  },
  {
    "url": "assets/js/126.20bbf80b.js",
    "revision": "9cc5250fb40e04f45cfd050c0d9a0b38"
  },
  {
    "url": "assets/js/127.7ec5e6cf.js",
    "revision": "ba70bc602fe43578ba5357db8457b7ec"
  },
  {
    "url": "assets/js/128.f4a1d6c3.js",
    "revision": "9129f8e312370276b694f9754ca094a9"
  },
  {
    "url": "assets/js/129.abd3b5e9.js",
    "revision": "aa427c7b4172263fe2551fd1915ee778"
  },
  {
    "url": "assets/js/13.d0b77407.js",
    "revision": "7a8af6fccd240cf6d5c6bdf45683b3f1"
  },
  {
    "url": "assets/js/130.8aa9d324.js",
    "revision": "b08f20297f738fbedfc1e7220cea18d1"
  },
  {
    "url": "assets/js/131.bbeb00ac.js",
    "revision": "ab1998483cebafb875f25e9c04a378e7"
  },
  {
    "url": "assets/js/132.11cd50ab.js",
    "revision": "045bb9c3c66649d82b5fbed8d872ba41"
  },
  {
    "url": "assets/js/133.c4e86d87.js",
    "revision": "6f50ef7f127e3dbf412a1c775eb69e11"
  },
  {
    "url": "assets/js/134.6f5b5ca7.js",
    "revision": "a9042ecd9abb958711b2e86b941d6388"
  },
  {
    "url": "assets/js/135.4b48087d.js",
    "revision": "f9bbe95d9ba83cbcc36957c5c1f669fa"
  },
  {
    "url": "assets/js/136.6985d676.js",
    "revision": "cf15820ec30fbb0ce2b8b7970da493b4"
  },
  {
    "url": "assets/js/137.480ebda8.js",
    "revision": "1abc6b1f066923a7fbf5259d3b3a4be8"
  },
  {
    "url": "assets/js/138.c76f6d43.js",
    "revision": "b81e119ae3bad2655fbc3b1e8c0b97cd"
  },
  {
    "url": "assets/js/139.9730baa3.js",
    "revision": "04dcf8666fed1632a4c4ef1f453decf6"
  },
  {
    "url": "assets/js/14.228c7344.js",
    "revision": "7896189a013320875e510e920a205599"
  },
  {
    "url": "assets/js/140.05495b04.js",
    "revision": "692c937631a69010b9193c6d3eeb990f"
  },
  {
    "url": "assets/js/141.ff5331b3.js",
    "revision": "2fec83bb4a0df89ab379db326ca42794"
  },
  {
    "url": "assets/js/142.e0400fe7.js",
    "revision": "3f20fd495d6480ed61974cdec6a18f79"
  },
  {
    "url": "assets/js/143.49b1fb9d.js",
    "revision": "ad81a355ad79010a4627ee0255c29c6c"
  },
  {
    "url": "assets/js/144.92dfddfe.js",
    "revision": "a72459e1cc3ad4a2cdde32afd6a2c32e"
  },
  {
    "url": "assets/js/145.a922f2e7.js",
    "revision": "f96cdb3b1fb72ff681b0dee837da9dae"
  },
  {
    "url": "assets/js/146.e584fc04.js",
    "revision": "9e2fe7ef5cadf3e3a9fc7ad15db3713b"
  },
  {
    "url": "assets/js/147.6b27a48d.js",
    "revision": "f38bf1288f26fd0215ab4e157d18b7d4"
  },
  {
    "url": "assets/js/148.779307d6.js",
    "revision": "af6d4cecf38078262837c3fdfd591151"
  },
  {
    "url": "assets/js/149.2193df0b.js",
    "revision": "6be81daf8bf32c6f4410971edcbefec8"
  },
  {
    "url": "assets/js/15.c4857656.js",
    "revision": "721217f597f83fffae6e97b895f51657"
  },
  {
    "url": "assets/js/150.d488a8e4.js",
    "revision": "e0239a32c28d6aa6141281b811705f01"
  },
  {
    "url": "assets/js/151.f1fcdb80.js",
    "revision": "0d0394087c1fb185648a3a2fd97e2c86"
  },
  {
    "url": "assets/js/152.bd44350d.js",
    "revision": "17ca1972d12d8ee1f84ad33003a1077c"
  },
  {
    "url": "assets/js/153.7ee52e5c.js",
    "revision": "81f8e4a543d6f1634148deac23937dc9"
  },
  {
    "url": "assets/js/154.2c35d0e4.js",
    "revision": "5af266400b98075214866a043c69fdd3"
  },
  {
    "url": "assets/js/155.0f71f1c2.js",
    "revision": "3f546cb5a72d599d4d2aab9a83762776"
  },
  {
    "url": "assets/js/156.9a911b29.js",
    "revision": "df041bb7a099750cf95d2bacee97ac11"
  },
  {
    "url": "assets/js/157.723cddc0.js",
    "revision": "a41bacceac32e9da4cad1b8a89414dc6"
  },
  {
    "url": "assets/js/158.17b54a86.js",
    "revision": "7812fcb0cc0ffa3cee3882259cf6cc32"
  },
  {
    "url": "assets/js/159.bf230ac8.js",
    "revision": "4348cc63e03e38358592ca38d2969af8"
  },
  {
    "url": "assets/js/16.0aea9c2c.js",
    "revision": "123f0d08d32a89a73c921978a088f8df"
  },
  {
    "url": "assets/js/160.fbedaef0.js",
    "revision": "d9db30b354178c260ad5af0b0ec186a3"
  },
  {
    "url": "assets/js/161.70ba7eb4.js",
    "revision": "8e9803d34396899a0d0b02460ef7d460"
  },
  {
    "url": "assets/js/162.ba7e0da1.js",
    "revision": "c1b4036fdb6f5bab8f39acf84ff9ecf8"
  },
  {
    "url": "assets/js/163.8cddc924.js",
    "revision": "c865aa833d157f97f48430355f38649a"
  },
  {
    "url": "assets/js/164.1802ddb6.js",
    "revision": "ffeaef65fedddecd3163211150d07c2d"
  },
  {
    "url": "assets/js/165.53bfe0ef.js",
    "revision": "6558f67af6042b90743432941fc8c395"
  },
  {
    "url": "assets/js/166.b1a70dc2.js",
    "revision": "dee2ef7b10b99880e5286d1aca361d7f"
  },
  {
    "url": "assets/js/167.fba09181.js",
    "revision": "b208ecf9638eaa59f08ed97f372e1c3a"
  },
  {
    "url": "assets/js/168.1e9028a9.js",
    "revision": "96031a6de8aea6b0a988614c331e2466"
  },
  {
    "url": "assets/js/169.2b4dd692.js",
    "revision": "4905b9acc0dc9d4b3d79065577d73947"
  },
  {
    "url": "assets/js/17.01eacffe.js",
    "revision": "21f624ac0b9408de2b941855214c5d58"
  },
  {
    "url": "assets/js/170.8d47b749.js",
    "revision": "d967aaacff5bf40f12c8ed216d3fdbd4"
  },
  {
    "url": "assets/js/171.e702ceb2.js",
    "revision": "dd9521f0abae766b1a9433fa1cff2353"
  },
  {
    "url": "assets/js/172.dedcfd07.js",
    "revision": "7a44b8d65713a9741d12e228f83e2933"
  },
  {
    "url": "assets/js/173.41c725e5.js",
    "revision": "4b720f6a4dc7aec1470749508bd14430"
  },
  {
    "url": "assets/js/174.ebcec8d0.js",
    "revision": "2d783b2fe0adc262d00f385d860ef813"
  },
  {
    "url": "assets/js/175.94f4558d.js",
    "revision": "f160efd79cd161c10729d3f0b5235719"
  },
  {
    "url": "assets/js/176.31bece9f.js",
    "revision": "acf25c8aed82d2c3a090511afe5608f9"
  },
  {
    "url": "assets/js/177.2e762ea7.js",
    "revision": "5475db23b398642cc9d7cadef6bc5560"
  },
  {
    "url": "assets/js/178.17f23e7c.js",
    "revision": "748b240c695e8fb0da7b01a1368135ec"
  },
  {
    "url": "assets/js/179.e9e3632e.js",
    "revision": "3b527256e3ce2c748d50bce59ae994f5"
  },
  {
    "url": "assets/js/18.d4da6d85.js",
    "revision": "38c44310e875f0727ce48666f40460d8"
  },
  {
    "url": "assets/js/180.5cf416ac.js",
    "revision": "591e64e4e095e2d4153100b1eb7ce290"
  },
  {
    "url": "assets/js/181.0ee277e6.js",
    "revision": "032ddc90935899a23d859f9ee3d735cb"
  },
  {
    "url": "assets/js/182.d7f49572.js",
    "revision": "6c919be8c0416be24680c7ad786a66dd"
  },
  {
    "url": "assets/js/183.fbde84c9.js",
    "revision": "5a771bf3a403b458e4eda4ac12b90526"
  },
  {
    "url": "assets/js/184.35f5c158.js",
    "revision": "2879fbbe392e013f1fff663dd91b09f7"
  },
  {
    "url": "assets/js/185.f94799ee.js",
    "revision": "315abf5a8649ff16bf3c9af0be9bc821"
  },
  {
    "url": "assets/js/186.91511f2d.js",
    "revision": "a648fe5226d036b7d8f39edb396c07db"
  },
  {
    "url": "assets/js/187.0c1e376f.js",
    "revision": "3ad4706fc98d349de93795f9284b25b7"
  },
  {
    "url": "assets/js/188.8bc0afb4.js",
    "revision": "794652a6f00d648503cacf65b9f2235e"
  },
  {
    "url": "assets/js/189.22f1b5ae.js",
    "revision": "81401ed345494d4b3250f92f04a40dd5"
  },
  {
    "url": "assets/js/19.1474c5f8.js",
    "revision": "e2e53692e4a5a4a0fcf8c445d97bb998"
  },
  {
    "url": "assets/js/190.eee4db5d.js",
    "revision": "0ca42dcddb944201f89728caa078d97c"
  },
  {
    "url": "assets/js/2.2a57dcd7.js",
    "revision": "02edd57afaf8b034d36b462ac4ec6737"
  },
  {
    "url": "assets/js/20.0691bdd8.js",
    "revision": "b222258e28d68535dc104f6c8db829a2"
  },
  {
    "url": "assets/js/21.73c9eae9.js",
    "revision": "294e1a7e4849d3cf8140acc4d923b1f0"
  },
  {
    "url": "assets/js/22.2c344e61.js",
    "revision": "50635f5ab26d943fd061fb9d1e15d07d"
  },
  {
    "url": "assets/js/23.90643e2e.js",
    "revision": "628c16e27273e98a84d30463dba6fe42"
  },
  {
    "url": "assets/js/24.2a77485f.js",
    "revision": "2834181c5084d16c4d5def38ca3ff1fc"
  },
  {
    "url": "assets/js/25.0f3f4476.js",
    "revision": "274ef4d6fcb69a7b9a1e86a2f951b585"
  },
  {
    "url": "assets/js/26.bff491f9.js",
    "revision": "1ea15b37d37ba5c8740873397b43f905"
  },
  {
    "url": "assets/js/27.db17b128.js",
    "revision": "a21a1054341e734e99e2e1a86518766f"
  },
  {
    "url": "assets/js/28.40102589.js",
    "revision": "6bfa494fabb701b73536cdb0cc283b24"
  },
  {
    "url": "assets/js/29.eae78fb8.js",
    "revision": "8e755a406c35027f0b3f8acbf8aa2300"
  },
  {
    "url": "assets/js/3.f50ec0c7.js",
    "revision": "61dfdcb4381f63aa3158b46df5785040"
  },
  {
    "url": "assets/js/30.db283952.js",
    "revision": "120164679d4ad3f6160979ba59352301"
  },
  {
    "url": "assets/js/31.7f161365.js",
    "revision": "ee6a21fed21fa16ab9e077b82661d677"
  },
  {
    "url": "assets/js/32.ad77e991.js",
    "revision": "36fefad32a4c30d744becf251a4565c1"
  },
  {
    "url": "assets/js/33.9f76c96b.js",
    "revision": "b2a5e60bd99a318892ece55b077f422d"
  },
  {
    "url": "assets/js/34.e3a06710.js",
    "revision": "26798bc139242d23906f467393589c42"
  },
  {
    "url": "assets/js/35.523a6b34.js",
    "revision": "09707544d49ac425ff93ad45220026de"
  },
  {
    "url": "assets/js/36.08b3f727.js",
    "revision": "e99b51f6d146b021e031a955132d4309"
  },
  {
    "url": "assets/js/37.d07a1572.js",
    "revision": "00e5882d25b918c9cf5f0664c53b61d1"
  },
  {
    "url": "assets/js/38.f52aafb8.js",
    "revision": "3acdbf1243c2182d2134fe6784563201"
  },
  {
    "url": "assets/js/39.c9647b83.js",
    "revision": "a4377811f3aa3c9383be94a213d17ed0"
  },
  {
    "url": "assets/js/4.b8f981f3.js",
    "revision": "46adf7404d74d967064007a91edeebbc"
  },
  {
    "url": "assets/js/40.4676e308.js",
    "revision": "947fc5f929f9a4d093e4b68c282cab9d"
  },
  {
    "url": "assets/js/41.f49d1774.js",
    "revision": "b03d7fe8d6705afd40d4dc1027f1064c"
  },
  {
    "url": "assets/js/42.66a998b2.js",
    "revision": "ca9b51b29476f0d6ecb9a4cca2d89c2a"
  },
  {
    "url": "assets/js/43.086af229.js",
    "revision": "fad2dbd943209b5dc40715717e969345"
  },
  {
    "url": "assets/js/44.e2630d65.js",
    "revision": "9bbbca762a151e4f488a5cf323c5859f"
  },
  {
    "url": "assets/js/45.e46cdb37.js",
    "revision": "50b0e91f7fcb7ff4374246db0d1e8295"
  },
  {
    "url": "assets/js/46.f7f4ba9f.js",
    "revision": "f6d685a149f819df93d47c530ecc3823"
  },
  {
    "url": "assets/js/47.b6ae8f8b.js",
    "revision": "af0338a00eca0367364df342d9476261"
  },
  {
    "url": "assets/js/48.7c17c91d.js",
    "revision": "672e4c37b7ab5ead5ceea344912e4a41"
  },
  {
    "url": "assets/js/49.5c08bb1c.js",
    "revision": "5f55b48384b1d30292ee4bdfea60d523"
  },
  {
    "url": "assets/js/5.a95eeadb.js",
    "revision": "e4db72e1005bc6fc59ba5944e48f5b0a"
  },
  {
    "url": "assets/js/50.90e4fef2.js",
    "revision": "a5a4b7e1045f4924c0999c591cd0dfea"
  },
  {
    "url": "assets/js/51.0e814ecc.js",
    "revision": "408783f05cd3c43acbc8affb7be08d50"
  },
  {
    "url": "assets/js/52.ce1d2b82.js",
    "revision": "cfb003d1df411d70222e46555f77c838"
  },
  {
    "url": "assets/js/53.5e3bb97b.js",
    "revision": "6935e3b5a8f6f3b5577e45851a7d6518"
  },
  {
    "url": "assets/js/54.12ba04b6.js",
    "revision": "169b645f630e8f98b754ab4fff2955bd"
  },
  {
    "url": "assets/js/55.abb3daa7.js",
    "revision": "6a342b187e605d234e8b392b9b2e1d8c"
  },
  {
    "url": "assets/js/56.eb53b5c8.js",
    "revision": "e6fbc6a5de963bf024f168e46b98280c"
  },
  {
    "url": "assets/js/57.7e078d65.js",
    "revision": "05786082e4d4a49eaa6b4fba753705da"
  },
  {
    "url": "assets/js/58.ac60d888.js",
    "revision": "0dff36129f40c9617211f79a7f391861"
  },
  {
    "url": "assets/js/59.a8b501fb.js",
    "revision": "d6854539f757c24334d0e261c26ee4f5"
  },
  {
    "url": "assets/js/6.9318dd43.js",
    "revision": "57a4552f6ac3884612da6ac5cca252f9"
  },
  {
    "url": "assets/js/60.29f5fe28.js",
    "revision": "200cb6693e3b4f843bd8639981093c1a"
  },
  {
    "url": "assets/js/61.612104f1.js",
    "revision": "2833870fb3ca939c01b66aafbecbefb1"
  },
  {
    "url": "assets/js/62.9b8c2206.js",
    "revision": "4ffabcab3a9241f36b3a1ce50f52862a"
  },
  {
    "url": "assets/js/63.de207e18.js",
    "revision": "5c2365d311e3a3870bcf4b7d498d8de5"
  },
  {
    "url": "assets/js/64.ea17efe8.js",
    "revision": "129cd08a4ee471bf8c1c10e9028f622c"
  },
  {
    "url": "assets/js/65.45abe091.js",
    "revision": "333e2515774f873263b696eb3864fc6d"
  },
  {
    "url": "assets/js/66.e7c61ad7.js",
    "revision": "91d46cd62c2ec438e173e5e5e818fa96"
  },
  {
    "url": "assets/js/67.dc3a4454.js",
    "revision": "009617a9c16ac18bab2ff9cae2845bda"
  },
  {
    "url": "assets/js/68.5bf7eeb3.js",
    "revision": "4612e85b67db7d0899a1cc7100ab8528"
  },
  {
    "url": "assets/js/69.c3f16aa8.js",
    "revision": "9e87b19a7a0ca97e494c77876bc3d380"
  },
  {
    "url": "assets/js/7.16e3e98e.js",
    "revision": "88113c8f76fb7332f6b72bd275bb0f45"
  },
  {
    "url": "assets/js/70.8e4b3e93.js",
    "revision": "4021f88eaf544d42e264cadf03c0fb42"
  },
  {
    "url": "assets/js/71.d95725d6.js",
    "revision": "55820af19a9e823faef47eb80f00670c"
  },
  {
    "url": "assets/js/72.7de39b6f.js",
    "revision": "07ff929eab8bf5a6b28c8208e6432b9d"
  },
  {
    "url": "assets/js/73.97bc886c.js",
    "revision": "d18c008290bca2e83581d567cda634d0"
  },
  {
    "url": "assets/js/74.00e1d400.js",
    "revision": "ed3240ff4a962711c0fae4603534316b"
  },
  {
    "url": "assets/js/75.663d950b.js",
    "revision": "e3678db71d81871e3b6aea5a3d251976"
  },
  {
    "url": "assets/js/76.709fff78.js",
    "revision": "60781580720a0c308a39f1c01811d520"
  },
  {
    "url": "assets/js/77.46c50f3e.js",
    "revision": "5fd7fa5a63d959baf2ce1aaa531233af"
  },
  {
    "url": "assets/js/78.c666ff5b.js",
    "revision": "f79786e954dd778d7ffea49e1bf27003"
  },
  {
    "url": "assets/js/79.28c6d47f.js",
    "revision": "84b4e8ccd4198971eeba18be050fa949"
  },
  {
    "url": "assets/js/8.df2927d1.js",
    "revision": "45e8e9187b143095e4842c64905593b0"
  },
  {
    "url": "assets/js/80.bf8af639.js",
    "revision": "f32babaf9172df3130d13529892c6b5e"
  },
  {
    "url": "assets/js/81.27180c41.js",
    "revision": "94dc30b4d28db35a28c29a18399be848"
  },
  {
    "url": "assets/js/82.428852b7.js",
    "revision": "3a3ed7e63796aad723b77ab7d39572f6"
  },
  {
    "url": "assets/js/83.ac90d126.js",
    "revision": "6fefa4fc020e6777ab6fbfacb512ae4e"
  },
  {
    "url": "assets/js/84.e270714e.js",
    "revision": "c1b11e2c9264a7c2b3abd7b974682448"
  },
  {
    "url": "assets/js/85.ca34e00b.js",
    "revision": "2cd89d4cca5445eafbf1d5d9577d6948"
  },
  {
    "url": "assets/js/86.efa5ac02.js",
    "revision": "e800ac45fe888715f9d64ffe639cf6df"
  },
  {
    "url": "assets/js/87.ad83e049.js",
    "revision": "65ea8ed47310213c2fc0fa7e5e056d18"
  },
  {
    "url": "assets/js/88.fb1cf8d0.js",
    "revision": "9660e7dd9ba9a539ba01987703c92fb5"
  },
  {
    "url": "assets/js/89.800c4cec.js",
    "revision": "f0555a5ca96049cea8235ec95eac2a50"
  },
  {
    "url": "assets/js/9.9dca2b66.js",
    "revision": "651d84c136f79b93714777d458a0719d"
  },
  {
    "url": "assets/js/90.32cd8bd4.js",
    "revision": "f1896c8125e066861ed89ed3f7d298a6"
  },
  {
    "url": "assets/js/91.55d46527.js",
    "revision": "b24498b88b49c8c96cc27c4a36200108"
  },
  {
    "url": "assets/js/92.c748978b.js",
    "revision": "38f887cc9ca0cf048849a3a8b4df5465"
  },
  {
    "url": "assets/js/93.db8f22b4.js",
    "revision": "9bdeddb15fbfea177fd00c97e258f86e"
  },
  {
    "url": "assets/js/94.e72efa1c.js",
    "revision": "17cec0f4670c407f75c6cdd90f9d7722"
  },
  {
    "url": "assets/js/95.977b9b00.js",
    "revision": "e89fe0e74a44b0af9fa134314581b1cf"
  },
  {
    "url": "assets/js/96.306faf7a.js",
    "revision": "4b00cbbf7cb95714d5f43f0a9cb0a670"
  },
  {
    "url": "assets/js/97.d15f2a60.js",
    "revision": "a00016bfe3b7d9f1898b9bfede9c392a"
  },
  {
    "url": "assets/js/98.b341b50c.js",
    "revision": "22019a7f21451fee0aba2a109fb33520"
  },
  {
    "url": "assets/js/99.71ab2e5f.js",
    "revision": "1958e940272785e13ed445e0dbae03ff"
  },
  {
    "url": "assets/js/app.8eee1b8d.js",
    "revision": "e3499efa73f3adbfcc95d6a596741637"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "f11fc9273a0edf0d5862e5aa2d027e7f"
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
    "revision": "e00f25f7008315b740e2e89ece760b8f"
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
