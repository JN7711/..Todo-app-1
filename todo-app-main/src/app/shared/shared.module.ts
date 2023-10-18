import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
	declarations: [TaskItemComponent],
	imports: [CommonModule, IonicModule],
	exports: [TaskItemComponent],
})
export class SharedModule {}
