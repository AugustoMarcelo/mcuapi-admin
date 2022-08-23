import { GithubLogo } from 'phosphor-react';
import Logo from '../../logo.svg';

export function Login() {
  return (
    <main className="h-screen w-full flex flex-1">
      <img
        src="https://images.unsplash.com/photo-1620075267033-09d12ec75b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="Random image"
        className="object-cover w-full"
      />

      <section className="flex flex-col items-center justify-center h-full w-full bg-red-500">
        <img
          src={Logo}
          alt="Três hexágonos brancos com as letras MCU em vermelho"
          className="w-[200px] h-[200px] object-contain mb-8"
        />

        <div className="flex flex-col items-center bg-white p-[56px] rounded-[10px]">
          <h3 className="font-bold text-3xl text-gray-750 mb-4">Welcome!</h3>
          <p className="text-xl text-gray-750 mb-12">
            Log in with your Github account
          </p>
          <button className="flex items-center justify-center bg-gray-850 py-2 px-4 border-none rounded-[10px] font-bold">
            <GithubLogo size={24} weight="fill" className="text-white mr-2" />
            <span className="text-white text-lg">Log in with Github</span>
          </button>
        </div>
      </section>
    </main>
  );
}
