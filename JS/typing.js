const to_type_span = document.getElementById('txt-animation-data');
const cursor = document.getElementById('txt-animation-cursor');
const to_type_words = JSON.parse(to_type_span.getAttribute('data-words'));
let count = 0;
let index = 0;
let current_word = '';
let isForward = true
function type_word() {
    cursor.style.animationName = "typing-cursor-blink";

    if (count === to_type_words.length) count = 0;
    current_word = to_type_words[count];
    index+=isForward?1:-1;
    letter = current_word.slice(0, index );
    // console.log(letter[0])
    if (letter.includes('`'))    to_type_span.innerHTML = letter.replace('`','');
    else if(!isForward) to_type_span.innerHTML = '';
    if (letter.length === current_word.length || !index ) {
        if (!index){
            count += isForward ? 0 : 1;
            changeRoleImage();
            setTimeout(type_word, 100)
        } else
        setTimeout(type_word, 500)

        cursor.style.animationName = "";
        isForward = !isForward;
    }else    setTimeout(type_word, 100);
}

type_word()