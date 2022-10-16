import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import React, { useEffect } from 'react';
import endpoint from './endpoint'
import { getToken, getUsername } from '@utils'

const Home = () => {
  const [person, setPerson] = React.useState([]);
  const fetchGet = async () => {
    const response = await fetch(
        `${endpoint}/api/getProfile`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${getToken}`
          },
          body: JSON.stringify({
            'username': getUsername
          }),
        }
        
      );
     const data = await response.json();
     console.log(data)
     setPerson(data);
    };

  useEffect(() => {
      fetchGet()
  }, []);



  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
              target='_blank'
            >
              Template Documentation
            </CardLink>{' '}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default Home
