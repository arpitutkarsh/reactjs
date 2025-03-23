function customRender(reactelement, container){
    //creating a dom element
    const domElement = document.createElement(reactelement.type)
    //now injecting an inner htmml to this domelement
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href', reactelement.prop.href)
    domElement.setAttribute('target', reactelement.prop.target)

    container.appendChild(domElement)
}

const reactelement = {
    type : 'a',
    prop: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit gogle'
}

const maincontainer = document.querySelector('#root')

customRender(reactelement, maincontainer)