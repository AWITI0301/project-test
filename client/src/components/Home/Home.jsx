import React from 'react'

function Home() {
  return (
    <div className='container'>
      <div className='row'>
     
          <div
            className="bg-image hover-overlay ripple"
            style={{backgroundImage: "url('https://www.thoughtco.com/thmb/TCFXTqf8HO5k1XwR7UjqWiGnygI=/3000x1868/filters:fill(auto,1)/womangraduating-57471d735f9b58723d59fe16.jpg')", 
            height: '100vh', backgroundSize:'cover'}}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div className="h-100">
              <h1 style={{fontWeight:'bold', fontFamily:'cursive', color:'white', fontSize:'50px', marginTop:'170px', display:'inherit', marginLeft:'700px'}}> <p>OUR MANAGEMENT</p>SYSTEM</h1>
              <div style={{fontWeight:'normal', fontFamily:'cursive', color:'white', fontSize:'20px', marginTop:'17px', display:'inherit', marginLeft:'700px'}} className='paragraph'>
              <p>Combining a single core database and suite of portals and apps </p>
              <p>for parents, students and staff. A module-based approach allows</p>
              <p>your school to build a system to grow to your exact needs. From<p> 
                </p> new student admissions to end-of-year exams and assessments.</p>
              </div>
              </div>
            </div>
          </div>
          <div>
          <div style={{backgroundColor:'#0B0B45'}} className="row row-cols-1 row-cols-md-3 g-4">
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">ABOUT US</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Founder Ali Mariam</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">OUR MOTTO</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Principal Alias Leighton</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">CONTACT US</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Faculty ABDCEFG</small>
            </div>
          </div>
        </div>
      </div>
          
          </div>

      </div>

    </div>
  )
}

export default Home