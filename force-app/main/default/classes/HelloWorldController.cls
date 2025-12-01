public with sharing class HelloWorldController {
    @AuraEnabled
    public static String getGreeting() {
        return 'HELLO WORLD';
    }
}