import React from "react";
import image from "./images/overflow.png"
function App() {
  return(
    <div>
  <div style={{display:"flex"}}>
    <img style={{}} src={image} />
    <div style={{fontWeight:"inherit",display:"flex"}}>
    <h2>
    Support & Feedback
   
    <h5 style={{fontWeight:"inherit",fontSize:15,color:"gray"}}>
 
    If you need help, contact us . To share product feedback on 
      our products, please visit our community here .
    </h5>
   
    <textarea placeholder="Full Name" style={{borderRadius:5}}>

   
</textarea>

  <br/>
  <br/>
  < textarea placeholder="E-mail" style={{borderRadius:5}}></textarea>
 
  <br/>
  <br/>
  <textarea placeholder="Message" style={{borderRadius:5}}></textarea>
  <br/>
  <br/>
  <textarea placeholder="PhoneNumber" style={{borderRadius:5}}></textarea>
  <br/>
  <br/>
  <input style={{padding:5,paddingInline:50,borderRadius:15,marginLeft:20,backgroundColor:"black",color:"white"}} type="submit" value="Submit" />
  <hr style={{width:"50%",}}/>

    </h2>
    
  
   
    </div>
 
   
  </div>
  <h1>
  Our products & services

  </h1>
  
  <div style={{display:"flex",justifyContent:"space-around",marginLeft:50,marginRight:0}}>
    <h1 style={{color:"#3F8FD6"}}>Teams</h1>
    <p style={{marginLeft:30,fontWeight:"initial",color:"gray",fontSize:16}}>
    A private, secure home for your team’s questions and answers. Perfect for teams of 10-500 members. No more digging through stale wikis and lost emails your team back the time it needs to build better products.
    </p>
    <h1 style={{color:"#3F8FD6",marginLeft:10}}> organization?</h1>
    <p style={{marginLeft:30,fontWeight:"initial",marginRight:30,color:"gray",fontSize:16}}>
Stack Overflow Enterprise is a private, secure home for your organization’s questions and answers. Empower your teams to find and share information without disrupting their workflows.
    
    </p></div>
    <div style={{display:"flex",justifyContent:"space-around",marginLeft:50,marginRight:0}}>
    <h1 style={{color:"#3F8FD6"}}>Talent</h1>
    <p style={{marginLeft:30,fontWeight:"initial",color:"gray",fontSize:16}}>
    A private, secure home for your team’s questions and answers. Perfect for teams of 10-500 members. No more digging through stale wikis and lost emails your team back the time it needs to build better products.
    </p>
    <h1 style={{color:"#3F8FD6"}}>Advertising</h1>
    <p style={{marginLeft:30,fontWeight:"initial",marginRight:30,color:"gray",fontSize:16}}>
Stack Overflow Enterprise is a private, secure home for your organization’s questions and answers. Empower your teams to find and share information without disrupting their workflows.
    
    </p></div>
    <div style={{display:"flex"}}>
    <h5  >
     us +1(212)232-8294
    
    </h5>
    <h5 style={{marginLeft:5,color:"gray"}}>
    9am–5pm U.S. Eastern Time
     </h5>
    </div>
    <div style={{display:"flex",marginBottom:50}}>
    <h5  >
    UK +44 800 048 8989 
    
    </h5>
    <h5 style={{marginLeft:5,color:"gray",}}>
    9am–5pm GMT/BST
     </h5>
    </div>
  </div>
  )
}

export default App;