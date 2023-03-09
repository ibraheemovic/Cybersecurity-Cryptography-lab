const alpha = 'abcdefghijklmnopqrstuvwxyz !';
const key = 'zaqwsxcderfvbgtyhnmjuiklop$ ';

const cipher = (str) =>{


  return str.toLowerCase().split('').map(ele =>{
    let index = alpha.indexOf(ele)
    return key[index]
  }).join('')
}

const decipher = (str) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz !";
  const key = "zaqwsxcderfvbgtyhnmjuiklop$ ";

  return str.toLowerCase().split('').map(ele => {
    let index = key.indexOf(ele);
    return alpha[index]
  }).join('')
}


let ciphers = cipher('I love cryptography!');
console.log(ciphers);

let deciphers = decipher(ciphers)

console.log(deciphers)