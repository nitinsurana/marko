exports.check = function(markoCompiler, expect, snapshot) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname, require("fs"));

    var attrNames = [];

    lookup.forEachAttribute("foo", attr => {
        attrNames.push(attr.name);
    });

    snapshot(attrNames, ".json");
};
