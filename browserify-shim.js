var shims = {
    "canjs": {
        "exports": "can",
        "depends": {
            "jquery": "jQuery"
        }
    }
};

[
    "canjs/construct/proxy.js",
    "canjs/construct/super.js",
    "canjs/fixture.js",
    "canjs/list/promise.js",
    "canjs/list/sort.js",
    "canjs/map/define.js",
    "canjs/map/validations.js",
    "canjs/route/pushstate.js",
    "canjs/stache.js"
].forEach(function(file){
    shims[file] = {
        "depends": {
            "canjs": "can"
        }
    };
});

module.exports = shims;
