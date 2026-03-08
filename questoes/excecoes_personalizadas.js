function validarEntrada(usuario) {
  if (!usuario.nome || !usuario.email) {
    throw new Error('Nome e email são obrigatórios.'); 
  } else {
    console.log('Entrada válida:', usuario);
  }
}

validarEntrada({ nome: 'João', email: 'joao@email.com' });
