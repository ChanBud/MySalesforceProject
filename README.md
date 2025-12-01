Salesforce LWC & Apex Integration Demo

This project demonstrates a full-stack Salesforce implementation connecting a Lightning Web Component (Frontend) to an Apex Controller (Backend).

The goal was to create a responsive UI that fetches data from the Salesforce server on user interaction, displaying the result via a Toast Notification system.

(My deployed component running in a Salesforce Developer Edition Org)

Key Features-

Lightning Web Components (LWC): Built using standard Salesforce UI components (lightning-card, lightning-button).

Apex Integration: Uses a server-side controller to handle business logic.

Imperative Apex: The component calls the server only when requested (button click), optimizing performance compared to loading data automatically.

Feedback System: Implements platformShowToastEvent to give the user immediate visual feedback.

Technical Architecture

The Backend (Apex)-

I created a class named HelloWorldController.

@AuraEnabled: This annotation was crucial. It exposes the Apex method to the Lightning component framework, allowing the JavaScript controller to "see" and call the server method.

Logic: The method returns a simple string, simulating a database retrieval or business calculation.

public with sharing class HelloWorldController {
    @AuraEnabled
    public static String getGreeting() {
        return 'HELLO WORLD';
    }
}


The Frontend (LWC JavaScript)-

The JavaScript controller handles the user interaction.

Importing: It imports the specific Apex method reference.

Promise Handling: It uses .then() and .catch() to handle the asynchronous nature of server calls (waiting for the cloud to reply).

handleButtonClick() {
    getGreeting()
        .then(result => {
            // Success: Show Green Toast
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: result,
                variant: 'success'
            }));
        })
        .catch(error => {
            // Error Handling
            console.error(error);
        });
}


The Deployment Strategy-

This project was built locally in Visual Studio Code and deployed using the Salesforce CLI (SFDX).

Source Control: Git was used to track changes.

Metadata API: The js-meta.xml file was configured to expose the component specifically to Lightning App Pages and Home Pages, allowing it to be dragged-and-dropped via the Lightning App Builder.

Development Steps-

For anyone looking to replicate this, here is the workflow I followed:

Environment Setup: Authorized a Salesforce Developer Edition org using SFDX.

Scaffolding: Created the project structure (force-app) using standard SFDX commands.

Backend Development: Wrote the Apex class and deployed it to the cloud.

Frontend Development: Built the HTML/JS for the helloWorldPopup component.

Deployment: Pushed the source code to the org.

Configuration: Used the Lightning App Builder to drag the custom component onto the "Sales" App Home Page and activated it as the App Default.

Tech Stack-

Language: Apex, JavaScript (ES6), HTML5

Framework: Lightning Web Components (LWC)

Tools: VS Code, Salesforce CLI, Salesforce Extensions Pack, Git