<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title>Klasse Digitale Grafik Reel</title>

	<?= css('style.css') ?>

	<script>
		window.siteData = <?= json_encode( $data ); ?>;
  </script>
</head>
<body>

	<div id="landingpage">
	  <div class="logo">
	    <img id="logo" src="theme/img/klassegrafik.svg">
	    <img id="meme1" src="theme/img/meme1.png">
	  </div>

	  <img id="hdgdl" src="theme/img/hdgdl.svg">
	  <img id="xoxo" src="theme/img/xoxo.svg">
	  <img id="wolke" src="theme/img/wolke.png">
	  <img id="wolke2" src="theme/img/wolke2.png">
	  <img id="wolke3" src="theme/img/wolke3.png">

	  <img id="meme2" src="theme/img/meme2.png">

	  <div class="text">
	    <h1> Klasse Digitale Grafik recaps 2020 with a collection <br>of 30s digital comments.</h1>
	  </div>
	</div>

	<iframe src="" frameBorder="0" class="hidden"></iframe>
	<div id="timebar" class="hidden">
		<div id="bg"></div>
		<div id="progress"></div>
	</div>

	<?= js('main.js') ?>
</body>
</html>
