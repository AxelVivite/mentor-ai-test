interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  label,
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      {isSubmitting ? "Submitting..." : label}
    </button>
  );
};

export default SubmitButton;
