//creating the user interface


interface User {
    name: string;
    age: number;
    occupation: string;
};

//passing requirements to the interface

type DataBase = User

//using type in db model
export const users: DataBase[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
//presenting necessary information
export function logPerson(users:DataBase) {
    console.log(` - ${users.name}, ${users.age}`);
}

console.log('Users:');
users.forEach(logPerson);