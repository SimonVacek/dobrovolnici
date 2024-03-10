document.querySelector('#sendForVerification').addEventListener('click',(event) => {
    
    let picture = `{foto1:"123",foto2:"456"}`
    let json = JSON.stringify();
    fetch("", { //dočasne takto
        method: "POST",
        body: json,
        headers: {
            "Content-type": "application/json; charset=utf-8",
        }
    }) .then(response => {
        console.log(response);
    });
});