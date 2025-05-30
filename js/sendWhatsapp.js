document.getElementById('idade').addEventListener('input', function () {
    const idade = parseInt(this.value);
    const labelResponsavel = document.getElementById('responsavelLabel');
    if (idade < 18) {
      labelResponsavel.style.display = 'block';
    } else {
      labelResponsavel.style.display = 'none';
    }
  });

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const popover = document.getElementById('popover');
    const progressBar = document.getElementById('progress-bar');

    // Mostra popover e zera a barra
    popover.style.display = 'block';
    progressBar.style.width = '0%';

    // Dispara a animação da barra (100% em 60 segundos)
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50); // delayzinho para pegar a transição certinho

    // Redireciona após 5 segundos
    setTimeout(() => {
        const nomeAluno = this.aluno.value;
        const idade = this.idade.value;
        const nascimento = this.data.value;
        const idioma = this.idioma.value;
        const objetivo = this.objetivo.value;
        const responsavel = this.responsavel?.value;

        const mensagem = `Olá, sou o(a) aluno(a) ${nomeAluno}. Tenho ${idade} anos e nasci em ${nascimento}. Desejo aprender ${idioma}. Meu objetivo com as aulas é: ${objetivo}.` + (responsavel ? ` Meu responsável é ${responsavel}.` : '');

        const url = `https://wa.me/5535999701695?text=${encodeURIComponent(mensagem)}`;
        window.location.href = url;
    }, 5000);
});
