// Sayfa tamamen yüklendikten sonra çalışacak olan kod
window.addEventListener("load", function () {
  // Yükleme animasyonunu içeren elementi seçin
  var loadingAnimation = document.getElementById("page");

  // 2 saniye (2000 milisaniye) sonra yükleme animasyonunu gizlemek için opacity değerini 0 yapın
  setTimeout(function () {
    loadingAnimation.style.opacity = "0";
  }, 1500);

  // Opaklık sıfır olduktan 2.5 saniye sonra yükleme animasyonunu gizleyin ve sayfayı kaldırın
  setTimeout(function () {
    loadingAnimation.style.display = "none";
  }, 1550);

  // Sayfa yüklendikten sonra tema kontrolünü yapın
  var body = document.body;
  var checkbox = document.getElementById("checkbox_toggle");
  var socialContainers = document.querySelectorAll(".socialContainer");

  var colorListLight = [
    "#8338EC",
    "#775144",
    "#904C77",
    "#181D27",
    "#2A9D8F",
    "#0077b6",
    "#FF0000",
    "#291b3a",
    "#A7A5B1",
    "#A08689",
    "#B15E90",
    "#3A3E4A",
    "#59C4BB",
    "#0093D2",
    "#FF3333",
    "#3E2C56",
  ];

  var colorListDark = [
    "#D4B483",
    "#E71D36",
    "#8D99AE",
    "#2A9D8F",
    "#B5E2FA",
    "#B8BEDD",
    "#E9C46A",
    "#775144",
    "#904C77",
    "#ADC178",
    "#FFA500",
    "#FF5733",
    "#A8DADC",
    "#5EAAA8",
    "#FFC3A0",
    "#6B4226",
    "#C45AEC",
    "#F18D9E",
    "#8EE4AF",
    "#FF9A8B",
  ];

  function getRandomColorFromArray(colorArray) {
    var randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
  }

  // Tema değiştirme fonksiyonu
  function toggleTheme() {
    if (checkbox.checked) {
      // Checkbox işaretliyse, light tema
      body.classList.add("light");
      // .socialContainer özelliklerini güncelle
      socialContainers.forEach(function (container) {
        container.style.border = "1px solid var(--dark-text)";
        container.style.borderRadius = "15px";
      });
      var portfolioItems = document.querySelectorAll(".card");
      portfolioItems.forEach(function (item) {
        var randomColor = getRandomColorFromArray(colorListLight);
        item.style.borderColor = randomColor;
      });
    } else {
      // Checkbox işaretli değilse, dark tema
      body.classList.remove("light");
      // .socialContainer özelliklerini kaldır
      socialContainers.forEach(function (container) {
        container.style.border = "";
        container.style.borderRadius = "";
      });

      var portfolioItems = document.querySelectorAll(".post");
      portfolioItems.forEach(function (item) {
        var randomColor = getRandomColorFromArray(colorListDark);
        item.style.borderColor = randomColor;
      });
    }
  }

  // Checkbox durumuna göre tema değiştirme işlevini çağırın
  checkbox.addEventListener("change", toggleTheme);

  // Sayfa yüklendiğinde tema kontrolünü başlatın
  toggleTheme();
});

