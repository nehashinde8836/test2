function detectDisease() {
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];

    if (file) {
        // Placeholder function for simplicity
        simulateDetection(file);
    }
}




function simulateDetection(file) {
    // Placeholder function simulating detection
    // In a real project, you would replace this with actual detection logic
     const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<p>Disease detected: Leaf Rust</p>';
    resultContainer.innerHTML = '<p>Disease detected: Leaf spot</p>';
    resultContainer.innerHTML = '<p>Disease detected: Mosaic virus</p>';
    resultContainer.innerHTML = '<p>Disease detected: pure-Leaf</p>';
    resultContainer.innerHTML = '<p>Disease detected: Rust Fungus</p>';
    resultContainer.innerHTML = '<p>Disease detected: Cabbage-bacterial Black spot</p>';
    resultContainer.innerHTML = '<p>Disease detected:  Cucumber Anthracnose</p>';
    resultContainer.innerHTML = '<p>Disease detected: Kale Bacterial Black Rot</p>';
    resultContainer.innerHTML = '<p>Disease detected: tomato_early_blight</p>';
    resultContainer.innerHTML = '<p>Disease detected:  boxwood_blight</p>';



}