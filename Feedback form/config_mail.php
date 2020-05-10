<?php 

	header("Content-Type: text/html; charset=utf-8");

	//Адрес, на который будут приходить письма 
	$mymail .= "Admin <admin@admin.ru>";

	//Тема письма 
	$topic = "Обратная связь";
	//чтобы тема отображалась корректно:
	$topic = "=?utf-8?B?".base64_encode($topic)."?=";

	// Адрес страницы, на которую произойдет переход после успешной отправки письма
	$url = 'http://dmsh.snzadm.ru';

	//Сообщение о том, что не была пройдена капча
	$robot = '<div style = "width: 400px; 
							margin: 0 auto; 
							font-family: Verdana, Arial, Helvetica, sans-serif; 
							border-radius: 9px; 
							-moz-border-radius: 9px; 
							background: #FFFFFF; 
							padding-left: 12px; 
							padding-right: 12px; 
							border: 1px solid #DFDFDF; 
							color: #000000; 
							text-align: center">
					<h2 style = "font-size: 16px; color: #ff0000">Тест CAPTCHA пройден с ошибкой! Возможно, Вы робот?</h2>
			</div>';

	// Сообщение о том, что должны быть заполнены все поля
	$warning = '<div style = "width: 400px; 
							  margin: 0 auto; 
							  font-family: Verdana, Arial, Helvetica, sans-serif; 
							  border-radius: 9px; 
							  -moz-border-radius: 9px; 
							  background: #FFFFFF;
							  padding-left:12px; 
							  padding-right:12px; 
							  border: 1px solid #DFDFDF; 
							  color: #000000; 
							  text-align:center">
					<h2 style = "font-size: 16px; color: #000000">Для отправки сообщения нужно заполнить все поля.</h2>
					<p style = "font-size: 14px">
						<a href = "javascript:history.back();">Вернуться назад</a>
					</p>
				</div>';

	// Сообщение о том, что некорректно введен e-mail
	$email_warning = '<div style = "width: 400px; 
									margin: 0 auto; 
									font-family: Verdana, Arial, Helvetica, sans-serif; 
									border-radius: 9px; 
									-moz-border-radius: 9px; 
									background: #FFFFFF;
									padding-left: 12px; 
									padding-right: 12px; 
									border: 1px solid #DFDFDF; 
									color: #000000; 
									text-align: center">
						<h2 style = "font-size: 16px; color: #000000">Некорректно введен email-адрес!</h2>
						<p style = "font-size:14px">
							<a href = "javascript:history.back();">Вернуться назад</a>
						</p>
					</div>';

	// Сообщение о том, что письмо было успешно отправлено
	$success = '<div style = "width: 400px; 
							  margin: 0 auto; 
							  font-family: Verdana, Arial, Helvetica, sans-serif; 
							  border-radius: 9px; 
							  -moz-border-radius: 9px; 
							  background: #FFFFFF;
							  padding-left: 12px; 
							  padding-right: 12px; 
							  border: 1px solid #DFDFDF; 
							  color: #000000; 
							  text-align: center">
					<h2 style = "font-size: 16px; color: #00BF00">Письмо успешно отправлено!</h2>
				</div>';

	// Сообщение об ошибке отправки письма
	$fail = '<div style = "width: 400px; 
						  margin: 0 auto; 
						  font-family: Verdana, Arial, Helvetica, sans-serif; 
						  border-radius: 9px; 
						  -moz-border-radius: 9px; 
						  background: #FFFFFF;
						  padding-left: 12px; 
						  padding-right: 12px; 
						  border: 1px solid #DFDFDF; 
						  color: #000000; 
						  text-align:center">
				<h2 style = "font-size: 16px; color: #000000">Сообщение не было отправлено. Пожалуйста, сообщите об этом администратору</h2>
			</div>';

?>