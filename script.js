var display = document.getElementById("display");
var historyList = document.getElementById("historyList");

// Cargar historial al iniciar
window.onload = function () {
    loadHistory();
};

function add(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        var result = eval(display.value);
        saveHistory(display.value + " = " + result);
        display.value = result;
        loadHistory();
    } catch (error) {
        alert("Operación inválida");
    }
}

function saveHistory(operation) {
    var history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(operation);
    localStorage.setItem("history", JSON.stringify(history));
}

function loadHistory() {
    historyList.innerHTML = "";
    var history = JSON.parse(localStorage.getItem("history")) || [];

    for (var i = 0; i < history.length; i++) {
        var li = document.createElement("li");
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}

function clearHistory() {
    localStorage.removeItem("history");
    loadHistory();
}
