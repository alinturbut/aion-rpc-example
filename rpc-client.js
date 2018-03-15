var rpc = require('node-json-rpc');

var options = {
  port: 8545,
  host: '127.0.0.1',
  path: '/',
  strict: true
};

var client = new rpc.Client(options);

//validateaddress call
client.call(
  {"jsonrpc": "2.0", "method": "validateaddress",
  "params": ['0x048cacb1e61fdd56e3ddd42bc5a2f4e86c4f6a8966d655a53b03a6e58fc8fab7'], "id": 0}, function(err, res){
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });

//getbalance call
client.call(
  {"jsonrpc": "2.0", "method": "eth_getBalance",
  "params": ['0x048cacb1e61fdd56e3ddd42bc5a2f4e86c4f6a8966d655a53b03a6e58fc8fab7'], "id": 0}, function(err, res){
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
