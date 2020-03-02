//Variables
let selectedNode = '';

const boldEl = document.getElementById('bold');
const italicEl = document.getElementById('italic');
const strikethroughEl = document.getElementById('strikethrough');
const underlinedEl = document.getElementById('underlined');
const linkEl = document.getElementById('link');

const divEl = document.querySelector('.inputText div');

function addStyleTag(tagHTML) {

    selectedNode = document.getSelection();
    let range = selectedNode.getRangeAt(0);
   
    let parentNode = range.endContainer.parentNode.tagName;

    if (parentNode === 'P') {
        prompt('Só podemos editar textos dentro do espaço delimitado, ok?', 'Clique em OK se não um filhote de leão marinho irá morrer...');
    }
    else {
        let tag = document.createElement(tagHTML);
        let selectionText = document.createTextNode(selectedNode.toString());
        tag.appendChild(selectionText);

        if (tagHTML === 'a') {
            tag.setAttribute('href', 'https://github.com/pferreirafabricio');
            tag.setAttribute('target', '_blank');
        }

        range.deleteContents();
        range.insertNode(tag);
    }
}

boldEl.onclick = () => {
    addStyleTag('b');
};

italicEl.onclick = () => {
    addStyleTag('i');
};

strikethroughEl.onclick = () => {
    addStyleTag('s');
};

underlinedEl.onclick = () => {
    addStyleTag('u');
};

linkEl.onclick = () => {
    addStyleTag('a');
};

