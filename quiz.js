import { LightningElement } from 'lwc';
export default class Quiz extends LightningElement {
    allQuestions = [{ id: '1', question: 'What is the capital of Texas?', options: { a: 'Austin', b: 'Dallas', c: 'Plano' }, answer: 'a' },
    { id: '2', question: 'Which language is mainly used for web page structure?', options: { a: 'Python', b: 'HTML', c: 'SQL' }, answer: 'b' },
    { id: '3', question: 'Which company developed Salesforce?', options: { a: 'Microsoft', b: 'Salesforce Inc', c: 'Google' }, answer: 'b' }
    ];

    selectedValue = {};
    correctAnswers = 0;
    isSubmitted=false;

    handleRadio(event) {
        console.log('name==', event.target.name);
        console.log('value==', event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.selectedValue = { ...this.selectedValue, [name]: value };
    }
    handleSubmit(event) {
        let newArray = this.allQuestions.filter(item => this.selectedValue[item.id] === item.answer);
        console.log('newArray.length', newArray.length)
        this.correctAnswers = newArray.length;
        console.log('this.correctAnswers', this.correctAnswers);
        this.isSubmitted=true;
    }
    handleReset(event) {
        this.selectedValue = {};
        this.correctAnswers = 0;
        this.isSubmitted=false;
        this.template.querySelectorAll('input[type="radio"]').forEach(currentItem => {
            currentItem.checked = false;
        })
    }
}