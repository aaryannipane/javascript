console.log("Working");
// https://youtu.be/N3cq0BHDMOY?t=1843   ---> watch tutorial this code is incomplete

const keyboard = {
    element : {
        main :  null,
        keysContainer : [],
        keys : []
    },

    eventHandlers : {
        oninput: null,
        onclose: null
    },

    properties : {
        value : "",
        capslock : false
    },


    init() {
        // create main element
        this.element.main = document.createElement("div");
        this.element.keysContaimer = document.createElement("div")

        // setup  main elements
        this.element.main.classList.add("keyboard", "1keyboard-hidden");
        this.element.keysContainer.classList.add("keyboard_key");

        // add to DOM
        this.element.main.appendChild(this.element.keyContainer);
        document.body.appendChild(this.element.main);
    },
    
    _createKeys() {

    },

    _triggerEvent(handlerName){
        console.log("Event trigger! Handler Name: " + handlerName);
    },

    _toggleCapsLock(){
        console.log("capslock toggled");
    },

    open(initialValue, oninput, onclose){

    },

    close(){

    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    keyboard.init();
})

