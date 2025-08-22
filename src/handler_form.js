// File for validate email from the HTML form

const email_format = /^\d{7}[a-z]{1}@umich.mx$/    // Correo instituciónal con 7 dígitos, una letra y @umich.mx 
let email_example = "1578636g@umich.mx"
console.log(email_format.test(email_example))