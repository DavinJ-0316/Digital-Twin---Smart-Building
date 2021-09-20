const http = require('http');
var fs = require('fs');
var url = require('url');


const requestListener = function (req, res) {


  if(url.parse(req.url,true).pathname == '/getData') {


  
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);

    const queryObject = url.parse(req.url, true).query;
    var fileName = './'+queryObject.sensor + ".json";



  var putput = '';

  
  fs.readFile(fileName, function(err, data){

      console.dir(JSON.stringify(data));
      
      //res.write(data);
      res.write(data.toString());
     // console.log(typeof data);
      console.log('Read finished');
    //   fs.readFile('./roomTemperature/v131.json', function(err, data){

    //     console.dir(JSON.stringify(data));
        
    //     res.write(data.toString());
    //     console.log('Read finished');
    //     fs.readFile('./roomLight/v110.json', function(err, data){

    //         console.dir(JSON.stringify(data));
            
    //         res.write(data.toString());
    //         console.log('Read finished');
    //         fs.readFile('./roomLight/v111.json', function(err, data){

    //             console.dir(JSON.stringify(data));
                
    //             res.write(data.toString());
    //             console.log('Read finished');
    //             fs.readFile('./PIR/v116.json', function(err, data){

    //                 console.dir(JSON.stringify(data));
                    
    //                 res.write(data.toString());
    //                 console.log('Read finished');
    //                 fs.readFile('./PIR/v131.json', function(err, data){

    //                     console.dir(JSON.stringify(data));
                        
    //                     res.write(data.toString());
    //                     console.log('Read finished');
                        res.end();
    //                 });
    //             });
    //         });
    //     });
    // });
  });
  


}

}

const server = http.createServer(requestListener);
server.listen(8082);
