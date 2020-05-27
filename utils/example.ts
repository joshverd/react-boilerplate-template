export default {
  generateUsers,
};

// Generate a list of users based on the supplied parameters
function generateUsers({
  count,
  names,
  ages,
}:{
  count: number,
  names: string[],
  ages: number[],
}, callback:CallbackFunction) {
  type UsersArray = {
    name: string,
    age: number,
  };

  // The array of users
  let users:UsersArray[] = [];

  // Generating the example users
  for(let i = 0; i < count; i++) {
    // Grabbing a random name and age from each data set
    const name = names[Math.floor(Math.random() * names.length)];
    const age = ages[Math.floor(Math.random() * ages.length)];

    // Pushing the complete user object
    users.push({ name, age });
  }

  // Returning the users object to the callback function, with no error
  return callback(false, users);
}
