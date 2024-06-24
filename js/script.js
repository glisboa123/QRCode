const gerador = document.querySelector(".gerador-qrcode");
const qrCodeBtn = document.querySelector("#qr-button");
const qrCodeInput = document.querySelector("#text-qrcode");
const qrCodeImg = document.querySelector("#qrcode-img");

// gerar QR Code
const generateQrCode = () => {
  const qrCodeText = qrCodeInput.value;
  if (!qrCodeText) return;

  qrCodeBtn.value = "Gerando código...";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeText}`;

  qrCodeImg.addEventListener("load", () => {
    gerador.classList.add("active");
    qrCodeBtn.value = "QR Code gerado!";
  });
};

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQrCode();
  }
});

// Limpar área qrcode

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    gerador.classList.remove("active");
    qrCodeBtn.value = "Gerar QR Code";
  }
});
