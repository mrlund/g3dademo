export class AnswerOption {
    answerOptionId: number;
    answerText: string;
    isCorrectAnswer: boolean;
    correctSortOrder: number;
    constructor(answerText: string, isCorrectAnswer: boolean, correctSortOrder: number){
        this.answerText = answerText;
        this.isCorrectAnswer = isCorrectAnswer;
        this.correctSortOrder = correctSortOrder;
    }
}