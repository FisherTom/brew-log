import { useEffect, useState } from "react";

function ComboBox({ items }) {
  const [inputText, setInputText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (inputText.length > 0) {
      setFilteredItems(
        items
          .filter((item) =>
            item.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())
          )
          .slice(0, 5)
      );
      setShowDropdown(true);
    } else {
      setFilteredItems([]);
      setShowDropdown(false);
    }
  }, [inputText, items]);

  return (
    <div className="p-2 flex flex-col gap-2">
      <input
        placeholder={`Add Hop`}
        className="border-b-2 border-black focus:outline-none "
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      ></input>

      <div
        className={`${
          showDropdown ? "h-" + filteredItems.length * 8 : "h-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ol className={`bg-gray-200 rounded h-full`}>
          {filteredItems.map((item) => {
            return (
              <li className="flex items-center p-1 justify-between w-full">
                {item}{" "}
                <div className="w-5 h-5 rounded-xl bg-green-300 justify-center items-center flex">
                  <p className=" text-green-900 font-bold">+</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default ComboBox;
