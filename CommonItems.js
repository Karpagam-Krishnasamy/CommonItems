const array = [[{
	name: 'karpagam',
	country: 'india',
},
{
	name: 'abi',
	country: 'india',
},
{
	name: 'anitha',
	country: 'india',
},
{
	name: 'kavya',
	country: 'india',
}],
[{
	name: 'arun',
	country: 'india',
},
{
	name: 'abinaya',
	country: 'india',
},
{
	name: 'kavya',
	country: 'india',
},
{
	name: 'anitha',
	country: 'india',
}],
[{
	name: 'anitha',
	country: 'india',
},
{
	name: 'aishu',
	country: 'india',
}]];

const result = array.reduce((array1, array2)=> 
                 array1.filter(obj1 => 
                  array2.some(obj2 => obj1.name === obj2.name)));

console.log(result);