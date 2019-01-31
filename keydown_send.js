// window.addEventListener("keydown", function(){
//     キーがが押されたとき、counter.jsにメッセージを送る
//     レスポンスを表示する
//     chrome.runtime.sendMessage(document.activeElement.value);
// }, function(response) {
//     console.log(response);
//     alert(response);
// });



window.addEventListener("keydown", function(){
    if (document.activeElement.tagName == "TEXTAREA"){
        console.log(document.activeElement.value.length);
    }
});