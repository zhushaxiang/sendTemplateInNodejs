var request = require('request');

request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx7eb782f180d929b6&secret=d6d0ccc206b1a1385276da3be1152ab8",function(error,response){
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(response.body);
        console.log(info.access_token);
        sendTem(info.access_token);
    }
});

function sendTem(accesstoken){
	var options = {
		uri: 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='+accesstoken,
		method:'POST',
		json:{
			touser: "oKeA5wykJ06C6TT3oTSR8x8MaKGI",
	        template_id: "7kHcQ5o9oLFQkUR-aNL1MKIiCA3CWmXqqejB2zqMdE4",
	        url: "http://2b4ce028.ittun.com",
	        topcolor: "#FF0000",
	        data: {
	            date: {
	                value: foarmatDate(new Date()),
	                color: "#173177"
	            }
	        }
		}
	};
	request(options,function (error, response, body) {
				        if (!error && response.statusCode == 200) {
				            console.log(body)
				        }
    					});
}

function foarmatDate(date){
	return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

/*request("http://localhost:8080/",function(error,response){
	if (!error && response.statusCode == 200) {
        console.log(response.body)
    }
});*/