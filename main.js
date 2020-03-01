//Variables

let selectedNode = '';

const boldEl = document.getElementById('bold');
const italicEl = document.getElementById('italic');
const strikethroughEl = document.getElementById('strikethrough');
const underlinedEl = document.getElementById('underlined');
const linkEl = document.getElementById('link');

const divEl = document.querySelector('.inputText div');

//Function that catch the selected text and add the respectively tag

function addStyleTag(tagHTML) {

    //Getting the DOM element and the text
    selectedNode = document.getSelection();
    let selectionText = selectedNode.toString();

    //Creating the respectively tag 
    let tag = document.createElement(tagHTML);
    
    tag.textContent = selectionText;

    if (tagHTML === 'a') {
        tag.setAttribute('href', 'https://github.com/pferreirafabricio');
        tag.setAttribute('target', '_blank');
    }

    let range = selectedNode.getRangeAt(0);
    range.deleteContents();
    range.insertNode(tag);
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
    addStyleTag('a');
}

