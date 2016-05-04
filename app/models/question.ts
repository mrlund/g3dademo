import {AnswerOption} from './answer-option.ts';

export class Question {
    questionId: number;
    questionText: string;
    questionType: string;
    answerOptions: Array<AnswerOption>;
    constructor(questionText: string, questionType: string, answerOptions: Array<AnswerOption>){
        this.questionText = questionText;
        this.questionType = questionType;
        this.answerOptions = answerOptions;
    }
}