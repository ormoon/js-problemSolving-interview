//you have to group data from property that is received as an argument

var students = [{
    name: "ram",
    class: 2,
    house: 'blue'
}, {
    name: "shyam",
    class: 5,
    house: 'green'
}, {
    name: "ramesh",
    class: 2,
    house: 'green'
}, {
    name: "sita",
    class: 3,
    house: 'blue'
}, {
    name: "gita",
    class: 2,
    house: 'green'
}];

function groupBy(arr, property) {
    var group = {};
    students.forEach(object => {
    	if(!group[object[property]] ){
    		group[object[property]]=[object]
    	}else{
    		group[object[property]].push(object)
    	}

    });
    console.log(group)
}

groupBy(students, 'class');