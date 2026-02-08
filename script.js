const correctPassword = "09022006"; 
const passwordScreen = document.getElementById("passwordScreen");
const content = document.getElementById("content");
const music = document.getElementById("FM");
const typedText = document.getElementById("typedText");
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");

const letter = `
Hai kamu 🤍

Selamat ulang tahun ke-20.
Semoga hari ini kamu merasa dicintai,
dihargai, dan diingat.

Terima kasih sudah hadir di dunia ini.
Tetap jadi Zahrina yang hangat dan tulus ✨
`;

const photoCaptions = [
  "Untuk Zahrina: Zahrina datang tanpa banyak suara, tapi kehadirannya selalu meninggalkan makna. 🤍",
  "Untuk Zahrina: Dalam langkahnya yang tenang, Zahrina menyimpan keberanian yang tak perlu ditunjukkan. 🤍",
  "Untuk Zahrina: Senyumnya bukan sekadar indah, melainkan tempat singgah bagi lelah yang tak terucap. 🤍",
  "Untuk Zahrina: Zahrina mengajarkan bahwa kelembutan bukan tanda lemah, melainkan bentuk kekuatan yang paling jujur. 🤍",
  "Untuk Zahrina: Ada cahaya kecil dalam diri Zahrina, cukup untuk menerangi hari-hari yang redup. 🤍",
  "Untuk Zahrina: Ia tak pernah berusaha menjadi sempurna, namun selalu berhasil menjadi berarti. 🤍" ,
  "Untuk Zahrina: Dalam diamnya, Zahrina menyimpan ribuan doa baik untuk orang-orang yang ia sayangi. 🤍",
  "Untuk Kita: Di antara tawa dan diam, kita belajar bahwa kebersamaan tak selalu perlu kata. 🤍",
  "Untuk Kita: Kita bukan hanya berbagi waktu, tapi juga ruang untuk saling menguatkan. 🤍",
  "Untuk Zahrina: Happy Birthday Zahrina! 🤍🎉"
];

let index = 0;

function typeEffect() {
  if (index < letter.length) {
    typedText.innerHTML += letter.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    passwordScreen.style.display = "none";
    content.classList.remove("hidden");
    music.play().catch(e => console.log("Audio play blocked"));
    typeEffect();
    document.querySelectorAll(".fade").forEach(el => {
      el.classList.add("show");
    });
  } else {
    alert("Password salah 😛");
  }
}

// --- FUNGSI POPUP / MODAL ---
function openModal(photoIndex) {
  modal.style.display = "flex";
  modalImg.src = `FM/foto${photoIndex + 1}.jpeg`;
  modalText.innerText = photoCaptions[photoIndex] || "Kenangan indah 🤍";
}

function closeModal() {
  modal.style.display = "none";
}

// Tutup modal kalau klik area gelap
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}