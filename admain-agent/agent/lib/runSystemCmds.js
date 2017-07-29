var sys = require('sys')
var exec = require('child_process').exec;
//var execSync = require("execSync");
var shell = require("shelljs");
var child;

exports.runCmd = function(cmd) {
    var cmdOut;
    var cmdErr;
    var error;
    cmdOut = shell.exec(cmd);
    // child = exec(cmd, function(error, cmdOut, cmdErr) {
    //     sys.print('stdout: ' + cmdOut);
    //     sys.print('stderr: ' + cmdOut);
    //     if (error !== null) {
    //         console.log('exec error: ' + error);
    //     }
    //     console.log(cmdOut);
    // });
    return(cmdOut);
}