// document.onkeydown = keydown;
// function keydown() {
//     var active_string = document.activeElement.value;
// }

// alert("background.jsの疎通");

chrome.runtime.onMessage.addListener(function(message){
    alert(message);
    // console.log(message);
    return true;
});

// window.addEventListener("keydown", arahto);
// function arahto() {
//     alert("キーボードがおされたよ");
// }
// window.addEventListener("keydown", handleKeydown);

// function handleKeydown(event){
//   console.log("キーボードが押された");
// }



// $("input").focus(function(){
//     var $strings = $(this).val();
// });




// テキストエリアがフォーカスされたとき
// そのテキストエリアの文字を取得、カウント