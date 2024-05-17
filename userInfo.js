/*
 and creates user profiles based on them. It ensures that both arrays are of the same length, 
 throws an error otherwise. Then, it iterates through each pair of original and modified names, 
 assigning each a unique ID via an auto-incrementing `idCounter`. Finally, it constructs an array of 
 user profiles, each containing the original name, modified name, and unique ID.
*/
let idCounter = 1;  

function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("Arrays must have the same length");
  }

  const userProfiles = [];

  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];

    userProfiles.push({
      id: idCounter++,
      originalName,
      modifiedName,
    });
  }

  return userProfiles;
}