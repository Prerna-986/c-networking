export default function Register()
{
  return <>
       <div class="glasses">
         <div class="container">
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="titlepage">
                     <h2>Customer Login</h2>                   
                  </div>
               </div>
            </div>

            <div class="row mt-3">
               <div className="col-lg-3 col-lg-3"/>
               <div className="col-lg-6 col-lg-6">
                  <input type="email" className="form-control" placeholder="Login Email" required/>
               </div>
               <div className="col-lg-3 col-lg-3"/>
            </div>
            <div class="row mt-3">
               <div className="col-lg-3 col-lg-3"/>
               <div className="col-lg-6 col-lg-6">
                  <input type="password" className="form-control" placeholder="Login Password" required/>
               </div>
               <div className="col-lg-3 col-lg-3"/>
            </div>
            <div class="row mt-3">
               <div className="col-lg-3 col-lg-3"/>
               <div className="col-lg-6 col-lg-6">
                  <button className="btn btn-info">Login</button>
               </div>
               <div className="col-lg-3 col-lg-3"/>
            </div>
         </div>
      </div>     
  </>
}