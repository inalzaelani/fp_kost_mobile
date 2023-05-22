import * as React from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Navigation = () => {
    const navigate=useNavigation();
    return (
        <View style={{
                    backgroundColor:'#FDCEDF', 
                    paddingVertical: 20, 
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:10,}}>

                    <TouchableOpacity
                     onPress={()=>navigate.navigate('Home')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                    onPress={()=>navigate.navigate('Payment')}
                     style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="folder-open" size={20} color="#bdbdbd" />
                    </TouchableOpacity>

                     <TouchableOpacity 
                    onPress={()=>navigate.navigate('Event')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="calendar-check" size={20} color="#bdbdbd" />
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