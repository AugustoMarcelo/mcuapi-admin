import { CaretLeft, CaretRight } from 'phosphor-react';

export function Pagination() {
  return (
    <div className="flex items-center py-2 px-3 mt-6 max-w-max border-2 rounded-[10px] ml-auto mr-auto">
      <CaretLeft className="text-gray-200" weight="bold" size={22} />
      <div className="mx-8 grid grid-cols-6 gap-5">
        <button className="text-lg text-white bg-purple-500 w-7 h-7 rounded-2xl">
          1
        </button>
        <button className="text-lg text-gray-200">2</button>
        <button className="text-lg text-gray-200">3</button>
        <button className="text-lg text-gray-200">4</button>
        <button className="text-lg text-gray-200">5</button>
        <button className="text-lg text-gray-200">6</button>
      </div>
      <CaretRight className="text-purple-500" weight="bold" size={22} />
    </div>
  );
}
