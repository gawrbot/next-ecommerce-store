import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  font-size: 24px;
  a {
    padding-right: 25px;
  }
  a:last-child {
    padding-right: 0;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={headerStyles}>
        <div>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <Link href="/shopping-cart">Shopping Cart</Link>
      </nav>
    </header>
  );
}
