import PraticeForm from '../../pageObjects/praticeForm';


context("Pratice Form", () => {


    it("Filling in Text Boxes", () => {
        cy.fixture("praticeFormData").then((data) => {
            PraticeForm.visit();
        


        
            //add scenario stuf here
            PraticeForm.firstNameInput.type(data.firstname);
            PraticeForm.lastNameInput.type(data.lastname);
            PraticeForm.userEmailInput.type(data.email);

            PraticeForm.maleRadioButton.click();

            PraticeForm.userNumberInput.type(data.mobile);

            PraticeForm.dateOfBirthInput.click();
            PraticeForm.yearInput.select("1930");
            PraticeForm.monthInput.select("February");
            PraticeForm.dayInput.click();

            PraticeForm.subjectsInput.type(data.subjects);
            PraticeForm.addSubjects.click();

            PraticeForm.hobbiesMusic.click();

            PraticeForm.uploadFile.selectFile('cypress/files/NGNL.png');

            PraticeForm.stateInput.click();
            PraticeForm.selectNCR.click();

            PraticeForm.city.click();
            PraticeForm.selectDelhi.click();

            PraticeForm.submitButton.click();



        });
    });

    it("Validating data", () => {
        cy.fixture("praticeFormData").then((data) => {

        PraticeForm.TableRowCell("Student Name")
        .should("contain", data.fullname);
        PraticeForm.TableRowCell("Student Email")
        .should("contain", data.email);
        PraticeForm.TableRowCell("Gender")
        .should("contain", data.gender);
        PraticeForm.TableRowCell("Mobile")
        .should("contain", data.mobile);
        PraticeForm.TableRowCell("Date of Birth")
        .should("contain", data.dateofbirth);
        PraticeForm.TableRowCell("Subjects")
        .should("contain", data.subjects);
        PraticeForm.TableRowCell("Hobbies")
        .should("contain", data.hobbies);
        PraticeForm.TableRowCell("Picture")
        .should("contain", data.picture);
        PraticeForm.TableRowCell("Address")
        .should("contain", data.address);
        PraticeForm.TableRowCell("State and City")
        .should("contain", data.stateAndCity);


        });
    });

});
