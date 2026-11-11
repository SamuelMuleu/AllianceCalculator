import { GiGoldBar } from "react-icons/gi";

export function Header() {
  return (
    <header className="pt-10 pb-8 sm:pt-14">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
          <GiGoldBar size={30} aria-hidden="true" />
        </span>
        <div>
          <h1 className="font-serif text-3xl text-ink-50 sm:text-4xl">
            Calculadora de Alianças
          </h1>
          <p className="mt-2 text-ink-300">
            Descubra a conquilha ideal e o peso de ouro necessário para a fundição.
          </p>
        </div>
      </div>
    </header>
  );
}
