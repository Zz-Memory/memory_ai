// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 获取颜色选择器和按钮元素
  const colorPicker = document.querySelector('.color-picker');
  const toggleButton = document.querySelector('.toggle-button');

  // 点击按钮时执行的函数
  toggleButton.addEventListener('click', async () => {
    // 获取当前标签页
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // 在当前标签页执行脚本
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleBackgroundColor,
      args: [colorPicker.value, tab.id]
    });
  });
});

// 切换背景颜色的函数
async function toggleBackgroundColor(color, tabId) {
  const body = document.body;
  const storageKey = `originalColor_${tabId}`;
  
  // 从storage中获取原始颜色
  const result = await chrome.storage.local.get(storageKey);
  const originalColor = result[storageKey];
  
  if (!originalColor) {
    // 如果没有保存原始颜色，就保存当前的背景颜色
    const currentColor = window.getComputedStyle(body).backgroundColor;
    await chrome.storage.local.set({ [storageKey]: currentColor });
    body.style.backgroundColor = color;
  } else {
    // 如果已经保存了原始颜色，就切换回原始颜色并清除存储
    body.style.backgroundColor = originalColor;
    await chrome.storage.local.remove(storageKey);
  }
}