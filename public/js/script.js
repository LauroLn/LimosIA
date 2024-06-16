    // Geração de PDF
    document.addEventListener('DOMContentLoaded', function () {
        const btnGenerate = document.querySelector("#saveScreenshot");

        btnGenerate.addEventListener("click", () => {
            // Conteúdo do PDF
            const content = document.querySelector("#content");

            // Configuração do arquivo final de PDF
            const options = {
                margin: [10, 10, 10, 10], // Ajuste as margens conforme necessário
                filename: "arquivo.pdf",
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, // Ajuste a escala para uma melhor resolução
                    useCORS: true // Para garantir que imagens de terceiros sejam carregadas corretamente
                },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            };

            // Gerar e baixar PDF
            html2pdf().set(options).from(content).save();
        });
    });