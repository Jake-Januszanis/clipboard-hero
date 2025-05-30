
let popupContainerElement;

window.addEventListener('DOMContentLoaded', function() {
    popupContainerElement = document.getElementById('extension-container');
    if(popupContainerElement) {
        let submitButton = popupContainerElement.getElementsByClassName('submitButton').item(0);
        if(submitButton) {
            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                let textInputVal = popupContainerElement.getElementsByClassName('textInput').item(0).value
                addItemToSessionStorage(textInputVal);
            })
        }
        let loggerBtn = popupContainerElement.getElementsByClassName('log-btn').item(0);
        if(loggerBtn) {
            loggerBtn.addEventListener('click',() => {
                chrome.storage.session.get().then((result) => {
                    console.log(result)
                })
            })
        }
    }
});

function addItemToSessionStorage(text) {
    if(chrome) {
        let randomId = Math.random().toString().split('.')[1];
        let newObj = {}
        newObj[randomId] = text;
        chrome.storage.session.set(newObj).then(() => {
            console.log('Value was set')
        })
    }
}

function removeItemFromSessionStorage(key) {
    chrome.storage.session.remove(key);
}


if(chrome) {
    chrome.storage.onChanged.addListener((changes, namespace) => {
        let keys = Object.keys(changes)
        console.log(changes)
        keys.forEach((k) => {
            if(changes[k].newValue) {
                return addNewListItem(changes[k].newValue, k);
            }
       })
    })
}

function addNewListItem(text, id) {
    let listEle = document.getElementById('list')
    let itemContainer = document.createElement('div')
    itemContainer.setAttribute('class', 'itemContainer')

    let itemText = document.createElement('p')
    itemText.textContent = text;
    //Create a delete button
    let itemDeleteBtn = document.createElement('button')
    // itemDeleteBtn.setAttribute('class', `${text.toLowerCase()}-btn`)
    itemDeleteBtn.setAttribute('id', id)
    itemDeleteBtn.textContent = 'X'
    itemDeleteBtn.addEventListener('click', (e) => {
        removeItemFromSessionStorage(e.target.id)
        itemContainer.remove();
    }, true)
    //Create button that copys line of text
    let itemCopyBtn = document.createElement('button')
    itemCopyBtn.textContent = 'Copy'
    itemCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
    }, true)
    //Append Text/buttons to the container
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(itemCopyBtn);
    itemContainer.appendChild(itemDeleteBtn);

    listEle.appendChild(itemContainer);
}
