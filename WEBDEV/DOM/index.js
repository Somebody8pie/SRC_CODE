const para = document.querySelector('.error') // Best way to grab an element from the dom

para.innerHTML = '<h2>This is new</h2>';

const link = document.querySelector('a')
link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')