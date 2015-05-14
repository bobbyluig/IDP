from django.conf import settings
from django.core.mail import send_mail
from django import forms
from time import gmtime, strftime

def contact(request):
	if (request.method != 'POST') or not all(x in request.POST for x in ['name', 'message', 'email']):
		return {'success': False, 'message': 'No direct calls allowed.'}
		
	f = forms.EmailField()
	
	name = request.POST['name']
	message = request.POST['message']
		
	try:
		email = f.clean(request.POST['email'])
	except:
		email = False
		
	if len(message) < 1:
		response = {'success': False, 'message': 'You must have a message!'}
	elif len(name) < 1:
		response = {'success': False, 'message': 'Please enter your name!'}
	elif not email:
		response = {'success': False, 'message': 'Please enter a valid email!'}
	else:
		time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
		mail_message = 'Dear maintainer,\n\nThe following message was sent by %s on %s.\n\n"%s"\n\nPlease respond to his/her email: %s.' % (name, time, message, email)
		
		# Debug purposes
		return {'success': False, 'message': 'Your message was not sent. Please try again later.'}
		
		try:
			send_mail('Contact Us', mail_message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER], fail_silently=False)
			response = {'success': True, 'message': 'Your messsage has been sent successfully!'}
		except:
			response = {'success': False, 'message': 'Your message was not sent. Please try again later.'}
		
	return response