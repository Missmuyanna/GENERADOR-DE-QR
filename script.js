document.getElementById("generar").addEventListener("click", function () {
    const textInput = document.getElementById("textInput").value;
    const qrCanvas = document.getElementById("qrCode");

    
    const context = qrCanvas.getContext("2d");
    context.clearRect(0, 0, qrCanvas.width, qrCanvas.height);

    
    if (textInput.trim() === "") {
        alert("Por favor ingresa la información para generar el QR.");
        return;
    }

    QRCode.toCanvas(qrCanvas, textInput, { width: 200 }, function (error) {
        if (error) {
            console.error("Error al generar el código QR:", error);
        } else {
            console.log("Código QR generado correctamente.");
        }
    });
});

document.getElementById("descarga").addEventListener("click", function () {
    const qrCanvas = document.getElementById("qrCode");


    const qrImage = qrCanvas.toDataURL("image/png");

    
    const downloadLink = document.createElement("a");
    downloadLink.href = qrImage;
    downloadLink.download = "codigo-qr.png";
    downloadLink.click();
});

