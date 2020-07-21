const text = ['Youtuber','Videografer','Photografer','Content Creator','Freelancer'];
let count = 0;
let textindex = 0;
let currenttext = '';
let words = '';

(function ngetik(){

    if(count == text.length){
        count= 0;
    }

    currenttext = text[count];

    words = currenttext.slice(0, ++textindex);
    document.querySelector('.ngetiksendiri').textContent = words;

    if(words.length == currenttext.length){
        count++;
        textindex =0;
    }

    setTimeout(ngetik, 500);
    
})();