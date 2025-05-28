
let popupContainerElement;

window.addEventListener('DOMContentLoaded', function() {
    popupContainerElement = document.getElementById('extension-container');
    if(popupContainerElement) {
        let submitButton = popupContainerElement.getElementsByClassName('submitButton').item(0);
        if(submitButton) {
            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                let textInputVal = popupContainerElement.getElementsByClassName('textInput').item(0).value
                addNewListItem(textInputVal)
            })
        }
    }
});


function addNewListItem(text) {
    let listEle = document.getElementById('list')
    let itemContainer = document.createElement('div')
    itemContainer.setAttribute('class', 'itemContainer')
    let itemText = document.createElement('p')
    let itemDeleteBtn = document.createElement('button')
    let itemCopyBtn = document.createElement('button')
    itemCopyBtn.textContent = 'Copy'
    itemCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
    })
    itemDeleteBtn.setAttribute('class', `${text.toLowerCase()}-btn`)
    itemDeleteBtn.textContent = 'X'
    itemDeleteBtn.addEventListener('click', (e) => {
        itemContainer.remove();
    }, true)
    itemText.textContent = text;
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(itemCopyBtn);
    itemContainer.appendChild(itemDeleteBtn);

    listEle.appendChild(itemContainer);
}
