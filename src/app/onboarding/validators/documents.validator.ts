import { AbstractControl } from '@angular/forms';
import { Constants } from 'src/app/shared/Constants/constants';

export function DocumentValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const category = control.get("category");
    const documents = control.value;

    var abc = window.location.href;
    if (category.pristine && !abc) {// if they are not made dirty yet then no need to show error as of now
      return null;
    }
    if (category.value === Constants.INTERNATIONAL) { // if category is International
        if(validateInternationalStudentDocuments(control)){
        return { documentMissing: true };
      } else {
        null;
      }
    }
    if (category.value === Constants.DOMESTIC) {// if category is DOMESTIC
      
        if(validateDomesticStudentDocuments(control)){
        return { documentMissing: true };
      } else {
        null;
      }
  }
    return null;
  }

  /**
   * 
   * @param control Validates documents for International Students
   */
  function validateInternationalStudentDocuments(control: AbstractControl) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
     !control.get("markSheets").value || !control.get("passport").value || !control.get("policeClearance").value
     || !control.get("declaration").value) {// if they are not made dirty yet then no need to show error as of now
      return true;
    } else {
        return false;
    }
  }

  
  /**
   * 
   * @param control Validates documents for Domestic Students
   */
  function validateDomesticStudentDocuments(control: AbstractControl) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
     !control.get("markSheets").value || !control.get("declaration").value) {// validate Domestic
      return true;
    } else {
        return false;
    }
  }