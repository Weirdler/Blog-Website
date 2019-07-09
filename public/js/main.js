const title = document.getElementsByTagName('li');

for (let i = 0; i < title.length; i++) {
    const element = title[i];
    element.addEventListener('click', function(){
        console.log(element.id);
        fetch('/add_blog/' + element.id, {method: "delete"} )
        .then((res) => res.json() )
        .then((data) => location.reload() )
    }) 
}

