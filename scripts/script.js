function isDark(e){
    // console.log(e.target)

    if(e.target.textContent === 'Dark Theme'){
        turnDark()
    }
    else if(e.target.textContent === 'Light Theme'){
        turnLight()
    }
}
function turnDark(){
    mybutton = document.querySelector('.darktheme')
    toggleClasses('.mainheadfooter','.mainheadfooterDark')
    toggleClasses('.textareastyle','.textareastyleDark')
    toggleClasses('.asidestyle','.asidestyleDark')
    toggleClasses('.newnote','newnoteDark')
    toggleClasses('.savebutton','.savebuttonDark')
    toggleClasses('.darktheme','.lighttheme')
    mybutton.textContent = 'Light Theme'  
}

function turnLight(){
    mybutton = document.querySelector('.lighttheme')
    toggleClasses('.mainheadfooterDark','.mainheadfooter')
    toggleClasses('.textareastyleDark','.textareastyle')
    toggleClasses('.asidestyleDark','.asidestyle')
    toggleClasses('newnoteDark','.newnote')
    toggleClasses('.savebuttonDark','.savebutton')
    toggleClasses('.lighttheme','.darktheme')
    mybutton.textContent = 'Dark Theme'  
}

function toggleClasses(class1,class2){
    myelem = document.querySelectorAll(class1)
    class1 = class1.replace('.','')
    class2 = class2.replace('.','')
    myelem.forEach(elem => {
        elem.classList.replace(class1,class2)
    })

}
function cancelElements(){
    hideElement(document.querySelector('#mytextarea')) 
    hideElement(document.querySelector('#savebutton'))
    hideElement(document.querySelector('#cancelbutton'))
}
function hideElement(element){
    if(element.classList.contains('displayblock')){
        element.classList.replace('displayblock','displaynone')
    }
    else{
    element.classList.add('displaynone')
    }
}
function createNewNote(){
    const textarea = document.querySelector('#mytextarea')
    if(textarea.classList.contains('displaynone')){
        makeElementReappear(textarea)
        makeElementReappear(document.querySelector('#cancelbutton'))
        makeElementReappear(document.querySelector('#savebutton'))
    }
    else{
        textarea.textContent = ''
    }
}
function makeElementReappear(element){
    element.classList.replace('displaynone','displayblock')
}
function saveEntry(){
    noteTitle = prompt('Please enter the title for the note you would like to save: ')
    let note = document.querySelector('#mytextarea').textContent
    notesArray.push({title:noteTitle,body:note})
    let mynewnote = document.createElement('li')
    mynewnote.textContent = noteTitle
    let mynotes = document.querySelector('#notesrepo')
    mynotes.appendChild(mynewnote)
}

const darklightmode = document.querySelector('.darktheme')
darklightmode.addEventListener('click',isDark)

const cancelbutton = document.querySelector('.cancelbutton')
cancelbutton.addEventListener('click',cancelElements)

const newnotebutton = document.querySelector('#newnote')
newnotebutton.addEventListener('click',createNewNote)

let notesArray = [{title:"note one", body:"this is my first note"}]
const savebutton = document.querySelector('#savebutton')
savebutton.addEventListener('click',saveEntry)