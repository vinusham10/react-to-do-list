import { Component } from "react";
import DisplayListOfItems from "./components/DisplayListOfItems";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      listOfItems:[],
      item:{
        key:'',
        itemDescription:'',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  };



  handleInput=(event)=>{
    this.setState(
      {
        item:{
          key:Date.now(),
          itemDescription : event.target.value
        }
      }
    )
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem = this.state.item;
    if(newItem.itemDescription!==""){
      const listOfItems = [...this.state.listOfItems, newItem];
      this.setState({
        listOfItems : listOfItems,
        item:{
          key:'',
          itemDescription:''
        }
      })

    }
  }

  handleDelete=(key)=>{
    const filteredItems = this.state.listOfItems.filter(currItem=>
      currItem.key!==key);
    this.setState({
      listOfItems:filteredItems
    })
  }

  handleUpdate=(newDescription,key)=>{
    const listOfItems = this.state.listOfItems;

    listOfItems.map(currItem=>{
      if(currItem.key===key){
        currItem.itemDescription = newDescription;
      }
    })
    this.setState({
      listOfItems:listOfItems
    })
  }

  // display = ()=>{
  //   const newL = this.state.listOfItems.map(curr=>{
  //     return(
  //       <div key={curr.key}>{curr.itemDescription}</div>
  //     )
  //   })
  //   return newL;
  // }




  render(){
    return(
      <div className="main">
        <header>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              placeholder="Type here" 
              value={this.state.item.itemDescription}
              onChange={this.handleInput}    
            />
            <button type="submit">Add Item</button>
          </form>

          <p>{this.state.item.itemDescription}</p>

          <DisplayListOfItems 
            listOfItems={this.state.listOfItems} 
            handleDelete={this.handleDelete} 
            handleUpdate={this.handleUpdate}
          />

          {/* {this.display()} */}
          
        </header>
      </div>
    );
  }






};