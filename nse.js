let Url ='https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY'
$(document).ready(function () {
    UpdateData();
})
function UpdateData() {
    
    $.ajax({
        url: Url,
        type: "GET",
        dataType: 'jsonp',
        success: function (data) {
            console.log(data)
        }

    });

}