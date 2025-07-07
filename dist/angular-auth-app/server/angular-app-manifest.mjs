
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-65DL5T3H.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A4JRVESO.js"
    ],
    "route": "/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: 'e6ca1c8d889dbbe03e8a89c6d2e0fa8b9b9baf3fcabad56e13097039839a0c88', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '88364b3f1cf0efebd7f4dc130f2e64adf09d9ac6f8b1615d01b90e4f0efef344', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1602, hash: '821aa24d9f6113a61fc83874f8b9928489082613d8116d91c4ffaaee98fcb345', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 1602, hash: 'd8048adbf28f6fc1651471a9f73c49a7ec25529663d5706356aa9be645f93cb1', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
