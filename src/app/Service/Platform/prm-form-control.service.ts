import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PrmFormBase } from 'src/app/Model/Platform/prm-form-base';

@Injectable({
  providedIn: 'root'
})
export class PrmFormControlService {

  constructor() { }

  toFormGroup(questions: PrmFormBase<string>[]): FormGroup {
    const group: any = {};

    questions.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));

    questions.forEach(question => {

      if (question.type == "nestedFormGroup") {
        group[question.key] = this.toFormGroup(question.nestedQuestions);
      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
      }

    });
    return new FormGroup(group);
  }
}
