
async function createUser(){
    const novoUsuario = {
        nome: "matheus",
        email: "matheussenai1001@gmail.com",
        
        // int
        idade: 35,

        // bool
        ativo: true,
  
        // timestamp
        dataCriacao: new Date(),
        
        // array
        interesses: ["desenvolvimento", "música", "esportes"],
        
        // map
        endereco: {
            rua: "Av. Principal",
            numero: 123,
            cidade: "São Paulo",
            cep: "01000-000"
        }
    }

    try{
        // .collection('usuarios') -> Acessa a coleção (pasta) de usuários
        // .add(novoUsuario) -> Adiciona o objeto como um novo documento com ID automático
        const docRef = await db.collection('usuarios').add(novoUsuario);

        // const customId = "usuario_12345";
        // .doc(customId) -> Aponta para o documento com o ID que definimos
        // .set(novoUsuario) -> Cria o documento (ou sobrescreve se já existir)
        // await db.collection('usuarios').doc(customId).set(novoUsuario);

        console.log(`Usuário criado com sucesso com o ID: ${docRef.id}`);
    } catch (e) {
        console.error("Erro ao adicionar usuário: ", e);
    }
}
