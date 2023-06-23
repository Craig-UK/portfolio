export default function getFormattedDate(dateString) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    var date = new Date(dateString);

    return date.toLocaleDateString("en-US", options);
}