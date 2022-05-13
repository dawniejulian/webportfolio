const txtElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
Let count = 0;
Let txtIndex = 0;
Let currentTxt = '';
Let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }
        
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();