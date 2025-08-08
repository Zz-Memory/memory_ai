// 主线程，单线程
// event loop
// 启动一个web worker线程

// 压缩线程
const worker = new Worker("./compressWorker.js");
worker.onmessage = function (e) {
  console.log(e.data);
  if (e.data.success) {
    document.getElementById("output").innerHTML = `
        <img src="${e.data.data}"/>
        `;
  }
};
function handleFile(file){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });

}
async function compressFile(file) {
    const imgDataUrl = await handleFile(file);
    console.log(imgDataUrl,'---------------------')
    worker.postMessage({
        imgData: imgDataUrl,
        quality: 0.3
    })
}
const oFile = document.getElementById("fileInput");
oFile.addEventListener("change", async function (e) { 
    const file = e.target.files[0];
    if(!file){
        return ;
    }
    
    await compressFile(file);
});