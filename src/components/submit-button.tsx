import { useFormStatus } from "react-dom";
import { MdMovieFilter } from "react-icons/md";
import { BsStars } from "react-icons/bs";

export default function SubmitButton({
  isActive,
}: {
  isActive: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    pending ? (
      <BsStars className="text-amber-500 animate-pulse" size={24} />
    ) : (
      <button 
        aria-label="Generate video"
        className="text-amber-500 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={!isActive || pending}
        type="submit" 
      >
        <MdMovieFilter size={24} />
      </button>
    )
  )
}
