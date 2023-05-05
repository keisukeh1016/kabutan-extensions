const words = [
  { color: "#ffcccc", word: "短信" },
  { color: "#ccffcc", word: "修正" },
  { color: "#ccffcc", word: "差異" },
];

document.querySelectorAll("a").forEach((element) => {
  // 要素のテキストを取得する
  const elementText = element.textContent || element.innerText;

  words.forEach((x) => {
    // 要素に指定のテキストが含まれているか判定する
    const isInclude = elementText.includes(x.word);

    if (isInclude) {
      element.style.backgroundColor = x.color;
    }
  });
});
