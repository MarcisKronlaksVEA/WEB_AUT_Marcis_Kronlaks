import PraticeForm from '../../pageObjects/praticeForm';


context("Pratice Form", () => {
    context("Pratice Form scenarios", () => {
        beforeEach(() => {
            PraticeForm.visit();
        });


        it.only("Filling in Text Boxes", () => {
            //add scenario stuf here
            PraticeForm.firstNameInput.type("James");
            PraticeForm.lastNameInput.type("Oak");
            PraticeForm.userEmailInput.type("jamesoak@gmai.com");
            PraticeForm.maleRadioButton.click();
            PraticeForm.userNumberInput.type("3457758979")
        })

    });
});

