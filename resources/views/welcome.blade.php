<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Links Adicionais -->
    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('assets/img/favicon.ico')}}">

    <!-- CSS here -->
	<link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/slicknav.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/flaticon.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/animate.min.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/fontawesome-all.min.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/themify-icons.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/slick.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/nice-select.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/style.css')}}">


    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Fabio Nogueira</title>

<!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>
<body>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>