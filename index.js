const btnLikes1 = document.getElementById("btnLikes1")
const countLikes1 = documemnt.getElementById("countsLikes1")

function clickLike1(){
    let totalLikes1 = parseInt(countLikes1.values) + 1
    countlikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",clickLike1)
