import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Lesson UI by React</h1>
      <nav>
        <ol>
          <li>
            <Link href='/ui/Button'>
              <a>Button</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Accordion</a>
            </Link>
          </li>
          <li>
            <Link href='/ui/LoadingIcon'>
              <a>Loading Icon</a>
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
