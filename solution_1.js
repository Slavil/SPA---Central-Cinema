function solve() {
    const inputs = document.querySelector('#container');
    const formBtn = document.querySelector('#add-new div button');
    const clearBtn = document.querySelector('#archive button')// или Array.from(document.querySelectorAll('button')).filter(x => x.textContent === 'Clear')[0];
    let [name, hall, ticketPrice] = Array.from(inputs.children)

    formBtn.addEventListener('click', function(e){
        e.preventDefault()
        if(name.value=='' || hall.value=='' || !Number(ticketPrice.value)){
            return
        }
        let moviesUl = document.querySelector('#movies ul');
        let li = document.createElement('li');
        let span = document.createElement('span');
        let div = document.createElement('div')
        let input = document.createElement('input');
        let archiveBtn = document.createElement('button');

        span.textContent = name.value;
        li.appendChild(span);
        li.innerHTML +=`<strong>Hall: ${hall.value}</strong>`
        div.innerHTML+=`<strong>${Number(ticketPrice.value).toFixed(2)}</strong>`;
        input.placeholder = "Tickets sold";
        archiveBtn.textContent = 'Archive';
        div.appendChild(input);
        div.appendChild(archiveBtn);
        li.appendChild(div);
        moviesUl.appendChild(li);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        archiveBtn.addEventListener('click', function(e){
            e.preventDefault()
            if(!Number(input.value)){
                return
            }
            let archiveSection = document.querySelector('#archive ul');
            let archiveLi = document.createElement('li');
            let archiveSpan = document.createElement('span');
            let deleteBtn = document.createElement('button');
            let profit = document.querySelector('#movies ul li div strong');
            let finalName = document.querySelector('#movies ul li span')
            let total = Number(input.value)*Number(profit.textContent);
            deleteBtn.textContent = 'Delete'

            archiveSpan.textContent = finalName.textContent;
            archiveLi.appendChild(archiveSpan);
            archiveLi.innerHTML+=`<strong>Total amount: ${total.toFixed(2)}</strong>`;
            archiveLi.appendChild(deleteBtn);
            archiveSection.appendChild(archiveLi)

            e.target.parentElement.parentElement.remove()

            deleteBtn.addEventListener('click', function(e){
                e.currentTarget.parentElement.remove();
            })
            clearBtn.addEventListener('click', function(e){
                document.querySelector('#archive ul').innerHTML = ''
            })
        })
    })
}
/*
const inputs = document.querySelector('#container');
const formBtn = document.querySelector('#add-new div button');
const clearBtn = document.querySelector('#archive button')// или Array.from(document.querySelectorAll('button')).filter(x => x.textContent === 'Clear')[0];
let [name, hall, ticketPrice] = Array.from(inputs.children)

formBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(name.value=='' || hall.value=='' || !Number(ticketPrice.value)){
        return
    }
    let moviesUl = document.querySelector('#movies ul');
    let li = document.createElement('li');
    let span = document.createElement('span');
    let div = document.createElement('div')
    let input = document.createElement('input');
    let archiveBtn = document.createElement('button');

    span.textContent = name.value;
    li.appendChild(span);
    li.innerHTML +=`<strong>Hall: ${hall.value}</strong>`
    div.innerHTML+=`<strong>${Number(ticketPrice.value).toFixed(2)}</strong>`;
    input.placeholder = "Tickets sold";
    archiveBtn.textContent = 'Archive';
    div.appendChild(input);
    div.appendChild(archiveBtn);
    li.appendChild(div);
    moviesUl.appendChild(li);

    name.value = '';
    hall.value = '';
    ticketPrice.value = '';

    archiveBtn.addEventListener('click', function(e){
        e.preventDefault()
        if(!Number(input.value)){
            return
        }
        let archiveSection = document.querySelector('#archive ul');
        let archiveLi = document.createElement('li');
        let archiveSpan = document.createElement('span');
        let deleteBtn = document.createElement('button');
        let profit = document.querySelector('#movies ul li div strong');
        let finalName = document.querySelector('#movies ul li span')
        let total = Number(input.value)*Number(profit.textContent);
        deleteBtn.textContent = 'Delete'

        archiveSpan.textContent = finalName.textContent;
        archiveLi.appendChild(archiveSpan);
        archiveLi.innerHTML+=`<strong>Total amount: ${total.toFixed(2)}</strong>`;
        archiveLi.appendChild(deleteBtn);
        archiveSection.appendChild(archiveLi)

        e.target.parentElement.parentElement.remove()

        deleteBtn.addEventListener('click', function(e){
            e.currentTarget.parentElement.remove();
        })
        clearBtn.addEventListener('click', function(e){
            document.querySelector('#archive ul').innerHTML = ''
        })
    })
})
*/