import TodoItem from './TodoItem';

function TodoList(props){

    console.log(props.list)
    return(
        <div>
            {props.list? props.list.map(e => (
                <TodoItem data={e} />
            )): <h1>null nè</h1>}
        </div>
        
    )
}

export default TodoList