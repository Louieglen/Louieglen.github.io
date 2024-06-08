const btnLikes1 = document.getElementById("btnLike1")
const countlikes1 = document.getElementById("countLikes1")
const btnLikes2 = document.getElementById("btnLike2")
const countlikes2 = document.getElementById("countLikes2")
const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function clickLike1() {
    let totalLikes1 = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()
}
function clickLike2() {
    let totalLikes2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLikes2.toString()
}
function submitComment(){
commentbox.textContent += comment.value.toString() + "\n"
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
submit.addEventListener("click", submitComment)
