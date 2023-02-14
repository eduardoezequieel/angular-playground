import { HighlightAutoResult, HighlightLoader } from 'ngx-highlightjs';
import { Component, Input, OnInit } from '@angular/core';
import { IBlockcodeComponent } from 'src/app/interfaces/IBlockcode';

const stackoverflowLight = 'assets/stackoverflow-light.css';
const stackoverflowDark = 'assets/stackoverflow-dark.css';

@Component({
  selector: 'app-blockcode',
  templateUrl: './blockcode.component.html',
  styleUrls: ['./blockcode.component.scss'],
})
export class BlockcodeComponent implements OnInit {
  @Input() blockcodeData!: IBlockcodeComponent;
  tabs!: string[];
  selectedTab!: string;
  currentTheme!: string;
  code!: string;

  constructor(private hljsLoader: HighlightLoader) {}

  ngOnInit(): void {
    this.tabs = Object.keys(this.blockcodeData);
    this.selectedTab = this.tabs[0];
    this.currentTheme = stackoverflowLight;

    this.setCode();
    this.hljsLoader.setTheme(this.currentTheme);
  }

  onHighlight(e: HighlightAutoResult): void {}

  setSelectedTab(e: string): void {
    this.selectedTab = e;
    this.setCode();
  }

  setCode(): void {
    this.code =
      this.blockcodeData[this.selectedTab as keyof IBlockcodeComponent]!;
  }

  copyCodeToClipboard(): void {
    navigator.clipboard.writeText(this.code);

    alert('copied to clipboard');
  }

  changeTheme(): void {
    this.currentTheme =
      this.currentTheme === stackoverflowLight
        ? stackoverflowDark
        : stackoverflowLight;

    this.hljsLoader.setTheme(this.currentTheme);
  }
}
