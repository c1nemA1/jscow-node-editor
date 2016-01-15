$(function(){

	node1 = jsCow.get(jsCow.res.components.node, { 
		model: {
			title: 'Node 1',
			pos: {
				left: 20,
				top: 100
			},
			inputs: [
				{
					"type": "input",
					"title": "Input Port 1",
					"value": 1
				},
				{
					"type": "input",
					"title": "Input Port 2",
					"value": 2
				},
				{
					"type": "input",
					"title": "Input Port 3",
					"value": 3
				}
			],
			outputs: [
				{
					"type": false,
					"title": "Output Port 1",
					"value": "1"
				}
			]
		}
	}).run();

	node2 = jsCow.get(jsCow.res.components.node, { 
		model: {
			title: 'Node 1',
			pos: {
				left: 420,
				top: 50
			},
			inputs: [
				{
					"type": "input",
					"title": "Input Port 1",
					"value": 1
				}
			],
			outputs: [
				{
					"type": false,
					"title": "Output Port 1",
					"value": 1
				},
				{
					"type": false,
					"title": "Output Port 2",
					"value": 2
				},
				{
					"type": false,
					"title": "Output Port 3",
					"value": 3
				},
				{
					"type": false,
					"title": "Output Port 4",
					"value": 4
				},
				{
					"type": false,
					"title": "Output Port 5",
					"value": 5
				}
			]
		}
	}).run();

	node3 = jsCow.get(jsCow.res.components.node, { 
		model: {
			title: 'Node 1',
			pos: {
				left: 620,
				top: 300
			},
			inputs: [
				{
					"type": "input",
					"title": "Input Port 1",
					"value": 1
				},
				{
					"type": "input",
					"title": "Input Port 2",
					"value": 2
				}
			],
			outputs: [
				{
					"type": false,
					"title": "Output Port 1",
					"value": 1
				},
				{
					"type": false,
					"title": "Output Port 2",
					"value": 2
				}
			]
		}
	}).run();

});	