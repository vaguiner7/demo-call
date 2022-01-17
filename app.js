require('dotenv').config();

var fs = require('fs');
var accountSid = process.env.TWILIO_ACCOUN_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var client = require('twilio')(accountSid, authToken);
fs.readFile('numbers.list', function(err, data){
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array){
        client.calls.create({
            // url: 'http://demo.twlio.com/docs/vaoice.xml',
             twiml: '<Response><Say>Ahoy there!</Say></Response>',
             to: array[i],
             from: process.env.FROM_NUMBER
         }, function(err, call){
             if(err) {
                 console.log(err);
             } else {
                 console.log(call.sid);
             }
         }); 
    }
})

