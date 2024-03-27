    //mauro/joao Forms
      
    document.getElementById("questionnaire").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede que o formulário seja enviado normalmente
  
        // Perguntas
        const questions = [
          "q1",
          "q2",
          "q3",
          "q4",
          "q5",
          
  
        ];
        
    // Verifica se todas as perguntas foram respondidas
    let allQuestionsAnswered = true;
    questions.forEach(questionId => {
        const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
        if (!selectedOption) {
            allQuestionsAnswered = false;
            alert("Por favor, responda a todas as perguntas antes de prosseguir.");
        }
    });

    // Se todas as perguntas foram respondidas, calcula a pontuação
    if (allQuestionsAnswered) {
        // Calcula a pontuação total
        let totalScore = 0;
        questions.forEach(questionId => {
            const score = parseInt(document.querySelector(`input[name="${questionId}"]:checked`).value);
            totalScore += score;
        });

        // Converte em uma nota de 1 a 10
        const maxScore = questions.length; // Pontuação máxima 
        const minNote = 0; // Nota mínima
        const maxNote = 10; // Nota máxima

        const note = ((totalScore / maxScore) * (maxNote - minNote)) + minNote;

        // Exibir nota
        document.getElementById("result").style.display = "block";
        document.getElementById("nota").textContent = note.toFixed(2); // 2 casas decimais

        //joaoepifanio - Liberar acesso para próximo formulário
        if (note >= 6) {

            document.getElementById("resultLink").style.display = "block";
        } else {
            alert("Você não atingiu a pontuação mínima para acessar o próximo formulário.");
            // Recarrega a página para reiniciar o teste
            location.reload();
        }
    }
});