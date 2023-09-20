const productList = document.getElementById("productList");
const addProductBtn = document.getElementById("addProductBtn");
const productModal = document.getElementById("productModal");

// URL API MockAPI.io
const apiURL = "https://650a5ecedfd73d1fab084e57.mockapi.io/products";

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
    // Fetch data dari API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            productList.innerHTML = ""; // Kosongkan daftar produk sebelum menambahkan yang baru
            data.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2 class="nama-produk">${product.name}</h2>
                    <p class="deskripsi">${product.description}</p>
                    <p class="harga">Harga: $ ${product.price}</p>
                    <a href=""><p class="selengkapnya">selengkapnya..</p></a>
                    <div class="btn-block">
                        <button href="" class="btn-order">Order</button>
                        <i id="keranjang" class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <i id="btn-edit" class="fa-solid fa-pen-to-square" onclick="editProduct(${product.id})"></i>
                    <i id="btn-hapus" class="fa-solid fa-trash" onclick="deleteProduct(${product.id})"></i>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error("Error:", error));
}

// Fungsi untuk menutup modal
function closeModal() {
    productModal.style.display = "none";
}

// Fungsi untuk menampilkan modal penambahan produk
function openAddProductModal() {
    // Tampilkan modal
    productModal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h2>Tambah Produk</h2>
            <form id="productForm">
                <label for="name">Nama:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="image">Gambar URL:</label>
                <input type="text" id="image" name="image" required><br>
                <label for="description">Deskripsi:</label>
                <textarea id="description" name="description" required></textarea><br>
                <label for="price">Harga:</label>
                <input type="number" id="price" name="price" required><br>
                <button class="btn-simpan" type="submit">Simpan</button>
                <button class="btn-batal" type="button" onclick="closeModal()">Batal</button>
            </form>
        </div>
    `;
    productModal.style.display = "block";

    // Submit form penambahan produk
    const productForm = document.getElementById("productForm");
    productForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(productForm);
        const productData = Object.fromEntries(formData.entries());

        // Kirim data produk baru ke API
        fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        })
            .then(response => response.json())
            .then(() => {
                closeModal();
                displayProducts();
            })
            .catch(error => console.error("Error:", error));
    });
}

// Fungsi untuk menutup modal
function closeModal() {
    productModal.style.display = "none";
}

// Fungsi untuk menampilkan modal edit produk
function editProduct(id) {
    // Ambil data produk berdasarkan ID dari API
    fetch(`${apiURL}/${id}`)
        .then(response => response.json())
        .then(product => {
            // Tampilkan modal edit
            productModal.innerHTML = `
                <div class="modal-content">
                    <span class="close-btn" onclick="closeModal()">&times;</span>
                    <h2>Edit Produk</h2>
                    <form id="productForm">
                        <label for="name">Nama:</label>
                        <input type="text" id="name" name="name" value="${product.name}" required><br>
                        <label for="image">Gambar URL:</label>
                        <input type="text" id="image" name="image" value="${product.image}" required><br>
                        <label for="description">Deskripsi:</label>
                        <textarea id="description" name="description" required>${product.description}</textarea><br>
                        <label for="price">Harga:</label>
                        <input type="number" id="price" name="price" value="${product.price}" required><br>
                        <button class="btn-simpan" type="submit">Simpan Perubahan</button>
                        <button class="btn-batal" type="button" onclick="closeModal()">Batal</button>
                    </form>
                </div>
            `;
            productModal.style.display = "block";

            // Submit form edit produk
            const productForm = document.getElementById("productForm");
            productForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const formData = new FormData(productForm);
                const updatedProductData = Object.fromEntries(formData.entries());

                // Kirim data produk yang diperbarui ke API
                fetch(`${apiURL}/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedProductData),
                })
                    .then(response => response.json())
                    .then(() => {
                        closeModal();
                        displayProducts();
                    })
                    .catch(error => console.error("Error:", error));
            });
        })
        .catch(error => console.error("Error:", error));
}

// Fungsi untuk menghapus produk
function deleteProduct(id) {
    // Konfirmasi penghapusan
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        // Hapus produk dari API
        fetch(`${apiURL}/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                displayProducts();
            })
            .catch(error => console.error("Error:", error));
    }
}

// Event listener untuk tombol "Tambah Produk"
addProductBtn.addEventListener("click", openAddProductModal);

// Memanggil fungsi untuk menampilkan daftar produk saat halaman dimuat
displayProducts();
