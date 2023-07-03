const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
console.log(months);
// months.splice(1, 1);
// console.log(months);
const user = months.splice(1, 1);
console.log(user);
console.log(months);