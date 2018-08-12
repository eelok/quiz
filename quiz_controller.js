function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions [this.questionsIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionsIndex;
}

Quiz.prototype.quess = function(answer) {
    this.questionsIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}