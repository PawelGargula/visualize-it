export default function TextArea({
  maxLength,
  value,
  setValue
} : {
  maxLength: number
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <textarea 
        autoFocus={true}
        aria-label="Chat"
        className="block border-t border-x border-slate-300 focus:outline-none h-64 p-4 rounded-t-2xl w-full"
        id="chat" 
        maxLength={maxLength}
        name="chat" 
        placeholder="Type your story here..."
        spellCheck={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    ></textarea>
  )
}
