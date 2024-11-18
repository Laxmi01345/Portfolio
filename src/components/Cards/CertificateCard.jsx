import React, { useState } from 'react';
import styled from 'styled-components';


const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
  border: 0.1px solid #854ce6;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-height: 200px;
  max-width: 40%;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 8px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  transform-origin: center;

  /* Apply zoom-out effect when active */
  ${({ isZoomed }) => isZoomed && `
    transform: scale(2);
    transition: transform 0.3s ease-in-out;
  `}

  @media only screen and (max-width: 768px) {
    max-height: 100px;
  }
`;

const CertificateCard = ({ certificates }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Card>
      <Top>
        <Body>
          <Name>{certificates.name}</Name>
        </Body>
      </Top>
      <Description>
        <Span>{certificates.description}</Span>
        {certificates.image && (
          <ImageContainer>
            <Image
              src={certificates.image}
              alt={certificates.name}
              isZoomed={isZoomed}
              onClick={handleImageClick}
            />
          </ImageContainer>
        )}
      </Description>
    </Card>
  );
};

export default CertificateCard;
