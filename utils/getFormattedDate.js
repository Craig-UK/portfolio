export default function getFormattedDate (dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)

  return date.toLocaleDateString('en-US', options)
}
