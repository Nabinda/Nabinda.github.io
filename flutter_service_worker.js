'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9d6bf017dc156df261237635350114dc",
".git/config": "ce8238610a4cf835c70db429c0ecca7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ebe2c93a3d149105b877c97b090458a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3244ce0a0a1bb3906f420452bb4692f0",
".git/logs/refs/heads/main": "0fc32f3f5c725e34d1f0b1b473d75f84",
".git/logs/refs/remotes/origin/main": "af9a4ae54de120a0cc5f27fabced62c5",
".git/objects/03/c931aff55e25827daa5a49e9b78a9a5d799a7c": "324590c289ae9a11a585fb98c5d8052d",
".git/objects/10/2a3a9c87346c66a8374310b157cbf515227c49": "e128130e2eb55d32b18705e9bf8c7423",
".git/objects/13/49cde46705700b0a4e2e90a208c6e212efe99a": "b095d8e98d695c4666bea72cfa62c151",
".git/objects/13/cf6a22ba762d8742c3ed254ece78e0d50e8d83": "e1ac7bc6ee4809454583e3324078ea90",
".git/objects/23/2ecd8bee267521b5440be4f88d157d95f89adc": "95e5923bbc6c532901291c0c68206894",
".git/objects/25/c2e45e946bebf5d3a98d2e7b9c228210407bd3": "abf6b743101f03a5c0961688c49aa5c9",
".git/objects/2d/509ab94c0f654fc65defe2157a266e4eb2f214": "1c44d74c5f680bd121e1b85d8160ee48",
".git/objects/2e/c8255f23b9db8f71821186eaf42179734d0421": "f3bb68d3cc479c6763f9aef99ea17125",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c57752bd30dbbe1c16cce01c8ca1899f3cf84e": "6b6eebee58ec9d04dd7cdd24f7a5d2d3",
".git/objects/3f/c01ee5fd939dbd561dc7908ad6d0de65427f9e": "d2fe149bcad500f9680455fcab0bc330",
".git/objects/41/e4fed35ae329a7a025cad720ab500467299644": "d100d41efd8ded686e7c54fb883720f2",
".git/objects/42/a0b4dc165dd59d1f96ab44a206305119aa59a5": "b19b6cb06e4585825fab5850b9826596",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/3e11e59bb75a6352417e11576b1a742eb3df01": "ea0df279711770ac98747c4d219090ae",
".git/objects/50/ed2ffda960fc99d0671b0c457fad33c150e205": "bd0d68212795bb674cdd00b988a40e8c",
".git/objects/56/71d6248c9fc681fca2e55d56e3c9e406fe9e96": "c2404ba1f8acca0ea3954ec53e340d97",
".git/objects/5b/2dddd5837d804becaefc5c073255bbc1b3d5c0": "c3d988fc80abe40c71f80615840ed465",
".git/objects/5e/b5bc2d0f1895659d7679cc1947615074eba91e": "65cd09fbe501e84b8b5d32f73bf15444",
".git/objects/5e/fc98a642341687fc48d7860b27b5386b927c78": "b7cd6be69a9553ead82ad1290da786a0",
".git/objects/5f/7bf57837df73441556f09e941455901a735067": "a293c387f25e7ec6922cc1140c57e108",
".git/objects/61/78221ac685f6db60fdd388b46c6f4429c58b95": "b020bdec40cb91b3b6a5137c2597dcb3",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/69/b998729b47b3ff9ada90630ba28d5ba3fd4d54": "96fbd912f725ede971615b4fdcbdcdb3",
".git/objects/69/e2b8ee65a66ede38443fbdabeee12a1dfdb3d1": "27704cf9cc46d454268b6c5c9a7cc654",
".git/objects/72/6f8d95883c2ac452554cd118a9f175d7c1ebe7": "6dac4dfda907e6512ee8bbee71c93b34",
".git/objects/74/7ab9546da4c13bafa9b3a31f876c3967b43a4d": "0716a52332ab344a0235d919765afd65",
".git/objects/78/7016797ca92b55872aad7c82eed1a80f59c590": "6352e09288ff93784ea266e07bee1830",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/93e67a658331e7f7378f5c16f2bd60071ba4bc": "fab1a91ba776600468d0e972a182b70c",
".git/objects/7d/3716a1e24552ef1f83e7301db94ffefed4b898": "9eaa1179a9b891ca1e43b010990f571f",
".git/objects/7e/9af191a5053cec52219e2044cc31822564eb0c": "651c5d96328cf7193dad3b94814e55ef",
".git/objects/7f/92b8dc668595325287e3194487ff97958802e0": "d75c10230726d988238e2b0d97c4c369",
".git/objects/81/4e00b320294ae8baf77e91258698d04536c694": "92e8139e0cffbaacc1c9bf601fe0c0af",
".git/objects/86/f490c74085a5207224bfad810f70bfba944e59": "7bfdd70ccdcfd9957845a17bae8ee8f7",
".git/objects/87/789f1e3ef34bd2bbd610e541dd7086ca0f8fd1": "62d9c4ea455d8d10fa43eef129105cb5",
".git/objects/87/d3db100c040c9f0ccd6c276ae15d4f571641f0": "d84285d489b3835712189f7a4b7cf517",
".git/objects/88/c4b09d9f8db201ef67304d16065564c1a31fea": "8cbf2e07609cd77a12f864aeb59320c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ec6f34e77ee8b59e8c851d33a12814cdb8944c": "e3eb9d70f1573cfe8f5117a6b8ffd371",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ed45edfdc38ea1fa670fb60f85828ef4f5e875": "87dd46da7e6055abeaebb4f95ec96b70",
".git/objects/94/73e4bf7c5a6c90f045f37257f0f3bd4213d401": "e5169adbb895e37f324c96c4e53ccaa7",
".git/objects/95/06ab1ee5dd260dbcc0e72ffbdf48c1256c7a5c": "d6f3710d408ea7be81a4fb93983d003e",
".git/objects/9e/4d1dd35dddc2218bcb24f4245fb04d62f2f962": "d699316e8eec3f9a1fc9791065801f13",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/65fb12d68ea2744111de6c6de891b01acf512a": "85e1c04b52fe60688bbccfc76b3e1bc7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/621402a3b665fbbf00895e45e3d705447f61af": "cd8e04b326d82ac8828d0ecbdd2d2503",
".git/objects/a9/a1003d3991fa6202213c66d880c97a1116b6b4": "dbe58281c940e8ccc92c1122a613b58a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d725ab1d58620a846aa5f6b90b5410c4e17d0a": "919383b02fab04873ea6567bb7fc5a5f",
".git/objects/b3/800564e3fb3df5ae1c8197f0945c2fcb6caf60": "723aafb36545776bc1666abc2b69ccb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7390ae3038ac327ba2efcc8e095fb6ac1e0e47": "9e3504d4f77cd71303be0ad9b13a6caa",
".git/objects/be/d99bc44b57346294eadfd83c95700e143b6996": "be39572319ea6cb4fc8347407beedc5d",
".git/objects/c1/1221a26409af0e3167cb5aae0e3d1edd80ef6e": "1c3ac2b617467da9c5131e81056cb7b9",
".git/objects/c6/b5d85c3b23e4efbd47cd04aedf1ea7b6b09412": "f2ef6b20087a76276b421c58f8453287",
".git/objects/c6/b5f6f85682bec8e5669926df02272a95c0ec0b": "d4375d842c4796ce26a158a2768712f9",
".git/objects/d4/5e466b9193665d8e7f2f0969a1f83a2fcd9ae8": "825fcb2c0e7122d49328f37b92c66f8d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/a00297426a8a1f67df2cacdbf3f5ace4e141b6": "23ad02384b6b32f5dedfc5fabd7c3d3c",
".git/objects/db/739405cf20f97ac4ae351556ea4a1ee64103ed": "7b0f8acbdd726a288925410cbbb9a12e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/67b19280056eec7fbb0321d015a71c530bd16c": "1c8c67a1c593f37689409f862091c5f0",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f8/5c0888c286bfc339719b8a7c7963278cf085ef": "a2cdc2d99393e3d2f1f0aa6df3464f1e",
".git/objects/fb/5715c5441129c9cff9b8573af459d70c11b3ac": "65b8455bf8b090f9094124b8c98aa412",
".git/refs/heads/main": "b53cec4861ef71c53644802b94d25112",
".git/refs/remotes/origin/main": "b53cec4861ef71c53644802b94d25112",
"assets/AssetManifest.json": "86b795f674d3a2f13f6554d911c7d56b",
"assets/assets/images/about-me.jpg": "4971872401a190ac03ea93d0a7e2873e",
"assets/assets/images/cv.png": "31f1920b65d640d5e577cba6b270986c",
"assets/assets/images/fb.png": "03a7c0ea530ab353abbad4163b41215b",
"assets/assets/images/gallery.png": "09c30c795426678aff40abb961c3972b",
"assets/assets/images/github.png": "16c7976f113e87fd260f2167cbafbcae",
"assets/assets/images/insta.png": "cf674abf3dd55b41bee7389c4225a7a4",
"assets/assets/images/linkedin.png": "22768c14ad8687c625f982d79a946238",
"assets/assets/images/logo.png": "c259dcdd4e2dda22450cd3c14c86a608",
"assets/assets/images/profile.png": "8586069967a531891b2f29ce396bd18f",
"assets/assets/images/quote.png": "557f20138181e10f865cccff5a8cc56b",
"assets/assets/images/skills.png": "467ea12ece871f0f51676c1cd77429c9",
"assets/assets/images/social_icon.png": "8c3a24ae10c71d751c34404f65963821",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "93cae78cba8248d96a153fe0f07549bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "c4a9d603b7c10b8253d51bb43dda112b",
"icons/Icon-192.png": "e7114dab84422b4b8d1a94a6318bdf45",
"icons/Icon-512.png": "870966d631d7dc6fc37db5d7a532423a",
"icons/Icon-maskable-192.png": "e7114dab84422b4b8d1a94a6318bdf45",
"icons/Icon-maskable-512.png": "870966d631d7dc6fc37db5d7a532423a",
"index.html": "9f74a67cb706b2e9f85c754ddb0f1362",
"/": "9f74a67cb706b2e9f85c754ddb0f1362",
"main.dart.js": "c31c07be87344e9076304c7dc9fecae6",
"manifest.json": "45fdae082728130bc78a85c19989395e",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
