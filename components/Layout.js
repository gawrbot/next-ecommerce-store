import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const basicStyles = css`
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="shopping-and-commerce.png" />
      </Head>

      <Header />

      <main css={basicStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
