import moment from 'moment'

const formatDate = (date) => {
  return moment(date).format('D/MM/YYYY')  
}

export { formatDate }