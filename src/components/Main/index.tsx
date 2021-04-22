import * as S from "./styles";

const Main = ({
  title = "React Avançado",
  description = "TypeScript, ReactJS, NextJS e Styled Components"
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e o texto React Avançado escrito ao lado direito."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="imagem de um programador sentado de frente para uma tela com códigos."
    />
  </S.Wrapper>
);

export default Main;
