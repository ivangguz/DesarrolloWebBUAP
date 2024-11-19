const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
