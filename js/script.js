const cardZone = document.querySelector(".card-holder")

console.log(cardZone)

fetch("./json/data.json")
.then(function (res){
    return res.json()
})
.then(function(results){
    console.log(results)
})
.catch(function(err){
    console.log("une erreur est survenue",err)
})