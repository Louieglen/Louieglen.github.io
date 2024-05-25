const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countsLike1")

function clickLike1(){
    let totalLike1 = parseInt(countLike1.values) + 1
    countlike1.textContent = totalLike1.toString()
}
btnLike1.addEventListener("click",clickLike1)
