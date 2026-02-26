import { createContext } from "react";
export const TodoItemsContext = createContext({
        // when key and value are same we have a javascript shortcut we can use single word in the object
        todoItems: [],
        addNewItem: ()=>{},
        deleteItem: ()=>{},
      });
