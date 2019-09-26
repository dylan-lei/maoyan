const express = require('express')
const app = express()
const request = require('request')
const {getAccessToken} = require("./module/help");
app.get('/weixin',(req,res)=>{
        // 1）将token、timestamp、nonce三个参数进行字典序排序
    // 2）将三个参数字符串拼接成一个字符串进行sha1加密
    // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    const {signature,timestamp,nonce,echostr} = req.query;
    const token = "xiaoff";
    // 将token、timestamp、nonce三个参数进行字典序排序
    const arr = [token,timestamp,nonce].sort();
    //将三个参数字符串拼接成一个字符串
    const str = arr.join("");
    // 进行sha1加密
    const sha1Str =  (str);
    //开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if(signature === sha1Str){
        res.end(echostr);
    }else{
        res.end();
    }
})
app.get("/createMenu",async function (req,res) {
        const accessToken = await getAccessToken();
	    console.log(accessToken)
        // node 请求 地址
        const url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+accessToken;
        request({
            method:"post",
            url,
            json:true,
            body: {
                "button":[
                    {
                        "type":"click",
                        "name":"瞅一眼",
                        "key":"V1001_TODAY_MUSIC"
                    },
                    {
                        "name":"帅照",
                        "sub_button":[
                            {
                                "type":"view",
                                "name":"推广",
                                "url":"http://www.baidu.com"
                            },
                            {
                                "type":"click",
                                "name":"赞一下我",
                                "key":"V1001_GOOD"
                            }]
                    }]   
          
        }    }
        ,function (err,response,body) {
            if(!err && response.statusCode === 200){
                console.log(111111,body);
                res.end(JSON.stringify(body));
            }else{
                res.end();
            }
        })

})
app.listen(80,function(){
    console.log('启动成功······')
})