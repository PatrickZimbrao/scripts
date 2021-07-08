var imported1 = document.createElement('script');
imported1.src = 'https://unpkg.com/react@17/umd/react.development.js'

var imported2 = document.createElement('script');
imported2.src = 'https://unpkg.com/react-dom@17/umd/react-dom.development.js'

var imported3 = document.createElement('script');
imported3.src = 'https://unpkg.com/@babel/standalone/babel.min.js'

document.body.appendChild(imported1, imported2, imported3);
