import React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';


import {API, graphqlOperation } from 'aws-amplify';

import {listPosts} from '../../../src/graphql/queries';


const Home = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      // fetch all the posts
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost();
  }, []);
return(
  <View>
      
  <FlatList
    data={posts}
    renderItem={({item}) => <Post post={item} />}
    showsVerticalScrollIndicator={false}
    snapToInterval={Dimensions.get('window').height -70 }
    snapToAlignment={'start'}
    decelerationRate={'fast'}
  />
</View>
);
};
export default Home;