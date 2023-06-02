export default function (data: (string | null | undefined)[]): string[] {
  const validData = data.filter(item => item !== null && item !== undefined) as string[]
  const uniqueData = [...new Set(validData)]
  return trueSort(uniqueData)
}

function trueSort(entities: string[]): string[] {
  return entities.sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}