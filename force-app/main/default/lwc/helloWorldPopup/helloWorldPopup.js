import { LightningElement } from 'lwc';
import getGreeting from '@salesforce/apex/HelloWorldController.getGreeting';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HelloWorldPopup extends LightningElement {
    handleButtonClick() {
        getGreeting()
            .then(result => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: result,
                    variant: 'success'
                }));
            })
            .catch(error => {
                console.error(error);
            });
    }
}