type ButtonProps = {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export function Button({ type = "button", label, onClick, icon }: ButtonProps) {
  return (
    <button
      type={type}
      className="px-6 py-3 cursor-pointer bg-primary text-white rounded-4xl hover:bg-primary-hover transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </div>
    </button>
  );
}
