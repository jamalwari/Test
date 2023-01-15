let options = {
    method:"GET",
    headers: {
        'X-RapidAPI-Key': '39fc305af5mshab0d4a7d5aae1c4p1979b2jsn54a56f39fdce',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
}
let id = ['VyHV0BRtdxo', 'uLtkt8BonwM', 'eHp3MbsCbMg'];
async function getData(){
    for(let i = 0; i<id.length; i++){
        // console.log(id[i]);
        let response = await fetch(`https://youtube138.p.rapidapi.com/video/streaming-data/?id=${id[i]}`,options);
        let data = await response.json();
        console.log(data)
        showData(data)
    }   
}
getData();
let div;
function showData(data){
        div+=`<iframe src=${data.adaptiveFormats[0].url}
        frameborder="0"></iframe>`;
    document.getElementById("div").innerHTML = div;
}
