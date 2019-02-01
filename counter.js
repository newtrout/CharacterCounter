var insert_counter = false;
window.addEventListener("keyup", function(){
    if (document.activeElement.tagName == "TEXTAREA"){
        // console.log(document.activeElement.value.length);
        ev_len = document.activeElement.value.replace(/\r?\n/g, '').length;
        // console.log(ev);
        if (insert_counter){
            var selected_text_len = window.getSelection().toString().replace(/\r?\n/g, '').length;
            document.getElementById("charactercounter").textContent = selected_text_len + " / " + ev_len;
        }
        else{
            document.activeElement.insertAdjacentHTML('afterend', '<p id="charactercounter">' + ev_len + '<p>');
            insert_counter = true;
            console.log(insert_counter);
        }
    }
    else{
        insert_counter = false;
        console.log(insert_counter);

    }
});

// window.addEventListener("blur", function () {
//     if (insert_counter) {
//         document.getElementById("charactercounter").remove();
//         insert_counter = false;
//         console.log("blur動いてるよ");
//     }
// });

// テキストエリアがフォーカスされたとき、そのテキストエリアの文字を取得