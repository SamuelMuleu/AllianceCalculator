import { GiGoldBar } from "react-icons/gi";

export function Header() {
  return (
    <header className=" text-white py-6 mb-8">
      <div className="container mx-auto px-4  flex justify-center items-center">
        <div className="flex items-center justify-center md:justify-start">
          <div className=" mr-3 flex justify-center items-center  text-gold-400">
            <GiGoldBar size={50} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold  ml-4">Calculadora de Alianças</h1>
            <p className="text-sm ml-2 text-gold-100">
              Calcule o peso necessário e tamanho da conquilha
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
