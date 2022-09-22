interface Card {
  nome: string;
  email: string;
  celular: string;
}

export function Title(props: Card) {
  return (
    <div className="bg-gray-100 w-72 h-40 rounded-lg text-center m-2" >
      <h1 className="text-orange-500" >Olá Mundo{}</h1>
      <span className="flex border-gray-900 border-t-2"></span>
      <div className="flex flex-col items-start px-3 text-1xl text-orange-800">
        <h2>{`Nome: ${props.nome}`}</h2>
        <h2>{`Email: ${props.email}`}</h2>
        <h2>{`Celular: ${props.celular}`}</h2>
      </div>
    </div>
  )
}