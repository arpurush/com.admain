exports.getLastStartTime = function(req, res){
    
    res.send({"lastStartTime" : "12:00:00"});
    
}

/*var driver, ssh;

driver = require('node-ssh');

ssh = new driver();

ssh.connect({
  host: 'localhost',
  username: 'steel',
  privateKey: '/home/steel/.ssh/id_rsa'
})
.then(function() {
  // Source, Target
  ssh.putFile('/home/steel/.ssh/id_rsa', '/home/steel/.ssh/id_rsa_bkp').then(function() {
    console.log("File Uploaded to the Remote Server");
  }, function(error) {
    console.log("Error here");
    console.log(error);
  });
  // Command
  ssh.exec('hh_client', ['--check'], { cwd: '/var/www/html' }).then(function(result) {
    console.log('STDOUT: ' + result.stdout);
    console.log('STDERR: ' + result.stderr);
  });
});*/