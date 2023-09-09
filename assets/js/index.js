// code struktur
console.log('Hello world'); console.log('Hello world');

console.log('Hello world')
console.log('Hello world')

// camelCase
let firstName = "Rizki Dian";

// PascalCase
let Firstname = "Rizki Dian";

// snake_case
let first_name = "Rizki Dian";

// javascript variables var, let, const
var nama = "RIZKI DIAN PRATAMA";
console.log(nama);

let nim = 210180011;
console.log(nim);

const alamat = "Binjai";
console.log(alamat);

// global scope
var universitas = "Universitas Malikussaleh";

function kampus() {
    //local scope > di dalam function, di dalam if, di dalam loop
    console.log(universitas);
}

kampus();
// type data string
const mitra1 = "Arkatama";
const mitra2 = 'Arkatama';
const mitra3 = `Arkatama`;

// type data null
let mygirlfriend = null;

// type data undefined
let name;
console.log('name');

// type data boolean
let isAdmin = false;
console.log(isAdmin);
console.log(typeof isAdmin);

let pernyataan = true && false;
console.log(pernyataan); // false
console.log(100<10); // false

// type data number
let bilangan = 12;
console.log(bilangan); //12
console.log(100/5); //infinity
console.log("JavaScript" / 2); //NaN

let inf = 100/10;
console.log(inf);

let bilangan1 =1;
console.log(typeof bilangan1); // number

// self assignment
let konversiBilangan = String(bilangan1);
console.log(typeof konversiBilangan); // string

//operator aritmatika > type data number
let bilanganA = 20;
let bilanganB = 10;

console.log(bilanganA - bilanganB);
console.log(bilanganA + bilanganB);
console.log(bilanganA * bilanganB);
console.log(bilanganA / bilanganB);

// mengecek type data
console.log(typeof "Rizki Dian Pratama"); // string

// type data object
let employee = {
    nama: "Rizki dian",
    umur: 20,
    jurusan: "Sistem Informasi",
};

console.log(`Nama saya ${employee.nama} ,umur saya ${employee.umur} tahun, jurusan saya ${employee.jurusan}`)
console.log(employee);

// landing page
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

showSlide(currentSlide);
