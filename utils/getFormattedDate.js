export default function getFormattedDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  let date = new Date(dateString)

  return date.toLocaleDateString('en-US', options)
}
