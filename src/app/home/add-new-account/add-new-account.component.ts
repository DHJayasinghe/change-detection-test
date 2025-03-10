import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.scss'],
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewAccountComponent {
  @Output() accountAdded = new EventEmitter<string>();

  name: string = "";

  save() {
    this.accountAdded.emit(this.name);
    this.name = "";
  }
}
