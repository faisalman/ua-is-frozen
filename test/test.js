const { isFrozenUA } = require('../dist/cjs');
const assert = require('assert');

describe('isFrozenUA()', () => {
    describe('Returns `true` for frozen user-agent', () => {

        it('Chrome browser', () => {
            // Chrome browser
            const freezedWindowsUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Safari/537.36";

            assert.strictEqual(isFrozenUA(freezedWindowsUA), true);

            const freezedMobileUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36";
            const freezedTabletUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Safari/537.36";

            assert.strictEqual(isFrozenUA(freezedMobileUA), true);
            assert.strictEqual(isFrozenUA(freezedTabletUA), true);
        });
        
        it('Other Chrome-based browsers', () => {
        
            const freezedEdgeUA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54";

            assert.strictEqual(isFrozenUA(freezedEdgeUA), true);
        });
    });

    describe('Returns `false` for non-frozen user-agent', () => {
        
        it('Old version of Chrome browser', () => {

            const regularWindowsUA = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Safari/537.36";
            const regularMobileUA = "Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36";
            const regularTabletUA = "Mozilla/5.0 (Linux; Android 9; SM-T810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Safari/537.36";

            assert.strictEqual(isFrozenUA(regularWindowsUA), false);
            assert.strictEqual(isFrozenUA(regularMobileUA), false);
            assert.strictEqual(isFrozenUA(regularTabletUA), false);
        });

        it('Other Non-Chrome browsers', () => {
            const firefoxUA = "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0";
            assert.strictEqual(isFrozenUA(firefoxUA), false);
        });
    });
});