export const formatDate = (d: string|number) => {
  let date = typeof d === 'number' ? d : parseInt(d)
  return date > 0 ? Math.abs(date) + ' apr. J.-C.' : Math.abs(date) + ' av. J.-C.'
}