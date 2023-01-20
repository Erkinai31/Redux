import { useSelector, useDispatch } from "react-redux"
import { fetchCustomers } from "../asyncAction/customers"
// импорт экшн-генераторов
import { decrAction, incrAction } from "../store/CountReducer"
import { addEmplAction, remEmplAction,removeEmplAction} from "../store/empReduce"


function App(){
    // Хук useSelector позволяет получить любое состояние с хранилища store
    let count = useSelector(store => store.count.count)
    let empl = useSelector(store => store.empl.empl)
    
    // dispatch позволяет указать команду (type) для reducer
    let dispatch = useDispatch()


    return(
        <div>
            <h1>Счетчик</h1>
            {count}
            <div>
                <button onClick={()=> dispatch(incrAction(+prompt()))}>Инкремент</button>
                <button onClick={()=> dispatch(decrAction(+prompt()))}>Декремент</button>
            </div>
            <h1>Сотрудники</h1>
            {empl.map(elem=> 
                <div onClick={() => dispatch(removeEmplAction(elem))}>
                    <h3>{elem.name}</h3>
                </div>
            )}
            <div>
                <button onClick={()=> dispatch(addEmplAction(prompt()))}>Добавить нового пользоватетя</button>
                <button onClick={()=> dispatch(remEmplAction())}>Удалить последнего пользователя</button>
                <button onClick={()=> dispatch(fetchCustomers())}>Получить клиентов из базы</button>
            </div>
        </div>
    )
}

export default App