// [1, 2, 3] -> [2, 4, 6]
const e1 = [1, 2, 3, 4];
// Код энд бичнэ үү:
const hariu = e1.map((element) => {
  return element * 2;
});
console.log(hariu);

// EASY 2: 10-аас их тоонуудыг шүүж ав (filter ашигла)
// [5, 12, 8, 20] -> [12, 20]
const e2 = [5, 12, 8, 20, 3];
// Код энд бичнэ үү:
const hariu = e2.filter((element) => {
  return element > 10;
});
console.log(hariu);

// EASY 3: "Bold" гэдэг нэрийг олж ав (find ашигла)
const e3 = ["Bat", "Oyun", "Bold", "Sara"];
// Код энд бичнэ үү:
const hariu = e3.find((element) => {
  return element === "Bold";
});
console.log(hariu);

// EASY 4: Массивын бүх тоонд 10 нэм (map ашигла)
// [1, 2, 3] -> [11, 12, 13]
const e4 = [1, 2, 3, 4];
// Код энд бичнэ үү:
const hariu = e4.map((element) => {
  return element + 10;
});
console.log(hariu);

// EASY 5: Тэгш тоонуудыг л шүүж ав (filter ашигла)
// [1, 2, 3, 4, 5, 6] -> [2, 4, 6]
const e5 = [1, 2, 3, 4, 5, 6];
// Код энд бичнэ үү:
const hariu = e5.filter((element) => {
  return element % 2 === 0;
});
console.log(hariu);

/* ============================================================
   🟡 MEDIUM (5 дасгал)
   ============================================================ */

// MEDIUM 1: Барааны үнийг 10%-иар нэмэгдүүл (map ашигла)
// 1000 -> 1100
const m1 = [1000, 2000, 5000];
// Код энд бичнэ үү:
const hariu = m1.map((element) => {
  return element * 1.1;
});
console.log(hariu);

// HARD 1: Тоонуудыг 2-оор үржүүлээд (map), дараа нь 10-аас
// их үр дүнг л үлдээ (filter) - 2 method дараалуулж бич
// [1,2,3,4,5,6] -> [12]
const h1 = [1, 2, 3, 4, 5, 6];
// Код энд бичнэ үү:
const hariu = h1.map((element) => {
  return element * 2;
});
const hariu2 = hariu.filter((elements) => {
  return elements > 10;
});
console.log(hariu2);

// HARD 3: 50-аас дээш дүнг шүүгээд (filter), дараа нь
// тэдгээрт 5 нэм (map) - 2 method дараалуулж бич
// [45,60,80,95,30] -> [65,85,100]
const h3 = [45, 60, 80, 95, 30];
// Код энд бичнэ үү:
const hariu = h3.filter((element) => {
  return element > 50;
});
const hariu2 = hariu.map((elements) => {
  return elements + 5;
});
console.log(hariu2);

// E1. Object-оос мэдээлэл авах
// student object-оос сурагчийн нэр, нас, оноог хэвлэ.

const studentE1 = {
  name: "Anu",
  age: 15,
  score: 88,
};

// Expected:
// Anu
// 15
// 88

// your code here

console.log(studentE1.name, studentE1.age, studentE1.score);

// E2. Object-ийн утгыг өөрчлөх
// Машины өнгийг "Black" болгож,
// дараа нь бүх object-ийг хэвлэ.

const carE2 = {
  brand: "Toyota",
  year: 2020,
  color: "White",
};

// Expected:
// {
//   brand: "Toyota",
//   year: 2020,
//   color: "Black"
// }

// your code here
carE2.color = "Black";
console.log(carE2.brand, carE2.year, carE2.color);

// E3. Шинэ property нэмэх
// phone object-д price нэртэй шинэ property нэм.
// Утга нь 2500000 байна.

const phoneE3 = {
  brand: "Samsung",
  model: "S25",
  price: 250000,
};

// Expected:
// {
//   brand: "Samsung",
//   model: "S25",
//   price: 2500000
// }

// your code here
console.log(phoneE3.brand, phoneE3.model, phoneE3.price);

// E4. Object destructuring
// movie object-оос title, year, rating утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.

const movieE4 = {
  title: "Interstellar",
  year: 2014,
  rating: 9,
};

// Expected:
// Interstellar
// 2014
// 9

// your code here
const { title, year, rating } = movieE4;
console.log(title);
console.log(year);
console.log(rating);

// E5. Array destructuring
// Array-ийн эхний хоёр өнгийг
// firstColor, secondColor хувьсагчид хадгалаад хэвлэ.

const colorsE5 = ["red", "blue", "green", "yellow"];

// Expected:
// red
// blue

// your code here

const [firstColor, secondColor] = colorsE5;
console.log(firstColor);
console.log(secondColor);

// E6. Spread ашиглан object хуулах
// user object-ийг spread ашиглан хуулж,
// copiedUser нэртэй шинэ object үүсгэ.
//
// Do not write:
// const copiedUser = user;

const userE6 = {
  name: "Bataa",
  age: 16,
  level: "Beginner",
};

// Expected:
// {
//   name: "Bataa",
//   age: 16,
//   level: "Beginner"
// }

// your code here
const copiedUser = {
  ...userE6,
};

// E7. Хуулаад нэг утгыг өөрчлөх
// product object-ийг өөрчлөхгүйгээр
// updatedProduct нэртэй шинэ object үүсгэ.
// Шинэ object-ийн price нь 180000 байх ёстой.

const productE7 = {
  name: "Keyboard",
  price: 150000,
  color: "Black",
};

// Expected updatedProduct:
// {
//   name: "Keyboard",
//   price: 180000,
//   color: "Black"
// }
//
// Original product must stay unchanged.

// your code here
const updatedProduct = {
  ...productE7,
  price: 180000,
};

console.log(updatedProduct);

// M1. Function-д object дамжуулах
// showStudent() function бич.
//
// Function нь student object авч,
// дараах өгүүлбэрийг буцаана:
//
// "Anu scored 90 points."

const studentM1 = {
  name: "Anu",
  score: 90,
};

function showStudent(student) {
  // your code here
  return `${studentM1.name} scored ${studentM1.score} points`;
}

console.log(showStudent(studentM1));

// Expected:
// Anu scored 90 points.

// M2. Destructuring ашигладаг function
// getProductInfo() function дотор
// object destructuring ашигла.
//
// name, price, stock утгуудыг салгаж аваад
// өгүүлбэр буцаа.

const productM2 = {
  name: "Monitor",
  price: 850000,
  stock: 5,
};

function getProductInfo(product) {
  // your code here
  const { name, price, stock } = productM2;
  return `${name} costs ${price} and has ${stock} items in stock.`;
}

console.log(getProductInfo(productM2));

// Expected:
// Monitor costs 850000 and has 5 items in stock.

// M3. map() ашиглан нэрүүдийг авах
// Бүх сурагчийн нэрийг агуулсан
// шинэ array үүсгэ.

const studentsM3 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 75 },
  { id: 3, name: "Saraa", score: 85 },
];

// Expected:
// ["Anu", "Bat", "Saraa"]

// your code here

const newArr = studentsM3.map((names) => {
  return names.name;
});
console.log(newArr);
// M4. filter() ашиглан тэнцсэн сурагчдыг авах
// 80 болон түүнээс дээш оноотой сурагчдыг ол.

const studentsM4 = [
  { name: "Anu", score: 90 },
  { name: "Bat", score: 65 },
  { name: "Saraa", score: 85 },
  { name: "Bold", score: 72 },
];

// Expected:
// [
//   { name: "Anu", score: 90 },
//   { name: "Saraa", score: 85 }
// ]

// your code here
const newArr = studentsM4.filter((scores) => {
  return scores.score > 80;
});
console.log(newArr);

// M5. find() + destructuring
// id нь 3-тай тэнцүү хэрэглэгчийг ол.
// Дараа нь name болон age утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.

const usersM5 = [
  { id: 1, name: "Anu", age: 15 },
  { id: 2, name: "Bat", age: 17 },
  { id: 3, name: "Suvd", age: 16 },
];

// Expected:
// Suvd
// 16

// your code here
const newArr = usersM5.find((ids) => ids.id === 3);
const { name, age } = newArr;
console.log(name);
console.log(age);

// M6. Array spread ашиглан шинэ элемент нэмэх
// Анхны products array-г өөрчлөхгүйгээр
// newProduct-ийг нэмсэн newProducts array үүсгэ.

const productsM6 = [
  { id: 1, name: "Mouse", price: 50000 },
  { id: 2, name: "Keyboard", price: 120000 },
];

const newProductM6 = {
  id: 3,
  name: "Monitor",
  price: 700000,
};
const newProducts = [...productsM6, newProductM6];
console.log(newProducts);
// Expected newProducts:
// [
//   { id: 1, name: "Mouse", price: 50000 },
//   { id: 2, name: "Keyboard", price: 120000 },
//   { id: 3, name: "Monitor", price: 700000 }
// ]
//
// Original productsM6 must stay unchanged.

// your code here

// H1. Product-ийн үнийг шинэчлэх
//
// 1. id нь 2-той product-ийг find() ашиглан ол.
// 2. Spread ашиглан хуул.
// 3. Шинэ object-ийн price-ийг 150000 болго.
// 4. Анхны object өөрчлөгдөх ёсгүй.

const productsH1 = [
  { id: 1, name: "Mouse", price: 50000 },
  { id: 2, name: "Keyboard", price: 120000 },
  { id: 3, name: "Monitor", price: 700000 },
];

// Expected updatedProduct:
// {
//   id: 2,
//   name: "Keyboard",
//   price: 150000
// }

// your code here

const newArr = productsH1.find((ids) => ids.id === 2);
newArr.price = 150000;
console.log(newArr);

// H2. Оноог нэмэгдүүлэх
//
// Сурагч бүрийн оноонд 5 оноо нэмсэн
// шинэ array үүсгэ.
//
// RULES:
// - Original studentsH2 өөрчлөгдөх ёсгүй.
// - map(), condition, spread ашигла.
// - 100-аас их оноо гарвал 100 болго.

const studentsH2 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 67 },
  { id: 3, name: "Saraa", score: 98 },
];

// Expected:
// [
//   { id: 1, name: "Anu", score: 95 },
//   { id: 2, name: "Bat", score: 72 },
//   { id: 3, name: "Saraa", score: 100 }
// ]

// your code here
let newArr = studentsH2.map((scores) => {
  if (scores.score > 96) {
    scores.score = 95;
  }
  const hariu = { ...studentsH2, score: scores.score };
  return scores.score + 5;
});
console.log(hariu);

// H3. Бүтээгдэхүүний хямдрал
//
// applyDiscount() нэртэй function бич.
//
// Function нь:
// - product object авна
// - discountPercent авна
// - spread ашиглан шинэ object үүсгэнэ
// - хямдарсан шинэ үнийг буцаана
//
// Original product-ийн үнэ өөрчлөгдөх ёсгүй.

const productH3 = {
  id: 1,
  name: "Headphones",
  price: 200000,
};

function applyDiscount(product, discountPercent) {
  // your code here
  return productH3.price * 0.8;
}
const hariu = { ...productH3, price: productH3.price * 0.8 };

const discountedProductH3 = applyDiscount(productH3, 20);

console.log(hariu);

// Expected:
// {
//   id: 1,
//   name: "Headphones",
//   price: 160000
// }
//
// Original productH3.price must remain 200000.

// H4. Сурагчдын тайлан
//
// 1. 60 болон түүнээс дээш оноотой сурагчдыг
//    filter() ашиглан ав.
//
// 2. Тэнцсэн сурагч бүрийг map() ашиглан
//    шинэ object болго.
//
// 3. Шинэ object-д хуучин мэдээллийг
//    spread ашиглан хуул.
//
// 4. status: "Passed" property нэм.
//
// 5. message property нэм.
//
// Message format:
// "Anu passed with 90 points."

const studentsH4 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 45 },
  { id: 3, name: "Saraa", score: 78 },
  { id: 4, name: "Bold", score: 55 },
];

const pass = studentsH4.filter((score) => {
  return score.score >= 60;
});
const newObj = pass.map((element) => {
  const new2 = { ...newObj, score };
});
console.log(pass);

// Expected:
// [
//   {
//     id: 1,
//     name: "Anu",
//     score: 90,
//     status: "Passed",
//     message: "Anu passed with 90 points."
//   },
//   {
//     id: 3,
//     name: "Saraa",
//     score: 78,
//     status: "Passed",
//     message: "Saraa passed with 78 points."
//   }
// ]

// your code here

// H5. Shopping cart challenge
//
// 1. stock нь 0-ээс их бүтээгдэхүүнүүдийг filter() ашиглан ав.
//
// 2. Бүтээгдэхүүн бүрийн нийт үнийг:
//    price * quantity
//    томьёогоор ол.
//
// 3. map() болон spread ашиглан
//    бүтээгдэхүүн бүрд totalPrice property нэм.
//
// 4. totalPrice нь 200000-аас их
//    эхний бүтээгдэхүүнийг find() ашиглан ол.
//
// 5. Олсон бүтээгдэхүүний name, totalPrice утгуудыг
//    destructuring ашиглан салгаж аваад хэвлэ.

const cartH5 = [
  {
    id: 1,
    name: "Mouse",
    price: 50000,
    quantity: 2,
    stock: 10,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 120000,
    quantity: 2,
    stock: 5,
  },
  {
    id: 3,
    name: "Monitor",
    price: 700000,
    quantity: 1,
    stock: 0,
  },
  {
    id: 4,
    name: "Headphones",
    price: 150000,
    quantity: 2,
    stock: 3,
  },
];

// Expected final output:
// Keyboard
// 240000
//
// Monitor must not be included because stock is 0.

// your code here
const newCart = cartH5.filter((pass) => {
  return pass.stock > 0;
});
const newCarts = newCart.map((cart) => {
  return { ...cart, total: cart.price * cart.quantity };
});
const hariu = newCarts.find((cart) => cart.total > 200000);
console.log(hariu);
