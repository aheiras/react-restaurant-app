import styled from 'styled-components';

export const CategoryContainer = styled.div<{ imageUrl: string }>`
  width: 80%; 
  max-width: 1200px; 
  height: 250px;
  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  h2 {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0;

    font-size: clamp(1rem, 10vw, 2rem);
  }

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 150px;
  }

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;