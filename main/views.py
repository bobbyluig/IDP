from django.shortcuts import render
from django.views.decorators.cache import cache_page
from main.contact import contact as send_message
from django.http import HttpResponse
import json

def home(request):
	if 'upgrade' not in request.session:
		upgrade = True
		print('hi')
		request.session['upgrade'] = False
	else:
		upgrade = False
		
	return render(request, 'home.html', {'footer': False, 'upgrade': upgrade})

@cache_page(60 * 15)	
def exhibitions(request):
	return render(request, 'exhibitions.html', {'footer': True})

@cache_page(60 * 15)
def learn(request):
	return render(request, 'learn.html', {'footer': True})
	
@cache_page(60 * 15)
def visit(request):
	return render(request, 'visit.html', {'footer': True})
	
@cache_page(60 * 15)
def gallery(request):
	return render(request, 'gallery.html', {'footer': True})
	
@cache_page(60 * 15)
def team(request):
	return render(request, 'team.html', {'footer': True})
	
@cache_page(60 * 15)
def faq(request):
	return render(request, 'faq.html', {'footer': True})
	
@cache_page(60 * 15)
def contact(request):
	return render(request, 'contact.html', {'footer': True})
	
@cache_page(60 * 15)
def resources(request):
	return render(request, 'resources.html', {'footer': True})
	
def contact_api(request):
	response = send_message(request)
	return HttpResponse(json.dumps(response), content_type='application/json')