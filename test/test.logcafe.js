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
});
