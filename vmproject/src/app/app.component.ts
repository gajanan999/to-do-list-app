import { Component, OnInit, HostListener  } from '@angular/core';



// interface ToDoList{

//   id:Number
//   label:String
//   priority:Number

// }

toDoList: []=[
  {
  "id":1,
  "label":"item-1",
  "priority":1
  },
  {
    "id":1,
    "label":"item-1",
    "priority":1
  },
  {
    "id":1,
    "label":"item-1",
    "priority":1
  }

]



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vmproject';

  selectedId:number =0;
  todolist: any = [];
  ids: Number[] = [];

  constructor(){
      this.ids = [];
      this.todolist = [
        {
        "id":1,
        "label":"item-1",
        "priority":1,
        "editing":false
        },
        {
          "id":2,
          "label":"item-2",
          "priority":2,
          "editing":false
        },
        {
          "id":3,
          "label":"item-3",
          "priority":3,
          "editing":false
        }
      
      ]
  }

  ngOnInit(){

  }

  changeLabel(item:any){

  }

  onChangeCheckbox(event:Event, item:any){
     let y:Number = item.id
      if(this.ids.includes(y)){

           this.ids.forEach((x, index)=>{
             if(x == y)
              this.ids.splice(index,1)
           })
      }else{
          this.ids.push(y)
      }
  }

  editItem(item:any){
    item.editing = true
  }

  doneEditing(item:any){
    item.editing= false
  }

  addItem(){
     const itemNubmer = Math.max.apply(Math, this.todolist.map(function(o:any) { return o.id; }))+1
     this.todolist.push({
      "id":itemNubmer,
      "label":"item-"+itemNubmer,
      "priority":0,
      "editing":true
     })
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'Delete')
    {
      this.ids.forEach((id)=>{
          this.todolist.forEach((element:any,i:number) => {
            if(element.id == id)
              this.todolist.splice(i,1)
          });
      })
    }


    if(event.key === 'ArrowRight')
    {
      if(this.selectedId != this.todolist.length-1)
        this.selectedId = this.selectedId + 1;
    }

    if(event.key === 'ArrowLeft')
    {
      if(this.selectedId != 0)
       this.selectedId = this.selectedId - 1;
    }

    if(event.key === 'Enter')
    {
      let foo =this.todolist[this.selectedId];
      foo.editing = !foo.editing;
    }
  }
}
