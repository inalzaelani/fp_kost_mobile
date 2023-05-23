import * as React from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Navigation = ({active}) => {
    const navigate=useNavigation();
    return (
        <View style={{
                    backgroundColor:'#112D4E', 
                    paddingVertical: 20, 
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:10,}}>

                    <TouchableOpacity
                     onPress={()=>navigate.navigate('Home')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color={active=='Home' ? '#FF6969' : '#F4F9F9'} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                    onPress={()=>navigate.navigate('Payment')}
                     style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="folder-open" size={20} color={active=='Payment' ? '#FF6969' : '#F4F9F9'} />
                    </TouchableOpacity>

                     <TouchableOpacity 
                    onPress={()=>navigate.navigate('Event')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="calendar-check" size={20} color={active=='Event' ? '#FF6969' : '#F4F9F9'} />
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                    onPress={()=>navigate.navigate('RequestService')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="cogs" size={20} color={active=='RequestService' ? '#FF6969' : '#F4F9F9'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="ellipsis-v" size={20} color={active ? '#FF6969' : '#F4F9F9'} />
                    </TouchableOpacity>
                </View>
    );
}

export default Navigation;