const countryMenu = document.getElementById('countryMenu')

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        
        for (let i = 0; i < data.length; i++) {
            
            const country = data[i];
            const countryName = country.name.common
            const countryFlag = country.flags.png
            
            const singleCountry = document.createElement('div')
            singleCountry.classList.add('country')
            singleCountry.innerHTML =  `<img src="${countryFlag}">` + `<h4>${countryName}</h4>`
            countryMenu.appendChild(singleCountry)


            singleCountry.addEventListener('click', () => {
                const countryRegion = country.region
                const countryArea = country.area
                const languages = Object.values(country.languages)
                const population = country.population
                const startOfWeek = country.startOfWeek
                const subregion = country.subregion
                let capital = country.capital
                if(capital === undefined) {
                    capital = 'Unknow'
                }

                document.getElementById('country-name').innerText = countryName
                document.getElementById('capital-name').innerText = capital
                document.getElementById('language-name').innerText = languages
                document.getElementById('region-name').innerText = countryRegion
                document.getElementById('subregion-name').innerText = subregion
                document.getElementById('start-of-week').innerText = startOfWeek
                document.getElementById('population-num').innerText = population
                document.getElementById('area-num').innerText = countryArea


                document.getElementById('country-modal').style.display = 'block'
                
            })
        }
    })

function closeModal() {
    document.getElementById('country-modal').style.display = 'none'
}