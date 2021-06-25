import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
    
    return (

        <Container className= "text-center">
            <h1 className= "m-5">Login</h1>
            
            <Form>
                <Form.Group controlId="formBasicUsername">
                
                    <Form.Control type="Username" placeholder="Username" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Valider
                </Button>
            </Form>
        </Container>
    )
}

export default Login

//     const [id, setId] = useState('')
//  const [name, setName] = useState('')
//     const [username, setUsername] = useState('')
//     const [city, setCity] = useState('')

// const addName = useCallback((e) => {
//     setName(e.target.value)
// }, [setName])

// const NameContext = React.createContext('')

  
//   const getUser = useCallback(async (user) => {
//     try {
//       const result = await fetch('https://restcountries.eu/rest/v2/name/' + user)
//       const userResult = await result.json()
  
//       setId(userResult[0].id)
//       setName(userResult[0].name)
//       setUsername(userResult[0].Username)
//       setCity(userResult[0].city)
   
//     } catch (error) {
//       console.error(error)
//     }
//   }, [setId, setName, setUsername, setCity])
  
//   useEffect(async() => {
//     try {
//     getUser('france')
//     } catch (error) {
//       console.error(error)
//     }
//   }, [])