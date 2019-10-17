var api = require('marvel-comics-api')
const public_key = "e9be5c2cba5d56e48fb9fa6d4d49e356";
const private_key = "adfc41cff74520d4dcc10e25f91635fa861208a3";



const getCharacters = (handler, offset) => api('characters', {
    publicKey: public_key,
    privateKey: private_key,
    timeout: 4000,
    query: {
        limit: 20,
        offset: offset
    }
},
    (err, body) => {
        if (err) {
            throw err;
        } else {
            handler(body);
        }
    }
);


const getCharacter = (id, handler) => api('characters/' + id, {
    publicKey: public_key,
    privateKey: private_key,
    timeout: 10000
},
    (err, body) => {
        if (err) {
            // throw err;
             console.log('err ', err);
        } else {
            console.log(body);
            handler(body.data.results[0]);
        }
    }
);

const APIs = {
    GET_CHARACTERS: getCharacters,
    GET_CHARACTER: getCharacter
}

export default APIs;

// https://gateway.marvel.com:443/v1/public/characters?apikey=e9be5c2cba5d56e48fb9fa6d4d49e356