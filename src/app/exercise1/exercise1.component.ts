import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  // task 1 
  textValue: string = '';
  setLengthMessage: string = '';
  lengthBtnValue: boolean = true;

  // task 2  
  // object set 
  name: string = '';
  age: number = 0;
  formData: userInfoInterface = {};
  objectValue: string = '';
  // array set 
  allUserFormData: userInfoInterface[] = [];
  allUserDataArray: string = '';
  submitDataBtnValue: boolean = true;

  // task 4:
  number: number = 0;

  // Find Length om Btn Click 
  findLength = () => {
    this.setLengthMessage = "Text Length : " + this.textValue.length;
    this.textValue = '';
    this.lengthBtnValue = true;
  };
  // Empty Input Value 
  emptyValue = () => {
    this.submitDataBtnValue = true;
    this.name = '';
    this.age = 0;
  };
  // data Push In object 
  submitFormData = () => {
    this.formData = {
      name: this.name,
      age: this.age,
    };
    this.objectValue = JSON.stringify(this.formData);
    this.emptyValue();
  };

  // Data Push in array Of Object
  submitUserValue = () => {
    this.allUserFormData.push({
      name: this.name,
      age: this.age
    });
    this.allUserDataArray = JSON.stringify(this.allUserFormData);
    this.emptyValue();
  };
};
export interface userInfoInterface {
  name?: string;
  age?: number;
};