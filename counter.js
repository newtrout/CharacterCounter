window.addEventListener("keydown", function(){
    if (document.activeElement.tagName == "TEXTAREA"){
        console.log(document.activeElement.value.length);
    }
});

// テキストエリアがフォーカスされたとき、そのテキストエリアの文字を取得