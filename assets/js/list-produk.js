// list produk dalam bentuk array
var produkArray = [
    {
        nama: "Asus TUF Gaming",
        gambar: "../assets/Images/produk/asus.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Hot",
        harga: 146,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Iphone 14 Pro Max",
        gambar: "../assets/Images/produk/iphone14promax.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Hot",
        harga: 123,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Alexander Christie Watch",
        gambar: "../assets/Images/produk/alexander.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 75,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Eiger Backpack",
        gambar: "../assets/Images/produk/eiger.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 35,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Jeans Jacket",
        gambar: "../assets/Images/produk/jaket.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 56,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Canon Camera",
        gambar: "../assets/Images/produk/camera.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 68,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Fossil Woman Watch",
        gambar: "../assets/Images/produk/jamwanita.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 24,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "White Shoes",
        gambar: "../assets/Images/produk/sepatu.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 13,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "White LTD Helmet",
        gambar: "../assets/Images/produk/helmltd.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 8,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Cosmos Electric Fan",
        gambar: "../assets/Images/produk/kipas.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 75,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "CRRJU Watch",
        gambar: "../assets/Images/produk/jam.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 15,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Keyboard RGB",
        gambar: "../assets/Images/produk/keyboard.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 7,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "OPPO A54 Handphone",
        gambar: "../assets/Images/produk/oppoa54.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 5,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Men Shirt",
        gambar: "../assets/Images/produk/kaospria.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 4,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Oneset Shock Lock",
        gambar: "../assets/Images/produk/kuncishok.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 5,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    },
    {
        nama: "Backpack",
        gambar: "../assets/Images/produk/tas.jpg",
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        badge: "Sold Out!",
        harga: 5,
        user: "@onlineshop",
        detail: "Selengkapnya",
        button: "Order",
        icon: ""
    }
];



// Fungsi untuk membuat card produk
function buatCardProduk(produk) {
    var card = document.createElement("div");
    card.className = "card-page";

    var gambar = document.createElement("img");
    gambar.src = produk.gambar;

    var nama = document.createElement("h3");
    nama.textContent = produk.nama;
    nama.className = "nama-produk";

    var deskripsi = document.createElement("p");
    deskripsi.textContent = produk.deskripsi;
    deskripsi.className = "deskripsi";

    var badge = document.createElement("p");
    badge.textContent = produk.badge;
    badge.className = "badge";

    var user = document.createElement("p");
    user.textContent = produk.user;
    user.className = "user";

    var detail = document.createElement("a");
    detail.textContent = produk.detail;
    detail.className = "selengkapnya";

    var harga = document.createElement("h4");
    harga.textContent = "Price: $" + produk.harga;
    harga.className = "harga";

    var button = document.createElement("button");
    button.textContent = produk.button;
    button.className = "btn-order";

    var icon = document.createElement("i");
    icon.textContent = produk.icon;
    icon.className = "fa-solid fa-cart-shopping";

    card.appendChild(gambar);
    card.appendChild(nama);
    card.appendChild(deskripsi);
    card.appendChild(badge);
    card.appendChild(user);
    card.appendChild(harga);
    card.appendChild(detail);
    card.appendChild(button);
    card.appendChild(icon);

    return card;
}

// Menambahkan card produk ke dalam container
var produkContainer = document.getElementById("produk-container");
produkArray.forEach(function(produk) {
    var card = buatCardProduk(produk);
    produkContainer.appendChild(card);
});