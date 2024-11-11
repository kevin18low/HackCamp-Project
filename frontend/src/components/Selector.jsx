import Dropdown from 'react-bootstrap/Dropdown';

function Selector({ choice, handleClick }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {choice ? choice : ""}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClick("Month Book")}>Month Book</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick("Year Book")}>Year Book</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Selector;