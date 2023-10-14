function removeShorts() {
  const shortsElement = document.querySelector(
    '.yt-simple-endpoint[title="Shorts"]'
  )
  if (shortsElement) {
    shortsElement.remove()
  }
}

// Call function on page load
window.addEventListener('load', () => {
  removeShorts()
})

// Also listen for changes to the DOM, as YouTube uses a single-page architecture
const observer = new MutationObserver(removeShorts)
observer.observe(document.body, {
  childList: true,
  subtree: true,
})
