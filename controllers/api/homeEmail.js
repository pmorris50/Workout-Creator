const router = require("express").Router();

router.post('/', async (req, res) => {
    console.log(req.body)
    const output = 
`<p>You have a new contact request</p>
    <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
        </ul>
    <p>Message: ${req.body.message}</p>    
        `
    
})






module.exports = router