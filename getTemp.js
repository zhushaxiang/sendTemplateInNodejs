var request = require('request');

request("https://api.weixin.qq.com/cgi-bin/template/get_all_private_template?access_token=WZTZCu4ZBQ7VjA7kgoIHgptCNsNI5tTQsHD0Auf9jPQbpfgBbhCRh02TWYg_6Q5hQakKMPcZqJAJK3qzKr1r0ZRyeVh2f79D-iKblxhyAUZgyGlG70gbKUw_amHZGvBBCIDcAEAUAV",function(error,response){
    if (!error && response.statusCode == 200) {
        console.log(response.body)
    }
});
