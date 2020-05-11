function hoteis(yourUrl){
  let resp;
  let respJson;
  let card;
  let cardBody;
  let request = new XMLHttpRequest();
  request.open('GET', yourUrl, true);

  request.onload = function() {
    resp = request.responseText;
    console.log(resp);  
    respJson = JSON.parse(resp);

    card = document.getElementsByClassName('card')[0];
    card.getElementsByTagName('img')[0].src = respJson[0].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[0].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[0].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[0].price;

    card = document.getElementsByClassName('card')[1];
    card.getElementsByTagName('img')[0].src = respJson[1].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[1].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[1].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[1].price;

    card = document.getElementsByClassName('card')[2];
    card.getElementsByTagName('img')[0].src = respJson[2].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[2].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[2].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[2].price;

    card = document.getElementsByClassName('card')[3];
    card.getElementsByTagName('img')[0].src = respJson[3].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[3].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[3].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[3].price;

    card = document.getElementsByClassName('card')[4];
    card.getElementsByTagName('img')[0].src = respJson[4].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[4].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[4].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[4].price;

    card = document.getElementsByClassName('card')[5];
    card.getElementsByTagName('img')[0].src = respJson[5].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[5].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[5].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[5].price;

    card = document.getElementsByClassName('card')[6];
    card.getElementsByTagName('img')[0].src = respJson[6].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[6].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[6].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[6].price;

    card = document.getElementsByClassName('card')[7];
    card.getElementsByTagName('img')[0].src = respJson[7].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[7].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[7].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[7].price;

    card = document.getElementsByClassName('card')[8];
    card.getElementsByTagName('img')[0].src = respJson[8].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[8].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[8].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[8].price;

    card = document.getElementsByClassName('card')[9];
    card.getElementsByTagName('img')[0].src = respJson[9].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[9].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[9].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[9].price;

    card = document.getElementsByClassName('card')[10];
    card.getElementsByTagName('img')[0].src = respJson[10].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[10].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[10].name;
    card.getElementsByTagName('p')[1].innerHTML = respJson[10].price;

    card = document.getElementsByClassName('card')[11];
    card.getElementsByTagName('img')[0].src = respJson[11].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[11].property_type;
    card.getElementsByTagName('p')[0].innerHTML = respJson[11].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[11].price;

    card = document.getElementsByClassName('card')[12];
    card.getElementsByTagName('img')[0].src = respJson[12].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[12].property_type;
    card.getElementsByTagName('p')[0].innerHTML = respJson[12].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[12].price;

    card = document.getElementsByClassName('card')[13];
    card.getElementsByTagName('img')[0].src = respJson[13].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[13].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[13].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[13].price;

    card = document.getElementsByClassName('card')[14];
    card.getElementsByTagName('img')[0].src = respJson[14].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[14].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[14].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[14].price;

    card = document.getElementsByClassName('card')[15];
    card.getElementsByTagName('img')[0].src = respJson[15].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[15].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[15].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[15].price;

    card = document.getElementsByClassName('card')[16];
    card.getElementsByTagName('img')[0].src = respJson[16].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[16].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[16].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[16].price;

    card = document.getElementsByClassName('card')[17];
    card.getElementsByTagName('img')[0].src = respJson[17].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[17].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[17].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[17].price;

    card = document.getElementsByClassName('card')[18];
    card.getElementsByTagName('img')[0].src = respJson[18].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[18].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[18].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[18].price;

    card = document.getElementsByClassName('card')[19];
    card.getElementsByTagName('img')[0].src = respJson[19].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[19].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[19].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[19].price;

    card = document.getElementsByClassName('card')[20];
    card.getElementsByTagName('img')[0].src = respJson[20].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[20].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[20].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[20].price;

    card = document.getElementsByClassName('card')[21];
    card.getElementsByTagName('img')[0].src = respJson[21].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[21].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[21].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[21].price;

    card = document.getElementsByClassName('card')[22];
    card.getElementsByTagName('img')[0].src = respJson[22].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[22].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[22].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[22].price;

    card = document.getElementsByClassName('card')[23];
    card.getElementsByTagName('img')[0].src = respJson[23].photo;
    card.getElementsByTagName('h5')[0].innerHTML = respJson[23].property_type;
    card.getElementsByTagName('p')[0].innerHTML  = respJson[23].name;
    card.getElementsByTagName('p')[1].innerHTML= respJson[23].price;

  };

  request.send();
}

hoteis("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");