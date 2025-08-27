const db = require('./firebaseConfig');

async function pingTest(){
    try{
        accessPing();
    }catch(e){
        console.error("error: ", e)
    }
}

async function accessPing(){
    try{
        const response = await db.collection('ping').doc('acess_ping').get();

        if(!response.exists){
            console.log("Documento não encontrado!");
            return;
        }

        var data = response.data();

        console.log(data.response);
    }catch(e){
        console.error("error: ", e)
    }
}

pingTest();
// module.exports = { pingTest };