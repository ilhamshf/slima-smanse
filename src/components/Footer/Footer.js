import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Instagram</LinkTitle>
          <LinkItem href="https://instagram.com/slima.smanse">slima.smanse</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:slimasmanse@gmail.com">
            slimasmanse@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Look forward to our next haha</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://instagram.com/slima.smanse">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
        <CompanyContainer>  
          <Slogan>© 2021 Build by Ilham Shofa</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
