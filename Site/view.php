<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Ude & Hjemme - Overview</title>

    <link rel="stylesheet" href="https://use.typekit.net/rqd1wpk.css">
    <link rel="stylesheet" href="css.css">
    <link rel="stylesheet" href="table.css">

    <style media="screen">
    html {
      margin-top: 50px;
    }
    </style>
  </head>

  <body>
    <center>
      <h1>Overview</h1>
      <table>
        <tr>
          <th>
            <table class="overview_big">
              <tr class="overview_header">
                <th>ID</th>
                <th>Destination</th>
                <th>Hotel</th>
                <th>Category</th>
                <th>Activities</th>
                <th>Date</th>
                <th>Price</th>
                <th>Spaces</th>
              </tr>
              <tr class="overview_content">
                <?php //getData(); ?>
              </tr>
            </table>
          </th>
        </tr>

        <tr>
          <td colspan="4">
            <form action="add.php">
              <input type="submit" value="Add Data" class="button">
            </form>
          </td>
          <td colspan="4">
            <form action="index.php">
              <input type="submit" value="Close Database" class="button">
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
