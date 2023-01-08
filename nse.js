let Url ='https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY'
$(document).ready(function () {
    UpdateData();
})
function UpdateData() {
    var headers = {
        "accept-language": "en-US,en;q=0.9",
		"Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    }
    $.ajax({
        url: Url,
        type: "GET",
        dataType: 'json',
        headers: headers,
        success: function (data) {
            console.log(data)
        }
    });

}