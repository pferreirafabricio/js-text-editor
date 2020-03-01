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
function addStyleTag(tagHTML) {

    /* anchor = o começo da seleção do usuario
       focus = termino da seleção
       ANCHOR CAN BE PLACED BEFORE THE FOCUS OR VICE VERSA, DEPENDING ON THE DIRECTION YOU MADE YOUR SELECTION.
   */

    selectedText = document.getSelection();

    const range = document.createRange();
    const tag = document.createElement(tagHTML);

    if (tagHTML === 'a') {
        tag.setAttribute('href', 'https://github.com/pferreirafabricio');
        tag.setAttribute('target', '_blank');
    }

    range.selectNode(pEl);

    //    range.setStart(pEl, selectedText.anchorOffset);
    //    range.setEnd(pEl, selectedText.anchorOffset);

    console.log(`range.selectNode: ${range.selectNode(pEl)}`);
    range.surroundContents(tag);

    console.log(`range: ${range}`);
    console.log(`Bold tag: ${tag}`);

    //    var ranger  = selectedText.getRangeAt(0);

    //    console.log(selectedText.anchorNode); 
    //    console.log("Começa: " + selectedText.anchorOffset); 
    //    console.log("Termina: " + selectedText.anchorOffset); 
    //    console.log(`range:  ${ranger}`); 
}


boldEl.addEventListener('click', function () {
    addStyleTag('b');
});

italicEl.onclick = () => {
    addStyleTag('i');
}

strikethroughEl.onclick = () => {
    addStyleTag('s');
}

underlinedEl.onclick = () => {
    addStyleTag('u');
}

linkEl.onclick = () => {
    // const aEl = document.createElement('a').textContent;
    // aEl.setAttribute('href', 'https://github.com/pferreirafabricio');
    // console.log(aEl.toString());
    addStyleTag('a');
}

