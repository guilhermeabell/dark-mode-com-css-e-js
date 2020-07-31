const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getstyle = (element, style) =>
window
  .getComputedStyle(element)
  .getPropertyValue(style)

const initialColors = {
  bg: getstyle(html, "--bg"),
  bgPanel: getstyle(html, "--bg-panel"),
  ColorHeadings: getstyle(html, "--color-headings"),
  colorText:getstyle(html,"--color-text"),

}

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  ColorHeadings: "#3664FF",
  colorText: "#B5B5B5"
  
}
const transformKey = key => 
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase()



const changeColors = (colors) => {
  Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
  
    )
    

}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)

})