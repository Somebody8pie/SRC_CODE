const para = document.querySelector('.error') // Best way to grab an element from the dom

// para.innerHTML = '<h2>This is new</h2>';
para.setAttribute('class', 'success')

let success = para.getAttribute('class')

if(success == 'success')
{
    para.setAttribute('style','color: green;')
    para.innerText = 'success';
}
    const link = document.querySelector('a')
link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')

const title = document.querySelector('.title')

console.log(title.style)
title.style.margin = '50px';
title.style.backgroundColor = '#7c7c7c2b'
title.style.borderRadius = '10px'
title.style.textAlign = 'center';
