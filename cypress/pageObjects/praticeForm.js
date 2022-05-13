import BasePage from "./basePage";

class PraticeForm extends BasePage {
  static get url () {
    return '/automation-practice-form';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
  }

  static get firstNameInput () {
    return cy.get('input#firstName');
  }

  static get lastNameInput () {
    return cy.get('input#lastName');
  }

  static get userEmailInput () {
    return cy.get('input#userEmail');
  }

  static get maleRadioButton() {
    return cy.get("label[for= 'gender-radio-1']");
  }

  static get femaleRadioButton() {
    return cy.get("label[for= 'gender-radio-2']");
  }

  static get otherRadioButton() {
    return cy.get("label[for= 'gender-radio-3']");
  }

  static get userNumberInput () {
    return cy.get("input#userNumber");
  }

}




export default PraticeForm;