let d = document, $next = d.querySelector ('.next'),  $preview = d.querySelector('.preview');
$img = d.querySelector('.img-cont'), $nombre = d.querySelector('.api-nombre');
$status = d.querySelector('.api-status'), $species = d.querySelector('.api-especie');

let page = 1;

$next.addEventListener("click", e =>{
    page++;
    apiRick(page)
})
$preview.addEventListener("click", e =>{
    if(page >1){
    page--;
    apiRick(page)
    }
})

async function apiRick(page){
    let url =  `https://rickandmortyapi.com/api/character/${page}`;


    try {
        let res = await fetch(url),
        json = await res.json();
        let apiRickmorte = json;
        console.log(apiRickmorte);
        $img.src = apiRickmorte.image;
        $nombre.innerHTML = apiRickmorte.name;
        $status.innerHTML = apiRickmorte.status;
        $species.innerHTML = apiRickmorte.species;
    } catch (error) {
        let message = error.statusText || "incurri un error";
    }
}
apiRick(page);