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
    "revision": "76db0dafc475faf2633745f1cf24d3fd"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "104bbc2f4d5fe5b450dec83c7a66f370"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "4857c65a54fdaa1db17fc2d6957f9b03"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "1d637852af3528fff6ae184bf1d11196"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "7c1e27b4b11bee3a37c9dc55aaf8a54a"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "2b6d3b6397874cb31c05df10a9e5b1b2"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "808b62f3d209ee72a1631ed57e1d505f"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "90a2b9ace664f40b96d6f5b5766521bb"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "f8dba53a2925a534cc64d0a73d68bf02"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "b170b8758a1ad4351f67960c17054f5b"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "dfc6bea8de07b2f0f54f3f38d7762e2d"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "439579f3f318a1ebd11e4aac26e31b5e"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "f8c9a6d3005d3ecd32604aca1e26d3ed"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "d047f5c4198ccc4f1f29a7ae7ea37386"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "de9c9fc770db415eb2af21b938cf8086"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "aaafcc7e0f9846eaa06bb6cf28a54bba"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "195e9669d0d0871ef9a6c1d7145a6810"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "e61b38e93cf4b07d5cbba4b43d7c5f28"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "017a36b995d9685e76faa1b26571e57b"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "c04d883ad157f203e71d17ac7de788b4"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "dfa974ed76704c5e1d2840e143c0341a"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "ccd0b347ad28f114cde9975e54124a13"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "fcd34a5b081215c5a6c15c450d1d875e"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "f3721ea27ee800eea4d60e9e03cf70ee"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "b1dbd0cfe864365bf93aa032627654a8"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "f1d784574e6c7266841caddcb3dea850"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "775e72954306defdb6ab7e4325693fd6"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "0c2e08c252d120c4f0040f1f5a2b1015"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "7261328d81fbc2b4ed3d22a9f97a385d"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "78e8a21eefe8a0e93962656508c5b9f3"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "d690299a2b61db9f0872718462846683"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "5f57b9c959b88cbca209047c1dc30522"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "7a8c110e4f513fe2473cbf31f9131322"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "30a1a954ab6807ea87a63bb898790ebd"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "4d9c0bade6568c26ec9ec78b1f89ab72"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "0292dba669a617f1e60b314fbce97d76"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "e73436b35c3fe8e05c8b55052eeff90f"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "0222e636f73438df54057ccb324af7e5"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "df0e86c3d93580e0933a1e2b04518add"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "c436a3a1c11cb7b755218b6e653beb59"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "e28839025756a930972d52f65ff96347"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "1cf6abbe2e07bfa0e3e2ed87143c95fd"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "fd27efcbe68c19bb255fed5723e5f292"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "e27c6ea32aa40c0a147c125ee6c0653f"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "8611906e3507057c4a9aff007b88c28b"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "116164f26d49a2abdb8fab5991b7de7e"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "cc5dbf765d1eb21b08e3a06cde04ef45"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "83b8e01b60133bed9709248cfc7ec5da"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "64a80a129ebbdc5fdd7d06a5c0177f3f"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "45608a9912823890a280ab1069ad2352"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "11d1e5c9a915aae91a3ac0dbee6052d7"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "f7190bb58179ba8ef945a3ac243e8f2b"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "cc99f99e96cbbcc7fee9b0dd755e8e22"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "2e24b187ed227a66dca134ada22b9efd"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "02abc4d2c00cd4d06008658b8c6027f3"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "a9be75a15b006b57a06a9173c45239d8"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "65a3335d1c027d6eb9d58562d2b500a4"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "50f9296548c7d2c40474b84b424fe0ec"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "6fd041f9cb9ea49621ca61484768f36a"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "c8afad39350f73d0ced4b3d2792baff3"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "7e88464e6aca9589624a303885f789ba"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "d0db0d177988b259e2b4ff78cdab9377"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "6404e7648c5a333d7ef515e186b53874"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "a909ff2e82bda854987039fa9a06687a"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "50af80a0f9aae119c52881518351f163"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "e00070fed6ff6b643c80bf299b49e1dc"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "ef30e5844c95a236ad7ceca483832d3c"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "8e6017ef9bb97db22201e09c41a9d8e9"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "d64b56bc40b2096707c7d5332786c03b"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "cab658d8672d6eb36ae5e6deacec2e08"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "b71ccaebfb4fb18eb0560684cc242987"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "bcd7635257dff0914f430e0c85e4d77f"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "2b912f35f7e1620065c5193a445b8977"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "95e68eaa315f3ad969c4a7a19522b628"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "785b1232dd1afbd8a3ed8c5e656df66a"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "a1e6178f777da66a24d1b9e14ff355dc"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "9359b43968efeb44749712c85e520146"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "7f79eab74bcd680b21acf89f7b1b1768"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "82e4ba79ace26bbbd00f2f18e41f2c5e"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "958c962707935eced919ee0375d5789e"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "f582e06545166cc00cc28c06accfb745"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "b60f6e36bd60fb393223f12a75c50d72"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "1a03c6a0b3d3ef554bd8d3c81e289abf"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "b7a77f5b292b9b3ab14980b6e348728f"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "e6d7e1543dcb0f2914a6b5785167ab86"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "edff938ec165d4212a409e84235e0688"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "ce5f08e00dd33be9db1271fb280f980b"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "f85231005900abb698113706c4f1f5ee"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "234628975236460ed3f1658005f72c29"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "5044d079f30d7a477c0ba2324376ea8c"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "c0dd1299f19db541a47f7dd61aaa2411"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "e70c154dd29ccf1c3be7831733d16fda"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "97e4e3cb1f8299a3af23c0c9ec4ec97a"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "5e3178bf59c62d792d979f292fe4237c"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "b0ae2c943548919fe18339726e2480cb"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "198fcd14f63737665e5c70071cdfc50b"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "732222cb35c3d5c2d999936768863fcc"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "b2ecfab28b8658e4efed81ac6b70051f"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "e70d578e35a1d53ece6ce67b9c0acf44"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "172156850ffde570426a796d83f57f85"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "7cda70c1e3bddb403669c8adc7099377"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "77a7b0d319466d2be46230139fdfa5ac"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "82b54e141370da9cf7da9a1ec1a77e70"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "741afe45ce1eb0e69b1ca7809ea328d5"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "b7099ccf85b61e65f320d07bedf1fce4"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "0b707d7ca805690e68c1ca0ca3a6a559"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "6eccd7972f2650f97ec11d03a4076507"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "b4ef17ed685c9a752dd430ec63d1a6a9"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "0a1faa3d5eef6f80f2f66c1992309aef"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "6b0011521321e623676856c5f1ac8742"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "6c49d85ffddb91dfe2d9d242507572ae"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "64a45b339b870487f2ca168dd6b11cc9"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "e7ebcd0bfabd76089bd9d76813367ff9"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "58cf52661fd649b4e064ae8082d325aa"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "a12b66d50842829f69d32b03f6b885da"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "f3be752d3741f95a762b143ee2c5ac35"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "1f0e055321984ad01c62f4047498f2c1"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "f9633ab548702c64fd3d0d840a7bcc90"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "a787406ff1a8d6ba4146266cdafd1a65"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "d7d328663c2314c3a65b77fda32046ce"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "ca0737f147dda022ca2537e4708858d5"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "3e3c94361e453ff0da7174abd5d1da4a"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "8735830c2add33e277fd74975837622f"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "2d4a57493a72cb8163142f3ea66fcd61"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "eea3f7cbc108e67405273ca1c9fb1c41"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "19e10955fe30205e002d4b6d12415f4f"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "5c277dd93c4a340e1a535eb229cec5ef"
  },
  {
    "url": "404.html",
    "revision": "b1552dbd3c663ec1128a1e38e96062f4"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "30dec2d251cb910ac7e4784c47a64fc3"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "e97de29986a6ddb114eda1ceda9bfef1"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "d9a0f06bbd8c3f48ac45fec575c219fc"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "45eb9fe10dac59c58c4971b3af391100"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "e231de1313ea098ce569978554512be5"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "d8bfe2b1403a7ded99c7849a8397eddc"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "9d1392cf32cc345c6480177046e76d64"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "390adbafc66c1e10d8a49df88c5b66a6"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "20bab93668cfe55ad8d8ce50502dfdf0"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "c8be227677b63144058432f0d135292a"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "252c64967eb79c8f6fffd2a32a13531c"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "0880a9933aee8a7a6f9ae4985b6c4033"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "f0d86a5925e3290dd3afdfe273b4e58e"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "b8b8814bcebc0c24a0907f8d5aa09309"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "9cca18333cac81fcb7d25ca3ada912c5"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "e0d5c86638adcb85ddd51a1ebb2e2358"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "f2c855bdc79908521fdc7c75d15697c8"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "db131fb6ac7e97e1ce26db07579df33d"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "271f6399ffee5eeee6b159ef9f2ef801"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "bec0729c65378520d0a711b6c9efb73d"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "063fb018fbc77ea99c4725afb6c4b083"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "91af2da8e95668762cb7a0d4c5ee1925"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "fe9e92528c9a1072bc5fc086c1eaf2bb"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "da1f87d37ecfaa984dc943fc405d68fe"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "b7ca69aeb12144bc26725787fd26ce63"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "0eb790682c6a82dfa07d6db6a19cc58d"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "c4288c33ff7a37dc422856584c55dac7"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "8a31ec35f2f9754df47f9667ad612057"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "6f27539e377b1485a6294735ca7eb306"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "0b14a40d8ae262cae1e12d192d046c4e"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "de753a76929dcb0de585e6c5a3a62895"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "2c0e0ef56093afb63cfc99f7b6c2cb74"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "e4732a4d4e7a9353c08a546b92b9da4b"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "06d79b88a6d0128cc1d1ff7c86881477"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "c6faeb2a2a49f325ab64a676c8389751"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "9ad9d32caed7e0365b0fe7bf8f9e8b01"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "fa102eb6f4cd094b385431a58e5b14d8"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "4a61505e5b6560ad781305aceb11719e"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "3d7fece1e7ebb1cce5f49514afca0713"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "ded8dcc1c61d8e7e919c185d6a402915"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "f95cc724b119b1b65c155ca7a786bb37"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "cc876ccd6bde9487d4eeb373fe8cdec4"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "75858d7213735a80137c2b7885e089f0"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "79b5a42fcd4bb177826456f6f5629eee"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "4bc1e45322ae7818d7583de00654bfd8"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "1543c2b16d5684310dd2a48a36f6927b"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "2a705cd39ba3ad91995e541d15195881"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "e06878c1e936fd4cd0c18b3405211638"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "75943512e59e5751b53fb03abefbb7bb"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "771a857a872b296a26471752011ade33"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "4f5ac238ccaadffdfb559c1555de1d6f"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "5b5abd672c8448b18bd6961658b9c8b1"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "5d5ec45d9734486f5d814824d5a10f23"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "7ab0e56635bbaf5a7cb2078a8f2f6c4e"
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
    "url": "assets/js/109.c5e05618.js",
    "revision": "7af4de95e73dc7935f372f43db66e566"
  },
  {
    "url": "assets/js/11.4bc148a1.js",
    "revision": "f1340a4894c7d1a766ba0e32ba93dc21"
  },
  {
    "url": "assets/js/110.77ca6b5a.js",
    "revision": "50e7dfe5238f8a555071b96e8d73384a"
  },
  {
    "url": "assets/js/111.99c2c64d.js",
    "revision": "2c1b0d936b3fc7a5922ce630b2812ccf"
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
    "url": "assets/js/115.451fbb33.js",
    "revision": "d779265aef2ce736e22d2fe80c16e96f"
  },
  {
    "url": "assets/js/116.fa95b97f.js",
    "revision": "83a1fbb995108c313271270eb71c8e35"
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
    "url": "assets/js/122.4c64117c.js",
    "revision": "2eb5a67aad8234b29e224f357845a753"
  },
  {
    "url": "assets/js/123.5bda7667.js",
    "revision": "b5b8b5aaff51edc60a19884935f00634"
  },
  {
    "url": "assets/js/124.ab900a50.js",
    "revision": "cc3065120e35defc3221a2efa7a4a34c"
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
    "url": "assets/js/129.45755f63.js",
    "revision": "97817e63b7401d795e364af6f872acaf"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
  },
  {
    "url": "assets/js/130.f9a81ac0.js",
    "revision": "e9c912c40b56cb31b6197524c284a77b"
  },
  {
    "url": "assets/js/131.34ca471c.js",
    "revision": "04a58f46cab7baa91bac771310a5912f"
  },
  {
    "url": "assets/js/132.9d3427fb.js",
    "revision": "4230ee5eee0fc20cedfe49f544880142"
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
    "url": "assets/js/135.55824ac4.js",
    "revision": "4a5aea5923b3da46805965be7e4a3a7c"
  },
  {
    "url": "assets/js/136.e0148f6e.js",
    "revision": "6ee7d4bc9eedd70fc02098b299cd8342"
  },
  {
    "url": "assets/js/137.71a12aff.js",
    "revision": "e42a249e7bc74975531a6785f41bbb01"
  },
  {
    "url": "assets/js/138.b47f2f8b.js",
    "revision": "32230323b957a6be43c894ee9dfa3a5f"
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
    "url": "assets/js/140.1ab39de5.js",
    "revision": "7f1d9b705acd6bec0cd8cb81d2129514"
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
    "url": "assets/js/143.a11f0bd7.js",
    "revision": "a509bcdd4d2a66ac484c37d2cfebfee4"
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
    "url": "assets/js/147.9858193a.js",
    "revision": "28a52ac8562dc9d9eef2d1d356f37e2c"
  },
  {
    "url": "assets/js/148.aa12c8cf.js",
    "revision": "7ce6529d1e01b9730a072f0929cf5029"
  },
  {
    "url": "assets/js/149.69131aab.js",
    "revision": "a5cca1a71872eefa622dcd3704f78007"
  },
  {
    "url": "assets/js/15.6f918848.js",
    "revision": "93a6797639e768fb675f3229b60de6da"
  },
  {
    "url": "assets/js/150.8b2ccfcd.js",
    "revision": "d4237054ec69fc4a10dfd148411bdb86"
  },
  {
    "url": "assets/js/151.4490d72a.js",
    "revision": "1282ebd9e485149a3d42bf17e215d2f1"
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
    "url": "assets/js/154.8a3139e8.js",
    "revision": "dda57acf7f20523dd3ce98ba4ebe3d6a"
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
    "url": "assets/js/158.e3eb876a.js",
    "revision": "b0ac500066981d5365403eca280a94bf"
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
    "url": "assets/js/160.774b76db.js",
    "revision": "8be78fef3646e3954458eb7d89d464b0"
  },
  {
    "url": "assets/js/161.d887660c.js",
    "revision": "f738cea80580a57a41f657310a5ff840"
  },
  {
    "url": "assets/js/162.73827d68.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.fd00174e.js",
    "revision": "b2425ba1ca31576d9a315643f375edba"
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
    "url": "assets/js/167.468b3633.js",
    "revision": "2c81599b2b9a60deb110fef303098131"
  },
  {
    "url": "assets/js/168.96e649f8.js",
    "revision": "c0ce442ac396f092593f540479cc70ac"
  },
  {
    "url": "assets/js/169.8eaee5a4.js",
    "revision": "4fb01580bd6f7c24d28459c3d9d1fef0"
  },
  {
    "url": "assets/js/17.d22eeb91.js",
    "revision": "f16c0e3b9c439cc3b75915915618f664"
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
    "url": "assets/js/172.74cb4d80.js",
    "revision": "a7a5ac3361f7fa8dd6763acfb659f18e"
  },
  {
    "url": "assets/js/173.7c2b9177.js",
    "revision": "90880b4ba71b415c79546bd116c28542"
  },
  {
    "url": "assets/js/174.8257a8dc.js",
    "revision": "0de66bebb2fbe64b582ec7089fa6dba9"
  },
  {
    "url": "assets/js/175.83197346.js",
    "revision": "7f1fa7e7b00a2695c03830c841ac5cf2"
  },
  {
    "url": "assets/js/176.704e3654.js",
    "revision": "9e3bd9c1cab60ab0473ecd4e6bd6568e"
  },
  {
    "url": "assets/js/177.38d6b4bb.js",
    "revision": "e64dd51a5500d7c4c7ff3476abf396ee"
  },
  {
    "url": "assets/js/178.506291ab.js",
    "revision": "9294716b7636d6f8c3e8e9da9d73b466"
  },
  {
    "url": "assets/js/179.2855eeab.js",
    "revision": "51c4b873eb55d9697fe12d96427e9988"
  },
  {
    "url": "assets/js/18.b2f1c477.js",
    "revision": "3727a5919088b1fcef155debe68734be"
  },
  {
    "url": "assets/js/180.4dee5aec.js",
    "revision": "47d679cc9170960e3728dfe90eba05ae"
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
    "url": "assets/js/184.4a603b01.js",
    "revision": "5ef522c47d32333d202ccf1ab39f2f11"
  },
  {
    "url": "assets/js/185.eea88a4e.js",
    "revision": "f8f17f8e3b3145c5ed719a5348274915"
  },
  {
    "url": "assets/js/186.3431be74.js",
    "revision": "734d3c37b92b12cb2b65918a9684f7ed"
  },
  {
    "url": "assets/js/187.23bd54a3.js",
    "revision": "a6c3f388af6b59ce62fde499672fb00d"
  },
  {
    "url": "assets/js/188.b565ec18.js",
    "revision": "c5a67763578a0f395672858e41675a51"
  },
  {
    "url": "assets/js/189.4d152a6e.js",
    "revision": "abc3bae3ceb41954944370a54ccd2403"
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
    "url": "assets/js/27.fed864af.js",
    "revision": "0a3944dfb448e719634c3e14a17ffa5d"
  },
  {
    "url": "assets/js/28.deefaa4c.js",
    "revision": "b1d4912f94074bb73c9230ad4cce8d4b"
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
    "url": "assets/js/33.969d339d.js",
    "revision": "d631319743167e9514fafcf731f5661e"
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
    "url": "assets/js/36.379d441c.js",
    "revision": "3ff95a6a773fa6bf802b0ba65ed911e8"
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
    "url": "assets/js/39.dd5a98e1.js",
    "revision": "907ac9bd081ea7b9a31591fe3c463cc9"
  },
  {
    "url": "assets/js/4.42af8dec.js",
    "revision": "bde2c12a09e4b315999c21c094d26274"
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
    "url": "assets/js/43.1842e624.js",
    "revision": "7b68b4a3d7dd07496f96ba398e2c4572"
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
    "url": "assets/js/48.1edc97da.js",
    "revision": "5a0051aa3ed20022db01b2f6a7002d59"
  },
  {
    "url": "assets/js/49.afe47dd0.js",
    "revision": "3ebff140ddd3ec5959de223177651629"
  },
  {
    "url": "assets/js/5.e38a005a.js",
    "revision": "88d61af86655ba0f77a2eb1d00bbe81b"
  },
  {
    "url": "assets/js/50.9226134e.js",
    "revision": "3d3b6021d2c96c1b51180b201cc1d3d2"
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
    "url": "assets/js/62.3ed27c6a.js",
    "revision": "ac7a76381173c86c166a0db92a49b37d"
  },
  {
    "url": "assets/js/63.9c8eb40f.js",
    "revision": "cc881947e24f5898a60bf67133f28c2e"
  },
  {
    "url": "assets/js/64.b0dec0ae.js",
    "revision": "c07de557c172889e2271b70f26c59a6d"
  },
  {
    "url": "assets/js/65.6907eb21.js",
    "revision": "a3018cc884add003fe8d15fc50c609fe"
  },
  {
    "url": "assets/js/66.5aac3fc2.js",
    "revision": "8611d673ec6bcb81c166b3311a6d3940"
  },
  {
    "url": "assets/js/67.b9caf63e.js",
    "revision": "2b8323e41f1596c1133be390de5338ab"
  },
  {
    "url": "assets/js/68.cce358b7.js",
    "revision": "09e83f20497b15c3c2e0d2253a71a05b"
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
    "url": "assets/js/80.bade1611.js",
    "revision": "c29e4076b0a2b7724ce9b42a07149f52"
  },
  {
    "url": "assets/js/81.0bd4bd08.js",
    "revision": "723a0f5445ce014b6d2335eaab7d9ee5"
  },
  {
    "url": "assets/js/82.f9810c77.js",
    "revision": "6c8985a94236eff3dde5b6ad90a27123"
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
    "url": "assets/js/91.cd95349f.js",
    "revision": "b5aa01bf8598e11ca43b1c605d4985f3"
  },
  {
    "url": "assets/js/92.68a1be96.js",
    "revision": "59d9c745e5e8d48db665d1b9862bdd50"
  },
  {
    "url": "assets/js/93.ed6b9e19.js",
    "revision": "ec69c9046e4468524778939f793ea10c"
  },
  {
    "url": "assets/js/94.c0e6d4d5.js",
    "revision": "4f327a3b750d173df8dfebb50f28c763"
  },
  {
    "url": "assets/js/95.8fe4d764.js",
    "revision": "669bcba8306ba980cbec7d6dcb1df84b"
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
    "url": "assets/js/app.e5e185c6.js",
    "revision": "b60532990e28b498fca78af46065dec6"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "efc17a36ccea3a51f26e44d76f80cf8e"
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
    "revision": "aabe1cf749c4704b45282bea267aad0a"
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
