const classContainer = document.getElementById("containerClass")

export const generateKelas = async () => {
	const response = await fetch("https://64527828a2860c9ed40d3b49.mockapi.io/kelas");
	const kelas = await response.json();
    
    let cards = ""
    kelas.forEach(e => {
    cards += `
        <div class="card" style="width: 18rem;">
            <img src="${e.gambar}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${e.judul}</h5>
                <p class="card-text">${e.deskripsi}</p>
                <a href="#" class="btn btn-primary">Lihat Kelas</a>
            </div>
        </div>
    `
    })
    return classContainer.innerHTML = cards
};
