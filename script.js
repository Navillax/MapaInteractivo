var map = L.map("map").setView([40.0416, -3.61], 15);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; Tandem Aranjuez 2023",
}).addTo(map);


//marcadores
let markerReina = L.marker([40.03688360114768, -3.608043858063887]).addTo(map);
let markerParterre = L.marker([40.03681891331617, -3.6075503315845086]).addTo(
  map
);
let markerBoticaria = L.marker([40.037037619547164, -3.6075825180940333]).addTo(
  map
);
let markerPresa = L.marker([40.036909141100494, -3.606971490044489]).addTo(map);
let markerHercules = L.marker([40.03713413756942, -3.6079902138770272]).addTo(
  map
);
let markerEstatuas = L.marker([40.03715115826474, -3.60806939457846]).addTo(
  map
);
let markerCastañuelas = L.marker([
  40.037024863412476, -3.608442892194355,
]).addTo(map);
let markerApolo = L.marker([40.037380436140765, -3.6079618957215835]).addTo(
  map
);
let markerGaleria = L.marker([40.03762072738263, -3.6082915469611354]).addTo(
  map
);
let markerReloj = L.marker([40.03782197584691, -3.608679796730118]).addTo(map);
let markerSalonReyes = L.marker([40.0385908982817, -3.608065016506688]).addTo(map);
let markerNiño = L.marker([40.03819469465292, -3.609251107249842]).addTo(map);
let markerPajarera = L.marker([40.03907193589111, -3.6100646033451804]).addTo(
  map
);
let markerCenador = L.marker([40.038654584935195, -3.6114494030919406]).addTo(
  map
);
let markerVenus = L.marker([40.03923162377236, -3.610910279088891]).addTo(map);
let markerObelisco = L.marker([40.03911919398985, -3.6117089068254877]).addTo(
  map
);
let markerPuente = L.marker([40.03928359177326, -3.614499393481518]).addTo(map);
let markerMirador = L.marker([40.03976138889173, -3.614922393569175]).addTo(
  map
);
let markerNeptuno = L.marker([40.04010586169499, -3.613437790895189]).addTo(
  map
);
let markerBaco = L.marker([40.040354846173244, -3.6127042067240085]).addTo(map);
let markerRosedal = L.marker([40.04005914492007, -3.611408699766508]).addTo(map);
let markerDiana = L.marker([40.04028092098158, -3.6107133370815836]).addTo(map);
let markerTronca = L.marker([40.04071882390393, -3.609710190963177]).addTo(map);
let markerLlóron = L.marker([40.04083997826487, -3.6092354399585678]).addTo(
  map
);

let polygonG3 = L.polygon([
  [40.03688360114768, -3.608043858063887], //EntradaReina
  [40.03681891331617, -3.6075503315845086],//EntradaParterre
  [40.037037619547164, -3.6075825180940333],//F.boticaria
  [40.036909141100494, -3.606971490044489],//Presa
  [40.03713413756942, -3.6079902138770272],//F.hercules
  [40.03715115826474, -3.60806939457846],//Estatuas
  [40.037024863412476, -3.608442892194355],//castañuelas
  [40.037380436140765, -3.6079618957215835],//apolo
  [40.03762072738263, -3.6082915469611354],//galeria
  [40.03782197584691, -3.608679796730118],//f.reloj
  [40.0385908982817, -3.608065016506688],//salonreyes
  [40.03819469465292, -3.609251107249842], //niñoespina
  [40.03907193589111, -3.6100646033451804],//pajarera
  [40.038654584935195, -3.6114494030919406],//cenador-puenteenmedio
  [40.03923162377236, -3.610910279088891],//venus
  [40.03911919398985, -3.6117089068254877],//obelisco
  [40.03928359177326, -3.614499393481518],//puente trasero
  [40.03976138889173, -3.614922393569175],//mirador
  [40.04010586169499, -3.613437790895189],//neptuno
  [40.040354846173244, -3.6127042067240085],//baco
  [40.04005914492007, -3.611408699766508],//rosedal
  [40.04028092098158, -3.6107133370815836],//diana
  [40.04071882390393, -3.609710190963177],//tronca
  [40.04083997826487, -3.6092354399585678],//lloron
]).addTo(map);

markerReina.bindPopup("<b>Entrada por el jardin de la reina.</b>").openPopup();
markerParterre
  .bindPopup("<b>Entrada por el jardin del Parterre.</b>")
  .openPopup();
markerBoticaria.bindPopup("<b>Fuente de la Boticaria.</b>").openPopup();
markerPresa.bindPopup("<b>Presa de palacio.</b>").openPopup();
markerHercules.bindPopup("<b>Hercules y la hidra.</b>").openPopup();
markerEstatuas.bindPopup("<b>Jardín de las estatuas.</b>").openPopup();
markerCastañuelas.bindPopup("<b>Cascada de las castañuelas.</b>").openPopup();
markerApolo.bindPopup("<b>Fuente de Apolo.</b>").openPopup();
markerGaleria.bindPopup("<b>La galeria.</b>").openPopup();
markerReloj.bindPopup("<b>Fuente del reloj.</b>").openPopup();
markerSalonReyes.bindPopup("<b>Salon de los Reyes Catolicos.").openPopup(); //
markerNiño.bindPopup("<b>Fuente del niño de la espina.</b>").openPopup();
markerPajarera.bindPopup("<b>La pajarera.</b>").openPopup();
markerCenador.bindPopup("<b>Cenador.</b>").openPopup();
markerVenus.bindPopup("<b>Fuente de Venus.</b>").openPopup();
markerObelisco.bindPopup("<b>El obelisco.</b>").openPopup();
markerPuente.bindPopup("<b>Antigüo puente verde.</b>").openPopup();
markerMirador.bindPopup("<b>Mirador del culón.</b>").openPopup();
markerNeptuno.bindPopup("<b>Fuente de Neptuno.</b>").openPopup();
markerBaco.bindPopup("<b>Fuente de Baco.</b>").openPopup();
markerRosedal.bindPopup("<b>El rosedal.</b>").openPopup();
markerDiana.bindPopup("<b>Fuente de Diana.</b>").openPopup();
markerTronca.bindPopup("<b>Plátanos de la Tronca.</b>").openPopup();
markerLlóron.bindPopup("<b>Plátano Llóron.</b>").openPopup();

//logo
var imageUrl = "images/logo.png";
var latLngBounds = [
  [40.0427, -3.6124],
  [40.0413, -3.61],
];
var options = {
  opacity: 0.9,
  alt: "Logotipo de Tandem",
};
var logotipo = L.imageOverlay(imageUrl, latLngBounds, options);
logotipo.addTo(map);

//limites
var polygon = L.polygon(
  [
    [40.0369797, -3.6073454],
    [40.0377354, -3.6075063],
    [40.0394522, -3.6079677],
    [40.0403311, -3.6082037],
    [40.0411689, -3.6084719],
    [40.0418753, -3.6087294],
    [40.0425611, -3.6089001],
    [40.0431443, -3.6092434],
    [40.0440889, -3.6100051],
    [40.0449184, -3.6107025],
    [40.0450745, -3.6108527],
    [40.0450662, -3.6112282],
    [40.0446966, -3.611593],
    [40.0444749, -3.6117968],
    [40.0442449, -3.6121402],
    [40.0439739, -3.6120651],
    [40.0440067, -3.6117968],
    [40.0439492, -3.611475],
    [40.0437028, -3.6113999],
    [40.0433414, -3.611711],
    [40.0430622, -3.6121509],
    [40.042824, -3.612623],
    [40.0423558, -3.6128483],
    [40.0418049, -3.6131935],
    [40.0415379, -3.613408],
    [40.040885, -3.6138318],
    [40.04031, -3.6142181],
    [40.0397843, -3.6148833],
    [40.0395543, -3.6154841],
    [40.03916, -3.6161707],
    [40.0386836, -3.6170719],
    [40.0384536, -3.6175655],
    [40.0383222, -3.6168359],
    [40.0387, -3.6157416],
    [40.0392422, -3.614776],
    [40.0394064, -3.6142395],
    [40.0394229, -3.6137889],
    [40.0390615, -3.6132096],
    [40.0388643, -3.6123727],
    [40.0387986, -3.6116217],
    [40.038355, -3.6107205],
    [40.0378293, -3.6100982],
    [40.0374351, -3.6094545],
    [40.0372123, -3.6091063],
    [40.0372657, -3.6087845],
    [40.0372287, -3.6082695],
    [40.0371076, -3.6083285],
    [40.0370418, -3.608358],
    [40.0369823, -3.6082668],
    [40.0369084, -3.6079878],
    [40.0368632, -3.6077464],
    [40.0368365, -3.6074836],
    [40.036857, -3.6073602],
    [40.0369289, -3.6073253],
    [40.0369797, -3.6073454],
  ],
  {
    color: "#A19861",
    fillColor: "blue",
    fillOpacity: 0.3,
    radius: 500,
  }
).addTo(map);
