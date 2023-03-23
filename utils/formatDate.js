export default function (from, to) {
  let formattedFrom = ''
  let formattedTo = ''

  if (from === to) {
    formattedFrom = ''
  } else {
    formattedFrom += Math.abs(from)
    if (!isSameSign(from, to)) {
      formattedFrom += displayJc(from)
    }
  }

  formattedTo = Math.abs(to) + displayJc(to)

  return [formattedFrom, formattedTo]
}

function isSameSign(a, b) {
  return ((a > 0 && b > 0) || (a < 0 && b < 0))
}
function displayJc(a) {
  return a < 0 ? ' av. J.-C.' : ' apr. J.-C.'
}