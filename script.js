let picsUrl = ["pictures/red honda.jpg", "pictures/blue car.avif", "pictures/green bmw.jpg", "pictures/black bmw.avif"];
let imgIndex = 1; 



function change() {
    // Wählt das Bild-Element aus
    let imgElement = document.querySelector(".picture img");

    // Ändert das src-Attribut des Bildes
    imgElement.src = picsUrl[imgIndex];
    imgIndex = (imgIndex + 1) % picsUrl.length;
    
    if(imgIndex == 1) {
        imgElement.remove();
        
        const newP = document.createElement("p");
        const t = document.createTextNode("You have gone through all the pictures. There will soon be new ones");
        newP.appendChild(t);

        const pictureDiv = document.querySelector(".picture");
        document.body.append(newP);
        const buttonsToRemove = document.querySelectorAll('.rater button');
        buttonsToRemove.forEach(button => {
            button.remove();
        });
    }
}
