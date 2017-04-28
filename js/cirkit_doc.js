$(".toc .links").hide();
$(".toc").mouseenter( function( ev ) {
  $(".toc .links").show( 250 );
} );
$(".toc").mouseleave( function( ev ) {
  $(".toc .links").hide( 250 );
} );
