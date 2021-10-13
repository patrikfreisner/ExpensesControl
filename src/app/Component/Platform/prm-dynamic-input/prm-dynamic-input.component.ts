import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { PrmFormBase } from 'src/app/Model/Platform/prm-form-base';

import * as $ from "jquery";
import { PrmFormControlService } from 'src/app/Service/Platform/prm-form-control.service';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/Service/BusinessService/location.service';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './prm-dynamic-input.component.html',
  styleUrls: ['./prm-dynamic-input.component.scss']
})
export class PrmDynamicInputComponent implements OnInit {

  public j$: any;

  questions: PrmFormBase<any>[] | null = [];
  qsOptions: { key: string, value: string }[] = [];

  @Input() question!: PrmFormBase<any>;
  @Input() form!: FormGroup;
  payLoad = {};
  get isValid() { return this.form.controls[this.question.key].valid; }
  @Output() questionOutput = new EventEmitter<any>();

  constructor(
    private dateAdapter: DateAdapter<any>,
    public formControlServices: PrmFormControlService,
    public localService: LocationService
  ) {
    // Set Datepicker location!
    this.dateAdapter.setLocale('pt');
  }

  ngOnInit(): void {
    this.j$ = $;
    if (this.question?.type == "nestedFormGroup") {
      this.questions = this.question.nestedQuestions;
      this.form = this.formControlServices.toFormGroup(this.questions as PrmFormBase<string>[]);

      this.form.valueChanges.subscribe(() => {
        this.questionOutput.emit({ fmGroupName: this.question.key, emitValue: this.form.value });
      });
    }

    // NestedFormGroup label logic!
    let width = <any>$('[id^="spanText"]');
    if (width.length > 0) {
      let value = <number>width[0].offsetWidth;
      $('[id^="labelText"]').width(value);
    }

    this.question.onInputInit(this);
  }

  onResultsBack(event: any) {
    let mounted: any = {};
    mounted[event.fmGroupName] = event.emitValue;
    this.form.patchValue(mounted);
    this.payLoad = this.form.getRawValue();
    this.questionOutput.emit({ fmGroupName: this.question.key, emitValue: this.payLoad });
  }

}
