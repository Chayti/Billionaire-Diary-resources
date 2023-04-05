//you can also use the api url as like I have used
// or you can simply use thus
// fetch("ByIndustryFashion.json")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error retrieving data:', error))

fetch('https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByIndustryFashion.json')
    .then(res => res.json())
    .then(data => console.log(data))