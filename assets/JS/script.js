document.addEventListener("DOMContentLoaded", function () {
    const formOrcamento = document.querySelector("#sessao-orcamento form");
    const resultadoWrapper = document.querySelector("#resultado-wrapper");
    const resultado = document.querySelector("#resultado");

    formOrcamento.addEventListener("submit", function (event) {
        event.preventDefault();

        // Capturando os valores dos campos do formulário
        const nome = formOrcamento.querySelector("#nome").value;
        const email = formOrcamento.querySelector("#email").value;
        const telefone = formOrcamento.querySelector("#telefone").value;
        const qtdeLivros = parseInt(formOrcamento.querySelector("#livros").value);
        const tipoLivro = parseInt(formOrcamento.querySelector("#tipo").value);
        const querOfertasWhatsapp = formOrcamento.querySelector("#whatsapp_sim").checked;

        // Calculando o preço base
        let preco = qtdeLivros * 7; // Preço base por livro

        // Adicionando custo extra baseado no tipo de livro
        switch (tipoLivro) {
            case 1:
                preco += 10; // (Romance)
                break;
            case 2:
                preco += 5; // (Terror)
                break;
            case 3:
                preco += 4; // 3 (Ficção Científica)
                break;
            case 4:
                preco += 3; //  4 (Literatura)
                break;
            case 5:
                preco += 4; // 5 (Fantasia)
                break;
            case 6:
                preco += 3; // 6 (História e Biografia)
                break;
            case 7:
                preco += 2; //  7 (Autoajuda e Desenvolvimento Pessoal)
                break;
            case 8:
                preco += 4; // 8 (Não Ficção)
                break;
            case 9:
                preco += 4; //  9 (Histórias em Quadrinhos e Graphic Novels)
                break;
            case 10:
                preco += 2; //  10 (Livros Infantis e Infantojuvenis)
                break;
            case 11:
                preco += 3; // 11 (Poesia)
                break;
            case 12:
                preco += 5; // 12 (Mistério e Suspense)
                break;
            default:
                preco += 0; // 
        }

        // Adicionando custo extra se quiser ofertas por WhatsApp
        if (querOfertasWhatsapp) {
            preco += 5; // Preço extra para ofertas por WhatsApp
        }

        // Exibindo o resultado na página
        resultado.innerHTML = `Olá ${nome}, o valor total do seu plano mensalmente é de: R$ ${preco.toFixed(2)}.`;

        // Exibindo o resultado e aplicando estilos
        resultadoWrapper.style.display = "block"; // Exibir a div wrapper do resultado
    });
});
