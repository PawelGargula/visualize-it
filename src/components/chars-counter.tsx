export default function CharsCounter({
    current,
    max
    } : {
    current: number,
    max: number
}) {
  return (
    <span className="text-gray-600">{current}/{max}</span>
  )
}
