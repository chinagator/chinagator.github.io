function generate_permutation() {
    // get permutation
    var perm = [];
    $("#exl-permutation").children(".exl-digit").each(function () {
        perm.push( parseInt( $(this).text() ) - 1 );
    });

    // get different positions
    var vars = ["", "a", "b", "c", "d"];
    var pos1 = [];
    var pos2 = [];
    var distance = 0;
    var cubea = [];
    var cubeb = [];
    for ( v = 1; v <= 4; ++v ) {
        var a = $("#digit-a" + v).data( "state" );
        var b = $("#digit-b" + v).data( "state" );
        if ( a != b ) {
            pos1.push( v - 1 );
            distance += 1;
        }
        switch ( a ) {
            case 'p': cubea.push( "<i>" + vars[v] + "</i>" ); break;
            case 'n': cubea.push( "<i class='exl-neg'>" + vars[v] + "</i>" ); break;
            case 'o': cubea.push( '' ); break;
        }
        switch ( b ) {
            case 'p': cubeb.push( "<i>" + vars[v] + "</i>" ); break;
            case 'n': cubeb.push( "<i class='exl-neg'>" + vars[v] + "</i>" ); break;
            case 'o': cubeb.push( '' ); break;
        }
    }
    for ( i = 0; i < distance; ++i ) {
        pos2[i] = pos1[perm[i]];
    }

    // compute link sequence
    var link = [];
    for ( i = 0; i < distance; ++i ) {
        var current = cubeb.slice();
        var a = $("#digit-a" + ( pos2[i] + 1 )).data( "state" );
        var b = $("#digit-b" + ( pos2[i] + 1 )).data( "state" );
        if ( a == "p" && b == "n" ) { current[pos2[i]] = ""; }
        if ( a == "p" && b == "o" ) { current[pos2[i]] = "<i class='exl-neg'>" + vars[pos2[i] + 1] + "</i>"; }
        if ( a == "n" && b == "p" ) { current[pos2[i]] = ""; }
        if ( a == "n" && b == "o" ) { current[pos2[i]] = "<i>" + vars[pos2[i] + 1] + "</i>"; }
        if ( a == "o" && b == "p" ) { current[pos2[i]] = "<i class='exl-neg'>" + vars[pos2[i] + 1] + "</i>"; }
        if ( a == "o" && b == "n" ) { current[pos2[i]] = "<i>" + vars[pos2[i] + 1] + "</i>"; }
        for ( j = i + 1; j < distance; ++j ) {
            current[pos2[j]] = cubea[pos2[j]];
        }
        term = current.join( "" );
        if ( term == "" ) {
            term = "1";
        }
        link.push( term );
    }

    $("#exl-result").html( "The result is " + link.join( " &oplus; " ) );
}

$(".exl-digit").click( function() {
    var state = $(this).data( "state" );
    switch ( state ) {
    case "p":
        $(this).css( "text-decoration", "overline" );
        $(this).data( "state", "n" );
        break;
    case "n":
        $(this).css( "text-decoration", "none" );
        $(this).text( "" );
        $(this).data( "state", "o" );
        break;
    case "o":
        $(this).text( $(this).data( "var" ) );
        $(this).data( "state", "p" );
        break;
    }

    // evaluate differences
    var distance = 0;
    for ( v = 1; v <= 4; ++v ) {
        var a = $("#digit-a" + v);
        var b = $("#digit-b" + v);
        if ( a.data( "state" ) != b.data( "state" ) ) {
            a.css( "background-color", "orange" );
            b.css( "background-color", "orange" );
            distance += 1;
        } else {
            a.css( "background-color", "#f5f5f5" );
            b.css( "background-color", "#f5f5f5" );
        }
    }
    $("#exl-distance").text( distance + "." );

    // permutation widget
    $("#exl-permutation").empty();

    for ( p = 1; p <= distance; ++p ) {
        $("#exl-permutation").append( "<div class='exl-digit'>" + p + "</div> " );
    }

    generate_permutation();
} );

$("#exl-permutation").sortable({
    update: function( event, ui ) {
        generate_permutation();
    }
});
