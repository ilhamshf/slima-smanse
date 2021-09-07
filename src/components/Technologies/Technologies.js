import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FaRegLaughBeam, FaRegLaughSquint, FaRegLaugh } from "react-icons/fa";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Goals</SectionTitle>
    <SectionText>
    The goal of us making all of this is to create everything that is modern and easily accessible to everyone
    <br />
    <br />
    In the future we will also create a business, therefore it will be easier to use online merchandise. The buyer just waits and the order is delivered to the house (misal wkwk)
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaRegLaughBeam size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mengwawancara</ListTitle>
          <ListParagraph>
            Mewawancarai pedagang ciloks hehe
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRegLaughSquint size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mengbisnis</ListTitle>
          <ListParagraph>
            Jadi pembisnis sejak kecil 😎
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRegLaugh size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mengreview</ListTitle>
          <ListParagraph>
            Mengriview dagangane tonggo xixi
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
