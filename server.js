const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
let port = process.env.PORT || 8080;
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port, function(){
    console.log('Server listn on port ' + port);
});