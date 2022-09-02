import { FunnelSimple } from 'phosphor-react';
import { useState } from 'react';

export function FilterPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible((state) => {
      return !state;
    });
  };

  return (
    <div className="relative ml-5">
      <button onClick={togglePopup}>
        <FunnelSimple className="text-purple-500" weight="bold" size={28} />
      </button>

      {isPopupVisible && (
        <div className="absolute -right-3 bg-white shadow-button border py-3 px-5">
          <p className="whitespace-nowrap text-gray-750 mb-2">
            Mostrar por ordem de envio
          </p>

          <label className="text-gray-750 block" htmlFor="show_newest">
            <input
              className="mr-2 mb-2"
              type="radio"
              id="show_newest"
              name="filter"
            />
            Show newest
          </label>

          <label className="text-gray-750" htmlFor="show_older">
            <input
              className="mr-2"
              type="radio"
              id="show_older"
              name="filter"
            />
            Show older
          </label>
        </div>
      )}
    </div>
  );
}
