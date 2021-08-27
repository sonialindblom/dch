(function () {
  setFullPage();
})();

function setFullPage() {
  $(document).ready(function () {
    const fullPageDom = $("#fullpage");
    const galleryDom = $("#image-gallery");
    fullPageDom.css("visibility", "");

    // setTimeout for animation
    setTimeout(() => {
      $(".main-pic-bg").css("opacity", 1);
    }, 0);

    $("#fullpage").fullpage();

    const imgUrlList = DATA[DATA.length - 1].map((url) => {
      const name = url.split("/").slice(-1)[0];
      return name;
    });
    for (let i = 0; i < DATA[0].length; ++i) {
      const imgUrl = "./images/" + imgUrlList[i];
      const liDom = $("<li></li>");
      const imgDom = $("<img />");
      const tableDom = $(
        '<table class="gallery-info-box"><tbody></tbody></table>'
      );
      const infoDom = tableDom.find("tbody");
      liDom.attr("data-thumb", imgUrl);
      liDom.css("max-height", "70vh");
      imgDom.attr("src", imgUrl);
      liDom.append(imgDom);
      liDom.append(tableDom);
      galleryDom.append(liDom);

      // add information
      addInfo("Identifier", DATA[2][i]);
      addInfo("GPS", makeLink(DATA[3][i]));
      addInfo("Publisher", DATA[4][i]);
      addInfo("Photograph", DATA[5][i]);
      addInfo("Exclusive right", DATA[6][i]);
      addInfo("Year", DATA[7][i]);
      // addInfo("Recto_text", DATA[8][i]);
      // addInfo("Verse_text", DATA[9][i]);
      // addInfo("Dimentions", DATA[10][i]);
      // addInfo("Stamps", DATA[11][i]);
      // addInfo("Number of cards available", DATA[12][i]);
      addInfo("Region", DATA[13][i]);
      addInfo("Description", DATA[14][i]);
      addInfo("Color", DATA[15][i]);
      // addInfo("Condition", DATA[16][i]);
      addInfo("Collection", DATA[17][i]);
      addInfo("Scanned by", DATA[18][i]);
      addInfo("Metadata by", DATA[19][i]);
      addInfo("Geographical markers", DATA[20][i]);
      addInfo("Image wrapper", DATA[21][i]);
      addInfo("Path", makeLink(DATA[22][i]));

      function addInfo(label, value) {
        if (!value) {
          return;
        }
        const itemDom = $("<tr />");
        const labelDom = $("<td />");
        const valueDom = $("<td />");
        infoDom.append(itemDom);
        itemDom.append(labelDom);
        itemDom.append(valueDom);
        labelDom.html(label);
        valueDom.html(value);
      }

      function makeLink(href) {
        if (!href) {
          return null;
        }
        return '<a target="_blank" href="' + href + '">' + href + "</a>";
      }
    }

    $("#image-gallery").lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      enableTouch: false,
      enableDrag: false,
      onSliderLoad: function () {
        $("#image-gallery").removeClass("cS-hidden");
      },
    });
  });
}

var DATA = [
  [
    "Axvall3Recto.jpg",
    "Axvall4Recto.jpg",
    "Axvall5Recto.jpg",
    "Axvall6Recto.jpg",
    "Axvall7Recto.jpg",
    "Axvall8Recto.jpg",
    "Axvall9Recto.jpg",
    "Axvall10Recto.jpg",
    "Axvall11Recto.jpg",
    "Axvall12Recto.jpg",
    "Axvall13Recto.jpg",
    "Axvall14Recto.jpg",
    "Axvall15Recto.jpg",
    "Axvall16Recto.jpg",
    "Axvall17Recto.jpg",
    "Axvall18Recto.jpg",
    "Axvall19Recto.jpg",
    "Axvall20Recto.jpg",
    "Axvall21Recto.jpg",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Ax01",
    "Ax02",
    "Ax03",
    "Ax04",
    "Ax05",
    "Ax06",
    "Ax07",
    "Ax08",
    "Ax09",
    "Ax10",
    "Ax11",
    "Ax12",
    "Ax13",
    "Ax14",
    "Ax15",
    "Ax16",
    "Ax17",
    "Ax18",
    "Ax19",
  ],
  [
    "",
    "",
    "",
    "",
    "https://www.google.com/maps/place/Axevalla+Folkh%C3%B6gskola/@58.3841235,13.0822225,10.5z/data=!4m5!3m4!1s0x465b1e00bffa4663:0xe3dc04d68782a077!8m2!3d58.3889151!4d13.57335",
    "",
    "",
    "",
    "https://www.google.com/maps/place/Skara+stadshus/@58.2522185,13.0163108,8z/data=!4m9!1m2!2m1!1skommunhuset+skara!3m5!1s0x0:0x8caaba56fcd0a5ad!8m2!3d58.3860566!4d13.4393261!15sChFrb21tdW5odXNldCBza2FyYZIBEGNvcnBvcmF0ZV9vZmZpY2U",
    "",
    "",
    "",
    "",
    "",
    "https://www.google.com/maps/place/Sk%C3%A4rvs+kyrka/@58.4076624,13.6029051,18.5z/data=!4m12!1m6!3m5!1s0x465b1ddcda3548bb:0xa45e2175272eb0a0!2sSk%C3%A4rvs+kyrka!8m2!3d58.4076788!4d13.6046545!3m4!1s0x465b1ddcda3548bb:0xa45e2175272eb0a0!8m2!3d58.4076788!4d13.6046545",
    "",
    "",
    "https://www.google.com/maps/place/Vallehemmet+Axvall/@58.3836982,13.5979125,15.75z/data=!4m5!3m4!1s0x465b1df9d7a0240b:0x3376834748863040!8m2!3d58.3856793!4d13.5932665",
    "",
  ],
  [
    "Ivar Larsson Eftr., Axvall",
    "Ivar Larsson Eftr., Axvall",
    "",
    "Ivar Larsson, Axvall",
    "var Larsson, Axvall",
    "var Larsson, Axvall",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "Ahrenbergsflyg. Lilljeqvist",
    "",
    "Ahrenbergsflyg.Lilljeqvist",
    "",
    "Ahrenbergsflyg.Lilljeqvist",
    "",
    "",
    "",
    "AB.Stockholms Aero",
    "AB.Stockholms Aero",
    "",
    "",
    "",
    "AB.Stockholms Aero",
    "Lilljeqvist.",
    "",
    "",
    "AB.Stockholms Aero",
    "",
  ],
  [
    "Almquist&Cöster, Hälsningborg",
    "Almquist&Cöster, Hälsningborg",
    "Almquist&Cöster, Hälsningborg",
    "Almquist&Cöster, Hälsningborg",
    "Almquist&Cöster, Hälsningborg",
    "Almquist&Cöster, Hälsningborg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "AB Flygtrafik, Stockholm",
    "",
    "",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "1941",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Västra Götaland County, Sweden ",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
    "Västra Götaland County, Sweden",
  ],
  [
    "Aerial photo of Axvall with houses, roads and fields",
    "",
    "Aerial photo of Axvall including town center and trainstation.",
    "",
    "Aerial photo if the Folk high school in Axvall.",
    "",
    "",
    "Aerial photo of track and field stadium in Axvall.",
    "Aerial photo of Axvall town hall.",
    "Aerial photo of the North Ving church and cemetery;farm house in right upper corner.",
    "",
    "Aerial photo of the North Ving church and cemetery. Photograpy taken towards north east.",
    "",
    "Aerial photo of Axvall trainstation and surranding buildings; Railroad tracks in the center of the picture.",
    "Aerial photos of the Skärv church and surraounding cemetery.",
    "",
    "Aerial photo of the St.Ekeberg Sanatorium.",
    "Aerial photo of old age care service house Vallehemmet in Axvall.",
    "",
  ],
  [
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Sepia",
    "Black&White",
    "Black&White",
    "Black&White",
    "Color",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
    "Black&White",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "Axvall aerial photo postcards",
    "Axvall aerial photo postcards",
    "Axvall aerial photo postcards",
    "Axvall aerial photo postcards",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
    "Sonia Lindblom",
  ],
  [
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
    "Sicheng Yan",
  ],
  [
    "",
    "",
    "",
    "",
    "Folk high school, Axvall",
    "Folk high school, Axvall",
    "",
    "Sports field",
    "municipal hall",
    "",
    "",
    "Church",
    "",
    "",
    "Church",
    "",
    "Sanatorium",
    "",
    "",
  ],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Axvall3Recto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Axvall3Verse.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Axvall4Recto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Axvall4Verse.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/folkh%C3%B6gskolanRecto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/folkh%C3%B6gskolanVerse.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/f%C3%B6rsvarsmaktensBeslut.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/idrottsPlatsen.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Komunalhuset.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/norraVing1Recto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/NorraVing1Verse_Stampled.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/NorraVing2.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/NorraVing2Verse.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/photoOfPostCardStation.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/sk%C3%A4rvKyrkaRecto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/sk%C3%A4rvKyrkaverse.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/storaEkbergSanatorium.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Vallehememet_recto.jpg",
    "https://github.com/sonialindblom/dch/blob/main/previewOfpostCards/Vallehemmet_verse.jpg",
  ],
];

var IMAGE_URL_INDEX = DATA.length - 1;
