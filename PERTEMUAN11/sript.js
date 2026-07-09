const keyword = document.getElementById("keyword");
const books = document.querySelectorAll(".book");
const radios = document.querySelectorAll('input[name="filter"]');
const yearInput = document.getElementById("yearInput");

function cariBuku() {

    const key = keyword.value.toLowerCase();

    const filter =
        document.querySelector('input[name="filter"]:checked').value;

    const year = yearInput.value;

    books.forEach(book => {

        const title =
            book.querySelector(".title").textContent.toLowerCase();

        const author =
            book.querySelector(".author").textContent.toLowerCase();

        const publisher =
            book.querySelector(".publisher").textContent.toLowerCase();

        const tahun =
            book.querySelector(".year").textContent;

        let cocok = false;

        if (filter === "title") {

            cocok = title.includes(key);

        } else if (filter === "author") {

            cocok = author.includes(key);

        } else if (filter === "publisher") {

            cocok = publisher.includes(key);

        } else if (filter === "titleyear") {

            cocok =
                title.includes(key) &&
                (year === "" || tahun === year);
        }

        if (cocok) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

keyword.addEventListener("keyup", cariBuku);

yearInput.addEventListener("keyup", cariBuku);

radios.forEach(radio => {
    radio.addEventListener("change", cariBuku);
});