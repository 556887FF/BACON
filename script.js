let bobuxCount = 0; // 初始值為 0

function incrementBobux() {
  bobuxCount++; // 每次點擊按鈕，數值增加 1
  updateBobuxDisplay(); // 更新顯示數值的內容
}

function updateBobuxDisplay() {
  const bobuxValueElement = document.getElementById('bobuxValue');
  bobuxValueElement.textContent = bobuxCount; // 將數值顯示在 HTML 中
}
