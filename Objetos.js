const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(customer, 'altura', '1.85', 'email');

console.log(customer);

