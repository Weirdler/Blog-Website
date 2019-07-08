
for (let i = 0; i < db.length; i++) {
    const element = db[i];
    element.addEventListener('click', function(){
        fetch('/tasks/' + element.id, {method: "delete"} )
        .then((res) => res.json() )
        .then((data) => location.reload() )
    }) 
}
