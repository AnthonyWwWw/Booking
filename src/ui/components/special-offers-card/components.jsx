import styled from 'styled-components';
import iconBeds from '../../img/icon_beds.svg';
import iconsPeople from '../../img/icon_people.svg';
import iconSquare from '../../img/icon_square.svg';

export const ListItemBeds = styled.li`
    display: flex;
    align-items: center;

  &::before {
    content: "";
    background-image: url(${iconBeds});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const ListItemSleeps = styled.li`
    display: flex;
    align-items: center;

  &::before {
    content: "";
    background-image: url(${iconsPeople});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const ListItemSquare = styled.li`
    display: flex;
    align-items: center;

  &::before {
    content: "";
    background-image: url(${iconSquare});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
     width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;
