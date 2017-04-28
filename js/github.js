$.getJSON( "https://api.github.com/repos/msoeken/cirkit/commits", function( data ) {
    for ( var i = 0; i < 10; ++i ) {
        var msg = data[i].commit.message;
        var author = data[i].commit.author.name;
        var time = jQuery.timeago( data[i].commit.author.date );
        var url = data[i].html_url;
        $("ul#commits").append( '<li class="list-group-item"><p>' + msg + '</p><p><b>' + author + '</b> <a href="' + url + '" target="_blank">comitted ' + time + '</a></p></li>' );
    }
} );
