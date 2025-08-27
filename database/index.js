const db = require('./firebaseConfig');

async function main(){
    console.log("iniciando");

    try{
        var user_id = '2';
        const userDoc = await db.collection('usuarios').doc(user_id).get();

        userDoc ? console.log(userDoc) : 'Nao encontrado';
    }catch(e){
        console.error("error: ", e)
    }
}

function createUser(){
    const novoUsuario = {
        nome: "matheus",
        email: "matheussenai1001@gmail.com",
        idade: 35
    }
}

main();