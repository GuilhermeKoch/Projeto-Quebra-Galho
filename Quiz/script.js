let profissionais; // Variável global para armazenar os dados dos profissionais

fetch('https://66416e463d66a67b3433d99d.mockapi.io/Profissionais')
    .then(response => response.json())
    .then(data => {
        // Dados dos profissionais foram obtidos com sucesso
        profissionais = data;

        // Exemplo de como você pode acessar os dados dos profissionais depois que eles foram importados
        console.log(profissionais); // Aqui você pode ver os dados dos profissionais no console do navegador ou realizar outras operações com eles
    })
    .catch(error => {
        // Tratar erros ao buscar os dados dos profissionais
        console.error('Ocorreu um erro ao buscar os dados dos profissionais:', error);
    });

document.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", function () {
        const value = this.value;
        const parentQuestion = this.closest(".question");
        const selectedButton = parentQuestion.querySelector(".selected");

        if (selectedButton) {
            selectedButton.classList.remove("selected");
        }

        this.classList.add("selected");

        const currentQuestionIndex = parseInt(parentQuestion.dataset.index);
        showNextQuestion(currentQuestionIndex);
    });
});

function showNextQuestion(currentQuestionIndex) {
    const currentQuestion = document.querySelector(`.question[data-index="${currentQuestionIndex}"]`);
    const nextQuestion = document.querySelector(`.question[data-index="${currentQuestionIndex + 1}"]`);

    currentQuestion.style.display = "none";
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {

    const jaInvestiuAntes = document.querySelector(".question[data-question='investiuAntes'] .selected").value;
    const perfil = document.querySelector(".question[data-question='perfil'] .selected").value;
    const orcamento = document.querySelector(".question[data-question='orcamento'] .selected").value;


    let professional = "";

    if (jaInvestiuAntes === "sim" && (perfil === "conservador" || perfil === "moderado") && (orcamento === "1a5Mil" || orcamento === "5Mila50Mil")) {
        professional = profissionais[0];
    } else if (jaInvestiuAntes === "nao" && (perfil === "conservador" || perfil === "moderado") && (orcamento === "1a5Mil" || orcamento === "5Mila50Mil")) {
        professional = profissionais[1];
    } else if (jaInvestiuAntes === "sim" && perfil === "arrojado" && (orcamento === "1a5Mil" || orcamento === "5Mila50Mil")) {
        professional = profissionais[2];
    } else if (jaInvestiuAntes === "nao" && perfil === "arrojado" && (orcamento === "1a5Mil" || orcamento === "5Mila50Mil")) {
        professional = profissionais[3];
    } else if (jaInvestiuAntes === "sim" && (perfil === "conservador" || perfil === "moderado") && (orcamento === "50MilaMilhao" || orcamento === "maisdeMilhao")) {
        professional = profissionais[4];
    } else if (jaInvestiuAntes === "nao" && (perfil === "conservador" || perfil === "moderado") && (orcamento === "50MilaMilhao" || orcamento === "maisdeMilhao")) {
        professional = profissionais[5];
    } else if (jaInvestiuAntes === "sim" && perfil === "arrojado" && (orcamento === "50MilaMilhao" || orcamento === "maisdeMilhao")) {
        professional = profissionais[6];
    } else if (jaInvestiuAntes === "nao" && perfil === "arrojado" && (orcamento === "50MilaMilhao" || orcamento === "maisdeMilhao")) {
        professional = profissionais[7];
    }


    document.getElementById("professional-name").innerText = professional.name;
    document.getElementById("professional-description").innerText = professional.descricao;
    document.getElementById("professional-image").src = professional.avatar;
    document.getElementById("result").style.display = "block";



}

