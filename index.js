var data = {
	value: 8,
	left:
	{
		value: 5,
		left:
		{
			value: 3
		},
		right:
		{
			value: 6
		}
	},
	right:
	{
		value: 10,
		right:
		{
			value: 12
		}
	}
};


const invert_bt = (tree) => {

	if (tree) {
		var left = tree.left;
		var right = tree.right;
		tree.left = right;
		tree.right = left;
		invert_bt(tree.left);
		invert_bt(tree.right);
	}

	return tree;
}

data = invert_bt(data);
console.log(data)
