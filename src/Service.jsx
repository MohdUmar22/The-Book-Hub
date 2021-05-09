import React from 'react';
import web from "../src/images/home.jpeg";



const Service = () => {
    return (
<>
        <div className="my-5">
            <h1 className= "text-center"> Our Products </h1>
        </div>
        <div className= "container-fluid mb-5">
       <div className= "row">
      <div className= "col-10 mx-auto">
          <div className= "row gy-4">
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian Society</h5>
    <p class="card-text">
        The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>

       
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian Art and Culture</h5>
    <p class="card-text">
    The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>

          
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian Economy</h5>
    <p class="card-text">
    The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>


          

              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian Polity</h5>
    <p class="card-text">
    The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>


         
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian Geography</h5>
    <p class="card-text">
    The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>


  
              <div className="col-md-4 col-10 mx-auto">
              <div class="card">
  <img src={web} class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Indian History</h5>
    <p class="card-text">
    The Book comes with hardcover including various stats and diagrams.
        </p>
    <a href="/Contact" class="btn btn-primary">
        BUY NOW
        </a>
  </div>
</div>
              </div>
              </div>
</div>
              </div>
              </div>




</>

    );

};
export default Service;