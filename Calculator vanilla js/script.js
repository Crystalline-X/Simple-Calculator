const result = document.getElementById("result")

function appendToDisplay(input) {
    result.value += input
}

function clearResult() {
    result.value = ""
}

function calculate() {
    try {
        result.value = eval(result.value)
    }
    catch (error) {
        console.log("error")
    }
}