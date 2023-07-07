export const useSettingsStore = defineStore('settings', () => {
  const title = 'NAFO'
  const collection = 'Pièces'
  const copyright = "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg"
  const theme = ref("light")

  function setLightTheme() {
    theme.value = "light"
  }

  function setDarkTheme() {
    theme.value = "dark"
  }

  return { title, collection, theme, copyright, setLightTheme, setDarkTheme }
})