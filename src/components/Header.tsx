import Button from "@/ui-kit/buttons/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white p-3 shadow-md flex justify-between items-center z-10">
      <img src={"/"} alt="Logo" className="h-8" />
      <Button>Connect</Button>
    </header>
  );
};

export default Header;
