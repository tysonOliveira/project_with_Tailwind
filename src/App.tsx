import './styles/main.css';

import { Title } from './components/Title';

const card = [
  {
    nome: "Thaison Reis de Oliveira",
    email: "thaisonoliveira@gmail.com",
    celular: "9100990099"
  },
  {
    nome: "Thais Reis",
    email: "thatazinha@gmail.com",
    celular: "9100997007"
  },
  {
    nome: "Maria Regina Reis de Oliveira",
    email: "regina_51@gmail.com",
    celular: "9199009900"
  },
]

function App() {
  return (
    <div className="bg-zinc-700 w-auto h-screen flex flex-col items-center justify-center" >
      {card.map(item => {
        return (
          <Title  nome={item.nome} email={item.email} celular={item.celular} />
        )
      })}
  
      
    </div>
  )
}

export default App
