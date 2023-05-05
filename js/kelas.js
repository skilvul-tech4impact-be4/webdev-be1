const classContainer = document.getElementById("containerClass")
const programContainer = document.getElementById("programContainer")

export const generateKelas = async () => {
	const response = await fetch("https://64527828a2860c9ed40d3b49.mockapi.io/kelas");
	const kelas = await response.json();
    
    let cards = ""
    kelas.forEach(e => {
    return cards += `
        <div class="card" style="width: 20rem;">
            <img src="${e.gambar}" class="card-img-top mt-2" style="width: auto; height: 12em;">
            <div class="card-body">
                <h5 class="card-title">${e.judul}</h5>
                <p class="card-text-secondary">${e.kategori}</p>
                <p class="card-text-secondary">${e.materi.length} Materi</p>
                <p class="card-text">${e.deskripsi}</p>
                <a href="#" class="btn btn-primary">Lihat Kelas</a>
            </div>
        </div>
    `
    })
    if (classContainer) {
        classContainer.innerHTML = cards
    }
    if (programContainer) {
        programContainer.innerHTML = cards
    }
};
