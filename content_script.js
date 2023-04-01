const revision = {
  color: "#ccffcc",
  text: ["業績", "修正"],
};

document.querySelectorAll("a").forEach((element) => {
  // 要素のテキストを取得する
  const elementText = element.textContent || element.innerText;

  // 要素に指定のテキストが含まれているか判定する
  const isMatch = revision.text.every((text) => elementText.includes(text));

  if (isMatch) {
    element.style.backgroundColor = "#ccffcc";
  }
});
