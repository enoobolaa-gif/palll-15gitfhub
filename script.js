const quizData = [
    {
        question: "What is the meaning of 'Beautiful'?",
        options: ["Indah", "Besar", "Kecil", "Cepat"],
        answer: 0
    },
    {
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "went"],
        answer: 1
    },
    {
        question: "What is the antonym of 'Hot'?",
        options: ["Warm", "Cold", "Big", "Fast"],
        answer: 1
    },
    {
        question: "I ___ a book yesterday.",
        options: ["read", "reads", "reading", "will read"],
        answer: 0
    },
    {
        question: "What is the meaning of 'Happy'?",
        options: ["Sedih", "Marah", "Senang", "Takut"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("questionText").textContent = q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).textContent = q.options[i];
    }

    document.getElementById("quizResult").textContent = "";
}

function checkAnswer(index) {
    const correct = quizData[currentQuestion].answer;

    if (index === correct) {
        document.getElementById("quizResult").textContent = "✅ Correct!";
        score += 10;
    } else {
        document.getElementById("quizResult").textContent = "❌ Wrong Answer!";
    }

    document.getElementById("score").textContent = score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= quizData.length) {
        document.getElementById("questionText").textContent = "🎉 Quiz Finished!";
        document.querySelector(".quiz-options").style.display = "none";
        document.getElementById("quizResult").textContent = "Final Score: " + score;
    } else {
        loadQuestion();
    }
}

// Load pertama kali
loadQuestion();
