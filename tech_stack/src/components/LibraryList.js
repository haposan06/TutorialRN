import React, { Component } from 'react'
import {View, FlatList} from 'react-native'
import {connect} from 'react-redux'
import ListItem from "./ListItem";

class LibraryList extends Component{
    renderItem(item){
        return <ListItem library={item}/>
    }
    render(){
        return (
            <FlatList renderItem={this.renderItem}
                      data={this.props.libraries}
                      keyExtractor={(library) => library.id.toString()}
                      />
        )
    }
}
function mapStateToProps(state){
    return {libraries : state.libraries}
}


export default connect(mapStateToProps) (LibraryList)