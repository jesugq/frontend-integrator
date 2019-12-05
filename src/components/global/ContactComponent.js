import React from 'react';

const ContactComponent = () => {
    return(
        <body>
		    <div class="container">
			    <div class="row align-items-center justify-content-between">
				    <div class="col-lg-6 col-md-6 home-about-left"> 
						<div class="col-lg-5 col-md-6 home-about-right">
                            <h7 class="text-uppercase" align="center"><b>-</b></h7>
							<h3 class="text-uppercase" align="center"><b>Contáctanos</b></h3>  

                            <form action="/my-handling-form-page" method="post">
                                <div>
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" id="name" name="user_name" />
                                </div>
                                <div>
                                    <label for="correo">E-mail:</label>
                                    <input type="email" id="mail" name="user_mail" />
                                </div>
                                <div>
                                    <label for="com">Comentario:</label>
                                    <textarea id="com" name="user_message"></textarea>
                                </div>
                                <div class="button">
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>     
						</div>
				    </div>	
			    </div>
            </div>
        </body>






    );
}

export default ContactComponent;