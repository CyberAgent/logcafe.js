var should = require('should');

var requirejs = require("requirejs");

var path = require('path');

var baseUrl = path.dirname(__dirname);

requirejs.config({
    baseUrl: baseUrl,
    nodeRequire: require,
    waitSeconds: 300,
    paths: {}
});

describe('logging test', function() {
    it('require test', function() {
        var LogCafe = require('../logcafe');
        LogCafe.VERSION.should.be.ok;
    });
    it('require test', function(done) {
        requirejs(['logcafe'], function(LogCafe) {
            var logCafe = new LogCafe();

            var conf = {
                level: 'DEBUG',
                separator: ', '
            };
            logCafe.setConfigure(conf);
            var log = logCafe.getLogger('logcafe');
            log.info('logger succesfully got');

            done();
        });
    });
    it('exclude', function(done) {
        requirejs(['logcafe'], function(LogCafe) {
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
            done();
        });
    });
});
