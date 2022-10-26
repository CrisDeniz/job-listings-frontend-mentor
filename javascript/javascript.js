const master = document.querySelector('.master')

let filter = [];
let newFilter = [];

const filterContainer = document.createElement('div')

function createFilter() {
    let filterItemText = ''
    newFilter.forEach( filters => {
            
            
        filterItemText =+ `<div class="span-div"> <span>${filters}</span> </div>`
        
        
    })
    return filterItemText
}

async function fetchAll() {
    const response = await fetch('../data/data.json')
    const data = await response.json()

    data.map( vagas => {

        const container = document.createElement('div')
        const leftContainer = document.createElement('div')
        const infoContainer = document.createElement('div')
        const imgContainer = document.createElement('div')
        const toolDiv = document.createElement('div')
        const roleDiv = document.createElement('div')
        const levelDiv = document.createElement('div')
        const position = document.createElement('p')
        const company = document.createElement('p')
        const list = document.createElement('ul')
        const location = document.createElement('span')
        const contract = document.createElement('span')
        const posted = document.createElement('span')
        const role = document.createElement('span')
        const level = document.createElement('span')
        const img = document.createElement('img')

        position.innerText = vagas.position
        company.innerText = vagas.company
        posted.innerText = vagas.postedAt
        contract.innerText = vagas.contract
        location.innerText = vagas.location
        level.innerText = vagas.level
        role.innerText = vagas.role
        
        img.setAttribute('src', `${vagas.logo}`)
        container.setAttribute('class', 'container')
        company.setAttribute('class', 'company')
        position.setAttribute('class', 'position')
        imgContainer.setAttribute('class', 'img-container')
        contract.setAttribute('class', 'contract')
        posted.setAttribute('class', 'posted')
        location.setAttribute('class', 'location')
        infoContainer.setAttribute('class', 'info')
        leftContainer.setAttribute('class', 'left')
        toolDiv.setAttribute('class', 'right')
        roleDiv.setAttribute('class', 'span-div')
        levelDiv.setAttribute('class', 'span-div')
        filterContainer.setAttribute('class', 'filter-container')


        imgContainer.appendChild(img)

        levelDiv.appendChild(level)
        roleDiv.appendChild(role)
        toolDiv.appendChild(roleDiv)
        toolDiv.appendChild(levelDiv)
        leftContainer.appendChild(imgContainer)
        leftContainer.appendChild(infoContainer)
        container.appendChild(leftContainer)
        container.appendChild(toolDiv)

        

        vagas.tools.map( (tools, key) => {
            const tool = document.createElement('span')
            const spanDiv = document.createElement('div')
            spanDiv.setAttribute('class', 'span-div')

            tool.innerText = tools

            spanDiv.appendChild(tool)
            toolDiv.appendChild(spanDiv)

            spanDiv.addEventListener('click', (e) => {

                


                if (!newFilter.includes(e.target.innerText)) {
                    newFilter.push(e.target.innerText)
                }                

                createFilter()

            })
        })

        vagas.languages.map( (tools, key) => {
            const tool = document.createElement('span')
            const spanDiv = document.createElement('div')
            spanDiv.setAttribute('class', 'span-div')

            tool.innerText = tools

            spanDiv.appendChild(tool)
            toolDiv.appendChild(spanDiv)

            spanDiv.addEventListener('click', (e) => {
              
            })

        })


        if (vagas.new === true) {
            const news = document.createElement('span')

            news.setAttribute('class', 'new')

            news.innerText = 'NEW!'

            company.appendChild(news)
        }

        if (vagas.featured === true) {
            container.style.borderLeftWidth = '6px'
            container.style.borderLeftStyle = 'solid'
            container.style.borderLeftColor = 'hsl(180, 29%, 50%)'

            const featured = document.createElement('span')

            featured.setAttribute('class', 'featured')

            featured.innerText = 'FEATURED'

            company.appendChild(featured)
        }


        infoContainer.appendChild(company)
        infoContainer.appendChild(position)
        list.appendChild(location)
        list.appendChild(contract)
        list.appendChild(posted)
        infoContainer.appendChild(list)

        master.prepend(filterContainer)
        master.appendChild(container)
    } )
    
}

fetchAll()



