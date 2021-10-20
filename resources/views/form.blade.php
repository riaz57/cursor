<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Document</title>
</head>
<body>
	<h3 class="text-center">Send me a mail</h3>
	<div style="max-width: 600px; margin: 30px auto">
		<form action="{{ route('create') }}" method="post" enctype="multipart/form-data">
			@csrf
			<div class="my-2">
				<input type="text" name="name" class="form-control" placeholder="name">
			</div>
			<div class="my-2">
				<input type="email" name="email" class="form-control" placeholder="email">
			</div>
			<div class="my-2">
				<input type="text" name="description" class="form-control" placeholder="description">
			</div>
			<div class="my-2">
				<button type="submit" class="btn btn-secondary">Submit</button>
			</div>
		</form>
	</div>

</body>
</html>