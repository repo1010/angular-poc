import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>

        <h2>********IF - ELSE Block*******</h2>
      <input type="text" [(ngModel)]="isVisible" #currentVaue="ngModel"/>
      <button (click)="onClick(currentVaue)">Click</button>

      <h2>isVisible Value: {{isVisible}}</h2>

      <h3 *ngIf="isVisible; else elseBlock">
          IsVisible variable is {{isVisible}} and inside If block.
      </h3>
    
      <ng-template #elseBlock>
         <h3> IsVisible variable is {{isVisible}} and inside else block.</h3>
      </ng-template>

      <h2>**********IF then ELSE Block**********</h2>

      <div *ngIf="displayed; then thenBlock else elseBlock">

      </div>

        <ng-template #thenBlock>
          <h2>Inside then Block</h2>
        </ng-template>

        <ng-template #elseBlock>
          <h2>Inside else Block</h2>
        </ng-template>

        <h2>***********ngSwitch********</h2>
         <h3> Type red, green ,blue, other in textfield and click on click button</h3>
        <div [ngSwitch] ="color">
            <div *ngSwitchCase="'red'">You picked red color</div> 
            <div *ngSwitchCase="'green'">You picked green color</div>
            <div *ngSwitchCase="'blue'">You picked blue color</div>
            <div *ngSwitchDefault>No color picked </div>
        </div>

        <h2>*********ngFor Directive********</h2>

        <h3 *ngFor="let color of colors; index as i" [style.color]="color" >
            {{i}}  {{color}}
        </h3>


    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'directive';
  public isVisible = true;
  public displayed = false;
  color = 'red';
  public colors = ['Red','Green','Orange','Blue'];

  onClick(currentVaue) {
    this.isVisible = currentVaue.value;
    this.color = currentVaue.value;
  }
}
