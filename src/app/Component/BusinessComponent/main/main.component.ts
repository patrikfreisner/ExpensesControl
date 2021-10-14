import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(MainBottomSheet);
  }

}

@Component({
  selector: 'main-bottomsheet',
  templateUrl: '../AuxiliarComponents/main-bottom-sheet-component.html',
})
export class MainBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<MainBottomSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}