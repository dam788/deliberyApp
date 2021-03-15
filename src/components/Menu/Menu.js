import React, { useState } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../utils/formatPrice';
import { H1 } from '../../Styles/Title';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { useSelector } from 'react-redux';
import { TagImg, TagsMenu, TagCard } from './MenuTags';

const MenuStyled = styled.div`
  padding: 50px 20px;
  z-index: 3;
`;

export const Menu = ({ setOpenFood }) => {
  const [section, setSection] = useState(null);
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector((state) => state.categories.foods);

  if (section) {
    Foods = { [section]: Foods[section] };
  }

  return (
    <>
      <MenuStyled>
        <TagsMenu>
          <h3>Filtro</h3>
          {section && (
            <TagCard onClick={() => setSection(null)}>
              <p>Todo</p>
            </TagCard>
          )}
          {categories.map((category) => (
            <TagCard onClick={() => setSection(category.section)}>
              <TagImg img={category.imgTag} />
              <p>{category.section}</p>
            </TagCard>
          ))}
        </TagsMenu>
        {Object.entries(Foods).map(([sectionName, foods]) => {
          return (
            <>
              <H1>{sectionName}</H1>
              <FoodGrid>
                {foods.map((food) => (
                  <Food
                    key={food.id}
                    img={food.img}
                    onClick={() => setOpenFood(food)}
                  >
                    <FoodLabel>
                      <div>{food.name}</div>
                      <div style={{ color: '#ec7538', fontWeight: 'bolder' }}>
                        {formatPrice(food.price)}
                      </div>
                    </FoodLabel>
                  </Food>
                ))}
              </FoodGrid>
            </>
          );
        })}
      </MenuStyled>
    </>
  );
};
