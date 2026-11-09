// Rolls forward to the most recent Sunday so blog "last updated" labels
// refresh automatically once a week without editing post data.
//
// Each post is pushed back a different number of weeks (irregular gaps,
// newest post first) so the list doesn't look like everything was updated
// on a single day.
const WEEK_OFFSETS = [0, 0, 1, 1, 2, 3, 3, 4, 5, 6, 8, 9, 11, 12, 14]

export function getLastUpdatedDate(index = 0): string {
  const weeksBack =
    WEEK_OFFSETS[index] ??
    WEEK_OFFSETS[WEEK_OFFSETS.length - 1] + (index - WEEK_OFFSETS.length + 1) * 2

  const now = new Date()
  const date = new Date(now)
  date.setUTCDate(now.getUTCDate() - now.getUTCDay() - weeksBack * 7)

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
