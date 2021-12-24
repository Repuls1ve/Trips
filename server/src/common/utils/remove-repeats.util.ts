export const removeRepeats = <T>(arr: T[]): T[] => {
  return [...new Set(arr)]
}