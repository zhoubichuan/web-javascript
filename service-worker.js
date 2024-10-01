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
    "revision": "2fd4c02a35d69a81a92067955cd1a47e"
  },
  {
    "url": "1.base/1.ECMAScript/1.syntax.html",
    "revision": "1a654643ff389c81e6703f57369b3942"
  },
  {
    "url": "1.base/1.ECMAScript/10.var.html",
    "revision": "16d717bdbfb064f875ab5a673f9d009b"
  },
  {
    "url": "1.base/1.ECMAScript/11.function.html",
    "revision": "e6318bd4bbec78e0e08c35d8e4eb4442"
  },
  {
    "url": "1.base/1.ECMAScript/12.require.html",
    "revision": "54d0bdbee1d58b39accc3a4fb012cab4"
  },
  {
    "url": "1.base/1.ECMAScript/13.new.html",
    "revision": "c1307512970c7757e2c734237769454e"
  },
  {
    "url": "1.base/1.ECMAScript/2.expression.html",
    "revision": "218180b3caedf16dd2c343d56e04ceea"
  },
  {
    "url": "1.base/1.ECMAScript/3.statement.html",
    "revision": "95e18a4a265536d064c9f0a554755034"
  },
  {
    "url": "1.base/1.ECMAScript/4.type.html",
    "revision": "ed4303d7072598a5eadedf678179db78"
  },
  {
    "url": "1.base/1.ECMAScript/5.global.html",
    "revision": "5773aff7903e5d49c9582e940fab5aef"
  },
  {
    "url": "1.base/1.ECMAScript/6.sync.html",
    "revision": "333d3c00eeaf5a38a822dd019a5832de"
  },
  {
    "url": "1.base/1.ECMAScript/7.async.html",
    "revision": "d90b4632c3092c7d98eac40d0fe15758"
  },
  {
    "url": "1.base/1.ECMAScript/8.memory.html",
    "revision": "425fe3f097526926e29987835fbb4ef7"
  },
  {
    "url": "1.base/1.ECMAScript/9.bug.html",
    "revision": "eb3a251d68d34c69acd21a76bd31fb95"
  },
  {
    "url": "1.base/2.ECMAScript6/1.index.html",
    "revision": "04c0d63655a63d47d81a02680508c8ef"
  },
  {
    "url": "1.base/2.ECMAScript6/1.let.html",
    "revision": "b3aafd259b9918a5fe48bcf2ecb0223f"
  },
  {
    "url": "1.base/2.ECMAScript6/10.module.html",
    "revision": "7852a6f84af970457a240ecc703ec345"
  },
  {
    "url": "1.base/2.ECMAScript6/11.promise.html",
    "revision": "3726d08ba9bca347197ea0caa29eb740"
  },
  {
    "url": "1.base/2.ECMAScript6/12.async.html",
    "revision": "aaedb3322adfe39a55bd11e2a94c199e"
  },
  {
    "url": "1.base/2.ECMAScript6/13.proxy.html",
    "revision": "33add6cbfa1401e6c133d972fac79b0b"
  },
  {
    "url": "1.base/2.ECMAScript6/14.module.html",
    "revision": "8a9f8a481aa186369077b2079099ceec"
  },
  {
    "url": "1.base/2.ECMAScript6/2.const.html",
    "revision": "10c600a55d6f4db995bb5c50cfa644ed"
  },
  {
    "url": "1.base/2.ECMAScript6/3.....html",
    "revision": "7e6e29918a78f740a0d2d3972a5e0238"
  },
  {
    "url": "1.base/2.ECMAScript6/4.string.html",
    "revision": "a765ba5cb7f9ec86b071ec3fd31f5f7c"
  },
  {
    "url": "1.base/2.ECMAScript6/5.function.html",
    "revision": "6813076df7dcb8c37560f322e5e75139"
  },
  {
    "url": "1.base/2.ECMAScript6/6.array.html",
    "revision": "a6f15c4805dcceaee4751912142808e7"
  },
  {
    "url": "1.base/2.ECMAScript6/6.object.html",
    "revision": "36ca9617052f3ae312fc1cd167166b0f"
  },
  {
    "url": "1.base/2.ECMAScript6/7.class.html",
    "revision": "02b52ab80c2861347e27f18f46f62a73"
  },
  {
    "url": "1.base/2.ECMAScript6/8.general.html",
    "revision": "4a3895ce97305103f85369b0433b8853"
  },
  {
    "url": "1.base/2.ECMAScript6/9.collect.html",
    "revision": "21c2bd9efdff41b15459cbd16ea692b6"
  },
  {
    "url": "1.base/3.JavaScript/1.index.html",
    "revision": "71672fd7263c8c29b3a086be1db79b7f"
  },
  {
    "url": "1.base/3.JavaScript/2.haikang.html",
    "revision": "196f61fb6cb93b17828b228fdb6987df"
  },
  {
    "url": "2.advanced/2.js/1.compile.html",
    "revision": "f5818b3b21488f88158748faae8a3d9f"
  },
  {
    "url": "2.advanced/2.js/1.index.html",
    "revision": "aef53e0bfeab5190307782db05d40d50"
  },
  {
    "url": "2.advanced/2.js/2.morphology.html",
    "revision": "a3e1f74eb25dc0fab168f935dfe28256"
  },
  {
    "url": "2.advanced/2.js/3.context.html",
    "revision": "04aa8abd067e4a01682717a09acbbfc3"
  },
  {
    "url": "2.advanced/2.js/4.variableobj.html",
    "revision": "a9a429d18989ac89bca9f22247c7f052"
  },
  {
    "url": "2.advanced/2.js/5.scope.html",
    "revision": "386335b68ce5c34cae7ff44b0f36bf5d"
  },
  {
    "url": "2.advanced/2.js/6.closure.html",
    "revision": "9f8cce4747caa8617f926e1dc3034fd3"
  },
  {
    "url": "2.advanced/2.js/7.this.html",
    "revision": "c5a94728382b035079d0246f9ea73d44"
  },
  {
    "url": "2.advanced/2.js/8.async.html",
    "revision": "47d927f4e8bd708044a70b50a57f8877"
  },
  {
    "url": "2.advanced/2.js/9.eventloop.html",
    "revision": "c9c05bda8c87f0e57cedb4ecb2f081e2"
  },
  {
    "url": "2.advanced/3.type/1.index.html",
    "revision": "868176d85ca0a06f611d5ea3b3ed92ed"
  },
  {
    "url": "2.advanced/3.type/1.number.html",
    "revision": "e64c5eef9a5a82c2cc266fb19ce95603"
  },
  {
    "url": "2.advanced/3.type/10.judge.html",
    "revision": "6c52e37113971172ae7c6ef05a992e63"
  },
  {
    "url": "2.advanced/3.type/11.transform.html",
    "revision": "02a54368b3db9ce48337b92a9fce9d51"
  },
  {
    "url": "2.advanced/3.type/12.copy.html",
    "revision": "0ea73f9ec044b3f9632db9f0e6f10394"
  },
  {
    "url": "2.advanced/3.type/2.string.html",
    "revision": "57e7a71e4944c1df854a636c706ccd81"
  },
  {
    "url": "2.advanced/3.type/3.boolean.html",
    "revision": "e75433c6f2cd050e7a26c78dfa91f70c"
  },
  {
    "url": "2.advanced/3.type/4.undefined.html",
    "revision": "f03a3da26778b92e9921a10cf2b24f50"
  },
  {
    "url": "2.advanced/3.type/5.null.html",
    "revision": "e78f21a001d1b0a2dad08277a630b8af"
  },
  {
    "url": "2.advanced/3.type/6.symbol.html",
    "revision": "1d77ed0dcd56efe93473534f353d5091"
  },
  {
    "url": "2.advanced/3.type/7.object.html",
    "revision": "26957880234a94d03a5ccf54dd3aea96"
  },
  {
    "url": "2.advanced/3.type/8.array.html",
    "revision": "90cf7ae77cb6d1ff6d71af7e00d35dfd"
  },
  {
    "url": "2.advanced/3.type/9.function.html",
    "revision": "2cebcf71ccee3fa27605bfd5ae3b4218"
  },
  {
    "url": "2.advanced/6.es6/1.index.html",
    "revision": "05da620a9646e105f9b2b857fc00893c"
  },
  {
    "url": "2.advanced/6.es6/2.promise.html",
    "revision": "02c74717e238c3f84ef6ac23aee42e85"
  },
  {
    "url": "3.senior/2.design/1.factory.html",
    "revision": "1ca5b155c659d7c97709a227109ab275"
  },
  {
    "url": "3.senior/2.design/1.index.html",
    "revision": "61b53c0e12bbea2abb7d80e537dcf933"
  },
  {
    "url": "3.senior/2.design/10.pickup.html",
    "revision": "bee3b6d379dcd87acda4a4d164b2a6a3"
  },
  {
    "url": "3.senior/2.design/11.combination.html",
    "revision": "3830a1bd1455a408b3bc289f8501180f"
  },
  {
    "url": "3.senior/2.design/12.flyweight.html",
    "revision": "bfa6556b773a9eaad72f83d58cc0dfe5"
  },
  {
    "url": "3.senior/2.design/13.strategy.html",
    "revision": "23c534c9d6ac8ca24106d733bf6e1de4"
  },
  {
    "url": "3.senior/2.design/14.module.html",
    "revision": "39428e83253b6afeaac483cb10170c6d"
  },
  {
    "url": "3.senior/2.design/15.observer.html",
    "revision": "09540159c1d636588be39a3d98a200d8"
  },
  {
    "url": "3.senior/2.design/16.iterator.html",
    "revision": "5e2ed2086a7fe5493ef624e95332f358"
  },
  {
    "url": "3.senior/2.design/17.chain.html",
    "revision": "cc938473f7f151b98949044849ad59b9"
  },
  {
    "url": "3.senior/2.design/18.command.html",
    "revision": "7d7c1c02608f0c744dfe9d23b793ca74"
  },
  {
    "url": "3.senior/2.design/19.memorandum.html",
    "revision": "908dde6739081d1a66eb2ab0aac9409b"
  },
  {
    "url": "3.senior/2.design/2.abstract.html",
    "revision": "f755cc3ebcb31b5b78eb51ee198d193c"
  },
  {
    "url": "3.senior/2.design/20.state.html",
    "revision": "ef2ab43e123d31773197bb1bf5226acf"
  },
  {
    "url": "3.senior/2.design/21.visitor.html",
    "revision": "8ba994dd227d0acbf43c60aac8759113"
  },
  {
    "url": "3.senior/2.design/22.mediator.html",
    "revision": "cd5aa8db03aa6643695ba563501ae2e6"
  },
  {
    "url": "3.senior/2.design/23.interpreter.html",
    "revision": "f53b2387fe73ad3526376e64bd83ba44"
  },
  {
    "url": "3.senior/2.design/3.single.html",
    "revision": "c60e4187b9acba53710d6caab3347112"
  },
  {
    "url": "3.senior/2.design/4.prototype.html",
    "revision": "316582a9a622e41a15331bdb2f2cc5ee"
  },
  {
    "url": "3.senior/2.design/5.made.html",
    "revision": "d9bbf2788f57c8da7395ce9d97e1a028"
  },
  {
    "url": "3.senior/2.design/6.adapter.html",
    "revision": "1f5c278e5f319d26fa5658db5564c98a"
  },
  {
    "url": "3.senior/2.design/7.decorator.html",
    "revision": "6cbb20edef7b00db847b9b86497c743b"
  },
  {
    "url": "3.senior/2.design/8.proxy.html",
    "revision": "7e8db97d529e65b7d27100dccef1acef"
  },
  {
    "url": "3.senior/2.design/9.appearance.html",
    "revision": "53db02a2d861cfae5c17a90c74de8b80"
  },
  {
    "url": "3.senior/5.optimize/1.cdn.html",
    "revision": "dbf3f07e79a3debcce47196d681175b5"
  },
  {
    "url": "3.senior/5.optimize/1.index.html",
    "revision": "8167845355a50a9a49c21fb6e5e9882d"
  },
  {
    "url": "3.senior/5.optimize/10.ssr.html",
    "revision": "526cb3ba064331810455583f10f5cb94"
  },
  {
    "url": "3.senior/5.optimize/11.debounceAndThrottle.html",
    "revision": "c140a2ab9650561d102b57f6efaa4e32"
  },
  {
    "url": "3.senior/5.optimize/12.webpack.html",
    "revision": "5749e42a939d44fa3969756824de97ed"
  },
  {
    "url": "3.senior/5.optimize/13.pwa.html",
    "revision": "8197f478d9d8d3ed06f3b0682c5ed2f0"
  },
  {
    "url": "3.senior/5.optimize/2.canvas.html",
    "revision": "c773f3617bfe77c44e0dfefe03bbc152"
  },
  {
    "url": "3.senior/5.optimize/3.store.html",
    "revision": "0c06efc6ba6ba0f43b868e8e18250c87"
  },
  {
    "url": "3.senior/5.optimize/4.img.html",
    "revision": "535dfe8ebf834f8c908bbad661b1a93c"
  },
  {
    "url": "3.senior/5.optimize/5.api.html",
    "revision": "9cc535948e7a8cc5b99502093583b023"
  },
  {
    "url": "3.senior/5.optimize/6.form.html",
    "revision": "7690198f78be789560d66724c617b44b"
  },
  {
    "url": "3.senior/5.optimize/7.seo.html",
    "revision": "6926a341ca3abac2ec6dd311d95ab380"
  },
  {
    "url": "3.senior/5.optimize/9.lazy.html",
    "revision": "faae06cf0dd784992f96abff39356c25"
  },
  {
    "url": "3.senior/6.debugger/1.index.html",
    "revision": "49d589c2737742d12a83cfe2aa74a52e"
  },
  {
    "url": "3.senior/7.cross/1.browser.html",
    "revision": "fa9033ad20178b90f3bec321bbc06cb5"
  },
  {
    "url": "3.senior/7.cross/1.index.html",
    "revision": "268e16eb2f0df1ff5e0f8e2e69928b62"
  },
  {
    "url": "3.senior/7.cross/10.webSocket.html",
    "revision": "ef47083fb4c6bd8bd39c0b6f50d8d650"
  },
  {
    "url": "3.senior/7.cross/2.cors.html",
    "revision": "e1b897dd471aec55079bacb2dd4f1181"
  },
  {
    "url": "3.senior/7.cross/3.nginx.html",
    "revision": "ff5e4da0885a137c139d3ac50268ce57"
  },
  {
    "url": "3.senior/7.cross/4.middleware.html",
    "revision": "88d9d85d558feb42820c76fd87bb237e"
  },
  {
    "url": "3.senior/7.cross/5.jsonp.html",
    "revision": "f6409d749f65a641b10f99a49c9efb12"
  },
  {
    "url": "3.senior/7.cross/6.domain.html",
    "revision": "5ca5f531408115f1c7ae49af8156ba9f"
  },
  {
    "url": "3.senior/7.cross/7.name.html",
    "revision": "0e5d53e74090759127572a550bf2f12e"
  },
  {
    "url": "3.senior/7.cross/8.hash.html",
    "revision": "9d3fc03f3f5aefd436f460ee6112252f"
  },
  {
    "url": "3.senior/7.cross/9.postMessage.html",
    "revision": "d9fccca567b55559deb55fc6b67f243e"
  },
  {
    "url": "4.special/1.cli/1.html",
    "revision": "22b57c5277bb680c2f414dc774e00961"
  },
  {
    "url": "4.special/1.cli/1.index.html",
    "revision": "53fb08f1d89533009a49509df5b601e4"
  },
  {
    "url": "4.special/1.cli/10.html",
    "revision": "6ce14c78a3707adc151b5cca61ee1e91"
  },
  {
    "url": "4.special/1.cli/11.html",
    "revision": "107e05b10a48e0ac1b58a1951b88e2fe"
  },
  {
    "url": "4.special/1.cli/12.html",
    "revision": "8792271f9674d89a6c50b11ede17fcae"
  },
  {
    "url": "4.special/1.cli/2.html",
    "revision": "f1bd6f45988afcc77b312d5174ef9933"
  },
  {
    "url": "4.special/1.cli/3.html",
    "revision": "f43a3426c4a3e6a7bf102bdf351756f0"
  },
  {
    "url": "4.special/1.cli/4.html",
    "revision": "428a4829cc25f27906ff5b251dffb031"
  },
  {
    "url": "4.special/1.cli/5.html",
    "revision": "8071a24aec54ff3935b5f2d7d82d7d4e"
  },
  {
    "url": "4.special/1.cli/6.html",
    "revision": "ac39d56e1512001c4ac206c5fd59661e"
  },
  {
    "url": "4.special/1.cli/7.html",
    "revision": "e6d359713be4bf3cdbedb35892d1e2f6"
  },
  {
    "url": "4.special/1.cli/8.html",
    "revision": "2a21853594f5b92baa5d274a430c8413"
  },
  {
    "url": "4.special/1.cli/9.html",
    "revision": "71affb3191fb4763a1b21eb591be662d"
  },
  {
    "url": "4.special/3.dev/1.index.html",
    "revision": "c40ba0fb4ee5cb998af4000a376995bb"
  },
  {
    "url": "4.special/4.construct/1.index.html",
    "revision": "ca0435c4a9225fbc6df953fb9292f8a4"
  },
  {
    "url": "4.special/5.project/1.index.html",
    "revision": "75045c77be48c1547f80b7624b7a2dbc"
  },
  {
    "url": "4.special/5.project/1.uml.html",
    "revision": "056be6d8218a1c3e761afed30f6759e1"
  },
  {
    "url": "4.special/5.standard/1.index.html",
    "revision": "a0e52bd4ecf957394c26c4824a475923"
  },
  {
    "url": "4.special/6.test/1.index.html",
    "revision": "5f29f430cfe0fb4af719baf52113841c"
  },
  {
    "url": "4.special/7.cicd/1.index.html",
    "revision": "5cbed0984bf8058a3d09aed9fdc5d807"
  },
  {
    "url": "4.special/8.monitor/1.index.html",
    "revision": "01b1c93520b8a341cec1bd2651fd66bb"
  },
  {
    "url": "404.html",
    "revision": "6c5d7ba7f41917f0179c0be8bfb0df0b"
  },
  {
    "url": "6.source/1.promise/1.html",
    "revision": "06b78f0d6730eaa77868d41f7b474a52"
  },
  {
    "url": "6.source/1.promise/1.index.html",
    "revision": "6a1998481c34c83bb00dd60cc953c094"
  },
  {
    "url": "6.source/1.promise/2.html",
    "revision": "dde771b41cc4bed33344a55b3be554f5"
  },
  {
    "url": "6.source/api/1.index.html",
    "revision": "3e58fc19c92389a05e355a41c103b453"
  },
  {
    "url": "6.source/browser/1.browser.html",
    "revision": "5ed2f204237fa16356722ce6da2c3000"
  },
  {
    "url": "6.source/browser/1.index.html",
    "revision": "04262ccc278511814b50b11e31a0b630"
  },
  {
    "url": "6.source/browser/2.tree.html",
    "revision": "bb6c189dbdd21fc7a1c9dd6cdda3c1b7"
  },
  {
    "url": "6.source/browser/3.reflow.html",
    "revision": "51b24364a02f3ead066e794644cf9f9a"
  },
  {
    "url": "6.source/browser/4.async.html",
    "revision": "7fef5ebe961b07e9f76a60a1ca4d36b9"
  },
  {
    "url": "6.source/browser/5.eventLoop.html",
    "revision": "a443c155d50b532d6a6cba3873add82f"
  },
  {
    "url": "6.source/browser/6.microtaskMacrotask.html",
    "revision": "72809b280ad03f95543d44301bc66b95"
  },
  {
    "url": "6.source/browser/7.crp.html",
    "revision": "21fc9e5f5685ac518fa8a3848bc240e4"
  },
  {
    "url": "6.source/browser/8.skeleton.html",
    "revision": "c17d82dfd3413451c5330e68815dcf34"
  },
  {
    "url": "6.source/browser/9.test.html",
    "revision": "ec09040da0a4067c5023f7e72c3ec39c"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "227cf06682fe9418d9fbc9e7fac078d3"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "57dd6a6f51df060a6c80357851887ede"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "07e2b74e1da75558833583f2631ceeab"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "f1e6f1057e7c755336624831360aa687"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "5175a6b22ddc8d313a3a2ac0fb3624f0"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "c6808b329d2796db5cb5ed8010c62fe5"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "c6395f5d56d08fb8b9a7808f101dfed8"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "214b1fed552cb7e72351a7a709738563"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "a678c866ce4b0c0b80e10e9ba4113c51"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "842a7e8e8d829245e8b8aef6d10be0a2"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "b2efe8407af2479aa0e7c54e6debb817"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "7734fff99406232be73f99a35a8b7eeb"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "cec22ff69bd0d1d6044dee1b1595a027"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "fdf04102b8862c1efcb2688064396878"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "fa0b1acec06d08be8921c9a617bbe24a"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "d9dd9bd731a77acbd7c78e386ffbb00d"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "21feb18d9932a34cbc0d4f8f5b652241"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "d14d06f84da0fde53cd46caeb923ffc7"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "732c3b66f1d1df7086926aed17cf093a"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "424317227ff9694c79774cdf9790afed"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "61570b6309e47aefefb8a2c0756fe1a4"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "f08f175938be8fa3ea82730e77947d98"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "ebd31791de9af58a3894ea28be42779b"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "2090345dfd06cf3077abe093e2cd7fca"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "3f73373a1a75665f8bd8e6e9398a8951"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "fc570a9f43a959d9339519694449b9ab"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "34463e9281bb2520bedb2a20119a9bed"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "67f07430bbc24988b6b3bc1a7d8ebb99"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "8db89d1ed1bae6e5a8c02c5b72862615"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "02b2de607351d70274f17e9ac94e15a0"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "3d4e7dbd7d9e5cf5f832c7e9337ef604"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "02949d1daed3da3dcef85fbd0d4274e2"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "d18cbec58fa7460067a4dfcd59bd2a10"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "060c563f1496118e8362f9072a68f711"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "b2c221a64356a5d81b0a901fd42f0c36"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "c7e3274242e4501a9c961be506f47e6d"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "6a276f036a254a19bfc142082f711bab"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "8242509a9b10a40c3654242a410a9f44"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "37353a0e8d8d44af698bdf6c57849f2a"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "d8912cd59b10ebe5ec77f5043d083087"
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
    "url": "assets/js/103.d1e03397.js",
    "revision": "b997fb3644326303830917327cbdb119"
  },
  {
    "url": "assets/js/104.ad4ec018.js",
    "revision": "5c286a352f0d029293e03a8c074747f4"
  },
  {
    "url": "assets/js/105.9978ba15.js",
    "revision": "f8c7ed10627d3f9ebbdba572a14ac117"
  },
  {
    "url": "assets/js/106.15c94e60.js",
    "revision": "384bf1d82dd78219dab05e67c18012ce"
  },
  {
    "url": "assets/js/107.cf8a0829.js",
    "revision": "9a32554a6e9202d1992ef29df35e2dd7"
  },
  {
    "url": "assets/js/108.3c5889a2.js",
    "revision": "13c3bf31eab1299dd63dfdfafe8e48b4"
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
    "url": "assets/js/122.4c64117c.js",
    "revision": "2eb5a67aad8234b29e224f357845a753"
  },
  {
    "url": "assets/js/123.e5e1ce93.js",
    "revision": "9b20d3bbd6806ba061a9446a1ee989c4"
  },
  {
    "url": "assets/js/124.5b0b248c.js",
    "revision": "c42e2c7686f7eac335fdc10dd57476f0"
  },
  {
    "url": "assets/js/125.08cb618d.js",
    "revision": "5d337a5bfd186ffc26194d3345c42536"
  },
  {
    "url": "assets/js/126.2e7d6492.js",
    "revision": "9c958ebf608d8a7e80610308fa124fac"
  },
  {
    "url": "assets/js/127.fffcb32f.js",
    "revision": "3a80bfbff41145ef78fd868d25f60cda"
  },
  {
    "url": "assets/js/128.349454d4.js",
    "revision": "85625db6c8e1c2000707346ce63242fa"
  },
  {
    "url": "assets/js/129.f95e06bf.js",
    "revision": "65fa92e96b4b3c0e33cf3bc34fe51e39"
  },
  {
    "url": "assets/js/13.71d9b749.js",
    "revision": "79dc831f91478f71821f6075a3bce667"
  },
  {
    "url": "assets/js/130.0f1ac1cf.js",
    "revision": "db74d3f701fa23e948625af3a0b24638"
  },
  {
    "url": "assets/js/131.685f6e1f.js",
    "revision": "97aa38ad53980704cf32397adaed01d1"
  },
  {
    "url": "assets/js/132.1fcae530.js",
    "revision": "b11d9e73476d11eab518ecf76065a357"
  },
  {
    "url": "assets/js/133.07a19088.js",
    "revision": "00c52abed38967ea454eaf431ba1bf86"
  },
  {
    "url": "assets/js/134.d743d580.js",
    "revision": "180e1c7e52dba92f62b9254725eedc69"
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
    "url": "assets/js/138.044d0f15.js",
    "revision": "9d234afdd6d3fe2c8968dd2f1fd23084"
  },
  {
    "url": "assets/js/139.45d6dc1a.js",
    "revision": "969853a28ba39d4d064d1e72fa69d5ca"
  },
  {
    "url": "assets/js/14.8c3a8afc.js",
    "revision": "e715f860f1dbbed125c6c64365703428"
  },
  {
    "url": "assets/js/140.b2d42773.js",
    "revision": "d97b98e60a5a8f98fc2ddfd33dfbb02c"
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
    "url": "assets/js/143.ad4d4060.js",
    "revision": "c3575ace68325f69087b2b1ea84360a6"
  },
  {
    "url": "assets/js/144.c13609a6.js",
    "revision": "188cdaae6e0ec6b59322ad0f37d444fc"
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
    "url": "assets/js/149.30f2a7aa.js",
    "revision": "49478d7caa0850578cd9518fec042371"
  },
  {
    "url": "assets/js/15.ec87e80a.js",
    "revision": "5fbd095255eca9c4b4fb1353ee31dd1e"
  },
  {
    "url": "assets/js/150.6fa7092a.js",
    "revision": "8f2e41758bb4cd4b8451567dade94b32"
  },
  {
    "url": "assets/js/151.9f91a5ae.js",
    "revision": "542f18076fdb4c8c66398c4ecc1db0da"
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
    "url": "assets/js/154.1a4676b2.js",
    "revision": "45f893e22fee087404233f9265cb4d1b"
  },
  {
    "url": "assets/js/155.d47d3dde.js",
    "revision": "3e9e16707d5f774491c6a4a7d25c4f35"
  },
  {
    "url": "assets/js/156.29c3b074.js",
    "revision": "45c71100a5400e516ed97a687f77dc4f"
  },
  {
    "url": "assets/js/157.259263df.js",
    "revision": "bc50ada21bcb60fcc972f692e1fa4ee4"
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
    "url": "assets/js/160.2dc50048.js",
    "revision": "f10258a0dd15314da9ec7dba3cb1d70e"
  },
  {
    "url": "assets/js/161.ba3949e7.js",
    "revision": "6bafbeea045ec6179bab3671fcd27392"
  },
  {
    "url": "assets/js/162.73827d68.js",
    "revision": "11ed26738e38b100a5f030d052b8e97e"
  },
  {
    "url": "assets/js/163.6b44308f.js",
    "revision": "dc512f4081a63caab9da893d6f20f80b"
  },
  {
    "url": "assets/js/164.a8195505.js",
    "revision": "3f73d6208f21ebf9a66c823ae73f0e91"
  },
  {
    "url": "assets/js/165.17cfa786.js",
    "revision": "85b6400310e246f225783a210fcaceba"
  },
  {
    "url": "assets/js/166.1fee10bd.js",
    "revision": "42763e29dee84ce20123f0fb95740c1b"
  },
  {
    "url": "assets/js/167.3172d15b.js",
    "revision": "ff4bdb731555d97cf6c794365699eb57"
  },
  {
    "url": "assets/js/168.dcbeae1b.js",
    "revision": "57e4f927cd1d0a4000796647f8545d7b"
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
    "url": "assets/js/170.250f4147.js",
    "revision": "200e9fe0c39713eae91aedb8307dc378"
  },
  {
    "url": "assets/js/171.4588abd5.js",
    "revision": "b78fc63f548ddf2840cd9e99c476ec7d"
  },
  {
    "url": "assets/js/172.74cb4d80.js",
    "revision": "a7a5ac3361f7fa8dd6763acfb659f18e"
  },
  {
    "url": "assets/js/173.a50853e8.js",
    "revision": "705d7fea87c726d07853bd73a5f63e84"
  },
  {
    "url": "assets/js/174.8257a8dc.js",
    "revision": "0de66bebb2fbe64b582ec7089fa6dba9"
  },
  {
    "url": "assets/js/175.66faef82.js",
    "revision": "d0612384f9b47f2d40f5c01c7b9ac9ce"
  },
  {
    "url": "assets/js/176.9f20ec12.js",
    "revision": "8f2262e71833b7e90c4bc413b4942c5f"
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
    "url": "assets/js/18.99de7daf.js",
    "revision": "0c4c73b06bb6577d820411b4f8eba814"
  },
  {
    "url": "assets/js/180.918ab8f3.js",
    "revision": "31f623652b3a0d76eb58f41ac767e50e"
  },
  {
    "url": "assets/js/181.5a2f47dd.js",
    "revision": "48ff1a09ded5d3da3722af205bba26d4"
  },
  {
    "url": "assets/js/182.229010ad.js",
    "revision": "7eb312edbef13cd3790cb3a28085ff5e"
  },
  {
    "url": "assets/js/183.c3e303a1.js",
    "revision": "eb6b81583c9871c1f30faa5b68fd5e03"
  },
  {
    "url": "assets/js/184.aee74db4.js",
    "revision": "016b4262af3e701b565bed155791fa69"
  },
  {
    "url": "assets/js/185.58e869a5.js",
    "revision": "06c48c23af12f310073aba390a05a756"
  },
  {
    "url": "assets/js/186.35428c0a.js",
    "revision": "74fd0b95e5a102a6a5874969cc7898c5"
  },
  {
    "url": "assets/js/187.934d7a8b.js",
    "revision": "4a0c048ac168cebc312f18c4a58256d5"
  },
  {
    "url": "assets/js/188.95d89ecc.js",
    "revision": "224b8ee8504fa27432be1f7197947682"
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
    "url": "assets/js/190.ba7b5cfa.js",
    "revision": "18d40346e3e4a154090bf3f5486f8885"
  },
  {
    "url": "assets/js/191.935c4549.js",
    "revision": "3ca1dd3caa8cbb359876d973d748fc6e"
  },
  {
    "url": "assets/js/192.7f6e6806.js",
    "revision": "ace5e84cb450e8e0c2c70ce8dd8038ac"
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
    "url": "assets/js/26.fe68b077.js",
    "revision": "560764455e67d5bf6b1f4c43b9a2f3e2"
  },
  {
    "url": "assets/js/27.04bfe5a7.js",
    "revision": "af57e024ba17d1c5d3e8c1475cea1925"
  },
  {
    "url": "assets/js/28.47ebb86f.js",
    "revision": "2fe19a93bd791683af8219778995691b"
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
    "url": "assets/js/30.36ba599e.js",
    "revision": "1d441103a28e233893a1dc308283a14e"
  },
  {
    "url": "assets/js/31.8a665781.js",
    "revision": "e472a08a875c70c8226254b39f90f6bf"
  },
  {
    "url": "assets/js/32.4125cd77.js",
    "revision": "5270c9efc052d48e0cc4a4780d17e3e5"
  },
  {
    "url": "assets/js/33.6faae56f.js",
    "revision": "b444b1797690777cfd8968e84ca986db"
  },
  {
    "url": "assets/js/34.df9e3db7.js",
    "revision": "2d0091df67b7a16c21a578a9167a9ca4"
  },
  {
    "url": "assets/js/35.24b5cd4a.js",
    "revision": "48184cd03912261732cd786d8053f75b"
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
    "url": "assets/js/39.1518f094.js",
    "revision": "6c560263a2ee708efa708af434ddab52"
  },
  {
    "url": "assets/js/4.1b9dad4e.js",
    "revision": "e41fdc12989274270a7bc4b44ead54ae"
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
    "url": "assets/js/42.a5189b82.js",
    "revision": "9943a8e0b4e1bdbc4d746a9790f22571"
  },
  {
    "url": "assets/js/43.029a9e7a.js",
    "revision": "5e8b1148525660e59171eccb0f03b9d0"
  },
  {
    "url": "assets/js/44.fd3f21e5.js",
    "revision": "d99559fad2b2048a0fc6352d6b5fb90d"
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
    "url": "assets/js/49.8a61149f.js",
    "revision": "e514f8af1d89bc5512536d192efe71d6"
  },
  {
    "url": "assets/js/5.e38a005a.js",
    "revision": "88d61af86655ba0f77a2eb1d00bbe81b"
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
    "url": "assets/js/58.34ef8e65.js",
    "revision": "be80157c0b6991a77fad0b012bd2e940"
  },
  {
    "url": "assets/js/59.80ca92d2.js",
    "revision": "3fab382575bccf2d33915e5f55760e22"
  },
  {
    "url": "assets/js/6.8c68cd55.js",
    "revision": "e4ee40a692eb8747dd774a73f4ca29cb"
  },
  {
    "url": "assets/js/60.039cba37.js",
    "revision": "472e9212b07ee2855cfb3801a373f243"
  },
  {
    "url": "assets/js/61.df8030da.js",
    "revision": "5da3433d16308ef377d8d21c26792d63"
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
    "url": "assets/js/76.0cbf4894.js",
    "revision": "5b5761a7e4601367be5122c27a834444"
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
    "url": "assets/js/79.06a41643.js",
    "revision": "db19f9e8e161803c97789ff98f22097b"
  },
  {
    "url": "assets/js/8.49b39b40.js",
    "revision": "5be41fa0cb432cdc48a471bee774b784"
  },
  {
    "url": "assets/js/80.78037ac8.js",
    "revision": "4acf91e619a5ac56ed4c686ba4faccd5"
  },
  {
    "url": "assets/js/81.dbe0db3d.js",
    "revision": "27e90cafb4bf6232de24b7145edcfb6c"
  },
  {
    "url": "assets/js/82.ec4924a9.js",
    "revision": "99a099c4239e9ad26495a5399450b616"
  },
  {
    "url": "assets/js/83.e3fd09f3.js",
    "revision": "2b8270845c7212980cdffadb6d1f2c0a"
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
    "url": "assets/js/88.6107d3e7.js",
    "revision": "d243d54a19d2be326ecccdbb9d19e1e3"
  },
  {
    "url": "assets/js/89.46c7d53f.js",
    "revision": "3eb77a2d6b652a06f9bd5e2e70896afd"
  },
  {
    "url": "assets/js/9.a6ec67f3.js",
    "revision": "dc21d3cc91f8802f808d511b31633df9"
  },
  {
    "url": "assets/js/90.d969980b.js",
    "revision": "d6b739d04e05ffe8e05aba6679d98dcd"
  },
  {
    "url": "assets/js/91.cd95349f.js",
    "revision": "b5aa01bf8598e11ca43b1c605d4985f3"
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
    "url": "assets/js/94.045a49d3.js",
    "revision": "55884942e485e640500486fb4c26046c"
  },
  {
    "url": "assets/js/95.a9ed630c.js",
    "revision": "edc6155ac1e722e74811c6622ab03c08"
  },
  {
    "url": "assets/js/96.d9d2a03d.js",
    "revision": "a2d6dbe41bd12a075d057f06ec9dbba3"
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
    "url": "assets/js/app.a1e65bf8.js",
    "revision": "ff0a91342bbadf314d10131ee605f64a"
  },
  {
    "url": "assets/js/vendors~flowchart.ed6a2ace.js",
    "revision": "31653e56a4c48d3044ff4d65406712b2"
  },
  {
    "url": "base/3.js/9.eventloop.html",
    "revision": "9355b9fc49a36ecce11620041a3173f3"
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
    "revision": "dc05689337bcd51a63c7e53b44ec144c"
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
