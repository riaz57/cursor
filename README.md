# cursor

// Step 1

Open terminal or command prompt and type this command for creating a file which is using Mailable.
php artisan make:mail nameOfFile

// Step 2

open .env file and configure it with appropriate credentials.

MAIL_DRIVER=smtp
MAIL_HOST=mailhost
MAIL_PORT=port
MAIL_USERNAME=email
MAIL_PASSWORD=mailPassword
MAIL_ENCRYPTION=ssl or tls

// Step 3

Create a blade file and Open that Mailable file from App\Mail directory.
Create a variable, Create a constractrator function and pass that variable data through function parameter.

public $data;

public function __construct($data)
{
	$this->data=$data;
}

Within build function, Use the MAIL_USERNAME in from() method and link the blade file in view() method.

return $this->from('dhaka_billing@mitalibd.com', 'Cursor')->view('mail.send_mail')->with('data', $this->data);

// Step 4

Create a function in controller. Use Mail facade and its methods and send data as a parameter.
create a instance of Mailable class in send() method and pass form data to Mailable file with parameter.

$data = $request->all();
Mail::to('riaztest57@gmail.com')->send(new SendMail($data));

// Step 5

Use the received data for view.

Hey there!
Name is {{ $data['name'] }}<br/>
Email is {{ $data['email'] }}<br/>
Description is {{ $data['description'] }}<br/>
Thanks
