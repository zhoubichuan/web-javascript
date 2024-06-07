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
    "revision": "081658a98b43cc7c9deb7b21aff0fd2d"
  },
  {
    "url": "1.base/1.js/1.syntax.html",
    "revision": "d41210a838209bb49e2c3e89b994b260"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "a4fdd3fa1e9df9bbec6d8cdedbef11d0"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "51eadf78c30e5fd838496dd31074ea40"
  },
  {
    "url": "1.base/1.js/2.expression.html",
    "revision": "a7eadacd86f6975d02eb3b443a5e6111"
  },
  {
    "url": "1.base/1.js/3.statement.html",
    "revision": "6790f65fa65ca5b04be680b7d189b38f"
  },
  {
    "url": "1.base/1.js/4.datatype.html",
    "revision": "95c24cb549881ffc138b75dccfd03cc3"
  },
  {
    "url": "1.base/1.js/4.implement.html",
    "revision": "eb6c21e3ad7637ec281b31739d5aab34"
  },
  {
    "url": "1.base/1.js/5.var.html",
    "revision": "a1402191e906cf309060f3c845aa14b6"
  },
  {
    "url": "1.base/1.js/6.function.html",
    "revision": "5f8488facb0e881e5dfcde11501c5dae"
  },
  {
    "url": "1.base/1.js/7.require.html",
    "revision": "c38f065ac1dcbb35e22d1ccdd435dcb8"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "53d6d5f90dd3c355a3f6b139dd4695ca"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "ba04202babb761de4dbbfca111847ea7"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "d2d1d2e3b74a09c65f3a01ce1ec18d6c"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "661417d94228d0c881c2eb2ea42a5d99"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "bd12bbed4652dd0d583ecbf184185270"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "a7e1d6b6e3c88b9c7bbd4c989aabadee"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "9fc5448e6d6cd15d4690fbc03f724542"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "d66b6d861d7c7860cf5ffdade070668e"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "3371287286b5ba245e31945a82af8426"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "96430eb19435fe3586de33d3c30e49ea"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "f5a18fdbe9e00a96d03a7a8aad77e69a"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "7adfa4d1d13d834bd41a8f234a794518"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "1ce5e68b69ed7940fd641adf5dc952aa"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "e4e4d5f0307e372a370784ec48e2ee10"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "941b7998effaf6b30bce77253ba55f92"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "6c6e3e9bdf598563131397140e41c64f"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "c9ab1f6fe7b8c68706a88f384d83d6ba"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "5aecb7b79b24b9e7c740193e2fb560a7"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "64b5db52b5a66fc9af7009cc7c34c150"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "094b8a9073ccd1dfd1c9ad63ede8b96e"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "29261a4535e8dfe0c06621fbbbfe48bc"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "7ec2de6f0855f66b44f250581506a2d1"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "d411781628787f2e1c25493adedfd552"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "17af5333af6bf18c1c5cd03a7c0c2d78"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "284db4a5169ec440f81200842b3cf8f0"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "680c05969ff3227cecb5ebdcab6dfdb9"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "485c373cf19f6198f3027136ddd346c9"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "4089ac90dbfaff4c9ec7d5310304ecfa"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "d8d537694e926169f8e790d4f3abd920"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "396727689a417b30f49882b7cd3125e9"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "4426eda1a6bbd6fc52f6c8e208df3928"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "a9ed43a16885618970103356293ee3c6"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "9c5e5f173bf108c47fb200d57a71bc5e"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "8b26efd687f2407f62da5c1dc23a763e"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "4d632d52a206938441e5feab7f071470"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "5b14a7efde40fe5905709a3ecc14fb5f"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "7f95323af4a858ff6bbd72b885565fa1"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "ff919fa0a38085c90b068f088718e648"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "2c2149daf596e443bcb0ddc2cd25fdf0"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "736bdd04d9a05952d635caaf26c60421"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "74f449fe2616f2be5aa6cfadecd2eccb"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "cf716feb62b42fd8de8d0faf565020a5"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "0268fd2b9c8bf943f66d0410b55b9b09"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "4c394b2a6782dcc23e0cf3460c219ed0"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "9201370503639d5a687fa5c553fe92a7"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "fc5da84b92fc7dc713e62835ded377d4"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "2a8e719c41d4b7715b115a780046377a"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "ce73027ae7a21b122bb19ec4ed7b7383"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "ae851074b39615f34fe524bf83707e52"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "0ccf90d72b6a98575437ff8c57c02aac"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "3079bf05009ee75cf55c976f0e92deff"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "0cc8f5cbc1c8682744d74906ad38e85a"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "eb44a2b5b07df05e9ab426cc2a94b519"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "f3aa0ccf4cc5fbcd4a95e5d0ee47ed2d"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "53eb6920531fc11702a603921dd268c2"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "155d6900dff79dfb899ee22147786e96"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "548693fdd8a12b5c545a952d395c1b43"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "a85d364c591bd70e20c23853c374358d"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "6fedf71d3119015ce9111522dc00cc9e"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "030ccb38639c6e4c94b0d34b81ef4ccf"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "148faba7f244f99dc0141adf869ee1a6"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "8fff006332828efe116c01fe243d0bf7"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "d57aa9262548aa595b02283bb7f543ac"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "2bfa83189868b49461f6ca88390c467e"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "7ea8155c6d549006bc8313f50c62c989"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "eca1d2dafdb47e58e9ce4e43578f48f8"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "4e21fe2850236dd05be8a24d4f6937d6"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "6fb7e2eb439df8d46a4e8d91bf543cd5"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "edb1387fb5ce10f25465f59f5c3db1d4"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "41ec0b38543746bf167b5b4aae047fc1"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "6f545d9c54db56aef0452c4891eacfb4"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "f979d01d659dff4dc302549655ec9d7e"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "943711100ed87bcb4c3b1ffc072fb2ae"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "e015f7edb212ce5ea193700ef0c229cb"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "06dd06e49b251ccb6fe2dac941c88856"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "c130f0a82374ecfb0ae3eeaeefcc8bc1"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "84f3a8c036b67fddd79a00fa7baf63ae"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "84ea8c76d099f318322ac1ef8f67c409"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "b469a010bd08f232430b2d8993289a7c"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "59a001202c7469dd077051a27f588aeb"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "54781d9679fe5af9b030743c6c185ebb"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "b3f541704ef6e1aa1ce09a3fb1d10f3c"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "a2cf8854a62c783ad55607ba7fbf63c5"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "938fccd095c785b0c1d4f9393537c7b6"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "ca369fb75f5a1f6ff5c80c267e7b4f96"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "8badc58e9eaebafc8fb2786358863f7d"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "fbbfd22f3ec54c6a1fa21d9e300b11db"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "c42b8958c968b9f52514f98b2b477e0f"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "68a0aa4bc074adc77f9855972f99a1f5"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "74d52da9b348ff7544042b8433912782"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "f9a90f37f20c63e3e211d51d66696fe7"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "3c357cb505835c7f7a8a77c7bfac9949"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "67ee5274c2a76e82cb66bb29922f208a"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "619208ec73f336ff694cd7013fd38df6"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "52032191b2aa4e75219fa60aec5f8832"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "520eacdd24129898fab40d2dbeb416f2"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "bbfec726976ae5461cdaec5a6e4d1399"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "0d3467c2bd158dca4e03bee42ce1fa1e"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "48b58acf5c64393e02255c96d8219d17"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "f7a3651c3beb039f1cea73512ed5943e"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "06c65b14a7bc159c90691b1ed1ac0cb3"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "5bb12337b4a028ae98fa93c1ec1e545c"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "ff5656e3b3666c2e44f1513a7a951cfb"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "523430f5bc6c59527f234e0e0ad83e40"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "3c428f3989eb3891130e2917a8c21236"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "0db98997d3385a261539ca0ed54661b2"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "c32b05f99569b1250ce57c77fe879796"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "23ad8e8359cb1e18adcc304da8c4c8b5"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "19ae9a8a9f7909d129cfd05026b9f0f1"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "24c8cf3c3f411fa255cc67b6620bd3b5"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "355bf6d263a8e439bf6b8f9bd7e8d814"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "44151080f9ce629b6c0b993adf1a06f3"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "19b8dc430cad33ab1ef1af441c4b78fe"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "2a5d0f9376e03d2bbc3b6919e5885702"
  },
  {
    "url": "404.html",
    "revision": "5ec38e6d92fa10ee939cc0918dd0ac88"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "d1ab643bac8c35b1004a1275ecd61b52"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "0efcfe3d94399aa0ddddbd69a0cada77"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "a141db98ce69f5d9365d38c71a4ae8e2"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "99a0468341b7202dd5d9a7668c2c59e3"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "d7f8c70b3c2d18be4c1f491d5a7ea5a6"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "d6a0c6fc792305c81f92d028a10cf0d2"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "335767c0d6534345fc7d5961be7d57ac"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "59312fb7c58f5eb1535a5ab8d2348c6b"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "7fd99ac25c10e4bbfcbead7f983087c2"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "19143421dcb41acc9e40ac5dd3b64578"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "4799282a89b7569dd73afa4b63a8da9f"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "4603f6818efff19cb10a56dd54373194"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "11030ec770f0a6f9bdc1fe8251d0efdb"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "f15b73ccdf9742b67c2d372b8d42f3ef"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "852077ea95a2d8a76bc1cf9e3f243970"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "f951a5c72cdd65160725da68c3229cdd"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "1888f0f25f63890f199004dd1cab7179"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "047e44e949a7cb0f9ebfd496775e32ff"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "8b6cd201f0a962e5cf5506da74e1e2a7"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "faf4e1d6a00de795682c6393118a8869"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "a8552553cb08727ae152ab286bef64c1"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "6f0c5cc62fcea71abf005e2491634fc6"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "7257825a1fccb23e86c6525ba287ca6a"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "bfe022c3150efef03e690a821ac0af4f"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "2b117ed9c6672b0f08adb92ffb65ca5a"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "3a5adf71378bb3dd7f7b6dc66f72962f"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "0989310a573c51dd8b53cfd28937aaa4"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "6ec840f8da60f05f5a7e939af1cc416c"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "f21bfb9f3d62c5aaaf835153f094c44d"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "2f939e1f5233d8b9e9a0914aa85ffa77"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "81d730b7078b9e91ac47b31f2778b132"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "02b147fab3db995f7edd544de7bfbed2"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "43a4d6f4ff51f2851a536c533d147435"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "c428acaa873f048e67552f8dbb2e7bf9"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "1688eb898bf3467be0a27adcd8b1b8bd"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "8ffd4c9ad11573d4236dfd606ae83ae0"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "83423d513c00840e08d9257350a7f627"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "f25dc1e81208c4d68bee62ea128f200f"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "364cf1ddcb00f75316a45f12fa9637cb"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "2448dfbb92065a5fe89579e0e76cec1a"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "87bc9ac17ccf9d63164766b89ee043c1"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "c48951c88f8246eeb4951dd71c1421a1"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "77d23e20847ceef8ac348e6448ebaf98"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "d21899a565a042095fa65610f1e0375e"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "7bb134272593f713566dc77e58e27d23"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "39704064abaced61c20f6e2cbd8c12ad"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "a1e8cf5cf7d8218c3589214f820fc102"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "0a645cce77f90ff4baf662a7fe01331f"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "b4f275862e0bd3e6bcdc37604c70bc98"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "0c9004ee589266736a9a0c8ee2b78bc9"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "b33476099683373c621a89601ef37f45"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "47f00aaf3723fe24d022bc3181e7d289"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "6ad1c1f43b9cfe625afec0009cdb0384"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "50802935edc9a584de9c6ee4370c85b6"
  },
  {
    "url": "assets/css/0.styles.b14dbf4e.css",
    "revision": "05927dfbc52567d6e1795e690402a88a"
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
    "url": "assets/js/100.24db7c61.js",
    "revision": "fa05df68f4a6d41ac896d36835a42cad"
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
    "url": "assets/js/104.e534da4e.js",
    "revision": "2554f6f89c6083657828e14fa8d3b1b4"
  },
  {
    "url": "assets/js/105.736e316b.js",
    "revision": "85b8cdd9b9cb1d4c48b91a6528291bd6"
  },
  {
    "url": "assets/js/106.20f8ac48.js",
    "revision": "ea9e7f447c1faefbe0b4960f9f161746"
  },
  {
    "url": "assets/js/107.4ed99031.js",
    "revision": "50089b0f26cba8a5bbb7782570973151"
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
    "url": "assets/js/110.d268f041.js",
    "revision": "eb3b467d8143b3577f831a894cd1efb2"
  },
  {
    "url": "assets/js/111.b3597674.js",
    "revision": "4c3af2412ee987e3962b24172d7c0cce"
  },
  {
    "url": "assets/js/112.79da765d.js",
    "revision": "7dccdee49d71af6e1002df2f98f2b234"
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
    "url": "assets/js/115.8fe4d044.js",
    "revision": "7cf6b1193bdc7f78bfbc3174e507ba83"
  },
  {
    "url": "assets/js/116.69e98dfb.js",
    "revision": "fb8c58cd8ab676d74c908a7c0482d23b"
  },
  {
    "url": "assets/js/117.7ecca383.js",
    "revision": "ee625c2f64fdf40cf9de14a12498ef66"
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
    "url": "assets/js/120.3259a6a7.js",
    "revision": "4bfc2dfdf0e48de2cb81b437e1149d24"
  },
  {
    "url": "assets/js/121.75031bb7.js",
    "revision": "fed6e4363d049643c9b686fef9fffcb8"
  },
  {
    "url": "assets/js/122.886c7324.js",
    "revision": "0e20a9044dbc4f31e2ab5b605475e5ef"
  },
  {
    "url": "assets/js/123.176cada4.js",
    "revision": "125ed0cfd506b9ba0a3fe6803c3d0f9d"
  },
  {
    "url": "assets/js/124.65e24550.js",
    "revision": "a1b233d36bb50cdb71865d834c88a791"
  },
  {
    "url": "assets/js/125.ad7c55b2.js",
    "revision": "feffd03f061ed7dfab9821aad1ca328e"
  },
  {
    "url": "assets/js/126.bff753d4.js",
    "revision": "12e70c7efe6079f88479865d0fa358a3"
  },
  {
    "url": "assets/js/127.6b4bbce2.js",
    "revision": "77dbc170740859b532f3cc9e704ce5a4"
  },
  {
    "url": "assets/js/128.f4a1d6c3.js",
    "revision": "9129f8e312370276b694f9754ca094a9"
  },
  {
    "url": "assets/js/129.1e6c2c4d.js",
    "revision": "d3af1121c7ce7f72056d967459e08cad"
  },
  {
    "url": "assets/js/13.bcd6817d.js",
    "revision": "a36c1f41beee36efd94bce93ec0ccc85"
  },
  {
    "url": "assets/js/130.cdb3b03e.js",
    "revision": "9c8dfedcb4cc3b8370dac0baa2e33446"
  },
  {
    "url": "assets/js/131.2dbb9f63.js",
    "revision": "5af32eaefad870d70965bb61285f127f"
  },
  {
    "url": "assets/js/132.2f13260b.js",
    "revision": "1064297fc95c0ca7564d8ecbc4cb0c77"
  },
  {
    "url": "assets/js/133.c4e86d87.js",
    "revision": "6f50ef7f127e3dbf412a1c775eb69e11"
  },
  {
    "url": "assets/js/134.7561c0d8.js",
    "revision": "34366f952716a413205b2dedf5686967"
  },
  {
    "url": "assets/js/135.b847949d.js",
    "revision": "80f5e0af085d0da0e0265e700cfaf785"
  },
  {
    "url": "assets/js/136.6985d676.js",
    "revision": "cf15820ec30fbb0ce2b8b7970da493b4"
  },
  {
    "url": "assets/js/137.86aecd6d.js",
    "revision": "b469d5c86abac2d4d042d2285cf7bc9f"
  },
  {
    "url": "assets/js/138.66652029.js",
    "revision": "c390dddf109b4d71de409b4d284dd43f"
  },
  {
    "url": "assets/js/139.325f0183.js",
    "revision": "2b346834738de9efe5bed289f9c8616d"
  },
  {
    "url": "assets/js/14.e45d09cb.js",
    "revision": "804171a467b2d944e84e86db434a3354"
  },
  {
    "url": "assets/js/140.05495b04.js",
    "revision": "692c937631a69010b9193c6d3eeb990f"
  },
  {
    "url": "assets/js/141.ef7f88b7.js",
    "revision": "7f74c08ec31086a926162c6664258f7c"
  },
  {
    "url": "assets/js/142.648fd961.js",
    "revision": "bd2382dd2feb7a92d91a61f1571466cc"
  },
  {
    "url": "assets/js/143.49b1fb9d.js",
    "revision": "ad81a355ad79010a4627ee0255c29c6c"
  },
  {
    "url": "assets/js/144.235dfc3f.js",
    "revision": "fdb6ff4a7fde9121ecfcc46be7c447cd"
  },
  {
    "url": "assets/js/145.5dc02122.js",
    "revision": "e3bc5627dff4fbbf83c1039fe1d765c0"
  },
  {
    "url": "assets/js/146.af38bf5e.js",
    "revision": "f95e4faeccb7ddad0631559a962c501c"
  },
  {
    "url": "assets/js/147.6b27a48d.js",
    "revision": "f38bf1288f26fd0215ab4e157d18b7d4"
  },
  {
    "url": "assets/js/148.400c58ff.js",
    "revision": "bc6f3717f8c89ce0165bac22f1f187fd"
  },
  {
    "url": "assets/js/149.6ef5db21.js",
    "revision": "cff4b4bee70c9f3898bebc8cb7ec9b88"
  },
  {
    "url": "assets/js/15.c4857656.js",
    "revision": "721217f597f83fffae6e97b895f51657"
  },
  {
    "url": "assets/js/150.7ed2ebcd.js",
    "revision": "13995b4ec99c75a81da17cb63f4ede0d"
  },
  {
    "url": "assets/js/151.aaef829c.js",
    "revision": "d529e624475e998e416fe624a3f4d10b"
  },
  {
    "url": "assets/js/152.4fc573eb.js",
    "revision": "f6d42f6e8ebe249669a19c3e9e7fe4d4"
  },
  {
    "url": "assets/js/153.5c411623.js",
    "revision": "3b8aaec2934ea410cd9de4469b32e03b"
  },
  {
    "url": "assets/js/154.3aafe9bf.js",
    "revision": "651ff4d573a1449175a16ec80600f54b"
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
    "url": "assets/js/157.7b7a0ee9.js",
    "revision": "23b5defad7926a0ef2c5ea01b9dfd8b9"
  },
  {
    "url": "assets/js/158.5056a93f.js",
    "revision": "2f084a464db84685c7da36e54241c7c0"
  },
  {
    "url": "assets/js/159.bf230ac8.js",
    "revision": "4348cc63e03e38358592ca38d2969af8"
  },
  {
    "url": "assets/js/16.6e8dc235.js",
    "revision": "c79756281cfc7e14855cebc3a993e44a"
  },
  {
    "url": "assets/js/160.fbedaef0.js",
    "revision": "d9db30b354178c260ad5af0b0ec186a3"
  },
  {
    "url": "assets/js/161.90ae9003.js",
    "revision": "9a512d766c53defe5133065cb4b603ff"
  },
  {
    "url": "assets/js/162.ba7e0da1.js",
    "revision": "c1b4036fdb6f5bab8f39acf84ff9ecf8"
  },
  {
    "url": "assets/js/163.c5d8552c.js",
    "revision": "3e3ecf42619365a6009814d0cc808a68"
  },
  {
    "url": "assets/js/164.210c4e7d.js",
    "revision": "8b6928637356ceae2010c8a6b9ed76fd"
  },
  {
    "url": "assets/js/165.53bfe0ef.js",
    "revision": "6558f67af6042b90743432941fc8c395"
  },
  {
    "url": "assets/js/166.88d9917d.js",
    "revision": "12236bebd55b500014b6a2e37f997698"
  },
  {
    "url": "assets/js/167.04c92347.js",
    "revision": "866fdf9285444edabe984a9a0c504414"
  },
  {
    "url": "assets/js/168.f403e0ca.js",
    "revision": "62a3d543eb938af94d95eb6a67406ade"
  },
  {
    "url": "assets/js/169.2b4dd692.js",
    "revision": "4905b9acc0dc9d4b3d79065577d73947"
  },
  {
    "url": "assets/js/17.1c2e72dc.js",
    "revision": "63b46eb5155e36b3f7fcc9c106e8cf50"
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
    "url": "assets/js/172.8d3cd88e.js",
    "revision": "f9616648c8fc6563da5c9b02c1bbb564"
  },
  {
    "url": "assets/js/173.486cac4f.js",
    "revision": "dd74619fb075a7e1cea22cf96035846c"
  },
  {
    "url": "assets/js/174.2a3821e5.js",
    "revision": "f20e51f2f1f574629db785a3117e0818"
  },
  {
    "url": "assets/js/175.a2924609.js",
    "revision": "516fa6d4f5edf200cca7052ee035ac9c"
  },
  {
    "url": "assets/js/176.a078ca34.js",
    "revision": "f389ec480a7f9a17c93b3e4451698f4d"
  },
  {
    "url": "assets/js/177.1ef3bef1.js",
    "revision": "d6990998a18d4188d526a5362f758b6b"
  },
  {
    "url": "assets/js/178.8dd27e9e.js",
    "revision": "646e57db737cb090c86d20cebb54c9c4"
  },
  {
    "url": "assets/js/179.415bb537.js",
    "revision": "75badd20cdcbd4f2299ed52b81fdd590"
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
    "url": "assets/js/181.2e8d9e2c.js",
    "revision": "5d97ff7a9d6b4f4aa812a62f4e0b3b16"
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
    "url": "assets/js/184.81b66b83.js",
    "revision": "b821d82857272d12ea476bf745eddca3"
  },
  {
    "url": "assets/js/185.d0dc6fcf.js",
    "revision": "368f4d1f8eb615d18953849d4fbd1434"
  },
  {
    "url": "assets/js/186.beb9c65c.js",
    "revision": "98a8ba203537fb6310806a4ae36ee076"
  },
  {
    "url": "assets/js/187.c9d96b81.js",
    "revision": "3cfbb2dcf604a823fe45008653254d7c"
  },
  {
    "url": "assets/js/188.8bc0afb4.js",
    "revision": "794652a6f00d648503cacf65b9f2235e"
  },
  {
    "url": "assets/js/189.ee323c53.js",
    "revision": "dcd7ecefb99887da72acf49a4f991d15"
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
    "url": "assets/js/24.ba2e9c21.js",
    "revision": "c30440d4548c7924a9f4d81fb2ba4840"
  },
  {
    "url": "assets/js/25.e7708112.js",
    "revision": "fdb779082c5b264326afea2b124e24d2"
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
    "url": "assets/js/29.f2ca2f4a.js",
    "revision": "29ef7fd52564eace89738faed3f62613"
  },
  {
    "url": "assets/js/3.8f65c886.js",
    "revision": "a90eb9726e2ebca0c2968ed9fd807813"
  },
  {
    "url": "assets/js/30.db283952.js",
    "revision": "120164679d4ad3f6160979ba59352301"
  },
  {
    "url": "assets/js/31.61dab094.js",
    "revision": "7d7c6a5c14b191adfef09ae8f4f21394"
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
    "url": "assets/js/40.eb7a9a86.js",
    "revision": "356116f40cc9d5423f50771faeb617ca"
  },
  {
    "url": "assets/js/41.2a7878b9.js",
    "revision": "a81f6abb10d7228bfcbe997f8c56927d"
  },
  {
    "url": "assets/js/42.cddeff97.js",
    "revision": "eb2f123730e6ceb8b7f4ca95a159c4d4"
  },
  {
    "url": "assets/js/43.67f4d30d.js",
    "revision": "766563f0cb417cbe449880e8fda44120"
  },
  {
    "url": "assets/js/44.e54c070f.js",
    "revision": "4c33aa992ba501a78cf702fa3abb8a57"
  },
  {
    "url": "assets/js/45.a3574aa8.js",
    "revision": "75a8dfe731d481f62e0f7f3aa82af132"
  },
  {
    "url": "assets/js/46.6115e732.js",
    "revision": "2bd9ba38bdb6dc36ea63b6cf7d92b306"
  },
  {
    "url": "assets/js/47.bf18d058.js",
    "revision": "8197ec6df0e8ae13afc7500706eec27f"
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
    "url": "assets/js/59.7026327e.js",
    "revision": "745c9bbf7cb779112012bc2b58afddad"
  },
  {
    "url": "assets/js/6.9318dd43.js",
    "revision": "57a4552f6ac3884612da6ac5cca252f9"
  },
  {
    "url": "assets/js/60.836ac80c.js",
    "revision": "ffca1135268cd516fa53bd3aff51c63b"
  },
  {
    "url": "assets/js/61.30bcea85.js",
    "revision": "3adbbd013f08566e0612db44f7022a9f"
  },
  {
    "url": "assets/js/62.8991ddc0.js",
    "revision": "ebc3857187f9f619db9c4228437126cc"
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
    "url": "assets/js/65.b8f2e407.js",
    "revision": "54e2f1d44118ffeaf681441fb48ddcb7"
  },
  {
    "url": "assets/js/66.0ee705ca.js",
    "revision": "8622d3718af3f914aef0068d3397a351"
  },
  {
    "url": "assets/js/67.dc3a4454.js",
    "revision": "009617a9c16ac18bab2ff9cae2845bda"
  },
  {
    "url": "assets/js/68.5c5ef030.js",
    "revision": "2199dd5847164d8b041aae827f90ef1d"
  },
  {
    "url": "assets/js/69.a871a452.js",
    "revision": "e5e568cc872281365e507faa55c30316"
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
    "url": "assets/js/73.6bd2218a.js",
    "revision": "d62bba94d3fbde1558bb1035ec37142d"
  },
  {
    "url": "assets/js/74.283089ee.js",
    "revision": "60dfcc6fe9a53126e96aebc24503ab73"
  },
  {
    "url": "assets/js/75.663d950b.js",
    "revision": "e3678db71d81871e3b6aea5a3d251976"
  },
  {
    "url": "assets/js/76.9fb3b5ee.js",
    "revision": "caf8ec5c29148066a94aa6d01fee9e10"
  },
  {
    "url": "assets/js/77.46c50f3e.js",
    "revision": "5fd7fa5a63d959baf2ce1aaa531233af"
  },
  {
    "url": "assets/js/78.d20e9c53.js",
    "revision": "56418ebdb1fd66bbca086e3773eca745"
  },
  {
    "url": "assets/js/79.110a6f72.js",
    "revision": "1ce798b86eb3d9712366e44c91c335b9"
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
    "url": "assets/js/82.ddfda256.js",
    "revision": "059dc641528a3f4229b893cfbd981f41"
  },
  {
    "url": "assets/js/83.03edc34f.js",
    "revision": "ebe5181392faffe9cc783968be14ef16"
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
    "url": "assets/js/87.d205fafc.js",
    "revision": "99e8e814fe4050572c79ab592a225f1c"
  },
  {
    "url": "assets/js/88.5a4eb9f0.js",
    "revision": "25d0c3ed43bf3839b9bb994255630a28"
  },
  {
    "url": "assets/js/89.1bf8309a.js",
    "revision": "1ddf04f56ac2d8a11e4dacf2adecda65"
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
    "url": "assets/js/93.0785274a.js",
    "revision": "52db64312ace77dc626504724bfa6781"
  },
  {
    "url": "assets/js/94.b574797e.js",
    "revision": "d327e50164e57f62ad12d55cb1798c3e"
  },
  {
    "url": "assets/js/95.1f55d2c5.js",
    "revision": "90d7b8673c6d3df63402ad0afc137693"
  },
  {
    "url": "assets/js/96.28f115a2.js",
    "revision": "2da4e36bf6926c80307548787f8650da"
  },
  {
    "url": "assets/js/97.cba69e8d.js",
    "revision": "d94accafec637410de5faecfb981c3c8"
  },
  {
    "url": "assets/js/98.96400dec.js",
    "revision": "4de24fb1364e1e1809b4ba51c03b586c"
  },
  {
    "url": "assets/js/99.76c4b691.js",
    "revision": "cbad3e91e67cea72db728354d109de00"
  },
  {
    "url": "assets/js/app.46dbeee1.js",
    "revision": "662e9dfb33e64a6d6cb0bf8cfe607d3d"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "79afbdd0f984905b7dc7adb331fa2a4a"
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
    "revision": "a22110d616bf25839a499f14695c5cf2"
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
