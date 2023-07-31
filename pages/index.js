import NextLink from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Página Inicial - Rodrigo GitAction [Nova alteração]</h1>
      <NextLink href="/sobre">
        <a>Ir para a sobre Dev</a>
      </NextLink>
    </div>
  );
}
