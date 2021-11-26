interface User {
    (firstName: string,
    lastName: string): string
    
}
let getUser: User;
getUser = (firstName, lastName): string => {
    return ` My first name is ${firstName} and last name is  ${lastName} `
}
console.log(getUser("syed", "Hashmi"))