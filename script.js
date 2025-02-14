document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// JS DO GRÁFICO DE BARRA
const ctx = document.getElementById('attendanceChart')?.getContext('2d');
if (ctx) {
    let attendanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Domingo 1', 'Domingo 2', 'Domingo 3', 'Domingo 4', 'Domingo 5'],
            datasets: [{
                label: 'Total de Pessoas Presentes',
                data: [50, 60, 55, 70, 30], // Dados estáticos para exemplo
                backgroundColor: 'rgba(47, 79, 79, 0.7)',
                borderColor: 'rgba(47, 79, 79, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById('month-select')?.addEventListener('change', function() {
    const selectedMonth = this.value;
    console.log("Mês selecionado:", selectedMonth);
});

// JS DOS DROPDOWNS NO MENU
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        const menu = this.nextElementSibling;
        menu.classList.toggle('show');
    });
});

window.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

// JS DOS MODAIS DE CADASTRO
const modais = {
    turma: {
        abrir: 'abrir-modal-cadastro-turma',
        fechar: 'fechar-modal-cadastro-turma',
        modal: 'modal-cadastro-turma'
    },
    aluno: {
        abrir: 'abrir-modal-cadastro-aluno',
        fechar: 'fechar-modal-cadastro-aluno',
        modal: 'modal-cadastro-aluno'
    },
    professor: {
        abrir: 'abrir-modal-cadastro-professor',
        fechar: 'fechar-modal-cadastro-professor',
        modal: 'modal-cadastro-professor'
    }
};

Object.values(modais).forEach(({ abrir, fechar, modal }) => {
    document.getElementById(abrir)?.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById(modal).style.display = 'flex';
    });

    document.getElementById(fechar)?.addEventListener('click', function() {
        document.getElementById(modal).style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById(modal)) {
            document.getElementById(modal).style.display = 'none';
        }
    });
});


//JS CARD DOS ANIVERSARIANTES
const aniversariantes = [
    { nome: "Ana Souza", data: "02/03" },
    { nome: "Carlos Lima", data: "05/03" },
    { nome: "Fernanda Oliveira", data: "10/03" },
    { nome: "Gabriel Santos", data: "12/03" },
    { nome: "Juliana Mendes", data: "18/03" },
    { nome: "Lucas Pereira", data: "22/03" },
    { nome: "Mariana Silva", data: "25/03" },
    { nome: "Rodrigo Costa", data: "28/03" },
];

let paginaAtual = 0;
const itensPorPagina = 5;
const birthdayList = document.getElementById("birthday-list");
const prevButton = document.getElementById("prev-birthday");
const nextButton = document.getElementById("next-birthday");

function atualizarAniversariantes() {
    birthdayList.innerHTML = "";
    const inicio = paginaAtual * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const listaPaginada = aniversariantes.slice(inicio, fim);

    if (listaPaginada.length === 0) {
        birthdayList.innerHTML = "<p>Nenhum aniversariante</p>";
    } else {
        listaPaginada.forEach(pessoa => {
            const p = document.createElement("p");
            p.textContent = `${pessoa.nome} - ${pessoa.data}`;
            birthdayList.appendChild(p);
        });
    }

    prevButton.disabled = paginaAtual === 0;
    nextButton.disabled = fim >= aniversariantes.length;
}

prevButton.addEventListener("click", () => {
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarAniversariantes();
    }
});

nextButton.addEventListener("click", () => {
    if ((paginaAtual + 1) * itensPorPagina < aniversariantes.length) {
        paginaAtual++;
        atualizarAniversariantes();
    }
});

// Inicializa a lista de aniversariantes
atualizarAniversariantes();


//JS DO GRAFICO PARA MEXER NA FONT
const cxt = document.getElementById('attendanceChart').getContext('2d');

const chart = new Chart(cxt, {
    type: 'bar',
    data: {
        labels: ['Domingo 1', 'Domingo 2', 'Domingo 3', 'Domingo 4', 'Domingo 5'],
        datasets: [{
            label: 'Total de Pessoas Presentes',
            data: [50, 60, 55, 70, 30],
            backgroundColor: 'rgba(60, 90, 100, 0.7)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14  // Tamanho da fonte padrão
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 14  // Tamanho da fonte padrão
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14  // Tamanho da fonte da legenda
                    }
                }
            }
        }
    }
});

/* Ajustar tamanho da fonte em telas menores */
function ajustarFonteGrafico() {
    let tamanhoFonte = window.innerWidth < 550 ? 10 : 14;  // Se a tela for menor que 550px, reduz a fonte para 10px

    chart.options.scales.x.ticks.font.size = tamanhoFonte;
    chart.options.scales.y.ticks.font.size = tamanhoFonte;
    chart.options.plugins.legend.labels.font.size = tamanhoFonte;

    chart.update(); // Atualiza o gráfico
}

/* Ouve o evento de redimensionamento da tela */
window.addEventListener('resize', ajustarFonteGrafico);
ajustarFonteGrafico();  // Executa uma vez para ajustar ao carregar
