import React from "react";
import { Container } from "react-bootstrap";


function Form () {

    return (
    <Container>
        <div class="row mx-5 my-5">
          <div class="text-box">
            <h3 className="text-form">НАШИ КОНТАКТЫ</h3>
          </div>
          <div class="col-lg-4 mt-5"> 
            <div class="info">
              <div class="adress">
                <div class="info-icon mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewbox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </div>
                <div class="info-text mt-3">
                  <p>Москва, Бауманская 8, стр. 5 </p>
                </div>
              </div>
          
              <div class="email">
                <div class="info-icon mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewbox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                  </svg>
                </div>
                <div class="info-text mt-3">
                  <p>Makaroon@gmail.com</p>
                </div>
              </div>
              <div class="phone">
                <div class="info-icon mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewbox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
                <div class="info-text mt-3">
                  <p>6293550107</p>
              </div>
            </div>
          </div>
        </div>
  
  
        <div class="col-lg-8">
          <div class="forma-text-box d-flex justify-content-center mt-5">
            <p className="text-form">Заполните форму, и мы оперативно с вами свяжемся</p>
          </div>
          <form action="#">
            <div class="row">
              <div className="" class="col-lg-6">
                <div class="form group">
                  <input type="text" placeholder="Имя" class="form-control mt-1" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form group">
                  <input type="text" placeholder="Фамилия" class="form-control mt-1" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form group">
                  <input type="email" placeholder="Email" class="form-control mt-3" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form group">
                  <input type="number" placeholder="Tel" class="form-control mt-3" required />
                </div>
              </div>
              <div class="col-12">
                <textarea placeholder="Текст" class="form-control mt-3" id="forma" cols="30" rows="10"/>
                <button class="btn btn-lg btn-outline mt-3" id="btn">Отправить</button>
              </div>
            </div> 
          </form>
        </div>
        </div>
      </Container>
    
    )
   
   }
       
   export default Form;