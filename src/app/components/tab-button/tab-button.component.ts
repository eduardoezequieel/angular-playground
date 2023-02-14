import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss'],
})
export class TabButtonComponent {
  @Input() tabName!: string;
  @Input() activeTab!: boolean;
  @Output() selectedTabName = new EventEmitter<string>();

  updateSelectedTabName(): void {
    this.selectedTabName.emit(this.tabName);
  }
}
