var headingElement = document.querySelector('.heading');
headingElement.innerText = `

    Heading             nay


`
setInterval(() => headingElement.classList.toggle('red'),1000);
