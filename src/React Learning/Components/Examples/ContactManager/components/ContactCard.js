import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import user from "../images/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <table class="table-fixed">
      {/* <img src={user}/> */}
      <tbody>
        <td>{name}</td>
        <td>{email}</td>
        <td style={{ color: "red", marginTop: "7px", cursor: "pointer" }}>
          <DeleteIcon onClick={() => props.clickHandler(id)} />
        </td>
      </tbody>
    </table>
  );
};

export default ContactCard;
