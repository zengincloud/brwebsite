// Rolls forward to the most recent Sunday so blog "last updated" labels
// refresh automatically once a week without editing post data.
export function getLastUpdatedDate(): string {
  const now = new Date()
  const mostRecentSunday = new Date(now)
  mostRecentSunday.setUTCDate(now.getUTCDate() - now.getUTCDay())

  return mostRecentSunday.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
