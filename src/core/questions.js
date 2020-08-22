// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.
import quiz from "../assets/quiz.json";

export const store = {
    state: {
        currentQuestion: 0,
        // answeredQuestion: 0,
        currentStatus: "Skip",
        picked: "",
        chosenTraits: [],
        jsonQuestion: quiz.questions,
        totalQuestions: quiz.questions.length
    },
    nextButton(){
        this.state.chosenTraits[this.state.currentQuestion] = this.state.picked;
        if(this.state.chosenTraits[this.state.currentQuestion+1] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion+1]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion+1];
        }
        if(this.state.currentQuestion>= this.state.totalQuestions-1){
            this.state.currentStatus = "Submit";
            this.state.currentQuestion = this.state.totalQuestions-1;
            window.open("#/recommendation", "_self");
        }
        this.state.currentQuestion++;
        console.log(this.state.chosenTraits);
        this.state.currentStatus = "Skip";
    },

    backButton(){
        this.state.currentQuestion--;
        if(this.state.chosenTraits[this.state.currentQuestion] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion];
        }
        
        if(this.state.currentQuestion <= 0){
            console.log("this is the first question");
            this.state.currentQuestion = 0;
        }
    },
    answerAsButton(){
        this.state.currentStatus = "Next";
        if(this.state.currentQuestion+1 == this.state.jsonQuestion.length){
            // alert("this is the last question");
            this.state.currentStatus = "Submit";
        }
    }
}