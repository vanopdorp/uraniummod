runAfterLoad(function() {
    // Doorloop alle pixels op de grid en maak ze leeg
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            deletePixel(x, y);
        }
    }
    console.log("Scherm succesvol leeggemaakt bij het opstarten!");
});
