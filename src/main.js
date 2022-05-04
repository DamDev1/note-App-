const addNoteBtn = document.querySelector(".add-note");
const noteTitle = document.querySelector(".noteTitle");
const noteTxt = document.querySelector(".noteTxt");

addNoteBtn.addEventListener("click", () =>{
    if(noteTxt.value == "" || noteTitle.value == ""){
        return alert("please add title and note")
    }

    const notes = localStorage.getItem("notes");
    if(notes = null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: noteTitle.value,
        txt : noteTxt.value
    }

    notesObj.push(myObj);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    noteTxt.value = "";
    noteTitle.value = "";

    showNotes()

})