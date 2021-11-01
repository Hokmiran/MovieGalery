let div=document.getElementById("main")
const getApi = () =>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ae45c300d682e96e1824fe6b1d094b8")
    .then(res => res.json())
    .then(response => 
        {
        response.results.map(index =>{
            div.innerHTML += `<div class="movie">
            <img width src="https://image.tmdb.org/t/p/w500/${index.poster_path}" >
            <div class="movie-info">
           <a class="title" href="maindetails.html?id=${index.id}" target="_blank" >
            <h3 >${index.title}</h3> </a>
            <p>Popularity: ${index.popularity}</p>
            <p>Language: ${index.original_language}</p>
            <p>Release Date: ${index.release_date}</p>
            </div>
            </div>`
        })
    }).catch(err => console.log(err))
}

getApi()
