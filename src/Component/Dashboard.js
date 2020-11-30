import React from "react";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Style/DashboardComponent.css";
import TodoList from "./Todo/TodoList";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.description = ""
  }

  componentWillMount(){
    const st = this.props;
    st.getAll(st.token);
    console.log(st.token);
    console.log(st.todoList);
  }
  render() {
    const st = this.props;
    const list_demo = [{
        id: 1,
        decription: "Wash the dishes",
        done: true
    },{
      id: 2,
      decription: "Clean the floor",
      done: false
  }];
    if (st.isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="dashboard">
        <div style={{display: "flex", justifyContent: "flex-start"}}>
          <Button id="button-add" variant="contained" color="primary" onClick={() => st.logout()}>
            LOG OUT
          </Button>
        </div>
        <div>
          <TextField id="standard-basic" label="To Do" onChange={(e)=> this.description = e.target.value} />
          <Button id="button-add" variant="contained" color="secondary" onClick={() => {st.addItem(st.token ,{description: this.description, done: false}); st.getAll(st.token)}}>
            ADD
          </Button>
        </div>
        <div className="todolist" style={{marginTop: '20px'}}>
            <TodoList list = {st.todoList} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
