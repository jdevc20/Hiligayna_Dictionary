const mongoose = require('mongoose');

/*const uri = 'mongodb+srv://johndavecamarin20:1DMBwwfGMc0bGULD@cluster0.dpkg4zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';*/
const uri = 'mongodb://localhost:27017'
const mongoDbConfig = async () => {
    try {
        await mongoose.connect(uri, { });
        console.log('MongoDB Connected…');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = mongoDbConfig;
