// Generate a hash using bcrypt
//Compare a password with a hash using bcrypt
import bcrypt from "bcryptjs";

let password = "123456789055@Appplle";
let hashedPassword = await bcrypt.hash(password, 10);
//console.log("Hashed Password: ", hashedPassword);

// Compare the password with the hash
let loginPassword = "123456789055@Appplle";
let isMatch = await bcrypt.compare(loginPassword, hashedPassword);
console.log("Password Match: ", isMatch);
