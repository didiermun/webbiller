export default process.env.NODE_ENV === 'production'? 'https://billers-api.herokuapp.com/': 
'http://localhost:6000'