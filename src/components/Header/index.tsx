import {
  BellSimple,
  MagnifyingGlass,
  PaperPlaneRight,
  SignOut,
} from 'phosphor-react';

export function Header() {
  return (
    <header className="flex items-center justify-between h-36 bg-gray-750 px-8">
      <div className="flex">
        <button className="flex w-[50px] h-[50px] bg-red-500 items-center justify-center rounded-[10px] shadow-button">
          <MagnifyingGlass className="text-white" weight="bold" size={24} />
        </button>
        <input
          className="h-[50px] rounded-[10px] pl-4 placeholder:text-gray-200 text-lg ml-1 mr-8"
          type="text"
          placeholder="Search"
        />
        <button className="flex h-[50px] px-10 bg-red-500 items-center justify-center rounded-[10px] shadow-button">
          <PaperPlaneRight
            className="text-white mr-2"
            weight="bold"
            size={24}
          />
          <span className="text-white text-lg font-bold">New Sent</span>
        </button>
      </div>

      <div className="flex items-end gap-7">
        <div className="flex gap-7">
          <BellSimple className="text-white" weight="fill" size={26} />

          <button className="flex flex-col items-center">
            <SignOut className="text-white mb-2" weight="bold" size={26} />
            <span className="text-white text-lg">Log out</span>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="h-16 w-16 rounded-[10px] shadow-button mb-2"
            src="https://www.github.com/augustomarcelo.png"
            alt="Avatar"
          />
          <strong className="text-xl text-white font-bold">Marcelo</strong>
        </div>
      </div>
    </header>
  );
}
