const potrace = require( "potrace" );
const fs = require( "fs" );

potrace.trace( "web/handwritting_sample.png", {
	optCurve: false,
}, function( err, svg ) {
	if( err ) {
		console.log( "Error:", err );
	}
	else {
		fs.writeFileSync( "./output.svg", svg );
		console.log( "Done!" );
	}
});

require( "webwebweb" ).Run( 20710 );
