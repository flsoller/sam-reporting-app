import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() hasBtnCol: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
