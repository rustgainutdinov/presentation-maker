function instanceOfA(object: any): object is Circle {
	return 'member' in object;
}

function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	// if (editor.currentContent instanceof Circle) {
	// 	return;
	// }
	// @ts-ignore ПОКА ЧТО ТАК, ПОТОМ ДОБАВЛЮ ПРОВЕРКУ НА ТИП
	const circle: Circle = editor.currentContent;
	circle.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
}
