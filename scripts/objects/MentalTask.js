class MentalTask extends Task {

    #mood; // int 1-3 (sad, neutral, happy)
    #promptResponse; // String

    constructor() {
        super(TaskType.MENTAL);
        this.setTaskPrompt(this.generatePrompt());
    }

    // Getters and Setters
    getMood() {
        return this.#mood;
    }
    
    getPromptResponse() {
        return this.#promptResponse;
    }
    
    setMood(mood) {
        this.#mood = mood;
    }
    
    setPromptResponse(response) {
        this.#promptResponse = response;
    }

    generatePrompt() {
        return TaskType.MENTAL[Math.floor(Math.random() * TaskType.MENTAL.length)];
    }
}