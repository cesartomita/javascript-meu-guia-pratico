try {
    
    let result = x + 10;                                // 'x' não foi declarado

} catch (error) {

    console.error("Nome do erro:", error.name);         // ReferenceError
    console.error("Mensagem do erro:", error.message);  // 'x is not defined'
    console.error("Stack:", error.stack);               // Mostra onde o erro ocorreu

};