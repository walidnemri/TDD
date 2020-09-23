const assert = require('assert');

const capitalizeFirstLetters = (str) => {

    if ( str === '') return ''
    
    let strToUpper = str[0].toUpperCase() + str.slice(1);

    let strSplit = str.split(' ');

    console.log('split',str);

    strSplit = strSplit.map( elem => elem[0].toUpperCase() + elem.slice(1));

    console.log('strUpper', strSplit);
    strSplit = strSplit.join(' ');

    console.log(strSplit);
    return strSplit ;
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function' );
assert.strictEqual(capitalizeFirstLetters('walid'), 'Walid' );
assert.strictEqual(capitalizeFirstLetters('walid nemri'), 'Walid Nemri' );
assert.strictEqual(capitalizeFirstLetters(''), '' );

