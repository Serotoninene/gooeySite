function splitLines(container, opentag, closingtag, className) {
  let spans = container.children,
    top = 0,
    tmp = "";
  container.innerHTML = container.textContent.replace(
    /\S+/g,
    `<span class='${className} inlineBlock'>$&</span>`
  );

  for (let i = 0; i < spans.length; i++) {
    let rect = spans[i].getBoundingClientRect().y;

    if (top < rect) {
      tmp += closingtag + opentag;
      top = rect;
    }
    tmp += spans[i].outerHTML + " ";
  }
  container.innerHTML = tmp + closingtag;
}

export default splitLines