import Link from 'next/link';
import { LuTentTree } from "react-icons/lu";
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' className="bg-emerald-600" asChild >
      <Link href='/'>
        <LuTentTree className='w-6 h-6 text-white bg-emerald-600'/>
      </Link>
    </Button>
  );
}

export default Logo