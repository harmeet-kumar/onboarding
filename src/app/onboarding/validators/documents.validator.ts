import { AbstractControl } from '@angular/forms';

export function DocumentValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const category = control.get("category");
    const documents = control.value;
    
    if (category.pristine) {// if they are not made dirty yet then no need to show error as of now
      return null;
    }
    if (category.value === "International") { // if category is International
        if(validateInternationalStudentDocuments(control)){
        return { documentMissing: true };
      } else {
        null;
      }
    }
    if (category.value == "Domestic") {// if category is DOMESTIC
        if(validateDomesticStudentDocuments(control)){
        return { documentMissing: true };
      } else {
        null;
      }
  }
    return null;
  }

  function validateInternationalStudentDocuments(control: AbstractControl) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
     !control.get("markSheets").value || !control.get("passport").value || !control.get("policeClearance").value
     || !control.get("declaration").value) {// if they are not made dirty yet then no need to show error as of now
      return true;
    } else {
        return false;
    }
  }

  function validateDomesticStudentDocuments(control: AbstractControl) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
     !control.get("markSheets").value || !control.get("declaration").value) {// validate Domestic
      return true;
    } else {
        return false;
    }
  }