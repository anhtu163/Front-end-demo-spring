import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import "../../Style/DashboardComponent.css";

function TodoItem(props) {
    const [check, setCheck] = useState(props.data.done);
  return (
    <ListItem
      button
      onClick={(event) => setCheck(!check) }>
      <IconButton color={check? "secondary" : "primary"} >
        
        {check? <CheckIcon /> : <CancelIcon />}
      </IconButton>
      <ListItemText style={{width: "600px"}} primary={props.data.description} />
      <IconButton color="secondary">  
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
