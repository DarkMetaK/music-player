export function millisToMinutesAndSeconds(millis: number): string {
  const localeStringOptions = {
    minimumFractionDigits: 2
  }

  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toLocaleString('default', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0
  })

  return `${minutes}:${seconds}`
}