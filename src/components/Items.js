import React, { Component } from 'react'
import Item from './Item';

export class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [
            {
              id: 1,
              title: 'Chair grey',
              img: 'chair-grey.jpeg',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
              category: 'chairs',
              price: '49.99'
            },
            {
              id: 2,
              title: 'Table',
              img: 'table.jpeg',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
              category: 'tables',
              price: '149.00'
            },
            {
              id: 3,
              title: 'Sofa Blue',
              img: 'sofa-blue.jpeg',
              desc: 'Comfortable modern sofa with soft cushions.',
              category: 'sofas',
              price: '299.99'
            },
            {
              id: 4,
              title: 'Bookshelf Wooden',
              img: 'bookshelf-wooden.jpeg',
              desc: 'Spacious wooden bookshelf with multiple shelves.',
              category: 'shelves',
              price: '199.99'
            },
            {
              id: 5,
              title: 'Office Chair Black',
              img: 'office-chair-black.jpeg',
              desc: 'Ergonomic office chair with adjustable height.',
              category: 'chairs',
              price: '129.99'
            },
            {
              id: 6,
              title: 'Coffee Table Glass',
              img: 'coffee-table-glass.jpeg',
              desc: 'Stylish glass coffee table with metal legs.',
              category: 'tables',
              price: '89.99'
            },
            {
              id: 7,
              title: 'Bed Frame King Size',
              img: 'bed-frame-king.jpeg',
              desc: 'Elegant king-size bed frame made of oak wood.',
              category: 'beds',
              price: '499.99'
            },
            {
              id: 8,
              title: 'Dining Set',
              img: 'dining-set.jpeg',
              desc: 'Modern dining set with 6 chairs and a wooden table.',
              category: 'dining sets',
              price: '599.00'
            }
          ]
        };
      }

    render() {
      return (
        <main>
          {this.state.items.map(el => (
                <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
          ))}
        </main>
      );
    }
  }

export default Items
