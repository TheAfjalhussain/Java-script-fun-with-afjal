const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const moiveBox = document.getElementById("movie-box");
    const searchBox = document.getElementById("search")
    const getMovies = async (url) => {
     const response = await fetch(url)
     const data = await response.json()
     console.log(data)
     searchMovies(data.results)
    }
    getMovies(APIURL)


    
    const searchMovies = (data) => {
        moiveBox.innerHTML = "";
     data.forEach (
        (item)  => {
            const box = document.createElement("div")
            box.classList.add ("box")
            box.innerHTML = 
            `
          
            <img src="${IMGPATH + item.poster_path}" alt="">
      
         <div class="overlay">
         <div class="title">
             <h2>${item.original_title}</h2>
             <span>${item.vote_average}</span>
         </div>
          
             <h3>overview: </h3>
             <p>${item.overview}
                    </p>
           </div>
          
            `
            moiveBox.appendChild(box)
        }
     )
    }

    searchBox.addEventListener('keyup',function (e) {
       
            if (e.target.value != "") {
                getMovies(SEARCHAPI + e.target.value)
            } else {
                getMovies(APIURL);
            }
        
    })