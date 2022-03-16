import styled from '@emotion/styled';

export const Wrap = styled.section`
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
  color: #555555;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Stat = styled.li`
  flex-basis: calc(100% / 4);
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #f3f3f3;
  color: #999999;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
`;
