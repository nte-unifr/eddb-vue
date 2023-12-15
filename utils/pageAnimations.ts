export const scrollToTop = () => {
  const element = document.getElementById('app')
  if (element) {
    element.scrollIntoView()
  }
}