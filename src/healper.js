export const calcDelay = (score) => {
  if (score <= 10) {
    return 1000
  }
  if (score <= 20) {
    return 900
  }
  if (score <= 30) {
    return 800
  }
  if (score <= 40) {
    return 700
  }
  if (score <= 50) {
    return 600
  }
  if (score <= 60) {
    return 500
  }
  if (score <= 70) {
    return 400
  }
  if (score <= 80) {
    return 300
  }
  if (score <= 90) {
    return 200
  }
  if (score <= 100) {
    return 150
  }
}
