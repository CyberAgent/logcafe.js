/**
 * @name index.js<spec/index>
 * @author Kei Funagayama <funagayama_kei@cyberagent.co.jp>
 * copyright (c) Cyberagent Inc.
 * @overview TestCase: ./logcafe.js
 */

define(['index'], function(LogCafe){
    return function() {
        describe('logcafe.js', function(){
            it('basic', function() {
                var logcafe = new LogCafe({
                    level: 'TRACE',
                    separator: ' '
                });
                var log = logcafe.getLogger('#1');
                log.info("aaa", "bbb");
            });
        });
    };
});
