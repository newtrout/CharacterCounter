var insert_counter = false;
window.addEventListener("keydown", function(){
    if (document.activeElement.tagName == "TEXTAREA"){
        // console.log(document.activeElement.value.length);
        String(ev = document.activeElement.value);
        console.log(ev);
        if (insert_counter){
            document.getElementById("charactercounter").textContent = ev.length;
        }
        else{
            document.activeElement.insertAdjacentHTML('afterend', '<p id="charactercounter">' + ev.length + '<p>');
            insert_counter = true;
            console.log(insert_counter);
        }
    }
    else{
        insert_counter = false;
        console.log(insert_counter);

    }
});

// テキストエリアがフォーカスされたとき、そのテキストエリアの文字を取得