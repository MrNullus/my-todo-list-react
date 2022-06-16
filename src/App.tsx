import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {  
  //* Com isso define que vai ser do tipo Item e que
  //¬ é um array
  const [ list, setList ] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList =  [...list];
    newList.push({
      id: ( list.length + 1 ),
      name: taskName,
      done: false,
    });

    setList(newList);
  }
  
  // console.log(JSON.stringify(list));

  return (
    <C.Container>
      <C.Area>
        <C.Header>My TODO List</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
