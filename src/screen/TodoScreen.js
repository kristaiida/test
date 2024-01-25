import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../components/Fallback'

const TodoScreen = () => {

  // Init local states
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editedTodo, setEditedTodo] = useState(null)

  // Handle Add Todo

  const handleAddTodo = () => {

    // Structure of a single todo item
    // {
    //   id:
    //   title:
    // }

    if(todo === '') {
      return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
    setTodo('')
  }

  // Handle Delete

  const handleDeleteTodo = (id) => {

    // Todo's show to list exept id which user clicked
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)

    setTodoList(updatedTodoList)

  }

  // Handle Edit

  const handleEditTodo = (todo) => {

    setEditedTodo(todo)
    setTodo(todo.title)

  }

  // Handle Update

  const handleUpdateTodo = () => {

    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo }
      }

      return item
    })
    setTodoList(updatedTodos)
    setEditedTodo(null)
    setTodo('')
  }

  // Render todo

  const renderTodos = ({ item, index }) => {

    return (

      <View
        style={{
          backgroundColor: '#1e90ff',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 4 // for android
        }}
      >

        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: '800',
            flex: 1
          }}
        >
          {item.title}
        </Text>

        <IconButton
          icon='pencil'
          iconColor='#fff'
          onPress={() => handleEditTodo(item)} />
        <IconButton
          icon='trash-can'
          iconColor='#fff'
          onPress={() => handleDeleteTodo(item.id)} />
      </View>
    )
  }

  return (
    <View style={{
      marginHorizontal: 16,
      marginTop: 40
    }}><Text
      style={{
        fontSize: 33,
        alignSelf: 'center',
        marginTop: 12,
        marginBottom: 12,
        fontWeight: 'bold'

      }}>Tehtävälista</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#1e90ff',
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,

        }}
        placeholder='Lisää tehtävä'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {
        editedTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              borderRadius: 6,
              paddingVertical: 8,
              marginVertical: 34,
              alignItems: 'center'
            }}
            onPress={() => handleUpdateTodo()}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20
              }}>Tallenna</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              borderRadius: 6,
              paddingVertical: 8,
              marginVertical: 34,
              alignItems: 'center'
            }}
            onPress={() => handleAddTodo()}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20
              }}>
              Lisää
            </Text>
          </TouchableOpacity>
        )}

      {/*Render todo list*/}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})