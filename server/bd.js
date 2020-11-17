const mongoose = require('mongoose');
const app = require('./app');
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ferremateriales')
        .then(() => {
            console.log("Connected to ferremateriales...");
            app.listen(port, () => {
                console.log("Server running on localhost: 3000...");
            });
        })
        .catch(err => console.log(err));