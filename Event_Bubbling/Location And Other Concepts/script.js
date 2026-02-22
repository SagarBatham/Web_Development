var btn=document.querySelector("button");
var frw1=document.querySelector("#frw button");
var bcw1=document.querySelector("#bcw button");

btn.addEventListener("click",function(){
    location.href="https://www.google.com/search?q=margin+in+pixel+tailwind&sca_esv=5dca0e6f8aa8611e&sxsrf=ANbL-n5qDcIBsLc_aqDTXSkOrOcv3j_zZA%3A1771520391642&ei=h0GXaeLjJpyanesPz9DQsQU&ved=0ahUKEwiiw5_dg-aSAxUcTWcHHU8oNFYQ4dUDCBM&uact=5&oq=margin+in+pixel+tailwind&gs_lp=Egxnd3Mtd2l6LXNlcnAiGG1hcmdpbiBpbiBwaXhlbCB0YWlsd2luZDIFEAAY7wUyBRAAGO8FMgUQABjvBUjsFVDDBFjdEXABeACQAQCYAcgBoAHUCaoBBTAuNi4xuAEDyAEA-AEBmAIHoALeCMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIHECMYsAIYJ8ICBxAAGIAEGA3CAgYQABgHGB7CAggQABgHGAgYHsICCBAAGAoYDRgewgIIEAAYBRgNGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEmAMAiAYBkAYKkgcFMS41LjGgB_IvsgcFMC41LjG4B84IwgcHMC4yLjQuMcgHI4AIAA&sclient=gws-wiz-serp"
    // location.reload();
})

frw1.addEventListener("click",function(){
    history.forward();
})

bcw1.addEventListener("click",function(){
    history.backward();
})