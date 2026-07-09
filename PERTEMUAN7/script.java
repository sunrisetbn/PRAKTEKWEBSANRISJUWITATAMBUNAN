<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript</title>
  </head>
  <body>
    <h1>Belajar JavaScript</h1>
    <script>
      var angka1 = prompt("Angka 1 ?", 0);
      var angka2 = prompt("Angka 2 ?", 0);
      var teks = "";

      angka1 = parseInt(angka1);
      angka2 = parseInt(angka2);

      if (angka2 < angka1) {
        for (let i = angka1; i >= angka2; i--) {
          teks += i + "<br>";
        }
      } else {
        for (let i = angka1; i <= angka2; i++) {
          teks += i + "<br>";
        }
      }

      document.write("<p>" + teks + "</p>");
    </script>
  </body>
</html>
