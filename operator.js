const name = 'Rabi kr Yadav';

const add = (x,y) =>{
    return x+y;
};

const sub = (x,y) =>{
    return x-y;
};

const mult = (x,y) =>{
    return x*y;
};
const div = (x,y) =>{
    return x/y;
};

const mod = (x,y) =>{
    return x%y;
};

// export single module at a time
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.div = div;
// module.exports.mod = mod;

// export multiple module at a time
module.exports = {name, add, sub, mult, div, mod};