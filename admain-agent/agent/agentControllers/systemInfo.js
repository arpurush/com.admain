exports.getCurrentTime = function(req, res){
    
    var param = req.body.systemParam;
    var systemInfo = require('../lib/runSystemCmds');
    var currTime = systemInfo.runCmd("date");
    res.json({ "currentTime" : currTime});
    //res.send({"total storage": totalStorage, "used storage" : usedStorage});
    
}

exports.getStorageInfo = function(req, res){
    
    var param = req.body.systemParam;
    var systemInfo = require('../lib/runSystemCmds');
    var storageOut = systemInfo.runCmd("df -h");
    res.send("System Info - " + storageOut);
    //res.send({"total storage": totalStorage, "used storage" : usedStorage});
    
}
