interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 bg-blue text-white rounded-2xl hover:bg-primary-hover ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
