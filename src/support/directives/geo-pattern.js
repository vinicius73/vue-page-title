import GeoPattern from 'geopattern'

export default (el, binding) => {
  const { value } = binding
  el.style.backgroundImage = GeoPattern.generate(value).toDataUrl()
}
