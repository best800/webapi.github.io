let Url ='https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY'
$(document).ready(function () {
    UpdateData();
})
function UpdateData() {
    var headers = {
        "accept-language": "en-US,en;q=0.9",
        "Access-Control-Allow-Origin": "nseindia.com",
        "cookie":"665B05C7A5E8DDCFB2D9E7BB4C523503~YAAQJSEPF4xSChqFAQAAd1pGhRJ0Ne/efBR4goJkR7/cRycX51gQM4s+kQzS4wVd3BA+I6PTdSIvs16rkn71NAiEMuN8f7NRmbiQDop+vCVTEyxQ81qmrwLLUIr+vttju+99mipjJIs08iUwxYeDfTSHwH3NfENZ7nyNtgpG+euwkO1rUBlwGLSfbgizI8S92y3CSiJ6jv/46LOcud3B9LQNsB/zgNRov4DGkU4wl9gcf0xjYbPE0BfF8lFMVJgaHfTe~1",
        "scheme": "https",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    }
    $.ajax({
        url: Url,
        type: "POST",
        dataType: 'json',
        headers: headers,
        success: function (data) {
            console.log(data)
        }

    });

}