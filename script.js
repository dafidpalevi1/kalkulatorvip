/* script.js */
function hitungBonus() {
    let berlian = parseInt(document.getElementById("berlian").value) || 0;
    let durasiValue = document.getElementById("durasi").value.split('-');
    let durasi = parseInt(durasiValue[0]);
    let jam = parseInt(durasiValue[1]);
    let bonus = 0;
    let notif = "";

    if (berlian < 5000) {
        bonus = 0;
    } else if (berlian == 5000 && durasi == 22 && jam == 100) {
        bonus = berlian * 1.5;
    } else if (berlian >= 5000 && berlian <= 9999 && (durasi == 15 && jam == 30 || durasi == 20 && jam == 90)) {
        bonus = 0;
        notif = "Anda belum menerima bonus di bulan ini";
    } else if (berlian >= 5000 && berlian <= 49999) {
        if (durasi == 22 && jam == 100) {
            bonus = berlian * 2;
        } else if (durasi == 20 && jam == 90) {
            bonus = berlian * 1.7;
        } else {
            bonus = berlian * 1.5;
        }
    } else if (berlian >= 50000 && berlian <= 1000000) {
        if (durasi == 22 && jam == 100) {
            bonus = berlian * 2.7;
        } else if (durasi == 20 && jam == 90) {
            bonus = berlian * 2.25;
        } else {
            bonus = berlian * 1.5;
        }
    }
    
    let bonusDisplay = document.getElementById("bonusDisplay");
    let notifDisplay = document.getElementById("notif");
    if (bonus > 0) {
        document.getElementById("hasil").innerText = "Rp. " + bonus.toLocaleString("id-ID");
        bonusDisplay.style.display = "block";
        notifDisplay.style.display = "none";
    } else {
        bonusDisplay.style.display = "none";
        if (notif) {
            notifDisplay.innerText = notif;
            notifDisplay.style.display = "block";
        } else {
            notifDisplay.style.display = "none";
        }
    }
}
