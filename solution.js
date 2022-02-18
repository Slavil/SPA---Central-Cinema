function solve() {
    let [first, second, third] = Array.from(document.querySelector('#container').children)
    const button = document.querySelector('#add-new').querySelector('#container').querySelector('button')
    button.addEventListener('click', function(e){
        e.preventDefault()
        if(!first.value || !second.value || !Number(third.value)){
            return;
        }
        let name = first.value;
        let hall = second.value;
        let ticketPrice = Number(third.value);
        const li = document.createElement('li');
        const moviesOnScreen = document.querySelector('#movies ul');
        let span = createElement('span', `${name}`, `<strong>Hall: ${hall}</strong>`)
        let div = createElement('div', `<strong>${Number(ticketPrice).toFixed(2)}</strong>`)
        let input = document.createElement('input');
        input.placeholder = 'Tickets Sold';
        let buttonArchive = document.createElement('button');
        buttonArchive.textContent = 'Archive'
        div.appendChild(input);
        div.appendChild(buttonArchive)
        li.appendChild(span);
        li.appendChild(div)
        moviesOnScreen.appendChild(li)
        first.value = '';second.value = '';third.value = '';
        const archiveSection = document.querySelector('#archive ul');
        buttonArchive.addEventListener('click', function (e){
            if(!Number(input.value)){
                return;
            }
            let total = Number(input.value)*Number(ticketPrice)
            let archivedLi = createElement('li', `${name}`, `<strong>Total amount: ${total.toFixed(2)}</strong>`);
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            archivedLi.appendChild(deleteBtn);
            archiveSection.appendChild(archivedLi);
            moviesOnScreen.removeChild(li);
            let clearBtn = document.querySelector('#archive>button');
            clearBtn.addEventListener('click', function(r){
                r.preventDefault()
                let current = archiveSection.children
                for(let el of current){
                    el.remove()
                }
            })
            deleteBtn.addEventListener('click', function (f){
                let current = deleteBtn.parentNode
                archiveSection.removeChild(current);
            })
        })
    })
    function createElement(type, content, content2){
        const result = document.createElement(type);
        result.innerHTML += content
        if(content2){
            result.innerHTML+=content2
        }
        return result;
    }
}
