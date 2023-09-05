/////////////////////////////////////////////////////////
/*! isFrozenUA
    A freeze-test for your user-agent string
    https://github.com/faisalman/ua-is-frozen
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
////////////////////////////////////////////////////////

/*
    # Reference:
    https://www.chromium.org/updates/ua-reduction/

    # Desktop
    ---
    Format:
    Mozilla/5.0 (<unifiedPlatform>) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/<majorVersion>.0.0.0 Safari/537.36

    Possible <unifiedPlatform> values:
    - Windows NT 10.0; Win64; x64
    - Macintosh; Intel Mac OS X 10_15_7
    - X11; Linux x86_64
    - X11; CrOS x86_64 14541.0.0
    - Fuchsia 

    # Mobile & Tablet: (except iOS/Android WebView)
    ---
    Format:
    Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/<majorVersion>.0.0.0 <deviceCompat> Safari/537.36
    
    Possible <deviceCompat> values:
    - "Mobile"
    - "" (empty string for Tablets & Desktop)
*/

function isFrozenUA(ua: string): boolean {
    return /^Mozilla\/5\.0 \((Windows NT 10\.0; Win64; x64|Macintosh; Intel Mac OS X 10_15_7|X11; Linux x86_64|X11; CrOS x86_64 14541\.0\.0|Fuchsia|Linux; Android 10; K)\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0 (Mobile )?Safari\/537\.36/.test(ua);
}

export { isFrozenUA };