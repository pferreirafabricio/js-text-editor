//Variables

let selectedText = '';

const boldEl = document.getElementById('bold');
const italicEl = document.getElementById('italic');
const strikethroughEl = document.getElementById('strikethrough');
const underlinedEl = document.getElementById('underlined');
const linkEl = document.getElementById('link');

const divEl = document.querySelector('.inputText div');
const pEl = document.querySelector('.inputText div p');

//Function that catch the selected text and add the respectively tag
function addTagAround(tagHTML) {
     /* anchor = o começo da seleção do usuario
        focus = termino da seleção
        ANCHOR CAN BE PLACED BEFORE THE FOCUS OR VICE VERSA, DEPENDING ON THE DIRECTION YOU MADE YOUR SELECTION.
    */
   selectedText = document.getSelection().toString();

   const range = document.createRange();
   const tag = document.createElement(tagHTML);
   
   range.selectNode(divEl);
   range.surroundContents(tag);

   console.log(`range: ${range}`);
   console.log(`Bold tag: ${tag}`);
   
//    var ranger  = selectedText.getRangeAt(0);

//    console.log(selectedText.anchorNode); 
//    console.log("Começa: " + selectedText.anchorOffset); 
//    console.log("Termina: " + selectedText.focusOffset); 
//    console.log(`range:  ${ranger}`); 
}


boldEl.addEventListener('click', function() {
    addTagAround('b');
});

italicEl.onclick = () => {
    addTagAround('i');
}

strikethroughEl.onclick = () => {

}

underlinedEl.onclick = () => {

}

linkEl.onclick = () => {

}

