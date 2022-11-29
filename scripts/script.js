const darklightmode = document.querySelector('.darktheme')


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



darklightmode.addEventListener('click',isDark)
