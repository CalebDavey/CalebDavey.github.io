import Link from 'next/link'
import Landing from '@/app/pages/index';
function Home() {
  return (
      <ul>
        <li>
          <Link href="/">{<Landing/>}</Link>
        </li>
      </ul>
  )
}

export default Home