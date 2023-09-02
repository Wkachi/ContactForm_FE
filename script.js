console.log("testing")

const biodataForm = document.querySelector(".BiodataForm");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", () =>{
    biodataForm.style.display = "none";
});

const fName = document.querySelector("#fName").addEventListener("click", (e) =>{
    //console.log(e);
     e.enterKeyHint == " " || e.keyCode == " "  
        console.log("Working")
        biodataForm.style.display = "none";
     
});
