// document.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const ele = document.getElementById('my-button')
//     const input = document.getElementById('text-input').value
//     ele.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';

//     chrome.storage.session.set({ 'input': input }).then(() => {
//         console.log(`Value was set as ${input}` );
//       });

//     let newHeader = ''
//     chrome.storage.session.get(["input"]).then((result) => {
//         console.log(result['input']);
//         const header = document.getElementById('header');
//         header.innerHTML = result['input'];
//       });

//     const header = document.getElementById('header');
//     header.innerHTML = `${newHeader}`
// })

// window.document.onload = function(e){ 
//     console.log('test')
//     let btn = document.getElementById('clear-btn')
//     btn.addEventListener('click', (e) => {
//         console.log('test')
//     })
// }
