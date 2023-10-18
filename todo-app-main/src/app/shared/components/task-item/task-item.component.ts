import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
	@Input('data') public task: any = {};
	@Output('edit') public editEmitter = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	public editTask() {
		this.editEmitter.emit(this.task);
	}
}
