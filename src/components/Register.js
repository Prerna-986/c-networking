export default function Register()
{
  return <>
       <div class="glasses">
         <div class="container">
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="titlepage">
                     <h2>Customer Registeration</h2>                   
                  </div>
               </div>
            </div>

            <div class="row mt-3">
               <div className="col-lg-1 col-lg-1"/>
               <div className="col-lg-5 col-lg-5">
                  <input type="text" className="form-control" placeholder="User Name" required/>
               </div>
               <div className="col-lg-5 col-lg-5">
                  <input type="text" className="form-control" placeholder="User Phone" required/>
               </div>
               <div className="col-lg-1 col-lg-1"/>
            </div>
            <div class="row mt-3">
               <div className="col-lg-1 col-lg-1"/>
               <div className="col-lg-5 col-lg-5">
                  <input type="email" className="form-control" placeholder="User Email" required/>
               </div>
               <div className="col-lg-5 col-lg-5">
                  <input type="password" className="form-control" placeholder="User Password" required/>
               </div>
               <div className="col-lg-1 col-lg-1"/>
            </div>

            <div class="row mt-3">
               <div className="col-lg-3 col-lg-3"/>
               <div className="col-lg-6 col-lg-6">
                  <button className="btn btn-info">Register</button>
               </div>
               <div className="col-lg-3 col-lg-3"/>
            </div>
         </div>
      </div>     
  </>
}