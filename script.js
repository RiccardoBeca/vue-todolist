/*

Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
**MILESTONE 1**
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.
**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


*/


const app = new Vue({

  el: "#app",

  data:{

    todos: [
      {
        text: "Studia la OOP",
        done: false
      },
      {
        text: "Debugga codice",
        done: false
      },
      {
        text: "Allenati",
        done: false
      },
      {
        text: "Compra la frutta",
        done: true
      }
    ],
    newTodo: {
      text:"",
      done: false
    }


  },

  methods: {
    
    rimuoviTodo(index) {
      this.todos.splice(index, 1);
    },

    aggiungiTodo(text) {
      // const newTodoAdded= {
      //   text: this.newTodo,
      //   done:false
      // }
      if (this.newTodo.text.length > 1) {
        // uso le graffe e i puntini per fare spread
        this.todos.push({...this.newTodo});
        this.newTodo.text="";
      }
    },

    todoDone(index) {
      this.todos[index].done = !this.todos[index].done;
    }

  },

})



