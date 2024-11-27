import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import './global.css';

const products = [
  {id: 1, name: 'Product 1', price: 100},

  {id: 2, name: 'Product 2', price: 150},

  {id: 3, name: 'Product 3', price: 200},
];

function App(): React.JSX.Element {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = item => {
    setCartItems(prev => {
      let isProductAvalable = false;
      const productlist = prev.map(product => {
        if (product.id == item.id) {
          product.quantity += 1;
          isProductAvalable = true;
          setTotal(prev => prev + product.price);
        }
        return product;
      });
      if (!isProductAvalable) {
        const temp = {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        };
        productlist.push(temp);
        console.log('TOTAL', total);
        setTotal(prev => prev + temp.price);
      }
      // console.log('ProductList', productlist);
      return productlist;
    });
  };

  const removeItem = item => {
    setCartItems(prev => {
      const productlist = prev.filter(product => {
        if (product.id != item.id) {
          return product;
        }
        if (product.id == item.id) {
          if (product.quantity > 1) {
            product.quantity -= 1;
            setTotal(prev => prev - product.price);
            return product;
          }
          setTotal(prev => prev - product.price);
        }
      });
      console.log('PRoduct', productlist);
      return productlist;
    });
  };

  return (
    <View className="p-4 mt-10">
      <View>
        <Text>Products</Text>
        <View>
          {products?.map(item => {
            return (
              <View key={item.id} className="flex flex-row justify-around mt-2">
                <View className="flex flex-row gap-x-2">
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => addToCart(item)}
                  className="h-10 px-4 bg-red-500 justify-center items-center">
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Text>Cart</Text>
        <View>
          {cartItems?.map(item => {
            return (
              <View key={item.id} className="flex flex-row justify-around mt-2">
                <View className="flex flex-row gap-x-2">
                  <Text>{item?.name}</Text>
                  <Text>{item?.price}</Text>
                  <Text>x {item?.quantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item)}
                  className="h-10 px-4 bg-red-500">
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <View className="mt-10">
        <Text>Total {total}</Text>
      </View>
    </View>
  );
}

export default App;
