import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./export";
import { useStateContext } from "../Contexts/ContextProvider";

const NavButton = (props) => (
  <TooltipComponent content={props.title} position="BottomCenter">
    <button
      type="button"
      onClick={props.customFunc}
      style={{ color: props.color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: props.dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2  top-2 right-2"
      />
      {props.icon}
    </button>
  </TooltipComponent>
);

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screen,
    setScreen,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleRisize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleRisize);
    handleRisize();
    return () => window.removeEventListener("resize", handleRisize);
  }, []);

  useEffect(() => {
    if (screen <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screen]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prev) => !prev);
        }}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("Cart");
          }}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => {
            handleClick("Chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notification"
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="#03C9D7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="p-1  flex items-center hover:bg-light-gray gap-2 cursor-pointer rounded-lg"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img
              src={avatar}
              alt="avatar"
              width="32px"
              className="rounded-full w-"
            />
            <p>
              <span className="text-14 text-gray-400  ">Hi,</span>
              {"  "}
              <span className="text-14 text-gray-400 font-bold ml-1">
                {"Mo"}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClicked.Cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
}
