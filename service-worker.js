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
    "revision": "09b0396e5c13d5281feb84ae1155b7c3"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "2a2444426880c01b0463483703e32ef6"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "b1e97b233c1a5e9f2a4e41c1d633d91d"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "74b2a1b391e9fdbbc9bc1db545896576"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "0767a299b0e4be09ea58e955eaa99897"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "0663aec5ce6018a9cdd051d69a9e430e"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "6121870cfc2abcdcdb352a61ee7675a9"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "847ac17ef642780e7cd77d25e5cacffb"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "0aa66d6f6e3b307005cfecebe259e657"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "e9240be0ac8e095ef72e67ec0fd6f682"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "b9bb4ffa1a9a48e7382099ecb573bdeb"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "5747a9539d6a394d6883c4f7040fcc02"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "eac338561a2037d30c366c822f831976"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "e63b32d249c35b77870b60dfab63deef"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "cd8f8c0f93091dfdb3261a3b8d5d5a66"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "b24ce0a8a1633128ebe0a6e597a10d87"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "af4e893ab4a2bd7ab5e42dec62d9ae02"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "502bbe85835e0d925c846ba5367ae306"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "abf82a94ad6f683f01b8b33b74c7489a"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "7248b86e1e68d3a808a43877ac6ee736"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "96c4da95cb6994f9716fab5fc91d3baa"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "98a31f829624332af9de2cefc9918a70"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "ee0b7d15f623b9c2564fe916bd0a65ea"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "87f5e9e752ab7a3002aee7f513855f1c"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "7f4192fc395a85302ae7d6a138272004"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "4e13f40fdf55b3fa3aee73165ea47baf"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "75bc470e70b801b6aa37a36d522427c9"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "ce73fc8009fb18272a5f2758e093636a"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "bcf0d4a425031d418d6b16431a6ee9d9"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "7881548e9464ea6540d302d065fdf21d"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "19f9d096e8e81f552968b4016869dc23"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "4e11f7ac6c2af7885a54b76e51c58e49"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "b55f96452e845ebdb1b4262ecec2e860"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "2eae15bc4e76b9da7997df4b5d589b73"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "eacb9a2e1e6575433591eaddf1456cc5"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "7e403662de7f819e6042d5dcfd75a6fd"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "ed47715334f985fc52af971c1260aabe"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "cfec89f98e3f029748109638839ce186"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "08b86a73e251eefdf4d291afcd56789e"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "e164ee071cd526893c8ac17549a4f639"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "3059eb9f9f6f9bfe88abef4b51da5878"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "47e115bdbf557a891563bc947df4f99b"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "be70d14b9af2b8961be09159538a2193"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "fcef908fc3c4054850ae159c05a000ba"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "75a471a984b64f2c6dc1fcc46e6ed251"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "9bad1c9845b238c0cd7d583995b55fac"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "3ffa28ab51f99cdd151bb81de7fcaf35"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "1071d0cbf447137192f6c35126e74116"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "571a1899354ff2782631fe6853a26ea3"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "7e2695240310cfb47c148582b390196d"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "0a299d15845ffe3263cab5bf43964d6c"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "67f5bd30368d05920474993fdf2c4279"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "51bfe04c8184b72204470be9524bc10d"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "8d9998ca5a8240f70d5db0fe34febdad"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "5f98168492506e24ec82bc8c3337c9b5"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "bbe3cf40de64fd206ef0e8f5c403bebb"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "9bcc3a6d279dbe0c7096e526e0de32b9"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "5285a97b6ca0c58e91edd1b827cf9d39"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "21365801e7e1eac1e93e8ebe290566c8"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "59264f86484f960df1a547f59b25ef65"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "b250cf5025b3f657cbe6394384af3e85"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "9e24b40b6672e6d8b27c5d55f03556ce"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "dba907b8855bd98728faf5fddbb5634b"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "8c70e01515337ab990b74d1a340dfbca"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "9998f7ee2e0e5374942ad1d281673d7c"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "6e948b74549f0be7249fb92f8d6b0e3e"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "53e7d5f322ed56c0d960aabb7e0652c6"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "d16f862fd66859987b9c0be8e6bb6b7f"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "76acb1417825d7d8c330a4a433560f6f"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "c87ea95761185ddfe46de6d7997df557"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "157c18c0bd7a5a41f413b2fa8fea6c76"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "31be2c592b8573c2a79fb05cd11959c0"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "e2ff4a77f0b7ba8ed81781717aa0ad89"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "caa3d4b19510cc1edb0153601308cc79"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "0c790b1a86fa470af0f53ec43b3ea913"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "c825d0f8b7e4291596f43c524ccfba85"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "9ed099235dc83e7d4f3847318c6f86bd"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "fcf61e485921b3b02a1b88d5147ad30c"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "51d4edb3bb983c6c34b8f59912080e3a"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "aeab858fc53b90ffac9b6f2462ae8887"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "a56ec1b860e02b0a4f02a0e35592f42a"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "8eed9d23bc89f8ad0f79f0e47ccbd822"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "21b8ddffaabe7057a0a368cd25677f8e"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "02bb0a7e2b60331cb428d5c3d598aa14"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "d2c87b9f5c532eff2be16cbeed0541b2"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "1e257e16512fb163c7c4679a35533a86"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "c69341d04cc2393d9d8981f5cce0448a"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "aa63b2521b58f3480d9370cce3e2b037"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "eec741554dba0b2a958a1d741cf6501d"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "899bd6ef81b8db56c574e55d4ca0c3cf"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "af58c4df44f1bc9a5cca79c413ac853c"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "4cf941be699de0971d9d9f92661a4433"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "c79130bad53e3e68dc6b01549d520af9"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "5d88de1282a25d1dcd1efeb84a9c7de6"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "51e19ce8bdf3efe92d0fdc2f4b339592"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "89901cdd127d469f74f247bf5791dc93"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "126f936fcc04094d8525d6f9d11072de"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "44eb023c2063f9fd125a1961ab98a43a"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "4c9bed5898ab98f1a86f64139be094ff"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "21c541f05a1ff7bbf700ec3a46f0a3dd"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "9c01540d117465c81dec0bdb2f60e60b"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "e052895cb155d4eb651d7fbf9eaee47a"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "010508e60cf0533400a769b41ba69d4a"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "5645d53468e053aa9bb3fae9a117bb51"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "dfaaea7d07f020e331ba6ba266080fc0"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "a8de98f7e7681999025c70d33a54c0da"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "01db963a1336878e4a6929ff13ff2624"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "4d680da2c230ad740b0bc585b65aadb7"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "ec29ebaf259a502ee93fdcab958efb15"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "14fb7472420964ac6309df847003730e"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "a7794c16fce78156ae67b8d48399ea84"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "fa0648b525a995808ec1af3c99f1a17e"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "7fa159b54fbfe80f8d5ca695cd6ca33f"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "5a3af62ff0827ef8a6e44b46d9920f86"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "617758c9ddebb0cb4dfd64adc5c5dfaa"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "eb1ee7c6860a5df47bda86ba9937a2d2"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "aa93c450e67d84f8f1a2caf5b21968bd"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "202d06b26c6051e4d527943e1b8e405d"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "3894538457731b2823eb0a65fb50d7e5"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "24fc2c775304f32234fac91bd4163397"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "66778ded1e594fd8948fb1bc7a5fa2be"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "d51375fa718fbe14d0839c4a74b778f5"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "1830b208b2452a514e4701aeca17372e"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "7675df056f8c7981f5421b59d7f103ae"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "cd66abc563b1fd8eaac20a8e147198e1"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "f8c3b7d754599805e84081582b54e7df"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "ef3696fbddc49ede6f69f49c36b944c1"
  },
  {
    "url": "404.html",
    "revision": "32f318f6bee93a26261d0e7a02d95458"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "cd6bd50e72d04232720cd524b458047e"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "0696eb9c186c02c32c6383f9fd4fdfa0"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "f59fca7f6e2eee0b02bf8639f1225b42"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "ac3318bc81cfcfea64fd7d3e6f91cfd3"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "0556f3844bbf375153ade6ddac2d320f"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "14b68f0918926fa908e6cd31b8852b8d"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "9bc5ef98ae78cb81efe0e896f69bf5aa"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "2edd43b8ac6d6cf8978a8eedb6fb8f78"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "a0e945f0145b83e67306483224336d1b"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "ac272cdb901bdbad3aaf93b706c7f3e4"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "6f20d5cc04c5687b27535fe436dc3b6a"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "3808b53f0af421617b77353c5ac5d67f"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "2fb38a52856a39e4d3866a3c1e9e8361"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "018906b742639a1861b2d038dec3b068"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "23867faffa81f5aab936c6d608ffd7f3"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "ca8a961b12b4e896d3818f044e320fdd"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "ded8a84de76a15c192f748a34ef7a928"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "fab1329ad02f7ce522b870c7e14f5d6a"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "515909687efe25966a8d1f3df1d8fd71"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "e15018baabbf40428bb421a0cc2e3b0f"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "ed660b9b2f5ca291ed59651cbcc8bea3"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "96a718bec3adb36fb613fabc464b9a54"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "d95d21e47ff4565bcf177e076861aa05"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "bacc8d6137d96d18ea7f4ce9969f4a4d"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "5ee0fdaac9b23d04c9396ddcfc2494a2"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "0de524e421f94bc756ba114b4716a213"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "57b2d80e9d841611699b3f384713d9e2"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "be2f77b5dfc64b5a72b70568b251d57c"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "68bc55c7bf3bfb20d212ce89118b7a9d"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "fc2695c97fcc8b63462d78815028c750"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "1c658195718cd53d6c2326bce98374a2"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "2ebe32d223c64bcf5f77e46cbc012b9f"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "86c84a8c3016d56fced9c8c90b29883c"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "64e17066d7aa73592d67e6fa42fea33d"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "3e730f8f363ffe5a14898cf6c6a93b73"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "95faa6874105e80cc982bd6f8b98942d"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "175ceda93df656846b17e7a84b9d1559"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "41928ac76dbe01237334bcb20ab4eea6"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "dce29e3485ae4038c4b3d3b3d6b62482"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "1616dfe4ed712204092852c8360b640b"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "ba29ddaf1f3bc5100be96b38def081bd"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "2f96916502cb99b8e11d0d1b4129d3f5"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "370b8c8a331c81b6b0738543c43dd0de"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "b46270c3c52e2e04ec95611cf17eb1e7"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "46718ccfa1a21c3f85248a7e8c5451e7"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "3ef94cbe678854cd3025b70e9265748c"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "fd566c475fe6dbf4db16d7275a1f48d3"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "b2515283b9c3f70f0979989dfdd92868"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "210cb6f925fa595019aeb376a28f21fd"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "bd4235630031b3b9610d5c569851e294"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "82359df51ae13cc40ae597b3b4616f66"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "28f311aa7ced0eac09c78abcba8fe54e"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "e1f846fdc930f8d406e8c8c634c2c317"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "4c0b92906e2c60b89db50f8c53cea8ab"
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
    "url": "assets/js/106.41f6b9ea.js",
    "revision": "3af263b9506a48891a7c154d0cadbe18"
  },
  {
    "url": "assets/js/107.92a9807a.js",
    "revision": "b0d79fabca89fab043ebf70de0c2e64d"
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
    "url": "assets/js/110.c60e9349.js",
    "revision": "35e6d51d4d5bb2dc61b9c24e098c723b"
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
    "url": "assets/js/123.e5e1ce93.js",
    "revision": "9b20d3bbd6806ba061a9446a1ee989c4"
  },
  {
    "url": "assets/js/124.3ef4e9fc.js",
    "revision": "6949c33e6190aa0659086dd3c17df019"
  },
  {
    "url": "assets/js/125.08cb618d.js",
    "revision": "5d337a5bfd186ffc26194d3345c42536"
  },
  {
    "url": "assets/js/126.39ce8fea.js",
    "revision": "074ee2bdf8366a3dc615ad37516726d6"
  },
  {
    "url": "assets/js/127.6e8be0c1.js",
    "revision": "b71d008071f2ebf3ac797c8c38eac124"
  },
  {
    "url": "assets/js/128.49787d90.js",
    "revision": "e62882b030eb1e59756987cffcf6815e"
  },
  {
    "url": "assets/js/129.45755f63.js",
    "revision": "97817e63b7401d795e364af6f872acaf"
  },
  {
    "url": "assets/js/13.090cd581.js",
    "revision": "03ccd5f2b00b2084bf27427923d14b13"
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
    "url": "assets/js/132.cd44e280.js",
    "revision": "1687fa990b6cbe541322d00369024b2e"
  },
  {
    "url": "assets/js/133.07a19088.js",
    "revision": "00c52abed38967ea454eaf431ba1bf86"
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
    "url": "assets/js/138.b47f2f8b.js",
    "revision": "32230323b957a6be43c894ee9dfa3a5f"
  },
  {
    "url": "assets/js/139.c3cb1f62.js",
    "revision": "59ee9d92e1500a0cc8d101adf61817a6"
  },
  {
    "url": "assets/js/14.d5a2ee28.js",
    "revision": "03f913eb4bc381b71f6c918ce8f53af6"
  },
  {
    "url": "assets/js/140.dc05ca20.js",
    "revision": "3f227c479dfaa14ff15373ca0a47c6f3"
  },
  {
    "url": "assets/js/141.34e50dfb.js",
    "revision": "c65dc2c265f54ccbbc18b9aa2ab711d2"
  },
  {
    "url": "assets/js/142.bbee59eb.js",
    "revision": "ea44bee4baf8a7a62af28f99ee4adbfc"
  },
  {
    "url": "assets/js/143.ad4d4060.js",
    "revision": "c3575ace68325f69087b2b1ea84360a6"
  },
  {
    "url": "assets/js/144.5549e9b2.js",
    "revision": "51025b09712e5e40f7fc2696be338d43"
  },
  {
    "url": "assets/js/145.5e0206f0.js",
    "revision": "ac6f7597729a65227f4400ed585ddb7e"
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
    "url": "assets/js/148.083f5c0a.js",
    "revision": "5c737500d22291a690331ebadbd9f895"
  },
  {
    "url": "assets/js/149.4a79adb2.js",
    "revision": "3b63a3bc32b1d654c9315dbc786b3d4f"
  },
  {
    "url": "assets/js/15.ec87e80a.js",
    "revision": "5fbd095255eca9c4b4fb1353ee31dd1e"
  },
  {
    "url": "assets/js/150.24f48bc4.js",
    "revision": "94241f255f33335679b87659a4d03fce"
  },
  {
    "url": "assets/js/151.6b79bb0f.js",
    "revision": "14b1f4946e47ae8ef830e3b530f6e283"
  },
  {
    "url": "assets/js/152.07833aa2.js",
    "revision": "e5a768aca89310af2d8df596e6ed969b"
  },
  {
    "url": "assets/js/153.e72f3f34.js",
    "revision": "90d52d0ba2d92932a318562114ab25fc"
  },
  {
    "url": "assets/js/154.6ffe4907.js",
    "revision": "bfaa31b180469bab8a418a9ee6725e2b"
  },
  {
    "url": "assets/js/155.2120fd80.js",
    "revision": "3460e3396ef1ab6b5799f4837ac2c4a7"
  },
  {
    "url": "assets/js/156.06de34eb.js",
    "revision": "36b3e42ac28c676e910122ff5afa8e21"
  },
  {
    "url": "assets/js/157.c0c72142.js",
    "revision": "767fe834bc929c08ec223ddf9db2ef0d"
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
    "url": "assets/js/16.01c60035.js",
    "revision": "7b78551316f204faf1d42493cc84fa47"
  },
  {
    "url": "assets/js/160.448fb0d8.js",
    "revision": "f879cfc22fe500fc69aa3d09679d8327"
  },
  {
    "url": "assets/js/161.ba3949e7.js",
    "revision": "6bafbeea045ec6179bab3671fcd27392"
  },
  {
    "url": "assets/js/162.fbf781ad.js",
    "revision": "fac9bcbe0092ceee16c26395222cae65"
  },
  {
    "url": "assets/js/163.ed69afed.js",
    "revision": "58715658bafc2ac47e913c54e0a9c675"
  },
  {
    "url": "assets/js/164.81ef45c2.js",
    "revision": "fff8e491c7adf2ef23155d8b4fcc4395"
  },
  {
    "url": "assets/js/165.d5d80cac.js",
    "revision": "9b1b61cf576863d5df048128b4c3036a"
  },
  {
    "url": "assets/js/166.e9193c2f.js",
    "revision": "c8978aba150ba4a111d77a5f91cec951"
  },
  {
    "url": "assets/js/167.821f9919.js",
    "revision": "b97496dac1f2e3fca0626eea01b720dd"
  },
  {
    "url": "assets/js/168.64c26353.js",
    "revision": "f01434713e1251e4b2343ec0ba2a7386"
  },
  {
    "url": "assets/js/169.f7bdffee.js",
    "revision": "ff4d50d3733ffbdb4905be8032b35000"
  },
  {
    "url": "assets/js/17.be04e724.js",
    "revision": "61e12dd6d0c2bb27f60890b4bc70b303"
  },
  {
    "url": "assets/js/170.250f4147.js",
    "revision": "200e9fe0c39713eae91aedb8307dc378"
  },
  {
    "url": "assets/js/171.7cd5076c.js",
    "revision": "6786dfacf62ee7b1b8a9bb190282008c"
  },
  {
    "url": "assets/js/172.cdcb2e1b.js",
    "revision": "36e5b68198214ab762ad19ede5a59e49"
  },
  {
    "url": "assets/js/173.ec907150.js",
    "revision": "0e234b08fcf4e346955618dc62db0195"
  },
  {
    "url": "assets/js/174.d9ebe938.js",
    "revision": "86801c0bb2eb8c3ae11e0d5fae271210"
  },
  {
    "url": "assets/js/175.f41ce05f.js",
    "revision": "742f936b35d2d18b58b73144dafe9824"
  },
  {
    "url": "assets/js/176.cb9aa1e5.js",
    "revision": "f9cab39c2d8b6c35e2139265bf2bc5ea"
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
    "url": "assets/js/179.9aad0496.js",
    "revision": "ca6ace7550973ad84eff354c2354fb04"
  },
  {
    "url": "assets/js/18.99de7daf.js",
    "revision": "0c4c73b06bb6577d820411b4f8eba814"
  },
  {
    "url": "assets/js/180.5468b34e.js",
    "revision": "58e9a1fc5a38b8124b525ffea37b6790"
  },
  {
    "url": "assets/js/181.850e5b6f.js",
    "revision": "bc5340938ac1495e0709703d2eeb4a89"
  },
  {
    "url": "assets/js/182.229010ad.js",
    "revision": "7eb312edbef13cd3790cb3a28085ff5e"
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
    "url": "assets/js/185.f9acf20e.js",
    "revision": "6843113e687bb2015b1915e022245bd8"
  },
  {
    "url": "assets/js/186.eef3e44d.js",
    "revision": "dc1f43969d406613f8ada9edf3d61450"
  },
  {
    "url": "assets/js/187.1987b45d.js",
    "revision": "778da38a522cc68e5b9b73fc6f43789b"
  },
  {
    "url": "assets/js/188.3c166483.js",
    "revision": "8c50e38ff19639b7dd4d7b843d497ca3"
  },
  {
    "url": "assets/js/189.5a39c173.js",
    "revision": "5eb2f0e24b4e2d05687785c2a014cc19"
  },
  {
    "url": "assets/js/19.1319631a.js",
    "revision": "be68c9367d44568351d48d78da38070d"
  },
  {
    "url": "assets/js/190.7205d249.js",
    "revision": "292e88eb9d3ba33cf55889ae7774b12e"
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
    "url": "assets/js/21.c27a684a.js",
    "revision": "d7a843f6c334fc9c387d81c879da64b1"
  },
  {
    "url": "assets/js/22.63be2330.js",
    "revision": "8a755a83ca47abfd8b23a973a03e3440"
  },
  {
    "url": "assets/js/23.ef4e0a77.js",
    "revision": "319f5826f04417bded45825447e2d44f"
  },
  {
    "url": "assets/js/24.534a49ac.js",
    "revision": "28480ffec0fc40d38b6c3392ec774009"
  },
  {
    "url": "assets/js/25.4b8aa618.js",
    "revision": "f69cb7aa7d43edb384a4493d332205f9"
  },
  {
    "url": "assets/js/26.727bb961.js",
    "revision": "60b82fbd1c8b166ecd021ff3f5d32d5d"
  },
  {
    "url": "assets/js/27.50e2045b.js",
    "revision": "e2ccbf0996baf02389fa6025a1b04d59"
  },
  {
    "url": "assets/js/28.deefaa4c.js",
    "revision": "b1d4912f94074bb73c9230ad4cce8d4b"
  },
  {
    "url": "assets/js/29.4fa5f570.js",
    "revision": "c60e663e4285e14ce7526930df149846"
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
    "url": "assets/js/31.dc46ee65.js",
    "revision": "78702be8a9c7990676ffd15f709d78f9"
  },
  {
    "url": "assets/js/32.4125cd77.js",
    "revision": "5270c9efc052d48e0cc4a4780d17e3e5"
  },
  {
    "url": "assets/js/33.1054ee02.js",
    "revision": "2d83bee7e12103ff437ae04a04dce6a2"
  },
  {
    "url": "assets/js/34.5560273f.js",
    "revision": "d5ef2380b9ca02e0a92d41d2da40672e"
  },
  {
    "url": "assets/js/35.c693bd0a.js",
    "revision": "eb106366e483ad3f0783becc1845113f"
  },
  {
    "url": "assets/js/36.8266431e.js",
    "revision": "d860e7fb7f26ad89edafee2b2309be93"
  },
  {
    "url": "assets/js/37.8b5ae339.js",
    "revision": "ea599ce15e7fa15c426432d758cbbd9c"
  },
  {
    "url": "assets/js/38.a3199d1f.js",
    "revision": "5695aaee295a79c0f85dbe2834645fb1"
  },
  {
    "url": "assets/js/39.16dce1a8.js",
    "revision": "28181aac3da5a740852bc1de591ae103"
  },
  {
    "url": "assets/js/4.c8df931e.js",
    "revision": "19509759f40bbf3679e40bffb5a30055"
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
    "url": "assets/js/46.e4b879ba.js",
    "revision": "6cff182eda6774c8a3ff6e4be305222f"
  },
  {
    "url": "assets/js/47.3fcae11f.js",
    "revision": "f8e0efd840ade35b5537981a6c11ecb3"
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
    "url": "assets/js/5.bd89e85e.js",
    "revision": "1b50c405c0461447ec48664c35e6ddb4"
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
    "url": "assets/js/52.6599f277.js",
    "revision": "6f572ee3edf6006be71443ba568659e4"
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
    "url": "assets/js/57.66b4d299.js",
    "revision": "0285eac856a739367ba8c079c15adbab"
  },
  {
    "url": "assets/js/58.122b01eb.js",
    "revision": "8b98eccd9faadbffc9600b97ec300574"
  },
  {
    "url": "assets/js/59.8bc2adb2.js",
    "revision": "f7267ae36571de4daef27cd4b795efe3"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.2ca62095.js",
    "revision": "5d6b3b9f0e2e34bb3a9dd9f07beca383"
  },
  {
    "url": "assets/js/61.3b84610e.js",
    "revision": "7f266714d5fb2a077ec7143a497d77e8"
  },
  {
    "url": "assets/js/62.3ed27c6a.js",
    "revision": "ac7a76381173c86c166a0db92a49b37d"
  },
  {
    "url": "assets/js/63.2dadd883.js",
    "revision": "80471c23b6f3744164901abea4825da4"
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
    "url": "assets/js/66.fbce49de.js",
    "revision": "9ec8f523b07d08de950539cae0f3d699"
  },
  {
    "url": "assets/js/67.3adef651.js",
    "revision": "14c53a9c505bb61a1c8c9e4e2ba83a1e"
  },
  {
    "url": "assets/js/68.2086c7b7.js",
    "revision": "b91ff8362ab3561b4ed17abe7443f2bd"
  },
  {
    "url": "assets/js/69.3031386b.js",
    "revision": "c03159ca716c9929c5c0e45e8a87958c"
  },
  {
    "url": "assets/js/7.afa77f40.js",
    "revision": "010d0121ed4ae2a2cec9654d112fbb87"
  },
  {
    "url": "assets/js/70.59a57b46.js",
    "revision": "400255e400d6d70f98d4b260a45762ea"
  },
  {
    "url": "assets/js/71.62ddec74.js",
    "revision": "c755691948a47c8b21a3f727a9bc0f5c"
  },
  {
    "url": "assets/js/72.92b9f56f.js",
    "revision": "e4eaa647eb19709c5e45cc47a44e61c6"
  },
  {
    "url": "assets/js/73.f9231fb3.js",
    "revision": "fed6d7a27e430730886dcb039b345d34"
  },
  {
    "url": "assets/js/74.0fa6a06d.js",
    "revision": "c4fb585e6817729cda505d986b29c39b"
  },
  {
    "url": "assets/js/75.caf15e4b.js",
    "revision": "090f471d486cce6778b2813c23ed99a1"
  },
  {
    "url": "assets/js/76.5d719662.js",
    "revision": "02a18c84e62ac8ad4b03eb35b4b111d2"
  },
  {
    "url": "assets/js/77.2346e05a.js",
    "revision": "cf6423c71ab6b171a66182e918f6cdf9"
  },
  {
    "url": "assets/js/78.57fad0f2.js",
    "revision": "e9262676c0ce776dafd74951853b0471"
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
    "url": "assets/js/83.27c6cd11.js",
    "revision": "e6846ed1e191fe29bed2cdf524551357"
  },
  {
    "url": "assets/js/84.a580b935.js",
    "revision": "1435b661026560d1a9d94c5f6f3e8634"
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
    "url": "assets/js/90.d7a7229f.js",
    "revision": "a09497b97469f63e46c24f6dffdb5651"
  },
  {
    "url": "assets/js/91.658032da.js",
    "revision": "75c3e9cb5d8503b2f4c17c4647f4d905"
  },
  {
    "url": "assets/js/92.a807413f.js",
    "revision": "3ad1c5cdd43e6b991cc945dc731c3a41"
  },
  {
    "url": "assets/js/93.8be5b7db.js",
    "revision": "c0c2efc59dd0e42863dcbe357029ccf5"
  },
  {
    "url": "assets/js/94.c0e6d4d5.js",
    "revision": "4f327a3b750d173df8dfebb50f28c763"
  },
  {
    "url": "assets/js/95.a9ed630c.js",
    "revision": "edc6155ac1e722e74811c6622ab03c08"
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
    "url": "assets/js/99.7a1a6ef3.js",
    "revision": "7fcd33000c3a5a835492b29434cafe65"
  },
  {
    "url": "assets/js/app.daf86001.js",
    "revision": "ad8e8980bfb996f565cf3fa8f4bf76fb"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "89afd397bb7bcbe6aae7d52a3c302eb2"
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
    "revision": "54b86dc36a22c4348688ff621dd5cd7d"
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
