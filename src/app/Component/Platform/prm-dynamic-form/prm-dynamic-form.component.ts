import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrmFormBase } from 'src/app/Model/Platform/prm-form-base';
import { PrmFormControlService } from 'src/app/Service/Platform/prm-form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './prm-dynamic-form.component.html',
  styleUrls: ['./prm-dynamic-form.component.scss']
})
export class PrmDynamicFormComponent implements OnInit {

  @Input() questions: PrmFormBase<string>[] = [];
  form!: FormGroup;
  payLoad = {};
  @Output() formOutput = new EventEmitter<any>();

  constructor(
    private formControlServices: PrmFormControlService
  ) { }

  ngOnInit() {
    this.form = this.formControlServices.toFormGroup(this.questions as PrmFormBase<string>[]);
  }

  onResultsBack(event: any) {
    let mounted: any = {};
    mounted[event.fmGroupName] = event.emitValue;
    this.form.patchValue(mounted);
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    this.formOutput.emit(this.payLoad);
  }
}
