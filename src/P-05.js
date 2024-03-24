function sortFruits(fruits) {
	return fruits.sort();
} 
//convertido a arrow functions
const sortFruits = (fruits) => fruits.sort();


function getElementInTheMiddle(list) {
	return list[list.length / 2];
}
//convertido a arrow functions
const getElementInTheMiddle = (list) => list[Math.floor(list.length / 2)];


function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}
//convertido a arrow functions
const adminLogin = (user) => {
    if (user === "ADMIN" || user === "DEV") {
        return true;
    }
    return false;
};
