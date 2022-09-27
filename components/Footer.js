import { css } from '@emotion/react';

const footerStyles = css`
  background-color: lightgrey;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
`;

export default function Footer() {
  return <footer css={footerStyles}>Copyright Rhea Dieb</footer>;
}
