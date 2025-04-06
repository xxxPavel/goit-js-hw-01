function getElementWidth(content, padding, border){
    
    const contentValue = Number.parseFloat(content);
    const paddingValue = Number.parseFloat(padding);
    const borderValue  = Number.parseFloat(border);

    return Math.ceil(contentValue + 2 * paddingValue + 2 * borderValue);

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200