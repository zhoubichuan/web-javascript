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
    "revision": "e834675787aa2b24bb32f16fe0335fdb"
  },
  {
    "url": "1.base/1.js/1.syntax.html",
    "revision": "9cec8ba16bf8462b09a4365220f33817"
  },
  {
    "url": "1.base/1.js/10.dom.html",
    "revision": "3db122491eee1242ee103216a7938776"
  },
  {
    "url": "1.base/1.js/11.bom.html",
    "revision": "a4218e9a57d806aa151b1d9bc9021aa5"
  },
  {
    "url": "1.base/1.js/2.expression.html",
    "revision": "26bf0db719a36f4885d219d551b9ebcb"
  },
  {
    "url": "1.base/1.js/3.statement.html",
    "revision": "8a87d6f12a7dbef158808e7d027fe838"
  },
  {
    "url": "1.base/1.js/4.datatype.html",
    "revision": "50ce74a001baed27d152a6411616f16e"
  },
  {
    "url": "1.base/1.js/4.implement.html",
    "revision": "b2de7f23aa075e7fdb8be40db15fc1f8"
  },
  {
    "url": "1.base/1.js/5.var.html",
    "revision": "b85d703c24972eecd61112c3fe4d3fd6"
  },
  {
    "url": "1.base/1.js/6.function.html",
    "revision": "649cf2a8732df125a1b326078b29735a"
  },
  {
    "url": "1.base/1.js/7.require.html",
    "revision": "1373d075d250a5c659ee5c95ae08759d"
  },
  {
    "url": "1.base/1.js/8.async.html",
    "revision": "0e3dc996b5d79004295e60cc8ff9efe9"
  },
  {
    "url": "1.base/1.js/9.eventloop.html",
    "revision": "c1215d35d8e8260c7f87601f363e0b42"
  },
  {
    "url": "1.base/2.file/1.index.html",
    "revision": "f67306760ac59708384ca8c6bf346c08"
  },
  {
    "url": "1.base/2.file/2.promise.html",
    "revision": "184d7dc1f8d0850fd935f5c62beb19d1"
  },
  {
    "url": "1.base/3.video/1.index.html",
    "revision": "db134bac5b6d0ad391afde41bee22821"
  },
  {
    "url": "1.base/3.video/2.haikang.html",
    "revision": "6821878a3cb1b6ca9a42df9851c5dd41"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "93d678a397fa62ddbfec32091e84cf07"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "4c1bfbdf4f1a940a6063dbb31cf977b4"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "6fbfb14f98eeed981e2e0332131612bb"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "8af3ce2aeac1e9bb6623527893b813f8"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "51c6a007c9987bac92e3db8197328105"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "b9fbf42840ad93aa17e781730d6e93ee"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "5c27f6bf7c643115f44914efb72d87e6"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "6b3c9485613648e732f2fa5e31be8295"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "569666690ace765808a88a1793294462"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "4d7594f9246c1c87689c004b52fb1e28"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "c045ffd6588f844be31bb3f5228cc049"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "4a34529332153afdcf68dabee12f9a5f"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "252a76579aaf6587e895bdb0d5ec0966"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "a4a328332da4c618aafcfc0937c848fc"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "ba2bc4f4a5781635db28a77ffb8f7f11"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "9d5f7f2eecd4f2d40b46302c17754c97"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "c64924c371a3955db7135aab4b395df6"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "0fce6d074153e339038842e150f5045f"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "9d5b0c67f37792f8b0627b6a219d3160"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "28735d409e7d556de057457638e6f177"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "1ff37d3b8264ad90ae21cc6bcfef68a1"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "c74f80428ae3aeeff9769aeea86ace11"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "a8d3f5689068d361fb22aadf053ed9a5"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "3f7ae21bc8829cb1b511d8dd69a3f0e6"
  },
  {
    "url": "2.advanced/6.es6/1.scope.html",
    "revision": "6a71688b88d5704ff946da60bd5ff11b"
  },
  {
    "url": "2.advanced/6.es6/10.module.html",
    "revision": "e5d99ec19f0a4fc4165b199ae7707a46"
  },
  {
    "url": "2.advanced/6.es6/11.promise.html",
    "revision": "4cce559c5059db3579aae30d85c8b7f2"
  },
  {
    "url": "2.advanced/6.es6/2.constant.html",
    "revision": "bca93cb7b554c78e619c6f23a0908342"
  },
  {
    "url": "2.advanced/6.es6/21.nodeJS.html",
    "revision": "9e80859db1f7e7123cd4f11e0dae79fc"
  },
  {
    "url": "2.advanced/6.es6/3.deconstruction.html",
    "revision": "8c23bb64ede1ed2ec8c0f56098d74676"
  },
  {
    "url": "2.advanced/6.es6/30.module.html",
    "revision": "cb441cb7b591e7a03dff4a923330f647"
  },
  {
    "url": "2.advanced/6.es6/4.string.html",
    "revision": "30c8f80f071367c50b0f23b7a68de2bd"
  },
  {
    "url": "2.advanced/6.es6/5.function.html",
    "revision": "8991ace2258b8803f3dd87e3b62a67c7"
  },
  {
    "url": "2.advanced/6.es6/6.object.html",
    "revision": "ea928b4e8a9d4731ded53aa0c163669e"
  },
  {
    "url": "2.advanced/6.es6/7.class.html",
    "revision": "e78d6d6c3a549fd442d69996d912aff0"
  },
  {
    "url": "2.advanced/6.es6/8.general.html",
    "revision": "5445bb5cfd9966d7bb65e9d289e83001"
  },
  {
    "url": "2.advanced/6.es6/9.collect.html",
    "revision": "427742b7042ea486a72a73e4dc64490c"
  },
  {
    "url": "2.advanced/6.es6/bug.html",
    "revision": "169d7dd1caac45832fa76dc2c048fe17"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "757e2424f10e49fbc5cee9c1944107a1"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "3fb244bae97546578725fa7ce58a3d78"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "d97b1a22c5139a4423cd9409fc5d42d7"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "e46d0da37e2692fef7b049cb7032d2ce"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "1ab48d192ac63c7c08599d97cdf5665d"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "cd78380cfc342a013b554b6dbc712ac9"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "5cfad1bca5ce9e8e8af5e2c915d93b05"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "efde6e12e65c261c51f542c1d5b722c2"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "9db0043b846644c278b5e066dbdb3ac2"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "7bae648c78e3d5459d8e4a19540430cd"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "5f24ba5656f7859cb75cf4192b013450"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "b04f5b773f995438631b9e1b7c03c1d6"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "df18ff1a4c47984a4db4efd5353f4cae"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "75ad4cb7297b7dadb528448981bfbf9e"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "4e5cb3ec1bd7f60e97bff2d409e67a11"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "463ade8f0c07ef06a543f65072c53cab"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "0fc7281326672f23756d09cc3e56fd95"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "4e95078afd750dd65849110039ebd6f2"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "63990c797c2417ba167f530d47a08623"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "ce9fb3095011e004a126f54b3c0aeae9"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "82de3c0355f6fa4b11499c20523c0bfc"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "09f14a6d3b36d6adfa03bc9a512f13a3"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "0933baa0bc348f2fbbab63a25cb5fc28"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "204735a82a0b32ce9b38e4dff8a20e31"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "5dfd1fa1956cf570f46a76e6a8d6881f"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "580336c76f91a4e07943351d48dca124"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "7fd19346457cd486314d213bf3e7acb8"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "4a82b618a4803111f33426a1df739fc3"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "5a1ba2b55b3f15bc99b56b7f5be5688d"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "3d72380e95e9f18470ddbfd20951e50e"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "eb91f856170a04a08bf4420f8ea7fa3c"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "3ac4df086b54c4fe30a30cdfbc1bb8ae"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "a1d367c00660385978414637d0685d2f"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "c4659933fdc168f32fa6bbd83f397b06"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "adf09701d5668f79f5328a085e3e5fb4"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "ea40bd0683f5b5ca5c7261fd8d8efffd"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "373c7e007a4e6bba9f847cd99608a3c0"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "5f1f1990711b09950b6633069725cf39"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "05935abe63abadf4bc3bd8ac66d4f73f"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "dd807dcd14c6c62761d0cfa4043010c5"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "1c8702f54346c6a8510a84e38e2a8234"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "e524e11cb6c8a90fe122675a018b8dda"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "8712cf8c2744fb2b0b97ba13c52575fd"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "d49e121c25fb3a3524067db7dcc2187d"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "e5c25d5681ba4c18487527feae24bdf3"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "1d923874b47604d5c74487e12029438e"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "8d822e75f6b272e91dfac76f408df390"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "089822b028ab94f696fc050d54c0da77"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "871ea29f0cead5c167da26753e19fb2c"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "68c4da44f5c7f29289d31a3361b540b3"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "8c975986a5e947400dde917994b7456d"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "bda9607e13ef801e9fb5996495f99bb3"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "eff9970d8a22c39f2b8924d66b0fed7d"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "672120591d20092892d3df0304034f62"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "522f873dc7896d7fb248887a29bec0bd"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "53d29994ca8285d7d7d5a0de20c77b13"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "3fabb649739203f72383ae92737a877b"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "4f79798895a325ee3cedefbf65210ca1"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "7d17c64c80e5a465f95377166bdee6a9"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "b15df7b71a699abcbddb640185239819"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "4ebebc2f26449aed56b68824b6468280"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "4d0d0df611e58127f9ea6b4831464cb7"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "840d4d179eaa2ac189fb0e4bf72f326d"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "d8821d430046d2b97c8676329f8731d1"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "10952c8cb79d96f56e223812de7c0b05"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "51570bcbed600c07f7494051d37882db"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "dc2ef4b6e30ceae23bceb59a526733f8"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "f78dcba525f882c93bb61cf6662ab8e5"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "b533290da4874879cf8c7d02ba67aca9"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "05445be9ae02390bd9823f5f4b822da9"
  },
  {
    "url": "404.html",
    "revision": "046200adbe00ca926f232c0a9c92362b"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "a653366150d465d6981d47edda09d439"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "29f7fb5cb6621d40d85234055a0825b6"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "f40a05b42a73bed1289cec097b943bd8"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "ac590a78c184f62d9c5589ba78ce7cd2"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "f738cf57121db036aa0af9c097756ea9"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "e26093234a384cb4fd9c8fdfee8742cb"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "c4bbf6f176c0fc030960a0216eb21d05"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "a436545f04da3ffa75cad9fc6abe94a8"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "7eb298b1cd9c71c380ad7091afc82248"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "b2a1734540582f4393d033d02602c14f"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "a8f939c11f579b25b1cd95b5af89b089"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "1318a29dfca5515d42ae5c1508cb1a64"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "2e13b437fd9f24c3b9f00372e58ddb3c"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "6a43c175797cc95aa97cb85391d77803"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "952fb2e649a1b1994cb3066606fd0f6e"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "32e5f3856aa2b2d09142e8a1b91e0878"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "1814541f8b1528374481cdd4ff80468e"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "78921df449dff6cec0151736a9b66596"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "2814cb2c1c105fbc1bcd0c3c66fba97d"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "a0bee21cedfc621509d1a172d10bbd86"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "8b2b1ce1da2ae41d70f2d2bd8432dcce"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "14e222a9b68d8d3d0bfedaad1537e5ad"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "fa943924f72af56e63653cb23c6ed05c"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "a60ea847cbccad78415dfc3745b0bec8"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "85fb7c91231ddafb189d4c947186935e"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "424eb93aad267da35ae23959de2a5aeb"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "bc919c7fdc8996eb54e0ea4a6f519dc1"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "6274db5ad3f359662751091da5825ea5"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "98a5748eb97fef3e82e2a91de369aac2"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "a92992659516e1f00366d105c8a182e6"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "960fb25adcb89f9371695cf5978a1759"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "6963747a627d294bf151671a9edcc432"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "8ef2594e8ff0522095560ee6f8c85cac"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "9cba6b8e4bdc2b510b48b8f5ef86e698"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "3b26bd9932f29829274b297881a8e4b9"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "d5e056d7ee5769da463ac3cd3cf9a35a"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "034943703eac437bf15dc0da9fb635fb"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "ed8e43adee309eccc79524ff16d7ae1b"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "cce5eb816d30be77712b30c51500530d"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "234754b6ad66361e603b6b16f52fb325"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "09ead2b441ad04555d5e1f41706e6c3f"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "b034eadf89f297c46394670ccceea921"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "a71b2691706e421dc1df0ff453643b28"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "add7176dbb669f400f96bdc8e3d0315a"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "66f3a7944908e6b46246dae9b4b638a0"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "31070d37350197d26f39750b72a8f8c0"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "018c4d99dc09e04f609da3c9420e2301"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "272ff3c5f3a48c14c1f87fe8224638d9"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "eeabd7c225b515d300017ec2e54913a5"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "b6217832edc937b1b48e3d131fdd054c"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "13e67fc362ac7a1de8ad284f01a2cdf6"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "161f91117434416c4564f3b499c8b9f8"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "0090ede2733273b5a5b5251aa595f8fe"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "67b9c72d75c4aa56d720ac9c084ea6d7"
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
    "url": "assets/js/102.816783fc.js",
    "revision": "b4c6e7f0ef6eb965ca8ed2fd2a17daf7"
  },
  {
    "url": "assets/js/103.d0555c81.js",
    "revision": "dcf3612714f40cc76a1464e25f71f157"
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
    "url": "assets/js/106.27aaf6aa.js",
    "revision": "8e610bc2af6a8e75de91dd73a2373961"
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
    "url": "assets/js/110.2d773b26.js",
    "revision": "191d7216851989558755cf95391b2daf"
  },
  {
    "url": "assets/js/111.b3597674.js",
    "revision": "4c3af2412ee987e3962b24172d7c0cce"
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
    "url": "assets/js/120.3259a6a7.js",
    "revision": "4bfc2dfdf0e48de2cb81b437e1149d24"
  },
  {
    "url": "assets/js/121.c43d0722.js",
    "revision": "e73117b329a2f849c4b7b4c745acc0c1"
  },
  {
    "url": "assets/js/122.e4ff5826.js",
    "revision": "7dcd648684b968f6cca379155ad85242"
  },
  {
    "url": "assets/js/123.20d407c3.js",
    "revision": "c60bb1c57cf408dcb792f7423e10ebd0"
  },
  {
    "url": "assets/js/124.f8590aca.js",
    "revision": "adb54f00848aaa173edb61d200ad4f53"
  },
  {
    "url": "assets/js/125.de41b2cd.js",
    "revision": "df0d6e81b4c7b5ec4e78f7772ec3c20f"
  },
  {
    "url": "assets/js/126.20bbf80b.js",
    "revision": "9cc5250fb40e04f45cfd050c0d9a0b38"
  },
  {
    "url": "assets/js/127.03185d9c.js",
    "revision": "6e8884d4aa5c5185fe31a2acd64c8422"
  },
  {
    "url": "assets/js/128.deb60738.js",
    "revision": "c859f7ac1689692a9890a4567db2b402"
  },
  {
    "url": "assets/js/129.236abb17.js",
    "revision": "5cd6e989a65dd52afbabc4ad820e2f5c"
  },
  {
    "url": "assets/js/13.28315b90.js",
    "revision": "4386bd195b82723f49d8ca6126baecdd"
  },
  {
    "url": "assets/js/130.cdb3b03e.js",
    "revision": "9c8dfedcb4cc3b8370dac0baa2e33446"
  },
  {
    "url": "assets/js/131.ce84a5f6.js",
    "revision": "e7baf03f60f6c781890089a9a0282254"
  },
  {
    "url": "assets/js/132.872d6200.js",
    "revision": "359ef99a5e89e15f24f25446b17f785a"
  },
  {
    "url": "assets/js/133.4ab84739.js",
    "revision": "bcd4305b60f9b5fd60a38263e6328cdd"
  },
  {
    "url": "assets/js/134.bcaec3e7.js",
    "revision": "5e9ee2ac056dc7d6fe75cdda1658c846"
  },
  {
    "url": "assets/js/135.4b48087d.js",
    "revision": "f9bbe95d9ba83cbcc36957c5c1f669fa"
  },
  {
    "url": "assets/js/136.c6267b25.js",
    "revision": "6efd88dbcb65f273ccad78fe69c9f9fb"
  },
  {
    "url": "assets/js/137.480ebda8.js",
    "revision": "1abc6b1f066923a7fbf5259d3b3a4be8"
  },
  {
    "url": "assets/js/138.da278a35.js",
    "revision": "f7909d315924f067c235c7bba52eedf9"
  },
  {
    "url": "assets/js/139.325f0183.js",
    "revision": "2b346834738de9efe5bed289f9c8616d"
  },
  {
    "url": "assets/js/14.50367117.js",
    "revision": "fe1c4c0b54b2baabad676bb2e234a2c7"
  },
  {
    "url": "assets/js/140.227a7f12.js",
    "revision": "ff80a18b3ddfbb879f43a46030437dcc"
  },
  {
    "url": "assets/js/141.dddbb29e.js",
    "revision": "1fa0fa164092ca3a6efe8835ea79bd2f"
  },
  {
    "url": "assets/js/142.68b97bfa.js",
    "revision": "a635d0a25259c52c25968fe349d1b5be"
  },
  {
    "url": "assets/js/143.39a7c5e3.js",
    "revision": "78818eabe64c0c1b3f4352dafc72c373"
  },
  {
    "url": "assets/js/144.029cf351.js",
    "revision": "4caa06c62a4ad98ab3ded36c41d59083"
  },
  {
    "url": "assets/js/145.38ee09f5.js",
    "revision": "5ca1b7bca74598f08a8d06cada60970e"
  },
  {
    "url": "assets/js/146.af38bf5e.js",
    "revision": "f95e4faeccb7ddad0631559a962c501c"
  },
  {
    "url": "assets/js/147.3d8655c8.js",
    "revision": "50e448ad8c5637eb6253bd2dc1668de2"
  },
  {
    "url": "assets/js/148.1e1abad1.js",
    "revision": "33c1319e10c43519b47df1f545f20cdc"
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
    "url": "assets/js/150.0aef4ab6.js",
    "revision": "4048c5e54b3ecb366e5a83d34ecd4fc2"
  },
  {
    "url": "assets/js/151.48fd7ce8.js",
    "revision": "5b1c16675d7ab07b2c3a80bad75bed2d"
  },
  {
    "url": "assets/js/152.e59f7c89.js",
    "revision": "c1b4a68f0c51ad1a057fc62fa8a86a4c"
  },
  {
    "url": "assets/js/153.e1139fe2.js",
    "revision": "b7b495791ead733c22cc72a52fafcc8b"
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
    "url": "assets/js/156.ab39df82.js",
    "revision": "502d308bf5a2cf72041a7f7c700993ea"
  },
  {
    "url": "assets/js/157.ab9e871a.js",
    "revision": "9174b8d1c5be67b10103361df13ea563"
  },
  {
    "url": "assets/js/158.17b54a86.js",
    "revision": "7812fcb0cc0ffa3cee3882259cf6cc32"
  },
  {
    "url": "assets/js/159.7686c054.js",
    "revision": "c14c9a6ed43c8760e7b23a3aec6ae156"
  },
  {
    "url": "assets/js/16.7f585d8c.js",
    "revision": "a911c35cf0ad1c80eaeec3aadc061fe6"
  },
  {
    "url": "assets/js/160.afc2fb19.js",
    "revision": "0892cd68c0b231686fa2c57e94353da3"
  },
  {
    "url": "assets/js/161.1c0596bc.js",
    "revision": "8461d0556f4b98655cee0f99a071928a"
  },
  {
    "url": "assets/js/162.6f63ce83.js",
    "revision": "c3459a2260e5d4082abb80dd6e92b153"
  },
  {
    "url": "assets/js/163.c5d8552c.js",
    "revision": "3e3ecf42619365a6009814d0cc808a68"
  },
  {
    "url": "assets/js/164.1802ddb6.js",
    "revision": "ffeaef65fedddecd3163211150d07c2d"
  },
  {
    "url": "assets/js/165.cd3f65f6.js",
    "revision": "c2fab630d7b04d8a85af3a146ba6a884"
  },
  {
    "url": "assets/js/166.1a3107d4.js",
    "revision": "78c91edeb7db9440556f536ad4180ab9"
  },
  {
    "url": "assets/js/167.87c5470e.js",
    "revision": "ce62ab01ee56df71f64fdfe0c9861dd0"
  },
  {
    "url": "assets/js/168.ff967c98.js",
    "revision": "07e6aa191c85699a3ec41260c22ec316"
  },
  {
    "url": "assets/js/169.3d3cad38.js",
    "revision": "97acf6c9ad4ae83ecfa7f547d85f0dec"
  },
  {
    "url": "assets/js/17.3d36a152.js",
    "revision": "a2df5e01a4b61da7c0ea47081f9b6843"
  },
  {
    "url": "assets/js/170.8d47b749.js",
    "revision": "d967aaacff5bf40f12c8ed216d3fdbd4"
  },
  {
    "url": "assets/js/171.0d73b246.js",
    "revision": "a7e7af1f9f82b3d9fc2d07d8dcdcdeee"
  },
  {
    "url": "assets/js/172.fa6ca0ea.js",
    "revision": "0d398d09e048627e8513aaa55f636432"
  },
  {
    "url": "assets/js/173.fa650d40.js",
    "revision": "91a30d26383fc8ca9ce2679eb6067dd8"
  },
  {
    "url": "assets/js/174.7a6798f7.js",
    "revision": "b68ae520cc299393de3baaa31bc5ce72"
  },
  {
    "url": "assets/js/175.e8cad264.js",
    "revision": "6afb6aec426202dcc16e517611d5a638"
  },
  {
    "url": "assets/js/176.31bece9f.js",
    "revision": "acf25c8aed82d2c3a090511afe5608f9"
  },
  {
    "url": "assets/js/177.1ef3bef1.js",
    "revision": "d6990998a18d4188d526a5362f758b6b"
  },
  {
    "url": "assets/js/178.dde901bc.js",
    "revision": "474f7219f72d107f5bad769186f39580"
  },
  {
    "url": "assets/js/179.e9e3632e.js",
    "revision": "3b527256e3ce2c748d50bce59ae994f5"
  },
  {
    "url": "assets/js/18.ce6c603f.js",
    "revision": "6ac11a77192cafcf2fc38465e3d1b866"
  },
  {
    "url": "assets/js/180.28381078.js",
    "revision": "6987d1a9f66f786b1b1f81c38b84c80f"
  },
  {
    "url": "assets/js/181.0ee277e6.js",
    "revision": "032ddc90935899a23d859f9ee3d735cb"
  },
  {
    "url": "assets/js/182.c95b8a4b.js",
    "revision": "f13999bfe81b54afa32dd1ab7ff8e3d9"
  },
  {
    "url": "assets/js/183.ab525e8e.js",
    "revision": "ad83d36aafff4bd9ec188518c6cf4425"
  },
  {
    "url": "assets/js/184.35f5c158.js",
    "revision": "2879fbbe392e013f1fff663dd91b09f7"
  },
  {
    "url": "assets/js/185.e9ee01ec.js",
    "revision": "cddcebdcbde843f53d9afd6724a8aceb"
  },
  {
    "url": "assets/js/186.c2300e00.js",
    "revision": "38301a22719b21ca819aba4d38236412"
  },
  {
    "url": "assets/js/187.7c2231d3.js",
    "revision": "547b91cde98cbc8a035f09adf7af793e"
  },
  {
    "url": "assets/js/188.c65bafa7.js",
    "revision": "70b491df8b48936c5dbd5ec92865c161"
  },
  {
    "url": "assets/js/189.ee323c53.js",
    "revision": "dcd7ecefb99887da72acf49a4f991d15"
  },
  {
    "url": "assets/js/19.355865fc.js",
    "revision": "72f8cfa133ad453c1203ba9593364e9b"
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
    "url": "assets/js/22.725df588.js",
    "revision": "09497f3f234ab06475770719cac5c8f7"
  },
  {
    "url": "assets/js/23.33ffadfe.js",
    "revision": "2b5b5bd6230abfcc547b5becd88b5dd8"
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
    "url": "assets/js/3.f1538014.js",
    "revision": "3c9626c1b499953bb12ff56050f630bb"
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
    "url": "assets/js/4.54a35476.js",
    "revision": "b51cb4777ce479a9b92652626ede8011"
  },
  {
    "url": "assets/js/40.1f505e1a.js",
    "revision": "799d07a1f20587bd7f8a5925e45a5331"
  },
  {
    "url": "assets/js/41.fde09efb.js",
    "revision": "c1009f79546c2778a9ce7d148e2029eb"
  },
  {
    "url": "assets/js/42.6427f550.js",
    "revision": "a3a9dbc4bf18891fc8eff619815dc89e"
  },
  {
    "url": "assets/js/43.4a2766bf.js",
    "revision": "616417ac671594ff1aca30e88530758d"
  },
  {
    "url": "assets/js/44.e54c070f.js",
    "revision": "4c33aa992ba501a78cf702fa3abb8a57"
  },
  {
    "url": "assets/js/45.099b7aed.js",
    "revision": "2b7319ced467c7db1b9adac026b358ab"
  },
  {
    "url": "assets/js/46.686e6156.js",
    "revision": "cefc10e54c6d91190aecb6d6e6c84665"
  },
  {
    "url": "assets/js/47.663084c6.js",
    "revision": "f7f562fb5cee9739edb9b64a17b9d8eb"
  },
  {
    "url": "assets/js/48.0f60240c.js",
    "revision": "0784cbf05da5031abfdbba3d2a9bf935"
  },
  {
    "url": "assets/js/49.8b2c1113.js",
    "revision": "98faa8e9526dbee78aa71bff3c81e57c"
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
    "url": "assets/js/52.11547e7b.js",
    "revision": "ca867f67163e3ea7c86b2c913c780e45"
  },
  {
    "url": "assets/js/53.476fd1e5.js",
    "revision": "a656471cc7aade82e6e4b176dc55fff9"
  },
  {
    "url": "assets/js/54.f8d5677e.js",
    "revision": "79244dcee7537cbfcd5148d82e07c157"
  },
  {
    "url": "assets/js/55.f6069ba5.js",
    "revision": "ab5857058417a6ee96a74aec2d168a00"
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
    "url": "assets/js/60.4860ba1b.js",
    "revision": "4d82a5255c3a79aafa7ffdbc02f581e0"
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
    "url": "assets/js/63.23822aaf.js",
    "revision": "1ed12efb0ab99875171d7f1c69353fc1"
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
    "url": "assets/js/66.03a7cbb5.js",
    "revision": "d2c92c6a82e692ba9c69e1b1e944ace8"
  },
  {
    "url": "assets/js/67.1ec2f243.js",
    "revision": "4ca486dd6b52bb76432b129bcb03f44d"
  },
  {
    "url": "assets/js/68.5c5ef030.js",
    "revision": "2199dd5847164d8b041aae827f90ef1d"
  },
  {
    "url": "assets/js/69.a4645b09.js",
    "revision": "4f29615f25481d7866132f843d6b207a"
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
    "url": "assets/js/71.d9cad20b.js",
    "revision": "148b78b2be8f46c258d358477927612b"
  },
  {
    "url": "assets/js/72.0b2690b7.js",
    "revision": "dab26cce6f53fd7d58322faf22752119"
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
    "url": "assets/js/75.081eae12.js",
    "revision": "2ce65bd4cc795208fef654a0f7d0463b"
  },
  {
    "url": "assets/js/76.9fb3b5ee.js",
    "revision": "caf8ec5c29148066a94aa6d01fee9e10"
  },
  {
    "url": "assets/js/77.93afca7c.js",
    "revision": "da3d7950ab6826ac2847c189c60eec4b"
  },
  {
    "url": "assets/js/78.5d0fbd73.js",
    "revision": "73f6a471f52a6650de295505892c2a02"
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
    "url": "assets/js/80.1cb4de7a.js",
    "revision": "7fe3a3a25d537b0c8f28734ca4f78c07"
  },
  {
    "url": "assets/js/81.94de5498.js",
    "revision": "8c6b9304fb46bb4c9994f2b80f7cb6f7"
  },
  {
    "url": "assets/js/82.ddfda256.js",
    "revision": "059dc641528a3f4229b893cfbd981f41"
  },
  {
    "url": "assets/js/83.3d21860f.js",
    "revision": "00826ab4f61595c2baebbdd5f7500032"
  },
  {
    "url": "assets/js/84.86a849d9.js",
    "revision": "76ce05c81c72b2b00dc38bf8bbc3ec21"
  },
  {
    "url": "assets/js/85.d170f153.js",
    "revision": "4c966c4b7af47ce4dbece6572c7cc1c6"
  },
  {
    "url": "assets/js/86.4a5a3022.js",
    "revision": "5450d9d31b9530de4cf4265eb0ac2e8f"
  },
  {
    "url": "assets/js/87.4a368670.js",
    "revision": "e6c2a56deda9d3c20e8eab07a32e6fda"
  },
  {
    "url": "assets/js/88.ca19ad0e.js",
    "revision": "1e088b24cbe7c342823ef43c56e3b603"
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
    "url": "assets/js/93.db8f22b4.js",
    "revision": "9bdeddb15fbfea177fd00c97e258f86e"
  },
  {
    "url": "assets/js/94.e72efa1c.js",
    "revision": "17cec0f4670c407f75c6cdd90f9d7722"
  },
  {
    "url": "assets/js/95.e289f9e1.js",
    "revision": "0d5f517834a41a61f82daf246aa0b982"
  },
  {
    "url": "assets/js/96.28f115a2.js",
    "revision": "2da4e36bf6926c80307548787f8650da"
  },
  {
    "url": "assets/js/97.52b9cb74.js",
    "revision": "fac5fc36411e51513c76cdbd09361d1c"
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
    "url": "assets/js/app.924ff8ac.js",
    "revision": "37f850437fb7b9fe0f940e8938ab8d1a"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "53be4a852519cfff418ce41d6b25c62a"
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
    "revision": "0d0926853544beb00534910a35d89934"
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
