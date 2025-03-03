// Global değişken: txt verisinden okunan tüm satırları tutar
let globalBankTextData = [];
let currentBank = "akbank";

// Menü tanımlamaları (örneğin akbank ve enpara)
const menus = {
  akbank: [
    { name: "Hakkında", section: "hakkinda-akbank", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-akbank", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-akbank", icon: "fa-solid fa-note-sticky" }
  ],
  enpara: [
    { name: "Hakkında", section: "hakkinda-enpara", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-enpara", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-enpara", icon: "fa-solid fa-note-sticky" }
  ],
  isbankasi: [
    { name: "Hakkında", section: "hakkinda-isbankasi", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-isbankasi", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-isbankasi", icon: "fa-solid fa-note-sticky" }
  ],
  qnb: [
    { name: "Hakkında", section: "hakkinda-qnb", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-qnb", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-qnb", icon: "fa-solid fa-note-sticky" }
  ],
  vakifbank: [
    { name: "Hakkında", section: "hakkinda-vakifbank", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-vakifbank", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-vakifbank", icon: "fa-solid fa-note-sticky" }
  ],
  yapikredi: [
    { name: "Hakkında", section: "hakkinda-yapikredi", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-yapikredi", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-yapikredi", icon: "fa-solid fa-note-sticky" }
  ],
  fibabanka: [
    { name: "Hakkında", section: "hakkinda-fibabanka", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-fibabanka", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-fibabanka", icon: "fa-solid fa-note-sticky" }
  ],
  kuveytturk: [
    { name: "Hakkında", section: "hakkinda-kuveytturk", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-kuveytturk", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-kuveytturk", icon: "fa-solid fa-note-sticky" }
  ],
  garanti: [
    { name: "Hakkında", section: "hakkinda-garanti", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-garanti", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-garanti", icon: "fa-solid fa-note-sticky" }
  ],
  on: [
    { name: "Hakkında", section: "hakkinda-on", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-on", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-on", icon: "fa-solid fa-note-sticky" }
  ],
  tomhadi: [
    { name: "Hakkında", section: "hakkinda-tomhadi", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-tomhadi", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-tomhadi", icon: "fa-solid fa-note-sticky" }
  ],
  hayatfinans: [
    { name: "Hakkında", section: "hakkinda-hayatfinans", icon: "fa-solid fa-circle-info" },
    { name: "Grafikler", section: "grafikler-hayatfinans", icon: "fa-solid fa-chart-simple" },
    { name: "Notlar", section: "notlar-hayatfinans", icon: "fa-solid fa-note-sticky" }
  ]
};

const bankChartData = {
    akbank: {
      dateLabels: [
        "2024-11-22","2024-11-23","2024-11-24","2024-11-25","2024-11-26","2024-11-27",
        "2024-11-28","2024-11-29","2024-11-30","2024-12-01","2024-12-02","2024-12-03",
        "2024-12-04","2024-12-05","2024-12-06","2024-12-07","2024-12-08","2024-12-09",
        "2024-12-10","2024-12-11","2024-12-12","2024-12-13","2024-12-14","2024-12-15",
        "2024-12-16","2024-12-17","2024-12-18","2024-12-19","2024-12-20","2024-12-21",
        "2024-12-22","2024-12-23","2024-12-24","2024-12-25","2024-12-26","2024-12-27",
        "2024-12-28","2024-12-29","2024-12-30","2024-12-31","2025-01-01","2025-01-02",
        "2025-01-03","2025-01-04","2025-01-05","2025-01-06","2025-01-07","2025-01-08",
        "2025-01-09","2025-01-10","2025-01-11","2025-01-12","2025-01-13","2025-01-14",
        "2025-01-15","2025-01-16","2025-01-17","2025-01-18","2025-01-19","2025-01-20",
        "2025-01-21","2025-01-22","2025-01-23","2025-01-24","2025-01-25","2025-01-26",
        "2025-01-27","2025-01-28","2025-01-29","2025-01-30","2025-01-31","2025-02-01",
        "2025-02-02","2025-02-03","2025-02-04","2025-02-05","2025-02-06","2025-02-07",
        "2025-02-08","2025-02-09","2025-02-10","2025-02-11","2025-02-12","2025-02-13",
        "2025-02-14","2025-02-15","2025-02-16","2025-02-17","2025-02-18","2025-02-19",
        "2025-02-20","2025-02-21"
      ],
      googlePlayData: [
        10,8,9,8,1,15,8,10,4,5,10,14,8,10,7,5,8,5,21,7,13,5,10,10,6,15,14,11,9,7,
        5,8,10,13,21,17,13,5,10,18,12,10,12,8,14,16,13,8,11,9,8,8,13,17,11,13,8,
        8,4,11,8,15,6,7,11,7,10,5,12,8,9,6,11,7,10,7,12,6,10,16,15,17,12,24,16,29,
        13,12,16,13,22,16,17
      ],
      sikayetvarData: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,77,84,61,71,99,100,102,77,85,70,
        45,83,107,87,61,93,56,55,85,81,57,70,81,74,57,105,99,108,73,58,56,41,87,87,
        105,78,82,49,39,77,81,67,78,74,56,50,119,92,73,77,70,44,59,101,103,119,101,
        73,75,34,88,102,103,73,70,75,43,101,102,86,56,0
      ],
      labelsRating : ['iyi', 'kötü', 'orta'],
      frequenciesRating : [327, 621, 56]
    },
    enpara: {
      dateLabels: [
        "2024-11-22","2024-11-23","2024-11-24","2024-11-25","2024-11-26","2024-11-27",
        "2024-11-28","2024-11-29","2024-11-30","2024-12-01","2024-12-02","2024-12-03",
        "2024-12-04","2024-12-05","2024-12-06","2024-12-07","2024-12-08","2024-12-09",
        "2024-12-10","2024-12-11","2024-12-12","2024-12-13","2024-12-14","2024-12-15",
        "2024-12-16","2024-12-17","2024-12-18","2024-12-19","2024-12-20","2024-12-21",
        "2024-12-22","2024-12-23","2024-12-24","2024-12-25","2024-12-26","2024-12-27",
        "2024-12-28","2024-12-29","2024-12-30","2024-12-31","2025-01-01","2025-01-02",
        "2025-01-03","2025-01-04","2025-01-05","2025-01-06","2025-01-07","2025-01-08",
        "2025-01-09","2025-01-10","2025-01-11","2025-01-12","2025-01-13","2025-01-14",
        "2025-01-15","2025-01-16","2025-01-17","2025-01-18","2025-01-19","2025-01-20",
        "2025-01-21","2025-01-22","2025-01-23","2025-01-24","2025-01-25","2025-01-26",
        "2025-01-27","2025-01-28","2025-01-29","2025-01-30","2025-01-31","2025-02-01",
        "2025-02-02","2025-02-03","2025-02-04","2025-02-05","2025-02-06","2025-02-07",
        "2025-02-08","2025-02-09","2025-02-10","2025-02-11","2025-02-12","2025-02-13",
        "2025-02-14","2025-02-15","2025-02-16","2025-02-17","2025-02-18","2025-02-19",
        "2025-02-20","2025-02-21"
      ],
      googlePlayData: [
        20, 20, 19, 25, 13, 20, 14, 22, 15, 18,
        23, 17, 18, 18, 19, 20, 16, 21, 1084, 702,
        311, 198, 110, 117, 123, 51, 71, 59, 68, 42,
        26, 43, 35, 35, 29, 33, 22, 19, 24, 29,
        34, 33, 23, 26, 21, 44, 20, 33, 27, 19,
        18, 13, 38, 31, 25, 25, 16, 20, 31, 33,
        16, 19, 17, 14, 22, 18, 22, 19, 18, 25,
        23, 15, 13, 19, 23, 21, 30, 23, 25, 17,
        29, 23, 25, 21, 19, 20, 19, 34, 27, 23,
        21, 20
      ],
      sikayetvarData: [
        27, 26, 18, 34, 24, 24, 24, 20, 21, 15,
        29, 18, 20, 23, 20, 16, 8, 34, 41, 75,
        31, 28, 14, 13, 33, 29, 38, 25, 30, 17,
        15, 18, 25, 20, 28, 38, 6, 16, 26, 21,
        18, 28, 33, 13, 15, 26, 40, 72, 61, 64,
        28, 17, 33, 31, 32, 43, 27, 24, 17, 26,
        28, 32, 23, 12, 9, 29, 23, 18, 18, 15,
        23, 17, 10, 21, 28, 30, 26, 25, 21, 21,
        32, 17, 18, 18, 17, 14, 13, 31, 27, 23,
        17, 3
      ],
      labelsRating : ['iyi', 'kötü', 'orta'],
      frequenciesRating : [3330, 1269, 180]
    }
  };
  

function activateMenuItem(element) {
  document.querySelectorAll('#navMenu a').forEach(a => a.classList.remove('active'));
  element.classList.add('active');
}

function loadMenu(menuKey) {
  const navMenu = document.getElementById("navMenu");
  navMenu.innerHTML = "";
  menus[menuKey].forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item.name + " "; // Boşluk, ikon için
    const i = document.createElement('i');
    i.classList = item.icon;
    a.appendChild(i);
    a.onclick = function(e) {
      e.preventDefault();
      activateMenuItem(this);
      showSection(item.section);
    };
    li.appendChild(a);
    navMenu.appendChild(li);
  });
}

function switchMenu(menuKey) {
  currentBank = menuKey;
  loadMenu(menuKey);
  const firstMenuItem = document.querySelector('#navMenu a');
  if (firstMenuItem) {
    activateMenuItem(firstMenuItem);
    showSection(menus[menuKey][0].section);
  }
  // Menü seçildiğinde ilgili bankanın inline txt verisini yüklüyoruz
  loadBankTextData(menuKey);
  loadBankCarousel();
  loadTimelineChart();
  loadRatingDistributionChart();
  loadNotes();
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Inline txt verisini, ilgili banka id'sine göre (ör. "akbank") okuyup global değişkene atar
function loadBankTextData(bankId) {
    const bankDataMap = {
      akbank: window.akbankData,
      enpara: window.enparaData
    };
  
    const data = bankDataMap[bankId];
    if (!data) {
      console.error(`Veri bulunamadı: ${bankId}`);
      globalBankTextData = [];
    } else {
      globalBankTextData = data.split(/\r?\n/).map(line => line.trim()).filter(line => line);
    }
  }
  

// Global diziden rastgele 10 yorum seçen fonksiyon
function getRandom10Comments(dataArray) {
  const shuffled = [...dataArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

// Carousel'e yorumları yükleyen fonksiyon
function loadBankCarousel() {
    const randomComments = getRandom10Comments(globalBankTextData);
    // Tüm carousel öğelerini tek tek destroy edip temizliyoruz
    $('.owl-carousel').each(function () {
      if ($(this).data('owl.carousel')) {
        $(this).trigger('destroy.owl.carousel');
      }
      $(this).html('');
    });
    
    // Aktif bankanın carousel'ini seçiyoruz (örneğin "akbankCarousel" veya "enparaCarousel")
    const carousel = $(`#${currentBank}Carousel`);
  
    randomComments.forEach(comment => {
      const itemHtml = `<div class="item">${comment}</div>`;
      carousel.append(itemHtml);
    });
  
    carousel.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay:true,
      autoplayTimeout: 2500,      // her 3 saniyede bir geçiş yapar (3000 milisaniye)
      autoplaySpeed: 1000,  
      autoplayHoverPause: true, // Mouse üzerine gelince autoplay durur
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 5 }
      }
    });
  }
  
  //Karıştır Gitsin butonu
  document.addEventListener("DOMContentLoaded", () => {
    const shuffleButtons = document.getElementsByClassName("shuffle-button");
    Array.from(shuffleButtons).forEach(button => {
      button.addEventListener("click", () => {
        loadBankCarousel();
      });
    });
  });
  

  // Modal (Pop-up)
  let currentScale = 1;
  function openModal(src) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = src;
    modal.style.display = "flex";
    currentScale = 1;
    modalImg.style.transform = `scale(${currentScale})`;
  }

  function closeModal(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
      document.getElementById("imgModal").style.display = "none";
    }
  }

  function zoomIn(event) {
    event.stopPropagation();
    const modalImg = document.getElementById("modalImg");
    currentScale += 0.2;
    modalImg.style.transform = `scale(${currentScale})`;
  }

  function zoomOut(event) {
    event.stopPropagation();
    const modalImg = document.getElementById("modalImg");
    currentScale = Math.max(0.2, currentScale - 0.2);
    modalImg.style.transform = `scale(${currentScale})`;
  }

// Notlar (Local Storage) için global değişken
let editingIndex = -1;

function loadNotes() {
  // İlgili banka için container'ı seçiyoruz
  const noteList = document.querySelector(`#notlar-${currentBank} #noteList`);
  noteList.innerHTML = "";
  const notesKey = "notes-" + currentBank;
  const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'note-actions';
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Düzenle';
    editBtn.onclick = () => startEditNote(index);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    deleteBtn.onclick = () => deleteNote(index);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(actionsDiv);
    noteList.appendChild(li);
  });
}

function saveNotes(notes) {
  const notesKey = "notes-" + currentBank;
  localStorage.setItem(notesKey, JSON.stringify(notes));
}

function addNote() {
  const noteInput = document.querySelector(`#notlar-${currentBank} #noteInput`);
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const notesKey = "notes-" + currentBank;
    const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
    notes.push(noteText);
    saveNotes(notes);
    noteInput.value = "";
    loadNotes();
  }
}

function startEditNote(index) {
  const notesKey = "notes-" + currentBank;
  const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
  const noteInput = document.querySelector(`#notlar-${currentBank} #noteInput`);
  noteInput.value = notes[index];
  editingIndex = index;
  // Butonların container'ını ilgili banka alanından seçiyoruz
  document.querySelector(`#notlar-${currentBank} #addNoteBtn`).style.display = 'none';
  document.querySelector(`#notlar-${currentBank} #updateNoteBtn`).style.display = 'inline-block';
}

function updateNote() {
  const noteInput = document.querySelector(`#notlar-${currentBank} #noteInput`);
  const noteText = noteInput.value.trim();
  if (noteText !== "" && editingIndex > -1) {
    const notesKey = "notes-" + currentBank;
    const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
    notes[editingIndex] = noteText;
    saveNotes(notes);
    noteInput.value = "";
    editingIndex = -1;
    document.querySelector(`#notlar-${currentBank} #addNoteBtn`).style.display = 'inline-block';
    document.querySelector(`#notlar-${currentBank} #updateNoteBtn`).style.display = 'none';
    loadNotes();
  }
}

function deleteNote(index) {
  const notesKey = "notes-" + currentBank;
  const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
  notes.splice(index, 1);
  saveNotes(notes);
  loadNotes();
}

  // Yorumlar/Şikayetler Sıklık Grafiği (Hakkında)
  function loadTimelineChart() {
    const canvasId = 'timelineChart-' + currentBank;
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.error("Canvas bulunamadı: " + canvasId);
      return;
    }
    const ctx = canvas.getContext('2d');
  
    // Global nesneyi oluşturuyoruz, yoksa
    if (!window.timelineCharts) {
      window.timelineCharts = {};
    }
    
    // Eğer mevcut banka için bir grafik varsa destroy ediyoruz
    if (window.timelineCharts[currentBank]) {
      window.timelineCharts[currentBank].destroy();
    }
  
    // Yeni Chart örneğini oluşturup globalde saklıyoruz
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: bankChartData[currentBank].dateLabels,
        datasets: [
          {
            label: 'googleplay',
            data: bankChartData[currentBank].googlePlayData,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'şikayetvar',
            data: bankChartData[currentBank].sikayetvarData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tarih'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Kayıt Sayısı'
            },
            beginAtZero: true
          }
        },
        plugins: {
          title: { display: false },
          legend: { display: true }
        }
      }
    });
  
    window.timelineCharts[currentBank] = chartInstance;
  }
  

  // Star Rating Category Distribution (Grafikler sayfası)
  function loadRatingDistributionChart() {
    const canvasId = 'myChartRatingDistribution-' + currentBank;
    console.log(canvasId);
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.error("Canvas bulunamadı: " + canvasId);
      return;
    }
    const ctx = canvas.getContext('2d');
  
    // Global nesne oluşturuluyor
    if (!window.ratingCharts) {
      window.ratingCharts = {};
    }
  
    // Aynı bankaya ait grafik varsa destroy edelim
    if (window.ratingCharts[currentBank]) {
      window.ratingCharts[currentBank].destroy();
    }
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: bankChartData[currentBank].labelsRating,
        datasets: [{
          label: 'Frequency',
          data: bankChartData[currentBank].frequenciesRating,
          backgroundColor: 'rgba(135, 206, 250, 0.7)',
          borderColor: 'rgba(70, 130, 180, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Frequency'
            },
            beginAtZero: true
          },
          y: {
            title: {
              display: true,
              text: 'Star Rating Category'
            }
          }
        },
        plugins: {
          title: { display: false },
          legend: { display: false },
          datalabels: {
            formatter: (value, context) => {
              const dataArr = context.chart.data.datasets[0].data;
              const total = dataArr.reduce((a, b) => a + b, 0);
              return ((value / total) * 100).toFixed(1) + '%';
            },
            color: '#333',
            anchor: 'center',
            align: 'center',
            font: { weight: 'bold' }
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    window.ratingCharts[currentBank] = chartInstance;
  }

  // Sayfa yüklendiğinde
  window.onload = function() {
    switchMenu('akbank');
    loadNotes();
    loadTimelineChart();       // Hakkında sayfası çizgi grafiği
    loadRatingDistributionChart(); // Grafikler sayfası bar grafiği
  };