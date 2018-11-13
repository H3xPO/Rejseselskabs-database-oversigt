<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Ude & Hjemme - Login</title>
    <link rel="stylesheet" href="https://use.typekit.net/rqd1wpk.css">
    <link rel="stylesheet" href="css.css">

    <style>
      html {
        margin-top: 295px;
      }
      th {
       text-align: left;
      }

      td {
        text-align: center;
      }
    </style>
  </head>

  <body>
    <center>
      <table>

        <tr>
          <th>
            <div class="input_text">
              Login
            </div>
          </th>
        </tr>

        <form name="loginform" onSubmit="return loginOnePW();" action="view.php" method="post">
          <tr>
            <td><input type="password" name="pword" placeholder="Password" class="input_field"></td>
          </tr>
          <tr>
            <td><input type="submit" value="Acces Database" class="button"/></td>
          </tr>
        </form>

      </table>
    </center>
  </body>

  <script>
    function loginOnePW() {
      var pw = document.forms["loginform"]["pword"].value;
      var password = "rejs";
      if (pw == password) {
        window.location = "view.php";
        return false;
      }
      else {
        alert ("Acces denied, try again!")
        return false
      }
    }
  </script>

</html>
