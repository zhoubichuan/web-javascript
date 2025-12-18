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
    "revision": "ebead0973ecbe616ea140fcabc9a5950"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "32dc87aaceb81cf461879daba913debe"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "1e995d53b0bf742a9589bfa018409558"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "ccdea8827a9f55b69e7425f52c186a40"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "db2e37b68b266257712188072e39b020"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "02361be4d7c3074850c426665fbbe442"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "a62dfdc9db739eb29e7b86c82027573f"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "31f9a6804e3c75578cab651e98d0e1cb"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "e90210181824fd9737a3405b5de19854"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "2836672a1d1b9bc73f0bd8425629da34"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "262f9fd2a3314b320b560fad925c7b37"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "64f0eabb12bc04eac635fa2c3153489f"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "5e63cbb8fc6f3f79222301ad8c7ef443"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "019a14f2d728b719a9274e0b12c82435"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "9aa6f00840db48f48b371b8d67b6eea5"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "61fe24e9433852ca4a5fcacea5c3f3ca"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "d35c03b3b5527ffb58db8bda236b06f1"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "1700140f886e138f77566d996617ba6a"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "3665233406bbca4fbe8d6c1bdce8008e"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "012066354207cbc20e84945dceaac8cd"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "bff773ffc015a2b519222897c606cd88"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "e39327b579cd554c777baecb846e561b"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "b745e5745c51d60170c5bc7a1506c0dc"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "747ff616f58fc88f041ea32b7bdd2c2c"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "65a99648895ef89b22f5df4269e09484"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "70eaeb992c55ace5cb8e8a2f7fb22534"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "65cdc5706d4e36ffe98c85f9464d07c6"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "d6d804f6dee3da43ac38e3c4b632c91c"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "8b653b6d6ab770cedc04eeeb07e5d0df"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "1bd01dc27dbdcb7ed754dc019d59540f"
  },
  {
    "url": "1.base/3.JavaScript/1.global.html",
    "revision": "0144510959c3611ea84352d670326f7b"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "8a4ac213713d13fa74edf85668a0d693"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "7d017cd5eb18e1c0cb91869e38024162"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "5990879f8165fd56a3e6877167475c8c"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "f5c33acabf03f53007c449898ef5e8d2"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "251ab701c7a0997b0a8abc4436564d54"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "db86cf0987976e0df36ad84246d62bfb"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "aef934f4451c9248b4a3fc8d372de526"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "835c083fe7212cb73bb5acc1e98886bc"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "5f2f3df7a40d1ce1a8e0631bc6ce3b1d"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "52b4ba9d126e070e2c8b740c1f460616"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "f4b645826eba2ddafed3884da003a0dd"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "451f21170806c4aaf8d633d81dc4d0c8"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "3e459b76d40ce0a184f25d344071fc3d"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "c2a2950284677273efe19a73f6725433"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "79bcd8bdeffa1463dc4ae24cf1e8d3cc"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "bbbf80a2cc2f262852930bf4daf08096"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "658cf43ad98fc24302cb7b2db0114970"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "1be9296e0d766af2d93ef892a5736290"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "07bcd343db1ead9c517754a4f8fbbc0d"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "0f20611911b2a4340e7485af98a33800"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "0782720b3e04919fc0ed01df576e53fa"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "251cf979663b6ea4ecc7f65a9b81104c"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "3f38cb67d9899ae1b9a1d42399d8f8a9"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "263ee30daf768bfca0d64be268ee5483"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "8e6758f670554c0e92bd0d4d9a85741f"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "b9a4783246ba366b1b65c613d542df63"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "97688035778f871d68ed15471b0bcf98"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "ba45580c88c1900be5f61adef6443ab3"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "6774a3063e1f62cac17ff4fd50f2fe61"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "7fa20b50fd6c1c159227ac5a5b9b345c"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "0bc0830a2d2097aed2e5cc42a2c7d47b"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "0c0a23de37657a57eec271ff495b8061"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "53df2cbf98c80a4281e8211d29eca89f"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "2a6f263718e5457c694a4bb63171efdb"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "8b7a46dab1f677af5273e048c7130c3e"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "28d9acb76fc139ed6de406c08460cf93"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "418115e5584a15b6964abb026d08ce6f"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "09170990c74dc1803786b047ae358ec0"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "8c59c23ce31f00b91046b35ff2101d3e"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "f9cf46a35573f6a4b3542eb2072f1053"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "5be101d4dccd55c4a63b26b56dda7645"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "d44169874f8d6431d7af9c06670de1c8"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "fd464c5a98258314b2ee0fedd6a8636a"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "73747cbe9787cfadcd9e3a28d6aaf8e9"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "0af2988395ac6bccd8ea79e238acd7b1"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "37257ce816077e1072087fc5babac497"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "43ce622c797f7cddade9267c3e29f3db"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "aa7fe75e428e893da334b861d6c624ce"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "f112555cfdc3b7dac905c052f8a219b0"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a67a1043c4c1f6cad5b5de44b1043666"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "ffc5692d694f456c443e90a74fa352a7"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "6aae675da43712b53ddffc82cc758c2b"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "0014c3d312ac761a74a12e4a81aad51f"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "8711d61fbd0342632d5c250a8a7cac75"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "348cff7c6e3d15f6d64fd52a7e2b1c39"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "f6f545997c7aeff02774d20194dc4a9f"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "f933cd660e1802665f709e1daa12538c"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "ad33a06ae7826403549d1a9460e1f39a"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "61a6a0504631e2e44138116e1c5b26c8"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "326f1cc0cd2a3cb35edb1f815d9e9c8a"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "bb93d3878ad0a3fdb04ae89c47112f96"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "21a39c9815a1fca0b630cf2aa63b6a59"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "61d7efe35a66647f14d917d5dfbc16b6"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "c1755935b3fa0bf7c6868a67799dd4ec"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "17d872e3179f611692efc45fba9edb89"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "fe96e1f9328febd2450bd690d29795af"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "8fff3fa5a6af89572d2a0dae5b291efb"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "6607cb0ec25c5d287648ceae30f8ff1a"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "1f3b46b1524a7522b45e3552e12a2c4c"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "ad79ac87abda95a77db412b4a0c78de1"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "8d1303d23ba652f374e4482d25dd9e69"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "3cd35b4082c67a99632f22a62310bcc3"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "d9e5d5b1a39d657943f3f94d8d57672f"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "0bd8b4586bf8fc140775c70a2a0dbc4c"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "00f8c77c2af23b22521fe84a01ba7eba"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "60e9bd433972c5a6e5ce21ba0e575bd9"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "8c614214e01d98d6af7448a2f7bbcda9"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "6b85b6739ac99f5aeca76588b26e8b06"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "54406fe492da28fd778bde0ab76b3df3"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "5d617e2ee3ec8aafe2192c19c9fdd833"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "39a195810a4bb252eb8ff930704c22b0"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "a4ff6075685b52a58f706aff4cb08591"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "eb76a90b5b7b4cd9ac08db0b69436c71"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "a1b244251f957dfa8000f4b8fb789320"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "40a237fa5de96de62ae35440deeb286f"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "3f3a31650e326e3f3cde5382a90e550b"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "bc60e35f574667dce36af5c4f62da647"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "85d8923ba57f1b9b1a679103bb77f3da"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "976bbe2df008f9fde3e6ba478e063b1a"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "5f4f17ca136e94a3c09a01097395de36"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "20d52023e608ee53929ebcf9c078e175"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "efe13dee4d79928c807b8558b35206f8"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "be04aee47768da51b284cb647325be80"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "4949b0f5811fb06a7cc58c3f2b6fd3cd"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "4eb8933c4de3dbe42f8ee83b469a743b"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "5c8625d531cac023e47aa097788ba5d2"
  },
  {
    "url": "404.html",
    "revision": "ff8e240ed6b54b6608de2a15fe08abe0"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "b4c3e675255d738032907e8fc02a29e9"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "380067b74086eff6e735116931240f30"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "89341a2059e30cbb6fbe915188815c71"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "b09769cfbb2e5e24259db9c1a464028f"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "b524733a56a89999ecd01cc4ed92437b"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "5e5e4494d122a5e4d3bd3d5729803ff3"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "5d7f34aa96d636ed49c5ff38625c67ec"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "834c3fac6726f93e6a9984065dd23fe3"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "bfeb716b3081a929bf6a4e5b4e1e22b7"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "62efca765dedb8ba3a0d01c0a2e02e63"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "d713db108e366f72177318527876a3e7"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "229f5a9bfae6ac56137150f9bb5920f9"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "64dfd61bbb2a0cc3d82fda970b8f7fa7"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "f38bd4f33f3c7f1554857052884e7462"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "728ac95081b9bfccd85bde560f627916"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "b948e08c455c846f051334e7862203a6"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "8b77a6a6794707c86fcf8aae823ce069"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "122b28c91f5e2f6591e566aabe0c56ee"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "0b804a71a4a59e743fabd5f7ac42c5ca"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "3cc8190abf3524283f803f7b2b9a1461"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "d6fdd0a197fbd46aa6d55d93bd281a5a"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "7e1213a6b752f16486ac21ac08f3ff8d"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "0d45461392eb329f0a95fd397ceb18f0"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "ffee7b66935fd4aff56c3faf3435fffc"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "4d84becd5fe9d7b4184dd0974e64ad8c"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "c798a4e7d4e53385eac9e6b211f053de"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "af2a0efbcb0b939132384e3428e04127"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "d41362462d6688f99438d4c22d989a68"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "203f47c603d24c1907c6b63b3b877a4b"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "0d59c05cc53e1be58333bc68b49287cb"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "8fe50f712b3b97133c6710cfa6a76d70"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "dc91745b3145e34f07b9126a0cc4d88a"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "e4434d5dc66f22e89a10bdbefbdac7e2"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "27e80800dc33752cc324bcb32fc22c65"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "a463d267b62cdd5905f9ba0b73789c22"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "b7ca876ae43a12ee2beef967d17ac148"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "9f9e1947f61ae33c88a1f8b7dad2e208"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "0553b3f2603a6134ef0963047bdaabaf"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "31fd0961f8e8a25b5c989a6ca93d4259"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "362e025661f66b4d7be3db198a5d1f07"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "60306fa1092fc31adfe74c54bbd624e4"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "49b88d3e12ff713b56c601c9c95233a0"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "19f0038e65e95aae8950ac36db6e4fa9"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "47d944fc1849cb5a972c9c410b8d99ba"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "10af19f7f307c89cd29650a181138dec"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "83f8ec7601059335170e13872d98794f"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "39430a9d0f920f2d253ac70214dad749"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "4c5b1e7c0514793dd6bda8f1819d0e59"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "8bb8d931756accf78bd8a4efdd51a9ec"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "1bd2a0ad81496ed6ac38a438446c3545"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "4aedc29a000a4b1606cc29407a04f021"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "aa0a536b783b2dcd557f2711f6a8d4d5"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "8fcfaa93a6d6bed3e04c972cb838a4b4"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "dde44d42a9cc0ef43eff5ea22ebde3aa"
  },
  {
    "url": "assets/css/0.styles.9643d736.css",
    "revision": "fd954b2f99e6f1a48cb4ba7b759e208c"
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
    "url": "assets/js/10.4d453b7f.js",
    "revision": "cc49cd0bfa728b7e66ffbf80da5f0cef"
  },
  {
    "url": "assets/js/100.7ce06b0e.js",
    "revision": "3156123f85aee03cfd97427e41a0866c"
  },
  {
    "url": "assets/js/101.e6c0bade.js",
    "revision": "8ba06e9b902745410baed09be38000bd"
  },
  {
    "url": "assets/js/102.2c210b22.js",
    "revision": "2e8488d7dd522a777cc68365a09b508b"
  },
  {
    "url": "assets/js/103.5a34c35f.js",
    "revision": "73294a1ad117ddbb6811597bfc7b6b84"
  },
  {
    "url": "assets/js/104.cd26300e.js",
    "revision": "f4c67ca497b6a5911256d10003c582d8"
  },
  {
    "url": "assets/js/105.bdfcb7a9.js",
    "revision": "8bbdc9976e18caaae1596ec230287a39"
  },
  {
    "url": "assets/js/106.e5c0a169.js",
    "revision": "7724b5d119eea936d26e4de3e039dd69"
  },
  {
    "url": "assets/js/107.4b82c027.js",
    "revision": "985206232211aa9c40e642c4a07934c7"
  },
  {
    "url": "assets/js/108.ee7c71f8.js",
    "revision": "e24a014a3c93ce91c83b755c78e326e1"
  },
  {
    "url": "assets/js/109.02521489.js",
    "revision": "addf766fbbcf46abb6f312bc74b91dd4"
  },
  {
    "url": "assets/js/11.cc536a1b.js",
    "revision": "afa3cc26e407d4f5b799ab73123b6455"
  },
  {
    "url": "assets/js/110.58940c5f.js",
    "revision": "68610ab899f5714e347acffeb6fa5bdf"
  },
  {
    "url": "assets/js/111.3202dee7.js",
    "revision": "70a669b98b666637503fe68ab931bc80"
  },
  {
    "url": "assets/js/112.3a4ad73b.js",
    "revision": "cf0797cd5e97e6685903d5e6aad6b720"
  },
  {
    "url": "assets/js/113.e38197e4.js",
    "revision": "85fcb537298282e2974b0c686b969b05"
  },
  {
    "url": "assets/js/114.039c0995.js",
    "revision": "87271e524d867a1daa9aa064397c1667"
  },
  {
    "url": "assets/js/115.59327a62.js",
    "revision": "0837584dbe4cbbe76270ef117d5d0270"
  },
  {
    "url": "assets/js/116.9f0388c8.js",
    "revision": "8739d0a5f5d6b71f957885e5a6bfafe0"
  },
  {
    "url": "assets/js/117.ce43da69.js",
    "revision": "25e0f9034bb40c6bea2f80f5111500ca"
  },
  {
    "url": "assets/js/118.e767cfde.js",
    "revision": "af78ee635db5c3c1c90c6f545658c64b"
  },
  {
    "url": "assets/js/119.136b1ef5.js",
    "revision": "7463301934074e7983f852095a4baca7"
  },
  {
    "url": "assets/js/12.f089171c.js",
    "revision": "de4990153769f4664072f92e38a2a62f"
  },
  {
    "url": "assets/js/120.ec77f6bd.js",
    "revision": "4f72f820c0ec7da14ce461c5bd52afad"
  },
  {
    "url": "assets/js/121.88b838ca.js",
    "revision": "13d09e675e2f2a6cfafdcde808317800"
  },
  {
    "url": "assets/js/122.4a65ab19.js",
    "revision": "e3fcbc7ac27d56a22d0780ca4336776a"
  },
  {
    "url": "assets/js/123.5a0891c9.js",
    "revision": "61b392c83213dcbc61c13ebadeeffccf"
  },
  {
    "url": "assets/js/124.5f2404fc.js",
    "revision": "b5f398d49956b6268817d09709ffd5e2"
  },
  {
    "url": "assets/js/125.4fba3266.js",
    "revision": "8eb8d2432059bccc13262cda5b552532"
  },
  {
    "url": "assets/js/126.8896f080.js",
    "revision": "dd3d18f756383fbe96ca7543b3c3063b"
  },
  {
    "url": "assets/js/127.14eac6de.js",
    "revision": "29660fb12534d7779dcb8e88db94729d"
  },
  {
    "url": "assets/js/128.5c1551d3.js",
    "revision": "2e9ad775c5ea2570c0703f01e72d4cba"
  },
  {
    "url": "assets/js/129.31157166.js",
    "revision": "aff3d93d37b095796ce80c7ec824b5d9"
  },
  {
    "url": "assets/js/13.4a7df352.js",
    "revision": "703e4b23b0e02ce0852189c3e0a304b4"
  },
  {
    "url": "assets/js/130.78f2d37b.js",
    "revision": "4e261bfe2dce478b3896fcdafd7688b7"
  },
  {
    "url": "assets/js/131.472415c3.js",
    "revision": "4c38630e1f436724445adcf6e31ce6d0"
  },
  {
    "url": "assets/js/132.f44a1677.js",
    "revision": "d35805bfdb2d2823c97c66963bd5b519"
  },
  {
    "url": "assets/js/133.99669c6e.js",
    "revision": "d61c1c7e1018c6c9293e2dfbe2ad7f31"
  },
  {
    "url": "assets/js/134.810fc68e.js",
    "revision": "33b3283dd48ea5ecf8f4deef1b150910"
  },
  {
    "url": "assets/js/135.ac370613.js",
    "revision": "bf08907cff150e08ef20e79bcfc612ab"
  },
  {
    "url": "assets/js/136.8d2fc08e.js",
    "revision": "58111f4d7320edcb2cf1027b05fde357"
  },
  {
    "url": "assets/js/137.715f0a3a.js",
    "revision": "6397205204d67a18e91a994e0c042893"
  },
  {
    "url": "assets/js/138.9e3f0334.js",
    "revision": "69feb4e9419ec574f4dde943eef6c6b7"
  },
  {
    "url": "assets/js/139.53a006ae.js",
    "revision": "0554e20fe25e7420cf3be7def14ef5f8"
  },
  {
    "url": "assets/js/14.458717aa.js",
    "revision": "9ee4ee2bff3dd51bfde852def4258cce"
  },
  {
    "url": "assets/js/140.2b7345ba.js",
    "revision": "94f43c2dc932147524e6f8c3d471b691"
  },
  {
    "url": "assets/js/141.20eb7feb.js",
    "revision": "31ce44a65a6effb6fdec7992b6b39b9c"
  },
  {
    "url": "assets/js/142.40e5333d.js",
    "revision": "5e5205b444991c09e7d2f0107e07789a"
  },
  {
    "url": "assets/js/143.51547245.js",
    "revision": "3034b61d42d42543d91b6af92688c80c"
  },
  {
    "url": "assets/js/144.0089f99f.js",
    "revision": "96de4f2cc366e8953096e711e6511cac"
  },
  {
    "url": "assets/js/145.e3a337f1.js",
    "revision": "686fb6aab2077c5dc6bc720d88f9b117"
  },
  {
    "url": "assets/js/146.fb711315.js",
    "revision": "d48dc0f435af94b064cd36b9e033397b"
  },
  {
    "url": "assets/js/147.5ffae472.js",
    "revision": "1f5535b1c3ce832c69ea73454c6694a9"
  },
  {
    "url": "assets/js/148.a70f3c91.js",
    "revision": "5de38ff002e75fe8e6ae40c541b78ce9"
  },
  {
    "url": "assets/js/149.3b92f8e7.js",
    "revision": "1f9591e12f6e47eed546ee9df970288a"
  },
  {
    "url": "assets/js/15.65d6d9ab.js",
    "revision": "b674c5f7deeace0b92479d989be102e9"
  },
  {
    "url": "assets/js/150.c5c5a6ca.js",
    "revision": "7499ecb95ca7321013ef2a119d684fb5"
  },
  {
    "url": "assets/js/151.e8b691c1.js",
    "revision": "c82a37b0b8492d9554c6b13e67dfe036"
  },
  {
    "url": "assets/js/152.bde741f9.js",
    "revision": "63acfc7835d344b8755cf4f9f3a4f4f1"
  },
  {
    "url": "assets/js/153.714e107d.js",
    "revision": "5391312b476b5808e6c92982d8a5553a"
  },
  {
    "url": "assets/js/154.d4c21688.js",
    "revision": "f6fad46d7d138662f0a50431ee3d541c"
  },
  {
    "url": "assets/js/155.f3cb17a1.js",
    "revision": "fc2b5e13e271d7283dca136400f921cc"
  },
  {
    "url": "assets/js/156.a048434f.js",
    "revision": "a203f03ad39d3efdadfaac5b9aefcc73"
  },
  {
    "url": "assets/js/157.70cc06b1.js",
    "revision": "d8ba5207078a9dcead677375afccc470"
  },
  {
    "url": "assets/js/158.368ea326.js",
    "revision": "76d770a0f8a03481cdeebc21dd07ae6f"
  },
  {
    "url": "assets/js/159.5659276e.js",
    "revision": "1b4f1ad82e37680db5c09a08a65b97b6"
  },
  {
    "url": "assets/js/16.a4a3c26b.js",
    "revision": "efdf5c3b9253d7995c8c4281f4a75ad7"
  },
  {
    "url": "assets/js/160.2cd4ff1c.js",
    "revision": "5de60bab9fcd6fc4c68cd5005629a1ea"
  },
  {
    "url": "assets/js/161.ab9d280d.js",
    "revision": "f2ff78c399f85dddca4adfcd19051178"
  },
  {
    "url": "assets/js/162.b764b378.js",
    "revision": "635ec159c599cbedea70160fcdf09a7c"
  },
  {
    "url": "assets/js/163.9fca40b0.js",
    "revision": "eed35587370bede891bb3f7aa3aecbca"
  },
  {
    "url": "assets/js/164.6ae1ecd4.js",
    "revision": "50ebf0ceabdba96bb5419823f1423002"
  },
  {
    "url": "assets/js/165.779df30e.js",
    "revision": "9383c287bfb346c9c85ac8290c5e0f18"
  },
  {
    "url": "assets/js/166.1ae8c4fb.js",
    "revision": "2cb06ba5d6083a3a0912c0e8cc191516"
  },
  {
    "url": "assets/js/167.0c1ff78b.js",
    "revision": "9ebb8fd8740eea75aebb0572f7fd8c21"
  },
  {
    "url": "assets/js/168.c45abf72.js",
    "revision": "11708a505534ba6e5ca9af8e4358710d"
  },
  {
    "url": "assets/js/169.8ec423a4.js",
    "revision": "b4cfaa6ddd01b716dd886c9a257763a2"
  },
  {
    "url": "assets/js/17.3e8ca80e.js",
    "revision": "96f69d8e625d897012b25f1e81ae9fd0"
  },
  {
    "url": "assets/js/170.e46b4430.js",
    "revision": "7fa5f0952c24f89fe0bc661793b85275"
  },
  {
    "url": "assets/js/171.428472ad.js",
    "revision": "487e6667bf92a5a61b7919b4d4e6c97b"
  },
  {
    "url": "assets/js/172.b9645b28.js",
    "revision": "ae5d6d63e8da44cb70d54181d8bc0370"
  },
  {
    "url": "assets/js/173.d8908894.js",
    "revision": "7be4fcd31384ad590c4d3c0d47c6301b"
  },
  {
    "url": "assets/js/174.d12b3c93.js",
    "revision": "65b618373f5b6d52d6a879fb21082fc5"
  },
  {
    "url": "assets/js/175.11603e40.js",
    "revision": "426116d64dc176b922c12e06a8952d88"
  },
  {
    "url": "assets/js/176.8917dd61.js",
    "revision": "0843ecce60d29c536b19807b712c3de1"
  },
  {
    "url": "assets/js/177.b69fb72f.js",
    "revision": "241dc34ea71d8cea2f5b4610aeb2882e"
  },
  {
    "url": "assets/js/178.3cb03bf9.js",
    "revision": "efb4b754b740839d14509779c1999b2f"
  },
  {
    "url": "assets/js/179.43680e92.js",
    "revision": "b0dbdaa416c619b4e3ca271b6ad62089"
  },
  {
    "url": "assets/js/18.c39e259a.js",
    "revision": "e171e0a216df58bf0c0d517ddb7bcdf3"
  },
  {
    "url": "assets/js/180.291bbaa5.js",
    "revision": "8b7eec12b32a4fff442f198e16844c9d"
  },
  {
    "url": "assets/js/181.1edf1001.js",
    "revision": "e23a0672ea2a5ecb51f1f8b7bcd7cc4d"
  },
  {
    "url": "assets/js/182.adbf7367.js",
    "revision": "975a6d9ecbd4d35c85418ecb479a5148"
  },
  {
    "url": "assets/js/183.be951cfc.js",
    "revision": "3970c5b89098606720eed47de967d583"
  },
  {
    "url": "assets/js/184.c7dfa0a0.js",
    "revision": "6c0bcf3edaed24f3b90b80b23052db2e"
  },
  {
    "url": "assets/js/185.49a0b52c.js",
    "revision": "bb93f7a8dad0043535cdd4ed9e251b1e"
  },
  {
    "url": "assets/js/186.767ce87c.js",
    "revision": "87868c86a74447c355159edff5fead78"
  },
  {
    "url": "assets/js/187.bed31bd8.js",
    "revision": "ac58404aa5338294da75351b3d67971c"
  },
  {
    "url": "assets/js/188.59deb0c8.js",
    "revision": "2c2883b2afa03c2efa52c119080c2720"
  },
  {
    "url": "assets/js/189.a730a705.js",
    "revision": "0e521f24bfab4626b9b6c71a4bcdef0b"
  },
  {
    "url": "assets/js/19.0873933f.js",
    "revision": "6393829dd33b0dc5d32f99f6bbb5553e"
  },
  {
    "url": "assets/js/190.4b3ae1b5.js",
    "revision": "01f6f7beaed1a94c8123827749fe4dea"
  },
  {
    "url": "assets/js/191.48e365ca.js",
    "revision": "930d99226f7e97d151230eb4e0f94be8"
  },
  {
    "url": "assets/js/192.be455cc4.js",
    "revision": "484ed639a547312834dcbef0398f7941"
  },
  {
    "url": "assets/js/193.013dce6c.js",
    "revision": "92f8df7514d7ff5445bf919bdb862531"
  },
  {
    "url": "assets/js/20.76c5df14.js",
    "revision": "dafb86c4a9d9ddba6fa957c6c8f7c702"
  },
  {
    "url": "assets/js/21.7b03e5c2.js",
    "revision": "c38c86bb6d9d9e29c9376feb735519d0"
  },
  {
    "url": "assets/js/22.8d48e003.js",
    "revision": "7bbcece6e1739041fe6ce1ec0c3eb7b9"
  },
  {
    "url": "assets/js/23.fa0c40ae.js",
    "revision": "41ab07d2b3f8afbb79bc04277e663db9"
  },
  {
    "url": "assets/js/24.e232bc69.js",
    "revision": "7052010bf8091c1e3d82b097a0f6f1ae"
  },
  {
    "url": "assets/js/25.f7a9c453.js",
    "revision": "837764be968553487f5a369e44b7fc08"
  },
  {
    "url": "assets/js/26.8c469ca1.js",
    "revision": "034e22bd9be4a9978513acb06e91e398"
  },
  {
    "url": "assets/js/27.5badfff2.js",
    "revision": "3fcd28dcece9da27f662c8a14dd389d9"
  },
  {
    "url": "assets/js/28.10a2a6de.js",
    "revision": "361e5c17f1d3ece8185f3bc460156e97"
  },
  {
    "url": "assets/js/29.52e472a7.js",
    "revision": "ece2a7ce1f27ce3baadc2377347468ed"
  },
  {
    "url": "assets/js/3.35830f29.js",
    "revision": "9a11498fd122f65e9b78df45a85da519"
  },
  {
    "url": "assets/js/30.0fdceb33.js",
    "revision": "736311ac67d1062d9402de1159089af0"
  },
  {
    "url": "assets/js/31.b5d51a3d.js",
    "revision": "e857d6c55230165d2d37ec86e4bbb28d"
  },
  {
    "url": "assets/js/32.64512263.js",
    "revision": "067c23c66a97073c70dece77f9e735c9"
  },
  {
    "url": "assets/js/33.93faf869.js",
    "revision": "941215fb698c2b7eb44f922c0d02212c"
  },
  {
    "url": "assets/js/34.b5c9d6ad.js",
    "revision": "425a25401582d885af7c45b9a00c348b"
  },
  {
    "url": "assets/js/35.0959c592.js",
    "revision": "fd206a1bfed7a50aaee477df0318985d"
  },
  {
    "url": "assets/js/36.53ce66aa.js",
    "revision": "02687cc03f44068667572c9b58746ac0"
  },
  {
    "url": "assets/js/37.21f3a02f.js",
    "revision": "f404d874f1d2fab7a6dae98d5ebdb647"
  },
  {
    "url": "assets/js/38.7e1097d4.js",
    "revision": "f275155e0f1b6bfce0a76810b06d06b6"
  },
  {
    "url": "assets/js/39.632ff1eb.js",
    "revision": "b53e44dedba41cb0970db2c7d0087d95"
  },
  {
    "url": "assets/js/4.b7cc10ca.js",
    "revision": "79b50e71e0fea038c73b5021462b46ff"
  },
  {
    "url": "assets/js/40.f2368bf2.js",
    "revision": "a7cc5ea363ccfe4c9fc4f534a5e35871"
  },
  {
    "url": "assets/js/41.68df09a2.js",
    "revision": "510134a7389e68277f42b8cc752df840"
  },
  {
    "url": "assets/js/42.97ace3fc.js",
    "revision": "e7ffeacd48931edd43c6d81fa0328924"
  },
  {
    "url": "assets/js/43.acf43789.js",
    "revision": "344f61258becdc1a3d064d25c02b95a5"
  },
  {
    "url": "assets/js/44.aa6b049f.js",
    "revision": "4eb1f08f6e1937ff959fde65628be4dd"
  },
  {
    "url": "assets/js/45.403c9291.js",
    "revision": "dedb24c63b10da5e81dff576d88dd297"
  },
  {
    "url": "assets/js/46.0598f40c.js",
    "revision": "21e1b151ab6a5dd5e5db903ef5c73311"
  },
  {
    "url": "assets/js/47.9fcb2237.js",
    "revision": "82a5c257649712a377b52fe03e2c5e3a"
  },
  {
    "url": "assets/js/48.ba3c62f6.js",
    "revision": "2902f4831e8882cca2ec004b09cf7802"
  },
  {
    "url": "assets/js/49.83ed9373.js",
    "revision": "f082e3eabbfe0d3a5a982e341b5ce85a"
  },
  {
    "url": "assets/js/5.4e4385b3.js",
    "revision": "ffaebf5c41e22cbc1a89c75707157665"
  },
  {
    "url": "assets/js/50.155ae14a.js",
    "revision": "850b413c42d2a8f3b17c8653d7966844"
  },
  {
    "url": "assets/js/51.ef191457.js",
    "revision": "ca14fc364315b6e5c8afb960b02d5851"
  },
  {
    "url": "assets/js/52.9a10c52b.js",
    "revision": "06db81192ece7433183e6967e2198054"
  },
  {
    "url": "assets/js/53.ef69201e.js",
    "revision": "a913680f26c42ad7ecf0ae3203edc9e6"
  },
  {
    "url": "assets/js/54.6a0b368c.js",
    "revision": "09b4939f10632267cb89119b64e497be"
  },
  {
    "url": "assets/js/55.6f5a18ef.js",
    "revision": "ac26f8894d8b67f6deb75cae4d336d96"
  },
  {
    "url": "assets/js/56.4018e97f.js",
    "revision": "2be2b3a377232627105f17ff65b63476"
  },
  {
    "url": "assets/js/57.ce0d2bfc.js",
    "revision": "5a9b9a479dc98e18e69f9f46908717a3"
  },
  {
    "url": "assets/js/58.b22497e5.js",
    "revision": "c70ec5bc4c82619f986db006e080ceae"
  },
  {
    "url": "assets/js/59.a494232c.js",
    "revision": "04a940e278925a6385e6d70c9ac526de"
  },
  {
    "url": "assets/js/6.89c40a7d.js",
    "revision": "40c52f761ddfffc41d4951e49a045fae"
  },
  {
    "url": "assets/js/60.27584974.js",
    "revision": "cd765a6e83853190c95ca1b3f77b2fb7"
  },
  {
    "url": "assets/js/61.8395386f.js",
    "revision": "859ca569bf0868cf170b9a65ba125be2"
  },
  {
    "url": "assets/js/62.855e2947.js",
    "revision": "e82c3ecdb96df98f977f5298333a2604"
  },
  {
    "url": "assets/js/63.125fb84e.js",
    "revision": "69a231e6e2251bb1eb447e0ce49938d5"
  },
  {
    "url": "assets/js/64.cfc21964.js",
    "revision": "24cd6c776d702afcbaf553a586a4edda"
  },
  {
    "url": "assets/js/65.2d8b94b0.js",
    "revision": "7b941fbfcf439fab08a77a0eb0e1538e"
  },
  {
    "url": "assets/js/66.fa4a6928.js",
    "revision": "ada231e83165e44b854f67e765cd6e76"
  },
  {
    "url": "assets/js/67.b2830254.js",
    "revision": "3c33b9f7f7175d009086638758114b7c"
  },
  {
    "url": "assets/js/68.5c17af12.js",
    "revision": "94c9c4cfd9b8f1feeebea4aeeed499f3"
  },
  {
    "url": "assets/js/69.36b6732a.js",
    "revision": "c4ef97b78eedd6790cb2d6baecb18476"
  },
  {
    "url": "assets/js/7.a528309d.js",
    "revision": "01dfafe6bc2e56669e736d688cd074ad"
  },
  {
    "url": "assets/js/70.466f3dea.js",
    "revision": "8e977b14c2806da0052a5cf22832fda2"
  },
  {
    "url": "assets/js/71.b4630ce2.js",
    "revision": "4bf6fce4f2d0c99ce7243401a5e37c1e"
  },
  {
    "url": "assets/js/72.146b83e6.js",
    "revision": "e243f24e457ee0c563c65bf3b2e45632"
  },
  {
    "url": "assets/js/73.40481cd5.js",
    "revision": "5222c9c4131a5480de2c8855ba6f810b"
  },
  {
    "url": "assets/js/74.dc5f30eb.js",
    "revision": "07b1dddad9061ebfb79d711708b29756"
  },
  {
    "url": "assets/js/75.1e363500.js",
    "revision": "557e7bcd93012e24e0793520291401b0"
  },
  {
    "url": "assets/js/76.8f8e4a98.js",
    "revision": "a48f8597f7230d650910891ed201a32c"
  },
  {
    "url": "assets/js/77.8d3610f8.js",
    "revision": "f866131df8a56cacd547581dc1275d8a"
  },
  {
    "url": "assets/js/78.1760e4bf.js",
    "revision": "19cb5d18a83e7681270a9c47ee1fa814"
  },
  {
    "url": "assets/js/79.defe03d0.js",
    "revision": "f1f5b4a7c4b15325cb923e9d3c8dc3cf"
  },
  {
    "url": "assets/js/8.1a15ae6f.js",
    "revision": "31919f37a455478bea152ace7ed7ab14"
  },
  {
    "url": "assets/js/80.b0d1d1eb.js",
    "revision": "65db649eb245dd9bbff2449d898dfc51"
  },
  {
    "url": "assets/js/81.26001fd1.js",
    "revision": "4cc1b4c7db8e6ea1562e2c9182842b5a"
  },
  {
    "url": "assets/js/82.3e058822.js",
    "revision": "a86354b82999f6a3d87f7bfe21f94551"
  },
  {
    "url": "assets/js/83.1699dbe9.js",
    "revision": "7be063d25d82b3c3cb3f1d9934bd3ca7"
  },
  {
    "url": "assets/js/84.ac9b9687.js",
    "revision": "aaabe2657b9a6555382a9259daa14caa"
  },
  {
    "url": "assets/js/85.7fbef0b4.js",
    "revision": "17d8ffd48597dcc54edccfcd77f947f1"
  },
  {
    "url": "assets/js/86.7ac43a0f.js",
    "revision": "1b1c94255ef3eb22ae142c697c63d9ed"
  },
  {
    "url": "assets/js/87.ac5da48b.js",
    "revision": "d0ed885b5921b72fbbe7d82a25efe92c"
  },
  {
    "url": "assets/js/88.0799843a.js",
    "revision": "a69f749eb827c8953396169419bc4e6c"
  },
  {
    "url": "assets/js/89.8900c192.js",
    "revision": "e6781da9c5b9f12db3761174a884cde3"
  },
  {
    "url": "assets/js/9.4cfd5cd2.js",
    "revision": "f85a999f5845b0589675bd4724bf4eea"
  },
  {
    "url": "assets/js/90.eb647d9f.js",
    "revision": "f89e48a272a125d64b330cece5729266"
  },
  {
    "url": "assets/js/91.cf87837b.js",
    "revision": "b7692733163a84fcf485ecd31e162f5b"
  },
  {
    "url": "assets/js/92.d2d61c89.js",
    "revision": "15fb73743202a7ca4f11e157cb32339b"
  },
  {
    "url": "assets/js/93.2e148824.js",
    "revision": "bb5b705005d400f35b3da452db118f11"
  },
  {
    "url": "assets/js/94.2bea37aa.js",
    "revision": "b1eea9952a44ac9c24ff98a27d9a2bf7"
  },
  {
    "url": "assets/js/95.b8361ea1.js",
    "revision": "5673a27703e3fe4a99754fd24682adf9"
  },
  {
    "url": "assets/js/96.deea90a9.js",
    "revision": "a09488e51a698500ac4aee11c82c2ebe"
  },
  {
    "url": "assets/js/97.52cf62a2.js",
    "revision": "994c4522b47428d561e472a1808ca25f"
  },
  {
    "url": "assets/js/98.d8589754.js",
    "revision": "43e2616914db69e91dcf8c88ed7f43e3"
  },
  {
    "url": "assets/js/99.5555a53a.js",
    "revision": "6e7ab458298abb2d1d6cd959a152cb35"
  },
  {
    "url": "assets/js/app.4e2a9560.js",
    "revision": "98b3f80b5324a84891182eeca2c87124"
  },
  {
    "url": "assets/js/vendors~flowchart.5fa9d3cd.js",
    "revision": "d08f25881c7f3a8f859b5b69bbddf33b"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "eabf19f4fb92471af23e8164b913e553"
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
    "revision": "afbcab68d8908468cc2243f1c72f056a"
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
    "revision": "8dec783dfa1d965295ac00c4273b5be5"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/__mocks__/ajax.js",
    "revision": "ff8c425261d0184c2c958be121816e5f"
  },
  {
    "url": "special/3.测试框架/5.jest/eg/src/ajax.js",
    "revision": "52d104fdf256be4929104612272915b3"
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
    "revision": "6e01619d3a919fe6ac93508e799a23e3"
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
    "revision": "8b5fb003f1c9a673b9e056e3d37870f1"
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
