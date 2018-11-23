import moment from 'moment'

const formatDate = date => moment(date).format('D/MM/YYYY')  

const generateAnchors = post => {
  const matches = post.match(/##.*/g) || []
  return matches.map(item => {
    if (item.indexOf('name=') !== -1) {
      const rawLink = item.split('=')[1].split('><')[0]
      return {
        title: item.split('a>')[1],
        link: rawLink.slice(1, rawLink.length - 1),
      }
    } else {
      return {
        title: null,
        link: '',
      }
    }
  })
}

export { formatDate, generateAnchors }