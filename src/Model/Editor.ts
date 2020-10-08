class Editor {
	actionsList: Array<Action>;
	
	constructor() {
		this.actionsList = []
	}
	
	add(action: Action) {
		this.actionsList.push(action);
	}
	
	delete(action: Action) {
		this.actionsList.push(action);
	}
}
