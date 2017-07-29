module.exports = function(app){
    var systemInfo = require('./agentControllers/systemInfo');
    app.get('/heartbeat', systemInfo.getCurrentTime);
    app.get('/storage', systemInfo.getStorageInfo);
}