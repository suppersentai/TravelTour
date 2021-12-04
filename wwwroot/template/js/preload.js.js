if (
    typeof window['OptiMonk'] !== "object"
    || typeof window['OptiMonk']['preloadInitialized'] !== "boolean"
) {
    if (window.OptiMonk && window.OptiMonk.config) {
      window.OptiMonk = {config: window.OptiMonk.config}
    } else {
      if (false && !window.OptiMonk) window.OptiMonk = {};
      else if (!false) window.OptiMonk = {};
    }

    OptiMonk.isSPA = false;
    OptiMonk.experimentalSettings = {};

    

    window.OptiMonkRegistry = {
        account: 70697,
        jfJsScriptUrl: 'https://gs-cdn.optimonk.com/jfclientsdk/latest/jfclientsdk.min.js?ts=12',
        pncJsScriptUrl: '//storage.googleapis.com/om-pnc-builds/main.js',
        baseUrl: 'https://front.optimonk.com',
        contentUrl: 'https://cdn-content.optimonk.com',
        staticUrl: 'https://front.optimonk.com',
        beUrl: 'https://backend.optimonk.com',
        assetsPath: 'https://cdn-asset.optimonk.com/',
        assetsVersion: '213',
        fileVersions: {"intlTelInput.min.js":"d0ca14b56a","flatpickr.min.css":"999cc26450","lumira.min.js":"8ff2adf0d1","optimonk.min.css":"b2efbc5949","flatpickr.min.js":"ceeb92e1d5","polyfills.min.js":"c118bb965a","shopify-preload.min.js":"abeb891d2f","shoprenter-preload.min.js":"24660310bd","monisha.min.js":"ce9d6dea88","shalisha.min.js":"358ed094db","preload-spa.js":"01e99819f5","site-info.js":"2938803e89","load.js":"3d9058d207","preload-base.js":"b0037705ce","swiper.js":"2f6ba12fb0","popup.min.js":"291cd783fd","om.base.css":"a2fd24afe1d458632f15"},
        activatedCampaigns: {"popup": false, "sidebar": false, "nanobar": false, "embedded": false},
        queuedCampaigns: {"popup": false, "sidebar": false, "nanobar": false, "embedded": false},
        mobileExitCampaigns: [],
        externalValidators: {},
        uuid: (function () {
            function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
        })(),
        needSiteInfo: false,
        shouldStoreClientCookie: false,
        needClientId: true,
        isMobile: 0,
        reportLvp: true,
        experiment: null,
        jfIDBStoreEnabled: false,
        shouldSendTimeSpentOnPage: false,
        shouldMeasureNetwork: false,
        getStaticUrlFor: getStaticUrlFor,
        getAssetUrlFor: getAssetUrlFor,
        isBrowserTabNotificationEnabled: false,
        logImpressions: false,
    };
    /* Namespace */
    function ns(n){for(var i=n.split("."),o=window,r="",t=0,d=i.length;t<d;t++)o[r=i[t]]=void 0===o[r]?{}:o[r],o=o[r];return o}

  function getFileVersion(filePath) {
      var pathParts = filePath.split('/')
      var fileName = pathParts[pathParts.length - 1]
      return OptiMonkRegistry.fileVersions[fileName]
        ? '?v=' + OptiMonkRegistry.fileVersions[fileName]
        : ''
  }
    function getStaticUrlFor(filePath) {
      return OptiMonkRegistry.staticUrl + filePath + getFileVersion(filePath);
    }
    function getAssetUrlFor(filePath) {
      return OptiMonkRegistry.assetsPath + filePath + getFileVersion(filePath)
    }

    var omPreloadScript = document.createElement('script');
    omPreloadScript.src = OptiMonkRegistry.getStaticUrlFor('/preload-base.js');
    document.body.appendChild(omPreloadScript);
}
