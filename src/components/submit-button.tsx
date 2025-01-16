export default function SubmitButton({
  isActive
} : {
  isActive: boolean
}) {
  return (
    <button 
      className=""
      disabled={!isActive}
      type="submit" 
    >Submit</button>
  )
}