_satellite.pushAsyncScript(function(event, target, $variables){
  var trackingid = _satellite.getQueryParam('trackingid'),
    sdid = _satellite.getQueryParam('sdid'),
    promoid = _satellite.getQueryParam('promoid'),
    trackingidQueryParamPresent = (trackingid === undefined) ? false : true,
    sdidQueryParamPresent = (sdid === undefined) ? false : true,
    promoidQueryParamPresent = (promoid === undefined) ? false : true,
    tid = _satellite.readCookie('TID'),
    tidPieces = [];

if (sdidQueryParamPresent || 
    trackingidQueryParamPresent || 
    promoidQueryParamPresent) {

    tidPieces = tid.split('-');

    // trackingid
    if (!trackingidQueryParamPresent) {
        trackingid = tidPieces[0];
    }

    // sdid
    if (!sdidQueryParamPresent) {
        sdid = tidPieces[1];
    }

    // promoid
    if (!promoidQueryParamPresent) {
        promoid = tidPieces[2];
    }

    _satellite.setCookie('TID', trackingid + '-' + sdid + '-' + promoid, 120);
}
});
