<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h4>Hello</h4>

	<table width="100%" border="1" class="table table-bordered">
		<thead class="table-dark">
			<th>Sl</th>
			<th>Name</th>
			<th>Email</th>
			<th>Description</th>
			<th>Image</th>
		</thead>
		<tbody>
			{{-- @foreach($data as $key=>$value)
				<tr>
					<td>{{ $key }}</td>
					<td>{{ $value->username }}</td>
					<td>{{$value->email}}</td>
					<td>{{$value->description}}</td>
					<td><img src="{{ asset('/image/'.$value->image) }}" style="height:80px; width: auto;" alt=""></td>
				</tr>
			@endforeach --}}
		</tbody>
	</table>

</body>
</html>