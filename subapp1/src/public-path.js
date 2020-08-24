(function () {
  console.log('process ', process.env)
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}/`
      return
    }
    // __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    // eslint-disable-next-line
    __webpack_public_path__ = `${process.env.BASE_URL}/`
  }
})()
