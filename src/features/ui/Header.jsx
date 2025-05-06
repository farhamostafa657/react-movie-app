import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div className="bg-[#FFE353] flex justify-between items-center w-full  mx-auto ">
      <div>
        <img
          src="./public/luk-1.svg"
          className="w-14 ml-7 mb-1 mt-1 cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex gap-[3vw] mr-7">
          <li>
            <span className="flex gap-1 items-center cursor-pointer">
              En <IoMdArrowDropdown />
            </span>
          </li>
          <li>
            <span className="flex gap-2 items-center cursor-pointer">
              <FaHeart />
              <p>Watchlist</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
