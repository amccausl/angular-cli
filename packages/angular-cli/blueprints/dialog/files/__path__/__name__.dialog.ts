import { Component, OnInit<% if(viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection) { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <p>
      <%= dasherizedModuleName %> Works!
    </p>
  `,<% } else { %>
  templateUrl: './<%= dasherizedModuleName %>.dialog.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: [ './<%= dasherizedModuleName %>.dialog.<%= styleExt %>' ]<% } %><% if(viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection) { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classifiedModuleName %>Dialog implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<<%= classifiedModuleName %>Dialog>
  ) { }

  ngOnInit() {
  }

  onSubmit() {
  }
}
