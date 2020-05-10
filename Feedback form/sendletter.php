<?php 

    header('Content-Type: text/html; charset= utf-8');
    setlocale(LC_ALL, 'Russian_Russia.65001');

    require_once ('config_mail.php');

    // если нажата кнопка "отправить сообщение"
    if (isset ($_POST['send']))
    {
        $sender = $_POST['sender'];
        $email = $_POST['email'];
        $text = $_POST['text'];


        $ip=$_SERVER['REMOTE_ADDR'];
        if(!empty($_SERVER['HTTP_CLIENT_IP']))
        {
          $ip=$_SERVER['HTTP_CLIENT_IP'];
        }
        elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
        {
          $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        else
        {
          $ip=$_SERVER['REMOTE_ADDR'];
        }
        $ip=filter_var($ip,FILTER_VALIDATE_IP);

        $ip_track="(IP: ".$ip."[".$_SERVER['HTTP_USER_AGENT']."])";

        // если хотя бы одно из обязательных полей не заполнено
        if ((empty($_POST['sender'])) OR (empty($_POST['email'])) OR (empty($_POST['text'])))
        {
            // выводим сообщение о том, что не все поля заполнены
            echo $warning;              
        }
        // если все поля заполнены
        else
        {   
          // если нажата капча
          if(isset($_POST['g-recaptcha-response']))
          {
              //проверяем капчу и переходим к отправке письма
              $url_to_google_api = "https://www.google.com/recaptcha/api/siteverify";
              $secret_key = 'addSecretKeyHere';
              $query = $url_to_google_api . '?secret=' . $secret_key . '&response=' . $_POST['g-recaptcha-response'] . '&remoteip=' . $_SERVER['REMOTE_ADDR'];
              $data = json_decode(file_get_contents($query));
              //если  капча пройдена успешно
              if ($data->success) 
              {
                 $sender = stripslashes(htmlspecialchars($sender));
                 $email = stripslashes(htmlspecialchars($email));
                 $text = stripslashes(htmlspecialchars($text));

                 // если введенный email-адрес не подходит по формату
                 if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                 {   
                    // выводим предупреждающее сообщение и останавливаем скрипт
                    echo $email_warning;
                    exit();
                 }

                 $message = "Пишет: $sender\nE-mail: $email\nIP: $ip_track\n\nСообщение:\n$text";
                 $headers= "Content-type:text/plain;charset = utf-8\r\n";
                 $headers .= "From: \r\n";
           
                  // если сообщение было отправлено успешно
                 if (mail ($mymail, $topic, $message, $headers))
                 {   
                    // перенаправляем на заданную в настройках страницу
                    echo "<meta http-equiv='Refresh' content='0.5; url=$url'>";  
                    // Выводим сообщение об успешной отправке и останавливаем скрипт
                    echo $success;
    	              exit(); 
                 }
                 // если сообщение не было отправлено
                 else
                 {
                    echo "<meta http-equiv='Refresh' content='0.5; url=$url'>"; 
                    echo $fail;
                    exit();
                 } 
              } 
              //если же капча пройдена неправильно, выводим сообщение об ошибке
              else 
              {
     		         echo "<meta http-equiv='Refresh' content='0.5; url=$url'>"; 
    	           echo $robot;
                exit();
              }
          } 
          //если капча была проигнорирована, выводим напоминание и останавливаем скрипт
          else
          {
    	       exit('Вы не прошли валидацию reCaptcha');
          }      
        }     
    }

    // если не нажата кнопка "отправить сообщение"
    else
    {
        // выводим предупреждающее сообщение о попытке прямого доступа к обработчику
        echo $direct_access;    
    }
?>
