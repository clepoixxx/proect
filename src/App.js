import React from "react";
import Header from "./components/Header";
import Foter from "./components/Foter";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

/* Товары */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Свадебный торт',
          img: '1.jpeg',
          desc: 'Non autem recusandae At eveniet voluptas ut quasi galisum. Aut soluta fugiat et optio internos ut facilis provident sit atque enim.',
          category: 'Sugar',
          price: '15.022',
        },
        {
          id: 2,
          title: 'Торт к дню рождения',
          img: '2.jpeg',
          desc: 'Et galisum maiores et ullam tenetur et pariatur dolorem. Quo accusamus quas aut dolorem amet aut illum sunt id rerum dolor vel ducimus internos.',
          category: 'Sugar',
          price: '10.605',
        },
        {
          id: 3,
          title: 'Сет десертов',
          img: '3.jpeg',
          desc: 'Id fugiat distinctio in magnam sint ab sapiente mollitia eum galisum repellendus. Et iste ducimus et neque enim qui veritatis voluptas?',
          category: 'Sugar',
          price: '5.025',
        },
        {
          id: 4,
          title: 'Свадебный торт без сахара',
          img: '4.jpeg',
          desc: 'Ut ipsam earum sit velit nulla rem autem quia est suscipit aliquam. Non similique labore ex vero dolore ad natus cupiditate 33 nihil eligendi sed maiores beatae.',
          category: 'No_Sugar',
          price: '18.888',
        },
        {
          id: 5,
          title: 'Торт к дню рождения без сахара',
          img: '5.jpeg',
          desc: 'In modi eveniet ut tempore praesentium et quis beatae. Aut sequi deleniti et nulla beatae qui officia illo non fuga illo qui rerum quam.',
          category: 'No_Sugar',
          price: '13.999',
        },
        {
          id: 6,
          title: 'Сет десертов без сахара',
          img: '6.jpeg',
          desc: 'Sit adipisci quis et maxime corrupti est optio molestiae et illo veniam a quod deserunt et vitae beatae. Aut laboriosam rerum quo modi reprehenderit aut magni quod!',
          category: 'No_Sugar',
          price: '11.253',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Foter />
        </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items })
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

 deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
 
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
