const Cars = [
    {
        Name: "Hadi"
    },
    {
        Name: "Javad"
    },
    {
        Name: "Alireza"
    },
    {
        Name: "Mohammad"
    },
    {
        Name: "Masood"
    },
    {
        Name: "Shahin"
    },
    {
        Name: "Tara"
    },
    {
        Name: "Hanyeh"
    },
    {
        Name: "Arizo6"
    },
    {
        Name: "Amir"
    }
]

const filters = {
    searchItems: ''
}

const renderProducts = function (array, filters) {
    const filteredProducts = array.filter((item) => {
        return item.Name.toLowerCase().includes(filters.searchItems.toLowerCase())
    })
        document.querySelector('#items').innerHTML = ''
        filteredProducts.forEach((item) => {
        const addEl = document.createElement('p')
        addEl.textContent = item.Name
        document.querySelector('#items').appendChild(addEl)
    });
}

renderProducts(Cars, filters)

const inputValue = document.querySelector('#searchProduct').addEventListener('input', (e) => {
    filters.searchItems = e.target.value
    renderProducts(Cars, filters)
})

