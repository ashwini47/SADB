import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello  nOW!" );
} );
app.get( "/customers", ( req, res ) => {
    res.send( "Customer  now" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server starti  ng at http://localhost:${ port }` ) ;
 

} );