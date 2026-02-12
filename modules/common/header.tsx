type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="infoHeader w-full h-[50vh] flex items-center justify-center text-white">
      <h1 className="text-5xl font-bold text-shadow-2xs">{title}</h1>
    </header>
  );
}
