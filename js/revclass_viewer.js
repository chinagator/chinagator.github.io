// from http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var vars = getUrlVars()["vars"];
var cls = getUrlVars()["cls"];
var repr = getUrlVars()["repr"];

$("#header").html("Reversible Circuit Classification [" + cls.toUpperCase() + "-" + vars + " " + repr.split('') + "]");

$.getJSON( "json/revclass.json", function( data ) {
    var vars = getUrlVars()["vars"];
    var cls = getUrlVars()["cls"];
    var repr = getUrlVars()["repr"];
    var ecls = _.select( data[vars][cls], function( c ) { return c["repr"] == repr; } )[0];
    _.each( ecls["circuits"], function( c ) {
        $(".revclass-grid").append( '<div class="grid-item"><a href="https://documents.epfl.ch/users/s/so/soeken/www/revclass/' + c["perm"] + '.real"><img src="https://documents.epfl.ch/users/s/so/soeken/www/revclass/' + c["perm"] + '.png" border=""/></a><div class="perm">' + c["perm"] + '</div></div>' );
    } );
} );
