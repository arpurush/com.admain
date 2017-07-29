module.exports = function(app){
    var systemInfo = require('./controllers/systemInfo');
    app.get('/lastStartTime', systemInfo.getLastStartTime);
    app.get('/storage', systemInfo.getStorageInfo);
}