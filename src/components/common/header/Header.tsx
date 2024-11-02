import logo from "../../../assets/images/logo2.png";
import Button from "../button/Button";
interface IHeaderProps {
  text: string;
  btntitle: string;
  handelClick?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ handelClick, text, btntitle }) => {
  return (
    <header className="flex flex-row justify-between items-center p-2 h-24 top-32 w-full ">
      <div className="flex pr-5 flex-row justify-start items-center   w-fit gap-3 ">
        <img src={logo} alt="logo" className="w-14 h-14"></img>
        <p className="text-4xl w-full font-bold">تسک منیجر</p>
      </div>
      <div className="flex flex-row justify-center items-center   gap-3  ">
        <p className="w-2/3">{text}</p>
        <span className="w-1/3  ml-3">
          <Button style="animate-pulse" onClick={handelClick}>
            {btntitle}
          </Button>
        </span>
      </div>
    </header>
  );
};

export default Header;
