import styled from "@emotion/styled";

export const Menu = ({ display, datas, type }) => {
  switch (type) {
    case "Types":
      datas = datas.map((data) => data.type.name);
      break;
    case "Moves":
      datas = datas.map((data) => data.move.name);
      break;

    default:
      break;
  }

  if (display) {
    return (
      <MenuStyle>
        {datas.map((data) => {
          return <Data key={data}>{data}.</Data>;
        })}
      </MenuStyle>
    );
  } else return null;
};

const MenuStyle = styled.div`
  border: 2px solid black;
  border-radius: 12px;
  margin: 0 10px 5px;
  padding: 5px;
  background-color: #4dad5b;
  display: flex;
  flex-wrap: wrap;
`;

const Data = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 2px;
  padding: 2px;
  border-radius: 12px;
  &:first-letter {
    text-transform: uppercase;
  }
`;
