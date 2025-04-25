// {} block

/* {
  let a = 1;
  console.log(a);
}
console.log(a); */
// A variable will be known within its block from the line where it is defined.

/* {
  // Parent Block
  let a = 1;
  {
    // Child Block
    console.log(a);
    {
      console.log(`i am from GrandChild ${a}`);
    }
  }
} */

// when a vaiable called first its search in own block if there is no varible in that block then it will be search in it parent block.

/* {
  let a = 1;
  {
    a = 10;
    console.log(a);
  }
  console.log(a);
} */

// Undefined
let a;
console.log(a);
// Undefined means variable is defined but not iniilize.

// Null

let a1 = null;
console.log(typeof a1);
