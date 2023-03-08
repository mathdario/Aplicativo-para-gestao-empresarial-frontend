import newCharge from './assets/newCharge.svg';

export default function ClientsLine({ db }) {
  const status = {
    'Em dia': (
      <p className='text-payed-600 bg-payed px-4 rounded-full text-sm font-semibold text-center'>
        Em dia
      </p>
    ),
    Inadinplente: (
      <p className='text-expired-600 bg-expired px-2 text-sm font-semibold text-center'>
        Inadimplente
      </p>
    ),
  };

  return (
    <>
      {db.map((client) => (
        <div
          key={client.id}
          className='border-b last:border-b-0 last:pb-1 max-md:border-b-0'
        >
          <div className='flex py-1 items-center font-nuni text-sm max-md:flex-col max-md:hidden hover:bg-slate-200 transform transition-all duration-300 '>
            <div className='flex  w-[25%] pl-6'>
              <p>{client.name}</p>
            </div>
            <div className='w-[15%]'>
              <p>{client.cpf}</p>
            </div>
            <div className='w-[25%]'>
              <p>{client.email}</p>
            </div>
            <div className='w-[10%]'>
              <p>{client.phone}</p>
            </div>
            <div className='w-[12.5%]'>
              <div className='flex justify-center'>{status[client.status]}</div>
            </div>
            <div className='w-[12.5%] flex flex-col items-center cursor-pointer hover:animate-pulse'>
              <img
                src={newCharge}
                alt='Criar Cobrança'
              />
              <p className='font-nuni font-semibold text-xxs text-basePink'>
                Cobrança
              </p>
            </div>
          </div>
          <div className='hidden max-md:flex max-md:flex-col max-md:justify-around w-64 h-36 mx-2 p-2 rounded-xl bg-white drop-shadow-lg relative z-10'>
            <div className='flex items-baseline'>
              <p className='font-nuni font-bold text-xs pr-1'>Cliente: </p>
              <span className='font-nuni text-sm'>{client.name}</span>
            </div>
            <div className='flex items-baseline'>
              <p className='font-nuni font-bold text-xs pr-1'>CPF: </p>
              <span className='font-nuni text-sm'>{client.cpf}</span>
            </div>
            <div className='flex items-baseline'>
              <p className='font-nuni font-bold text-xs pr-1'>Email: </p>
              <span className='font-nuni text-sm'>{client.email}</span>
            </div>
            <div className='flex items-baseline'>
              <p className='font-nuni font-bold text-xs pr-1'>Telefone: </p>
              <span className='font-nuni text-sm'>{client.phone}</span>
            </div>
            <div className='flex items-baseline'>
              <p className='font-nuni font-bold text-xs pr-1'>Status: </p>
              <span className='font-nuni text-sm'>{status[client.status]}</span>
            </div>
            <div
              className={`absolute right-4 bottom-4 flex flex-col items-center cursor-pointer `}
            >
              <img
                src={newCharge}
                alt='Criar Cobrança'
              />
              <p className='font-nuni font-semibold text-xxs text-basePink '>
                Cobrança
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
