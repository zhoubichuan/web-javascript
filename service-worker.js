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
    "revision": "96f27494c96416910203b6dd6c861778"
  },
  {
    "url": "1.base/1.js/1.index.html",
    "revision": "d49693da7478599dc37a0ddb84a2fb2e"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "43b342bf62f28a7e938ad1495192c9fb"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "f1b1b438e1300b6795a5d1db15e267ce"
  },
  {
    "url": "1.base/1.js/2.morphology.html",
    "revision": "7b65060165973772a3c0ec02e3ddb5ce"
  },
  {
    "url": "1.base/1.js/3.context.html",
    "revision": "1d7c4653b679fd2288b6ee072a75b529"
  },
  {
    "url": "1.base/1.js/4.variableobj.html",
    "revision": "3530f68db33bb91c5c3f0e24e94843e5"
  },
  {
    "url": "1.base/1.js/5.scope.html",
    "revision": "456d6cf3a9be96b25119ad9daf133033"
  },
  {
    "url": "1.base/1.js/6.closure.html",
    "revision": "d2f83a3e4890e2e70a0d3fc17ae05013"
  },
  {
    "url": "1.base/1.js/7.this.html",
    "revision": "387f2ec182fa4974d3382c696fa934be"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "284eb4531df9ac5fb790a73dce46d27e"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "7570e6058d6f715217cbf44d94ded6d5"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "7672e32442581036df44dcf98136a663"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "e85f874602f394da2d6aa56994eb6a2b"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "a1ff00c139098720020d23efb368505f"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "45b5af58ca3b2dc93c2e27f7c96cb8d1"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "7faa19b916ca7e4f20df8d19cb8f6f02"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "e5179c5923904d095769a539974d06a1"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "62092b5360ec9b1a95e3cbbb552d33ab"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "0ec2fafad92b3edc1828b0bbf08b36ad"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "61e9cf33a94545ad244a48c21dc2a1a1"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "d51820acf7eb247e0402bfd9e0b2a0c9"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "718b7a02d886e83c82365485721abd17"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "6968a20cd645822ffb06cc63ae01471c"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "f9e6d440c18f568c4af8dde74444e8c3"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "174839ec1e7e9bb997863f65ab842b06"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "c26f30723a2aefa30821db34b82397dd"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "67e082b056bd202a617d9578851b6235"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "f215b3ac2137accb87364aedb549ab3f"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "7b4c3b8561ff1a6227f6f00ed96d0b2c"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "bfa34d4766d21080dd82410c8f78c88f"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "83d02a19858f1d561624bd69d2554831"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "34f2ef50d24ffb2ff9f9d5946609f69d"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "edfb07ea6f700e5349387d2fc68b5b1f"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "99daddf1d8e722c460a5e529adcb1aa4"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "6c6eaf5aba97ea024e25afd171afa70a"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "bc000dc07a96ac4886ddb3dbf78f3f27"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "58d53710467d2b7e394b1c4f536c3fb9"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "49626ba331201108c390ee0473959ece"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "7333119402673661c5ac464a49dd0b9e"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "f443ba4f6c922fd59c4e1a67ffa0dc3c"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "558f31a32d9ab953b103aa02316fd19f"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "01be7fc99727bf1fca694c11a76b8514"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "cfc35d27803324c8ffff06370a5296bf"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "42f435b49192710b0aa04670f5f2904f"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "6a85c1bf7e7ae3fb3d7d3d9f36539abf"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "a6134fc4255094cf943538f62ab39ef4"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "2da4dd8918fe9e525db1e57f17cc6c5f"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "c53620a95cc38be0653b6fa19784d218"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "d08405a726a7e594d82884ef7859c439"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "537b03451c8ac869cd6d65bdd5a10acd"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "81a5c2450225a56c768c221134f9c514"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "5413ef97216a04efc52d5f722f457270"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "5fdf886665e515418b1217796d4e233c"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "93b4676fd4c8c5177bc2db669c33be0a"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "84134a297077ea2386d04f9a1c6e0fb0"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "28a0d641bdf7d47d10c27bd24b08e62d"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "20edaf87164a83cc331fcb7b148780fb"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "add547937a2d4fa7f6c526a16aae58f9"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "cddd0149cad2518d7dd5cebd159adb70"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "623d04e69b2e5e08b87442677eb6ed7a"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "8c56fef8ba43a799f76b51af51ffa142"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "5ec140e9ce7d69b8dec100ae6da0eacb"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "4e67bc120d40f850b4461bc35d3c2b64"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "45ddd5c15de0dbd6195202cba6d55d14"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "4923e7ed734379864e31fa5a9b50ea3d"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "7ea3bcdcb22e282c483199ea4b1edf41"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "ff32073230b73035247d3283d0794aec"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "f761c37dc087b465862e070c38f255a7"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "55b7628c5bd6fcb2ac2e9eacb6fbdbe9"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "221283ec16043042e403ba0ec44be317"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "7645d66d46a7139fed620977eabee24d"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "db8b50d450d1e4941a58f98fab436804"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "3418410a1b4a60e9044c62cfce8e9cc3"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "9d5bf5bb4fd68dd83b0a9e12de20db2e"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "7b0bbba225883b70bf80fc1676fafdf7"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "9d36416f53d7ae70ab3383713fdee7d0"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "98430d2aac1d9457c4f0f503c8551f53"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "ac472208dbee242f0c520765de17fda5"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "75f3b3356bdbaf39377c1e92c04da437"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "f4a01abc647f1b1c967b2d506ea356ab"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "ec605bfa64243b3544352d87543a4204"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "ffba9c1d5c071aa7e5c0a5643708f81e"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "4c378147e00359f05281eeef1707bdf7"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "2cfbfc23cddeb33cf9382759a63dc4e5"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "c76341eb2e427bdd26aaa5ee705f4ecc"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "ce94c939ae743c091cef11a9abfeb044"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "c33905185fa08bb9c9623a0fe3876d7f"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "aef01aad6fe21d131c9b8523bf9ef497"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "42bdd9c2511229b06439619f195ade8f"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "0cd287a20dc9996c433d14477f27751d"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "4385330078d65ac8f025decc603c7bf3"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "d04ff9d55b5783a322c393bea3512164"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "75f93c26650b69eafe87ea7f15e8684c"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "df99c69a7f8ded8fc2700207b311b5fb"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "89f11ab66146dd606b9ec1796bffa381"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "4d11f902920f3ef16d5a8e29c1d659b3"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "c898e13f2170abb6b9c4c3ab9c658c12"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "abead9512b75298c5dc5195622086459"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "a737e7dd5fc32dd1cc127c67b036cae9"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "5b2dc7a93493d317d3d4252a4dbf68d1"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "dfff70717fed9ab4fb7e444448dfc4e3"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "60516a5d70f69dfc39edacaff3bd083f"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "e4b40ea53fcaf987124604c3f40c3ca6"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "3a41e3d5a17ba2a5edcc36c49b78a381"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "3d9402a91cac0f36035862bbbe8868c5"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "032ec9654e357595909811189217b593"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "66eb7ce9ed3fc6372118ae2c543e52d0"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "b3af518e9f7f2e6061f71f8e224a758d"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "8927a33f428a0c3be044783d34ca548e"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "42dd014c9686e4517cf273ef2f4a2abe"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "a785b975378a0294dfc0e88298cf28a5"
  },
  {
    "url": "4.special/2.package/1.index.html",
    "revision": "80499387e47c3ba09cfddfaa2c54dad2"
  },
  {
    "url": "4.special/2.package/10.html",
    "revision": "530dafab99b9e5063668535f48901f70"
  },
  {
    "url": "4.special/2.package/11.html",
    "revision": "73ded3c2b078dc8287bb0f5b6ad512fd"
  },
  {
    "url": "4.special/2.package/12.html",
    "revision": "0a6a39162edc6e98eb4080c7461e1661"
  },
  {
    "url": "4.special/2.package/13.html",
    "revision": "e809a85c804b17fa63617c81e7263422"
  },
  {
    "url": "4.special/2.package/14.html",
    "revision": "8d1cdd87e33bc7eb9a2e77670e7f2bad"
  },
  {
    "url": "4.special/2.package/2.html",
    "revision": "06affa372f5888c5f7e34bc1ce1ed40a"
  },
  {
    "url": "4.special/2.package/3.html",
    "revision": "e41d1ae5084b8c8d08024a507fe29b59"
  },
  {
    "url": "4.special/2.package/4.html",
    "revision": "5a891ca37601bdf35ad3cc8c986a059c"
  },
  {
    "url": "4.special/2.package/5.html",
    "revision": "839ad1cd43a0129f3606019f5a64660e"
  },
  {
    "url": "4.special/2.package/6.html",
    "revision": "f5429994e5540916305e5cd30998e7a3"
  },
  {
    "url": "4.special/2.package/7.html",
    "revision": "dffedfaec556244372387121968a7796"
  },
  {
    "url": "4.special/2.package/8.html",
    "revision": "754b1ae77bb66a1178f2b99b73086826"
  },
  {
    "url": "4.special/2.package/9.html",
    "revision": "a82d9acc0b0a072b05a6cc63cf9f0068"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "e4c4e7d60d91e25b65abbdd0d33170cb"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "2c6c18d5336924134f8c9129cfdc63ce"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "f678cdbfdccf9be1e080a5794d5074ac"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "d973e5dce6918aa53086148b28c2b7e0"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "07194622ef1c32bf713d5fde0014ae64"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "011118ad4f6354820bbdc3f39e3bbc3b"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "22e612afd5e1f56ff925521aedc71d87"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "dfa85ace9aba3c11c9364d3c38dfa459"
  },
  {
    "url": "404.html",
    "revision": "e2a34f7a6aa5859d4da1947a840c8de8"
  },
  {
    "url": "5.scene/2.file/1.index.html",
    "revision": "707382213e7ab8b689ffea132d43b6b9"
  },
  {
    "url": "5.scene/3.video/1.index.html",
    "revision": "5a18a80b3dd2d424167562b4826d27a7"
  },
  {
    "url": "5.scene/3.video/2.haikang.html",
    "revision": "0c7fdc53921c4930d680af30f00180f0"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "a5508d9b344c8afb30a65d0b7843e0c1"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "f41db887e2b7116a488e59ca1f2240c4"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "0a11553ff9c0e3e3117e4b92ae5ce119"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "a3ce15ddd8cb63430e1019842abc798f"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "74299a343e572b89bf68ac70ba49228f"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "9af27356d72b881aa413d95d1bee0163"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "e50d9abf3071bb9a0d22ccbaddc3d4d0"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "1d5b5fbaae369ae8a9a609c2e66f923f"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "17b9dcd127210e1f86bb7d168ae853b3"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "d8a6be116d5246e08dba738919dc263d"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "957086af1524bd621a66a05dbd79ab2f"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "9c19d5903f1b7f924b46fbbd2412aa6d"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "c85691188b1c33de0093b32da2f81b97"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "2f1e516d817beb7727a559f5f2b1d433"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "3aceae2513a045421875d5b82af39726"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "3fd894d50eefcd0fa77e960c73a030aa"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "566c5c5f50b569e0ac06b8b65eca5edd"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "a01eb6c1e9a9e045bff22a0d5d984a5b"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "7d95f6e0cb1bfe7f63d5a3dab6e609a3"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "1349ba2cf74200d2443f837565947633"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "1f807c51f5757bf4291e966898308cdc"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "85dab3ea58f4819ef84d8936f68e8dd1"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "3a24c53857cb11e31a71d6c55ef42c32"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "307e2d73de9d84c18ffc5498bdcd9cd0"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "a6df96c2418474d8193419b165337d4c"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "5f3e82d2d877514a1e2bb7ccf33a7812"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "ffa4b93682a58d848b2001390044c22e"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "c7ca3ad5fb0b4860edb02352b251272e"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "48975d559ade6822be5936a1dad41468"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "f7481d541223a20312979efd0d6ff72c"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "b7da7266a96ef471d18f6b41d8d4d01c"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "5456d7e1074774b23e6b488b0bec2160"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "f8c9671a805d805af60681e2cea189c3"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "4b700346a8c27cd6cdc8b1fc69830ec7"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "795ca4a012a0261c18fac59ab30d7e8c"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "2f06db9314510aee6e725785224feaf7"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "2396a64c4c6e3c6686bc3fd79ea76a93"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "c0572f70e660ef81e8def5bf8b570cad"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "f688b6db23d5720348de6d2caec19d99"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "534892eebcbc5b277d24f60d2479b956"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "2df71f13ccc3afd53c2ccae69777c408"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "59bbecb673b1b0c09105a4d7c88c2ae0"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "0c20fa95793cc9f1d87cbfa02a4bda04"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "380964bb9d6a438a9bcfb29230c7d8ad"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "ab591197da9d68c5c21d18987261dedb"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "f038cb3d5b1604cca9409a63e14e1088"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "aff6e9b51d61212ab6aa285797b8952a"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "c648f5ad5f591b1e15ad5744d3cdf149"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "b229baba52cdb7a4faf1554f5b055dce"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "92d84b594332c6715afd65a59874c427"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "433229de37b753a96e9f4576b525086b"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "98ce05d82a7bd722baf489cd75c7972a"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "d089834697847bedb3cc5aee6f78c28a"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "87d84ee6f2ccb0882d2daa715096f40e"
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
    "url": "assets/js/10.7760e41e.js",
    "revision": "db225fdc0765dc8f27dd447c07346ec4"
  },
  {
    "url": "assets/js/100.0c8d8e94.js",
    "revision": "9e1f26df4b9cb74eb76228c1fe5c82d3"
  },
  {
    "url": "assets/js/101.6dbfcaca.js",
    "revision": "0eca55444bd49276038bae1aa81de9eb"
  },
  {
    "url": "assets/js/102.1f596139.js",
    "revision": "385ddb13af3b59184f1e335a3c8cb95a"
  },
  {
    "url": "assets/js/103.994f8c26.js",
    "revision": "fd9c740aedc8e6e214cddfa8d3e475d4"
  },
  {
    "url": "assets/js/104.b940e627.js",
    "revision": "eac6bd1c65d126fe24ec89153e41cf42"
  },
  {
    "url": "assets/js/105.4c74825a.js",
    "revision": "3b4f4188357a2b14706525378da01eba"
  },
  {
    "url": "assets/js/106.59ffa156.js",
    "revision": "0b8f6d2c592655336b9efdc8c9e80126"
  },
  {
    "url": "assets/js/107.8261ef77.js",
    "revision": "0bbb9b5fb2f15767fcf7b952e5c6f85c"
  },
  {
    "url": "assets/js/108.72d65a2a.js",
    "revision": "fd07a9483ce7cd0e7d2d324bce441850"
  },
  {
    "url": "assets/js/109.8fcb32fd.js",
    "revision": "f5a5f08c69b98cf690d9d71b18973474"
  },
  {
    "url": "assets/js/11.91cf10cd.js",
    "revision": "3e9abeb80165a990c612a57a3c7c8f78"
  },
  {
    "url": "assets/js/110.e2f33110.js",
    "revision": "a5a6d7dc46894e1b7747144e4b977589"
  },
  {
    "url": "assets/js/111.3f4990c0.js",
    "revision": "0fefad28005acc6a7837d551ac8245b8"
  },
  {
    "url": "assets/js/112.04506c04.js",
    "revision": "e268a784c2539a04ead1d12397e256aa"
  },
  {
    "url": "assets/js/113.d2a137c5.js",
    "revision": "1aa74e48f8e1485bae7f01fbf09d0178"
  },
  {
    "url": "assets/js/114.60d65999.js",
    "revision": "40d070911cbd5985ae39b8db3488d5c8"
  },
  {
    "url": "assets/js/115.097980e5.js",
    "revision": "1c5cb58347e4f5b0ff8e68efdea689e1"
  },
  {
    "url": "assets/js/116.6747d482.js",
    "revision": "23620384c3b20326e80e9344f80c4b38"
  },
  {
    "url": "assets/js/117.8fd935c6.js",
    "revision": "f29945c8f5362b09300fcb998ec5e691"
  },
  {
    "url": "assets/js/118.4cf92ec1.js",
    "revision": "733db065cc3914470412fa3e16ad0890"
  },
  {
    "url": "assets/js/119.e9af1fff.js",
    "revision": "d1b1c55a2ad7baa42c4da2b0a40340c3"
  },
  {
    "url": "assets/js/12.d2f3a781.js",
    "revision": "a3f4fe5c4ce7098e6a87438323030178"
  },
  {
    "url": "assets/js/120.adf5b115.js",
    "revision": "5d60396872335a680d6a06973aeb0fe2"
  },
  {
    "url": "assets/js/121.05a0ff70.js",
    "revision": "4c723a358e733ea82db3e3f649578bc1"
  },
  {
    "url": "assets/js/122.f25ec50f.js",
    "revision": "2ecafad8af65220b8d7066d85cff91b0"
  },
  {
    "url": "assets/js/123.f245f3ab.js",
    "revision": "ce66fbaca3b242abeb26f2440595f886"
  },
  {
    "url": "assets/js/124.8fc1c50b.js",
    "revision": "1b0044bd14235fbf845e1dd7ee4ee3c0"
  },
  {
    "url": "assets/js/125.1498c93c.js",
    "revision": "90d0a4b8fd491a1f06dd3c09c6570d0e"
  },
  {
    "url": "assets/js/126.1f82b907.js",
    "revision": "6ad2db0c06cc1c4912e75be554810e9b"
  },
  {
    "url": "assets/js/127.243236fd.js",
    "revision": "16a9c8fa10444ff74978f586bf1cdeb5"
  },
  {
    "url": "assets/js/128.d1cc7564.js",
    "revision": "48a80e3c73b077c6f38e8268b046ac76"
  },
  {
    "url": "assets/js/129.8b22cf81.js",
    "revision": "2c8592c5977239c6ef383cd300605815"
  },
  {
    "url": "assets/js/13.2d3bd2c8.js",
    "revision": "75d70ba7b6460e3e1acaef5f8d6a0133"
  },
  {
    "url": "assets/js/130.d3d55564.js",
    "revision": "7915555d0979a68c24f1675923672f02"
  },
  {
    "url": "assets/js/131.da577f80.js",
    "revision": "f5f63e1b570c5015dc3ed75f03d2f718"
  },
  {
    "url": "assets/js/132.980625b9.js",
    "revision": "61c384e2287eb3f966ae4df0cf274d03"
  },
  {
    "url": "assets/js/133.58834088.js",
    "revision": "d426359c63c3ce3ce2e39babceda2a51"
  },
  {
    "url": "assets/js/134.a949c45c.js",
    "revision": "e92160fff7b3f6c91fa840b0a86d7267"
  },
  {
    "url": "assets/js/135.14cceb80.js",
    "revision": "52cd2d0b48c28ed7ae30ae6c0880bec2"
  },
  {
    "url": "assets/js/136.7cd1cf5c.js",
    "revision": "6698b218a134fbda8c179d5fd1f09065"
  },
  {
    "url": "assets/js/137.6c852be6.js",
    "revision": "e4305b9b762a604db12d57d2d042aa89"
  },
  {
    "url": "assets/js/138.e20283de.js",
    "revision": "56cc58fdb31c59c9f93e4efac40f5621"
  },
  {
    "url": "assets/js/139.daac4c89.js",
    "revision": "45d50e95189fd3f9ab4f8690eef3e214"
  },
  {
    "url": "assets/js/14.d67c7dc1.js",
    "revision": "68198c10512ebb61653fbf78f6270b27"
  },
  {
    "url": "assets/js/140.0a526f17.js",
    "revision": "2dbaa29c5029ea2e0b1484a795cff096"
  },
  {
    "url": "assets/js/141.8af07c24.js",
    "revision": "64cfa67a11f28182853e65da512de4a0"
  },
  {
    "url": "assets/js/142.becb7228.js",
    "revision": "476aa149be333b86c9d99d699a51ec99"
  },
  {
    "url": "assets/js/143.da02a15b.js",
    "revision": "c25bf4a5c46eb8e5fc0935699a0e7e18"
  },
  {
    "url": "assets/js/144.d90081f0.js",
    "revision": "7fa4dd89da6a70f04bc79e3218603fe6"
  },
  {
    "url": "assets/js/145.9fd99c6f.js",
    "revision": "43f6684c2e1b2086246ed9fe1437a3bf"
  },
  {
    "url": "assets/js/146.d4cdd797.js",
    "revision": "db722750f47d2de7b4dec00b6cde7c80"
  },
  {
    "url": "assets/js/147.af40125c.js",
    "revision": "e38f54882f596e913f25e3fabbdf1217"
  },
  {
    "url": "assets/js/148.35ddc2a4.js",
    "revision": "3dbebf5bddf565dcd010b20ff2d06017"
  },
  {
    "url": "assets/js/149.9d0ab3d4.js",
    "revision": "6c332a6c01ab1c6db8e6993a71cd9e77"
  },
  {
    "url": "assets/js/15.657607b7.js",
    "revision": "f153152dcf614fe9478d4621751bb821"
  },
  {
    "url": "assets/js/150.afa3210a.js",
    "revision": "f26af343301f0829eceee3d4e4b9ef66"
  },
  {
    "url": "assets/js/151.b224846c.js",
    "revision": "bdf40389a4c8f124975172a9f9e329b2"
  },
  {
    "url": "assets/js/152.a45e111b.js",
    "revision": "5e146ed32e38944f485f6b421750cdfd"
  },
  {
    "url": "assets/js/153.49deb17b.js",
    "revision": "87c9f8e29c69b4289615a81bbc958eed"
  },
  {
    "url": "assets/js/154.30ef3a38.js",
    "revision": "b50c2792acc7ddc22c776a1c54ee9397"
  },
  {
    "url": "assets/js/155.7ccf1ec1.js",
    "revision": "eaddd40e48751404757a250724087e0c"
  },
  {
    "url": "assets/js/156.20634cf6.js",
    "revision": "564f4911017f3ba882da768c3b39aa7b"
  },
  {
    "url": "assets/js/157.887dddef.js",
    "revision": "40f140c135a9674bc92e426a9dcc2c85"
  },
  {
    "url": "assets/js/158.fbe13c29.js",
    "revision": "8aaee3fd872bcd6d776e0d0a2edf8552"
  },
  {
    "url": "assets/js/159.adb5ca82.js",
    "revision": "7cbfa9c46388b2af04e4a780eacad364"
  },
  {
    "url": "assets/js/16.9990e400.js",
    "revision": "81d92931a3d92f245c3d07a249996279"
  },
  {
    "url": "assets/js/160.1f418279.js",
    "revision": "115b9d2adcf49ff21cefc6c0855ce7fb"
  },
  {
    "url": "assets/js/161.da6c9274.js",
    "revision": "fbbda3443f67e282d01d9c86285a2e9e"
  },
  {
    "url": "assets/js/162.c7a5bb26.js",
    "revision": "d52c584f84c5f5f1f7ad595ef79a81b6"
  },
  {
    "url": "assets/js/163.77235375.js",
    "revision": "3297ae6cefa712774604df943588a138"
  },
  {
    "url": "assets/js/164.52aeded1.js",
    "revision": "222c15ef96557727f2973961c8095967"
  },
  {
    "url": "assets/js/165.6e037bd2.js",
    "revision": "7dbc34cb9921876fe67fabe756a93358"
  },
  {
    "url": "assets/js/166.a3cc078a.js",
    "revision": "1c4e8a28f85e9b8280490a7fe5738aa5"
  },
  {
    "url": "assets/js/167.c9dfadc8.js",
    "revision": "7d0521d640f4537de231e7500e6778f7"
  },
  {
    "url": "assets/js/168.5b1905bc.js",
    "revision": "4c93c02f6bb908ff67a9b28f33fc105a"
  },
  {
    "url": "assets/js/169.2947d322.js",
    "revision": "8d62b92871cc39d5258277a508f27b6a"
  },
  {
    "url": "assets/js/17.12fdb7a9.js",
    "revision": "5f90c518de1a3259545a205d863906ec"
  },
  {
    "url": "assets/js/170.ce1b0112.js",
    "revision": "552e6e139f54b14b03af925425c19772"
  },
  {
    "url": "assets/js/171.a8f6261e.js",
    "revision": "02cf9ba88a6785714c872c8c37e5b8e0"
  },
  {
    "url": "assets/js/172.2e8fdcab.js",
    "revision": "625495a76b5906706351cd7aaadda9cb"
  },
  {
    "url": "assets/js/173.65178cb9.js",
    "revision": "d057aa32617e25a1ce2960e38be87a28"
  },
  {
    "url": "assets/js/174.7469d2c3.js",
    "revision": "d7b1e5d2f4d211d872e346d428fbb424"
  },
  {
    "url": "assets/js/175.4b870751.js",
    "revision": "4df66055b7d892918b2406a613291995"
  },
  {
    "url": "assets/js/176.3fcfef13.js",
    "revision": "0a982dd97f6c68d75a0d28eebea4e6ac"
  },
  {
    "url": "assets/js/177.aca20bfd.js",
    "revision": "69133bbaa5c6ccc9a6ebdf400dcd7e65"
  },
  {
    "url": "assets/js/178.7022070c.js",
    "revision": "f318ba0276322b830ce17e2b11e3e432"
  },
  {
    "url": "assets/js/179.e541e90a.js",
    "revision": "0d4bba0678c0f00d13071f001da61989"
  },
  {
    "url": "assets/js/18.eb528304.js",
    "revision": "1e4f5671bc98c44ea42ca1aafec830e3"
  },
  {
    "url": "assets/js/180.6682a0f2.js",
    "revision": "8024413d6eddbb693cd719aa7821934c"
  },
  {
    "url": "assets/js/181.93a3bd8c.js",
    "revision": "16277c1a93dc5e08999707b3ba4917d4"
  },
  {
    "url": "assets/js/182.cabafc57.js",
    "revision": "c8ce23a8094bbd68212127a521595c42"
  },
  {
    "url": "assets/js/183.c47186d6.js",
    "revision": "c7632165ba3be42e7cdbeaaa70d443d3"
  },
  {
    "url": "assets/js/184.fffc512c.js",
    "revision": "27570077854e067185a2486706aea188"
  },
  {
    "url": "assets/js/185.a59e5eff.js",
    "revision": "c2ebf3d3baff2f6b544329dc904e986e"
  },
  {
    "url": "assets/js/186.b900c060.js",
    "revision": "549ae03af00d3d9a8c661bc6f123919d"
  },
  {
    "url": "assets/js/187.347b9522.js",
    "revision": "842b5103750cafa637c8ff5241f6b964"
  },
  {
    "url": "assets/js/188.35f78205.js",
    "revision": "f9327837eb20d3b732ee46311e59c2c8"
  },
  {
    "url": "assets/js/189.062d3361.js",
    "revision": "6579512faab180c26ba722976e3451d3"
  },
  {
    "url": "assets/js/19.cfa288d2.js",
    "revision": "39037dcd877adb5f4799fcb71677e30a"
  },
  {
    "url": "assets/js/190.3fa86d09.js",
    "revision": "8053bd0eeba6b8fccf60fec3f1ba4105"
  },
  {
    "url": "assets/js/191.2b565d8f.js",
    "revision": "3c8e104f70570eacf929eeabcdc61350"
  },
  {
    "url": "assets/js/192.91b5faab.js",
    "revision": "b69cd2293cb58aedd8d8f4b08641c4d8"
  },
  {
    "url": "assets/js/193.8b06bf63.js",
    "revision": "d98af26e90612635491543233cbe3eb3"
  },
  {
    "url": "assets/js/194.c2be5148.js",
    "revision": "c0e70eba8d06b1b2a48cc5b457e48b26"
  },
  {
    "url": "assets/js/195.763698fe.js",
    "revision": "fcd5821fe4a067174b3eabdb65f44279"
  },
  {
    "url": "assets/js/196.3571e3cb.js",
    "revision": "dfc2263d683fbd956f4daf5a9cc6abe4"
  },
  {
    "url": "assets/js/197.ad02789c.js",
    "revision": "60e8a836b3a25c28adf9f0dc5ad455a5"
  },
  {
    "url": "assets/js/198.c387d19d.js",
    "revision": "80a284efa6dae115927f166b8e7f41f1"
  },
  {
    "url": "assets/js/199.f3c522f3.js",
    "revision": "2b87828f0ad9fe180259ad390c699481"
  },
  {
    "url": "assets/js/2.fe2bffad.js",
    "revision": "c61377be3f3cc52057e3a9644c397f47"
  },
  {
    "url": "assets/js/20.d68f75ed.js",
    "revision": "3d0e3fc6313a24a351b027973805ec16"
  },
  {
    "url": "assets/js/200.7e457c99.js",
    "revision": "170565e7473d8f376bfe6855f3ddd090"
  },
  {
    "url": "assets/js/201.e3b311d5.js",
    "revision": "5224d7835a88d2ca89a63e1ff927f36c"
  },
  {
    "url": "assets/js/202.63b9a30e.js",
    "revision": "d3edf18e6265adc2871cc2dbe88a65ab"
  },
  {
    "url": "assets/js/21.73ea7792.js",
    "revision": "2664ae4814f860cf89a1e483fc93bf03"
  },
  {
    "url": "assets/js/22.dbe1cf3a.js",
    "revision": "9a4d5f5aad2423f98aaf5c77cac61f8d"
  },
  {
    "url": "assets/js/23.73e3eee0.js",
    "revision": "d534019acc06cd0a7f7747664933b2f8"
  },
  {
    "url": "assets/js/24.530ae494.js",
    "revision": "17fe02d6218a76733aa93dc727c9ac93"
  },
  {
    "url": "assets/js/25.3670f91a.js",
    "revision": "5f33739c742ddaae2102cd0d7c0506bf"
  },
  {
    "url": "assets/js/26.52cdc186.js",
    "revision": "2644bfa6f5460c30fd3add27d49d8706"
  },
  {
    "url": "assets/js/27.c747c782.js",
    "revision": "0212fa1acbbde2bbe35652c60e29bdd9"
  },
  {
    "url": "assets/js/28.eb5ec00f.js",
    "revision": "ab067036403cfa30fa5b7c092639a407"
  },
  {
    "url": "assets/js/29.df3f975b.js",
    "revision": "027247771129151ebe196adb2461dcac"
  },
  {
    "url": "assets/js/3.d18d400b.js",
    "revision": "97e208dc727eb83623b36a0f4cbe108f"
  },
  {
    "url": "assets/js/30.31eb8859.js",
    "revision": "e3f327f49c4e680adc30af87172ecae8"
  },
  {
    "url": "assets/js/31.6891fd4a.js",
    "revision": "92e9364b7f20802d23fe7eb60f135fd2"
  },
  {
    "url": "assets/js/32.78446056.js",
    "revision": "bd40bafccad55c575709993ace8d25f6"
  },
  {
    "url": "assets/js/33.58affa56.js",
    "revision": "e435b083cfbec12c1bf982d2c1d1ca83"
  },
  {
    "url": "assets/js/34.8cf27262.js",
    "revision": "7b3a2815448a4e03567a2722f98fabb6"
  },
  {
    "url": "assets/js/35.a29a83dc.js",
    "revision": "4c5ac4e21cdebad880721a35609ade6e"
  },
  {
    "url": "assets/js/36.002abbe4.js",
    "revision": "7d637c54b96e2f549168fa96d1890d11"
  },
  {
    "url": "assets/js/37.0530dacc.js",
    "revision": "17f9885c76101abccc5f842d6bed6076"
  },
  {
    "url": "assets/js/38.f0ed1719.js",
    "revision": "9a7370a8274ad38d944dcc532b930ec2"
  },
  {
    "url": "assets/js/39.70ec5fa1.js",
    "revision": "9e22c96cc01b65b2bbf40c42a4a41af8"
  },
  {
    "url": "assets/js/4.05219434.js",
    "revision": "81bcb9cdd713f87ee3d07b558f1e7a9c"
  },
  {
    "url": "assets/js/40.d672ca9d.js",
    "revision": "aabf2048a27810b12ded8ccfaa723882"
  },
  {
    "url": "assets/js/41.bc990338.js",
    "revision": "4bdfd1243e75266d8db285645b4c87a5"
  },
  {
    "url": "assets/js/42.b24f77ea.js",
    "revision": "a2e7863e98f2d9b640f297d562b44902"
  },
  {
    "url": "assets/js/43.34a177d8.js",
    "revision": "499d3a3ac766cb2064b706170866db75"
  },
  {
    "url": "assets/js/44.12819a0f.js",
    "revision": "5c20a9affd0e15e2098ec4ed57272c96"
  },
  {
    "url": "assets/js/45.a0604d18.js",
    "revision": "47899da61c860fecf26209e1688f9376"
  },
  {
    "url": "assets/js/46.36695e07.js",
    "revision": "7b4b71db8e63a5b5100805863f72f5e6"
  },
  {
    "url": "assets/js/47.e3044a38.js",
    "revision": "2137cb5f576f13a9f0493e9003644dac"
  },
  {
    "url": "assets/js/48.e26058ea.js",
    "revision": "4a2dfc4b9d7c2bd54267ba3af20ce7bb"
  },
  {
    "url": "assets/js/49.76698b30.js",
    "revision": "446d151a62d6a272a99fb9d5a21702bd"
  },
  {
    "url": "assets/js/5.68de519c.js",
    "revision": "01e6de14b67206384f3e4cbf4350b297"
  },
  {
    "url": "assets/js/50.b8330007.js",
    "revision": "e08834f57ba25e776282ebda3ed92b60"
  },
  {
    "url": "assets/js/51.ae6ae88e.js",
    "revision": "976c7406d2d5f97003091d5ae84539a3"
  },
  {
    "url": "assets/js/52.17c6df72.js",
    "revision": "6692b7652a6bd2f59973ae02a7793563"
  },
  {
    "url": "assets/js/53.65572998.js",
    "revision": "7293abe54cf9d8f0233642427ea4060a"
  },
  {
    "url": "assets/js/54.77c9a442.js",
    "revision": "5fed3e0c6fda34be60bc496d388bb5bd"
  },
  {
    "url": "assets/js/55.8d74ac9c.js",
    "revision": "c4f4eedc838c7a257a1ce55637a3d831"
  },
  {
    "url": "assets/js/56.eeda1298.js",
    "revision": "de8a27b433a1f2d4f2a8230d6a0c5acf"
  },
  {
    "url": "assets/js/57.119120e3.js",
    "revision": "88a60b26bdd27e00b995220596c49c28"
  },
  {
    "url": "assets/js/58.99a54116.js",
    "revision": "15773086e94df47d2c01a4b45c862cbd"
  },
  {
    "url": "assets/js/59.6b060fc0.js",
    "revision": "393886bdd2e1fed9a3c5b621d9f41c63"
  },
  {
    "url": "assets/js/6.bfcac773.js",
    "revision": "83f10ac508640131ee4eea86345d9c4c"
  },
  {
    "url": "assets/js/60.8e9093b4.js",
    "revision": "1e1ed39f59957dc239cf4c6b5a92e141"
  },
  {
    "url": "assets/js/61.7c060aed.js",
    "revision": "1882ac0c332ae1bece344d264658f9c6"
  },
  {
    "url": "assets/js/62.d3e5d39a.js",
    "revision": "f121ba1a8ea4b051cc0ae01264e1fe9e"
  },
  {
    "url": "assets/js/63.33b748f4.js",
    "revision": "bfa808821eed14ec4f2b493e04e8e05b"
  },
  {
    "url": "assets/js/64.eb83ead1.js",
    "revision": "72fd9c362f14cd80b0c122d06c7c2e3d"
  },
  {
    "url": "assets/js/65.b9b0da34.js",
    "revision": "379d0f9587c6f12e75213758b045ce1c"
  },
  {
    "url": "assets/js/66.659b2c3a.js",
    "revision": "c3f1664952173fc9912419789ec50bba"
  },
  {
    "url": "assets/js/67.9ec3725b.js",
    "revision": "6691ee7ef5c81852f73f252beddd55cc"
  },
  {
    "url": "assets/js/68.5989482d.js",
    "revision": "87bf8eb3f257fb9bfd4b11725979a8d0"
  },
  {
    "url": "assets/js/69.b68e95cd.js",
    "revision": "ad586bddfdc62d300f339bc1403593ff"
  },
  {
    "url": "assets/js/7.1a11cfee.js",
    "revision": "f415b5a5464532e84fe2c9f45477b614"
  },
  {
    "url": "assets/js/70.4962b3d7.js",
    "revision": "cc7edff2117bad61b5813c18697eedae"
  },
  {
    "url": "assets/js/71.a70df0da.js",
    "revision": "1e46b90ca30d649daa1577d2f3e42814"
  },
  {
    "url": "assets/js/72.89f06e4d.js",
    "revision": "12b219a95911c9bd8c02245020692af2"
  },
  {
    "url": "assets/js/73.e457f756.js",
    "revision": "c721833cdee507868920cbd22f82e262"
  },
  {
    "url": "assets/js/74.e6eb76a2.js",
    "revision": "b6cd8db1114c259d1d99fdd4830e4218"
  },
  {
    "url": "assets/js/75.439b047a.js",
    "revision": "f2715cf929508a4f35ceed7171d0742c"
  },
  {
    "url": "assets/js/76.a840d09e.js",
    "revision": "1dc7e0ae66fdc3af54cdf978450765d6"
  },
  {
    "url": "assets/js/77.b37e28e9.js",
    "revision": "bfe311ac70244f479e9030486a512500"
  },
  {
    "url": "assets/js/78.a1f17588.js",
    "revision": "f24fe4f5621829a13b7f7083f6a80b67"
  },
  {
    "url": "assets/js/79.372fa0eb.js",
    "revision": "7846d56a8efe04ba760c512d869350ca"
  },
  {
    "url": "assets/js/8.1892c335.js",
    "revision": "2580a12b4e4d733bf0b2b127377bd8ea"
  },
  {
    "url": "assets/js/80.ec5ec1fc.js",
    "revision": "2c6895b2100a5bf88a68fca3ef1312c3"
  },
  {
    "url": "assets/js/81.4c47bf1f.js",
    "revision": "a4dbfc403988c17d28e5e54486423ca7"
  },
  {
    "url": "assets/js/82.f3189c36.js",
    "revision": "f51ca09db1b62e4fcfb2800ca5ac6012"
  },
  {
    "url": "assets/js/83.81e89f93.js",
    "revision": "5ea9bb6bf278225c3c04b73b8fbecae2"
  },
  {
    "url": "assets/js/84.30e4279d.js",
    "revision": "38e7901099f404da5739c4ef5c968f7f"
  },
  {
    "url": "assets/js/85.522bfe75.js",
    "revision": "672d1cf3c0516dda1f1d69d22db31957"
  },
  {
    "url": "assets/js/86.82f26bc3.js",
    "revision": "54c07f1948a2b909737ba0b6d8708463"
  },
  {
    "url": "assets/js/87.bc03425c.js",
    "revision": "dfd3be0c2c476db55db0a1e2943b6583"
  },
  {
    "url": "assets/js/88.e14d4655.js",
    "revision": "3c79c2880b9d6045a0ee6ac87566edc5"
  },
  {
    "url": "assets/js/89.6dc38542.js",
    "revision": "a6987629b068c4325ace02f38f1c404b"
  },
  {
    "url": "assets/js/9.40203201.js",
    "revision": "f2ec9327d7cda7206fa5b5bd46f917c1"
  },
  {
    "url": "assets/js/90.d97a828e.js",
    "revision": "7c5bf25e3a46b01394dbb0eed5e87af6"
  },
  {
    "url": "assets/js/91.84e20a56.js",
    "revision": "265af8ef9e528bc6c9f75ad5616417ec"
  },
  {
    "url": "assets/js/92.aa42e641.js",
    "revision": "9c5c78f0864adb47b519de20b8954e28"
  },
  {
    "url": "assets/js/93.1a26f467.js",
    "revision": "8e47a6448c5dd26ab8309d097cbbdb03"
  },
  {
    "url": "assets/js/94.a7a7cd9d.js",
    "revision": "28f8dac4e4cf332a5121b426b50f3341"
  },
  {
    "url": "assets/js/95.d57d3264.js",
    "revision": "63d89cf7e5827592ad14bf68dadafa35"
  },
  {
    "url": "assets/js/96.c3b1e0fe.js",
    "revision": "9f7753fb8c797b8f266702ec48371dc2"
  },
  {
    "url": "assets/js/97.66a13b58.js",
    "revision": "12e37c2d0b47d9999837aa7a2d79070d"
  },
  {
    "url": "assets/js/98.65c2bf00.js",
    "revision": "094bb9ff95849fb515132cf48de173ed"
  },
  {
    "url": "assets/js/99.896a583c.js",
    "revision": "d744fcb503f232802c72835116e3953f"
  },
  {
    "url": "assets/js/app.0b37c5a7.js",
    "revision": "02af1db37f19b22788493b4883e3006e"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "2376616809967503a24a79d1b07ee887"
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
    "revision": "6c5d8c102e69d9296f505910f9a7194f"
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
