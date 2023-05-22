import * as React from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Navigation = () => {
    return (
        <View style={{
                    backgroundColor:'#F8E8EE', 
                    paddingVertical: 20, 
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:10,}}>

                    <TouchableOpacity
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="folder-open" size={20} color="#bdbdbd" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="heart" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="user" size={20} color="#bdbdbd" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="ellipsis-v" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>
    );
}

export default Navigation;