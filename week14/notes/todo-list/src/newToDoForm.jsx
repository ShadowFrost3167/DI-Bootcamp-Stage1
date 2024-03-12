import {useState} from "react"

export function newToDoForm(){
    const [newItem, setNewItem]= useState("")


    // function submission(e){
    //     e.preventDefault()
    //     setTodos(currentTodos => {
    //       return [
    //         ...currentTodos,
    //         {id: crypto.randomUUID(),
    //         title: newItem,
    //         completed: false,
    //         },
    //     ]
    //     })
        setNewItem("")
      }
    return (
    <form onSubmit={submission} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">What to do?</label>

      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} type="text" 
      id="item" 
      />
    </div>

    <button className="btn">Add</button>
  </form>
  )
}