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

  static get userCurrentAdressInput () {
    return cy.get('input#currentAddress');
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

  static get dateOfBirthInput () {
    return cy.get('input#dateOfBirthInput');
  }

  static get yearInput () {
    return cy.get('*[class^="react-datepicker__year-select"]');
  }

  static get monthInput () {
    return cy.get('*[class^="react-datepicker__month-select"]');
  }

  static get dayInput () {
    return cy.get('*[class^="react-datepicker__day react-datepicker__day--025"]');
    // Works for any number until 26 after that does not work for some reason
  }

  static get subjectsInput () {
    return cy.get('input#subjectsInput');
  }

  static get addSubjects () {
    return cy.get('#react-select-2-option-0');
  }

  static get hobbiesMusic () {
    return cy.get("label[for='hobbies-checkbox-3']");
  }

  static get uploadFile () {
    return cy.get('input[type=file]');
  }

  static get stateInput () {
    return cy.get('*[class^=" css-yk16xz-control"]');
  }

  static get selectNCR () {
    return cy.get('#react-select-3-option-0');
  }

  static get city () {
    return cy.get('*[class^=" css-1wa3eu0-placeholder"]');
  }

  static get selectDelhi () {
    return cy.get('#react-select-4-option-0');
  }

  static get submitButton () {
    return cy.get('*[class^="btn btn-primary"]');
  }

  static get formData () {
    return cy.get('td:nth-child(2)');
  }

  static TableRowCell(label) {
    return cy.get("tr>td")
      .contains(label)
      .parent()
      .find('td');
  };
  
}




export default PraticeForm;