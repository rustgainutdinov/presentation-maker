import Editor from "../../../model/Editor";

export interface EditorState {
	statesList: Editor[]
}

export const STATE_ADDED = 'STATE_ADDED';

interface AddStateAction {
	type: typeof STATE_ADDED
	editor: Editor
}

export function addState(editor: Editor): AddStateAction {
	return {
		type: STATE_ADDED,
		editor
	}
}

//TODO: add default state
const initialState: EditorState = {
	statesList: []
};

export function statesReducer(
	state = initialState,
	action: AddStateAction
): EditorState {
	switch (action.type) {
		case STATE_ADDED:
			return {
				statesList: [...state.statesList, action.editor]
			}
	}
	return state;
}
