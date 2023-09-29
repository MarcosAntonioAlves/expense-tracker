import { useState, useEffect } from 'react';
import * as C from'./App.styles';
import {categories} from './data/categories';
import {items} from './data/items';
import {Category} from './types/category';
import {Item} from './types/Item';
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';
import { TableAria } from './Components/TableAria';
import {InfoArea} from './Components/InfoArea';
import {InputArea} from './Components/inputArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) =>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.container>
      <C.Header>
        <C.HeaderText>
          Sistema Financiers
        </C.HeaderText>
      </C.Header>
      <C.Body>
          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense} color={''}
          />

          <InputArea onAdd={handleAddItem}/>

          <TableAria list={filteredList}/>
      </C.Body>
    </C.container>
  );
}
export default App;