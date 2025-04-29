export const IndexStateService = () => {
	let index: number = $state(0);

	return {
		get index() {
			return index;
		},

		setIndex: (newIndex: number) => {
			index = newIndex;
		}
	};
};
