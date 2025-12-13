import { useFormStatus } from "react-dom";

export default function TextArea({
  maxLength,
  value,
  setValue,
  placeholder
} : {
  maxLength: number
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
}) {
  const { pending } = useFormStatus();
  return (
    <textarea 
        autoFocus={true}
        aria-label="Chat"
        className={`block border-t border-x border-slate-300 focus:outline-none h-64 p-4 rounded-t-2xl w-full disabled:cursor-not-allowed
          ${pending ? 'animate-pulse bg-slate-50' : ''}`}
        disabled={pending}
        id="chat" 
        maxLength={maxLength}
        name="chat" 
        placeholder={placeholder || "Type your story here..."}
        spellCheck={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    ></textarea>
  )
}