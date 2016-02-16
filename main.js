parents = [
	{	
		'firstName' : 'Amanda',
		'lastName' : 'Harris',
		'age' : 42,
		'gender' : 'f',
		'children' : [
			{
				'name' : 'Ben',
				'ages' : 18,
				'gender' : 'm'
			},
			{
				'name' : 'Lisa',
				'ages' : 15,
				'gender' : 'f'
			}
		]
	},
	{
		'firstName' : 'Brian',
		'lastName' : 'Hall',
		'age' : 36,
		'gender' : 'm',
		'children' : [
			{
				'name' : 'Erica',
				'ages' : 11,
				'gender' : 'f'
			},
			{
				'name' : 'Jenny',
				'ages' : 8,
				'gender' : 'f'
			}
		]
	},
	{
		'firstName' : 'Terrance',
		'lastName' : 'Smith',
		'age' : 49,
		'gender' : 'm',
		'children' : [
			{
				'name' : 'David',
				'ages' : 17,
				'gender' : 'm'
			},
			{
				'name' : 'Alex',
				'ages' : 23,
				'gender' : 'f'
			},
			{
				'name' : 'Joe',
				'ages' : 25,
				'gender' : 'm'
			}
		]
	},
	{
		'firstName' : 'Alyssa',
		'lastName' : 'Ingram',
		'age' : 28,
		'gender' : 'f',
		'children' : [
			{
				'name' : 'Jamie',
				'ages' : 3,
				'gender' : 'f'
			},
			{
				'name' : 'Lori',
				'ages' : 2,
				'gender' : 'f'
			}
		]
	}
];

var currentChild;

var numParents = 0;
var totalParentAge = 0;
var numMaleKids = 0;
var kidsTotalAge = 0;
var kidsAvg = 0;
var avgAge = 0;
var childrenLength;
var avgFemale = 0;
var numFemale = 0;
var femaleTotalAge = 0;

for (i = 0; i < parents.length; i++) {

	childrenLength = parents[i].children.length;

	parents[i].children[childrenLength] = {
		'name' : 'Baby',
		'ages' : 1,
		'gender' : 'f'
	}
	
	if (parents[i].gender === 'm') {

		parents[i].age = parents[i].age + 5;

	}
	
	numParents++;
	
	totalParentAge += parents[i].age

	for (var j = 0; j < parents[i].children.length; j++) {

		currentChild = parents[i].children[j]

		console.log(currentChild.name + ' (' + currentChild.ages + ', ' + currentChild.gender +')')

		if (parents[i].children[j].gender === 'm') {

			kidsTotalAge += parents[i].children[j].ages;

			numMaleKids++


		}

		if (parents[i].children[j].gender === 'f' && parents[i].children[j].ages < 12) {

			femaleTotalAge +=parents[i].children[j].ages;

			numFemale++

		}
	}
}

console.log(totalParentAge / numParents)

console.log(kidsTotalAge / numMaleKids)

console.log(femaleTotalAge/ numFemale)