/**
 * @name index.js<spec/index>
 * @author Kei Funagayama <funagayama_kei@cyberagent.co.jp>
 * copyright (c) Cyberagent Inc.
 * @overview TestCase: ./logcafe.js
 */

define(['index'], function(LogCafe){
    return function() {
        describe('logcafe.js', function(){
            it('VERSION', function() {
                LogCafe.VERSION.should.be.ok;
                //console.log(LogCafe.VERSION)
            });
            it('basic', function() {
                var logcafe = new LogCafe({
                    level: 'TRACE',
                    separator: ' '
                });
                var log = logcafe.getLogger('basic');
                log.info("basic");
            });
            it('exclude', function() {
                var logcafe = new LogCafe({
                    level: 'TRACE',
                    separator: ' ',
                    excludes: [
                        'a0',
                        'a1.b'
                    ]
                });
                logcafe.getLogger('a0.b.c').info("a0.b.c");
                logcafe.getLogger('a1.b.c').info("a1.b.c");
                logcafe.getLogger('a2.b.c').info("a2.b.c");
            });
        });
    };
});
