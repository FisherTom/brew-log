import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function ComboBox({ items, type, setSelectedItems }) {
  const [inputText, setInputText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (inputText.length > 0) {
      setFilteredItems(
        items
          .filter((item) =>
            item.name
              .toLocaleLowerCase()
              .includes(inputText.toLocaleLowerCase())
          )
          .slice(0, 5)
      );
      setShowDropdown(true);
    } else {
      setFilteredItems([]);
      setShowDropdown(false);
    }
  }, [inputText, items]);

  function handleAddToSelected(item, e) {
    e.preventDefault();
    setSelectedItems((currentItems) => {
      return [...currentItems, { ...item, uuid: uuid() }]; //!give item UUID
    });
    setInputText("");
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <input
        placeholder={`Add ${type}`}
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
              <li
                key={item._id}
                className="flex items-center p-1 justify-between w-full"
              >
                {item.name}{" "}
                <div className="w-5 h-5 rounded-xl bg-green-300 justify-center items-center flex">
                  <button
                    className=" text-green-900 font-bold"
                    onClick={(e) => handleAddToSelected(item, e)}
                  >
                    +
                  </button>
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
