import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Container, Input, Heading, Center, Box, Divider, Button, Wrap, WrapItem, Circle } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from '../store/slice/todoSlice'

function Todolist() {
  const [list, setList] = useState('')
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  const localTodo = localStorage.getItem('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (list) {
      if (localTodo) {
        const localTodos = JSON.parse(localTodo)
        localTodos.push(list)
        localStorage.setItem('todos', JSON.stringify(localTodos))
      } else {
        localStorage.setItem('todos', JSON.stringify([list]))
      }
      dispatch(addTodo(list))
      setList('')
    } else {
      alert('Please enter a todo')
    }

  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  useEffect(() => {

    if (localTodo) {
      const localTodos = JSON.parse(localTodo)
      localTodos.forEach(todo => dispatch(addTodo(todo)))
    }

  }, [])


  const handleDelete = (e) => {
    let conf = window.confirm('Are you sure you want to delete this todo?')

    if (conf) {

      const localTodos = JSON.parse(localStorage.getItem('todos'))
      localTodos.splice(e, 1)
      localStorage.setItem('todos', JSON.stringify(localTodos))

      dispatch(deleteTodo(e))
    }

  }

  return (
    <Center mt={200}>
      <Wrap align='center'>
        <WrapItem>
          <Box>

            <Container maxW='md'>
              <Box p={4} borderWidth='1px' borderRadius='lg' boxShadow='lg'>
                <Center>
                  <Heading as="h6" size='lg' color='black' mt={4} mb={5}>Add Todo</Heading>
                </Center>
                <Divider mb={10} />

                <FormControl>
                  <FormLabel htmlFor="list">List</FormLabel>
                  <Input width="100%" id='list' type='text' value={list} onChange={(e) => setList(e.target.value)} />
                  <FormHelperText>Todo List is required</FormHelperText>

                  <Divider mt={4} mb={4} />

                  <Button colorScheme='linkedin' onClick={handleSubmit} w='100%' mt={4}>Add Todo</Button>
                </FormControl>
              </Box>
            </Container>

          </Box>
        </WrapItem>

        <WrapItem>
          <Container maxW='md'>
            <Box p={4} borderWidth='1px' borderRadius='lg' boxShadow='lg'>
              <Heading as='h3' size={'md'}>List of Todos</Heading>
              <Divider mt={4} mb={4} />

              {
                todos.map((todo, index) => {
                  return (
                    <Wrap key={index}>
                      <WrapItem w='200px'>{ todo }</WrapItem>
                      <WrapItem>
                        <Circle cursor='pointer' onClick={() => handleDelete(index)} bg='red' color='white' size='20px'>&times;</Circle>
                      </WrapItem>
                    </Wrap>
                  )
                }
                )
              }

            </Box>
          </Container>
        </WrapItem>
      </Wrap>
    </Center>
  )
}

export default Todolist