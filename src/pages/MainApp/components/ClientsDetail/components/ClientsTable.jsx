import { TbArrowsDownUp } from 'react-icons/tb';
import ClientsLine from './ClientsLine';

export default function ClientsTable({ db }) {
  return (
    <div className='mr-12 max-md:mr-0 pt-6 bg-white max-md:bg-transparent rounded-4xl z-0 drop-shadow-sm'>
      <div className='flex font-nuni font-bold text-base max-md:hidden border-b pb-5'>
        <div className='flex items-center gap-2 w-[25%] pl-6'>
          <TbArrowsDownUp className='text-xl' />
          <h4>ID Cob.</h4>
        </div>
        <div className='w-[15%] flex items-center gap-2'>
          <TbArrowsDownUp className='text-xl' />
          <h4>Data de venc.</h4>
        </div>
        <div className='w-[25%]'>
          <h4 className='text-left'>Valor</h4>
        </div>
        <div className='w-[10%]'>
          <h4>Status</h4>
        </div>
        <div className='w-[12.5%]'>
          <h4 className='text-center'>Descrição</h4>
        </div>
      </div>
      <div className='max-md:flex max-md:flex-wrap max-md:justify-center gap-4'>
        <ClientsLine db={db} />
      </div>
    </div>
  );
}
