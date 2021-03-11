const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_Asus:online23@redsocialmean.ckcgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;
