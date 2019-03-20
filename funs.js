let formBox = $(".formBox")
let body = $(".body")


formBox.hide()

body.on("click", function(e){
    if(e.target.className === "formText"){
        body.hide(900);

    formBox.show(800)
    }
})


formBox.on("click", function(e){
    if(e.target.className === "cancel"){
        body.show(800);

        formBox.hide(900)
    }
})