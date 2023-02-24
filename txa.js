var textarea = document.getElementById("txa");

textarea.addEventListener("input", function(){
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
});


// autoSize işlevini tetikleyin her textarea içerik değiştiğinde
textarea.addEventListener('input', autoSize);


