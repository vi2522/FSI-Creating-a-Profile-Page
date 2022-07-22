
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.append("Description:")
dogDetails.append(description)

let p = document.createElement('p')
p.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(p)

let description2 = document.createElement('h3')
description2.append("Feeding Times:")
dogDetails.append(description2)

let ul = document.createElement('ul')

let time = ["9:00 am", "12:00 pm", "5:00 pm"]

for(let i = 0; i < time.length; i++){
    li = document.createElement('li')
    li.append(time[i])
    dogDetails.append(li)
}

dogDetails.append(ul)

document.createElement('h3')
document.createElement('p')
