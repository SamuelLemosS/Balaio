function initMap() {
  const location = { lat: -8.055, lng: -34.887 };
  const  market = { lat: -8.055, lng: -34.886 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  const image= "https://cdn.discordapp.com/attachments/457659640545673216/981620546678710352/icone_1.png"
  const feira = new google.maps.Marker({
    position: market,
    icon: image,
    map: map,
  });
  var infoWindow = new google.maps.InfoWindow({
    content: '<a href="market.html">Feira da Rua João da Silva</a>'
  })
  feira.addListener("click", function(){
      infoWindow.open(map, feira);
    });
}

window.initMap = initMap;