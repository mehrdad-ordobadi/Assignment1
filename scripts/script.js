const darklightmode = document.querySelector('.darktheme')
// console.log(darklightmode)
function isDark(e){
    // console.log(e.target)
    if(e.target.classList.contains('darktheme')){
        turnDark()
    }
    else if(e.target.classList.contains('lightheme')){
        turnLight()
    }
}
function turnDark(){
    toggleClasses('.mainheadfooter','.mainheadfooterDark')
    toggleClasses('.textareastyle','textareastyleDark')
    toggleClasses('.asidestyle','.asidestyleDark')
    toggleClasses('.newnote','newnoteDark')
    toggleClasses('.savebutton','.savebuttonDark')
    toggleClasses('.darktheme','.lighttheme')
    
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
