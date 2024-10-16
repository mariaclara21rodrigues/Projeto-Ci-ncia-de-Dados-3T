const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
    
    }
    
    const tickConfig = {
    family: getCSS(Nanito Sans),
    size: 16,
    color: getCSS(DDDDDD)
    
    }
    
    export {getCSS, tickConfig}
